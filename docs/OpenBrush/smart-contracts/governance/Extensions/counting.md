---
sidebar_position: 1
title: GovernorCounting
---
This extension gives Governor contract the ability to manage and count votes of the contract.
You can see if a user has voted for a proposal, and get the number of votes for a proposal.
Also, this extension allows you to count your votes when you cast them, to see when the quorum is reached, and when the voting succeeds.
You can check the [Compound’s Governor Alpha & Bravo](https://docs.compound.finance/v2/governance/) documentation for more information about governance.

This page describes how to connect [GovernorCounting](/) to [Governor](../governor.md) contract.

## Step 1: Import default implementation

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` feature. Also, you need to use implementation macro
for GovernorCounting:
```rust
#[openbrush::implementation(..., GovernorCounting, ...)]
#[openbrush::contract]
pub mod your_contract {
    ...
}
```
You can check [this section](../../overview.md/#reuse-implementation-of-traits-from-openbrush) to understand how it works.

## Step 2: Add GovernorCounting field in your Storage
Add a storage field of type `governor_counting::Data`, which stores the number of votes for all proposals, and information about whether a user has voted for a proposal.
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

You can check an example of the usage of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance/governor).
