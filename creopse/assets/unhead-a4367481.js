import{c as T}from"./hookable-e7fd869b.js";import{m as H,P as v}from"./unhead_dom-b5f3dd9b.js";import{d as c,r as y,h as P,a as b,t as E,H as w,V as C,T as k,b as O,c as $}from"./unhead_shared-56c99682.js";const h={critical:2,high:9,low:12,base:-1,title:1,meta:10};function g(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in h?h[e]:10}const S=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function j(){return c({hooks:{"tags:resolve":t=>{const e=r=>{var s;return(s=t.tags.find(n=>n._d===r))==null?void 0:s._p};for(const{prefix:r,offset:s}of S)for(const n of t.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(r))){const o=e(n.tagPriority.replace(r,""));typeof o<"u"&&(n._p=o+s)}t.tags.sort((r,s)=>r._p-s._p).sort((r,s)=>g(r)-g(s))}}})}function A(){return c({hooks:{"tags:resolve":t=>{const{tags:e}=t;let r=e.findIndex(n=>n.tag==="titleTemplate");const s=e.findIndex(n=>n.tag==="title");if(s!==-1&&r!==-1){const n=y(e[r].textContent,e[s].textContent);n!==null?e[s].textContent=n||e[s].textContent:delete e[s]}else if(r!==-1){const n=y(e[r].textContent);n!==null&&(e[r].textContent=n,e[r].tag="title",r=-1)}r!==-1&&delete e[r],t.tags=e.filter(Boolean)}}})}function I(){return c({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}})}const W=["link","style","script","noscript"];function L(){return c({hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=P(t)),t.key&&W.includes(t.tag)&&(t._h=b(t.key),t.props[`data-h-${t._h}`]="")}}})}const m=["script","link","bodyAttrs"];function M(){const t=(e,r)=>{const s={},n={};Object.entries(r.props).forEach(([i,l])=>{i.startsWith("on")&&typeof l=="function"?n[i]=l:s[i]=l});let o;return e==="dom"&&r.tag==="script"&&typeof s.src=="string"&&typeof n.onload<"u"&&(o=s.src,delete s.src),{props:s,eventHandlers:n,delayedSrc:o}};return c({hooks:{"ssr:render":function(e){e.tags=e.tags.map(r=>(!m.includes(r.tag)||!Object.entries(r.props).find(([s,n])=>s.startsWith("on")&&typeof n=="function")||(r.props=t("ssr",r).props),r))},"dom:beforeRenderTag":function(e){if(!m.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:r,eventHandlers:s,delayedSrc:n}=t("dom",e.tag);Object.keys(s).length&&(e.tag.props=r,e.tag._eventHandlers=s,e.tag._delayedSrc=n)},"dom:renderTag":function(e){const r=e.$el;if(!e.tag._eventHandlers||!r)return;const s=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:r;Object.entries(e.tag._eventHandlers).forEach(([n,o])=>{const i=`${e.tag._d||e.tag._p}:${n}`,l=n.slice(2).toLowerCase(),a=`data-h-${l}`;if(e.markSideEffect(i,()=>{}),r.hasAttribute(a))return;const d=o;r.setAttribute(a,""),s.addEventListener(l,d),e.entry&&(e.entry._sde[i]=()=>{s.removeEventListener(l,d),r.removeAttribute(a)})}),e.tag._delayedSrc&&r.setAttribute("src",e.tag._delayedSrc)}}})}const D=["templateParams","htmlAttrs","bodyAttrs"];function x(){return c({hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(s=>{t.props[s]&&(t.key=t.props[s],delete t.props[s])});const r=E(t)||(t.key?`${t.tag}:${t.key}`:!1);r&&(t._d=r)},"tags:resolve":function(t){const e={};t.tags.forEach(s=>{const n=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,o=e[n];if(o){let l=s==null?void 0:s.tagDuplicateStrategy;if(!l&&D.includes(s.tag)&&(l="merge"),l==="merge"){const a=o.props;["class","style"].forEach(d=>{s.props[d]&&a[d]&&(d==="style"&&!a[d].endsWith(";")&&(a[d]+=";"),s.props[d]=`${a[d]} ${s.props[d]}`)}),e[n].props={...a,...s.props};return}else if(s._e===o._e){o._duped=o._duped||[],s._d=`${o._d}:${o._duped.length+1}`,o._duped.push(s);return}}const i=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(w.includes(s.tag)&&i===0){delete e[n];return}e[n]=s});const r=[];Object.values(e).forEach(s=>{const n=s._duped;delete s._duped,r.push(s),n&&r.push(...n)}),t.tags=r}}})}function u(t,e){function r(o){if(["s","pageTitle"].includes(o))return e.pageTitle;let i;return o.includes(".")?i=o.split(".").reduce((l,a)=>l&&l[a]||void 0,e):i=e[o],typeof i<"u"?i||"":!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const i=r(o.slice(1));typeof i=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),`${i}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function K(){return c({hooks:{"tags:resolve":t=>{var o;const{tags:e}=t,r=(o=e.find(i=>i.tag==="title"))==null?void 0:o.textContent,s=e.findIndex(i=>i.tag==="templateParams"),n=s!==-1?e[s].props:{};n.pageTitle=n.pageTitle||r||"";for(const i of e)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=u(i.textContent,n);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=u(i.props.content,n);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=u(i.props.href,n);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(l,a)=>typeof a=="string"?u(a,n):a)}catch{}t.tags=e.filter(i=>i.tag!=="templateParams")}}})}const B=typeof window<"u";let _;function R(t){return _=t}function Z(){return _}async function J(t,e){const r={tag:t,props:{}};return t==="templateParams"?(r.props=e,r):["title","titleTemplate"].includes(t)?(r.textContent=e instanceof Promise?await e:e,r):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?r.props.src=e:r.innerHTML=e,r):!1:(r.props=await G(t,{...e}),r.props.children&&(r.props.innerHTML=r.props.children),delete r.props.children,Object.keys(r.props).filter(s=>k.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||O.includes(r.tag))&&(r[s]=r.props[s]),delete r.props[s]}),["innerHTML","textContent"].forEach(s=>{if(r.tag==="script"&&typeof r[s]=="string"&&["application/ld+json","application/json"].includes(r.props.type))try{r[s]=JSON.parse(r[s])}catch{r[s]=""}typeof r[s]=="object"&&(r[s]=JSON.stringify(r[s]))}),r.props.class&&(r.props.class=F(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r)}function F(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function G(t,e){for(const r of Object.keys(e)){const s=r.startsWith("data-");e[r]instanceof Promise&&(e[r]=await e[r]),String(e[r])==="true"?e[r]=s?"true":"":String(e[r])==="false"&&(s?e[r]="false":delete e[r])}return e}const U=10;async function V(t){const e=[];return Object.entries(t.resolvedInput).filter(([r,s])=>typeof s<"u"&&C.includes(r)).forEach(([r,s])=>{const n=$(s);e.push(...n.map(o=>J(r,o)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((r,s)=>(r._e=t._i,r._p=(t._i<<U)+s,r))}function q(){return[x(),j(),K(),A(),L(),M(),I()]}function N(t={}){return[v({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function ee(t={}){const e=Q({...t,plugins:[...N(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=H(e.resolvedOptions.document)),R(e),e}function Q(t={}){let e=[],r={},s=0;const n=T();t!=null&&t.hooks&&n.addHooks(t.hooks),t.plugins=[...q(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(l=>l.hooks&&n.addHooks(l.hooks)),t.document=t.document||(B?document:void 0);const o=()=>n.callHook("entries:updated",i),i={resolvedOptions:t,headEntries(){return e},get hooks(){return n},use(l){l.hooks&&n.addHooks(l.hooks)},push(l,a){const d={_i:s++,input:l,_sde:{}};return a!=null&&a.mode&&(d._m=a==null?void 0:a.mode),a!=null&&a.transform&&(d._t=a==null?void 0:a.transform),e.push(d),o(),{dispose(){e=e.filter(f=>f._i!==d._i?!0:(r={...r,...f._sde||{}},f._sde={},o(),!1))},patch(f){e=e.map(p=>(p._i===d._i&&(d.input=p.input=f,o()),p))}}},async resolveTags(){const l={tags:[],entries:[...e]};await n.callHook("entries:resolve",l);for(const a of l.entries){const d=a._t||(f=>f);if(a.resolvedInput=d(a.resolvedInput||a.input),a.resolvedInput)for(const f of await V(a)){const p={tag:f,entry:a,resolvedOptions:i.resolvedOptions};await n.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await n.callHook("tags:resolve",l),l.tags},_popSideEffectQueue(){const l={...r};return r={},l},_elMap:{}};return i.hooks.callHook("init",i),i}export{ee as c,Z as g};