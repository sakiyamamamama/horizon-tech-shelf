(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{9169:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return t(96062)}])},34189:(e,s,t)=>{"use strict";t.d(s,{A:()=>j});var a=t(74848),n=t(96540),l=t(91106),r=t.n(l),o=t(29965),c=t.n(o),i=t(81007),d=t(8599),h=t(3342),m=t.n(h),u=t(77836);let x=u.env.NOTION_TOKEN2;u.env.NOTION_DATABASE_ID2;let N=new i.Kj({auth:x});new d.NotionToMarkdown({notionClient:N}),new(m())({stdTTL:3600});let f=e=>Array.from(new Set(e.map(e=>e.icon)));async function p(e){try{return(await fetch(e,{method:"HEAD"})).ok}catch(e){return!1}}let j=e=>{let{course:s,posts:t}=e,l=f(t);return(0,n.useEffect)(()=>{let e=[];for(let s of l)p(s).then(s=>{e.push(s)});for(let s of e)if(!s){window.location.reload();break}},[]),(0,a.jsx)(r(),{href:"/posts/course/".concat(s,"/1"),children:(0,a.jsxs)("section",{className:"bg-slate-50 mb-4 mx-auto rounded-md p-3 shadow-2xl hover:shadow-none hover:translate-y-1 hover:bg-neutral-100 transition-all duration-300",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("span",{className:"text-sm text-neutral-500 my-0",children:["カリキュラム数：",t.length]}),(0,a.jsx)("h2",{className:"text-2xl font-medium mt-0",children:s})]}),(0,a.jsx)("div",{className:"",children:t.slice(0,5).map((e,s)=>(0,a.jsxs)("div",{className:"ml-3 text-neutral-500 flex mt-1",children:[""!==l[s]?(0,a.jsx)(c(),{src:l[s],alt:"",height:20,width:20,className:"h-6 w-auto m-0 mr-1.5"}):(0,a.jsx)("p",{children:"・"}),e.title]},s))})]})})}},96944:(e,s,t)=>{"use strict";t.d(s,{DM:()=>l,O6:()=>a,zY:()=>n});let a={title:"Home",id:"/posts"},n={title:"基礎班カリキュラム",id:"/posts/course/basic"},l={title:"検索",id:"/search"}},96062:(e,s,t)=>{"use strict";t.r(s),t.d(s,{__N_SSG:()=>d,default:()=>h});var a=t(74848),n=t(4814),l=t(34189),r=t(91106),o=t.n(r);function c(){return(0,a.jsx)(o(),{href:"/posts/course/basic",children:(0,a.jsxs)("section",{className:"bg-slate-50 mb-4 mx-auto rounded-md p-3 shadow-2xl hover:shadow-none hover:translate-y-1 hover:bg-neutral-100 transition-all duration-300",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("h2",{className:"text-2xl font-medium mt-0",children:"基礎班カリキュラム"})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("p",{className:"text-neutral-500 text-sm",children:"基礎班のカリキュラムです。pythonやFletライブラリを通してアプリ開発を学べます。"})})]})})}t(96540);var i=t(96944),d=!0;let h=e=>{let{courseAndPosts:s,allTags:t}=e;return(0,a.jsxs)(n.A,{headerProps:{pageNavs:[i.O6],allTags:t},children:[(0,a.jsx)("div",{className:"container h-full w-full mx-auto font-mono pt-20",children:(0,a.jsxs)("main",{className:"container w-full mt-16 mb-3",children:[(0,a.jsx)("h1",{className:"text-5xl font-medium text-center mb-16"}),(0,a.jsxs)("section",{className:"gap-3 mx-auto",children:[(0,a.jsx)(c,{}),s.map((e,s)=>(0,a.jsx)(l.A,{course:e.course,posts:e.posts},s))]})]})}),(0,a.jsx)("div",{className:"mb-40"})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[958,481,796,814,636,593,792],()=>s(9169)),_N_E=e.O()}]);