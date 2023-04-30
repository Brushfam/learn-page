---
sidebar_position: 2
slug: /from-solidity-to-ink
title: Transpiling solidity smart contract with Sol2ink
sidebar_label: Transpiling solidity smart contract with Sol2ink
---

# Transpiling solidity smart contract with Sol2ink

Probably you heard about [advantages WASM smart contracts](https://use.ink/why-webassembly-for-smart-contracts) 
and if you are working with EVM you may be interested in how to rewrite your project written with solidity 
to Rust and ink!

### Installation
First what you need is, of course, [Sol2ink](/docs/Sol2ink) tool. You can use binary from release.
Move that file to folder that contains solidity smart contract and use `./sol2ink Contract.sol` command. 
Or you can clone [repository](https://github.com/Brushfam/sol2ink) and work inside Sol2ink project. We will work in this way.

### Transpiling

Take a look on code below:

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


contract Owner {

    address private owner;

    event OwnerSet(address indexed oldOwner, address indexed newOwner);

    constructor() {
        console.log("Owner contract deployed by:", msg.sender);
        owner = msg.sender; 
        emit OwnerSet(address(0), owner);
    }

    function changeOwner(address newOwner) public {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }
} 
```

It's simple solidity contract that stores owner's address, allows to change this address and return it.
To transpile it, we need to run a command

```shell
cargo +nightly run Contract.sol
```

After this, you can see that `generated` folder has been created. Here you can find `contract`
and `src` folder. More about structure you can read [here](/docs/Sol2ink/capabilities).

### Add new logic

If you want to add extra functionality to your generated project, you need go to `src` folder and
work with `traits` and `impls` folders. Let's add to our contract function for reset owner role. 
It will set `owner` to zero address and will emit event after. In `traits/contract.rs` you
have trait definition. We can declare new method here:

```rust
#[openbrush::trait_definition]
pub trait Owner {
    #[ink(message)]
    fn change_owner(&mut self, new_owner: AccountId) -> Result<(), Error>;

    #[ink(message)]
    fn get_owner(&self) -> Result<AccountId, Error>;

    // new method
    #[ink(message)]
    fn renounce_ownership(&mut self) -> Result<(), Error>;
}
```

We need use `mut` because we will change storage value `owner`. Also, this function have
[message attribute](https://use.ink/macros-attributes/message) as it's public.

Our next step is to write implementation for this function and for renounce event. For it we
need to change trait implementation in `impls/contract.rs` and add this function:

```rust
fn renounce_ownership(&mut self) -> Result<(), Error> {
        let old_owner = self.data().owner.clone();
        self.data().owner = ZERO_ADDRESS.into();
        self._emit_renounce_ownership_event(old_owner);
        Ok(())
    }
```

For now `_emit_renounce_ownership_event` doesn't exist, so let's create it. You can see that
`impls/contract.rs` have one more trait implementation. We use `Internal` trait for
event declaration. Final `Internal` trait code will have default event implementation:

```rust
pub trait Internal {
    fn _emit_owner_set(&self, old_owner: AccountId, new_owner: AccountId);

    fn _emit_renounce_ownership_event(&self, old_owner: AccountId);

}

impl<T: Storage<Data>> Internal for T {
    default fn _emit_owner_set(&self, _: AccountId, _: AccountId) {}

    default fn _emit_renounce_ownership_event(&self, _: AccountId) {}
}
```

If you want to override event default behavior, you can open `contracts/contract/lib.rs`
and add some logic in `Internal` implementation for `Contract`:

```rust
fn _emit_renounce_ownership_event(&self, old_owner: AccountId) {
    self.env().emit_event(ContractSet {
        old_owner,
        ZERO_ADDRESS,
    });
}
```

We’re done! Now you know how to transpile contracts with Sol2ink, what project structure it uses
and how work with project after transpiling.

If you have question or something went wrong, feel free to share it in our [discord](https://discord.gg/9FRETSPmp9).
