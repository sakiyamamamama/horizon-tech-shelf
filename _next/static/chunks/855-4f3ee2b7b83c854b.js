"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{6855:(e,t,l)=>{l.d(t,{A:()=>P});var n=l(4848),s=l(6540);async function r(e){let t=await fetch("/horizon-atlas/notion_data/notionDatabase.json"),l=await t.json();for(let t of(console.log(l),l)){if(e===t.id||e===t.id.replaceAll("-",""))return{pageId:t.slug,isChildPage:!1,title:t.title,slug:t.slug};let l=await fetch("/horizon-atlas/notion_data/eachPage/".concat(t.slug,".json"));for(let n of(await l.json()))if(n.blockId===e||e===n.blockId.replaceAll("-",""))return{pageId:n.blockId,isChildPage:!0,title:n.parent.slice(2),slug:t.slug}}return{pageId:"",isChildPage:!1,title:"",slug:""}}async function a(e){if(!e)return[];let t=[];for(let{type:l,regex:n}of[{type:"link",regex:/\[([^\]]+)\]\(([^\)]+)\)/g},{type:"bold",regex:/\*\*(.*?)\*\*/g},{type:"italic",regex:/_(.*?)_/g},{type:"code",regex:/`(.*?)`/g},{type:"underline",regex:/<u>(.*?)<\/u>/g}]){let s;for(;null!==(s=n.exec(e));)t.push({startIndex:s.index,endIndex:s.index+s[0].length,type:l})}let l=function(e){if(0===e.length)return[];let t=e.sort((e,t)=>e.startIndex-t.startIndex),l=[],n=t[0];for(let e=1;e<t.length;e++){let s=t[e];n.endIndex>s.startIndex?n={startIndex:n.startIndex,endIndex:Math.max(n.endIndex,s.endIndex),type:i(n.type,s.type)}:(l.push(n),n=s)}return l.push(n),l}(t),n=[],s=0;for(let t of l){let l,c;s<t.startIndex&&n.push({type:"plain",text:e.slice(s,t.startIndex),style:void 0,link:void 0});let o=e.slice(t.startIndex,t.endIndex);if(t.type.includes("link")){let e=o.match(/\[([^\]]+)\]\(([^\)]+)\)/);if(e){let l=e[1];if("string"==typeof(c=e[2])){if("https://"===c.slice(0,8)||"http://"===c.slice(0,7));else{let e=await r(c.slice(1));c=""===e.pageId?"":e.isChildPage?"/posts/post/".concat(e.slug,"/").concat(e.pageId):"/posts/post/".concat(e.slug)}}let o=await a(l);o.length>0?o.forEach(e=>{n.push({...e,type:i(e.type,"link"),link:c})}):n.push({type:"link",text:l,style:{color:"rgb(115, 115, 115)",textDecorationLine:"underline",cursor:"pointer"},link:c}),s=t.endIndex;continue}}t.type.includes("bold")&&(o=o.slice(2,-2),l={fontWeight:700}),t.type.includes("italic")&&(o=o.slice(1,-1),l={...l,fontStyle:"italic"}),t.type.includes("code")&&(o=o.slice(1,-1),l={...l,backgroundColor:"rgb(235 235 235)",color:"rgb(244,63,94)",paddingLeft:4,paddingRight:4,borderRadius:4}),t.type.includes("underline")&&(o=o.slice(3,-4),l={...l,textDecorationLine:"underline"}),n.push({type:t.type,text:o,style:l,link:c}),s=t.endIndex}return s<e.length&&n.push({type:"plain",text:e.slice(s),style:void 0,link:void 0}),n}function i(e,t){return Array.from(new Set(e.split(" ").concat(t.split(" ")))).join(" ")}var c=l(1106),o=l.n(c);function d(e){let{parent:t,mdBlock:l,depth:r,quote:i,slug:c}=e,[d,u]=(0,s.useState)([]);return(0,s.useEffect)(()=>{a(t).then(e=>{u(e)})},[]),(0,n.jsxs)("div",{className:"mb-0.5 mt-1",children:[(0,n.jsx)("p",{children:d.map((e,t)=>void 0===e.link?(0,n.jsx)("span",{style:e.style,children:e.text},t):""===e.link?(0,n.jsx)("span",{style:e.style,children:(0,n.jsx)("span",{className:"text-neutral-500 underline",children:e.text})},t):(0,n.jsx)("span",{style:e.style,children:(0,n.jsx)(o(),{href:e.link,className:"text-neutral-500 underline cursor-pointer hover:text-neutral-800",children:e.text})},t))}),(!1===i||void 0===i)&&0!==l.children.length&&l.children.map((e,t)=>(0,n.jsx)("div",{children:(0,n.jsx)(P,{slug:c,mdBlock:e,depth:r+1})},t))]})}function u(e){let{mdBlock:t}=e,[l,r]=(0,s.useState)([]),i=t.parent.slice(2);return(0,s.useEffect)(()=>{a(i).then(e=>{r(e)})},[]),(0,n.jsx)("div",{id:t.blockId,children:(0,n.jsx)("h1",{className:"mb-1 mt-8 font-bold text-3xl",children:l.map((e,t)=>(0,n.jsx)("span",{style:e.style,children:e.text},t))})})}function p(e){let{mdBlock:t}=e,[l,r]=(0,s.useState)([]),i=t.parent.slice(3);return(0,s.useEffect)(()=>{a(i).then(e=>{r(e)})},[]),(0,n.jsx)("div",{id:t.blockId,children:(0,n.jsx)("h2",{className:"mb-1 mt-6 font-bold text-2xl",children:l.map((e,t)=>(0,n.jsx)("span",{style:e.style,children:e.text},t))})})}function h(e){let{mdBlock:t}=e,[l,r]=(0,s.useState)([]),i=t.parent.slice(4);return(0,s.useEffect)(()=>{a(i).then(e=>{r(e)})},[]),(0,n.jsx)("div",{id:t.blockId,children:(0,n.jsx)("h3",{className:"my-2 mt-4 font-bold text-xl",children:l.map((e,t)=>(0,n.jsx)("span",{style:e.style,children:e.text},t))})})}function x(){return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"border-neutral-300 border-b size-full my-2"})})}var m=l(7725),g=l(2982),f=l(7795),j=l(8885);function y(e){let{mdBlock:t}=e,l=t.parent.split("\n"),r="";for(let e=1;e<l.length-1;e++)r+=(1===e?"":"\n")+l[e];let a=l[0].slice(3),[i,c]=(0,s.useState)(!1),o=async()=>{try{await navigator.clipboard.writeText(r),c(!0),setTimeout(()=>c(!1),2e3)}catch(e){console.error("Failed to copy:",e)}};return(0,n.jsxs)("div",{className:"mb-2 mt-2 relative",children:[(0,n.jsxs)("div",{className:"mb-0",style:{backgroundColor:"rgb(250,250,250)"},children:[(0,n.jsx)("p",{children:(0,n.jsx)("span",{className:"text-neutral-600 text-sm px-3 py-1 rounded",style:{background:"rgb(235, 235, 235)"},children:a})}),(0,n.jsx)("button",{onClick:o,className:"h-5 absolute top-1 right-2 px-2 text-sm rounded text-neutral-400 hover:text-neutral-500",children:i?(0,n.jsxs)("span",{className:"flex",children:["copied ! ",(0,n.jsx)(j.iyF,{size:24})]}):(0,n.jsx)(f.$G0,{size:24})})]}),(0,n.jsx)(g.A,{style:m.KQ,language:a,children:String(r).replace(/\n$/,"")})]})}function b(e){let{mdBlock:t,depth:l,slug:s}=e,r=t.parent.split(" ");return(0,n.jsxs)("div",{className:"my-1.5",children:[(0,n.jsxs)("p",{className:"flex",children:[(0,n.jsx)("span",{className:"mr-2",children:r[0]}),(0,n.jsx)(d,{slug:s,quote:!0,mdBlock:t,parent:r[1],depth:l+1})]}),t.children.map((e,t)=>(0,n.jsx)("div",{style:{marginLeft:(l+1)*16},children:(0,n.jsx)(P,{slug:s,mdBlock:e,depth:l+1})},t))]})}function k(e){let{mdBlock:t,depth:l,slug:s}=e,r=t.parent.split(" ");return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{className:"my-2 flex",children:[(0,n.jsx)("span",{className:"font-bold mr-1 text-xl",children:"・"}),(0,n.jsx)(d,{slug:s,quote:!0,parent:r[1],depth:l+1,mdBlock:t})]}),t.children.map((e,t)=>(0,n.jsx)("div",{style:{marginLeft:(l+1)*16},children:(0,n.jsx)(P,{slug:s,mdBlock:e,depth:l+1})},t))]})}function v(e){let{mdBlock:t,depth:l,slug:s}=e,r=t.parent.split("> ")[1];return(0,n.jsxs)("div",{className:"bg-white p-2 px-3 mb-3 mt-4 border border-neutral-300 rounded",children:[(0,n.jsx)(d,{slug:s,mdBlock:t,quote:!0,parent:r,depth:l+1}),t.children.map((e,t)=>(0,n.jsx)(P,{slug:s,mdBlock:e,depth:l+1},t))]})}function I(e){let{mdBlock:t,depth:l,slug:s}=e,r=t.parent.split(" ")[1];return(0,n.jsxs)("div",{className:"my-1 border-l-2 border-neutral-800 pl-3",children:[(0,n.jsx)(d,{slug:s,mdBlock:t,quote:!0,parent:r,depth:l+1}),t.children.map((e,t)=>(0,n.jsx)(P,{slug:s,mdBlock:e,depth:l+1},t))]})}var N=l(9965),w=l.n(N);function B(e){let{mdBlock:t,slug:l}=e,[r,a]=(0,s.useState)(null);return((0,s.useEffect)(()=>{let e=async e=>{let n="/horizon-atlas/notion_data/eachPage/".concat(l,"/image/").concat(t.blockId,".").concat(e);try{(await fetch(n,{method:"HEAD"})).ok&&a(n)}catch(e){console.error("画像の取得に失敗: ".concat(n),e)}};(async()=>{await e("png"),r||await e("jpg")})()},[t.blockId]),r)?(0,n.jsx)("div",{children:(0,n.jsx)(w(),{height:400,width:400,src:r,alt:"image_block",style:{width:"auto",height:"100%",display:"block",maxHeight:"400px"}})}):null}function _(e){let{mdBlock:t,depth:l,slug:s}=e,r=t.parent.split("\n").map(e=>e.slice(2,-2));return(0,n.jsx)("div",{className:"overflow-x-auto whitespace-nowrap my-2",children:(0,n.jsx)("table",{className:"table-auto border-collapse border border-neutral-500",children:r.map((e,r)=>{let a=e.split(" | ");return(0,n.jsx)("tr",{children:a.map((e,a)=>0===r?(0,n.jsx)("th",{className:"border border-gray-500 px-4 py-2",children:(0,n.jsx)(d,{slug:s,quote:!0,mdBlock:t,parent:e,depth:l+1})},a):1===r?null:(0,n.jsx)("td",{className:"border border-gray-500 px-4 py-2",children:(0,n.jsx)(d,{slug:s,mdBlock:t,quote:!0,parent:e,depth:l+1})},a))},r)})})})}var S=l(6715);function U(e){let{mdBlock:t}=e,l=t.parent.split("## ")[1],s=t.blockId,{slug:r,childId:a}=(0,S.useRouter)().query,i=Array.isArray(a)?a.filter(Boolean):a?[a]:[],c="/posts/post/".concat(r,"/").concat([...i,s].join("/")).replace(/\/+/g,"/");return(0,n.jsx)("div",{className:"my-2",children:(0,n.jsx)(o(),{href:c,className:"text-neutral-500 underline hover:text-neutral-600",children:l})})}function E(e){let{mdBlock:t,slug:l}=e,[r,a]=(0,s.useState)(),i=t.parent.match(/\((.*?)\)/g);if((0,s.useEffect)(()=>{(async()=>{var e,n;let s=await fetch("/horizon-atlas/notion_data/eachPage/".concat(l,"/ogsData/").concat(t.blockId,".json")),r=await s.json();if(console.log((null===(e=r.favicon)||void 0===e?void 0:e.slice(0,8))==="https://"),(null===(n=r.favicon)||void 0===n?void 0:n.slice(0,8))!=="https://"){let e=new URL(r.ogUrl).origin,t=r.favicon;void 0!==t&&"/"!==t[0]&&(t="/"+t);let l=e+t;a({ogTitle:r.ogTitle,ogDescription:r.ogDescription,ogSiteName:r.ogSiteName,ogLocale:r.ogLocale,favicon:l,ogUrl:r.ogUrl,ImageUrl:r.ImageUrl})}else a(r)})()},[]),i)return(0,n.jsx)("div",{className:"my-2 rounded-sm border-2 border-neutral-200 hover:bg-neutral-100",children:(0,n.jsx)(o(),{href:r&&r.ogUrl?r.ogUrl:i[0].slice(1,-1),children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("div",{className:"m-3",children:[(0,n.jsx)("p",{className:"text-neutral-800 line-clamp-1",children:r&&r.ogTitle?r.ogTitle:i[0].slice(1,-1)}),(0,n.jsx)("p",{className:"text-neutral-500 text-sm line-clamp-2",children:r&&r.ogDescription?r.ogDescription:""}),(0,n.jsxs)("div",{className:"flex mb-0 mt-2",children:[r&&void 0!==r.favicon&&(0,n.jsx)("img",{src:r.favicon,className:"w-auto max-h-4 rounded-full m-0 mr-2",alt:"pageIcon"}),(0,n.jsx)("span",{className:"text-neutral-600 text-xs line-clamp-1",children:r&&r.ogUrl?r.ogUrl:i[0].slice(1,-1)})]})]}),r&&void 0!==r.ImageUrl&&void 0!==r.ImageUrl&&(0,n.jsx)("div",{className:"p-0 m-0",style:{lineHeight:0},children:(0,n.jsx)("img",{src:r.ImageUrl,className:"w-96 h-28 rounded-sm lg:w-72",alt:"pageImage"})})]})})})}function C(e){let{mdBlock:t,depth:l,slug:r}=e,[a,i]=(0,s.useState)(!1);return(0,n.jsxs)("div",{className:"my-1 border-neutral-800 pl-1.5 bg-neutral-100",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("button",{className:"text-left space-x-1 p-1 rounded-lg hover:bg-neutral-200 transition",onClick:()=>i(!a),children:a?"▼":"▶︎"}),(0,n.jsx)(d,{slug:r,mdBlock:t,quote:!0,parent:t.parent,depth:l+1})]}),a&&t.children.map((e,t)=>(0,n.jsx)(P,{mdBlock:e,slug:r,depth:l+1},t))]})}let q=function(e){let{mdBlock:t}=e,l=t.parent.match(/\((.*?)\)/g);if(l){let e=l[0].slice(1,-1);return(0,n.jsx)("div",{className:"mx-1.5 my-1.5",children:(0,n.jsx)("iframe",{src:e,style:{width:"100%",height:"300px",border:"none"},allow:"fullscreen"})})}};function D(e){let{mdBlock:t}=e,[l,a]=(0,s.useState)(""),[i,c]=(0,s.useState)("");return(0,s.useEffect)(()=>{(async function(){let e=t.parent.match(/\((.*?)\)/g);if(e){let t=e[0].slice(1,-1),l=await r(t);a(l.isChildPage?"/posts/post/".concat(l.slug,"/").concat(l.pageId):"/posts/post/".concat(l.slug)),c(l.title)}})()},[]),(0,n.jsx)("div",{className:"my-2",children:(0,n.jsx)(o(),{href:l,className:"text-neutral-500 underline hover:text-neutral-600",children:i})})}let L=function(e){let{mdBlock:t}=e,[l,a]=(0,s.useState)([]),[i,c]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{(async function(){c(!0);let{slug:e}=await r(t.blockId);console.log("slug",e);let l=await fetch("/horizon-atlas/notion_data/eachPage/".concat(e,".json")),n=function(e){let t=[];for(let l of e)"heading_1"===l.type?t.push({type:1,parent:l.parent,blockId:l.blockId}):"heading_2"===l.type?t.push({type:2,parent:l.parent,blockId:l.blockId}):"heading_3"===l.type&&t.push({type:3,parent:l.parent,blockId:l.blockId});return t}(await l.json());console.log("findList",n),a(n),c(!1)})()},[]),(0,n.jsx)("div",{id:t.blockId,children:l.map((e,t)=>(0,n.jsxs)("div",{className:"mt-1.5",children:[1===e.type&&(0,n.jsx)("a",{className:"ml-0.5 text-neutral-500 underline cursor-pointer hover:text-neutral-800",href:"#".concat(e.blockId),children:e.parent.slice(2)}),2===e.type&&(0,n.jsx)("a",{className:"ml-5 mt-1 text-neutral-500 underline cursor-pointer hover:text-neutral-800",href:"#".concat(e.blockId),children:e.parent.slice(3)}),3===e.type&&(0,n.jsx)("a",{className:"ml-8 text-neutral-500 underline cursor-pointer hover:text-neutral-800",href:"#".concat(e.blockId),children:e.parent.slice(4)})]},t))})};function P(e){let{mdBlock:t,depth:l,slug:s}=e;if("paragraph"===t.type)return(0,n.jsx)(d,{parent:t.parent,slug:s,mdBlock:t,depth:l});if("heading_1"===t.type)return(0,n.jsx)(u,{mdBlock:t,depth:l});if("heading_2"===t.type)return(0,n.jsx)(p,{mdBlock:t,depth:l});if("heading_3"===t.type)return(0,n.jsx)(h,{mdBlock:t,depth:l});if("divider"===t.type)return(0,n.jsx)(x,{});if("code"===t.type)return(0,n.jsx)(y,{mdBlock:t,depth:l});if("numbered_list_item"===t.type)return(0,n.jsx)(b,{slug:s,mdBlock:t,depth:l});else if("bulleted_list_item"===t.type)return(0,n.jsx)(k,{slug:s,mdBlock:t,depth:l});else if("callout"===t.type)return(0,n.jsx)(v,{slug:s,mdBlock:t,depth:l});else if("quote"===t.type)return(0,n.jsx)(I,{slug:s,mdBlock:t,depth:l});else if("image"===t.type)return(0,n.jsx)(B,{mdBlock:t,depth:l,slug:s});else if("table"===t.type)return(0,n.jsx)(_,{slug:s,mdBlock:t,depth:l});else if("child_page"===t.type)return(0,n.jsx)(U,{mdBlock:t});else if("bookmark"===t.type)return(0,n.jsx)(E,{slug:s,mdBlock:t,depth:l});else if("toggle"===t.type)return(0,n.jsx)(C,{slug:s,mdBlock:t,depth:l});else if("embed"===t.type)return(0,n.jsx)(q,{mdBlock:t,depth:l});else if("link_to_page"===t.type)return(0,n.jsx)(D,{mdBlock:t});else if("table_of_contents"===t.type)return(0,n.jsx)(L,{mdBlock:t});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{})})}}}]);