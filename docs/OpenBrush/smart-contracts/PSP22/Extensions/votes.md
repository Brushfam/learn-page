---
sidebar_position: 1
title: PSP22 Votes
---
This feature provides a way to use your token as a voting power. You can use it in your [Governor](../../governance/governor.md) contract.
To cast a vote in [Governor](../../governance/governor.md) contract you need to have some amount of tokens and delegate them to be used for voting.
The more tokens you have, the more voting power you have. The extension implements the [Votes](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/governance/utils/votes) trait which provides the ability to delegate tokens from one account to another for voting,
check the number of votes for a proposal, and check the number of votes delegated by a user.
It's a required tool to create a [Governor](../../governance/governor.md) contract.
Also, you can check the [documentation](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Votes) in OpenZeppelin Contracts for more information about the voting mechanism.

This page describes how to create your own [PSP22Votes](/) contract.
## Step 1: Import default implementation

First, you should implement basic version of [PSP22](../psp22.md).

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `governance` and `psp22` feature. Also, you need to use the implementation macro
for PSP22Votes and Nonces:
```rust
#[openbrush::implementation(..., PSP22Votes, Nonces, ...)]
#[openbrush::contract]
pub mod your_contract {
    ...
}
```

You can check [this section](../../overview.md/#reuse-implementation-of-traits-from-openbrush) to understand how it works.


## Step 2: Set up your Storage
You need to add a storage field of type `votes::Data`, which will store the information about delegations, the number of votes at a certain time, and the total number of votes, at a certain time.
Also, you will need a storage field of type `nonces::Data`, which stores the number of nonces for each account. Nonce is a number that is incremented each time a user delegates tokens to another account.
```rust
#[ink(storage)]
#[derive(Default, Storage)]
pub struct Contract {
    ...
    #[storage_field]
    votes: votes::Data,
    #[storage_field]
    nonces: nonces::Data,
    ...
}
```
That's it! Now we have a [PSP22Votes](/) contract. You can use it in your [Governor](../../governance/governor.md) contract to count your votes.

You can check an example of the usage of [PSP22Votes](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp22_extensions/votes) and [Governor](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance/governor)
