---
sidebar_position: 1
title: PSP61
---

This utility allows you to get the list of supported interfaces of your contract or find out if your contract supports a specific interface by id.

This page describes how to use [PSP61](/) in your contract.

## Step 1: Use implementation macro

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `psp61` feature, embed modules data structures and implement them via `#[openbrush::implementation]` macro
as described in [this section](../../overview.md/#reuse-implementation-of-traits-from-openbrush).

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(..., PSP61, ...)]
#[openbrush::contract]
pub mod your_contract {
    ...
}
```

## Step 2: Use supported_interfases macro
If your contract implements only openbrush interfaces, you can use `supported_interfaces` macro to implement `PSP61` interface like that:
```rust
supported_interfaces!(Contract);
```
But if your contract implements other interfaces with ids: ID1, ID2, ... , you need to implement `PSP61` interface manually:
```rust
supported_interfaces!(Contract, ID1, ID2, ...);
```

## Step 3: Example
In this example we will implement `Ownable`, `AccessControl`, `Pausable`, `Upgradeable` interfaces in our contract and then implement `PSP61` interface. 
```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(PSP61, Ownable, AccessControl, Pausable, Upgradeable)]
#[openbrush::contract]
pub mod my_psp61 {
    use ink::prelude::{
        vec,
        vec::Vec,
    };
    use openbrush::{
        contracts::supported_interfaces,
        traits::{
            Storage,
            String,
        },
    };

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        pub ownable: ownable::Data,
        #[storage_field]
        pub access_control: access_control::Data,
        #[storage_field]
        pub pausable: pausable::Data,
    }

    supported_interfaces!(Contract);

    impl Contract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        #[ink(message)]
        pub fn ownable_id(&self) -> u32 {
            ownable::ownable_external::TRAIT_ID
        }

        #[ink(message)]
        pub fn access_control_id(&self) -> u32 {
            access_control::accesscontrol_external::TRAIT_ID
        }

        #[ink(message)]
        pub fn pausable_id(&self) -> u32 {
            pausable::pausable_external::TRAIT_ID
        }

        #[ink(message)]
        pub fn upgradeable_id(&self) -> u32 {
            upgradeable::upgradeable_external::TRAIT_ID
        }

        #[ink(message)]
        pub fn psp61_id(&self) -> u32 {
            psp61::psp61_external::TRAIT_ID
        }

        #[ink(message)]
        pub fn id_batch(&self) -> Vec<(String, u32)> {
            vec![
                (String::from("ownable"), ownable::ownable_external::TRAIT_ID),
                (
                    String::from("access_control"),
                    access_control::accesscontrol_external::TRAIT_ID,
                ),
                (String::from("pausable"), pausable::pausable_external::TRAIT_ID),
                (String::from("upgradeable"), upgradeable::upgradeable_external::TRAIT_ID),
                (String::from("psp61"), psp61::psp61_external::TRAIT_ID),
            ]
        }
    }
}
```

That's it! Now you can use [PSP61](/) in your contract.

You can check an example of the usage of [PSP61](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/utils/psp61).