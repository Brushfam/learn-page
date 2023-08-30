---
sidebar_position: 1
title: Governance
---
This feature provides a governance mechanism. It allows token holders to vote on proposals and change the token's parameters.
Everybody who has enough votes can create a proposal to call a method of some contract with some arguments. Then token holders can vote for or against the proposal.
When the voting period ends, the proposal can be executed if the proposal status is `Succeeded` and the quorum is reached. 
This example shows how you can use the implementation of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/governance) token.  
You can check the [Compound’s Governor Alpha & Bravo](https://docs.compound.finance/v2/governance/) documentation for more information about governance.

## Step 1: Import default implementation

With [default `Cargo.toml`](../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` feature. Also, you need to use implementation macro 
for Governor and all required extensions:
```rust
#[openbrush::implementation(Governor, GovernorVotes, GovernorSettings, GovernorCounting, GovernorQuorum)]
#[openbrush::contract]
pub mod your_contract {
    ...
}
```
You can check [this section](../overview.md/#reuse-implementation-of-traits-from-openbrush) to understand how it works.

## Step 2: Define constructor

Define constructor where you initialize required extensions [GovernorVotes](Extensions/votes.md), [GovernorSettings](Extensions/settings.md) and [GovernorQuorum](Extensions/quorum.md).

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
        let mut instance = Self::default();

        let caller = Self::env().caller();
        
        instance._init_governor_votes(token).unwrap();
        instance
            ._init_governor_settings(voting_delay, voting_period, proposal_threshold)
            .unwrap();
        instance._init_quorum_numerator(numerator).unwrap();
        instance.mock_timestamp = Self::env().block_timestamp();

        instance
    }
}
```
## Step 3: Set up your Storage
It should have all fields for [Governor](/) and required extensions: [GovernorVotes](Extensions/votes.md), [GovernorSettings](Extensions/settings.md), [GovernorCounting](Extensions/counting.md), [GovernorQuorum](Extensions/quorum.md).
```rust
#[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Contract {
        #[storage_field]
        governor: governor::Data,
        #[storage_field]
        governor_counting: governor_counting::Data,
        #[storage_field]
        governor_votes: governor_votes::Data,
        #[storage_field]
        settings: governor_settings::Data,
        #[storage_field]
        quorum: governor_quorum::Data,
    }
```


## Step 4: Make your PSP22Voting contract

Make your PSP22Voting contract which will be used for voting. You can use [PSP22Votes](../PSP22/Extensions/votes.md) for this purpose.
The AccountId of this token will then be used as a constructor parameter of this contract. You can check our [PSP22Votes](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp22_extensions/votes) contract example.


You can check an example of the usage of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance/governor).
