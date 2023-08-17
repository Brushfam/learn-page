~~---
sidebar_position: 1
title: Nonces
---
This utility provides tracking nonces for each user. Nonces will only increment.
For example, you can use this utility to prevent replay attacks when you use signatures.
It has three main methods: `nonces` - that just returns the next unused nonce for the user, `use_nonce` - that marks the nonce as used and increment it, and `use_check_nonce` - that checks if the right nonce is used and marks it as used.
This page describes how to use [Nonces](/) in your contract.

## Step 1: Import default implementation

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `Nonces` feature, embed modules data structures and implement them via `#[openbrush::implementation]` macro
as described in [that section](../../overview.md/#reuse-implementation-of-traits-from-openbrush).

## Step 2: Add Nonces field in your Storage
Nonces field in your Storage should be named `nonces` and have type `nonces::Data`.
It stores nonces Mapping, which stores the next unused nonce for each user.
```rust
#[ink(storage)]
#[derive(Default, Storage)]
pub struct Contract {
    ...
    #[storage_field]
    nonces: nonces::Data,
    ...
}
```

That's it! Now you can use [Nonces](/) in your contract.

You can check an example of the usage of [Nonces](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/utils/nonces) in our [PSP22Votes](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp22_extensions/votes) contract example.~~
