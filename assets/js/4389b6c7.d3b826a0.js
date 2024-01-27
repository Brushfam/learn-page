"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[4106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"PSP22"},s=void 0,i={unversionedId:"OpenBrush/smart-contracts/PSP22/psp22",id:"OpenBrush/smart-contracts/PSP22/psp22",title:"PSP22",description:"This example shows how you can reuse the implementation of PSP22 token. Also, this example shows how you can customize the logic, for example, to reject transferring tokens to hated_account.",source:"@site/docs/OpenBrush/smart-contracts/PSP22/psp22.md",sourceDirName:"OpenBrush/smart-contracts/PSP22",slug:"/OpenBrush/smart-contracts/PSP22/",permalink:"/docs/OpenBrush/smart-contracts/PSP22/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22"},sidebar:"tutorialSidebar",previous:{title:"Payment Splitter",permalink:"/docs/OpenBrush/smart-contracts/payment-splitter"},next:{title:"PSP22 Metadata",permalink:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/metadata"}},p={},c=[{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Customize your contract",id:"step-3-customize-your-contract",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/token/psp22"},"PSP22")," token. Also, this example shows how you can customize the logic, for example, to reject transferring tokens to ",(0,a.kt)("inlineCode",{parentName:"p"},"hated_account"),"."),(0,a.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/overview/#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"psp22")," feature, embed modules data structures and implement them via ",(0,a.kt)("inlineCode",{parentName:"p"},"#[openbrush::implementation]")," macro\nas described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/overview/#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,a.kt)("p",null,"The main trait is ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22"),"."),(0,a.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,a.kt)("p",null,"Define constructor where you mint tokens to caller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'impl Contract {\n    #[ink(constructor)]\n    pub fn new(total_supply: Balance) -> Self {\n        let mut instance = Self {\n            psp22: Default::default(),\n            hated_storage: HatedStorage {\n                hated_account: [255; 32].into(),\n            },\n        };\n\n        Internal::_mint_to(&mut instance, Self::env().caller(), total_supply).expect("Should mint");\n\n        instance\n    }\n}\n')),(0,a.kt)("h2",{id:"step-3-customize-your-contract"},"Step 3: Customize your contract"),(0,a.kt)("p",null,"Customize it by adding hated account logic. It will contain two public methods ",(0,a.kt)("inlineCode",{parentName:"p"},"set_hated_account")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"get_hated_account"),".\nAlso we will override ",(0,a.kt)("inlineCode",{parentName:"p"},"_before_token_transfer")," method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," implementation(that methods defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"Transfer")," trait),\nand we will add the ",(0,a.kt)("inlineCode",{parentName:"p"},"hated_account: AccountId")," field to the structure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n// pub use my_psp22::*;\npub use openbrush::traits::{\n    AccountId,\n    Storage,\n};\n\n// we need to expand this struct before the contract macro is expanded\n// that is why we declare it here for this example\n#[ink::storage_item]\n#[openbrush::accessors(HatedStorageAccessors)]\n#[derive(Debug)]\npub struct HatedStorage {\n    #[get]\n    #[set]\n    pub hated_account: AccountId,\n}\n\n#[openbrush::implementation(PSP22)]\n#[openbrush::contract]\npub mod my_psp22 {\n    use crate::*;\n    use openbrush::traits::String;\n\n    #[ink(storage)]\n    #[derive(Storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp22: psp22::Data,\n        #[storage_field]\n        hated_storage: HatedStorage,\n    }\n\n    #[overrider(psp22::Internal)]\n    fn _before_token_transfer(\n        &mut self,\n        _from: Option<&AccountId>,\n        to: Option<&AccountId>,\n        _amount: &Balance,\n    ) -> Result<(), PSP22Error> {\n        if to == Some(&self.hated_storage.hated_account) {\n            return Err(PSP22Error::Custom(String::from("I hate this account!")))\n        }\n        Ok(())\n    }\n\n    impl HatedStorageAccessors for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(total_supply: Balance) -> Self {\n            let mut instance = Self {\n                psp22: Default::default(),\n                hated_storage: HatedStorage {\n                    hated_account: [255; 32].into(),\n                },\n            };\n\n            Internal::_mint_to(&mut instance, Self::env().caller(), total_supply).expect("Should mint");\n\n            instance\n        }\n    }\n}\n\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp22"},"PSP22"),"."),(0,a.kt)("p",null,"Also you can use extensions for PSP22 token:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/metadata"},"PSP22Metadata"),": metadata for PSP22."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/mintable"},"PSP22Mintable"),": creation of new tokens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/burnable"},"PSP22Burnable"),": destruction of own tokens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/wrapper"},"PSP22Wrapper"),": token wrapper for PSP22."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/flashmint"},"PSP22FlashMint"),": extension which allows the user to perform flashloans on the token by minting and burning the token."),(0,a.kt)("p",null,"Check out the utilities for PSP22 token:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/PSP22/Utils/token-timelock"},"PSP22TokenTimelock"),": utility for locking PSP22 tokens for a specified time."))}m.isMDXComponent=!0}}]);