---
sidebar_position: 1
title: GovernorVotes
---
This extension gives Governor contract the ability to communicate with [PSP22Votes](../../PSP22/Extensions/votes.md) token.
The main purpose of this extension is to provide a way to check how much voting power a voter has.
Also, it provides the ability to delegate tokens from one account to another for voting.
You can check the [documentation](https://docs.openzeppelin.com/contracts/4.x/api/governance#GovernorVotes) in OpenZeppelin Contracts for more information about the voting mechanism.

This page describes how to connect [Governor](../governor.md) with [PSP22Votes](../../PSP22/Extensions/votes.md) token using [GovernorVotes](/) extension.

## Step 1: Import default implementation

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` feature. Also, you need to use implementation macro
for GovernorVotes:
```rust
#[openbrush::implementation(..., GovernorVotes, ...)]
#[openbrush::contract]
pub mod your_contract {
    ...
}
```

You can check [this section](../../overview.md/#reuse-implementation-of-traits-from-openbrush) to understand how it works.

The main trait is `Governor`.

## Step 2: Include GovernorVotes initialization in constructor

We need to initialize [GovernorVotes](/) extension in the constructor of [Governor](../governor.md) contract with the address of [PSP22Votes](../../PSP22/Extensions/votes.md) token.

```rust
impl Contract {
    #[ink(constructor)]
    pub fn new(
        token: AccountId,
        voting_delay: u64,
        voting_period: u64,
        proposal_threshold: u128,
        numerator: u128,
    ) -> Self {
        ...
        instance._init_governor_votes(token).unwrap();
        ...
    }
}
```
## Step 3: Add GovernorVotes field in your Storage
Add a storage field of type `governor_votes::Data`, which stores the AccountId of [PSP22Votes](../../PSP22/Extensions/votes.md) token.
```rust
#[ink(storage)]
#[derive(Default, Storage)]
pub struct Contract {
    ...
    #[storage_field]
    governor_votes: governor_votes::Data,
    ...
}
```


That's it! Now you can use [GovernorVotes](/) extension in your [Governor](../governor.md) contract.


You can check an example of the usage of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance/governor).
