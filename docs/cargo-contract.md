---
sidebar_position: 6
slug: /cargo-contract
title: cargo-contract
sidebar_label: cargo-contract
---

# cargo-contract

`cargo-contract` is a unified CLI tool to develop and deploy ink! smart contracts.

Using `cargo-contract`, you can create new contracts, check and build existing ones and interact with uploaded contracts on-chain.

## Installation

To start using `cargo-contract`, ensure that you have your Rust toolchain installed. If you don't have an installed Rust toolchain, you can use [Rustup](https://rustup.rs/) to install one.

Besides using Rust toolchain, `cargo-contract` requires a C++ compiler installed. You can use any modern version of GCC, Clang or MSVC.

After that, you can install `cargo-contract` using the following steps:

1. `rustup component add rust-src`
2. `cargo install --force --locked cargo-contract`

## Usage

To create a new contract use the `cargo contract new` subcommand: `cargo contract new my_contract`

After that, a new directory with the name `my_contract` will be created, with the sample contract inside of it.

To build this sample contract, use the `cargo contract build` command. This command automatically invokes Cargo, Rust's package manager with the necessary parameters to produce WASM blob. After generating WASM code, some ink!-specific optimizations are also applied automatically.

## Deployment

Assuming your build process was a success, we can proceed with uploading your code.

Using `cargo contract upload` subcommand, we can upload WASM blob to the specified chain (local development chain by default): `cargo contract upload --suri //Alice`. In this case, we are using "Alice" test identity.

After running the `upload` subcommand, `cargo-contract` provides us with the code hash, which we can use to instantiate our smart contract.

Smart contract instantiation is required to "initialize" our contract by calling its constructor method:

```shell
cargo contract instantiate \
       --constructor new \
       --args false \
       --suri //Alice \
       --code-hash 0xABC...
```

After that, `cargo-contract` provides us with the contract address, which we can use to call smart contract methods using the `call` subcommand:

```shell
cargo contract call \
       --contract 0x123... \
       --message hello \
       --suri //Alice
```
