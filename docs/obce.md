---
sidebar_position: 5
slug: /obce
title: OBCE
sidebar_label: OBCE
---

OpenBrush Chain Extension library
===

Chain extensions are a way to extend the functionality available to smart contracts on a given node. It allows your smart contracts to directly use the features of the chain it was deployed on.

When manually implementing chain extensions, you have to provide both ink! and Substrate parts of your new functionality.

For ink!, you have to provide a custom glue code using [`ChainExtensionMethod`](https://docs.rs/ink_env/4.0.0/ink_env/chain_extension/struct.ChainExtensionMethod.html) struct.
This glue code will call its Substrate counterpart if implemented correctly.

For Substrate, the implementation is more complex, as you have to implement [`ChainExtension`](https://docs.rs/pallet-contracts/latest/pallet_contracts/chain_extension/trait.ChainExtension.html) trait all by yourself, with manual method identifier matching, input/output decoding/encoding, etc.

You must not forget to correctly match ink!'s glue code with Substrate implementation, otherwise you're into some hard to debug error zone!

And this is where OBCE comes in handy, since with OBCE such problems simply don't exist. All that's left to do in order to use chain extensions in your contract is to use the automatically generated code!

OBCE (OpenBrush Chain Extension) is a library designed to help
you create your own custom chain extensions, with bindings for both ink!
and Substrate.

OBCE takes care of identifier matching, necessary trait implementations and
error generations. All that's left to you is to take care of the Substrate implementation itself.

## Chain extension definition

With `#[obce::definition]` macro, you are able to generate your custom chain extension
definition by just declaring a trait:

```rust
#[obce::definition]
trait MyChainExtension {
    fn custom_method(&self, val: u32) -> u64;
}
```

OBCE will automatically generate ink! bindings for smart contracts just from that definitions,
providing you with correct [extension registration](https://docs.rs/pallet-contracts/latest/pallet_contracts/chain_extension/trait.RegisteredChainExtension.html)
and method identifier matching.

All that's left is to implement the trait itself on a public struct for users to use:

```rust
#[cfg(feature = "ink")]
mod ink {
    #[derive(Default)]
    pub struct Extension;
    
    impl crate::MyChainExtension for Extension {}
}
```

For Substrate, this definition can later be used to implement the chain extension itself.

## Chain extension implementation

`#[obce::implementation]` macro provides capabilities to implement the chain extension itself:

```rust
#[cfg(feature = "substrate")]
mod substrate {
    use obce::substrate::{
        frame_system::Config as SysConfig,
        pallet_contracts::{
            chain_extension::Ext,
            Config as ContractConfig
        },
        sp_runtime::traits::StaticLookup,
        ExtensionContext,
    };
    
    #[derive(Default)]
    pub struct Extension;

    #[obce::implementation]
    impl<'a, 'b, E, T> MyChainExtension for ExtensionContext<'a, 'b, E, T, Extension>
    where
        T: SysConfig + ContractConfig,
        <<T as SysConfig>::Lookup as StaticLookup>::Source: From<<T as SysConfig>::AccountId>,
        E: Ext<T = T>,
    {
        fn custom_method(&self, val: u32) -> u64 {
            todo!()
        }
    }
}
```

Now, all that's left for you is to simply activate the chain extension in your runtime configuration like so:

```rust
impl pallet_contracts::Config for Runtime {
    // ...

    type ChainExtension = (
        pallet_assets_chain_extension::substrate::AssetsExtension,

        // Your custom extension
        my_chain_extension::substrate::Extension,
    );

    // ...
}
```
