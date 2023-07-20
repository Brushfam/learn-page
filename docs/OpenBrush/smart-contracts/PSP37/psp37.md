---
sidebar_position: 1
title: PSP37
---

This example shows how you can reuse the implementation of [PSP37](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/token/psp37)
token. Also, this example shows how you can customize the logic, for example, to
track the number of token types with `unique_ids`, adding a new token type with the `add_type` function.

## Step 1: Import default implementation

With [default `Cargo.toml`](../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `psp37` feature, embed modules data structures and implement them via `#[openbrush::implementation]` macro
as described in [that section](../overview.md/#reuse-implementation-of-traits-from-openbrush).

The main trait is `PSP37`.

## Step 2: Define constructor

Define empty constructor.

```rust
impl Contract {
    #[ink(constructor)]
    pub fn new() -> Self {
        Self::default()
    }
}
```

## Step 3: Customize your contract

Customize it by adding logic for denying of minting some tokens.
We can deny minting of token with id by `deny` function.
Id will be added to `denied_ids` map.
If someone tries to mint token with denied id, we will reject transaction.

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(PSP37)]
#[openbrush::contract]
pub mod my_psp37 {
    use ink::prelude::vec;
    use openbrush::{
        storage::Mapping,
        traits::{
            Storage,
            String,
        },
    };

    #[derive(Default, Storage)]
    #[ink(storage)]
    pub struct Contract {
        #[storage_field]
        psp37: psp37::Data,
        denied_ids: Mapping<Id, ()>,
    }

    impl Contract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        #[ink(message)]
        pub fn deny(&mut self, id: Id) {
            self.denied_ids.insert(&id, &());
        }

        #[ink(message)]
        pub fn mint_tokens(&mut self, id: Id, amount: Balance) -> Result<(), PSP37Error> {
            if self.denied_ids.get(&id).is_some() {
                return Err(PSP37Error::Custom(String::from("Id is denied")))
            }
            psp37::Internal::_mint_to(self, Self::env().caller(), vec![(id, amount)])
        }
    }
}
```
You can check an example of the usage of [PSP37](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp37).

Also you can use extensions for PSP37 token:

[PSP37Metadata](Extensions/metadata.md): metadata for PSP37.

[PSP37Mintable](Extensions/mintable.md): creation of new tokens.

[PSP37Burnable](Extensions/burnable.md): destruction of contract's tokens.

[PSP37Batch](Extensions/batch.md): transfer batch of tokens.

[PSP37Enumerable](Extensions/enumerable.md): iterates over contract's tokens.