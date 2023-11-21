"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[2370],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,b=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(b,o(o({ref:r},p),{},{components:t})):n.createElement(b,o({ref:r},p))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},154:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_position:3,title:"Parsing a library"},o=void 0,l={unversionedId:"Sol2ink/how_it_works/parsing_library",id:"Sol2ink/how_it_works/parsing_library",title:"Parsing a library",description:"When parsing a libraray, Sol2Ink will create a plain Rust file, making all functions public so they can be used in the parsed contract. This file definition may include the following:",source:"@site/docs/Sol2ink/how_it_works/parsing_library.md",sourceDirName:"Sol2ink/how_it_works",slug:"/Sol2ink/how_it_works/parsing_library",permalink:"/docs/Sol2ink/how_it_works/parsing_library",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Parsing a library"},sidebar:"tutorialSidebar",previous:{title:"Parsing an interface",permalink:"/docs/Sol2ink/how_it_works/parsing_interface"},next:{title:"Parsing a contract",permalink:"/docs/Sol2ink/how_it_works/parsing_contract"}},s={},c=[],p={toc:c},u="wrapper";function f(e){let{components:r,...t}=e;return(0,i.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When parsing a libraray, Sol2Ink will create a plain Rust file, making all functions public so they can be used in the parsed contract. This file definition may include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"struct definitions"),(0,i.kt)("li",{parentName:"ul"},"enum definitions"),(0,i.kt)("li",{parentName:"ul"},"function definitions"),(0,i.kt)("li",{parentName:"ul"},"documentation comments"),(0,i.kt)("li",{parentName:"ul"},"state variables (only constants)")),(0,i.kt)("p",null,"After Sol2Ink parses a library, it will move on to the assemble part, where it assembles a Rust file for our library (of course using ink! and OpenBrush where possible) from the parsed structures. The output file will contain the parsed library and include all parsed constant members, and will be saved in ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/src/libs/lib_name.rs"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"lib_name")," is the name of the parsed library. This library will be also exposed in ",(0,i.kt)("inlineCode",{parentName:"p"},"generated/src/libs/mod.rs")," for the project to use. Note that all functions return ",(0,i.kt)("inlineCode",{parentName:"p"},"Result")," by default."),(0,i.kt)("p",null,"To use our library, we can simply import it in our contract, and use its functions."))}f.isMDXComponent=!0}}]);