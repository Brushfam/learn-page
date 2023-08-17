---
sidebar_position: 1
title: PSP22 Votes
---
This feature provides a way to use your token as a voting power. You can use it in your [Governor](../../governance/governor.md) contract.
To cast a vote in [Governor](../../governance/governor.md) contract you need to have some amount of tokens and delegate them to be used for voting.
The more tokens you have, the more voting power you have. The extension implements the [Votes](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/governance/utils/votes) trait which provides the ability to delegate tokens from one account to another for voting,
check the number of votes for a proposal, and check the number of votes delegated by a user.
It's a required tool to create a [Governor](../../governance/governor.md) contract. 

This page describes how to create your own [PSP22Votes](/) contract.
## Step 1: Default implementation

First, you should implement basic version of [PSP22](../psp22.md).

With [default `Cargo.toml`](../../overview.md/#the-default-toml-of-your-project-with-openbrush),
you need to enable `PSP22Votes` feature, embed modules data structures and implement them via `#[openbrush::implementation]` macro
as described in [that section](../../overview.md/#reuse-implementation-of-traits-from-openbrush).




## Step 2: Set up your Storage
It should add a `votes` field in your Storage. It should be named `votes` and have the type `votes::Data`.
It stores information about delegations, [checkpoints]() for each account, which stores the number of votes at a certain time, and the total number of votes, also at a certain time.
Also, Storage should have a `nonces` field. It should be named `nonces` and have the type `nonces::Data`.
It stores the number of nonces for each account. Nonce is a number that is incremented each time a user delegates tokens to another account by signature.
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
That's it! Now we have a [PSP22Votes](/) contract. You can use it in your [Governor](../../governance/governor.md) contract, as a voting power.

You can check an example of the usage of [PSP22Votes](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp22_extensions/votes) and [Governor](https://github.com/Brushfam/openbrush-contracts/tree/main/examples/governance/governor)
