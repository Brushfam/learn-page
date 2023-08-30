---
sidebar_position: 3
title: PSP22 Permit
---

This extension allows the user to approve a third-party to spend some tokens on their behalf by ECDSA signature.

This example shows how you can reuse the implementation of
[PSP22](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/token/psp22) token with [PSP22Permit](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/token/psp22/extensions/permit.rs) extension.

## How to use this extension

First, you should implement basic version of [PSP22](../psp22.md).

After you should add implementation of PSP22Permit and Nonces via `#[openbrush::implementation(...,PSP22Permit, Nonces,...)]` attribute.

Also, add a storage field of type `nonces::Data` , which stores the number of nonces for each account, and a storage field of type `permit::Data`,
which stores the permit data.

## Final code

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

pub use crate::my_psp22_permit::*;

#[openbrush::implementation(PSP22, PSP22Permit, Nonces)]
#[openbrush::contract]
pub mod my_psp22_permit {
    use openbrush::traits::Storage;

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        psp22: psp22::Data,
        #[storage_field]
        nonces: nonces::Data,
        #[storage_field]
        psp22_permit: permit::Data,
    }

    impl Contract {
        #[ink(constructor)]
        pub fn new(total_supply: Balance) -> Self {
            let mut instance = Self::default();

            psp22::Internal::_mint_to(&mut instance, Self::env().caller(), total_supply).expect("Should mint");

            instance
        }
    }
}
```

And that's it! Your `PSP22` is now extended by the `PSP22Permit` extension and ready to use its functions!
You can check an example of the usage of [PSP22 Permit](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp22_extensions/permit).