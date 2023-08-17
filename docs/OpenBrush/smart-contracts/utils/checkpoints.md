---
sidebar_position: 1
title: Checkpoints
---
This structure provides the ability to store and manage checkpoints. 
It allows to make a snapshot of the state of the contract at a certain moment and restore it later.
To add your value to the checkpoint, you need to call the `push` method. It has two arguments: `key`(usually it's a timestamp) and `value`.
There are several methods to get the value from the checkpoint:
- `lower_lookup` - Returns the value in the first (oldest) checkpoint with key greater or equal than the search key, or zero if there is none.
- `upper_lookup` - Returns the value in the last (most recent) checkpoint with key lower or equal than the search key, or zero if there is none.
- `upper_lookup_recent` - This is a variant of `upper_lookup` that is optimised to find "recent" checkpoint (checkpoints with high keys).
- `latest` - Returns the value in the most recent checkpoint, or 0 if there are no checkpoints.
- `latest_checkpoint` - Returns whether there is a checkpoint in the structure (i.e. it is not empty), and if so the key and value in the most recent checkpoint.

This page describes how to use Checkpoints in your contract.

## Step 1: Import checkpoints module

```rust
use openbrush::utils::checkpoints::Checkpoints;
```

## Step 2: Add field in your Storage, that uses Checkpoints
For example, you want to save how total supply of your token changes over time.
Then you need to add a field in your Storage, that uses Checkpoints.
```rust
#[ink(storage)]
#[derive(Default, Storage)]
pub struct Contract {
    ...
    #[storage_field]
    total_supply_history: Checkpoints<Balance>,
    ...
}
```

That's it! Now you can use [Checkpoints](/) structure in your contract.

You can check an example of the usage of [Checkpoints](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/utils/checkpoints) in our [Votes](https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/governance/utils/votes) implementation.
