(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{627:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return l},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return u},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let o="refresh",i="navigate",l="restore",u="server-patch",a="prefetch",s="hmr-refresh",c="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5157:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6526:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return O}});let n=r(7677),o=r(544),i=r(4848),l=o._(r(6540)),u=n._(r(961)),a=n._(r(6085)),s=r(7282),c=r(2105),f=r(9641);r(7679);let d=r(7644),p=n._(r(5472)),g=r(1903),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/horizon-atlas/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,o,i,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function b(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:a,decoding:s,className:c,style:f,fetchPriority:d,placeholder:p,loading:h,unoptimized:v,fill:y,onLoadRef:O,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:w,sizesInput:P,onLoad:C,onError:E,...S}=e,x=(0,l.useCallback)(e=>{e&&(E&&(e.src=e.src),e.complete&&m(e,p,O,j,_,v,P))},[r,p,O,j,_,E,v,P]),M=(0,g.useMergedRef)(t,x);return(0,i.jsx)("img",{...S,...b(d),loading:h,width:a,height:u,decoding:s,"data-nimg":y?"fill":"1",className:c,style:f,sizes:o,srcSet:n,src:r,ref:M,onLoad:e=>{m(e.currentTarget,p,O,j,_,v,P)},onError:e=>{w(!0),"empty"!==p&&_(!0),E&&E(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(a.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let O=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d.RouterContext),n=(0,l.useContext)(f.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=h||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:u,onLoadingComplete:a}=e,g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let[b,O]=(0,l.useState)(!1),[j,_]=(0,l.useState)(!1),{props:w,meta:P}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:b,showAltText:j});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...w,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:O,setShowAltText:_,sizesInput:e.sizes,ref:t}),P.priority?(0,i.jsx)(y,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=r(7677),o=r(4848),i=n._(r(6540)),l=r(6847),u=r(7785),a=r(2772),s=r(1278),c=r(6185),f=r(7644),d=r(9258),p=r(6334),g=r(5157),h=r(296),m=r(627),b=r(1903),v=new Set;function y(e,t,r,n,o,i){if(i||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!i){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function O(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let j=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:v,children:j,prefetch:_=null,passHref:w,replace:P,shallow:C,scroll:E,locale:S,onClick:x,onMouseEnter:M,onTouchStart:R,legacyBehavior:z=!1,...I}=e;r=j,z&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let k=i.default.useContext(f.RouterContext),A=i.default.useContext(d.AppRouterContext),N=null!=k?k:A,T=!k,L=!1!==_,D=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:F,as:U}=i.default.useMemo(()=>{if(!k){let e=O(a);return{href:e,as:v?O(v):e}}let[e,t]=(0,l.resolveHref)(k,a,!0);return{href:e,as:v?(0,l.resolveHref)(k,v):t||e}},[k,a,v]),B=i.default.useRef(F),G=i.default.useRef(U);z&&(n=i.default.Children.only(r));let H=z?n&&"object"==typeof n&&n.ref:t,[K,V,W]=(0,p.useIntersection)({rootMargin:"200px"}),q=i.default.useCallback(e=>{(G.current!==U||B.current!==F)&&(W(),G.current=U,B.current=F),K(e)},[U,F,W,K]),Y=(0,b.useMergedRef)(q,H);i.default.useEffect(()=>{N&&V&&L&&y(N,F,U,{locale:S},{kind:D},T)},[U,F,V,S,L,null==k?void 0:k.locale,N,T,D]);let J={ref:Y,onClick(e){z||"function"!=typeof x||x(e),z&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,o,l,a,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?i.default.startTransition(d):d()}(e,N,F,U,P,C,E,S,T)},onMouseEnter(e){z||"function"!=typeof M||M(e),z&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(L||!T)&&y(N,F,U,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:D},T)},onTouchStart:function(e){z||"function"!=typeof R||R(e),z&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(L||!T)&&y(N,F,U,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:D},T)}};if((0,s.isAbsoluteUrl)(U))J.href=U;else if(!z||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,g.getDomainLocale)(U,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);J.href=t||(0,h.addBasePath)((0,c.addLocale)(U,e,null==k?void 0:k.defaultLocale))}return z?i.default.cloneElement(n,J):(0,o.jsx)("a",{...I,...J,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(6540),o=r(4959),i="function"==typeof IntersectionObserver,l=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(6540);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=i(e,n),o.current=i(t,n))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7282:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(7679);let n=r(9197),o=r(2105);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,a,s,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:g,className:h,quality:m,width:b,height:v,fill:y=!1,style:O,overrideSrc:j,onLoad:_,onLoadingComplete:w,placeholder:P="empty",blurDataURL:C,fetchPriority:E,decoding:S="async",layout:x,objectFit:M,objectPosition:R,lazyBoundary:z,lazyRoot:I,...k}=e,{imgConf:A,showAltText:N,blurComplete:T,defaultLoader:L}=t,D=A||o.imageConfigDefault;if("allSizes"in D)u=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);u={...D,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=k.loader||L;delete k.loader,delete k.srcSet;let U="__next_img_default"in F;if(U){if("custom"===u.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(x){"fill"===x&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];e&&(O={...O,...e});let t={responsive:"100vw",fill:"100vw"}[x];t&&!f&&(f=t)}let B="",G=l(b),H=l(v);if((r=c)&&"object"==typeof r&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,C=C||e.blurDataURL,B=e.src,!y){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let K=!p&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,K=!1),u.unoptimized&&(d=!0),U&&c.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0);let V=l(m),W=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},N?{}:{color:"transparent"},O),q=T||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:a,blurHeight:s,blurDataURL:C||"",objectFit:W.objectFit})+'")':'url("'+P+'")',Y=q?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),c=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:a[c]})}}({config:u,src:c,unoptimized:d,width:G,quality:V,sizes:f,loader:F});return{props:{...k,loading:K?"lazy":g,fetchPriority:E,width:G,height:H,decoding:S,className:h,style:{...W,...Y},sizes:J.sizes,srcSet:J.srcSet,src:j||J.src},meta:{unoptimized:d,priority:p,placeholder:P,fill:y}}}},9197:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,a=o?40*o:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return u}});let n=r(7677),o=r(7282),i=r(6526),l=n._(r(5472));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/horizon-atlas/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=i.Image},5472:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3368:(e,t,r)=>{e.exports=r(6085)},9965:(e,t,r)=>{e.exports=r(2364)},1106:(e,t,r)=>{e.exports=r(6397)},6715:(e,t,r)=>{e.exports=r(8440)},5787:(e,t,r)=>{"use strict";r.d(t,{k5:()=>c});var n=r(6540),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=["attr","size","title"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(f,u({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:i,title:a}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),f=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);