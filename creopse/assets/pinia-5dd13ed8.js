import{i as T}from"./vue-demi-71ba0ef2.js";import{A as tt,i as et,w as st,u as nt,p as ot}from"./vue_runtime-core-4f5fb440.js";import{e as M,r as B,m as D,b as J,c as x,d as W,t as ct,a as rt,g as ut,o as at,f as ft}from"./vue_reactivity-852d8377.js";/*!
 * pinia v2.2.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let K;const E=t=>K=t,q=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var R;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(R||(R={}));function mt(){const t=M(!0),o=t.run(()=>B({}));let s=[],e=[];const r=D({install(u){E(r),r._a=u,u.provide(q,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!T?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const z=()=>{};function H(t,o,s,e=z){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&ut()&&at(r),r}function j(t,...o){t.slice().forEach(s=>{s(...o)})}const it=t=>t(),V=Symbol(),I=Symbol();function L(t,o){t instanceof Map&&o instanceof Map?o.forEach((s,e)=>t.set(e,s)):t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];O(r)&&O(e)&&t.hasOwnProperty(s)&&!x(e)&&!W(e)?t[s]=L(r,e):t[s]=e}return t}const Q=Symbol();function _t(t){return Object.defineProperty(t,Q,{})}function lt(t){return!O(t)||!t.hasOwnProperty(Q)}const{assign:y}=Object;function ht(t){return!!(x(t)&&t.effect)}function bt(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let P;function b(){a||(s.state.value[t]=r?r():{});const S=ft(s.state.value[t]);return y(S,u,Object.keys(f||{}).reduce((v,d)=>(v[d]=D(ot(()=>{E(s);const m=s._s.get(t);return f[d].call(m,m)})),v),{}))}return P=U(t,b,o,s,e,!0),P}function U(t,o,s={},e,r,u){let f;const a=y({actions:{}},s),P={deep:!0};let b,S,v=[],d=[],m;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),B({});let N;function A(c){let n;b=S=!1,typeof c=="function"?(c(e.state.value[t]),n={type:R.patchFunction,storeId:t,events:m}):(L(e.state.value[t],c),n={type:R.patchObject,payload:c,storeId:t,events:m});const i=N=Symbol();nt().then(()=>{N===i&&(b=!0)}),S=!0,j(v,n,e.state.value[t])}const X=u?function(){const{state:n}=s,i=n?n():{};this.$patch(p=>{y(p,i)})}:z;function Y(){f.stop(),v=[],d=[],e._s.delete(t)}const F=(c,n="")=>{if(V in c)return c[I]=n,c;const i=function(){E(e);const p=Array.from(arguments),C=[],k=[];function G(l){C.push(l)}function $(l){k.push(l)}j(d,{args:p,name:i[I],store:h,after:G,onError:$});let w;try{w=c.apply(this&&this.$id===t?this:h,p)}catch(l){throw j(k,l),l}return w instanceof Promise?w.then(l=>(j(C,l),l)).catch(l=>(j(k,l),Promise.reject(l))):(j(C,w),w)};return i[V]=!0,i[I]=n,i},Z={_p:e,$id:t,$onAction:H.bind(null,d),$patch:A,$reset:X,$subscribe(c,n={}){const i=H(v,c,n.detached,()=>p()),p=f.run(()=>st(()=>e.state.value[t],C=>{(n.flush==="sync"?S:b)&&c({storeId:t,type:R.direct,events:m},C)},y({},P,n)));return i},$dispose:Y},h=rt(Z);e._s.set(t,h);const g=(e._a&&e._a.runWithContext||it)(()=>e._e.run(()=>(f=M()).run(()=>o({action:F}))));for(const c in g){const n=g[c];if(x(n)&&!ht(n)||W(n))u||(_&&lt(n)&&(x(n)?n.value=_[c]:L(n,_[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const i=F(n,c);g[c]=i,a.actions[c]=n}}return y(h,g),y(J(h),g),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:c=>{A(n=>{y(n,c)})}}),e._p.forEach(c=>{y(h,f.run(()=>c({store:h,app:e._a,pinia:e,options:a})))}),_&&u&&s.hydrate&&s.hydrate(h.$state,_),b=!0,S=!0,h}function pt(t,o,s){let e,r;const u=typeof o=="function";typeof t=="string"?(e=t,r=u?s:o):(r=t,e=t.id);function f(a,P){const b=tt();return a=a||(b?et(q,null):null),a&&E(a),a=K,a._s.has(e)||(u?U(e,o,r,a):bt(e,r,a)),a._s.get(e)}return f.$id=e,f}function jt(t){{t=J(t);const o={};for(const s in t){const e=t[s];(x(e)||W(e))&&(o[s]=ct(t,s))}return o}}export{jt as a,mt as c,pt as d,_t as s};