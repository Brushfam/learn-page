---
sidebar_position: 1
slug: /smart-contract-openbrush
title: Creating smart contract using OpenBrush
sidebar_label: Creating smart contract using OpenBrush
---

# Create your first smart contract using OpenBrush

In this tutorial, we will explain how to create your first dApp using OpenBrush.

As a base, we will take a few implementations from OpenBrush: PSP22, PSP22Metadata and Ownable extensions.

So, let’s start!

## Contract’s base

First of all, we will create a base for our future contract. Every contract needs to have a module marked as `#[ink::contract]`, struct marked as `#[ink(storage)]`, constructor (
`#[ink(constructor)]`) and at least one message (`#[ink(message)]`).
So, first, let’s take a basic smart contract implementation from ink!:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
pub mod my_contract {
    #[ink(storage)]
    #[derive(Default)]
    pub struct Contract {}

    impl Contract { 
        #[ink(constructor)]
        pub fn new() -> Self {
          Default::default()
        }

        #[ink(message)]
        pub fn get_true(&self) -> bool {
          true
        }
    }
}
```

Here we have an empty contract’s storage, constructor and a message, that will just return true every time you call it.

Pretty simple for now, right?

## Import OpenBrush

Here we will have two steps: adding the OpenBrush dependency to `Cargo.toml` of your contract and injecting it into your contract’s code. 
So, to add a dependency, you need to check the latest version of OpenBrush that is compatible with your version of ink! You can find it here. 
At the time this tutorial is written, the latest release is `3.1.0` and the latest version of ink! is `4.2.0`.

Let’s get to the `Cargo.toml`, all you need to do is to add a line like this:
```toml
openbrush = { tag = "3.1.0", git = "https://github.com/Brushfam/openbrush-contracts", default-features = false }
```

And that’s it! Now you have OpenBrush version `3.1.0` imported.
Now, we want to have it injected in contract’s code.
In general, it will look like this:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod my_contract {
    #[ink(storage)]
    #[derive(Default)]
    pub struct Contract {}

    impl Contract { 
        #[ink(constructor)]
        pub fn new() -> Self {
            Default::default()
        }

        #[ink(message)]
        pub fn get_true(&self) -> bool {
          true
        }
    }
}
```

As you may notice, we added line `#![feature(min_specialization)]`, which allows you to use OpenBrush default implementations, 
but this feature is unstable, so you will need to run everything with nightly toolchain. Another thing that is different 
from default ink! contract is `#[openbrush::contract]` macro. It allows you to work with OpenBrush traits as they are just Rust traits, which is not true for ink! traits for now.

## Import PSP22 and Ownable

To use OpenBrush default implementations, you need to import features in your `Cargo.toml`:

```toml
openbrush = { tag = "3.1.0", git = "https://github.com/Brushfam/openbrush-contracts", default-features = false, features = ["psp22", "ownable"] }
```

Now, the code of your contract with already working PSP22, PSP22 Metadata and Ownable will look:

```rust
#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod my_contract {
    use openbrush::{
        contracts::{ownable::*, psp22::extensions::metadata::*},
        traits::{DefaultEnv, Storage, String},
    };

    #[ink(storage)]
    #[derive(Storage, Default)]
    pub struct Contract {
        #[storage_field]
        psp22: psp22::Data,
        #[storage_field]
        metadata: metadata::Data,
        #[storage_field]
        ownable: ownable::Data,
    }

    impl PSP22 for Contract {}

    impl PSP22Metadata for Contract {}

    impl Ownable for Contract {}

    impl Contract {
        #[ink(constructor)]
        pub fn new(
            total_supply: Balance,
            name: Option<String>,
            symbol: Option<String>,
            decimals: u8,
        ) -> Self {
            let mut instance: Self = Default::default();

            instance
                ._mint_to(Self::env().caller(), total_supply)
                .expect("Should mint");

            instance._init_with_owner(Self::env().caller());

            instance.metadata.name = name;
            instance.metadata.symbol = symbol;
            instance.metadata.decimals = decimals;

            instance
        }
    }
}
```

So what changed? Let’s see.

- We added imports of required features:
    ```rust
    use openbrush::{
    contracts::{ownable::*, psp22::extensions::metadata::*},
    traits::{DefaultEnv, Storage, String},
    };
  ```
    `ownable::*` imports required traits and data structs for ownable feature, and `psp22::extensions::metadata` imports both metadata extension and basic PSP22 data.
    Other imports are required for a bit other purposes.


- Update the storage struct with the required data:
    ```rust
    #[ink(storage)]
    #[derive(Storage)]
    pub struct Contract {
    #[storage_field]
    psp22: psp22::Data,
    #[storage_field]
    metadata: metadata::Data,
    #[storage_field]
    ownable: ownable::Data,
    }
    ```
    You can see, that we have added derive for Storage trait. It allows OpenBrush to work with all the data you imported 
    inside OpenBrush implementations. We also marked every such field as `#[storage_field]`. It will generate 
    implementation of Storage trait for storage and every marked field, so you will be able to access data like 
    `self.data::<psp22::Data>()` and it will actually return the required field with data you want.


- Add impl sections for default trait implementations:
    ```rust
    impl PSP22 for Contract {}

    impl PSP22Metadata for Contract {}

    impl Ownable for Contract {}
   ```
   In this section you implement default implementations of these traits. You can also customize them, but we will explain this later.
 
- Update constructor:
    ```rust
  #[ink(constructor)]
    pub fn new(
    total_supply: Balance,
    name: Option<String>,
    symbol: Option<String>,
    decimals: u8,
    ) -> Self {
        let mut instance: Self = Default::default();

        instance
            ._mint_to(Self::env().caller(), total_supply)
            .expect("Should mint");
    
        instance._init_with_owner(Self::env().caller());
    
        instance.metadata.name = name;
        instance.metadata.symbol = symbol;
        instance.metadata.decimals = decimals;
    
        instance
    }
    ```
  Here we updated constructor to initialize all the required data for PSP22, PSP22Metadata and Ownable. In some traits 
  there already exists default internal initialize function, like `_init_with_owner()`, but for metadata extension you need to do it manually.

So, now you have your basic smart contract, that implements PSP22, PSP22Metadata and Ownable. Let’s customize it!

## Customization

In this section we will show you how you can customize your contract!
You can customize any method in OpenBrush default implementation. It is as simple as that:

```rust
impl psp22::Internal for Contract {
    fn _allowance(&self, owner: &AccountId, spender: &AccountId) -> Balance {
	       self.data::<psp22::Data>()
         .allowances
         .get(&(owner, spender))
         .unwrap_or(10)
	  }
}
```

So, now method `allowance` will be overridden with your implementation, while all other methods will remain the same. 
It is better to override `Internal` traits since all the main traits use them, and it is better to divide such functionality. 
So, `allowance` method from PSP22 is just simply calling `_allowance` from `psp22::Internal`.

**Note**: This is a raw reimplementation, and it is not saying the truth. So consider it as an example and not the way to do it.

Also, we are not use Ownable for now, so let’s create a method that will use it.
In your `impl Contract` section add the following:

```rust
#[ink(message)]
#[modifiers(only_owner)]
pub fn mint(&mut self, to: AccountId, amount: Balance) -> Result<(), PSP22Error> {
    self._mint_to(to, amount)
}
```

Here we added the `mint` method, that can be only called by the owner of the contract. It can be also implemented as a 
part of PSP22Mintable, but we want to show you how to add custom functionality to your contract by yourself.

Now you have your own contract with customized functionality. Let’s go to the next section, where we will be testing it.

## Tests

So, in ink! there are two different types of testing: unit tests and integration. In this tutorial we will describe only 
how to do the unit testing, integration tests are done using ink_e2e testing framework, so for now you can look for 
examples [here](https://github.com/paritytech/ink/tree/master/integration-tests).

First of all, inside your contract’s module you need to create a new one 🙂.

Just like that:

```rust
#[cfg(test)]
mod tests {
		use super::*;
}
```

Let’s add a simple test, that will check if `total_supply` works correctly.

```rust
#[cfg(test)]
mod tests {
		use super::*;

    #[ink::test]
    fn total_supply_works() {
        // Constructor works.
	      let contract = Contract::new(
	          100,
            Some(String::from("MyToken")),
            Some(String::from("MTK")),
            18,
        );
        // Get the token total supply.
        assert_eq!(contract.total_supply(), 100);
	  }
}
```

Here we created a new instance of contract and minted 100 tokens. To check if everything works correctly, just run 
`cargo test` command.

## Deployment

I guess now you would like to interact with your contract somehow. To do this, let’s run a substrate node and deploy contract there. 

- Install contracts-node from [here](https://github.com/paritytech/substrate-contracts-node). You will also find the instruction to run it if you check the link, but shortly, you can just run the following command: `substrate-contracts-node --dev` 

- Build your contract. Run `cargo contract build --release` command and wait until everything will be built.

- Open [contracts UI](https://contracts-ui.substrate.io/) and click on the `Add New Contract` button and `Upload New Contract Code` then.

- Open `target` directory that was generated when you built your contract. You should see ink directory there, open it and 
  drag file called `your_contract_name.contract` to the UI (your_contract_name is just an example😃, it will be called the same name as your cargo project). 

- After that you can click next and see the window, where you can provide initial parameters to constructor of your contract. 
  After doing that, just click `Upload and Instantiate` button and that’s it! You can interact with your contract on-chain.


