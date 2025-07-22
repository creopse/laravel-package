import{q}from"./vue_runtime-dom-D3WKiRcW.js";import"./vue_runtime-core-CZBc7Bfo.js";import"./vue_reactivity-B2cUHA-s.js";import{r as y}from"./vue_shared-GTvaU3GG.js";import{r as b}from"./vue_compiler-dom-Ao68HxB6.js";/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const P=()=>{};var s={exports:{}},a={};/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var l;function E(){return l||(l=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});var _=b,i=q,n=y;function O(e){var r=Object.create(null);if(e)for(var o in e)r[o]=e[o];return r.default=e,Object.freeze(r)}var h=O(i);const f=Object.create(null);function m(e,r){if(!n.isString(e))if(e.nodeType)e=e.innerHTML;else return n.NOOP;const o=n.genCacheKey(e,r),d=f[o];if(d)return d;if(e[0]==="#"){const u=document.querySelector(e);e=u?u.innerHTML:""}const c=n.extend({hoistStatic:!0,onError:void 0,onWarn:n.NOOP},r);!c.isCustomElement&&typeof customElements<"u"&&(c.isCustomElement=u=>!!customElements.get(u));const{code:j}=_.compile(e,c),p=new Function("Vue",j)(h);return p._rc=!0,f[o]=p}i.registerRuntimeCompiler(m),t.compile=m,Object.keys(i).forEach(function(e){e!=="default"&&!Object.prototype.hasOwnProperty.call(t,e)&&(t[e]=i[e])})}(a)),a}var v;function T(){return v||(v=1,s.exports=E()),s.exports}export{P as c,T as r};
