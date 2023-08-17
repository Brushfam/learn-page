---
sidebar_position: 1
title: Nonces
---
This utility provides a way to prevent replay attacks. 

This page describes how to connect GovernorCounting to Governor contract.

## Step 1: Import default implementation

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` feature, embed modules data structures and implement them via `#[openbrush::implementation]` macro
as described in [that section](../../overview.md/#reuse-implementation-of-traits-from-openbrush).

The main trait is `Governor`.

## Step 2: Add GovernorCounting field in your Storage
GovernorQuorum field in your Storage should be named `governor_counting` and have type `governor_counting::Data`.
It stores the number of votes for all proposals, and information about whether a user has voted for a proposal.
```rust
#[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        ...
        #[storage_field]
        governor_counting: governor_counting::Data,
        ...
    }
```

That's it! Now you can use [GovernorCounting](/) extension in your [Governor](../governor.md) contract.

You can check an example of the usage of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance).
