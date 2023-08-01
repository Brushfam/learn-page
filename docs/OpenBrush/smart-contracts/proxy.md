---
sidebar_position: 3
title: Proxy
---

This example shows how you can use the implementation of [proxy](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/upgradeability/proxy) to to implement proxy pattern for upgradeable contracts.

## Step 1: Import default implementation

With [default `Cargo.toml`](overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable corresponding features, embed modules data structures and implement them via `#[openbrush::implementation]` macro
as described in [that section](overview.md/#reuse-implementation-of-traits-from-openbrush).

The main traits are `Ownable` and `Proxy`.

## Step 2: Define constructor

Define the constructor where you initialize the owner with the contract initiator
and passing code hash of the logic layer.

```rust
impl Contract {
    #[ink(constructor)]
    pub fn new(forward_to: Hash) -> Self {
        let mut instance = Self::default();

        let caller = Self::env().caller();
        instance._init_with_forward_to(forward_to);
        instance._init_with_owner(caller);

        instance
    }
}
```

## Step 3: Define forward function

Define the forward function to make delegate calls of upgradeable contract through proxy contract.

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(Proxy, Ownable)]
#[openbrush::contract]
pub mod proxy {
    use openbrush::traits::Storage;

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        proxy: proxy::Data,
        #[storage_field]
        ownable: ownable::Data,
    }

    impl Contract {
        #[ink(constructor)]
        pub fn new(forward_to: Hash) -> Self {
            let mut instance = Self::default();
            proxy::Internal::_init_with_forward_to(&mut instance, forward_to);
            ownable::Internal::_init_with_owner(&mut instance, Self::env().caller());

            instance
        }
        #[ink(message, payable, selector = _)]
        pub fn forward(&self) {
            proxy::Internal::_fallback(self)
        }
    }
}
```

You can check an example of the usage of [Proxy](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/proxy).