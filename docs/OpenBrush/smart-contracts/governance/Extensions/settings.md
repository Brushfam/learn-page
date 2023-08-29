---
sidebar_position: 1
title: GovernorSettings
---
This extension gives Governor contract the ability to set and get settings of the contract.
With this extension, you can set and get voting delay(The time between proposing and vote starting),
voting period, proposal threshold(The amount of votes required to propose a proposal).
Also, you can check the [documentation](https://docs.openzeppelin.com/contracts/4.x/api/governance#GovernorSettings) in OpenZeppelin Contracts for more information about the settings mechanism.

This page describes how to connect [GovernorSettings](/) to [Governor](../governor.md) contract.

## Step 1: Import default implementation

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` feature. Also, you need to use implementation macro
for GovernorSettings:
```rust
#[openbrush::implementation(..., GovernorSettings, ...)]
#[openbrush::contract]
pub mod your_contract {
    ...
}
```
You can check [this section](../../overview.md/#reuse-implementation-of-traits-from-openbrush) to understand how it works.
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
Add a storage field of type `governor_settings::Data`, which stores the values of voting delay, voting period, proposal threshold.
```rust
#[ink(storage)]
#[derive(Default, Storage)]
pub struct Contract {
    ...
    #[storage_field]
    settings: governor_settings::Data,
    ...
}
```


That's it! Now you can use [GovernorSettings](/) extension in your [Governor](../governor.md) contract.


You can check an example of the usage of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance/governor).
