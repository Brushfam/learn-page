---
sidebar_position: 8
slug: /phat-contract
title: Phat Contract
sidebar_label: Phat Contract
---

# Phat Contract

**Phat Contract** (also known as Fat Contract) has introduced new programming model called Off-chain Computation. This product is created by [Phala Network](https://www.phala.network/en/).
This blockchain is a decentralized cloud platform, built around TEE-based privacy technology.

### Web2 vs. Web3 solution

DApps becoming more and more complex and require to serve a large number of users.
Sometimes we need to use centralized tools in our decentralized application for exact needs. 
For instance, the existing DApps usually deploy backend logic to centralized services like AWS.
The problem is that all your sensitive data will be processed in centralized clouds.

Phala Cloud is one of the step in replacing Web2. You can use this platform through Phat Contract.
The main Phala Cloud features is:
- blockchain-native solution (all data are saved on-chain);
- low latency;
- continuous service (no need to wait for the block production)
- connectivity (HTTP requests)

## Phala Pink
[Pink extension](https://github.com/Phala-Network/phala-blockchain/tree/master/crates/pink) is implementation of Phat Contract.
Phat Contract is actually different from smart contract. It created to be a computation module for your contract.
More about Phat Contract details you can read on [official page](https://wiki.phala.network/en-us/build/general/intro/).

### How to use
To create Phat Contract you just need to use [pink crate](https://crates.io/crates/pink-extension) for your existing smart contract.
If you want to create, for instance, ERC-20 (PSP-22) token, you can use [OpenBrush](/OpenBrush/smart-contracts/psp22), and then you can add some
functionality by using Phala Pink. For sure, you can run your ink! contract in Phala blockchain with no modifications
or without using `pink-extension`.

Check [this repository](https://github.com/Phala-Network/phat-contract-examples) to see some examples of `pink-extension` usage.
