---
sidebar_position: 1
title: GovernorQuorum
---
This extension gives Governor contract the ability to manage how quorum is calculated.
There are two parameters that affect quorum calculation: `quorum_numerator` and `quorum_denominator`.
Quorum is calculated as `quorum_numerator * total_votes / quorum_denominator`. 
Of course, the value of total votes is not constant, it changes with every vote.
So, the quorum calculates in specific moments of time. It is possible because all votes are stored in [checkpoints]() structure, 
that is updated every time when a vote is created or changed.
Also, you can check the [documentation](https://docs.openzeppelin.com/contracts/4.x/api/governance#GovernorQuorumFraction) in OpenZeppelin Contracts for more information about the quorum calculation mechanism.

This page describes how to connect [GovernorQuorum](/) to [Governor](../governor.md) contract.

## Step 1: Import default implementation

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` feature. Also, you need to use implementation macro
for GovernorQuorum:
```rust
#[openbrush::implementation(..., GovernorQuorum, ...)]
#[openbrush::contract]
pub mod your_contract {
    ...
}
```
You can check [that section](../../overview.md/#reuse-implementation-of-traits-from-openbrush) to understand how it works.

## Step 2: Include GovernorQuorum initialization in constructor

We need to initialize [GovernorQuorum](/) extension in the constructor of [Governor](../governor.md) contract.
We are setting an initial value of quorum numerator. It can be changed. For example, by voting.

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
            instance._init_quorum_numerator(numerator).unwrap();
        ...
    }
}
```
## Step 3: Add GovernorQuorum field in your Storage
Add a storage field of type `governor_quorum::Data`, which stores the history of quorum numerator changes.
```rust
#[ink(storage)]
#[derive(Default, Storage)]
pub struct Contract {
    ...
    #[storage_field]
    quorum: governor_quorum::Data,
    ...
}
```
That's it! Now you can use [GovernorQuorum](/) extension in your [Governor](../governor.md) contract.

You can check an example of the usage of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance/governor).
