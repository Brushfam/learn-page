"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[3749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,b=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,title:"PSP22 Mintable"},s=void 0,i={unversionedId:"OpenBrush/smart-contracts/PSP22/Extensions/mintable",id:"OpenBrush/smart-contracts/PSP22/Extensions/mintable",title:"PSP22 Mintable",description:"This example shows how you can reuse the implementation of",source:"@site/docs/OpenBrush/smart-contracts/PSP22/Extensions/mintable.md",sourceDirName:"OpenBrush/smart-contracts/PSP22/Extensions",slug:"/OpenBrush/smart-contracts/PSP22/Extensions/mintable",permalink:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/mintable",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PSP22 Mintable"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Metadata",permalink:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/metadata"},next:{title:"PSP22 Burnable",permalink:"/docs/OpenBrush/smart-contracts/PSP22/Extensions/burnable"}},p={},l=[{value:"How to use this extension",id:"how-to-use-this-extension",level:2},{value:"Final implementation",id:"final-implementation",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/token/psp22"},"PSP22")," token with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/contracts/src/token/psp22/extensions/mintable.rs"},"PSP22Mintable")," extension."),(0,a.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,a.kt)("p",null,"First, you should implement basic version of ",(0,a.kt)("a",{parentName:"p",href:"/docs/OpenBrush/smart-contracts/PSP22/"},"PSP22"),"."),(0,a.kt)("p",null,"After you can just add implementation of PSP22Mintable via ",(0,a.kt)("inlineCode",{parentName:"p"},"#[openbrush::implementation(PSP22Mintable)]")," attribute."),(0,a.kt)("h2",{id:"final-implementation"},"Final implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[openbrush::implementation(PSP22, PSP22Mintable)]\n#[openbrush::contract]\npub mod my_psp22_mintable {\n    use openbrush::traits::Storage;\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp22: psp22::Data,\n    }\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(total_supply: Balance) -> Self {\n            let mut instance = Self::default();\n\n            psp22::Internal::_mint_to(&mut instance, Self::env().caller(), total_supply).expect("Should mint");\n\n            instance\n        }\n    }\n}\n\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Brushfam/openbrush-contracts/tree/main/examples/psp22_extensions/mintable"},"PSP22 Mintable"),"."),(0,a.kt)("p",null,"And that's it! Your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," is now extended by the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable")," extension and ready to use its functions!"))}m.isMDXComponent=!0}}]);