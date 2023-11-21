"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,title:"PSP22 Pallet Metadata"},s=void 0,o={unversionedId:"OpenBrush/smart-contracts/PSP22-Pallet/Extensions/metadata",id:"OpenBrush/smart-contracts/PSP22-Pallet/Extensions/metadata",title:"PSP22 Pallet Metadata",description:"This example shows how you can reuse the implementation of PSP22 token with the PSP22Metadata extension via pallet-assets chain extension.",source:"@site/docs/OpenBrush/smart-contracts/PSP22-Pallet/Extensions/metadata.md",sourceDirName:"OpenBrush/smart-contracts/PSP22-Pallet/Extensions",slug:"/OpenBrush/smart-contracts/PSP22-Pallet/Extensions/metadata",permalink:"/docs/OpenBrush/smart-contracts/PSP22-Pallet/Extensions/metadata",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22 Pallet Metadata"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Pallet",permalink:"/docs/OpenBrush/smart-contracts/PSP22-Pallet/"},next:{title:"PSP22 Pallet Mintable",permalink:"/docs/OpenBrush/smart-contracts/PSP22-Pallet/Extensions/mintable"}},i={},p=[{value:"Step 1: Implement features",id:"step-1-implement-features",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Define constructor",id:"step-3-define-constructor",level:2},{value:"Final code",id:"final-code",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/token/psp22_pallet"},"PSP22")," token with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/token/psp22_pallet/extensions/metadata.rs"},"PSP22Metadata")," extension via ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-assets")," chain extension."),(0,r.kt)("p",null,"First, you should implement basic version of ",(0,r.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/PSP22-Pallet/"},"PSP22 Pallet"),"."),(0,r.kt)("h2",{id:"step-1-implement-features"},"Step 1: Implement features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"openbrush::contract")," macro instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"ink::contract"),"."),(0,r.kt)("li",{parentName:"ul"},"Implement ",(0,r.kt)("inlineCode",{parentName:"li"},"PSP22PalletMetadata")," via `#","[openbrush::implementation]",".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[openbrush::contract]\n#[openbrush::implementation(PSP22Pallet, PSP22PalletMetadata)]\npub mod my_psp22_pallet {\n    ...\n}\n')),(0,r.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,r.kt)("p",null,"Declare storage struct and declare the field related to the metadata module data structure.\nThen you need to derive the ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," trait and mark the corresponding field with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"#[storage_field]")," attribute. Deriving this trait allows you to reuse the\n",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," extension in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22 Pallet")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, Storage)]\npub struct Contract {\n    #[storage_field]\n    pallet: psp22_pallet::Data,\n}\n")),(0,r.kt)("h2",{id:"step-3-define-constructor"},"Step 3: Define constructor"),(0,r.kt)("p",null,"Define constructor. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," contract is ready!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl Contract {\n    /// During instantiation of the contract, you need to pass native tokens as a deposit\n    /// for asset creation.\n    #[ink(constructor)]\n    #[ink(payable)]\n    pub fn new(\n        asset_id: u32,\n        min_balance: Balance,\n        total_supply: Balance,\n        name: String,\n        symbol: String,\n        decimal: u8,\n    ) -> Self {\n        let mut instance = Self::default();\n\n        psp22_pallet::Internal::_create(&mut instance, asset_id, Self::env().account_id(), min_balance)\n            .expect("Should create an asset");\n        instance.pallet.asset_id.set(&asset_id);\n        instance.pallet.origin.set(&Origin::Caller);\n        instance\n            .pallet\n            .pallet_assets\n            .get_or_default()\n            .set_metadata(asset_id, name.into(), symbol.into(), decimal)\n            .expect("Should set metadata");\n        psp22_pallet::Internal::_mint_to(&mut instance, Self::env().caller(), total_supply).expect("Should mint");\n\n        instance\n    }\n}\n')),(0,r.kt)("h2",{id:"final-code"},"Final code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[openbrush::implementation(PSP22Pallet, PSP22PalletMetadata)]\n#[openbrush::contract]\npub mod my_psp22_pallet_metadata {\n    use openbrush::traits::Storage;\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        pallet: psp22_pallet::Data,\n    }\n\n    impl Contract {\n        /// During instantiation of the contract, you need to pass native tokens as a deposit\n        /// for asset creation.\n        #[ink(constructor)]\n        #[ink(payable)]\n        pub fn new(\n            asset_id: u32,\n            min_balance: Balance,\n            total_supply: Balance,\n            name: String,\n            symbol: String,\n            decimal: u8,\n        ) -> Self {\n            let mut instance = Self::default();\n\n            psp22_pallet::Internal::_create(&mut instance, asset_id, Self::env().account_id(), min_balance)\n                .expect("Should create an asset");\n            instance.pallet.asset_id.set(&asset_id);\n            instance.pallet.origin.set(&Origin::Caller);\n            instance\n                .pallet\n                .pallet_assets\n                .get_or_default()\n                .set_metadata(asset_id, name.into(), symbol.into(), decimal)\n                .expect("Should set metadata");\n            psp22_pallet::Internal::_mint_to(&mut instance, Self::env().caller(), total_supply).expect("Should mint");\n\n            instance\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);