"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[4195],{6269:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7294),r=a(7961);const s=()=>{const[e,t]=(0,n.useState)();return(0,n.useEffect)((()=>{(async()=>{fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fbrushfam",{headers:{Accept:"application/json"}}).then((e=>e.json())).then((e=>e.items.filter((e=>e.title.length>0)))).then((e=>e.slice(0,9))).then((e=>t(e))).catch((e=>console.log(e)))})()}),[9]),n.createElement("div",{className:"mediumContainer"},n.createElement("div",{className:"sectionTitle"},n.createElement("img",{src:"/img/articles.svg",style:{marginRight:14}}),n.createElement("p",null,"ARTICLES")),n.createElement("div",{className:"mediumBlockContainer"},e?.map(((e,t)=>e.title.match(/[\u0430-\u044f]/)?n.createElement(n.Fragment,null):n.createElement("div",{className:"mediumBlockWrapper",key:t.toString()},n.createElement("a",{href:e.link,target:"_blank",title:e.title,"aria-label":e.title},n.createElement("div",{className:"mediumBlock"},n.createElement("p",{className:"articleTitle"},e.title.replace("&amp;","&")),n.createElement("p",{className:"articleDate"},e.pubDate.slice(0,10)))))))))},l=[{to:"/docs/openbrush",title:n.createElement("img",{src:"/img/openbrush.svg",alt:"openbrush"}),description:"OpenBrush is a library for smart contract development on ink! It provides standard contracts, as well as useful contracts and macros to help you build ink! smart contracts."},{to:"/docs/sol2ink",title:n.createElement("img",{src:"/img/sol2ink.svg",alt:"sol2ink"}),description:"Sol2ink is a tool for easy migration from Solidity to ink! and Rust, helps projects and teams migrate their smart contracts from popular Solidity to Polkadot`s ink!."},{to:"/docs/typechain",title:n.createElement("img",{src:"/img/typechain.svg",alt:"typechain"}),description:"Typechain is a tool that generates type-safe TypeScript interfaces for ink! smart contracts, to improve blockchain and front-end development"},{to:"/docs/obce",title:n.createElement("h3",null,"OBCE"),description:"Chain extensions are a way to extend the functionality available to smart contracts on a given node. It allows your smart contracts to directly use the features of the chain it was deployed on."},{to:"/docs/cargo-contract",title:n.createElement("h3",null,"cargo-contract"),description:"cargo-contract is a command-line (CLI) tool which helps you set up and manage WebAssembly smart contracts written with ink!. You can find it here on GitHub and here on crates.io."},{to:"/docs/phat-contract",title:n.createElement("h3",null,"Phat Contract"),description:"Phat Contract is a kind of decentralized program instead of the smart contract, which supports real-time computation-intensive tasks and have the access to all the services even they are out of the blockchains."},{to:"/docs/substrate-contracts-node",title:n.createElement("h3",null,"substrate-contracts-node"),description:"The substrate-contracts-node is a simple Substrate blockchain which is configured to include the contracts pallet."}];var i=a(9960);const c=()=>n.createElement("div",{className:"toolsContainer"},n.createElement("div",{className:"sectionTitle"},n.createElement("img",{src:"/img/tools.svg",style:{marginRight:14}}),n.createElement("p",null,"TOOLS")),n.createElement("div",{className:"toolsBlockContainer"},l&&l.map(((e,t)=>n.createElement("div",{className:"toolBlockWrapper",key:t.toString()},n.createElement(i.Z,{href:e.to},n.createElement("div",{className:"toolBlock"},e.title,n.createElement("p",{className:"blockDescription"},e.description)))))))),o=[{to:"/tutorials/smart-contract-openbrush",title:"Create your first smart contract using OpenBrush"},{to:"/tutorials/from-solidity-to-ink",title:"From solidity to ink! with Sol2ink"}],m=()=>n.createElement("div",{className:"tutorialContainer"},n.createElement("div",{className:"sectionTitle"},n.createElement("img",{src:"/img/tutorials.svg",style:{marginRight:14}}),n.createElement("p",null,"TUTORIALS")),n.createElement("div",{className:"tutorialBlockContainer"},o&&o.map(((e,t)=>n.createElement("div",{className:"tutorialBlockWrapper",key:t},n.createElement(i.Z,{href:e.to},n.createElement("div",{className:"tutorialBlock"},n.createElement("p",{className:"tutorialTitle"},e.title))))))));function d(){return n.createElement("div",{className:"learnMainWrapper"},n.createElement(r.Z,{title:"Brushfam docs",description:"This page contains useful materials and articles that will accelerate your building with ink!"},n.createElement("main",{className:"learnMainContainer"},n.createElement("div",{className:"learnHeaderContainer"},n.createElement("div",{className:"learnHeaderText"},n.createElement("p",{className:"learnHeaderTitle"},"Learn page"),n.createElement("p",{className:"learnHeaderDescription"},"Here you can find the documentation for ",n.createElement("a",{href:"https://brushfam.io/"},"Brushfam's")," infrastructure products and other trusted and everyday-used tools from the ",n.createElement("a",{href:"https://use.ink/"},"ink!")," ecosystem. This page also contains useful materials and articles that will accelerate your building with ink!"))),n.createElement(c,null),n.createElement(m,null),n.createElement(s,null))))}}}]);