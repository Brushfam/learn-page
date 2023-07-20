---
sidebar_position: 9
title: Lending contract
---

The main logic of the `LendingContract` is defined in the `impls/lending` directory.
In this file, we only need to "inherit" it.

## Add dependencies

`LendingContract` instantiates the `SharesContract` and `LoanContract`, so we
should import them as `ink-as-dependency`. Also we want to use the `AccessControl`
and `Pausable` from OpenBrush, so we import them too. We also want to "inherit" the
implementation of `Lending` and `LendingPermissioned` traits defined in the `lending_project` crate.

```toml
[package]
name = "lending_contract"
version= "4.0.0-beta"
authors = ["Brushfam <dominik.krizo@727.ventures>"]
edition = "2021"

[dependencies]
ink = { version = "4.2.1", default-features = false }
scale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }
scale-info = { version = "2.6", default-features = false, features = ["derive"], optional = true }

# These dependencies
shares_contract = { path = "../shares", default-features = false, features = ["ink-as-dependency"]  }
loan_contract = { path = "../loan", default-features = false, features = ["ink-as-dependency"]  }
lending_project = { path = "../..", default-features = false }
openbrush = { git = "https://github.com/Brushfam/openbrush-contracts", branch = "develop", default-features = false, features = ["pausable", "access_control"] }

[lib]
name = "lending_contract"
path = "lib.rs"


[features]
default = ["std"]
std = [
    "ink/std",
    "scale/std",
    "scale-info",
    "scale-info/std",

    # These dependencies
    "loan_contract/std",
    "shares_contract/std",
    "openbrush/std",
]
ink-as-dependency = []

[profile.dev]
codegen-units = 16

[profile.release]
overflow-checks = false
```

## Define the contract storage

As described earlier, we want our smart contract to be paused by the Manager account.
To do that, we need our contract to be `Pausable` and we need a manager role.
We can do this with the `AccessControl`. Also, we want to use the data from lending that we have declared.
So we will declare a struct and derive all the needed traits.

```rust
#[ink(storage)]
#[derive(Default, Storage)]
pub struct LendingContract {
    #[storage_field]
    access: access_control::Data,
    #[storage_field]
    pause: pausable::Data,
    #[storage_field]
    lending: lending::data::Data,
}
```

## Implement traits

We need to "inherit" the implementation of `AccessControll`, `Pausable`, `Lending`,
`LendingPermissioned` and `lending::Internal`.

```rust
impl lending::Internal for LendingContract {}

impl LendingImpl for LendingContract {}

impl Lending for LendingContract {
    #[ink(message)]
    fn total_asset(&self, asset_address: AccountId) -> Result<Balance, LendingError> {
        LendingImpl::total_asset(self, asset_address)
    }
    // other methods should be implemented here as the one above
}

impl LendingPermissionedImpl for LendingContract {}

impl LendingPermissioned for LendingContract {
    #[ink(message)]
    fn deposit(&mut self, asset_address: AccountId, amount: Balance) -> Result<(), LendingError> {
        LendingPermissionedImpl::deposit(self, asset_address, amount)
    }
    // other methods should be implemented here as the one above
}

impl lending::Instantiator for LendingContract {
    fn _instantiate_shares_contract(&self, contract_name: &str, contract_symbol: &str) -> AccountId {
        let code_hash = self.lending.shares_contract_code_hash;

        let salt = (<Self as DefaultEnv>::env().block_timestamp(), contract_name).encode();

        let hash = xxh32(&salt, 0).to_le_bytes();

        let contract =
            SharesContractRef::new(Some(String::from(contract_name)), Some(String::from(contract_symbol)))
                .endowment(0)
                .code_hash(code_hash)
                .salt_bytes(&hash[..4])
                .instantiate();
        contract.to_account_id()
    }
}
```

Now the `LendingContract` has functionality of all that traits.

## Define the constructor

Finally, we will add a constructor, in which we will initiate the admin of
the contract, to whom we will also grant the manager role declared before,
and we will also instantiate the `LoanContract` here and store its AccountId
in `LendingContract`.

```rust
impl LendingContract {
    /// constructor with name and symbol
    #[ink(constructor, payable)]
    pub fn new(shares_hash: Hash, loan_hash: Hash) -> Self {

        let mut instance = Self::default();

        let caller = Self::env().caller();
        instance._init_with_admin(caller);
        instance.grant_role(MANAGER, caller).expect("Can not set manager role");
        instance.lending.shares_contract_code_hash = shares_hash;
        // instantiate NFT contract and store its account id
        let nft = LoanContractRef::new()
            .endowment(0)
            .code_hash(loan_hash)
            .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])
            .instantiate()
            .unwrap();
        instance.lending.loan_account = nft.to_account_id();

        instance
    }
}
```