"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[4328],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),f=s,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||r;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(7462),s=(t(7294),t(3905));const r={sidebar_position:7,title:"Lending impls"},o=void 0,i={unversionedId:"OpenBrush/smart-contracts/example/impls",id:"OpenBrush/smart-contracts/example/impls",title:"Lending impls",description:"The lending contract implementation consists of two traits:",source:"@site/docs/OpenBrush/smart-contracts/example/impls.md",sourceDirName:"OpenBrush/smart-contracts/example",slug:"/OpenBrush/smart-contracts/example/impls",permalink:"/docs/OpenBrush/smart-contracts/example/impls",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Lending impls"},sidebar:"tutorialSidebar",previous:{title:"Data and derive macro",permalink:"/docs/OpenBrush/smart-contracts/example/data"},next:{title:"Errors",permalink:"/docs/OpenBrush/smart-contracts/example/errors"}},l={},d=[{value:"Definition of traits",id:"definition-of-traits",level:2},{value:"Data and storage trait",id:"data-and-storage-trait",level:2},{value:"A generic implementation of <code>LendingPermissioned</code> trait",id:"a-generic-implementation-of-lendingpermissioned-trait",level:2},{value:"A generic implementation of <code>Lending</code> trait",id:"a-generic-implementation-of-lending-trait",level:2}],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,s.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The lending contract implementation consists of two traits:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Lending")," - contains methods that can be called by anyone.\nThese methods can be used to lend, borrow, liquidate assets and get some information about them."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LendingPermissioned")," - contains methods with restrictions. These methods can be called by a manager.\nThese methods allow defining the list of allowed tokens, setting price and etc.")),(0,s.kt)("p",null,'We will define everything stuff from the previous chapter for "inheritable" contracts:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Both traits in ",(0,s.kt)("inlineCode",{parentName:"li"},"traits/lending.rs")),(0,s.kt)("li",{parentName:"ul"},"A data structure in ",(0,s.kt)("inlineCode",{parentName:"li"},"impls/lending/data.rs")),(0,s.kt)("li",{parentName:"ul"},"A generic implementation for trait ",(0,s.kt)("inlineCode",{parentName:"li"},"Lending")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"impls/lending/lending.rs")),(0,s.kt)("li",{parentName:"ul"},"A generic implementation for trait ",(0,s.kt)("inlineCode",{parentName:"li"},"LendingPermissioned")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"impls/lending/lending_permissioned.rs"))),(0,s.kt)("h2",{id:"definition-of-traits"},"Definition of traits"),(0,s.kt)("p",null,"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"traits/lending.rs"),", we will define ",(0,s.kt)("inlineCode",{parentName:"p"},"Lending")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingPermissioned")," traits.\nWe plan that ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingContract")," also will implement ",(0,s.kt)("inlineCode",{parentName:"p"},"AccessControl")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Pausable"),", so\n",(0,s.kt)("inlineCode",{parentName:"p"},"LendingContractRef")," is defined like a combination of ",(0,s.kt)("inlineCode",{parentName:"p"},"AccessControl"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Pausable"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingPermissioned")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Lending"),".\nThat wrapper describes all methods available in the ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingContract"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::{\n  contracts::traits::{\n    access_control::*,\n    pausable::*,\n    psp22::PSP22Error,\n    psp34::{\n      Id,\n      PSP34Error,\n    },\n  },\n  traits::{\n    AccountId,\n    Balance,\n  },\n};\n\n/// Combination of all traits of the contract to simplify calls to the contract\n#[openbrush::wrapper]\npub type LendingContractRef = dyn Lending + LendingPermissioned + AccessControl + Pausable;\n\n#[openbrush::wrapper]\npub type LendingRef = dyn Lending;\n\n#[openbrush::trait_definition]\npub trait Lending {\n  /// This function will return the total amount of assets available to borrow\n  /// along with amount of the same asset borrowed\n  ///\n  /// Returns `AssetNotSupported` error if we try to get amount of asset not supported by our contract\n  #[ink(message)]\n  fn total_asset(&self, asset_address: AccountId) -> Result<Balance, LendingError>;\n\n  /// This function will return the total amount of shares minted for an asset\n  ///\n  /// Returns `AssetNotSupported` error if we try to get shares of asset not supported by our contract\n  #[ink(message)]\n  fn total_shares(&self, asset_address: AccountId) -> Result<Balance, LendingError>;\n\n  /// This function  will return the address of shares\n  /// which is bound to `asset_address` asset token\n  #[ink(message)]\n  fn get_asset_shares(&self, asset_address: AccountId) -> Result<AccountId, LendingError>;\n\n  /// This function will return true if the asset is accepted by the contract\n  #[ink(message)]\n  fn is_accepted_lending(&self, asset_address: AccountId) -> bool;\n\n  /// This function will return true if the asset is accepted for using as collateral\n  #[ink(message)]\n  fn is_accepted_collateral(&self, asset_address: AccountId) -> bool;\n\n  /// This function is called by a user who wants to lend tokens and gain interest\n  ///\n  /// `asset_address` is the AccountId of the PSP22 token to be deposited\n  /// `amount` is the amount to be deposited\n  ///\n  /// Returns `InsufficientAllowanceToLend` if the caller does not have enough allowance\n  /// Returns `InsufficientBalanceToLend` if the caller does not have enough balance\n  /// Returns `AssetNotSupported` if the asset is not supported for lending\n  #[ink(message)]\n  fn lend_assets(&mut self, asset_address: AccountId, amount: Balance) -> Result<(), LendingError>;\n\n  /// This function is called by a user who wants to borrow tokens. In order to do that,\n  /// they need to deposit collateral. The value of borrowed assets will be equal to 70%\n  /// of the value of deposited collateral.\n  ///\n  /// `asset_address` is the AccountId of the PSP22 token to be borrowed\n  /// `collateral_address` is the AccountId of the PSP22 token used as collateral\n  /// `amount` is the amount to be deposited\n  ///\n  /// Returns `AssetNotSupported` if `asset_address` is not supported for using as collateral\n  /// Returns `InsufficientAllowanceForCollateral` if the caller does not have enough allowance\n  /// Returns `InsufficientCollateralBalance` if the caller does not have enough balance\n  /// Returns `AssetNotSupported` if the borrowing asset is not supported for borrowing\n  /// Returns `AmountNotSupported` if the liquidation price is less than or equal to the borrowed amount\n  /// Returns `InsufficientBalanceInContract` if there is not enough amount of assets in the contract to borrow\n  #[ink(message)]\n  fn borrow_assets(\n    &mut self,\n    asset_address: AccountId,\n    collateral_address: AccountId,\n    amount: Balance,\n  ) -> Result<(), LendingError>;\n\n  /// This function is called by the user who borrowed some asset. User needs to deposit borrowed amount along with interest\n  /// They can either repay the full amount or just a portion of the amount. If they repay the full amount, they will get all deposited\n  /// collateral back, another way they will get back the same portion of collateral as the repay portion (eg. if they deposit 80% of\n  /// the loan + interests, they will get 80% of collateral back). If the loan was liquidated, the user does not get their collateral\n  /// back and the NFT will be burned\n  ///\n  /// `loan_id` is the id of the loan to be repaid\n  /// `repay_amount` is the amount of borrowed asset to be repaid\n  ///\n  /// Returns true if the loan was repaid successfuly, false if the loan was already liquidated and can not be repaid\n  /// Returns `NotTheOwner` error if the initiator is not the owner of the loan token\n  /// Returns `InsufficientAllowanceToRepay` error if the initiator did not give allowance to the contract\n  /// Returns `InsufficientBalanceToRepay` error if the initiator tries to repay more tokens than their balance\n  #[ink(message)]\n  fn repay(&mut self, loan_id: Id, repay_amount: Balance) -> Result<bool, LendingError>;\n\n  /// This function is called by the user who wants to withdraw assets they deposited for lending. They will deposit their\n  /// share tokens and get back their share of the asset mapped to this share token\n  ///\n  /// `shares_address` account id of the shares token which is binded to the asset\n  /// `shares_amount` amount of shares being withdrawn\n  ///\n  /// Returns `InsufficientBalanceInContract` if there is currently not enough assets in the contract\n  #[ink(message)]\n  fn withdraw_asset(&mut self, shares_address: AccountId, shares_amount: Balance) -> Result<(), LendingError>;\n\n  /// This function will liquidate the loan with `loan_id`. In this example contract the tokens will be kept in the smart\n  /// contract and the liquidator gets 1% of the liquidated assets. In a real implementation we would swap the collateral\n  /// for the borrowed asset so we would be able to cover the shares of lenders.\n  ///\n  /// `loan_id` id of loan to be liquidated\n  ///\n  /// Returns `LoanLiquidated` error if the loan was already liquidated\n  /// Returns `CanNotBeLiquidated` error if the price of collateral is not below the liquidation price\n  #[ink(message)]\n  fn liquidate_loan(&mut self, loan_id: Id) -> Result<(), LendingError>;\n}\n\n#[openbrush::wrapper]\npub type LendingPermissionedRef = dyn LendingPermissioned;\n\n#[openbrush::trait_definition]\npub trait LendingPermissioned {\n  /// This function will allow an asset to be accepted by the contract\n  /// It will also create the contracts for the shares token and lended reserves token\n  #[ink(message, payable)]\n  fn allow_asset(&mut self, asset_address: AccountId) -> Result<(), LendingError>;\n\n  /// This function will disallow lending and borrowing of asset\n  /// To do this all assets of this asset must be repaid and all of the asset must be withdrawn\n  #[ink(message)]\n  fn disallow_lending(&mut self, asset_address: AccountId) -> Result<(), LendingError>;\n\n  /// This function will allow an asset to be accepted as collateral\n  #[ink(message)]\n  fn allow_collateral(&mut self, asset_address: AccountId) -> Result<(), LendingError>;\n\n  /// This function will disallow an asset to be accepted as collateral\n  #[ink(message)]\n  fn disallow_collateral(&mut self, asset_address: AccountId) -> Result<(), LendingError>;\n\n  /// This function will set price of `asset_in` in `asset_out` to `amount` in our simulated oracle\n  #[ink(message)]\n  fn set_asset_price(\n    &mut self,\n    asset_in: AccountId,\n    asset_out: AccountId,\n    price: Balance,\n  ) -> Result<(), LendingError>;\n}\n")),(0,s.kt)("h2",{id:"data-and-storage-trait"},"Data and storage trait"),(0,s.kt)("p",null,"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"impls/lending/data.rs")," we will define the data related to the lending contract.\nAlso there we will define some helper functions."),(0,s.kt)("p",null,"In this example we will not be using price oracles, we will do\nour own simulated oracle. Since oracles are not the point of this example,\nit will be enough for us. We will store prices info in our data struct."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"// Importing everything publicly from traits allows you to import \n// every stuff related to lending by one import\nuse crate::traits::lending::*;\nuse openbrush::{\n  storage::{\n    Mapping,\n    TypeGuard,\n  },\n  traits::{\n    AccountId,\n    Balance,\n    Hash,\n  },\n};\n\nuse openbrush::traits::Storage;\n\n#[derive(Default, Debug)]\n#[ink::storage_item]\n/// define the struct with the data that our smart contract will be using\n/// this will isolate the logic of our smart contract from its storage\npub struct Data {\n  /// mapping from asset address to lended asset address\n  /// when X amount of asset is lended, X amount of asset it is mapped to is minted\n  /// so the contract knows how much of asset it has and how much of the asset was lended\n  pub assets_lended: Mapping<AccountId, AccountId>,\n  /// mapping from asset address to shares asset address\n  /// the lended asset is mapped to a shares asset which represents\n  /// the total share of the mapping asset\n  /// example: if a user has X% of the total supply of the asset A', they\n  /// are eligible to withdraw X% of the asset A tracked by this contract\n  pub asset_shares: Mapping<AccountId, AccountId>,\n  /// mapping from share token to asset token\n  pub shares_asset: Mapping<AccountId, AccountId>,\n  /// mapping from asset address to bool\n  /// maps to `true` if an asset is accepted for using as collateral\n  pub collateral_accepted: Mapping<AccountId, bool>,\n  /// mapping from tuple of two assets to balance\n  /// mapped balance represents the amount of assets of tuple.1 we get\n  /// when we deposit 1 unit of tuple.0\n  /// we are using this just to simulate an oracle in our example\n  /// in the example the returned balance will be amount of stable coin for an asset\n  pub asset_price: Mapping<(AccountId, AccountId), Balance, AssetPriceKey>,\n  /// code hash of the `SharesContract`\n  pub shares_contract_code_hash: Hash,\n  /// the `AccountId` of the `Loan`\n  pub loan_account: AccountId,\n}\n\npub struct AssetPriceKey;\n\nimpl<'a> TypeGuard<'a> for AssetPriceKey {\n  type Type = &'a (&'a AccountId, &'a AccountId);\n}\n\n/// this internal function will be used to set price of `asset_in` when we deposit `asset_out`\n/// we are using this function in our example to simulate an oracle\npub fn set_asset_price<T>(instance: &mut T, asset_in: &AccountId, asset_out: &AccountId, price: &Balance)\n  where\n          T: Storage<Data>,\n{\n  instance.data().asset_price.insert(&(asset_in, asset_out), price);\n}\n\n/// this internal function will be used to set price of `asset_in` when we deposit `asset_out`\n/// we are using this function in our example to simulate an oracle\npub fn get_asset_price<T>(instance: &T, amount_in: &Balance, asset_in: &AccountId, asset_out: &AccountId) -> Balance\n  where\n          T: Storage<Data>,\n{\n  let price = instance.data().asset_price.get(&(asset_in, asset_out)).unwrap_or(0);\n  price * amount_in\n}\n\n/// Internal function which will return the address of the shares token\n/// which are minted when `asset_address` is borrowed\npub fn get_reserve_asset<T>(instance: &T, asset_address: &AccountId) -> Result<AccountId, LendingError>\n  where\n          T: Storage<Data>,\n{\n  instance\n          .data()\n          .asset_shares\n          .get(&asset_address)\n          .ok_or(LendingError::AssetNotSupported)\n}\n\n/// internal function which will return the address of asset\n/// which is bound to `shares_address` shares token\npub fn get_asset_from_shares<T>(instance: &T, shares_address: &AccountId) -> Result<AccountId, LendingError>\n  where\n          T: Storage<Data>,\n{\n  instance\n          .data()\n          .shares_asset\n          .get(shares_address)\n          .ok_or(LendingError::AssetNotSupported)\n}\n\n")),(0,s.kt)("h2",{id:"a-generic-implementation-of-lendingpermissioned-trait"},"A generic implementation of ",(0,s.kt)("inlineCode",{parentName:"h2"},"LendingPermissioned")," trait"),(0,s.kt)("p",null,"The all methods in ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingPermissioned")," are restricted and requires ",(0,s.kt)("inlineCode",{parentName:"p"},"#[modifiers(only_role(MANAGER))]"),".\nThat means that only accounts with ",(0,s.kt)("inlineCode",{parentName:"p"},"MANAGER")," role can execute these methods.\nUsage of ",(0,s.kt)("inlineCode",{parentName:"p"},"only_role")," modifier from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/blob/main/contracts/src/access/access_control/mod.rs#L30"},"access_control"),"\nrequires that the contract should implement ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage<access_control::Data>"),".\nFor that we also require the same restriction on the generic type."),(0,s.kt)("p",null,"In the implementation of ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingPermissioned"),", we want to use methods from\n",(0,s.kt)("inlineCode",{parentName:"p"},"Lending"),". For that, the set of restrictions for generic in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Lending")," implementation\nshould be a subset(<=) of restrictions for generic in the ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingPermissioned")," implementation.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"Lending")," implementation requires ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage<lending::Data>")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage<pausable::Data>")," to use ",(0,s.kt)("inlineCode",{parentName:"p"},"when_paused"),"\nmodifier from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/blob/main/contracts/src/security/pausable/mod.rs#L24"},"pausable"),".\nSo we should have the same restriction in our generic implementation."),(0,s.kt)("p",null,"In the logic of the trait ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingPermissioned")," we need to instantiate\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"SharesContract"),". But we can't import ",(0,s.kt)("inlineCode",{parentName:"p"},"SharesContract")," into ",(0,s.kt)("inlineCode",{parentName:"p"},"lending_project"),"\ncrate, because ",(0,s.kt)("inlineCode",{parentName:"p"},"SharesContract")," also depends on ",(0,s.kt)("inlineCode",{parentName:"p"},"lending_project"),".\nThat will cause cyclic dependencies.\nTo avoid that we will import ",(0,s.kt)("inlineCode",{parentName:"p"},"SharesContract")," into ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingContract")," and in ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingContract")," we will define\n",(0,s.kt)("inlineCode",{parentName:"p"},"_instantiate_shares_contract")," method, that will instantiate ",(0,s.kt)("inlineCode",{parentName:"p"},"SharesCotnract"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"impl lending::Internal for LendingContract {\n  fn _instantiate_shares_contract(&self, contract_name: &str, contract_symbol: &str) -> AccountId {\n    let code_hash = self.lending.shares_contract_code_hash;\n\n    let salt = (<Self as DefaultEnv>::env().block_timestamp(), contract_name).encode();\n\n    let hash = xxh32(&salt, 0).to_le_bytes();\n\n    let contract =\n            SharesContractRef::new(Some(String::from(contract_name)), Some(String::from(contract_symbol)))\n                    .endowment(0)\n                    .code_hash(code_hash)\n                    .salt_bytes(&hash[..4])\n                    .instantiate()\n                    .unwrap();\n    contract.to_account_id()\n  }\n}\n")),(0,s.kt)("p",null,"For that we defined the ",(0,s.kt)("inlineCode",{parentName:"p"},"Internal")," trait in ",(0,s.kt)("inlineCode",{parentName:"p"},"lending")," module with ",(0,s.kt)("inlineCode",{parentName:"p"},"_instantiate_shares_contract")," method.\nThen, we define the default implementaion of ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingPermissioned")," trait which we call ",(0,s.kt)("inlineCode",{parentName:"p"},"LendingPermissionedImpl"),"\nand which restricts the type for which it is implemented by ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage<lending::Data>"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage<access_control::Data>"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage<pausable::Data>"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"lending::Internal")," traits.\nThat allows us to use methods from these traits and define the implementation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'use super::{\n    data,\n    data::*,\n};\nuse crate::traits::lending::*;\nuse openbrush::{\n    contracts::{\n        access_control::*,\n        pausable::*,\n        traits::psp22::PSP22Ref,\n    },\n    modifiers,\n    traits::{\n        AccountId,\n        Balance,\n        OccupiedStorage,\n        Storage,\n    },\n};\n\npub const MANAGER: RoleType = ink::selector_id!("MANAGER");\n\npub trait LendingPermissionedImpl:\n    access_control::Internal + Storage<access_control::Data> + lending_internal::Internal + Lending + Instantiator\n{\n    #[modifiers(only_role(MANAGER))]\n    fn allow_asset(&mut self, asset_address: AccountId) -> Result<(), LendingError> {\n        // we will ensure the asset is not accepted already\n        if self.is_accepted_lending(asset_address) {\n            return Err(LendingError::AssetSupported)\n        }\n\n        // instantiate the shares of the lended assets\n        let shares_address = self._instantiate_shares_contract("LendingShares", "LS");\n        // instantiate the reserves of the borrowed assets\n        let reserves_address = self._instantiate_shares_contract("LendingReserves", "LR");\n        // accept the asset and map shares and reserves to it\n\n        accept_lending(self, asset_address, shares_address, reserves_address);\n        Ok(())\n    }\n\n    #[modifiers(only_role(MANAGER))]\n    fn disallow_lending(&mut self, asset_address: AccountId) -> Result<(), LendingError> {\n        let reserve_asset = get_reserve_asset(self, &asset_address)?;\n        if PSP22Ref::balance_of(&asset_address, Self::env().account_id()) > 0\n            || PSP22Ref::balance_of(&reserve_asset, Self::env().account_id()) > 0\n        {\n            return Err(LendingError::AssetsInTheContract)\n        }\n        disallow_lending(self, asset_address);\n        Ok(())\n    }\n\n    #[modifiers(only_role(MANAGER))]\n    fn allow_collateral(&mut self, asset_address: AccountId) -> Result<(), LendingError> {\n        // we will ensure the asset is not accepted already\n        if self.is_accepted_collateral(asset_address) {\n            return Err(LendingError::AssetSupported)\n        }\n        set_collateral_accepted(self, asset_address, true);\n        Ok(())\n    }\n\n    #[modifiers(only_role(MANAGER))]\n    fn disallow_collateral(&mut self, asset_address: AccountId) -> Result<(), LendingError> {\n        // we will ensure the asset is not accepted already\n        if self.is_accepted_collateral(asset_address) {\n            set_collateral_accepted(self, asset_address, false);\n        }\n        Ok(())\n    }\n\n    #[modifiers(only_role(MANAGER))]\n    fn set_asset_price(\n        &mut self,\n        asset_in: AccountId,\n        asset_out: AccountId,\n        price: Balance,\n    ) -> Result<(), LendingError> {\n        set_asset_price(self, &asset_in, &asset_out, &price);\n        Ok(())\n    }\n}\n\npub trait Internal {\n    /// Internal function which instantiates a shares contract and returns its AccountId\n    fn _instantiate_shares_contract(&self, contract_name: &str, contract_symbol: &str) -> AccountId;\n}\n\nfn accept_lending<T: Storage<data::Data>>(\n    instance: &mut T,\n    asset_address: AccountId,\n    share_address: AccountId,\n    reserve_address: AccountId,\n) {\n    instance.data().asset_shares.insert(&asset_address, &share_address);\n    instance.data().shares_asset.insert(&share_address, &asset_address);\n    instance.data().assets_lended.insert(&asset_address, &reserve_address);\n}\n\nfn disallow_lending<T: Storage<data::Data>>(instance: &mut T, asset_address: AccountId) {\n    if let Some(share_address) = instance\n        .data()\n        .asset_shares\n        .get(&asset_address) {\n            instance.data().asset_shares.remove(&asset_address);\n            instance.data().shares_asset.remove(&share_address);\n            instance.data().assets_lended.remove(&asset_address);\n    }\n}\n\n/// this function will accept `asset_address` for using as collateral\nfn set_collateral_accepted<T: Storage<data::Data>>(instance: &mut T, asset_address: AccountId, accepted: bool) {\n    instance.data().collateral_accepted.insert(&asset_address, &accepted);\n}\n')),(0,s.kt)("h2",{id:"a-generic-implementation-of-lending-trait"},"A generic implementation of ",(0,s.kt)("inlineCode",{parentName:"h2"},"Lending")," trait"),(0,s.kt)("p",null,"The same logic is used during definition of the implementation for ",(0,s.kt)("inlineCode",{parentName:"p"},"Lending")," trait."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Storage<pausable::Data>")," restriction is required to use ",(0,s.kt)("inlineCode",{parentName:"p"},"when_paused"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"when_not_paused")," modifiers\nfrom ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/blob/main/contracts/src/security/pausable/mod.rs#L24"},"pausable"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"// Importing everything publicly from traits allows you to import \n// every stuff related to lending by one import\npub use crate::{\n  impls::lending::{\n    data,\n    data::*,\n    lending,\n    lending_permissioned::{\n      Internal,\n      *,\n    },\n    *,\n  },\n  traits::lending::*,\n};\n\nuse crate::traits::{\n  loan::{\n    LoanInfo,\n    LoanRef,\n  },\n  shares::SharesRef,\n};\nuse ink::prelude::vec::Vec;\nuse openbrush::{\n  contracts::{\n    pausable::*,\n    traits::{\n      psp22::PSP22Ref,\n      psp34::Id,\n    },\n  },\n  modifiers,\n  traits::{\n    AccountId,\n    Balance,\n    Storage,\n    Timestamp,\n  },\n};\n\npub const YEAR: Timestamp = 60 * 60 * 24 * 365;\n\npub trait LendingImpl: Storage<data::Data> + lending_internal::Internal + Storage<pausable::Data> {\n  fn total_asset(&self, asset_address: AccountId) -> Result<Balance, LendingError> {\n    // get asset from mapping\n    if let Some(mapped_asset) = self\n            .data::<data::Data>()\n            .assets_lended\n            .get(&asset_address){\n      let contract = Self::env().account_id();\n      let available = PSP22Ref::balance_of(&asset_address, contract);\n      let unavailable = PSP22Ref::balance_of(&mapped_asset, contract);\n      Ok(available + unavailable)\n    }else {\n      // return error if the asset is not supported\n      Err(LendingError::AssetNotSupported)\n    }\n  }\n\n  fn total_shares(&self, asset_address: AccountId) -> Result<Balance, LendingError> {\n    // get asset from mapping\n    if let Some(mapped_asset) = self\n            .data::<data::Data>()\n            .asset_shares\n            .get(&asset_address) {\n      Ok(PSP22Ref::total_supply(&mapped_asset))\n    } else {\n      Err(LendingError::AssetNotSupported)\n    }\n  }\n\n  fn get_asset_shares(&self, asset_address: AccountId) -> Result<AccountId, LendingError> {\n    self\n            .data::<data::Data>()\n            .asset_shares\n            .get(&asset_address)\n            .ok_or(LendingError::AssetNotSupported)\n  }\n\n  fn is_accepted_lending(&self, asset_address: AccountId) -> bool {\n    self\n            .data::<data::Data>()\n            .asset_shares\n            .get(&asset_address)\n            .is_some()\n  }\n\n  fn is_accepted_collateral(&self, asset_address: AccountId) -> bool {\n    self.data::<data::Data>()\n            .collateral_accepted\n            .get(&asset_address)\n            .unwrap_or(false)\n  }\n\n  #[modifiers(when_not_paused)]\n  fn lend_assets(&mut self, asset_address: AccountId, amount: Balance) -> Result<(), LendingError> {\n    // we will be using these often so we store them in variables\n    let lender = Self::env().caller();\n    let contract = Self::env().account_id();\n    // ensure the user gave allowance to the contract\n    if PSP22Ref::allowance(&asset_address, lender, contract) < amount {\n      return Err(LendingError::InsufficientAllowanceToLend)\n    }\n    // ensure the user has enough assets\n    if PSP22Ref::balance_of(&asset_address, lender) < amount {\n      return Err(LendingError::InsufficientBalanceToLend)\n    }\n    // how much assets is already in the contract\n    // if the asset is not accepted by the contract, this function will return an error\n    let total_asset = self.total_asset(asset_address)?;\n    // transfer the assets from user to the contract|\n    PSP22Ref::transfer_from_builder(&asset_address, lender, contract, amount, Vec::<u8>::new())\n            .call_flags(ink::env::CallFlags::default().set_allow_reentry(true))\n            .try_invoke()\n            .unwrap()?;\n    // if no assets were deposited yet we will mint the same amount of shares as deposited `amount`\n    let new_shares = if total_asset == 0 {\n      amount\n    } else {\n      // else we calculate how much shares will belong us after depositing the `amount`\n      (amount * self.total_shares(asset_address)?) / total_asset\n    };\n    let reserve_asset = get_reserve_asset(self, &asset_address)?;\n    // mint the shares token to the user\n    SharesRef::mint(&reserve_asset, lender, new_shares)?;\n    Ok(())\n  }\n\n  #[modifiers(when_not_paused)]\n  fn borrow_assets(\n    &mut self,\n    asset_address: AccountId,\n    collateral_address: AccountId,\n    amount: Balance,\n  ) -> Result<(), LendingError> {\n    // we will be using these often so we store them in variables\n    let borrower = Self::env().caller();\n    let contract = Self::env().account_id();\n    // ensure this asset is accepted as collateral\n    if !self.is_accepted_collateral(collateral_address) {\n      return Err(LendingError::AssetNotSupported)\n    }\n    // ensure the user gave allowance to the contract\n    if PSP22Ref::allowance(&collateral_address, borrower, contract) < amount {\n      return Err(LendingError::InsufficientAllowanceForCollateral)\n    }\n    // ensure the user has enough collateral assets\n    if PSP22Ref::balance_of(&collateral_address, borrower) < amount {\n      return Err(LendingError::InsufficientCollateralBalance)\n    }\n    let reserve_asset = get_reserve_asset(self, &asset_address)?;\n\n    // we will find out the price of deposited collateral\n    let price = get_asset_price(self, &amount, &collateral_address, &asset_address);\n    // we will set the liquidation price to be 75% of current price\n    let liquidation_price = (price * 75) / 100;\n    // borrow amount is 70% of collateral\n    let borrow_amount = (price * 70) / 100;\n    // ensure the liquidation price is greater than borrowed amount to avoid misuses\n    if borrow_amount >= liquidation_price {\n      return Err(LendingError::AmountNotSupported)\n    }\n    // ensure we have enough assets in the contract\n    if PSP22Ref::balance_of(&asset_address, contract) < borrow_amount {\n      return Err(LendingError::InsufficientBalanceInContract)\n    }\n    // we will transfer the collateral to the contract\n    PSP22Ref::transfer_from_builder(&collateral_address, borrower, contract, amount, Vec::<u8>::new())\n            .call_flags(ink::env::CallFlags::default().set_allow_reentry(true))\n            .try_invoke()\n            .unwrap()?;\n    // create loan info\n    let loan_info = LoanInfo {\n      borrower,\n      collateral_token: collateral_address,\n      collateral_amount: amount,\n      borrow_token: asset_address,\n      borrow_amount,\n      liquidation_price,\n      timestamp: Self::env().block_timestamp(),\n      liquidated: false,\n    };\n\n    let load_account = self.data::<data::Data>().loan_account;\n    LoanRef::create_loan(&load_account, loan_info)?;\n    // transfer assets to borrower\n    PSP22Ref::transfer(&asset_address, borrower, borrow_amount, Vec::<u8>::new())?;\n    // mint `borrow_amount` of the reserve token\n    SharesRef::mint(&reserve_asset, contract, borrow_amount)?;\n    Ok(())\n  }\n\n  fn repay(&mut self, loan_id: Id, repay_amount: Balance) -> Result<bool, LendingError> {\n    // REPAYING (borrower: B, nft, repayAmount: X):\n    let initiator = Self::env().caller();\n    let contract = Self::env().account_id();\n    let loan_account = self.data::<data::Data>().loan_account;\n    let apy = 1000;\n    // initiator must own the nft\n    if LoanRef::owner_of(&loan_account, loan_id.clone()) != Some(initiator) {\n      return Err(LendingError::NotTheOwner)\n    }\n    let loan_info = LoanRef::get_loan_info(&loan_account, loan_id.clone())?;\n    if loan_info.liquidated {\n      LoanRef::delete_loan(&loan_account, initiator, loan_id.clone())?;\n      return Ok(false)\n    }\n\n    // ensure initiator has enough allowance\n    if PSP22Ref::allowance(&loan_info.borrow_token, initiator, contract) < repay_amount {\n      return Err(LendingError::InsufficientAllowanceToRepay)\n    }\n    // ensure initiator has enough balance\n    if PSP22Ref::balance_of(&loan_info.borrow_token, initiator) < repay_amount {\n      return Err(LendingError::InsufficientBalanceToRepay)\n    }\n    let time_passed = Self::env().block_timestamp() - loan_info.timestamp;\n    let total_apy = (apy * time_passed as Balance) / YEAR as Balance;\n    let to_repay = (((loan_info.borrow_amount) * (10000 + total_apy)) / 10000) + 1;\n    let reserve_asset = get_reserve_asset(self, &loan_info.borrow_token)?;\n    if repay_amount >= to_repay {\n      PSP22Ref::transfer_from_builder(&loan_info.borrow_token, initiator, contract, to_repay, Vec::<u8>::new())\n              .call_flags(ink::env::CallFlags::default().set_allow_reentry(true))\n              .try_invoke()\n              .unwrap()?;\n      PSP22Ref::transfer(\n        &loan_info.collateral_token,\n        initiator,\n        loan_info.collateral_amount,\n        Vec::<u8>::new(),\n      )?;\n      LoanRef::delete_loan(&loan_account, initiator, loan_id)?;\n      SharesRef::burn(&reserve_asset, Self::env().caller(), loan_info.borrow_amount)?;\n    } else {\n      PSP22Ref::transfer_from_builder(\n        &loan_info.borrow_token,\n        initiator,\n        contract,\n        repay_amount,\n        Vec::<u8>::new(),\n      )\n              .call_flags(ink::env::CallFlags::default().set_allow_reentry(true))\n              .try_invoke()\n              .unwrap()?;\n      let to_return = (repay_amount * loan_info.collateral_amount) / to_repay;\n      PSP22Ref::transfer(&loan_info.collateral_token, initiator, to_return, Vec::<u8>::new())?;\n      SharesRef::mint(\n        &reserve_asset,\n        contract,\n        to_repay - repay_amount,\n      )?;\n      LoanRef::update_loan(\n        &loan_account,\n        loan_id.clone(),\n        to_repay - repay_amount,\n        Self::env().block_timestamp(),\n        loan_info.collateral_amount - to_return,\n      )?;\n    }\n    Ok(true)\n  }\n\n  fn withdraw_asset(\n    &mut self,\n    shares_address: AccountId,\n    shares_amount: Balance,\n  ) -> Result<(), LendingError> {\n    let withdraw_asset = get_asset_from_shares(self, &shares_address)?;\n    let withdraw_amount =\n            (shares_amount * self.total_asset(withdraw_asset)?) / PSP22Ref::total_supply(&shares_address);\n    if withdraw_amount > PSP22Ref::balance_of(&withdraw_asset, Self::env().account_id()) {\n      return Err(LendingError::InsufficientBalanceInContract)\n    }\n\n    SharesRef::burn(&shares_address, Self::env().caller(), shares_amount)?;\n    PSP22Ref::transfer(&withdraw_asset, Self::env().caller(), withdraw_amount, Vec::<u8>::new())?;\n    Ok(())\n  }\n\n  fn liquidate_loan(&mut self, loan_id: Id) -> Result<(), LendingError> {\n    let loan_account = self.data::<data::Data>().loan_account;\n    let loan_info = LoanRef::get_loan_info(&loan_account, loan_id.clone())?;\n\n    if loan_info.liquidated {\n      return Err(LendingError::LoanLiquidated)\n    }\n\n    let price = get_asset_price(\n      self,\n      &loan_info.collateral_amount,\n      &loan_info.collateral_token,\n      &loan_info.borrow_token,\n    );\n\n    if price <= loan_info.liquidation_price {\n      // if we swapped the collateral to borrow asset we would burn the reserve tokens\n      // let reserve_asset = self._get_reserve_asset(borrow_asset);\n      // PSP22BurnableRef::burn(&reserve_asset, borrow_amount)\n      let reward = (loan_info.collateral_amount * 1000) / 100000;\n      PSP22Ref::transfer(\n        &loan_info.collateral_token,\n        Self::env().caller(),\n        reward,\n        Vec::<u8>::new(),\n      )?;\n      LoanRef::liquidate_loan(&loan_account, loan_id.clone())?;\n    } else {\n      return Err(LendingError::CanNotBeLiquidated)\n    }\n    Ok(())\n  }\n}\n")))}p.isMDXComponent=!0}}]);