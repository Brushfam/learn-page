---
sidebar_position: 1
title: PSP22
---

This example shows how you can reuse the implementation of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/governance) token. Also, this example shows how you can customize the logic, for example, to reject transferring tokens to `hated_account`.

## Step 1: Import default implementation

With [default `Cargo.toml`](../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` feature, embed modules data structures and implement them via `#[openbrush::implementation]` macro
as described in [that section](../overview.md/#reuse-implementation-of-traits-from-openbrush).

The main trait is `Governor`.

## Step 2: Define constructor

Define constructor where you initialize required extentions [GovernorVotes](), [GovernorSettings]() and [GovernorQuorum]().

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
        access_control::Internal::_init_with_admin(&mut instance, Some(caller));

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
It should have all fields for [Governance]() and required extensions: [GovernorVotes](), [GovernorSettings](), [GovernorCounting](), [Quorum](), [Nonces](), [Votes]().
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
        nonces: nonces::Data,
        #[storage_field]
        settings: governor_settings::Data,
        #[storage_field]
        quorum: governor_quorum::Data,
        #[storage_field]
        votes: votes::Data,
    }
```


## Step 4: Make your PSP22Voting contract

Make your PSP22Voting contract which will be used for voting. You can use [PSP22Votes]() for this purpose. 
And then enter the address of this contract in the `token` field of the constructor. You can check our [PSP22Votes]() contract example.


You can check an example of the usage of [Governance](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance).
