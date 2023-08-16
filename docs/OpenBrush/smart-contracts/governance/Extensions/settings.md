---
sidebar_position: 1
title: GovernorSettings
---
This extension gives Governor contract the ability to set and get settings of the contract.
With this extension, you can set and get voting delay(The time between proposing and vote starting),
voting period, proposal threshold(The amount of votes that need to propose a proposal).

This page describes how to connect GovernorSettings to Governor contract.

## Step 1: Import default implementation

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` feature, embed modules data structures and implement them via `#[openbrush::implementation]` macro
as described in [that section](../../overview.md/#reuse-implementation-of-traits-from-openbrush).

The main trait is `Governor`.

## Step 2: Include GovernorSettings initialization in constructor

We need to initialize [GovernorSettings](/) extension in the constructor of [Governor](../governor.md) contract.
We are setting an initial value of voting delay, voting period, proposal threshold. It can be changed. For example, by voting.

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
            instance
                ._init_governor_settings(voting_delay, voting_period, proposal_threshold)
                .unwrap();
        ...
    }
}
```
## Step 3: Add GovernorSettings field in your Storage
GovernorSettings field in your Storage should be named `settings` and have type `governor_settings::Data`.
It stores the values of voting delay, voting period, proposal threshold.
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


That's it! Now you can use [GovernorSettings](/) extension in your [Governor](../governor.md) contract.


You can check an example of the usage of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance).
