const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vue3-ts-jsoneditor-Cxa2mkhM.js","assets/process-DerA1TKf.js","assets/dayjs-qQuedfxU.js","assets/ckeditor_ckeditor5-vue-D3nqwZpw.js","assets/originjs_vite-plugin-federation-DDIHa9Ih.js","assets/ckeditor_ckeditor5-integrations-common-Bz1Gquc2.js","assets/lodash-es-Cmq2JFAj.js"])))=>i.map(i=>d[i]);
import{I as Xo,a as Sm,X as Nt,l as He,O as Ir,y as Nr,U as Cm,h as Mm,p as Om,b as zm,f as qm,g as Em,c as It,j as Cr,S as Zt,$ as kf,D as Sf,d as St,T as Am,e as Pm,V as Fi,i as Cf,k as Rm,m as av,L as Tm,n as Nm,o as il,K as on,q as Oo,A as fc,Z as Ra,w as ll,G as Dc,C as bi,r as ja,s as Im,t as Um,W as Ko,u as ci,v as Mf,x as Of,z as ui,Q as Va,B as zf,E as qf,M as $m,F as pc,H as hc,J as $u,N as $l,P as ti,R as Dm,Y as Jm,_ as Jc,a0 as Ef,a1 as kd,a2 as Sd,a3 as ea,a4 as Wm,a5 as Ha,a6 as Ma,a7 as _m,a8 as Bm,a9 as Fm,aa as ks,ab as Af,ac as Du,ad as Lm,ae as Vm,af as Dl,ag as mc,ah as rs,ai as Cd,aj as sv,ak as Pf,al as Rf,am as Md,an as Tf,ao as Hm,ap as Zm,aq as zs,ar as Qm,as as Nf,at as Ym,au as Jl,av as Gm,aw as Xm,ax as Km,ay as eg,az as tg,aA as ng,aB as rg,aC as Ju,aD as og,aE as _s,aF as iv,aG as Li,aH as ag,aI as sg,aJ as ig,aK as lg,aL as cg,aM as ug,aN as dg,aO as vg,aP as fg,aQ as pg,aR as hg,aS as mg,aT as gg,aU as bg,aV as jg,aW as yg,aX as Bs,aY as xg,aZ as wg,a_ as kg,a$ as Sg,b0 as Cg,b1 as Mg,b2 as Og,b3 as zg,b4 as qg,b5 as Eg,b6 as Ag,b7 as lv,b8 as Pg,b9 as cu,ba as cv,bb as If,bc as Rg,bd as Tg,be as Ng,bf as Ig,bg as Ug,bh as $g,bi as Dg,bj as Jg,bk as Wg,bl as _g,bm as Bg,bn as Fg,bo as uv,bp as Lg}from"./vue3-ts-jsoneditor-Cxa2mkhM.js";const Vg="modulepreload",Hg=function(e){return"/creopse/"+e},dv={},Zg=function(t,r,o){let s=Promise.resolve();if(r&&r.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");s=c(r.map(u=>{if(u=Hg(u),u in dv)return;dv[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const b=document.createElement("link");if(b.rel=d?"stylesheet":Vg,d||(b.as="script"),b.crossOrigin="",b.href=u,l&&b.setAttribute("nonce",l),document.head.appendChild(b),d)return new Promise((g,j)=>{b.addEventListener("load",g),b.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};var Qg=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],Yg=["mainAxis","crossAxis","limiter"];function Uf(e,t){if(e==null)return{};var r,o,s=(function(i,l){if(i==null)return{};var c={};for(var u in i)if({}.hasOwnProperty.call(i,u)){if(l.indexOf(u)!==-1)continue;c[u]=i[u]}return c})(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function vv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,o)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vv(Object(r),!0).forEach(function(o){Ho(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vv(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function fv(e,t,r,o,s,a,i){try{var l=e[a](i),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(o,s)}function at(e){return function(){var t=this,r=arguments;return new Promise(function(o,s){var a=e.apply(t,r);function i(c){fv(a,o,s,i,l,"next",c)}function l(c){fv(a,o,s,i,l,"throw",c)}i(void 0)})}}function $f(e,t){Df(e,t),t.add(e)}function Jn(e,t,r){Df(e,t),t.set(e,r)}function Df(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function cn(e,t,r){return e.set(Rr(e,t),r),r}function ge(e,t){return e.get(Rr(e,t))}function Rr(e,t,r){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}function Ho(e,t,r){return(t=(function(o){var s=(function(a,i){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var c=l.call(a,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)})(o,"string");return typeof s=="symbol"?s:s+""})(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var pv,uu,hv,du;typeof window<"u"&&((uu=(pv=(du=(hv=window).__svelte)!==null&&du!==void 0?du:hv.__svelte={}).v)!==null&&uu!==void 0?uu:pv.v=new Set).add("5");var Ei=!1;Ei=!0;var Hr=Symbol(),Sl=Array.isArray,Gg=Array.prototype.indexOf,ac=Array.from,Xg=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Jf=Object.getOwnPropertyDescriptors,Kg=Object.prototype,eb=Array.prototype,Od=Object.getPrototypeOf,mv=Object.isExtensible;function Vi(e){return typeof e=="function"}var tb=()=>{};function nb(e){return e()}function Wu(e){for(var t=0;t<e.length;t++)e[t]()}function Wf(){var e,t;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}}var rb=1<<24,Ai=16,Wc=32,_f=64,zd=128,$o=512,Qr=1024,Do=2048,Ta=4096,ta=8192,Pi=16384,qd=32768,qs=65536,ob=1<<17,Bf=1<<18,Ff=1<<19,ma=1<<25,gc=32768,_u=1<<21,Xa=1<<23,na=Symbol("$state"),Lf=Symbol("legacy props"),ab=Symbol(""),ni=new class extends Error{constructor(){super(...arguments),Ho(this,"name","StaleReactionError"),Ho(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Cl(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Vf(e){return e===this.v}function Hf(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Zf(e){return!Hf(e,this.v)}var Nn=null;function ji(e){Nn=e}function ls(e){return Qf().get(e)}function Ke(e){Nn={p:Nn,i:!1,c:null,e:null,s:e,x:null,l:Ei&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function et(e){var t=Nn,r=t.e;if(r!==null)for(var o of(t.e=null,r))fp(o);return e!==void 0&&(t.x=e),t.i=!0,Nn=t.p,e??{}}function Ri(){return!Ei||Nn!==null&&Nn.l===null}function Qf(e){var t,r;return Nn===null&&Cl(),(r=(t=Nn).c)!==null&&r!==void 0?r:t.c=new Map((function(o){for(var s=o.p;s!==null;){var a=s.c;if(a!==null)return a;s=s.p}return null})(Nn)||void 0)}var ws=[];function Yf(){var e=ws;ws=[],Wu(e)}function Es(e){if(ws.length===0&&!rl){var t=ws;queueMicrotask(()=>{t===ws&&Yf()})}ws.push(e)}function sb(){for(;ws.length>0;)Yf()}function Gf(e){var t=Sn;if(t===null)return wn.f|=Xa,e;if((t.f&qd)===0){if((t.f&zd)===0)throw e;t.b.error(e)}else yi(e,t)}function yi(e,t){for(;t!==null;){if((t.f&zd)!==0)try{return void t.b.error(e)}catch(r){e=r}t=t.parent}throw e}var sc=new Set,Tn=null,nl=null,zo=null,Co=[],_c=null,Bu=!1,rl=!1,bc=new WeakMap,Wl=new WeakMap,gs=new WeakMap,bs=new WeakMap,_l=new WeakMap,ic=new WeakMap,lc=new WeakMap,po=new WeakSet;class os{constructor(){$f(this,po),Ho(this,"committed",!1),Ho(this,"current",new Map),Ho(this,"previous",new Map),Jn(this,bc,new Set),Jn(this,Wl,new Set),Jn(this,gs,0),Jn(this,bs,0),Jn(this,_l,null),Jn(this,ic,[]),Jn(this,lc,[]),Ho(this,"skipped_effects",new Set),Ho(this,"is_fork",!1)}is_deferred(){return this.is_fork||ge(bs,this)>0}process(t){Co=[],nl=null,this.apply();var r,o={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var s of t)Rr(po,this,Xf).call(this,s,o);this.is_fork||Rr(po,this,ib).call(this),this.is_deferred()?(Rr(po,this,di).call(this,o.effects),Rr(po,this,di).call(this,o.render_effects),Rr(po,this,di).call(this,o.block_effects)):(nl=this,Tn=null,gv(o.render_effects),gv(o.effects),nl=null,(r=ge(_l,this))===null||r===void 0||r.resolve()),zo=null}capture(t,r){var o;this.previous.has(t)||this.previous.set(t,r),(t.f&Xa)===0&&(this.current.set(t,t.v),(o=zo)===null||o===void 0||o.set(t,t.v))}activate(){Tn=this,this.apply()}deactivate(){Tn===this&&(Tn=null,zo=null)}flush(){if(this.activate(),Co.length>0){if(ep(),Tn!==null&&Tn!==this)return}else ge(gs,this)===0&&this.process([]);this.deactivate()}discard(){for(var t of ge(Wl,this))t(this);ge(Wl,this).clear()}increment(t){cn(gs,this,ge(gs,this)+1),t&&cn(bs,this,ge(bs,this)+1)}decrement(t){cn(gs,this,ge(gs,this)-1),t&&cn(bs,this,ge(bs,this)-1),this.revive()}revive(){for(var t of ge(ic,this))Gr(t,Do),As(t);for(var r of ge(lc,this))Gr(r,Ta),As(r);cn(ic,this,[]),cn(lc,this,[]),this.flush()}oncommit(t){ge(bc,this).add(t)}ondiscard(t){ge(Wl,this).add(t)}settled(){var t;return((t=ge(_l,this))!==null&&t!==void 0?t:cn(_l,this,Wf())).promise}static ensure(){if(Tn===null){var t=Tn=new os;sc.add(Tn),rl||os.enqueue(()=>{Tn===t&&t.flush()})}return Tn}static enqueue(t){Es(t)}apply(){}}function Xf(e,t){e.f^=Qr;for(var r=e.first;r!==null;){var o,s=r.f,a=!!(96&s),i=a&&(s&Qr)!==0||(s&ta)!==0||this.skipped_effects.has(r);if((r.f&zd)!==0&&(o=r.b)!==null&&o!==void 0&&o.is_pending()&&(t={parent:t,effect:r,effects:[],render_effects:[],block_effects:[]}),!i&&r.fn!==null){a?r.f^=Qr:4&s?t.effects.push(r):Ii(r)&&((r.f&Ai)!==0&&t.block_effects.push(r),wi(r));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)c===t.effect&&(Rr(po,this,di).call(this,t.effects),Rr(po,this,di).call(this,t.render_effects),Rr(po,this,di).call(this,t.block_effects),t=t.parent),r=c.next,c=c.parent}}function di(e){for(var t of e)((t.f&Do)!==0?ge(ic,this):ge(lc,this)).push(t),Rr(po,this,Kf).call(this,t.deps),Gr(t,Qr)}function Kf(e){if(e!==null)for(var t of e)2&t.f&&(t.f&gc)!==0&&(t.f^=gc,Rr(po,this,Kf).call(this,t.deps))}function ib(){if(ge(bs,this)===0){for(var e of ge(bc,this))e();ge(bc,this).clear()}ge(gs,this)===0&&Rr(po,this,lb).call(this)}function lb(){if(sc.size>1){this.previous.clear();var e=zo,t=!0,r={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var o of sc)if(o!==this){var s=[];for(var[a,i]of this.current){if(o.current.has(a)){if(!t||i===o.current.get(a))continue;o.current.set(a,i)}s.push(a)}if(s.length!==0){var l=[...o.current.keys()].filter(g=>!this.current.has(g));if(l.length>0){var c=Co;Co=[];var u=new Set,d=new Map;for(var h of s)tp(h,l,u,d);if(Co.length>0){for(var b of(Tn=o,o.apply(),Co))Rr(po,o,Xf).call(o,b,r);o.deactivate()}Co=c}}}else t=!1;Tn=null,zo=e}this.committed=!0,sc.delete(this)}function Bn(e){var t=rl;rl=!0;try{for(;;){var r;if(sb(),Co.length===0&&((r=Tn)===null||r===void 0||r.flush(),Co.length===0))return void(_c=null);ep()}}finally{rl=t}}function ep(){var e=Cs;Bu=!0;try{var t=0;for(jc(!0);Co.length>0;){var r=os.ensure();t++>1e3&&cb(),r.process(Co),Ka.clear()}}finally{Bu=!1,jc(e),_c=null}}function cb(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){yi(e,_c)}}var ba=null;function gv(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var o,s=e[r++];if(!(24576&s.f)&&Ii(s)&&(ba=new Set,wi(s),s.deps===null&&s.first===null&&s.nodes===null&&(s.teardown===null&&s.ac===null?bp(s):s.fn=null),((o=ba)===null||o===void 0?void 0:o.size)>0)){for(var a of(Ka.clear(),ba))if(!(24576&a.f)){for(var i=[a],l=a.parent;l!==null;)ba.has(l)&&(ba.delete(l),i.push(l)),l=l.parent;for(var c=i.length-1;c>=0;c--){var u=i[c];24576&u.f||wi(u)}}ba.clear()}}ba=null}}function tp(e,t,r,o){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(var s of e.reactions){var a=s.f;2&a?tp(s,t,r,o):4194320&a&&(a&Do)===0&&np(s,t,o)&&(Gr(s,Do),As(s))}}function np(e,t,r){var o=r.get(e);if(o!==void 0)return o;if(e.deps!==null)for(var s of e.deps){if(t.includes(s))return!0;if(2&s.f&&np(s,t,r))return r.set(s,!0),!0}return r.set(e,!1),!1}function As(e){for(var t=_c=e;t.parent!==null;){var r=(t=t.parent).f;if(Bu&&t===Sn&&(r&Ai)!==0&&(r&Bf)===0)return;if(96&r){if((r&Qr)===0)return;t.f^=Qr}}Co.push(t)}var _a=new WeakMap,Za=new WeakMap,ub=new WeakMap,js=new WeakMap,vu=new WeakMap,La=new WeakMap,Ba=new WeakMap,wa=new WeakMap,Ua=new WeakMap,Ss=new WeakMap,vi=new WeakMap,Fs=new WeakMap,fi=new WeakMap,Hi=new WeakMap,Ls=new WeakMap,bv=new WeakMap,Da=new WeakSet;class db{constructor(t,r,o){var s,a,i,l;$f(this,Da),Ho(this,"parent",void 0),Jn(this,_a,!1),Jn(this,Za,void 0),Jn(this,ub,null),Jn(this,js,void 0),Jn(this,vu,void 0),Jn(this,La,void 0),Jn(this,Ba,null),Jn(this,wa,null),Jn(this,Ua,null),Jn(this,Ss,null),Jn(this,vi,null),Jn(this,Fs,0),Jn(this,fi,0),Jn(this,Hi,!1),Jn(this,Ls,null),Jn(this,bv,(s=()=>(cn(Ls,this,Na(ge(Fs,this))),()=>{cn(Ls,this,null)}),i=0,l=Na(0),()=>{cl()&&(n(l),Ti(()=>(i===0&&(a=P(()=>s(()=>ol(l)))),i+=1,()=>{Es(()=>{var c;(i-=1)==0&&((c=a)===null||c===void 0||c(),a=void 0,ol(l))})})))})),cn(Za,this,t),cn(js,this,r),cn(vu,this,o),this.parent=Sn.b,cn(_a,this,!!ge(js,this).pending),cn(La,this,Ni(()=>{Sn.b=this;var c=Rr(Da,this,vb).call(this);try{cn(Ba,this,ra(()=>o(c)))}catch(u){this.error(u)}return ge(fi,this)>0?Rr(Da,this,yv).call(this):cn(_a,this,!1),()=>{var u;(u=ge(vi,this))===null||u===void 0||u.remove()}},589952))}is_pending(){return ge(_a,this)||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!ge(js,this).pending}update_pending_count(t){Rr(Da,this,rp).call(this,t),cn(Fs,this,ge(Fs,this)+t),ge(Ls,this)&&Ps(ge(Ls,this),ge(Fs,this))}get_effect_pending(){return ge(bv,this).call(this),n(ge(Ls,this))}error(t){var r=ge(js,this).onerror,o=ge(js,this).failed;if(ge(Hi,this)||!r&&!o)throw t;ge(Ba,this)&&(Yr(ge(Ba,this)),cn(Ba,this,null)),ge(wa,this)&&(Yr(ge(wa,this)),cn(wa,this,null)),ge(Ua,this)&&(Yr(ge(Ua,this)),cn(Ua,this,null));var s=!1,a=!1,i=()=>{s?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(s=!0,a&&(function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")})(),os.ensure(),cn(Fs,this,0),ge(Ua,this)!==null&&xi(ge(Ua,this),()=>{cn(Ua,this,null)}),cn(_a,this,this.has_pending_snippet()),cn(Ba,this,Rr(Da,this,jv).call(this,()=>(cn(Hi,this,!1),ra(()=>ge(vu,this).call(this,ge(Za,this)))))),ge(fi,this)>0?Rr(Da,this,yv).call(this):cn(_a,this,!1))},l=wn;try{io(null),a=!0,r?.(t,i),a=!1}catch(c){yi(c,ge(La,this)&&ge(La,this).parent)}finally{io(l)}o&&Es(()=>{cn(Ua,this,Rr(Da,this,jv).call(this,()=>{os.ensure(),cn(Hi,this,!0);try{return ra(()=>{o(ge(Za,this),()=>t,()=>i)})}catch(c){return yi(c,ge(La,this).parent),null}finally{cn(Hi,this,!1)}}))})}}function vb(){var e=ge(Za,this);return ge(_a,this)&&(cn(vi,this,es()),ge(Za,this).before(ge(vi,this)),e=ge(vi,this)),e}function jv(e){var t=Sn,r=wn,o=Nn;Ao(ge(La,this)),io(ge(La,this)),ji(ge(La,this).ctx);try{return e()}catch(s){return Gf(s),null}finally{Ao(t),io(r),ji(o)}}function yv(){var e=ge(js,this).pending;ge(Ba,this)!==null&&(cn(Ss,this,document.createDocumentFragment()),ge(Ss,this).append(ge(vi,this)),xp(ge(Ba,this),ge(Ss,this))),ge(wa,this)===null&&cn(wa,this,ra(()=>e(ge(Za,this))))}function rp(e){var t;this.has_pending_snippet()?(cn(fi,this,ge(fi,this)+e),ge(fi,this)===0&&(cn(_a,this,!1),ge(wa,this)&&xi(ge(wa,this),()=>{cn(wa,this,null)}),ge(Ss,this)&&(ge(Za,this).before(ge(Ss,this)),cn(Ss,this,null)))):this.parent&&Rr(Da,t=this.parent,rp).call(t,e)}function op(e,t,r,o){var s=Ri()?Ml:_e;if(r.length!==0||e.length!==0){var a=Tn,i=Sn,l=(function(){var u=Sn,d=wn,h=Nn,b=Tn;return function(){var g=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];Ao(u),io(d),ji(h),g&&b?.activate()}})();e.length>0?Promise.all(e).then(()=>{l();try{return c()}finally{a?.deactivate(),Bl()}}):c()}else o(t.map(s));function c(){Promise.all(r.map(u=>(function(d){var h=Sn;h===null&&(function(){throw new Error("https://svelte.dev/e/async_derived_orphan")})();var b=h.b,g=void 0,j=Na(Hr),m=!wn,y=new Map;return(function(x){Wo(4718592,x,!0)})(()=>{var x=Wf();g=x.promise;try{Promise.resolve(d()).then(x.resolve,x.reject).then(()=>{k===Tn&&k.committed&&k.deactivate(),Bl()})}catch(N){x.reject(N),Bl()}var k=Tn;if(m){var O,M=!b.is_pending();b.update_pending_count(1),k.increment(M),(O=y.get(k))===null||O===void 0||O.reject(ni),y.delete(k),y.set(k,x)}var w=function(N){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(k.activate(),T)T!==ni&&(j.f|=Xa,Ps(j,T));else for(var[Y,A]of((j.f&Xa)!==0&&(j.f^=Xa),Ps(j,N),y)){if(y.delete(Y),Y===k)break;A.reject(ni)}m&&(b.update_pending_count(-1),k.decrement(M))};x.promise.then(w,N=>w(null,N||"unknown"))}),Fc(()=>{for(var x of y.values())x.reject(ni)}),new Promise(x=>{function k(O){function M(){O===g?x(j):k(g)}O.then(M,M)}k(g)})})(u))).then(u=>{l();try{o([...t.map(s),...u])}catch(d){(i.f&Pi)===0&&yi(d,i)}a?.deactivate(),Bl()}).catch(u=>{yi(u,i)})}}function Bl(){Ao(null),io(null),ji(null)}function Ml(e){var t=wn!==null&&2&wn.f?wn:null;return Sn!==null&&(Sn.f|=Ff),{ctx:Nn,deps:null,effects:null,equals:Vf,f:2050,fn:e,reactions:null,rv:0,v:Hr,wv:0,parent:t??Sn,ac:null}}function so(e){var t=Ml(e);return wp(t),t}function _e(e){var t=Ml(e);return t.equals=Zf,t}function ap(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Yr(t[r])}}function Ed(e){var t,r=Sn;Ao((function(o){for(var s=o.parent;s!==null;){if(!(2&s.f))return(s.f&Pi)===0?s:null;s=s.parent}return null})(e));try{e.f&=-32769,ap(e),t=Mp(e)}finally{Ao(r)}return t}function sp(e){var t,r,o=Ed(e);e.equals(o)||((t=Tn)!==null&&t!==void 0&&t.is_fork||(e.v=o),e.wv=Sp()),$s||(zo!==null?(cl()||(r=Tn)!==null&&r!==void 0&&r.is_fork)&&zo.set(e,o):Gr(e,(e.f&$o)===0?Ta:Qr))}var za,ip,lp,cp,fu=new Set,Ka=new Map,xv=!1;function Na(e,t){return{f:0,v:e,reactions:null,equals:Vf,rv:0,wv:0}}function ga(e,t){var r=Na(e);return wp(r),r}function q(e){var t,r,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=Na(e);return o||(a.equals=Zf),Ei&&s&&Nn!==null&&Nn.l!==null&&((r=(t=Nn.l).s)!==null&&r!==void 0?r:t.s=[]).push(a),a}function mo(e,t){return v(e,P(()=>n(e))),t}function v(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return wn===null||Qo&&(wn.f&ob)===0||!Ri()||!(4325394&wn.f)||(r=qa)!==null&&r!==void 0&&r.includes(e)||(function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")})(),Ps(e,o?ri(t):t)}function Ps(e,t){if(!e.equals(t)){var r=e.v;$s?Ka.set(e,t):Ka.set(e,r),e.v=t;var o=os.ensure();o.capture(e,r),2&e.f&&((e.f&Do)!==0&&Ed(e),Gr(e,(e.f&$o)!==0?Qr:Ta)),e.wv=Sp(),up(e,Do),!Ri()||Sn===null||(Sn.f&Qr)===0||96&Sn.f||(wo===null?(function(s){wo=s})([e]):wo.push(e)),!o.is_fork&&fu.size>0&&!xv&&(function(){xv=!1;var s=Cs;jc(!0);var a=Array.from(fu);try{for(var i of a)(i.f&Qr)!==0&&Gr(i,Ta),Ii(i)&&wi(i)}finally{jc(s)}fu.clear()})()}return t}function wv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=n(e),o=t===1?r++:r--;return v(e,r),o}function ol(e){v(e,e.v+1)}function up(e,t){var r=e.reactions;if(r!==null)for(var o=Ri(),s=r.length,a=0;a<s;a++){var i=r[a],l=i.f;if(o||i!==Sn){var c=(l&Do)===0;if(c&&Gr(i,t),2&l){var u,d=i;(u=zo)===null||u===void 0||u.delete(d),(l&gc)===0&&(l&$o&&(i.f|=gc),up(d,Ta))}else c&&((l&Ai)!==0&&ba!==null&&ba.add(i),As(i))}}}function ri(e){if(typeof e!="object"||e===null||na in e)return e;var t=Od(e);if(t!==Kg&&t!==eb)return e;var r=new Map,o=Sl(e),s=ga(0),a=Ms,i=l=>{if(Ms===a)return l();var c=wn,u=Ms;io(null),Mv(a);var d=l();return io(c),Mv(u),d};return o&&r.set("length",ga(e.length)),new Proxy(e,{defineProperty(l,c,u){"value"in u&&u.configurable!==!1&&u.enumerable!==!1&&u.writable!==!1||(function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")})();var d=r.get(c);return d===void 0?d=i(()=>{var h=ga(u.value);return r.set(c,h),h}):v(d,u.value,!0),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0){if(c in l){var d=i(()=>ga(Hr));r.set(c,d),ol(s)}}else v(u,Hr),ol(s);return!0},get(l,c,u){var d;if(c===na)return e;var h=r.get(c),b=c in l;if(h===void 0&&(!b||(d=Oa(l,c))!==null&&d!==void 0&&d.writable)&&(h=i(()=>ga(ri(b?l[c]:Hr))),r.set(c,h)),h!==void 0){var g=n(h);return g===Hr?void 0:g}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var d=r.get(c);d&&(u.value=n(d))}else if(u===void 0){var h=r.get(c),b=h?.v;if(h!==void 0&&b!==Hr)return{enumerable:!0,configurable:!0,value:b,writable:!0}}return u},has(l,c){var u;if(c===na)return!0;var d=r.get(c),h=d!==void 0&&d.v!==Hr||Reflect.has(l,c);return(d!==void 0||Sn!==null&&(!h||(u=Oa(l,c))!==null&&u!==void 0&&u.writable))&&(d===void 0&&(d=i(()=>ga(h?ri(l[c]):Hr)),r.set(c,d)),n(d)===Hr)?!1:h},set(l,c,u,d){var h,b=r.get(c),g=c in l;if(o&&c==="length")for(var j=u;j<b.v;j+=1){var m=r.get(j+"");m!==void 0?v(m,Hr):j in l&&(m=i(()=>ga(Hr)),r.set(j+"",m))}b===void 0?(!g||(h=Oa(l,c))!==null&&h!==void 0&&h.writable)&&(v(b=i(()=>ga(void 0)),ri(u)),r.set(c,b)):(g=b.v!==Hr,v(b,i(()=>ri(u))));var y=Reflect.getOwnPropertyDescriptor(l,c);if(y!=null&&y.set&&y.set.call(d,u),!g){if(o&&typeof c=="string"){var x=r.get("length"),k=Number(c);Number.isInteger(k)&&k>=x.v&&v(x,k+1)}ol(s)}return!0},ownKeys(l){n(s);var c=Reflect.ownKeys(l).filter(h=>{var b=r.get(h);return b===void 0||b.v!==Hr});for(var[u,d]of r)d.v===Hr||u in l||c.push(u);return c},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function kv(e){try{if(e!==null&&typeof e=="object"&&na in e)return e[na]}catch{}return e}function fb(e,t){return Object.is(kv(e),kv(t))}function es(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function go(e){return lp.call(e)}function Ol(e){return cp.call(e)}function E(e,t){return go(e)}function We(e){var t=go(e);return t instanceof Comment&&t.data===""?Ol(t):t}function D(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=e;t--;)r=Ol(r);return r}var Sv=!1;function Bc(e){var t=wn,r=Sn;io(null),Ao(null);try{return e()}finally{io(t),Ao(r)}}function dp(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;e.addEventListener(t,()=>Bc(r));var s=e.__on_r;e.__on_r=s?()=>{s(),o(!0)}:()=>o(!0),Sv||(Sv=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{if(!a.defaultPrevented)for(var i of a.target.elements){var l;(l=i.__on_r)===null||l===void 0||l.call(i)}})},{capture:!0}))}function vp(e){Sn===null&&(wn===null&&(function(){throw new Error("https://svelte.dev/e/effect_orphan")})(),(function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")})()),$s&&(function(){throw new Error("https://svelte.dev/e/effect_in_teardown")})()}function Wo(e,t,r){var o=Sn;o!==null&&(o.f&ta)!==0&&(e|=ta);var s={ctx:Nn,deps:null,nodes:null,f:e|Do|$o,first:null,fn:t,last:null,next:null,parent:o,b:o&&o.b,prev:null,teardown:null,wv:0,ac:null};if(r)try{wi(s),s.f|=qd}catch(c){throw Yr(s),c}else t!==null&&As(s);var a=s;if(r&&a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Ff)===0&&(a=a.first,(e&Ai)!==0&&(e&qs)!==0&&a!==null&&(a.f|=qs)),a!==null&&(a.parent=o,o!==null&&(function(c,u){var d=u.last;d===null?u.last=u.first=c:(d.next=c,c.prev=d,u.last=c)})(a,o),wn!==null&&2&wn.f&&(e&_f)===0)){var i,l=wn;((i=l.effects)!==null&&i!==void 0?i:l.effects=[]).push(a)}return s}function cl(){return wn!==null&&!Qo}function Fc(e){var t=Wo(8,null,!1);return Gr(t,Qr),t.teardown=e,t}function Fu(e){vp();var t=Sn.f;if(!(!wn&&(t&Wc)!==0&&(t&qd)===0))return fp(e);var r,o=Nn;((r=o.e)!==null&&r!==void 0?r:o.e=[]).push(e)}function fp(e){return Wo(1048580,e,!1)}function Dr(e){return Wo(4,e,!1)}function F(e,t){var r={effect:null,ran:!1,deps:e};Nn.l.$.push(r),r.effect=Ti(()=>{e(),r.ran||(r.ran=!0,P(t))})}function dn(){var e=Nn;Ti(()=>{for(var t of e.l.$){t.deps();var r=t.effect;(r.f&Qr)!==0&&Gr(r,Ta),Ii(r)&&wi(r),t.ran=!1}})}function Ti(e){return Wo(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function xe(e){op(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{Wo(8,()=>e(...t.map(n)),!0)})}function Ni(e){return Wo(Ai|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function pp(e){return Wo(rb|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function ra(e){return Wo(524320,e,!0)}function hp(e){var t=e.teardown;if(t!==null){var r=$s,o=wn;Cv(!0),io(null);try{t.call(null)}finally{Cv(r),io(o)}}}function mp(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=e.first;e.first=e.last=null;for(var o,s=function(){var a=r.ac;a!==null&&Bc(()=>{a.abort(ni)}),o=r.next,(r.f&_f)!==0?r.parent=null:Yr(r,t),r=o};r!==null;)s()}function Yr(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=!1;!t&&(e.f&Bf)===0||e.nodes===null||e.nodes.end===null||(gp(e.nodes.start,e.nodes.end),r=!0),mp(e,t&&!r),yc(e,0),Gr(e,Pi);var o=e.nodes&&e.nodes.t;if(o!==null)for(var s of o)s.stop();hp(e);var a=e.parent;a!==null&&a.first!==null&&bp(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function gp(e,t){for(;e!==null;){var r=e===t?null:Ol(e);e.remove(),e=r}}function bp(e){var t=e.parent,r=e.prev,o=e.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=r))}function xi(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];jp(e,o,!0);var s=()=>{r&&Yr(e),t&&t()},a=o.length;if(a>0){var i=()=>--a||s();for(var l of o)l.out(i)}else s()}function jp(e,t,r){if((e.f&ta)===0){e.f^=ta;var o=e.nodes&&e.nodes.t;if(o!==null)for(var s of o)(s.is_global||r)&&t.push(s);for(var a=e.first;a!==null;){var i=a.next;jp(a,t,((a.f&qs)!==0||(a.f&Wc)!==0&&(e.f&Ai)!==0)&&r),a=i}}}function Lu(e){yp(e,!0)}function yp(e,t){if((e.f&ta)!==0){e.f^=ta,(e.f&Qr)===0&&(Gr(e,Do),As(e));for(var r=e.first;r!==null;){var o=r.next;yp(r,((r.f&qs)!==0||(r.f&Wc)!==0)&&t),r=o}var s=e.nodes&&e.nodes.t;if(s!==null)for(var a of s)(a.is_global||t)&&a.in()}}function xp(e,t){if(e.nodes)for(var r=e.nodes.start,o=e.nodes.end;r!==null;){var s=r===o?null:Ol(r);t.append(r),r=s}}var Gs=null;function pb(e){for(var t of(function(r){var o=Gs;try{if(Gs=new Set,P(r),o!==null)for(var s of Gs)o.add(s);return Gs}finally{Gs=o}})(e))Ps(t,t.v)}var Cs=!1;function jc(e){Cs=e}var $s=!1;function Cv(e){$s=e}var wn=null,Qo=!1;function io(e){wn=e}var Sn=null;function Ao(e){Sn=e}var qa=null;function wp(e){wn!==null&&(qa===null?qa=[e]:qa.push(e))}var no=null,vo=0,wo=null,kp=1,ul=0,Ms=ul;function Mv(e){Ms=e}function Sp(){return++kp}function Ii(e){var t=e.f;if((t&Do)!==0)return!0;if(2&t&&(e.f&=-32769),(t&Ta)!==0){var r=e.deps;if(r!==null)for(var o=r.length,s=0;s<o;s++){var a=r[s];if(Ii(a)&&sp(a),a.wv>e.wv)return!0}(t&$o)!==0&&zo===null&&Gr(e,Qr)}return!1}function Cp(e,t){var r,o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],s=e.reactions;if(s!==null&&((r=qa)===null||r===void 0||!r.includes(e)))for(var a=0;a<s.length;a++){var i=s[a];2&i.f?Cp(i,t,!1):t===i&&(o?Gr(i,Do):(i.f&Qr)!==0&&Gr(i,Ta),As(i))}}function Mp(e){var t=no,r=vo,o=wo,s=wn,a=qa,i=Nn,l=Qo,c=Ms,u=e.f;no=null,vo=0,wo=null,wn=96&u?null:e,qa=null,ji(e.ctx),Qo=!1,Ms=++ul,e.ac!==null&&(Bc(()=>{e.ac.abort(ni)}),e.ac=null);try{e.f|=_u;var d=(0,e.fn)(),h=e.deps;if(no!==null){var b;if(yc(e,vo),h!==null&&vo>0)for(h.length=vo+no.length,b=0;b<no.length;b++)h[vo+b]=no[b];else e.deps=h=no;if(cl()&&(e.f&$o)!==0)for(b=vo;b<h.length;b++){var g,j;((j=(g=h[b]).reactions)!==null&&j!==void 0?j:g.reactions=[]).push(e)}}else h!==null&&vo<h.length&&(yc(e,vo),h.length=vo);if(Ri()&&wo!==null&&!Qo&&h!==null&&!(6146&e.f))for(b=0;b<wo.length;b++)Cp(wo[b],e);return s!==null&&s!==e&&(ul++,wo!==null&&(o===null?o=wo:o.push(...wo))),(e.f&Xa)!==0&&(e.f^=Xa),d}catch(m){return Gf(m)}finally{e.f^=_u,no=t,vo=r,wo=o,wn=s,qa=a,ji(i),Qo=l,Ms=c}}function hb(e,t){var r=t.reactions;if(r!==null){var o=Gg.call(r,e);if(o!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[o]=r[s],r.pop())}}r===null&&2&t.f&&(no===null||!no.includes(t))&&(Gr(t,Ta),(t.f&$o)!==0&&(t.f^=$o,t.f&=-32769),ap(t),yc(t,0))}function yc(e,t){var r=e.deps;if(r!==null)for(var o=t;o<r.length;o++)hb(e,r[o])}function wi(e){var t=e.f;if((t&Pi)===0){Gr(e,Qr);var r=Sn,o=Cs;Sn=e,Cs=!0;try{16777232&t?(function(a){for(var i=a.first;i!==null;){var l=i.next;(i.f&Wc)===0&&Yr(i),i=l}})(e):mp(e),hp(e);var s=Mp(e);e.teardown=typeof s=="function"?s:null,e.wv=kp}finally{Cs=o,Sn=r}}}function Op(){return zp.apply(this,arguments)}function zp(){return(zp=at(function*(){yield Promise.resolve(),Bn()})).apply(this,arguments)}function n(e){var t,r,o,s,a,i=!!(2&e.f);if((t=Gs)===null||t===void 0||t.add(e),wn!==null&&!Qo&&!(Sn!==null&&(Sn.f&Pi)!==0||(a=qa)!==null&&a!==void 0&&a.includes(e))){var l=wn.deps;if((wn.f&_u)!==0)e.rv<ul&&(e.rv=ul,no===null&&l!==null&&l[vo]===e?vo++:no===null?no=[e]:no.includes(e)||no.push(e));else{var c,u;((u=(c=wn).deps)!==null&&u!==void 0?u:c.deps=[]).push(e);var d=e.reactions;d===null?e.reactions=[wn]:d.includes(wn)||d.push(wn)}}if($s){if(Ka.has(e))return Ka.get(e);if(i){var h=e,b=h.v;return((h.f&Qr)===0&&h.reactions!==null||Ep(h))&&(b=Ed(h)),Ka.set(h,b),b}}else i&&((r=zo)===null||r===void 0||!r.has(e)||(o=Tn)!==null&&o!==void 0&&o.is_fork&&!cl())&&(Ii(h=e)&&sp(h),Cs&&cl()&&(h.f&$o)===0&&qp(h));if((s=zo)!==null&&s!==void 0&&s.has(e))return zo.get(e);if((e.f&Xa)!==0)throw e.v;return e.v}function qp(e){if(e.deps!==null)for(var t of(e.f^=$o,e.deps)){var r;((r=t.reactions)!==null&&r!==void 0?r:t.reactions=[]).push(e),2&t.f&&(t.f&$o)===0&&qp(t)}}function Ep(e){if(e.v===Hr)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(Ka.has(t)||2&t.f&&Ep(t))return!0;return!1}function P(e){var t=Qo;try{return Qo=!0,e()}finally{Qo=t}}var mb=-7169;function Gr(e,t){e.f=e.f&mb|t}function p(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(na in e)Vu(e);else if(!Array.isArray(e))for(var t in e){var r=e[t];typeof r=="object"&&r&&na in r&&Vu(r)}}}function Vu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var r in t.add(e),e instanceof Date&&e.getTime(),e)try{Vu(e[r],t)}catch{}var o=Od(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var s=Jf(o);for(var a in s){var i=s[a].get;if(i)try{i.call(e)}catch{}}}}}var Ap=new Set,Hu=new Set;function Pp(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function s(a){if(o.capture||Ki.call(t,a),!a.cancelBubble)return Bc(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Es(()=>{t.addEventListener(e,s,o)}):t.addEventListener(e,s,o),s}function fe(e,t,r,o,s){var a={capture:o,passive:s},i=Pp(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Fc(()=>{t.removeEventListener(e,i,a)})}function zl(e){for(var t=0;t<e.length;t++)Ap.add(e[t]);for(var r of Hu)r(e)}function Ki(e){var t,r=this,o=r.ownerDocument,s=e.type,a=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],i=a[0]||e.target,l=0,c=e===e&&e.__root;if(c){var u=a.indexOf(c);if(u!==-1&&(r===document||r===window))return void(e.__root=r);var d=a.indexOf(r);if(d===-1)return;u<=d&&(l=u)}if((i=a[l]||e.target)!==r){Xg(e,"currentTarget",{configurable:!0,get:()=>i||o});var h=wn,b=Sn;io(null),Ao(null);try{for(var g,j=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+s];y==null||i.disabled&&e.target!==i||y.call(i,e)}catch(O){g?j.push(O):g=O}if(e.cancelBubble||m===r||m===null)break;i=m}if(g){var x=function(O){queueMicrotask(()=>{throw O})};for(var k of j)x(k);throw g}}finally{e.__root=r,delete e.currentTarget,io(h),Ao(b)}}}function Ad(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Rs(e,t){var r=Sn;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function H(e,t){var r,o=!!(1&t),s=!!(2&t),a=!e.startsWith("<!>");return()=>{r===void 0&&(r=Ad(a?e:"<!>"+e),o||(r=go(r)));var i=s||ip?document.importNode(r,!0):r.cloneNode(!0);return o?Rs(go(i),i.lastChild):Rs(i,i),i}}function cs(e,t){return(function(r,o){var s,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",i=!r.startsWith("<!>"),l=!!(1&o),c="<".concat(a,">").concat(i?r:"<!>"+r,"</").concat(a,">");return()=>{if(!s){var u=go(Ad(c));if(l)for(s=document.createDocumentFragment();go(u);)s.appendChild(go(u));else s=go(u)}var d=s.cloneNode(!0);return l?Rs(go(d),d.lastChild):Rs(d,d),d}})(e,t,"svg")}function Jr(){var e=es((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return Rs(e,e),e}function Tt(){var e=document.createDocumentFragment(),t=document.createComment(""),r=es();return e.append(t,r),Rs(t,r),e}function z(e,t){e!==null&&e.before(t)}var gb=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],bb={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},jb=["touchstart","touchmove"];function yb(e){return jb.includes(e)}function tt(e,t){var r,o=t==null?"":typeof t=="object"?t+"":t;o!==((r=e.__t)!==null&&r!==void 0?r:e.__t=e.nodeValue)&&(e.__t=o,e.nodeValue=o+"")}function xb(e,t){return(function(r,o){var{target:s,anchor:a,props:i={},events:l,context:c}=o;(function(){if(za===void 0){za=window,ip=/Firefox/.test(navigator.userAgent);var g=Element.prototype,j=Node.prototype,m=Text.prototype;lp=Oa(j,"firstChild").get,cp=Oa(j,"nextSibling").get,mv(g)&&(g.__click=void 0,g.__className=void 0,g.__attributes=null,g.__style=void 0,g.__e=void 0),mv(m)&&(m.__t=void 0)}})();var u=new Set,d=g=>{for(var j=0;j<g.length;j++){var m=g[j];if(!u.has(m)){u.add(m);var y=yb(m);s.addEventListener(m,Ki,{passive:y});var x=Vs.get(m);x===void 0?(document.addEventListener(m,Ki,{passive:y}),Vs.set(m,1)):Vs.set(m,x+1)}}};d(ac(Ap)),Hu.add(d);var h=void 0,b=(function(g){os.ensure();var j=Wo(524352,g,!0);return function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(y=>{m.outro?xi(j,()=>{Yr(j),y(void 0)}):(Yr(j),y(void 0))})}})(()=>{var g=a??s.appendChild(es());return(function(j,m,y){new db(j,m,y)})(g,{pending:()=>{}},j=>{c&&(Ke({}),Nn.c=c),l&&(i.$$events=l),h=r(j,i)||{},c&&et()}),()=>{for(var j of u){s.removeEventListener(j,Ki);var m=Vs.get(j);--m===0?(document.removeEventListener(j,Ki),Vs.delete(j)):Vs.set(j,m)}var y;Hu.delete(d),g!==a&&((y=g.parentNode)===null||y===void 0||y.removeChild(g))}});return Zu.set(h,b),h})(e,t)}var Vs=new Map,Zu=new WeakMap,Fl,pa=new WeakMap,ps=new WeakMap,ha=new WeakMap,Zi=new WeakMap,pu=new WeakMap,Ov=new WeakMap,wb=new WeakMap;class Lc{constructor(t){var r=this,o=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];Ho(this,"anchor",void 0),Jn(this,pa,new Map),Jn(this,ps,new Map),Jn(this,ha,new Map),Jn(this,Zi,new Set),Jn(this,pu,!0),Jn(this,Ov,()=>{var s=Tn;if(ge(pa,this).has(s)){var a=ge(pa,this).get(s),i=ge(ps,this).get(a);if(i)Lu(i),ge(Zi,this).delete(a);else{var l=ge(ha,this).get(a);l&&(ge(ps,this).set(a,l.effect),ge(ha,this).delete(a),l.fragment.lastChild.remove(),this.anchor.before(l.fragment),i=l.effect)}for(var[c,u]of ge(pa,this)){if(ge(pa,this).delete(c),c===s)break;var d=ge(ha,this).get(u);d&&(Yr(d.effect),ge(ha,this).delete(u))}var h=function(j,m){if(j===a||ge(Zi,r).has(j))return 1;var y=()=>{if(Array.from(ge(pa,r).values()).includes(j)){var x=document.createDocumentFragment();xp(m,x),x.append(es()),ge(ha,r).set(j,{effect:m,fragment:x})}else Yr(m);ge(Zi,r).delete(j),ge(ps,r).delete(j)};ge(pu,r)||!i?(ge(Zi,r).add(j),xi(m,y,!1)):y()};for(var[b,g]of ge(ps,this))h(b,g)}}),Jn(this,wb,s=>{ge(pa,this).delete(s);var a=Array.from(ge(pa,this).values());for(var[i,l]of ge(ha,this))a.includes(i)||(Yr(l.effect),ge(ha,this).delete(i))}),this.anchor=t,cn(pu,this,o)}ensure(t,r){var o=Tn;!r||ge(ps,this).has(t)||ge(ha,this).has(t)||ge(ps,this).set(t,ra(()=>r(this.anchor))),ge(pa,this).set(o,t),ge(Ov,this).call(this)}}function Xr(e){Nn===null&&Cl(),Ei&&Nn.l!==null?Rp(Nn).m.push(e):Fu(()=>{var t=P(e);if(typeof t=="function")return t})}function Po(e){Nn===null&&Cl(),Xr(()=>()=>P(e))}function kb(){var e=Nn;return e===null&&Cl(),(t,r,o)=>{var s,a=(s=e.s.$$events)===null||s===void 0?void 0:s[t];if(a){var i=Sl(a)?a.slice():[a],l=(function(u,d){var{bubbles:h=!1,cancelable:b=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(u,{detail:d,bubbles:h,cancelable:b})})(t,r,o);for(var c of i)c.call(e.x,l);return!l.defaultPrevented}return!0}}function Sb(e){Nn===null&&Cl(),Nn.l===null&&(function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")})(),Rp(Nn).b.push(e)}function Rp(e){var t,r=e.l;return(t=r.u)!==null&&t!==void 0?t:r.u={a:[],b:[],m:[]}}function Q(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=new Lc(e);function s(a,i){o.ensure(a,i)}Ni(()=>{var a=!1;t(function(i){a=!0,s(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],i)}),a||s(!1,null)},r?qs:0)}function Tp(e,t,r){var o=new Lc(e),s=!Ri();Ni(()=>{var a=t();s&&a!==null&&typeof a=="object"&&(a={}),o.ensure(a,r)})}function pr(e,t){return t}function hu(e){for(var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=0;r<e.length;r++)Yr(e[r],t)}function or(e,t,r,o,s){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=e,l=new Map;!(4&t)||(i=e.appendChild(es()));var c,u=null,d=_e(()=>{var m=r();return Sl(m)?m:m==null?[]:ac(m)}),h=!0;function b(){j.fallback=u,(function(m,y,x,k,O){var M,w,N,T,Y,A=!!(8&k),re=y.length,X=m.items,_=m.effect.first,ee=null,je=[],te=[];if(A)for(Y=0;Y<re;Y+=1){var Ee;N=O(y[Y],Y),((T=X.get(N).e).f&ma)===0&&((Ee=T.nodes)===null||Ee===void 0||(Ee=Ee.a)===null||Ee===void 0||Ee.measure(),(w??(w=new Set)).add(T))}for(Y=0;Y<re;Y+=1){if(N=O(y[Y],Y),T=X.get(N).e,m.outrogroups!==null)for(var De of m.outrogroups)De.pending.delete(T),De.done.delete(T);if((T.f&ma)!==0){if(T.f^=ma,T!==_){var $e=ee?ee.next:_;T===m.effect.last&&(m.effect.last=T.prev),T.prev&&(T.prev.next=T.next),T.next&&(T.next.prev=T.prev),$a(m,ee,T),$a(m,T,$e),Qi(T,$e,x),je=[],te=[],_=(ee=T).next;continue}Qi(T,null,x)}var pe;if((T.f&ta)!==0&&(Lu(T),A&&((pe=T.nodes)===null||pe===void 0||(pe=pe.a)===null||pe===void 0||pe.unfix(),(w??(w=new Set)).delete(T))),T!==_){if(M!==void 0&&M.has(T)){if(je.length<te.length){var we,qe=te[0];ee=qe.prev;var Ye=je[0],he=je[je.length-1];for(we=0;we<je.length;we+=1)Qi(je[we],qe,x);for(we=0;we<te.length;we+=1)M.delete(te[we]);$a(m,Ye.prev,he.next),$a(m,ee,Ye),$a(m,he,qe),_=qe,ee=he,Y-=1,je=[],te=[]}else M.delete(T),Qi(T,_,x),$a(m,T.prev,T.next),$a(m,T,ee===null?m.effect.first:ee.next),$a(m,ee,T),ee=T;continue}for(je=[],te=[];_!==null&&_!==T;)(M??(M=new Set)).add(_),te.push(_),_=_.next;if(_===null)continue}(T.f&ma)===0&&je.push(T),ee=T,_=T.next}if(m.outrogroups!==null){for(var ie of m.outrogroups){var me;ie.pending.size===0&&(hu(ac(ie.done)),(me=m.outrogroups)===null||me===void 0||me.delete(ie))}m.outrogroups.size===0&&(m.outrogroups=null)}if(_!==null||M!==void 0){var xt=[];if(M!==void 0)for(T of M)(T.f&ta)===0&&xt.push(T);for(;_!==null;)(_.f&ta)===0&&_!==m.fallback&&xt.push(_),_=_.next;var an=xt.length;if(an>0){var le=4&k&&re===0?x:null;if(A){for(Y=0;Y<an;Y+=1){var W;(W=xt[Y].nodes)===null||W===void 0||(W=W.a)===null||W===void 0||W.measure()}for(Y=0;Y<an;Y+=1){var ue;(ue=xt[Y].nodes)===null||ue===void 0||(ue=ue.a)===null||ue===void 0||ue.fix()}}(function(I,se,L){for(var Ce,Z=se.length,U=se.length,pt=function(){var it=se[st];xi(it,()=>{if(Ce){if(Ce.pending.delete(it),Ce.done.add(it),Ce.pending.size===0){var Pe=I.outrogroups;hu(ac(Ce.done)),Pe.delete(Ce),Pe.size===0&&(I.outrogroups=null)}}else U-=1},!1)},st=0;st<Z;st++)pt();if(U===0){var Xe=L!==null;if(Xe){var Ct=L,Te=Ct.parentNode;Te.textContent="",Te.append(Ct),I.items.clear()}hu(se,!Xe)}else{var Ie;Ce={pending:new Set(se),done:new Set},((Ie=I.outrogroups)!==null&&Ie!==void 0?Ie:I.outrogroups=new Set).add(Ce)}})(m,xt,le)}}A&&Es(()=>{if(w!==void 0)for(T of w){var I;(I=T.nodes)===null||I===void 0||(I=I.a)===null||I===void 0||I.apply()}})})(j,c,i,t,o),u!==null&&(c.length===0?(u.f&ma)===0?Lu(u):(u.f^=ma,Qi(u,null,i)):xi(u,()=>{u=null}))}var g=Ni(()=>{for(var m=(c=n(d)).length,y=new Set,x=0;x<m;x+=1){var k=c[x],O=o(k,x),M=h?null:l.get(O);M?(M.v&&Ps(M.v,k),M.i&&Ps(M.i,x)):(M=Cb(l,h?i:Fl??(Fl=es()),k,O,x,s,t,r),h||(M.e.f|=ma),l.set(O,M)),y.add(O)}m===0&&a&&!u&&(h?u=ra(()=>a(i)):(u=ra(()=>a(Fl??(Fl=es())))).f|=ma),h||b(),n(d)}),j={effect:g,items:l,outrogroups:null,fallback:u};h=!1}function Cb(e,t,r,o,s,a,i,l){var c=1&i?16&i?Na(r):q(r,!1,!1):null,u=2&i?Na(s):null;return{v:c,i:u,e:ra(()=>(a(t,c??r,u??s,l),()=>{e.delete(o)}))}}function Qi(e,t,r){if(e.nodes)for(var o=e.nodes.start,s=e.nodes.end,a=t&&(t.f&ma)===0?t.nodes.start:r;o!==null;){var i=Ol(o);if(a.before(o),o===s)return;o=i}}function $a(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Np(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=arguments.length>3&&arguments[3]!==void 0&&arguments[3],s=e,a="";xe(()=>{var i,l=Sn;if(a!==(a=(i=t())!==null&&i!==void 0?i:"")&&(l.nodes!==null&&(gp(l.nodes.start,l.nodes.end),l.nodes=null),a!=="")){var c=a+"";r?c="<svg>".concat(c,"</svg>"):o&&(c="<math>".concat(c,"</math>"));var u=Ad(c);if((r||o)&&(u=go(u)),Rs(go(u),u.lastChild),r||o)for(;go(u);)s.before(go(u));else s.before(u)}})}function cr(e,t,r,o,s){var a,i=(a=t.$$slots)===null||a===void 0?void 0:a[r],l=!1;i===!0&&(i=t[r==="default"?"children":r],l=!0),i===void 0?s!==null&&s(e):i(e,l?()=>o:o)}function Ip(e,t,r){var o=new Lc(e);Ni(()=>{var s,a=(s=t())!==null&&s!==void 0?s:null;o.ensure(a,a&&(i=>r(i,a)))},qs)}function to(e,t,r){Dr(()=>{var o=P(()=>t(e,r?.())||{});if(r&&o!=null&&o.update){var s=!1,a={};Ti(()=>{var i=r();p(i),s&&Hf(a,i)&&(a=i,o.update(i))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function Mb(e,t){var r,o=void 0;pp(()=>{o!==(o=t())&&(r&&(Yr(r),r=null),o&&(r=ra(()=>{Dr(()=>o(e))})))})}function Up(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Up(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function as(e){return typeof e=="object"?(function(){for(var t,r,o=0,s="",a=arguments.length;o<a;o++)(t=arguments[o])&&(r=Up(t))&&(s&&(s+=" "),s+=r);return s})(e):e??""}var zv=[...` 	
\r\f \v\uFEFF`];function qv(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",r="";for(var o in e){var s=e[o];s!=null&&s!==""&&(r+=" "+o+": "+s+t)}return r}function mu(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function jt(e,t,r,o,s,a){var i=e.__className;if(i!==r||i===void 0){var l=(function(d,h,b){var g=d==null?"":""+d;if(h&&(g=g?g+" "+h:h),b){for(var j in b)if(b[j])g=g?g+" "+j:j;else if(g.length)for(var m=j.length,y=0;(y=g.indexOf(j,y))>=0;){var x=y+m;y!==0&&!zv.includes(g[y-1])||x!==g.length&&!zv.includes(g[x])?y=x:g=(y===0?"":g.substring(0,y))+g.substring(x+1)}}return g===""?null:g})(r,o,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var c in a){var u=!!a[c];s!=null&&u===!!s[c]||e.classList.toggle(c,u)}return a}function gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,o))}}function qo(e,t,r,o){if(e.__style!==t){var s=(function(a,i){if(i){var l,c,u="";if(Array.isArray(i)?(l=i[0],c=i[1]):l=i,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var d=!1,h=0,b=!1,g=[];l&&g.push(...Object.keys(l).map(mu)),c&&g.push(...Object.keys(c).map(mu));for(var j=0,m=-1,y=a.length,x=0;x<y;x++){var k=a[x];if(b?k==="/"&&a[x-1]==="*"&&(b=!1):d?d===k&&(d=!1):k==="/"&&a[x+1]==="*"?b=!0:k==='"'||k==="'"?d=k:k==="("?h++:k===")"&&h--,!b&&d===!1&&h===0){if(k===":"&&m===-1)m=x;else if(k===";"||x===y-1){if(m!==-1){var O=mu(a.substring(j,m).trim());g.includes(O)||(k!==";"&&x++,u+=" "+a.substring(j,x).trim()+";")}j=x+1,m=-1}}}}return l&&(u+=qv(l)),c&&(u+=qv(c,!0)),(u=u.trim())===""?null:u}return a==null?null:String(a)})(t,o);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else o&&(Array.isArray(o)?(gu(e,r?.[0],o[0]),gu(e,r?.[1],o[1],"important")):gu(e,r,o));return o}function xc(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!Sl(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");for(var o of e.options)o.selected=t.includes(al(o))}else{for(o of e.options)if(fb(al(o),t))return void(o.selected=!0);r&&t===void 0||(e.selectedIndex=-1)}}function $p(e){var t=new MutationObserver(()=>{xc(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Fc(()=>{t.disconnect()})}function al(e){return"__value"in e?e.__value:e.value}var Xs=Symbol("class"),Yi=Symbol("style"),Dp=Symbol("is custom element"),Jp=Symbol("is html");function Ts(e,t){var r=Pd(e);r.value!==(r.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t??"")}function fn(e,t,r,o){var s=Pd(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[ab]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Wp(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Ob(e,t,r,o){var s,a=Pd(e),i=a[Dp],l=!a[Jp],c=t||{},u=e.tagName==="OPTION";for(var d in t)d in r||(r[d]=null);r.class?r.class=as(r.class):(o||r[Xs])&&(r.class=null),r[Yi]&&((s=r.style)!==null&&s!==void 0||(r.style=null));var h,b,g,j,m,y,x=Wp(e),k=function(M){var w=r[M];if(u&&M==="value"&&w==null)return e.value=e.__value="",c[M]=w,0;if(M==="class")return h=e.namespaceURI==="http://www.w3.org/1999/xhtml",jt(e,h,w,o,t?.[Xs],r[Xs]),c[M]=w,c[Xs]=r[Xs],0;if(M==="style")return qo(e,w,t?.[Yi],r[Yi]),c[M]=w,c[Yi]=r[Yi],0;if(w===(b=c[M])&&(w!==void 0||!e.hasAttribute(M))||(c[M]=w,(g=M[0]+M[1])==="$$"))return 0;if(g==="on"){var N={},T="$$"+M,Y=M.slice(2);if(j=(function(ee){return gb.includes(ee)})(Y),(function(ee){return ee.endsWith("capture")&&ee!=="gotpointercapture"&&ee!=="lostpointercapture"})(Y)&&(Y=Y.slice(0,-7),N.capture=!0),!j&&b){if(w!=null)return 0;e.removeEventListener(Y,c[T],N),c[T]=null}if(w!=null)if(j)e["__".concat(Y)]=w,zl([Y]);else{let ee=function(je){c[M].call(this,je)};c[T]=Pp(Y,e,ee,N)}else j&&(e["__".concat(Y)]=void 0)}else if(M==="style")fn(e,M,w);else if(M==="autofocus")(function(ee,je){if(je){var te=document.body;ee.autofocus=!0,Es(()=>{document.activeElement===te&&ee.focus()})}})(e,!!w);else if(i||M!=="__value"&&(M!=="value"||w==null))if(M==="selected"&&u)(function(ee,je){je?ee.hasAttribute("selected")||ee.setAttribute("selected",""):ee.removeAttribute("selected")})(e,w);else if(m=M,l||(m=(function(ee){var je;return ee=ee.toLowerCase(),(je=bb[ee])!==null&&je!==void 0?je:ee})(m)),y=m==="defaultValue"||m==="defaultChecked",w!=null||i||y)y||x.includes(m)&&(i||typeof w!="string")?(e[m]=w,m in a&&(a[m]=Hr)):typeof w!="function"&&fn(e,m,w);else if(a[M]=null,m==="value"||m==="checked"){var A=e,re=t===void 0;if(m==="value"){var X=A.defaultValue;A.removeAttribute(m),A.defaultValue=X,A.value=A.__value=re?X:null}else{var _=A.defaultChecked;A.removeAttribute(m),A.defaultChecked=_,A.checked=!!re&&_}}else e.removeAttribute(M);else e.value=e.__value=w};for(var O in r)k(O);return c}function cc(e,t){var r=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&arguments[6]!==void 0&&arguments[6],s=arguments.length>7&&arguments[7]!==void 0&&arguments[7];op(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],a=>{var i=void 0,l={},c=e.nodeName==="SELECT",u=!1;if(pp(()=>{var h=t(...a.map(n)),b=Ob(e,i,h,r,o,s);for(var g of(u&&c&&"value"in h&&xc(e,h.value),Object.getOwnPropertySymbols(l)))h[g]||Yr(l[g]);for(var j of Object.getOwnPropertySymbols(h)){var m=h[j];j.description!=="@attach"||i&&m===i[j]||(l[j]&&Yr(l[j]),l[j]=ra(()=>Mb(e,()=>m))),b[j]=m}i=b}),c){var d=e;Dr(()=>{xc(d,i.value,!0),$p(d)})}u=!0})}function Pd(e){var t;return(t=e.__attributes)!==null&&t!==void 0?t:e.__attributes={[Dp]:e.nodeName.includes("-"),[Jp]:e.namespaceURI==="http://www.w3.org/1999/xhtml"}}var Ev=new Map;function Wp(e){var t,r=e.getAttribute("is")||e.nodeName,o=Ev.get(r);if(o)return o;Ev.set(r,o=[]);for(var s=e,a=Element.prototype;a!==s;){for(var i in t=Jf(s))t[i].set&&o.push(i);s=Od(s)}return o}function wc(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=new WeakSet;dp(e,"input",(function(){var s=at(function*(a){var i=a?e.defaultValue:e.value;if(i=bu(e)?ju(i):i,r(i),Tn!==null&&o.add(Tn),yield Op(),i!==(i=t())){var l=e.selectionStart,c=e.selectionEnd,u=e.value.length;if(e.value=i??"",c!==null){var d=e.value.length;l===c&&c===u&&d>u?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=l,e.selectionEnd=Math.min(c,d))}}});return function(a){return s.apply(this,arguments)}})()),P(t)==null&&e.value&&(r(bu(e)?ju(e.value):e.value),Tn!==null&&o.add(Tn)),Ti(()=>{var s=t();if(e===document.activeElement){var a=nl??Tn;if(o.has(a))return}bu(e)&&s===ju(e.value)||(e.type!=="date"||s||e.value)&&s!==e.value&&(e.value=s??"")})}function bu(e){var t=e.type;return t==="number"||t==="range"}function ju(e){return e===""?null:+e}function ct(e,t,r){var o=Oa(e,t);o&&o.set&&(e[t]=r,Fc(()=>{e[t]=null}))}function Av(e,t){return e===t||e?.[na]===t}function Fn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return Dr(()=>{var o,s;return Ti(()=>{o=s,s=[],P(()=>{e!==r(...s)&&(t(e,...s),o&&Av(r(...o),e)&&t(null,...o))})}),()=>{Es(()=>{s&&Av(r(...s),e)&&t(null,...s)})}}),e}function ya(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].stopPropagation(),e?.apply(this,r)}}function Ja(e){return function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r[0].preventDefault(),e?.apply(this,r)}}function yt(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=Nn,r=t.l.u;if(r){var o,s=()=>p(t.s);if(e){var a=0,i={},l=Ml(()=>{var c=!1,u=t.s;for(var d in u)u[d]!==i[d]&&(i[d]=u[d],c=!0);return c&&a++,a});s=()=>n(l)}r.b.length&&(o=()=>{Pv(t,s),Wu(r.b)},vp(),Wo(1048584,o,!0)),Fu(()=>{var c=P(()=>r.m.map(nb));return()=>{for(var u of c)typeof u=="function"&&u()}}),r.a.length&&Fu(()=>{Pv(t,s),Wu(r.a)})}}function Pv(e,t){if(e.l.s)for(var r of e.l.s)n(r);t()}function Vc(e){var t=Na(0);return function(){return arguments.length===1?(v(t,n(t)+1),arguments[0]):(n(t),e())}}function el(e,t){var r,o=(r=e.$$events)===null||r===void 0?void 0:r[t.type],s=Sl(o)?o.slice():o==null?[]:[o];for(var a of s)a.call(this,t)}var Ll=!1,zb={get(e,t){if(!e.exclude.includes(t))return n(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var o=Sn;try{Ao(e.parent_effect),e.special[t]=f({get[t](){return e.props[t]}},t,4)}finally{Ao(o)}}return e.special[t](r),wv(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),wv(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function Vl(e,t){return new Proxy({props:e,exclude:t,special:{},version:Na(0),parent_effect:Sn},zb)}var qb={get(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(Vi(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,r){for(var o=e.props.length;o--;){var s=e.props[o];Vi(s)&&(s=s());var a=Oa(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){for(var r=e.props.length;r--;){var o=e.props[r];if(Vi(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var s=Oa(o,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===na||t===Lf)return!1;for(var r of e.props)if(Vi(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){var t=[];for(var r of e.props)if(Vi(r)&&(r=r()),r){for(var o in r)t.includes(o)||t.push(o);for(var s of Object.getOwnPropertySymbols(r))t.includes(s)||t.push(s)}return t}};function ts(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new Proxy({props:t},qb)}function f(e,t,r,o){var s,a,i=!Ei||!!(2&r),l=!!(8&r),c=!!(16&r),u=o,d=!0,h=()=>(d&&(d=!1,u=c?P(o):o),u);if(l){var b,g,j=na in e||Lf in e;s=(b=(g=Oa(e,t))===null||g===void 0?void 0:g.set)!==null&&b!==void 0?b:j&&t in e?w=>e[t]=w:void 0}var m,y=!1;if(l?[a,y]=(function(w){var N=Ll;try{return Ll=!1,[w(),Ll]}finally{Ll=N}})(()=>e[t]):a=e[t],a===void 0&&o!==void 0&&(a=h(),s&&(i&&(function(){throw new Error("https://svelte.dev/e/props_invalid_value")})(),s(a))),m=i?()=>{var w=e[t];return w===void 0?h():(d=!0,w)}:()=>{var w=e[t];return w!==void 0&&(u=void 0),w===void 0?u:w},i&&!(4&r))return m;if(s){var x=e.$$legacy;return function(w,N){return arguments.length>0?(i&&N&&!x&&!y||s(N?m():w),w):m()}}var k=!1,O=(1&r?Ml:_e)(()=>(k=!1,m()));l&&n(O);var M=Sn;return function(w,N){if(arguments.length>0){var T=N?n(O):i&&l?ri(w):w;return v(O,T),k=!0,u!==void 0&&(u=T),w}return $s&&k||(M.f&Pi)!==0?O.v:n(O)}}function Ur(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(function(o){var s=(function(a){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[a]}catch{}})("debug");return s!=null&&s.endsWith("*")?o.startsWith(s.slice(0,-1)):o===s})(e);if(!t)return Eb;var r=(function(o){for(var s=0,a=0;a<o.length;a++)s=(s<<5)-s+o.charCodeAt(a),s|=0;return Rv[Math.abs(s)%Rv.length]})(e);return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];console.log("%c".concat(e),"color:".concat(r),...s)}}function Eb(){}var Rv=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],Ab=0;function oi(){return++Ab}function Fr(e){return parseInt(e,10)}function Rd(e){return Pb.test(e)}var Pb=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function Qt(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function Kn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function _p(e){return e===!0||e===!1}function kc(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return kc(Number(e));try{var t=e&&e.valueOf();if(t!==e)return kc(t)}catch{return!1}return!1}function Bp(e){(Hl=Hl||window.document.createElement("div")).style.color="",Hl.style.color=e;var t=Hl.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var Hl=void 0;function Fp(e){return typeof e=="string"&&e.length<99&&!!Bp(e)}function Hc(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(Qt(e))return"object";var r=t.stringify(e);return r&&Rd(r)?"number":r==="true"||r==="false"?"boolean":r==="null"?"null":"unknown"}var Rb=/^https?:\/\/\S+$/;function ql(e){return typeof e=="string"&&Rb.test(e)}function Ds(e,t){if(e==="")return"";var r=e.trim();return r==="null"?null:r==="true"||r!=="false"&&(Rd(r)?t.parse(r):e)}function Lp(e){return Tb.test(e)}var Tb=/^-?[0-9]+$/,Nb=[];function Tv(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function Qu(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(i,l){(!Array.isArray(i)&&!Qt(i)||t&&l.length>0)&&(r[St(l)]=!0),Qt(i)&&Object.keys(i).forEach(c=>{o(i[c],l.concat(c))})}for(var s=Math.min(e.length,1e4),a=0;a<s;a++)o(e[a],Nb);return Object.keys(r).sort().map(Oo)}function Vp(e,t,r){if(!(t<=e))for(var o=e;o<t;o++)r(o)}function Sc(e,t){return e.length>t?e.slice(0,t):e}function Nv(e){return be({},e)}function Iv(e){return Object.values(e)}function Uv(e,t,r,o){var s=e.slice(0),a=s.splice(t,r);return s.splice.apply(s,[t+o,0,...a]),s}function Ib(e,t,r){return e.slice(0,t).concat(r).concat(e.slice(t))}function El(e,t){try{return t.parse(e)}catch{return t.parse(Ko(e))}}function Hp(e,t){try{return El(e,t)}catch{return}}function Al(e,t){e=e.replace(Qp,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function Zp(e){e=e.replace(Qp,"");try{return Ko(e)}catch{}try{var t=Ko("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var r=Ko("{"+e+"}");return r.substring(1,r.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var Qp=/,\s*$/;function ki(e,t){var r=$v.exec(t);if(r){var o=Fr(r[2]),s=(function(g,j){for(var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:g.length,x=0,k=m;k<y;k++)g.charAt(k)===j&&x++;return x})(e,`
`,0,o),a=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:s,column:a,message:t.replace($v,()=>"line ".concat(s+1," column ").concat(a+1))}}var i=$b.exec(t),l=i?Fr(i[1]):void 0,c=l!==void 0?l-1:void 0,u=Db.exec(t),d=u?Fr(u[1]):void 0,h=d!==void 0?d-1:void 0,b=c!==void 0&&h!==void 0?(function(g,j,m){for(var y=g.indexOf(`
`),x=1;x<j&&y!==-1;)y=g.indexOf(`
`,y+1),x++;return y!==-1?y+m+1:void 0})(e,c,h):void 0;return{position:b,line:c,column:h,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function yu(e,t){try{var r=If.parse(e),o=St(t),s=r.pointers[o];if(s)return{path:t,line:s.key?s.key.line:s.value?s.value.line:0,column:s.key?s.key.column:s.value?s.value.column:0,from:s.key?s.key.pos:s.value?s.value.pos:0,to:s.keyEnd?s.keyEnd.pos:s.valueEnd?s.valueEnd.pos:0}}catch(a){console.error(a)}return{path:t,line:0,column:0,from:0,to:0}}function xu(e){return Qt(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function Ub(e){return Qt(e)&&(e.json!==void 0||typeof e.text=="string")}function Si(e){return Qt(e)&&typeof e.text=="string"}function Ci(e){return Qt(e)&&e.json!==void 0}function Yp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Si(e)?e:{text:r.stringify(e.json,null,t)}}function Yu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Ci(e)?e:{json:t.parse(e.text)}}function Gu(e,t,r){return Yp(e,t,r).text}function Gp(e,t){return Xp(e,t)>t}function Xp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Si(e))return e.text.length;var r=e.json,o=0;return(function s(a){if(Array.isArray(a)){if((o+=a.length-1+2)>t)return;for(var i=0;i<a.length;i++)if(s(a[i]),o>t)return}else if(Qt(a)){var l=Object.keys(a);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var u=l[c],d=a[u];o+=u.length+2,s(d)}}else o+=typeof a=="string"?a.length+2:String(a).length})(r),o}var $v=/(position|char) (\d+)/,$b=/line (\d+)/,Db=/column (\d+)/;function Zc(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function Dv(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&Jb.test(t)}var jr,kn,Mo,yo,Eo,fo,Ea,Jb=/[,:]\S/;function Td(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:r}=e;return t?r?Wb:_b:r?Bb:Fb}(function(e){e.text="text",e.tree="tree",e.table="table"})(jr||(jr={})),(function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"})(kn||(kn={})),(function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"})(Mo||(Mo={})),(function(e){e.info="info",e.warning="warning",e.error="error"})(yo||(yo={})),(function(e){e.key="key",e.value="value"})(Eo||(Eo={})),(function(e){e.asc="asc",e.desc="desc"})(fo||(fo={})),(function(e){e.no="no",e.self="self",e.nextInside="nextInside"})(Ea||(Ea={}));var Wb={escapeValue:e=>Kp(nh(String(e))),unescapeValue:e=>rh(eh(e))},_b={escapeValue:e=>nh(String(e)),unescapeValue:e=>rh(e)},Bb={escapeValue:e=>Kp(String(e)),unescapeValue:e=>eh(e)},Fb={escapeValue:e=>String(e),unescapeValue:e=>e};function Kp(e){return e.replace(/[^\x20-\x7F]/g,t=>{var r;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((r=t.codePointAt(0))===null||r===void 0?void 0:r.toString(16))).slice(-4)})}function eh(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var r=JSON.parse('"'+t+'"');return th[r]||r}catch{return t}})}var th={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Lb={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function nh(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>th[t]||t)}function rh(e){return e.replace(/\\["bfnrt\\]/g,t=>Lb[t]||t)}function Mi(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function oh(e,t){return Ui(e,r=>r.nodeName.toUpperCase()===t.toUpperCase())}function Qa(e,t,r){return Ui(e,o=>(function(s,a,i){return typeof s.getAttribute=="function"&&s.getAttribute(a)===i})(o,t,r))}function Ui(e,t){return!!Nd(e,t)}function Nd(e,t){for(var r=e;r&&!t(r);)r=r.parentNode;return r}function Pl(e){var t,r;return(t=e==null||(r=e.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&t!==void 0?t:void 0}function Id(e){var t=Pl(e),r=t?.document.activeElement;return!!r&&Ui(r,o=>o===e)}function ah(e,t){return Nd(e,r=>r.nodeName===t)}function wu(e){return Qa(e,"data-type","selectable-key")?kn.key:Qa(e,"data-type","selectable-value")?kn.value:Qa(e,"data-type","insert-selection-area-inside")?kn.inside:Qa(e,"data-type","insert-selection-area-after")?kn.after:kn.multi}function uc(e){return encodeURIComponent(St(e))}function sh(e){var t,r=Nd(e,s=>!(s==null||!s.hasAttribute)&&s.hasAttribute("data-path")),o=(t=r?.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?Oo(decodeURIComponent(o)):void 0}function Vb(e){var{allElements:t,currentElement:r,direction:o,hasPrio:s=()=>!0,margin:a=10}=e,i=Vm(t.filter(function(x){var k=x.getBoundingClientRect();return k.width>0&&k.height>0}),c),l=c(r);function c(x){var k=x.getBoundingClientRect();return{x:k.left+k.width/2,y:k.top+k.height/2,rect:k,element:x}}function u(x,k){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,M=x.x-k.x,w=(x.y-k.y)*O;return Math.sqrt(M*M+w*w)}var d=x=>u(x,l);if(o==="Left"||o==="Right"){var h=o==="Left"?i.filter(x=>{return k=l,x.rect.left+a<k.rect.left;var k}):i.filter(x=>{return k=l,x.rect.right>k.rect.right+a;var k}),b=h.filter(x=>{return k=x,O=l,Math.abs(k.y-O.y)<a;var k,O}),g=Dl(b,d)||Dl(h,x=>u(x,l,10));return g?.element}if(o==="Up"||o==="Down"){var j=o==="Up"?i.filter(x=>{return k=l,x.y+a<k.y;var k}):i.filter(x=>{return k=l,x.y>k.y+a;var k}),m=j.filter(x=>s(x.element)),y=Dl(m,d)||Dl(j,d);return y?.element}}function Ud(){var e,t,r,o;return typeof navigator<"u"&&(e=(t=(r=navigator)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function la(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",r=[];$d(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ud)&&r.push("Ctrl"),e.altKey&&r.push("Alt"),e.shiftKey&&r.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in Hb||r.push(o),r.join(t)}function $d(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ud;return e.ctrlKey||e.metaKey&&t()}var Hb={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function ft(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}ft(`.jse-absolute-popup.svelte-enkkpn {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-enkkpn .jse-hidden-input:where(.svelte-enkkpn) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-enkkpn .jse-absolute-popup-content:where(.svelte-enkkpn) {
  position: absolute;
}`);var Zb=H('<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>'),Qb=H('<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>');function Yb(e,t){Ke(t,!1);var r=f(t,"popup",8),o=f(t,"closeAbsolutePopup",8),s=q(),a=q();function i(h){r().options&&r().options.closeOnOuterClick&&!Ui(h.target,b=>b===n(s))&&o()(r().id)}function l(h){la(h)==="Escape"&&(h.preventDefault(),h.stopPropagation(),o()(r().id))}Xr(function(){n(a)&&n(a).focus()}),yt();var c=Qb();fe("mousedown",za,function(h){i(h)},!0),fe("keydown",za,l,!0),fe("wheel",za,function(h){i(h)},!0);var u=E(c),d=h=>{var b=Zb(),g=E(b);Fn(g,j=>v(a,j),()=>n(a)),Ip(D(g,2),()=>r().component,(j,m)=>{m(j,ts(()=>r().props))}),xe(j=>qo(b,j),[()=>(n(s),p(r()),P(()=>(function(j,m){var y=j.getBoundingClientRect(),{left:x,top:k,positionAbove:O,positionLeft:M}=(function(){if(m.anchor){var{anchor:w,width:N=0,height:T=0,offsetTop:Y=0,offsetLeft:A=0,position:re}=m,{left:X,top:_,bottom:ee,right:je}=w.getBoundingClientRect(),te=re==="top"||_+T>window.innerHeight&&_>T,Ee=re==="left"||X+N>window.innerWidth&&X>N;return{left:Ee?je-A:X+A,top:te?_-Y:ee+Y,positionAbove:te,positionLeft:Ee}}if(typeof m.left=="number"&&typeof m.top=="number"){var{left:De,top:$e,width:pe=0,height:we=0}=m;return{left:De,top:$e,positionAbove:$e+we>window.innerHeight&&$e>we,positionLeft:De+pe>window.innerWidth&&De>pe}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')})();return(O?"bottom: ".concat(y.top-k,"px;"):"top: ".concat(k-y.top,"px;"))+(M?"right: ".concat(y.left-x,"px;"):"left: ".concat(x-y.left,"px;"))})(n(s),r().options)))]),z(h,b)};Q(u,h=>{n(s)&&h(d)}),Fn(c,h=>v(s,h),()=>n(s)),fe("mousedown",c,function(h){h.stopPropagation()}),fe("keydown",c,l),z(e,c),et()}var Gb=H("<!> <!>",1);function Xu(e,t){Ke(t,!1);var r=Ur("jsoneditor:AbsolutePopup"),o=q([],!0);function s(l){var c=n(o).findIndex(d=>d.id===l);if(c!==-1){var u=n(o)[c];u.options.onClose&&u.options.onClose(),v(o,n(o).filter(d=>d.id!==l))}}(function(l,c){Qf().set(l,c)})("absolute-popup",{openAbsolutePopup:function(l,c,u){r("open...",c,u);var d={id:oi(),component:l,props:c||{},options:u||{}};return v(o,[...n(o),d]),d.id},closeAbsolutePopup:s}),F(()=>n(o),()=>{r("popups",n(o))}),dn(),yt(!0);var a=Gb(),i=We(a);or(i,1,()=>n(o),pr,(l,c)=>{Yb(l,{get popup(){return n(c)},closeAbsolutePopup:s})}),cr(D(i,2),t,"default",{},null),z(e,a),et()}function Rl(e,t){for(var r=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),s=e,a=1;r.has(s);){var i="copy"+(a>1?" "+a:"");s="".concat(o," (").concat(i,")"),a++}return s}function ka(e,t){var r=t-3;return e.length>t?e.substring(0,r)+"...":e}function Tl(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var r=Number(e),o=parseFloat(e);return isNaN(r)||isNaN(o)?e:r}}var ih={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:r,sort:o,projection:s}=t,a=[];r&&r.path&&r.relation&&r.value&&a.push(["filter",[(i=r.relation,Om("1 ".concat(i," 1"))[0]),Zl(r.path),Tl(r.value)]]);var i;return o&&o.path&&o.direction&&a.push(["sort",Zl(o.path),o.direction==="desc"?"desc":"asc"]),s&&s.paths&&(s.paths.length>1?a.push(["pick",...s.paths.map(Zl)]):a.push(["map",Zl(s.paths[0])])),zm(["pipe",...a])},executeQuery:function(e,t,r){var o=Zc(r,JSON)?e:(function(s){var a=r.stringify(s);return a!==void 0?JSON.parse(a):void 0})(e);return t.trim()!==""?Mm(o,t):o}};function Zl(e){return["get",...e]}var Xb=cs("<g><!></g>");function Kb(e,t){Ke(t,!1);var r=870711,o=q(""),s=f(t,"data",8);function a(l){if(!l||!l.raw)return"";var c=l.raw,u={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(d,h)=>{var b="fa-".concat((r+=1).toString(16));return u[h]=b,' id="'.concat(b,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(d,h,b,g)=>{var j=h||g;return j&&u[j]?"#".concat(u[j]):d}),c}F(()=>p(s()),()=>{v(o,a(s()))}),dn();var i=Xb();Np(E(i),()=>n(o),!0),z(e,i),et()}ft(`
  .fa-icon.svelte-v67cny {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-v67cny {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-v67cny {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-v67cny {
    color: #fff;
  }
  .fa-pulse.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-v67cny-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var ej=cs("<svg><!></svg>"),tj=cs("<path></path>"),nj=cs("<polygon></polygon>"),rj=cs("<!><!><!>",1);function Yt(e,t){var r=Vl(t,["children","$$slots","$$events","$$legacy"]),o=Vl(r,["class","data","scale","spin","inverse","pulse","flip","label","style"]);Ke(t,!1);var s=f(t,"class",8,""),a=f(t,"data",8),i=q(),l=f(t,"scale",8,1),c=f(t,"spin",8,!1),u=f(t,"inverse",8,!1),d=f(t,"pulse",8,!1),h=f(t,"flip",8,void 0),b=f(t,"label",8,""),g=f(t,"style",8,""),j=q(10),m=q(10),y=q(),x=q();function k(){var M=1;return l()!==void 0&&(M=Number(l())),isNaN(M)||M<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*M}function O(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}F(()=>(p(a()),p(g()),p(l())),()=>{v(i,(function(M){var w;if(M){if(!("definition"in M)){if("iconName"in M&&"icon"in M){M.iconName;var[N,T,,,Y]=M.icon;w={width:N,height:T,paths:(Array.isArray(Y)?Y:[Y]).map(A=>({d:A}))}}else w=M[Object.keys(M)[0]];return w}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}})(a())),g(),l(),v(j,n(i)?n(i).width/O()*k():0),v(m,n(i)?n(i).height/O()*k():0),v(y,(function(){var M="";g()!==null&&(M+=g());var w=k();return w===1?M.length===0?"":M:(M===""||M.endsWith(";")||(M+="; "),"".concat(M,"font-size: ").concat(w,"em"))})()),v(x,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(j)," ").concat(n(m)))}),dn(),yt(),(function(M,w){var N=Vl(w,["children","$$slots","$$events","$$legacy"]),T=Vl(N,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),Y=f(w,"class",8,""),A=f(w,"width",8),re=f(w,"height",8),X=f(w,"box",8,"0 0 0 0"),_=f(w,"spin",8,!1),ee=f(w,"inverse",8,!1),je=f(w,"pulse",8,!1),te=f(w,"flip",8,"none"),Ee=f(w,"style",8,""),De=f(w,"label",8,""),$e=ej();cc($e,()=>{var pe;return be(be({version:"1.1",class:"fa-icon ".concat((pe=Y())!==null&&pe!==void 0?pe:""),width:A(),height:re(),"aria-label":De(),role:De()?"img":"presentation",viewBox:X(),style:Ee()},T),{},{[Xs]:{"fa-spin":_(),"fa-pulse":je(),"fa-inverse":ee(),"fa-flip-horizontal":te()==="horizontal","fa-flip-vertical":te()==="vertical"}})},void 0,void 0,void 0,"svelte-v67cny"),cr(E($e),w,"default",{},null),z(M,$e)})(e,ts({get label(){return b()},get width(){return n(j)},get height(){return n(m)},get box(){return n(x)},get style(){return n(y)},get spin(){return c()},get flip(){return h()},get inverse(){return u()},get pulse(){return d()},get class(){return s()}},()=>o,{children:(M,w)=>{var N=Tt();cr(We(N),t,"default",{},T=>{var Y=rj(),A=We(Y);or(A,1,()=>(n(i),P(()=>{var ee;return((ee=n(i))===null||ee===void 0?void 0:ee.paths)||[]})),pr,(ee,je)=>{var te=tj();cc(te,()=>be({},n(je))),z(ee,te)});var re=D(A);or(re,1,()=>(n(i),P(()=>{var ee;return((ee=n(i))===null||ee===void 0?void 0:ee.polygons)||[]})),pr,(ee,je)=>{var te=nj();cc(te,()=>be({},n(je))),z(ee,te)});var X=D(re),_=ee=>{Kb(ee,{get data(){return n(i)},set data(je){v(i,je)},$$legacy:!0})};Q(X,ee=>{n(i),P(()=>{var je;return(je=n(i))===null||je===void 0?void 0:je.raw})&&ee(_)}),z(T,Y)}),z(M,N)},$$slots:{default:!0}})),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-eli4ob {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-eli4ob:not(.jse-readonly) {
  cursor: pointer;
}`);var oj=H('<div role="checkbox" tabindex="-1"><!></div>');function lh(e,t){Ke(t,!1);var r=f(t,"path",9),o=f(t,"value",9),s=f(t,"readOnly",9),a=f(t,"onPatch",9),i=f(t,"focus",9);yt(!0);var l,c=oj(),u=E(c),d=_e(()=>o()===!0?kf:Sf);Yt(u,{get data(){return n(d)}}),xe(()=>{fn(c,"aria-checked",o()===!0),l=jt(c,1,"jse-boolean-toggle svelte-eli4ob",null,l,{"jse-readonly":s()}),fn(c,"title",s()?"Boolean value ".concat(o()):"Click to toggle this boolean value")}),fe("mousedown",c,function(h){h.stopPropagation(),s()||(a()([{op:"replace",path:St(r()),value:!o()}]),i()())}),z(e,c),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-v77py2 .picker_slider,
.jse-color-picker-popup.svelte-v77py2 .picker_sl,
.jse-color-picker-popup.svelte-v77py2 .picker_editor input,
.jse-color-picker-popup.svelte-v77py2 .picker_sample,
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-v77py2 .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var aj=H('<div class="jse-color-picker-popup svelte-v77py2"></div>');function sj(e,t){Ke(t,!1);var r=f(t,"color",8),o=f(t,"onChange",8),s=f(t,"showOnTop",8),a=q(),i=()=>{};Xr(at(function*(){var c,u=new((c=yield Zg(()=>import("./vue3-ts-jsoneditor-Cxa2mkhM.js").then(d=>d.bq),__vite__mapDeps([0,1,2,3,4,5,6])).then(function(d){return d.a4}))===null||c===void 0?void 0:c.default)({parent:n(a),color:r(),popup:s()?"top":"bottom",onDone(d){var h=d.rgba[3]===1?d.hex.substring(0,7):d.hex;o()(h)}});u.show(),i=()=>{u.destroy()}})),Po(()=>{i()}),yt();var l=aj();Fn(l,c=>v(a,c),()=>n(a)),z(e,l),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-13mgyo6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-13mgyo6:not(.jse-readonly) {
  cursor: pointer;
}`);var ij=H('<button type="button"></button>');function ch(e,t){Ke(t,!1);var r=q(void 0,!0),o=q(void 0,!0),{openAbsolutePopup:s}=ls("absolute-popup"),a=f(t,"path",9),i=f(t,"value",9),l=f(t,"readOnly",9),c=f(t,"onPatch",9),u=f(t,"focus",9);function d(j){c()([{op:"replace",path:St(a()),value:j}]),h()}function h(){u()()}F(()=>p(i()),()=>{v(r,Bp(i()))}),F(()=>(p(l()),p(i())),()=>{v(o,l()?"Color ".concat(i()):"Click to open a color picker")}),dn(),yt(!0);var b,g=ij();xe(()=>{var j;b=jt(g,1,"jse-color-picker-button svelte-13mgyo6",null,b,{"jse-readonly":l()}),qo(g,"background: ".concat((j=n(r))!==null&&j!==void 0?j:"")),fn(g,"title",n(o)),fn(g,"aria-label",n(o))}),fe("click",g,function(j){var m,y;if(!l()){var x=j.target,k=x.getBoundingClientRect().top,O=((m=(y=Pl(x))===null||y===void 0?void 0:y.innerHeight)!==null&&m!==void 0?m:0)-k<300&&k>300,M={color:i(),onChange:d,showOnTop:O};s(sj,M,{anchor:x,closeOnOuterClick:!0,onClose:h,offsetTop:18,offsetLeft:-8,height:300})}}),z(e,g),et()}var ku=1e3,dl=100,Ql=100,Cc=2e4,pi=[{start:0,end:dl}],lj=1048576,cj=1048576,Su=10485760,Cu="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",Dd="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",hs="hover-insert-inside",Yl="hover-insert-after",Jv="hover-collection",Mu="valid",Wv="repairable",Sa=336,Ca=260,tl=100,_v={[fo.asc]:"ascending",[fo.desc]:"descending"};function uh(e){for(var t=rg(e,l=>l.start),r=[t[0]],o=0;o<t.length;o++){var s=r.length-1,a=r[s],i=t[o];i.start<=a.end?r[s]={start:Math.min(a.start,i.start),end:Math.max(a.end,i.end)}:r.push(i)}return r}function Ku(e){return Mc(e)+dl}function Mc(e){return Math.floor(e/dl)*dl}function Oc(e){return!!e&&(e.type==="space"||e.space===!0)}function xa(e){return!!e&&(e.type==="separator"||e.separator===!0)}function ed(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function Lo(e){return!!e&&typeof e.onClick=="function"}function ys(e){return!!e&&e.type==="dropdown-button"&&Lo(e.main)&&Array.isArray(e.items)}function td(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function nd(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function rd(e){return Qt(e)&&Qt(e.parseError)}function dh(e){return Qt(e)&&Array.isArray(e.validationErrors)}function vh(e){return Qt(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function fh(e){return Qt(e)&&vh(e)&&typeof e.isChildError=="boolean"}function uj(e){return Qt(e)&&"component"in e&&Qt(e.props)}function ph(e){return Qt(e)&&typeof e.action=="function"&&Qt(e.props)}function ro(e){return e!==void 0&&e.type==="object"}function Pr(e){return e!==void 0&&e.type==="array"}function Qc(e){return e!==void 0&&e.type==="value"}function ss(e){return ro(e)||Pr(e)}function Jd(e){return e!==void 0&&Array.isArray(e.searchResults)}function vl(e){return!!e&&e.type==="tree"}function od(e){return!!e&&e.type==="text"}function ad(e){return!!e&&e.type==="mode"}function sd(e){var{json:t,expand:r}=e,o=(function(s){var{json:a,factory:i}=s;return Array.isArray(a)?i.createArrayDocumentState():Qt(a)?i.createObjectDocumentState():a!==void 0?i.createValueDocumentState():void 0})({json:t,factory:Bd});return r&&o?No(t,o,[],r):o}function Wd(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:pi,items:[]}}function _d(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var Bd={createObjectDocumentState:_d,createArrayDocumentState:Wd,createValueDocumentState:function(){return{type:"value"}}};function hh(e,t,r,o){var{createObjectDocumentState:s,createArrayDocumentState:a,createValueDocumentState:i}=o;return(function l(c,u,d){if(Array.isArray(c)){var h=Pr(u)?u:a();if(d.length===0)return h;var b=Fr(d[0]),g=l(c[b],h.items[b],d.slice(1));return ja(h,["items",d[0]],g)}if(Qt(c)){var j=ro(u)?u:s();if(d.length===0)return j;var m=d[0],y=l(c[m],j.properties[m],d.slice(1));return ja(j,["properties",m],y)}return Qc(u)?u:i()})(e,t,r)}function ho(e,t){return fl(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(r,o)=>{if(r!==void 0&&o!==void 0)return Array.isArray(r)?Pr(o)?o:Wd({expanded:!!ss(o)&&o.expanded}):Qt(r)?ro(o)?o:_d({expanded:!!ss(o)&&o.expanded}):Qc(o)?o:void 0},()=>!0)}function fl(e,t,r,o,s){var a=o(e,t,r);if(Array.isArray(e)&&Pr(a)&&s(a)){var i=[];return Fd(e,a.visibleSections,c=>{var u=r.concat(String(c)),d=fl(e[c],a.items[c],u,o,s);d!==void 0&&(i[c]=d)}),Tv(i,a.items)?a:be(be({},a),{},{items:i})}if(Qt(e)&&ro(a)&&s(a)){var l={};return Object.keys(e).forEach(c=>{var u=r.concat(c),d=fl(e[c],a.properties[c],u,o,s);d!==void 0&&(l[c]=d)}),Tv(Object.values(l),Object.values(a.properties))?a:be(be({},a),{},{properties:l})}return a}function Fd(e,t,r){t.forEach(o=>{var{start:s,end:a}=o;Vp(s,Math.min(e.length,a),r)})}function pl(e,t){for(var r=e,o=[],s=0;s<t.length;){if(Array.isArray(r)){var a=t[s];o.push("items",a),r=r[Fr(a)]}else{if(!Qt(r))throw new Error("Cannot convert path: Object or Array expected at index ".concat(s));var i=t[s];o.push("properties",i),r=r[i]}s++}return o}function No(e,t,r,o){for(var s=t,a=function(l){var c=r.slice(0,l);s=Oi(e,s,c,(u,d)=>{var h=ss(d)&&!d.expanded?be(be({},d),{},{expanded:!0}):d;return Pr(h)?(function(b,g){if((function(y,x){return y.some(k=>x>=k.start&&x<k.end)})(b.visibleSections,g))return b;var j=Mc(g),m={start:j,end:Ku(j)};return be(be({},b),{},{visibleSections:uh(b.visibleSections.concat(m))})})(h,Fr(r[l])):h})},i=0;i<r.length;i++)a(i);return Oi(e,s,r,(l,c)=>(function(u,d,h,b){return fl(u,d,h,(g,j,m)=>Array.isArray(g)&&b(m)?Pr(j)?j.expanded?j:be(be({},j),{},{expanded:!0}):Wd({expanded:!0}):Qt(g)&&b(m)?ro(j)?j.expanded?j:be(be({},j),{},{expanded:!0}):_d({expanded:!0}):j,g=>ss(g)&&g.expanded)})(l,c,[],o))}function Bv(e,t,r,o){return Oi(e,t,r,(s,a)=>o?(function(i,l,c){return fl(i,l,c,(u,d)=>Fv(d),()=>!0)})(s,a,r):Fv(a))}function Fv(e){return Pr(e)&&e.expanded?be(be({},e),{},{expanded:!1,visibleSections:pi}):ro(e)&&e.expanded?be(be({},e),{},{expanded:!1}):e}function mh(e,t,r){var o={json:e,documentState:t},s=r.reduce((a,i)=>({json:ea(a.json,[i]),documentState:dj(a.json,a.documentState,i)}),o);return{json:s.json,documentState:ho(s.json,s.documentState)}}function dj(e,t,r){if(Pf(r))return Lv(e,t,r,void 0);if(Rf(r))return Vv(e,t,r);if(Md(r)){var o=Xo(e,r.path),s=Yo(e,t,o);return s?Yc(e,t,o,{type:"value",enforceString:s}):t}return Du(r)||ks(r)?(function(a,i,l){if(ks(l)&&l.from===l.path)return i;var c=i,u=Xo(a,l.from),d=Vo(a,c,u);return ks(l)&&(c=Vv(a,c,{path:l.from})),c=Lv(a,c,{path:l.path},d),c})(e,t,r):t}function Vo(e,t,r){try{return He(t,pl(e,r))}catch{return}}function Ld(e,t,r,o,s){var a=hh(e,t,r,s);return Wm(a,pl(e,r),i=>{var l=He(e,r);return o(l,i)})}function Yc(e,t,r,o){return(function(s,a,i,l,c){var u=hh(s,a,i,c);return ja(u,pl(s,i),l)})(e,t,r,o,Bd)}function Oi(e,t,r,o){return Ld(e,t,r,o,Bd)}function Lv(e,t,r,o){var s=Xo(e,r.path),a=t;return a=Oi(e,a,Zt(s),(i,l)=>{if(!Pr(l))return l;var c=Fr(It(s)),{items:u,visibleSections:d}=l;return be(be({},l),{},{items:c<u.length?Ib(u,c,o!==void 0?[o]:Array(1)):u,visibleSections:gh(d,c,1)})}),Yc(e,a,s,o)}function Vv(e,t,r){var o=Xo(e,r.path),s=Zt(o),a=He(e,s);return Array.isArray(a)?Oi(e,t,s,(i,l)=>{if(!Pr(l))return l;var c=Fr(It(o)),{items:u,visibleSections:d}=l;return be(be({},l),{},{items:u.slice(0,c).concat(u.slice(c+1)),visibleSections:gh(d,c,-1)})}):(function(i,l,c){var u=pl(i,c);return Ha(l,u)?Qm(l,pl(i,c)):l})(e,t,o)}function gh(e,t,r){return(function(o){for(var s=o.slice(0),a=1;a<s.length;)s[a-1].end===s[a].start&&(s[a-1]={start:s[a-1].start,end:s[a].end},s.splice(a)),a++;return s})(e.map(o=>({start:o.start>t?o.start+r:o.start,end:o.end>t?o.end+r:o.end})))}function Yo(e,t,r){var o,s=He(e,r),a=Vo(e,t,r),i=Qc(a)?a.enforceString:void 0;return typeof i=="boolean"?i:typeof(o=s)=="string"&&typeof Ds(o,JSON)!="string"}function Nl(e,t){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?r?e.slice(o):e.slice(o+1):[]}function Vd(e,t){var r=[];return(function o(s,a,i){r.push(i),Nr(s)&&Pr(a)&&a.expanded&&Fd(s,a.visibleSections,l=>{o(s[l],a.items[l],i.concat(String(l)))}),Ir(s)&&ro(a)&&a.expanded&&Object.keys(s).forEach(l=>{o(s[l],a.properties[l],i.concat(l))})})(e,t,[]),r}function bh(e,t){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return(function s(a,i){o.push({path:i,type:Mo.value});var l=Vo(e,t,i);if(a&&ss(l)&&l.expanded){if(r&&o.push({path:i,type:Mo.inside}),Nr(a)){var c=Pr(l)?l.visibleSections:pi;Fd(a,c,u=>{var d=i.concat(String(u));s(a[u],d),r&&o.push({path:d,type:Mo.after})})}Ir(a)&&Object.keys(a).forEach(u=>{var d=i.concat(u);o.push({path:d,type:Mo.key}),s(a[u],d),r&&o.push({path:d,type:Mo.after})})}})(e,[]),o}function Ou(e,t,r){var o=Vd(e,t),s=o.map(St).indexOf(St(r));if(s!==-1&&s<o.length-1)return o[s+1]}function Ns(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return No(e,t,r,Gp({json:He(e,r)},o)?ai:Gc)}function zu(e,t,r){var o=Vo(e,t,r);return ss(o)&&o.expanded?t:Ns(e,t,r)}function ai(e){return e.length===0||e.length===1&&e[0]==="0"}function zc(e){return e.length===0}function Gc(){return!0}function sl(){return!1}function oo(e){return e&&e.type===kn.after||!1}function Mr(e){return e&&e.type===kn.inside||!1}function Tr(e){return e&&e.type===kn.key||!1}function tn(e){return e&&e.type===kn.value||!1}function En(e){return e&&e.type===kn.multi||!1}function Xc(e){return En(e)&&Nt(e.focusPath,e.anchorPath)}function hl(e){return En(e)||oo(e)||Mr(e)||Tr(e)||tn(e)}function qu(e){return e&&e.type===kn.text||!1}function Ia(e,t){var r=[];return(function(o,s,a){if(s){var i=ns(s),l=Ve(s);if(Nt(i,l))return a(i);if(o!==void 0){var c=yh(i,l);if(i.length===c.length||l.length===c.length)return a(c);var u=Zr(i,l),d=Go(o,u),h=Aa(o,u),b=Pa(o,u,d),g=Pa(o,u,h);if(!(b===-1||g===-1)){var j=He(o,c);if(Ir(j)){for(var m=Object.keys(j),y=b;y<=g;y++){var x=a(c.concat(m[y]));if(x!==void 0)return x}return}if(Nr(j)){for(var k=b;k<=g;k++){var O=a(c.concat(String(k)));if(O!==void 0)return O}return}throw new Error("Failed to create selection")}}}})(e,t,o=>{r.push(o)}),r}function jh(e){return Mr(e)?e.path:Zt(Ve(e))}function Go(e,t){if(!En(t))return t.path;var r=Pa(e,t,t.anchorPath);return Pa(e,t,t.focusPath)<r?t.focusPath:t.anchorPath}function Aa(e,t){if(!En(t))return t.path;var r=Pa(e,t,t.anchorPath);return Pa(e,t,t.focusPath)>r?t.focusPath:t.anchorPath}function Hv(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(r){var s=o?Ve(r):Go(e,r),a=(function(c,u,d){var h=Vd(c,u),b=h.map(St),g=St(d),j=b.indexOf(g);if(j!==-1&&j>0)return h[j-1]})(e,t,s);if(o)return Mr(r)||oo(r)?a!==void 0?Zr(s,s):void 0:a!==void 0?Zr(ns(r),a):void 0;if(oo(r)||Mr(r))return _t(s);if(Tr(r)){if(a===void 0||a.length===0)return;var i=Zt(a),l=He(e,i);return Array.isArray(l)||on(a)?_t(a):ca(a)}return tn(r),a!==void 0?_t(a):void 0}}function Zv(e,t,r,o){if(!r)return{caret:void 0,previous:void 0,next:void 0};var s=bh(e,t,o),a=s.findIndex(i=>Nt(i.path,Ve(r))&&String(i.type)===String(r.type));return{caret:a!==-1?s[a]:void 0,previous:a!==-1&&a>0?s[a-1]:void 0,next:a!==-1&&a<s.length-1?s[a+1]:void 0}}function Hs(e,t){for(var r=Vd(e,t),o=0;o<r.length-1&&r[o+1].length>r[o].length;)o++;var s=r[o];return s===void 0||s.length===0||Array.isArray(He(e,Zt(s)))?_t(s):ca(s)}function zi(e,t){if(t.length===1){var r=Ma(t);if(r.op==="replace")return _t(Xo(e,r.path))}if(!on(t)&&t.every(i=>i.op==="move")){var o=Ma(t),s=t.slice(1);if((Du(o)||ks(o))&&o.from!==o.path&&s.every(i=>(Du(i)||ks(i))&&i.from===i.path))return ca(Xo(e,o.path))}var a=t.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>Xo(e,i.path));if(!on(a))return{type:kn.multi,anchorPath:Ma(a),focusPath:It(a)}}function yh(e,t){for(var r=0;r<e.length&&r<t.length&&e[r]===t[r];)r++;return e.slice(0,r)}function qc(e){return Tr(e)||tn(e)||Xc(e)}function Qv(e,t){return qc(t)&&Kn(He(e,Ve(t)))?Ve(t):Zt(Ve(t))}function oa(e,t){if(e.length<t.length)return!1;for(var r=0;r<t.length;r++)if(e[r]!==t[r])return!1;return!0}function Zo(e){if(Ar(e)){var{type:t,path:r}=e;return{type:t,path:r}}return e}function ca(e){return{type:kn.key,path:e}}function Kc(e,t){return{type:kn.key,path:e,edit:!0,initialValue:t}}function _t(e){return{type:kn.value,path:e}}function ml(e,t){return{type:kn.value,path:e,edit:!0,initialValue:t}}function ua(e){return{type:kn.inside,path:e}}function aa(e){return{type:kn.after,path:e}}function Zr(e,t){var r=yh(e,t),o=e.length>r.length&&t.length>r.length;return{type:kn.multi,anchorPath:o?r.concat(e[r.length]):r,focusPath:o?r.concat(t[r.length]):r}}function xh(e,t,r,o){if(Tr(t))return String(It(t.path));if(tn(t)){var s=He(e,t.path);return typeof s=="string"?s:o.stringify(s,null,r)}if(En(t)){if(on(t.focusPath))return o.stringify(e,null,r);var a=jh(t),i=He(e,a);if(Array.isArray(i)){if(Xc(t)){var l=He(e,t.focusPath);return o.stringify(l,null,r)}return Ia(e,t).map(c=>{var u=He(e,c);return"".concat(o.stringify(u,null,r),",")}).join(`
`)}return Ia(e,t).map(c=>{var u=It(c),d=He(e,c);return"".concat(o.stringify(u),": ").concat(o.stringify(d,null,r),",")}).join(`
`)}}function Ar(e){return(Tr(e)||tn(e))&&e.edit===!0}function si(e){return Tr(e)||tn(e)||En(e)}function Gl(e){return Tr(e)||tn(e)||Xc(e)}function id(e){switch(e.type){case Mo.key:return ca(e.path);case Mo.value:return _t(e.path);case Mo.after:return aa(e.path);case Mo.inside:return ua(e.path)}}function Yv(e,t){switch(e){case kn.key:return ca(t);case kn.value:return _t(t);case kn.after:return aa(t);case kn.inside:return ua(t);case kn.multi:case kn.text:return Zr(t,t)}}function Xl(e,t,r){if(t)return gl(e,t,r)||oa(En(t)?Zt(t.focusPath):t.path,r)?t:void 0}function gl(e,t,r){if(e===void 0||!t)return!1;if(Tr(t)||Mr(t)||oo(t))return Nt(t.path,r);if(tn(t))return oa(r,t.path);if(En(t)){var o=Go(e,t),s=Aa(e,t),a=Zt(t.focusPath);if(!oa(r,a)||r.length<=a.length)return!1;var i=Pa(e,t,o),l=Pa(e,t,s),c=Pa(e,t,r);return c!==-1&&c>=i&&c<=l}return!1}function Pa(e,t,r){var o=Zt(t.focusPath);if(!oa(r,o)||r.length<=o.length)return-1;var s=r[o.length],a=He(e,o);if(Ir(a))return Object.keys(a).indexOf(s);if(Nr(a)){var i=Fr(s);if(i<a.length)return i}return-1}function Ve(e){return En(e)?e.focusPath:e.path}function ns(e){return En(e)?e.anchorPath:e.path}function Jo(){for(var e=[],t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var s of r)if(typeof s=="string"&&e.push(s),s&&typeof s=="object")for(var a in s)Object.hasOwnProperty.call(s,a)&&s[a]&&e.push(a);return e.join(" ")}function bl(e,t,r){return Jo("jse-value","jse-"+Hc(e,r),{"jse-url":ql(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===jr.table})}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1r0oryi {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1r0oryi, .jse-value.jse-array.svelte-1r0oryi {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1r0oryi {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1r0oryi {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1r0oryi {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1r0oryi {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1r0oryi {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-1r0oryi {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-1r0oryi {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-1r0oryi {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-1r0oryi {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var vj=H('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function wh(e,t){Ke(t,!1);var r=Ur("jsoneditor:EditableDiv"),o=f(t,"value",9),s=f(t,"initialValue",9),a=f(t,"shortText",9,!1),i=f(t,"label",9),l=f(t,"onChange",9),c=f(t,"onCancel",9),u=f(t,"onFind",9),d=f(t,"onPaste",9,Cr),h=f(t,"onValueClass",9,()=>""),b=q(void 0,!0),g=q(void 0,!0),j=!1;function m(){return n(b)?(function(k){return k.replace(/\n$/,"")})(n(b).innerText):""}function y(k){n(b)&&mo(b,n(b).innerText=Mi(k))}Xr(()=>{r("onMount",{value:o(),initialValue:s()}),y(s()!==void 0?s():o()),n(b)&&(function(k){if(k.firstChild!=null){var O=document.createRange(),M=window.getSelection();O.setStart(k,1),O.collapse(!0),M?.removeAllRanges(),M?.addRange(O)}else k.focus()})(n(b))}),Po(()=>{var k=m();r("onDestroy",{closed:j,value:o(),newValue:k}),j||k===o()||l()(k,Ea.no)}),F(()=>(p(h()),p(o())),()=>{v(g,h()(o()))}),dn(),yt(!0);var x=vj();Fn(x,k=>v(b,k),()=>n(b)),xe(k=>{fn(x,"aria-label",i()),jt(x,1,k,"svelte-1r0oryi")},[()=>as((p(Jo),n(g),p(a()),P(()=>Jo("jse-editable-div",n(g),{"jse-short-text":a()}))))]),fe("input",x,function(){var k=m();k===""&&y(""),v(g,h()(k))}),fe("keydown",x,function(k){k.stopPropagation();var O=la(k);if(O==="Escape"&&(k.preventDefault(),j=!0,c()()),O==="Enter"||O==="Tab"){k.preventDefault(),j=!0;var M=m();l()(M,Ea.nextInside)}O==="Ctrl+F"&&(k.preventDefault(),u()(!1)),O==="Ctrl+H"&&(k.preventDefault(),u()(!0))}),fe("paste",x,function(k){if(k.stopPropagation(),d()&&k.clipboardData){var O=k.clipboardData.getData("text/plain");d()(O)}}),fe("blur",x,function(){var k=document.hasFocus(),O=m();r("handleBlur",{hasFocus:k,closed:j,value:o(),newValue:O}),document.hasFocus()&&!j&&(j=!0,O!==o()&&l()(O,Ea.self))}),z(e,x),et()}function kh(e,t){Ke(t,!1);var r=f(t,"path",9),o=f(t,"value",9),s=f(t,"selection",9),a=f(t,"mode",9),i=f(t,"parser",9),l=f(t,"normalization",9),c=f(t,"enforceString",9),u=f(t,"onPatch",9),d=f(t,"onPasteJson",9),h=f(t,"onSelect",9),b=f(t,"onFind",9),g=f(t,"focus",9),j=f(t,"findNextInside",9);function m(O){return c()?O:Ds(O,i())}function y(){h()(_t(r())),g()()}yt(!0);var x=_e(()=>(p(l()),p(o()),P(()=>l().escapeValue(o())))),k=_e(()=>(p(Ar),p(s()),P(()=>Ar(s())?s().initialValue:void 0)));wh(e,{get value(){return n(x)},get initialValue(){return n(k)},label:"Edit value",onChange:function(O,M){u()([{op:"replace",path:St(r()),value:m(l().unescapeValue(O))}],(w,N,T)=>{if(!T||Nt(r(),Ve(T)))return{state:N,selection:M===Ea.nextInside?j()(r()):_t(r())}}),g()()},onCancel:y,onPaste:function(O){try{var M=i().parse(O);Kn(M)&&d()({path:r(),contents:M,onPasteAsJson:()=>{y();var w=[{op:"replace",path:St(r()),value:M}];u()(w,(N,T)=>({state:Ns(N,T,r())}))}})}catch{}},get onFind(){return b()},onValueClass:function(O){return bl(m(l().unescapeValue(O)),a(),i())}}),et()}function ii(e,t,r){var o=Zt(t),s=He(e,o);if(Nr(s)){var a=Fr(It(t));return r.map((u,d)=>({op:"add",path:St(o.concat(String(a+d))),value:u.value}))}if(Ir(s)){var i=It(t),l=Object.keys(s),c=i!==void 0?Nl(l,i,!0):[];return[...r.map(u=>{var d=Rl(u.key,l);return{op:"add",path:St(o.concat(d)),value:u.value}}),...c.map(u=>is(o,u))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function ld(e,t,r){var o=He(e,t);if(Array.isArray(o)){var s=o.length;return r.map((a,i)=>({op:"add",path:St(t.concat(String(s+i))),value:a.value}))}return r.map(a=>{var i=Rl(a.key,Object.keys(o));return{op:"add",path:St(t.concat(i)),value:a.value}})}function Il(e,t,r,o){var s=t.filter(l=>l!==r),a=Rl(o,s),i=Nl(t,r,!1);return[{op:"move",from:St(e.concat(r)),path:St(e.concat(a))},...i.map(l=>is(e,l))]}function Sh(e,t){var r=It(t);if(on(r))throw new Error("Cannot duplicate root object");var o=Zt(r),s=It(r),a=He(e,o);if(Nr(a)){var i=It(t),l=i?Fr(It(i))+1:0;return[...t.map((d,h)=>({op:"copy",from:St(d),path:St(o.concat(String(h+l)))}))]}if(Ir(a)){var c=Object.keys(a),u=s!==void 0?Nl(c,s,!1):[];return[...t.map(d=>{var h=Rl(It(d),c);return{op:"copy",from:St(d),path:St(o.concat(h))}}),...u.map(d=>is(o,d))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function Ch(e,t){if(tn(t))return[{op:"move",from:St(t.path),path:""}];if(!En(t))throw new Error("Cannot create extract operations: parent must be an Object or Array");var r=Zt(t.focusPath),o=He(e,r);if(Nr(o)){var s=Ia(e,t).map(i=>{var l=Fr(It(i));return o[l]});return[{op:"replace",path:"",value:s}]}if(Ir(o)){var a={};return Ia(e,t).forEach(i=>{var l=String(It(i));a[l]=o[l]}),[{op:"replace",path:"",value:a}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(t))}function Mh(e,t,r,o){if(Tr(t)){var s=Hp(r,o),a=Zt(t.path),i=He(e,a);return Il(a,Object.keys(i),It(t.path),typeof s=="string"?s:r)}if(tn(t)||En(t)&&on(t.focusPath))try{return[{op:"replace",path:St(Ve(t)),value:Al(r,N=>El(N,o))}]}catch{return[{op:"replace",path:St(Ve(t)),value:r}]}if(En(t)){var l=Eu(r,o);return(function(N,T,Y){var A=Ma(T),re=Zt(A),X=He(N,re);if(Nr(X)){var _=Ma(T),ee=_?Fr(It(_)):0;return[...Ec(T),...Y.map((qe,Ye)=>({op:"add",path:St(re.concat(String(Ye+ee))),value:qe.value}))]}if(Ir(X)){var je=It(T),te=Zt(je),Ee=It(je),De=Object.keys(X),$e=Ee!==void 0?Nl(De,Ee,!1):[],pe=new Set(T.map(qe=>It(qe))),we=De.filter(qe=>!pe.has(qe));return[...Ec(T),...Y.map(qe=>{var Ye=Rl(qe.key,we);return{op:"add",path:St(te.concat(Ye)),value:qe.value}}),...$e.map(qe=>is(te,qe))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")})(e,Ia(e,t),l)}if(oo(t)){var c=Eu(r,o),u=t.path,d=Zt(u),h=He(e,d);if(Nr(h)){var b=Fr(It(u));return ii(e,d.concat(String(b+1)),c)}if(Ir(h)){var g=String(It(u)),j=Object.keys(h);if(on(j)||It(j)===g)return ld(e,d,c);var m=j.indexOf(g),y=j[m+1];return ii(e,d.concat(y),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(Mr(t)){var x=Eu(r,o),k=t.path,O=He(e,k);if(Nr(O))return ii(e,k.concat("0"),x);if(Ir(O)){var M=Object.keys(O);if(on(M))return ld(e,k,x);var w=Ma(M);return ii(e,k.concat(w),x)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function Ec(e){return e.map(t=>({op:"remove",path:St(t)})).reverse()}function is(e,t){return{op:"move",from:St(e.concat(t)),path:St(e.concat(t))}}function Eu(e,t){var r=/^\s*{/.test(e),o=/^\s*\[/.test(e),s=Hp(e,t),a=s!==void 0?s:Al(e,i=>El(i,t));return r&&Qt(a)||o&&Array.isArray(a)?[{key:"New item",value:a}]:Array.isArray(a)?a.map((i,l)=>({key:"New item "+l,value:i})):Qt(a)?Object.keys(a).map(i=>({key:i,value:a[i]})):[{key:"New item",value:a}]}function Oh(e,t){if(Tr(t)){var r=Zt(t.path),o=He(e,r),s=Il(r,Object.keys(o),It(t.path),"");return{operations:s,newSelection:zi(e,s)}}if(tn(t))return{operations:[{op:"replace",path:St(t.path),value:""}],newSelection:t};if(En(t)){var a=Ia(e,t),i=Ec(a),l=It(a);if(on(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:_t([])};var c=Zt(l),u=He(e,c);if(Nr(u)){var d=Ma(a),h=Fr(It(d));return{operations:i,newSelection:h===0?ua(c):aa(c.concat(String(h-1)))}}if(Ir(u)){var b=Object.keys(u),g=Ma(a),j=It(g),m=b.indexOf(j),y=b[m-1];return{operations:i,newSelection:m===0?ua(c):aa(c.concat(y))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function zh(e,t){var r=(function(o,s){if(on(s)||!s.every(ks))return s;var a=[];for(var i of s){var l=Gv(Oo(i.from)),c=Gv(Oo(i.path));if(!l||!c)return s;a.push({from:l,path:c,operation:i})}var u=a[0].path.parent,d=He(o,u);if(!Ir(d)||!a.every(j=>(function(m,y){return Nt(m.from.parent,y)&&Nt(m.path.parent,y)})(j,u)))return s;var h=(function(j,m){var y=Object.keys(m),x=y.slice();for(var k of j){var O=x.indexOf(k.from.key);O!==-1&&(x.splice(O,1),x.push(k.path.key))}for(var M=0;M<y.length&&y[M]===x[M];)M++;return x[M]})(a,o),b=j=>j.operation,g=a.filter(j=>j.operation.from!==j.operation.path);return g.some(j=>j.path.key===h)?g.map(b):[is(u,h),...g.map(b)]})(e,t);return Af(e,r,{before:(o,s,a)=>{if(Rf(s)){var i=Oo(s.path);return{revertOperations:[...a,...Au(o,i)]}}if(ks(s)){var l=Oo(s.from);return{revertOperations:s.from===s.path?[s,...Au(o,l)]:[...a,...Au(o,l)]}}return{document:o}}})}function Gv(e){return e.length>0?{parent:Zt(e),key:It(e)}:void 0}function Au(e,t){var r=Zt(t),o=It(t),s=He(e,r);return Ir(s)?Nl(Object.keys(s),o,!1).map(a=>is(r,a)):[]}function Xv(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,r=e.items[t],o=e.items.map((s,a)=>be(be({},s),{},{active:a===t}));return be(be({},e),{},{items:o,activeItem:r,activeIndex:t})}function Kv(e,t){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.toLowerCase(),a=(r=o?.maxResults)!==null&&r!==void 0?r:1/0,i=o?.columns,l=[],c=[];function u(y){l.length>=a||l.push(y)}function d(y,x){if(Nr(x)){var k=c.length;c.push("0");for(var O=0;O<x.length;O++)if(c[k]=String(O),d(y,x[O]),l.length>=a)return;c.pop()}else if(Ir(x)){var M=Object.keys(x),w=c.length;for(var N of(c.push(""),M))if(c[w]=N,ef(N,y,c,Eo.key,u),d(y,x[N]),l.length>=a)return;c.pop()}else ef(String(x),y,c,Eo.value,u)}if(e==="")return[];if(i){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var h=0;h<t.length;h++){c[0]=String(h);for(var b=t[h],g=0;g<i.length;g++){var j=i[g];if(j.length===1)c[1]=j[0];else for(var m=0;m<j.length;m++)c[m+1]=j[m];for(;c.length>j.length+1;)c.pop();d(s,He(b,j))}if(l.length>=a)break}return l}return d(s,t),l}function ef(e,t,r,o,s){var a=e.toLowerCase(),i=0,l=-1,c=-1;do(c=a.indexOf(t,l))!==-1&&(l=c+t.length,s({path:r.slice(0),field:o,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function cd(e,t,r,o){return e.substring(0,r)+t+e.substring(o)}function tf(e,t,r){var o=e;return eg(r,s=>{o=cd(o,t,s.start,s.end)}),o}function fj(e,t,r,o,s){var{field:a,path:i,start:l,end:c}=o;if(a===Eo.key){var u=Zt(i),d=He(e,u),h=It(i),b=Il(u,Object.keys(d),h,cd(h,r,l,c));return{newSelection:zi(e,b),operations:b}}if(a===Eo.value){var g=He(e,i);if(g===void 0)throw new Error("Cannot replace: path not found ".concat(St(i)));var j=typeof g=="string"?g:String(g),m=Yo(e,t,i),y=cd(j,r,l,c),x=[{op:"replace",path:St(i),value:m?y:Ds(y,s)}];return{newSelection:zi(e,x),operations:x}}throw new Error("Cannot replace: unknown type of search result field ".concat(a))}function nf(e){return e.path.concat(e.field,String(e.fieldIndex))}function rf(e){var t=Jd(e)?e.searchResults.filter(r=>r.field===Eo.key):void 0;return t&&t.length>0?t:void 0}function of(e){var t=Jd(e)?e.searchResults.filter(r=>r.field===Eo.value):void 0;return t&&t.length>0?t:void 0}var pj={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function qh(e,t){return t.reduce((r,o)=>(function(s,a,i,l){return Ld(s,a,i,l,pj)})(e,r,o.path,(s,a)=>be(be({},a),{},{searchResults:a.searchResults?a.searchResults.concat(o):[o]})),void 0)}function Ac(e){var t,r=(t=e?.searchResults)!==null&&t!==void 0?t:[],o=ro(e)?Object.values(e.properties).flatMap(Ac):Pr(e)?e.items.flatMap(Ac):[];return r.concat(o)}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-19qyvy6 {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-19qyvy6 {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var hj=H("<span> </span>");function Eh(e,t){Ke(t,!1);var r=q(),o=f(t,"text",8),s=f(t,"searchResultItems",8);F(()=>(p(o()),p(s())),()=>{v(r,(function(i,l){var c=[],u=0;for(var d of l){var h=i.slice(u,d.start);h!==""&&c.push({resultIndex:void 0,type:"normal",text:h,active:!1});var b=i.slice(d.start,d.end);c.push({resultIndex:d.resultIndex,type:"highlight",text:b,active:d.active}),u=d.end}var g=It(l);return g&&g.end<i.length&&c.push({type:"normal",text:i.slice(g.end),resultIndex:void 0,active:!1}),c})(String(o()),s()))}),dn(),yt();var a=Tt();or(We(a),1,()=>n(r),pr,(i,l)=>{var c=Tt(),u=We(c),d=b=>{var g=Jr();xe(()=>tt(g,(n(l),P(()=>n(l).text)))),z(b,g)},h=b=>{var g,j=hj(),m=E(j);xe((y,x)=>{g=jt(j,1,"jse-highlight svelte-19qyvy6",null,g,{"jse-active":n(l).active}),fn(j,"data-search-result-index",y),tt(m,x)},[()=>(n(l),P(()=>String(n(l).resultIndex))),()=>(p(Mi),n(l),P(()=>Mi(n(l).text)))]),z(b,j)};Q(u,b=>{n(l),P(()=>n(l).type==="normal")?b(d):b(h,!1)}),z(i,c)}),z(e,a),et()}function dc(e){var t=1e3;if(e<900)return e.toFixed()+" B";var r=e/t;if(r<900)return r.toFixed(1)+" KB";var o=r/t;if(o<900)return o.toFixed(1)+" MB";var s=o/t;return s<900?s.toFixed(1)+" GB":(s/t).toFixed(1)+" TB"}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-ubve9r {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-ubve9r:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-ubve9r {
  opacity: 0.7;
  cursor: inherit;
}`);var mj=H('<button type="button"><!></button>');function vc(e,t){Ke(t,!0);var r,o=so(()=>t.onclick?a=>{a.preventDefault(),a.stopPropagation(),t.onclick()}:void 0),s=mj();s.__click=function(){for(var a,i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];(a=n(o))===null||a===void 0||a.apply(this,l)},(function(a,i){for(var l=arguments.length,c=new Array(l>2?l-2:0),u=2;u<l;u++)c[u-2]=arguments[u];var d=new Lc(a);Ni(()=>{var h,b=(h=i())!==null&&h!==void 0?h:null;d.ensure(b,b&&(g=>b(g,...c)))},qs)})(E(s),()=>{var a;return(a=t.children)!==null&&a!==void 0?a:tb}),xe(()=>r=jt(s,1,"jse-tag svelte-ubve9r",null,r,{disabled:!t.onclick})),z(e,s),et()}zl(["click"]);ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1saqp8c {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1saqp8c, .jse-value.jse-array.svelte-1saqp8c {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1saqp8c {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1saqp8c {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1saqp8c {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1saqp8c {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1saqp8c {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-1saqp8c {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-1saqp8c {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-1saqp8c {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-1saqp8c::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var gj=H('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function Ah(e,t){Ke(t,!0);var r=ga(!0),o=so(()=>n(r)&&typeof t.value=="string"&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(g=>g.active&&g.end>t.truncateTextSize))),s=so(()=>n(o)&&typeof t.value=="string"?t.value.substring(0,t.truncateTextSize).trim():t.value),a=so(()=>ql(t.value));function i(){v(r,!1)}var l=gj();l.__click=function(g){typeof t.value=="string"&&n(a)&&$d(g)&&(g.preventDefault(),g.stopPropagation(),window.open(t.value,"_blank"))},l.__dblclick=function(g){t.readOnly||(g.preventDefault(),t.onSelect(ml(t.path)))};var c=E(l),u=g=>{var j=so(()=>t.normalization.escapeValue(n(s)));Eh(g,{get text(){return n(j)},get searchResultItems(){return t.searchResultItems}})},d=g=>{var j=Jr();xe(m=>tt(j,m),[()=>Mi(t.normalization.escapeValue(n(s)))]),z(g,j)};Q(c,g=>{t.searchResultItems?g(u):g(d,!1)});var h=D(c,2),b=g=>{vc(g,{onclick:i,children:(j,m)=>{var y=Jr();xe(x=>tt(y,"Show more (".concat(x??"",")")),[()=>dc(t.value.length)]),z(j,y)},$$slots:{default:!0}})};Q(h,g=>{n(o)&&typeof t.value=="string"&&g(b)}),xe(g=>{jt(l,1,g,"svelte-1saqp8c"),fn(l,"title",n(a)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>as(bl(t.value,t.mode,t.parser))]),z(e,l),et()}zl(["click","dblclick"]);ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-brt1mq {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var bj=H('<div class="jse-tooltip svelte-brt1mq"> </div>');function jj(e,t){var r=f(t,"text",8),o=bj(),s=E(o);xe(()=>tt(s,r())),z(e,o)}function Hd(e,t){var r,{text:o,openAbsolutePopup:s,closeAbsolutePopup:a}=t;function i(){r=s(jj,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){a(r)}return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",l)}}}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jcpman {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var yj=H('<div class="jse-timestamp svelte-1jcpman"><!></div>');function Ph(e,t){Ke(t,!1);var r=q(void 0,!0),o=ls("absolute-popup"),s=f(t,"value",9);F(()=>p(s()),()=>{v(r,"Time: ".concat(new Date(s()).toString()))}),dn(),yt(!0);var a=yj();Yt(E(a),{get data(){return Am}}),to(a,(i,l)=>Hd?.(i,l),()=>be({text:n(r)},o)),z(e,a),et()}function Rh(e){var t=[];return!e.isEditing&&_p(e.value)&&t.push({component:lh,props:e}),!e.isEditing&&Fp(e.value)&&t.push({component:ch,props:e}),e.isEditing&&t.push({component:kh,props:e}),e.isEditing||t.push({component:Ah,props:e}),!e.isEditing&&kc(e.value)&&t.push({component:Ph,props:e}),t}function ao(e){return e.map((t,r)=>eu.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+(function(o){return o.replace(/"/g,'\\"')})(t)+'"]':(r>0?".":"")+t).join("")}function Th(e){for(var t=[],r=0;r<e.length;)e[r]==="."&&r++,e[r]==="["?(r++,e[r]==='"'?(r++,t.push(o(a=>a==='"',!0)),s('"')):t.push(o(a=>a==="]")),s("]")):t.push(o(a=>a==="."||a==="["));function o(a){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";r<e.length&&!a(e[r]);)i&&e[r]==="\\"&&e[r+1]==='"'?(l+='"',r+=2):(l+=e[r],r++);return l}function s(a){if(e[r]!==a)throw new SyntaxError("Invalid JSON path: ".concat(a," expected at position ").concat(r));r++}return t}function Fa(e){return{value:e,label:on(e)?"(item root)":ao(e)}}function xj(e){if(eu.test(e))return"["+e+"]";if(Zd.test(e))return"."+e;var t=JSON.stringify(e);return"['"+t.substring(1,t.length-1).replace(/\\"/g,'"')+"']"}function Fo(e){return e.map(t=>eu.test(t)?"?.[".concat(t,"]"):Zd.test(t)?"?.".concat(t):"?.[".concat(JSON.stringify(t),"]")).join("")}var Zd=/^[a-zA-Z$_][a-zA-Z$_\d]*$/,eu=/^\d+$/,wj={},kj={showWizard:!0,showOriginal:!0},Pc=Math.min,Os=Math.max,Rc=Math.round,Kl=Math.floor,sa=e=>({x:e,y:e}),Sj={left:"right",right:"left",bottom:"top",top:"bottom"},Cj={start:"end",end:"start"};function af(e,t,r){return Os(e,Pc(t,r))}function tu(e,t){return typeof e=="function"?e(t):e}function Is(e){return e.split("-")[0]}function nu(e){return e.split("-")[1]}function Nh(e){return e==="x"?"y":"x"}function Ih(e){return e==="y"?"height":"width"}var Mj=new Set(["top","bottom"]);function Ya(e){return Mj.has(Is(e))?"y":"x"}function Uh(e){return Nh(Ya(e))}function ud(e){return e.replace(/start|end/g,t=>Cj[t])}var sf=["left","right"],lf=["right","left"],Oj=["top","bottom"],zj=["bottom","top"];function qj(e,t,r,o){var s=nu(e),a=(function(i,l,c){switch(i){case"top":case"bottom":return c?l?lf:sf:l?sf:lf;case"left":case"right":return l?Oj:zj;default:return[]}})(Is(e),r==="start",o);return s&&(a=a.map(i=>i+"-"+s),t&&(a=a.concat(a.map(ud)))),a}function ec(e){return e.replace(/left|right|bottom|top/g,t=>Sj[t])}function Ej(e){return typeof e!="number"?(function(t){return be({top:0,right:0,bottom:0,left:0},t)})(e):{top:e,right:e,bottom:e,left:e}}function Tc(e){var{x:t,y:r,width:o,height:s}=e;return{width:o,height:s,top:r,left:t,right:t+o,bottom:r+s,x:t,y:r}}function cf(e,t,r){var o,{reference:s,floating:a}=e,i=Ya(t),l=Uh(t),c=Ih(l),u=Is(t),d=i==="y",h=s.x+s.width/2-a.width/2,b=s.y+s.height/2-a.height/2,g=s[c]/2-a[c]/2;switch(u){case"top":o={x:h,y:s.y-a.height};break;case"bottom":o={x:h,y:s.y+s.height};break;case"right":o={x:s.x+s.width,y:b};break;case"left":o={x:s.x-a.width,y:b};break;default:o={x:s.x,y:s.y}}switch(nu(t)){case"start":o[l]-=g*(r&&d?-1:1);break;case"end":o[l]+=g*(r&&d?-1:1)}return o}var Aj=(function(){var e=at(function*(t,r,o){for(var{placement:s="bottom",strategy:a="absolute",middleware:i=[],platform:l}=o,c=i.filter(Boolean),u=yield l.isRTL==null?void 0:l.isRTL(r),d=yield l.getElementRects({reference:t,floating:r,strategy:a}),{x:h,y:b}=cf(d,s,u),g=s,j={},m=0,y=0;y<c.length;y++){var{name:x,fn:k}=c[y],{x:O,y:M,data:w,reset:N}=yield k({x:h,y:b,initialPlacement:s,placement:g,strategy:a,middlewareData:j,rects:d,platform:l,elements:{reference:t,floating:r}});h=O??h,b=M??b,j=be(be({},j),{},{[x]:be(be({},j[x]),w)}),N&&m<=50&&(m++,typeof N=="object"&&(N.placement&&(g=N.placement),N.rects&&(d=N.rects===!0?yield l.getElementRects({reference:t,floating:r,strategy:a}):N.rects),{x:h,y:b}=cf(d,g,u)),y=-1)}return{x:h,y:b,placement:g,strategy:a,middlewareData:j}});return function(t,r,o){return e.apply(this,arguments)}})();function $h(e,t){return dd.apply(this,arguments)}function dd(){return dd=at(function*(e,t){var r;t===void 0&&(t={});var{x:o,y:s,platform:a,rects:i,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:b=!1,padding:g=0}=tu(t,e),j=Ej(g),m=l[b?h==="floating"?"reference":"floating":h],y=Tc(yield a.getClippingRect({element:(r=yield a.isElement==null?void 0:a.isElement(m))==null||r?m:m.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),x=h==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,k=yield a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating),O=(yield a.isElement==null?void 0:a.isElement(k))&&(yield a.getScale==null?void 0:a.getScale(k))||{x:1,y:1},M=Tc(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:k,strategy:c}):x);return{top:(y.top-M.top+j.top)/O.y,bottom:(M.bottom-y.bottom+j.bottom)/O.y,left:(y.left-M.left+j.left)/O.x,right:(M.right-y.right+j.right)/O.x}}),dd.apply(this,arguments)}var Pj=new Set(["left","top"]);function vd(){return vd=at(function*(e,t){var{placement:r,platform:o,elements:s}=e,a=yield o.isRTL==null?void 0:o.isRTL(s.floating),i=Is(r),l=nu(r),c=Ya(r)==="y",u=Pj.has(i)?-1:1,d=a&&c?-1:1,h=tu(t,e),{mainAxis:b,crossAxis:g,alignmentAxis:j}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof j=="number"&&(g=l==="end"?-1*j:j),c?{x:g*d,y:b*u}:{x:b*u,y:g*d}}),vd.apply(this,arguments)}function ru(){return typeof window<"u"}function qi(e){return Dh(e)?(e.nodeName||"").toLowerCase():"#document"}function bo(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ia(e){var t;return(t=(Dh(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Dh(e){return!!ru()&&(e instanceof Node||e instanceof bo(e).Node)}function Io(e){return!!ru()&&(e instanceof Element||e instanceof bo(e).Element)}function da(e){return!!ru()&&(e instanceof HTMLElement||e instanceof bo(e).HTMLElement)}function uf(e){return!(!ru()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof bo(e).ShadowRoot)}var Rj=new Set(["inline","contents"]);function jl(e){var{overflow:t,overflowX:r,overflowY:o,display:s}=Uo(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!Rj.has(s)}var Tj=new Set(["table","td","th"]);function Nj(e){return Tj.has(qi(e))}var Ij=[":popover-open",":modal"];function Nc(e){return Ij.some(t=>{try{return e.matches(t)}catch{return!1}})}var Uj=["transform","translate","scale","rotate","perspective"],$j=["transform","translate","scale","rotate","perspective","filter"],Dj=["paint","layout","strict","content"];function fd(e){var t=Qd(),r=Io(e)?Uo(e):e;return Uj.some(o=>!!r[o]&&r[o]!=="none")||!!r.containerType&&r.containerType!=="normal"||!t&&!!r.backdropFilter&&r.backdropFilter!=="none"||!t&&!!r.filter&&r.filter!=="none"||$j.some(o=>(r.willChange||"").includes(o))||Dj.some(o=>(r.contain||"").includes(o))}function Qd(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}var Jj=new Set(["html","body","#document"]);function hi(e){return Jj.has(qi(e))}function Uo(e){return bo(e).getComputedStyle(e)}function ou(e){return Io(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ga(e){if(qi(e)==="html")return e;var t=e.assignedSlot||e.parentNode||uf(e)&&e.host||ia(e);return uf(t)?t.host:t}function Jh(e){var t=Ga(e);return hi(t)?e.ownerDocument?e.ownerDocument.body:e.body:da(t)&&jl(t)?t:Jh(t)}function yl(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);var s=Jh(e),a=s===((o=e.ownerDocument)==null?void 0:o.body),i=bo(s);if(a){var l=pd(i);return t.concat(i,i.visualViewport||[],jl(s)?s:[],l&&r?yl(l):[])}return t.concat(s,yl(s,[],r))}function pd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wh(e){var t=Uo(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,s=da(e),a=s?e.offsetWidth:r,i=s?e.offsetHeight:o,l=Rc(r)!==a||Rc(o)!==i;return l&&(r=a,o=i),{width:r,height:o,$:l}}function Yd(e){return Io(e)?e:e.contextElement}function mi(e){var t=Yd(e);if(!da(t))return sa(1);var r=t.getBoundingClientRect(),{width:o,height:s,$:a}=Wh(t),i=(a?Rc(r.width):r.width)/o,l=(a?Rc(r.height):r.height)/s;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}var Wj=sa(0);function _h(e){var t=bo(e);return Qd()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Wj}function Us(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);var s=e.getBoundingClientRect(),a=Yd(e),i=sa(1);t&&(o?Io(o)&&(i=mi(o)):i=mi(e));var l=(function(w,N,T){return N===void 0&&(N=!1),!(!T||N&&T!==bo(w))&&N})(a,r,o)?_h(a):sa(0),c=(s.left+l.x)/i.x,u=(s.top+l.y)/i.y,d=s.width/i.x,h=s.height/i.y;if(a)for(var b=bo(a),g=o&&Io(o)?bo(o):o,j=b,m=pd(j);m&&o&&g!==j;){var y=mi(m),x=m.getBoundingClientRect(),k=Uo(m),O=x.left+(m.clientLeft+parseFloat(k.paddingLeft))*y.x,M=x.top+(m.clientTop+parseFloat(k.paddingTop))*y.y;c*=y.x,u*=y.y,d*=y.x,h*=y.y,c+=O,u+=M,m=pd(j=bo(m))}return Tc({width:d,height:h,x:c,y:u})}function Ic(e,t){var r=ou(e).scrollLeft;return t?t.left+r:Us(ia(e)).left+r}function Bh(e,t){var r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-Ic(e,r),y:r.top+t.scrollTop}}var _j=new Set(["absolute","fixed"]);function df(e,t,r){var o;if(t==="viewport")o=(function(a,i){var l=bo(a),c=ia(a),u=l.visualViewport,d=c.clientWidth,h=c.clientHeight,b=0,g=0;if(u){d=u.width,h=u.height;var j=Qd();(!j||j&&i==="fixed")&&(b=u.offsetLeft,g=u.offsetTop)}var m=Ic(c);if(m<=0){var y=c.ownerDocument,x=y.body,k=getComputedStyle(x),O=y.compatMode==="CSS1Compat"&&parseFloat(k.marginLeft)+parseFloat(k.marginRight)||0,M=Math.abs(c.clientWidth-x.clientWidth-O);M<=25&&(d-=M)}else m<=25&&(d+=m);return{width:d,height:h,x:b,y:g}})(e,r);else if(t==="document")o=(function(a){var i=ia(a),l=ou(a),c=a.ownerDocument.body,u=Os(i.scrollWidth,i.clientWidth,c.scrollWidth,c.clientWidth),d=Os(i.scrollHeight,i.clientHeight,c.scrollHeight,c.clientHeight),h=-l.scrollLeft+Ic(a),b=-l.scrollTop;return Uo(c).direction==="rtl"&&(h+=Os(i.clientWidth,c.clientWidth)-u),{width:u,height:d,x:h,y:b}})(ia(e));else if(Io(t))o=(function(a,i){var l=Us(a,!0,i==="fixed"),c=l.top+a.clientTop,u=l.left+a.clientLeft,d=da(a)?mi(a):sa(1);return{width:a.clientWidth*d.x,height:a.clientHeight*d.y,x:u*d.x,y:c*d.y}})(t,r);else{var s=_h(e);o={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Tc(o)}function Fh(e,t){var r=Ga(e);return!(r===t||!Io(r)||hi(r))&&(Uo(r).position==="fixed"||Fh(r,t))}function Bj(e,t,r){var o=da(t),s=ia(t),a=r==="fixed",i=Us(e,!0,a,t),l={scrollLeft:0,scrollTop:0},c=sa(0);function u(){c.x=Ic(s)}if(o||!o&&!a)if((qi(t)!=="body"||jl(s))&&(l=ou(t)),o){var d=Us(t,!0,a,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else s&&u();a&&!o&&s&&u();var h=!s||o||a?sa(0):Bh(s,l);return{x:i.left+l.scrollLeft-c.x-h.x,y:i.top+l.scrollTop-c.y-h.y,width:i.width,height:i.height}}function Pu(e){return Uo(e).position==="static"}function vf(e,t){if(!da(e)||Uo(e).position==="fixed")return null;if(t)return t(e);var r=e.offsetParent;return ia(e)===r&&(r=r.ownerDocument.body),r}function ff(e,t){var r=bo(e);if(Nc(e))return r;if(!da(e)){for(var o=Ga(e);o&&!hi(o);){if(Io(o)&&!Pu(o))return o;o=Ga(o)}return r}for(var s=vf(e,t);s&&Nj(s)&&Pu(s);)s=vf(s,t);return s&&hi(s)&&Pu(s)&&!fd(s)?r:s||(function(a){for(var i=Ga(a);da(i)&&!hi(i);){if(fd(i))return i;if(Nc(i))return null;i=Ga(i)}return null})(e)||r}var Fj={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:r,offsetParent:o,strategy:s}=e,a=s==="fixed",i=ia(o),l=!!t&&Nc(t.floating);if(o===i||l&&a)return r;var c={scrollLeft:0,scrollTop:0},u=sa(1),d=sa(0),h=da(o);if((h||!h&&!a)&&((qi(o)!=="body"||jl(i))&&(c=ou(o)),da(o))){var b=Us(o);u=mi(o),d.x=b.x+o.clientLeft,d.y=b.y+o.clientTop}var g=!i||h||a?sa(0):Bh(i,c);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-c.scrollLeft*u.x+d.x+g.x,y:r.y*u.y-c.scrollTop*u.y+d.y+g.y}},getDocumentElement:ia,getClippingRect:function(e){var{element:t,boundary:r,rootBoundary:o,strategy:s}=e,a=r==="clippingAncestors"?Nc(t)?[]:(function(u,d){var h=d.get(u);if(h)return h;for(var b=yl(u,[],!1).filter(k=>Io(k)&&qi(k)!=="body"),g=null,j=Uo(u).position==="fixed",m=j?Ga(u):u;Io(m)&&!hi(m);){var y=Uo(m),x=fd(m);x||y.position!=="fixed"||(g=null),(j?!x&&!g:!x&&y.position==="static"&&g&&_j.has(g.position)||jl(m)&&!x&&Fh(u,m))?b=b.filter(k=>k!==m):g=y,m=Ga(m)}return d.set(u,b),b})(t,this._c):[].concat(r),i=[...a,o],l=i[0],c=i.reduce((u,d)=>{var h=df(t,d,s);return u.top=Os(h.top,u.top),u.right=Pc(h.right,u.right),u.bottom=Pc(h.bottom,u.bottom),u.left=Os(h.left,u.left),u},df(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:ff,getElementRects:(function(){var e=at(function*(t){var r=this.getOffsetParent||ff,o=this.getDimensions,s=yield o(t.floating);return{reference:Bj(t.reference,yield r(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}});return function(t){return e.apply(this,arguments)}})(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:r}=Wh(e);return{width:t,height:r}},getScale:mi,isElement:Io,isRTL:function(e){return Uo(e).direction==="rtl"}};function pf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Lj(e,t,r,o){o===void 0&&(o={});var{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=Yd(e),d=s||a?[...u?yl(u):[],...yl(t)]:[];d.forEach(y=>{s&&y.addEventListener("scroll",r,{passive:!0}),a&&y.addEventListener("resize",r)});var h,b=u&&l?(function(y,x){var k,O=null,M=ia(y);function w(){var N;clearTimeout(k),(N=O)==null||N.disconnect(),O=null}return(function N(T,Y){T===void 0&&(T=!1),Y===void 0&&(Y=1),w();var A=y.getBoundingClientRect(),{left:re,top:X,width:_,height:ee}=A;if(T||x(),_&&ee){var je={rootMargin:-Kl(X)+"px "+-Kl(M.clientWidth-(re+_))+"px "+-Kl(M.clientHeight-(X+ee))+"px "+-Kl(re)+"px",threshold:Os(0,Pc(1,Y))||1},te=!0;try{O=new IntersectionObserver(Ee,be(be({},je),{},{root:M.ownerDocument}))}catch{O=new IntersectionObserver(Ee,je)}O.observe(y)}function Ee(De){var $e=De[0].intersectionRatio;if($e!==Y){if(!te)return N();$e?N(!1,$e):k=setTimeout(()=>{N(!1,1e-7)},1e3)}$e!==1||pf(A,y.getBoundingClientRect())||N(),te=!1}})(!0),w})(u,r):null,g=-1,j=null;i&&(j=new ResizeObserver(y=>{var[x]=y;x&&x.target===u&&j&&(j.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var k;(k=j)==null||k.observe(t)})),r()}),u&&!c&&j.observe(u),j.observe(t));var m=c?Us(e):null;return c&&(function y(){var x=Us(e);m&&!pf(m,x)&&r(),m=x,h=requestAnimationFrame(y)})(),r(),()=>{var y;d.forEach(x=>{s&&x.removeEventListener("scroll",r),a&&x.removeEventListener("resize",r)}),b?.(),(y=j)==null||y.disconnect(),j=null,c&&cancelAnimationFrame(h)}}var Vj=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>at(function*(){var r,o,{x:s,y:a,placement:i,middlewareData:l}=t,c=yield(function(u,d){return vd.apply(this,arguments)})(t,e);return i===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:a+c.y,data:be(be({},c),{},{placement:i})}})()}},Hj=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>at(function*(){var{x:r,y:o,placement:s}=t,a=tu(e,t),{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:O=>{var{x:M,y:w}=O;return{x:M,y:w}}}}=a,u=Uf(a,Yg),d={x:r,y:o},h=yield $h(t,u),b=Ya(Is(s)),g=Nh(b),j=d[g],m=d[b];if(i){var y=g==="y"?"bottom":"right";j=af(j+h[g==="y"?"top":"left"],j,j-h[y])}if(l){var x=b==="y"?"bottom":"right";m=af(m+h[b==="y"?"top":"left"],m,m-h[x])}var k=c.fn(be(be({},t),{},{[g]:j,[b]:m}));return be(be({},k),{},{data:{x:k.x-r,y:k.y-o,enabled:{[g]:i,[b]:l}}})})()}},Zj=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>at(function*(){var r,o,{placement:s,middlewareData:a,rects:i,initialPlacement:l,platform:c,elements:u}=t,d=tu(e,t),{mainAxis:h=!0,crossAxis:b=!0,fallbackPlacements:g,fallbackStrategy:j="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:y=!0}=d,x=Uf(d,Qg);if((r=a.arrow)!=null&&r.alignmentOffset)return{};var k=Is(s),O=Ya(l),M=Is(l)===l,w=yield c.isRTL==null?void 0:c.isRTL(u.floating),N=g||(M||!y?[ec(l)]:(function(we){var qe=ec(we);return[ud(we),qe,ud(qe)]})(l)),T=m!=="none";!g&&T&&N.push(...qj(l,y,m,w));var Y=[l,...N],A=yield $h(t,x),re=[],X=((o=a.flip)==null?void 0:o.overflows)||[];if(h&&re.push(A[k]),b){var _=(function(we,qe,Ye){Ye===void 0&&(Ye=!1);var he=nu(we),ie=Uh(we),me=Ih(ie),xt=ie==="x"?he===(Ye?"end":"start")?"right":"left":he==="start"?"bottom":"top";return qe.reference[me]>qe.floating[me]&&(xt=ec(xt)),[xt,ec(xt)]})(s,i,w);re.push(A[_[0]],A[_[1]])}if(X=[...X,{placement:s,overflows:re}],!re.every(we=>we<=0)){var ee,je,te=(((ee=a.flip)==null?void 0:ee.index)||0)+1,Ee=Y[te];if(Ee&&(!(b==="alignment"&&O!==Ya(Ee))||X.every(we=>Ya(we.placement)!==O||we.overflows[0]>0)))return{data:{index:te,overflows:X},reset:{placement:Ee}};var De=(je=X.filter(we=>we.overflows[0]<=0).sort((we,qe)=>we.overflows[1]-qe.overflows[1])[0])==null?void 0:je.placement;if(!De)switch(j){case"bestFit":var $e,pe=($e=X.filter(we=>{if(T){var qe=Ya(we.placement);return qe===O||qe==="y"}return!0}).map(we=>[we.placement,we.overflows.filter(qe=>qe>0).reduce((qe,Ye)=>qe+Ye,0)]).sort((we,qe)=>we[1]-qe[1])[0])==null?void 0:$e[0];pe&&(De=pe);break;case"initialPlacement":De=l}if(s!==De)return{reset:{placement:De}}}return{}})()}};function Qj(e){var t,r,o={autoUpdate:!0},s=e,a=c=>be(be(be({},o),e||{}),c||{}),i=c=>{t&&r&&(s=a(c),((u,d,h)=>{var b=new Map,g=be({platform:Fj},h),j=be(be({},g.platform),{},{_c:b});return Aj(u,d,be(be({},g),{},{platform:j}))})(t,r,s).then(u=>{var d;Object.assign(r.style,{position:u.strategy,left:"".concat(u.x,"px"),top:"".concat(u.y,"px")}),!((d=s)===null||d===void 0)&&d.onComputed&&s.onComputed(u)}))},l=c=>{Po(c.subscribe(u=>{t===void 0?(t=u,i()):(Object.assign(t,u),i())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,i()},(c,u)=>{var d;r=c,s=a(u),setTimeout(()=>i(u),0),i(u);var h=()=>{d&&(d(),d=void 0)},b=function(){var{autoUpdate:g}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s||{};h(),g!==!1&&Op().then(()=>Lj(t,r,()=>i(s),g===!0?{}:g))};return d=b(),{update(g){i(g),d=b(g)},destroy(){h()}}},i]}function Yj(e){var{loadOptions:t,filterText:r,items:o,multiple:s,value:a,itemId:i,groupBy:l,filterSelectedItems:c,itemFilter:u,convertStringItemsToObjects:d,filterGroupedItems:h,label:b}=e;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=d(o));var g=o.filter(j=>{var m=u(j[b],r,j);return m&&s&&a!=null&&a.length&&(m=!a.some(y=>!!c&&y[i]===j[i])),m});return l&&(g=h(g)),g}function Gj(e){return Lh.apply(this,arguments)}function Lh(){return(Lh=at(function*(e){var{dispatch:t,loadOptions:r,convertStringItemsToObjects:o,filterText:s}=e,a=yield r(s).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),t("error",{type:"loadOptions",details:i})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!="object"&&(a=o(a)),t("loaded",{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}ft(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var Xj=cs(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);ft(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var Kj=cs(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function Ru(e){z(e,Kj())}ft(`
    .loading.svelte-y9fi5p {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-y9fi5p-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-y9fi5p {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-y9fi5p-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var e0=cs('<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');ft(`
    .svelte-select.svelte-1ul7oo4 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-1ul7oo4 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-1ul7oo4:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-1ul7oo4 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-1ul7oo4,
    .indicators.svelte-1ul7oo4 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-1ul7oo4 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-1ul7oo4 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-1ul7oo4:not(.multi) > .value-container:where(.svelte-1ul7oo4) > input:where(.svelte-1ul7oo4) {
        width: 100%;
        height: 100%;
    }

    input.svelte-1ul7oo4::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-1ul7oo4:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-1ul7oo4 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-1ul7oo4 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-1ul7oo4 input:where(.svelte-1ul7oo4)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-1ul7oo4 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-1ul7oo4 .selected-item:where(.svelte-1ul7oo4) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-1ul7oo4:focus {
        outline: none;
    }

    .hide-selected-item.svelte-1ul7oo4 {
        opacity: 0;
    }

    .icon.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-1ul7oo4 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-1ul7oo4:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-1ul7oo4 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-1ul7oo4 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-1ul7oo4 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-1ul7oo4 input:where(.svelte-1ul7oo4) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-1ul7oo4 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-1ul7oo4 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-1ul7oo4 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-1ul7oo4:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-1ul7oo4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-1ul7oo4 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-1ul7oo4 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-1ul7oo4 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-1ul7oo4 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-1ul7oo4 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-1ul7oo4 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-1ul7oo4 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-1ul7oo4:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-1ul7oo4 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-1ul7oo4 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-1ul7oo4:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-1ul7oo4,
    .item.hover.item.not-selectable.svelte-1ul7oo4,
    .item.active.item.not-selectable.svelte-1ul7oo4,
    .item.not-selectable.svelte-1ul7oo4:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-1ul7oo4 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var t0=H('<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>'),n0=H('<div class="empty svelte-1ul7oo4">No options</div>'),r0=H('<div role="none"><!> <!> <!></div>'),o0=H('<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>',1),a0=H('<div class="multi-item-clear svelte-1ul7oo4"><!></div>'),s0=H('<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>'),i0=H("<div><!></div>"),l0=H('<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>'),c0=H('<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>'),u0=H('<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>'),d0=H('<input type="hidden" class="svelte-1ul7oo4"/>'),v0=H('<select class="required svelte-1ul7oo4" required tabindex="-1" aria-hidden="true"></select>'),f0=H('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>');function xs(e,t){var r=(function(R){var V={};for(var ce in R.children&&(V.default=!0),R.$$slots)V[ce]=!0;return V})(t);Ke(t,!1);var o,s=q(),a=q(),i=q(),l=q(),c=q(),u=q(),d=q(),h=q(),b=q(),g=kb(),j=f(t,"justValue",12,null),m=f(t,"filter",8,Yj),y=f(t,"getItems",8,Gj),x=f(t,"id",8,null),k=f(t,"name",8,null),O=f(t,"container",12,void 0),M=f(t,"input",12,void 0),w=f(t,"multiple",8,!1),N=f(t,"multiFullItemClearable",8,!1),T=f(t,"disabled",8,!1),Y=f(t,"focused",12,!1),A=f(t,"value",12,null),re=f(t,"filterText",12,""),X=f(t,"placeholder",8,"Please select"),_=f(t,"placeholderAlwaysShow",8,!1),ee=f(t,"items",12,null),je=f(t,"label",8,"label"),te=f(t,"itemFilter",8,(R,V,ce)=>"".concat(R).toLowerCase().includes(V.toLowerCase())),Ee=f(t,"groupBy",8,void 0),De=f(t,"groupFilter",8,R=>R),$e=f(t,"groupHeaderSelectable",8,!1),pe=f(t,"itemId",8,"value"),we=f(t,"loadOptions",8,void 0),qe=f(t,"containerStyles",8,""),Ye=f(t,"hasError",8,!1),he=f(t,"filterSelectedItems",8,!0),ie=f(t,"required",8,!1),me=f(t,"closeListOnChange",8,!0),xt=f(t,"clearFilterTextOnBlur",8,!0),an=f(t,"createGroupHeaderItem",8,(R,V)=>({value:R,[je()]:R})),le=()=>n(d),W=f(t,"searchable",8,!0),ue=f(t,"inputStyles",8,""),I=f(t,"clearable",8,!0),se=f(t,"loading",12,!1),L=f(t,"listOpen",12,!1),Ce=f(t,"debounce",8,function(R){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(R,V)}),Z=f(t,"debounceWait",8,300),U=f(t,"hideEmptyState",8,!1),pt=f(t,"inputAttributes",24,()=>({})),st=f(t,"listAutoWidth",8,!0),Xe=f(t,"showChevron",8,!1),Ct=f(t,"listOffset",8,5),Te=f(t,"hoverItemIndex",12,0),Ie=f(t,"floatingConfig",24,()=>({})),it=f(t,"class",8,""),Pe=q(),Et=q(),Ut=q(),ke=q(),Ue=q();function Ae(R){return R.map((V,ce)=>({index:ce,value:V,label:"".concat(V)}))}function ht(R){var V=[],ce={};R.forEach(Fe=>{var Qe=Ee()(Fe);V.includes(Qe)||(V.push(Qe),ce[Qe]=[],Qe&&ce[Qe].push(Object.assign(an()(Qe,Fe),{id:Qe,groupHeader:!0,selectable:$e()}))),ce[Qe].push(Object.assign({groupItem:!!Qe},Fe))});var Me=[];return De()(V).forEach(Fe=>{ce[Fe]&&Me.push(...ce[Fe])}),Me}function Jt(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,V=arguments.length>1?arguments[1]:void 0;Te(R<0?0:R),!V&&Ee()&&n(d)[Te()]&&!n(d)[Te()].selectable&&Dt(1)}function nt(){var R=!0;if(A()){var V=[],ce=[];A().forEach(Me=>{V.includes(Me[pe()])?R=!1:(V.push(Me[pe()]),ce.push(Me))}),R||A(ce)}return R}function K(R){var V=R?R[pe()]:A()[pe()];return ee().find(ce=>ce[pe()]===V)}function G(R){return wt.apply(this,arguments)}function wt(){return(wt=at(function*(R){var V=A()[R];A().length===1?A(void 0):A(A().filter(ce=>ce!==V)),g("clear",V)})).apply(this,arguments)}function kt(R){if(Y())switch(R.stopPropagation(),R.key){case"Escape":R.preventDefault(),$t();break;case"Enter":if(R.preventDefault(),L()){if(n(d).length===0)break;var V=n(d)[Te()];if(A()&&!w()&&A()[pe()]===V[pe()]){$t();break}Le(n(d)[Te()])}break;case"ArrowDown":R.preventDefault(),L()?Dt(1):(L(!0),v(Pe,void 0));break;case"ArrowUp":R.preventDefault(),L()?Dt(-1):(L(!0),v(Pe,void 0));break;case"Tab":if(L()&&Y()){if(n(d).length===0||A()&&A()[pe()]===n(d)[Te()][pe()])return $t();R.preventDefault(),Le(n(d)[Te()]),$t()}break;case"Backspace":if(!w()||re().length>0)return;if(w()&&A()&&A().length>0){if(G(n(Pe)!==void 0?n(Pe):A().length-1),n(Pe)===0||n(Pe)===void 0)break;v(Pe,A().length>n(Pe)?n(Pe)-1:void 0)}break;case"ArrowLeft":if(!A()||!w()||re().length>0)return;n(Pe)===void 0?v(Pe,A().length-1):A().length>n(Pe)&&n(Pe)!==0&&v(Pe,n(Pe)-1);break;case"ArrowRight":if(!A()||!w()||re().length>0||n(Pe)===void 0)return;n(Pe)===A().length-1?v(Pe,void 0):n(Pe)<A().length-1&&v(Pe,n(Pe)+1)}}function jn(R){var V,ce;Y()&&M()===((V=document)===null||V===void 0?void 0:V.activeElement)||(R&&g("focus",R),(ce=M())===null||ce===void 0||ce.focus(),Y(!0))}function Ze(R){return At.apply(this,arguments)}function At(){return(At=at(function*(R){var V;zt||(L()||Y())&&(g("blur",R),$t(),Y(!1),v(Pe,void 0),(V=M())===null||V===void 0||V.blur())})).apply(this,arguments)}function In(){if(!T())return re().length>0?L(!0):void L(!L())}function Un(){g("clear",A()),A(void 0),$t(),jn()}function $t(){xt()&&re(""),L(!1)}Sb(at(function*(){v(Et,A()),v(Ut,re()),v(ke,w())})),Xr(()=>{L()&&Y(!0),Y()&&M()&&M().focus()});var Cn=f(t,"ariaValues",8,R=>"Option ".concat(R,", selected.")),$n=f(t,"ariaListOpen",8,(R,V)=>"You are currently focused on option ".concat(R,". There are ").concat(V," results available.")),nn=f(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),pn,lt=q(null);function yn(){clearTimeout(pn),pn=setTimeout(()=>{zt=!1},100)}Po(()=>{var R;(R=n(lt))===null||R===void 0||R.remove()});var zt=!1;function Le(R){R&&R.selectable!==!1&&(function(V){if(V){re("");var ce=Object.assign({},V);if(ce.groupHeader&&!ce.selectable)return;A(w()?A()?A().concat([ce]):[ce]:A(ce)),setTimeout(()=>{me()&&$t(),v(Pe,void 0),g("change",A()),g("select",V)})}})(R)}function sn(R){zt||Te(R)}function Dt(R){if(n(d).filter(ce=>!Object.hasOwn(ce,"selectable")||ce.selectable===!0).length===0)return Te(0);R>0&&Te()===n(d).length-1?Te(0):R<0&&Te()===0?Te(n(d).length-1):Te(Te()+R);var V=n(d)[Te()];V&&V.selectable===!1&&(R!==1&&R!==-1||Dt(R))}function Ln(R,V,ce){if(!w())return V&&V[ce]===R[ce]}var Vn=ar,Wn=ar;function ar(R){return{update(V){V.scroll&&(yn(),R.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var Hn=q({strategy:"absolute",placement:"bottom-start",middleware:[Vj(Ct()),Zj(),Hj()],autoUpdate:!1}),[sr,hr,Yn]=Qj(n(Hn)),yr=q(!0);F(()=>(p(ee()),p(A())),()=>{ee(),A()&&(function(){if(typeof A()=="string"){var R=(ee()||[]).find(V=>V[pe()]===A());A(R||{[pe()]:A(),label:A()})}else w()&&Array.isArray(A())&&A().length>0&&A(A().map(V=>typeof V=="string"?{value:V,label:V}:V))})()}),F(()=>(p(pt()),p(W())),()=>{!pt()&&W()||(v(Ue,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},pt())),x()&&mo(Ue,n(Ue).id=x()),W()||mo(Ue,n(Ue).readonly=!0))}),F(()=>p(w()),()=>{w()&&A()&&(Array.isArray(A())?A([...A()]):A([A()]))}),F(()=>(n(ke),p(w())),()=>{n(ke)&&!w()&&A()&&A(null)}),F(()=>(p(w()),p(A())),()=>{w()&&A()&&A().length>1&&nt()}),F(()=>p(A()),()=>{A()&&(w()?JSON.stringify(A())!==JSON.stringify(n(Et))&&nt()&&g("input",A()):n(Et)&&JSON.stringify(A()[pe()])===JSON.stringify(n(Et)[pe()])||g("input",A()))}),F(()=>(p(A()),p(w()),n(Et)),()=>{!A()&&w()&&n(Et)&&g("input",A())}),F(()=>(p(Y()),p(M())),()=>{!Y()&&M()&&$t()}),F(()=>(p(re()),n(Ut)),()=>{re()!==n(Ut)&&(we()||re().length!==0)&&(we()?Ce()(at(function*(){se(!0);var R=yield y()({dispatch:g,loadOptions:we(),convertStringItemsToObjects:Ae,filterText:re()});R?(se(R.loading),L(L()?R.listOpen:re().length>0),Y(L()&&R.focused),ee(Ee()?ht(R.filteredItems):R.filteredItems)):(se(!1),Y(!0),L(!0))}),Z()):(L(!0),w()&&v(Pe,void 0)))}),F(()=>(p(m()),p(we()),p(re()),p(ee()),p(w()),p(A()),p(pe()),p(Ee()),p(je()),p(he()),p(te())),()=>{v(d,m()({loadOptions:we(),filterText:re(),items:ee(),multiple:w(),value:A(),itemId:pe(),groupBy:Ee(),label:je(),filterSelectedItems:he(),itemFilter:te(),convertStringItemsToObjects:Ae,filterGroupedItems:ht}))}),F(()=>(p(w()),p(L()),p(A()),n(d)),()=>{!w()&&L()&&A()&&n(d)&&Jt(n(d).findIndex(R=>R[pe()]===A()[pe()]),!0)}),F(()=>(p(L()),p(w())),()=>{L()&&w()&&Te(0)}),F(()=>p(re()),()=>{re()&&Te(0)}),F(()=>p(Te()),()=>{var R;R=Te(),g("hoverItem",R)}),F(()=>(p(w()),p(A())),()=>{v(s,w()?A()&&A().length>0:A())}),F(()=>(n(s),p(re())),()=>{v(a,n(s)&&re().length>0)}),F(()=>(n(s),p(I()),p(T()),p(se())),()=>{v(i,n(s)&&I()&&!T()&&!se())}),F(()=>(p(_()),p(w()),p(X()),p(A())),()=>{var R;v(l,_()&&w()||w()&&((R=A())===null||R===void 0?void 0:R.length)===0?X():A()?"":X())}),F(()=>(p(A()),p(w())),()=>{var R,V;v(c,A()?(R=w(),V=void 0,V=R&&A().length>0?A().map(ce=>ce[je()]).join(", "):A()[je()],Cn()(V)):"")}),F(()=>(n(d),p(Te()),p(Y()),p(L())),()=>{v(u,(function(){if(!n(d)||n(d).length===0)return"";var R=n(d)[Te()];if(L()&&R){var V=n(d)?n(d).length:0;return $n()(R[je()],V)}return nn()()})((n(d),Te(),Y(),L())))}),F(()=>p(ee()),()=>{(function(R){R&&R.length!==0&&!R.some(V=>typeof V!="object")&&A()&&(w()?!A().some(V=>!V||!V[pe()]):A()[pe()])&&(Array.isArray(A())?A(A().map(V=>K(V)||V)):A(K()||A()))})(ee())}),F(()=>(p(w()),p(A()),p(pe())),()=>{j((w(),A(),pe(),w()?A()?A().map(R=>R[pe()]):null:A()?A()[pe()]:A()))}),F(()=>(p(w()),n(Et),p(A())),()=>{w()||!n(Et)||A()||g("input",A())}),F(()=>(p(L()),n(d),p(w()),p(A())),()=>{L()&&n(d)&&!w()&&!A()&&Jt()}),F(()=>n(d),()=>{(function(R){L()&&g("filter",R)})(n(d))}),F(()=>(p(O()),p(Ie()),n(Hn)),()=>{O()&&Ie()&&Yn(Object.assign(n(Hn),Ie()))}),F(()=>n(lt),()=>{v(h,!!n(lt))}),F(()=>(n(lt),p(L())),()=>{(function(R,V){if(!R||!V)return v(yr,!0);setTimeout(()=>{v(yr,!1)},0)})(n(lt),L())}),F(()=>(p(L()),p(O()),n(lt)),()=>{L()&&O()&&n(lt)&&(function(){var{width:R}=O().getBoundingClientRect();mo(lt,n(lt).style.width=st()?R+"px":"auto")})()}),F(()=>p(Te()),()=>{v(b,Te())}),F(()=>(p(M()),p(L()),p(Y())),()=>{M()&&L()&&!Y()&&jn()}),F(()=>(p(O()),p(Ie())),()=>{var R;O()&&((R=Ie())===null||R===void 0?void 0:R.autoUpdate)===void 0&&mo(Hn,n(Hn).autoUpdate=!0)}),dn();var ur={getFilteredItems:le,handleClear:Un};yt();var mr,Gn=f0();fe("click",za,function(R){var V;L()||Y()||!O()||O().contains(R.target)||(V=n(lt))!==null&&V!==void 0&&V.contains(R.target)||Ze()}),fe("keydown",za,kt);var de=E(Gn),Pt=R=>{var V,ce=r0(),Me=E(ce),Fe=Ot=>{var Lt=Tt();cr(We(Lt),t,"list-prepend",{},null),z(Ot,Lt)};Q(Me,Ot=>{P(()=>r["list-prepend"])&&Ot(Fe)});var Qe=D(Me,2),rt=Ot=>{var Lt=Tt();cr(We(Lt),t,"list",{get filteredItems(){return n(d)}},null),z(Ot,Lt)},Rn=Ot=>{var Lt=Tt(),zr=We(Lt),ut=Xt=>{var ln=Tt();or(We(ln),1,()=>n(d),pr,(_n,xn,dt)=>{var xr,vr=t0(),qr=E(vr);cr(E(qr),t,"item",{get item(){return n(xn)},index:dt},hn=>{var On=Jr();xe(()=>tt(On,(n(xn),p(je()),P(()=>{var br;return(br=n(xn))===null||br===void 0?void 0:br[je()]})))),z(hn,On)}),to(qr,(hn,On)=>Vn?.(hn),()=>({scroll:Ln(n(xn),A(),pe()),listDom:n(h)})),to(qr,(hn,On)=>Wn?.(hn),()=>({scroll:n(b)===dt,listDom:n(h)})),xe(hn=>xr=jt(qr,1,"item svelte-1ul7oo4",null,xr,hn),[()=>{var hn,On;return{"list-group-title":n(xn).groupHeader,active:Ln(n(xn),A(),pe()),first:(On=dt,On===0),hover:Te()===dt,"group-item":n(xn).groupItem,"not-selectable":((hn=n(xn))===null||hn===void 0?void 0:hn.selectable)===!1}}]),fe("mouseover",vr,()=>sn(dt)),fe("focus",vr,()=>sn(dt)),fe("click",vr,ya(()=>(function(hn){var{item:On,i:br}=hn;if(On?.selectable!==!1)return A()&&!w()&&A()[pe()]===On[pe()]?$t():void((function(S){return S.groupHeader&&S.selectable||S.selectable||!S.hasOwnProperty("selectable")})(On)&&(Te(br),Le(On)))})({item:n(xn),i:dt}))),fe("keydown",vr,Ja(ya(function(hn){el.call(this,t,hn)}))),z(_n,vr)}),z(Xt,ln)},un=Xt=>{var ln=Tt(),_n=We(ln),xn=dt=>{var xr=Tt();cr(We(xr),t,"empty",{},vr=>{z(vr,n0())}),z(dt,xr)};Q(_n,dt=>{U()||dt(xn)},!0),z(Xt,ln)};Q(zr,Xt=>{n(d),P(()=>n(d).length>0)?Xt(ut):Xt(un,!1)},!0),z(Ot,Lt)};Q(Qe,Ot=>{P(()=>r.list)?Ot(rt):Ot(Rn,!1)});var Ft=D(Qe,2),Gt=Ot=>{var Lt=Tt();cr(We(Lt),t,"list-append",{},null),z(Ot,Lt)};Q(Ft,Ot=>{P(()=>r["list-append"])&&Ot(Gt)}),to(ce,Ot=>hr?.(Ot)),Fn(ce,Ot=>v(lt,Ot),()=>n(lt)),Dr(()=>fe("scroll",ce,yn)),Dr(()=>fe("pointerup",ce,Ja(ya(function(Ot){el.call(this,t,Ot)})))),Dr(()=>fe("mousedown",ce,Ja(ya(function(Ot){el.call(this,t,Ot)})))),xe(()=>V=jt(ce,1,"svelte-select-list svelte-1ul7oo4",null,V,{prefloat:n(yr)})),z(R,ce)};Q(de,R=>{L()&&R(Pt)});var vn=D(de,2),An=E(vn),ir=R=>{var V=o0(),ce=We(V),Me=E(ce),Fe=E(D(ce,2));xe(()=>{tt(Me,n(c)),tt(Fe,n(u))}),z(R,V)};Q(An,R=>{Y()&&R(ir)});var Or=D(vn,2);cr(E(Or),t,"prepend",{},null);var Wt=D(Or,2),gr=E(Wt),Wr=R=>{var V=Tt(),ce=We(V),Me=Qe=>{var rt=Tt();or(We(rt),1,A,pr,(Rn,Ft,Gt)=>{var Ot,Lt=s0(),zr=E(Lt);cr(E(zr),t,"selection",{get selection(){return n(Ft)},index:Gt},Xt=>{var ln=Jr();xe(()=>tt(ln,(n(Ft),p(je()),P(()=>n(Ft)[je()])))),z(Xt,ln)});var ut=D(zr,2),un=Xt=>{var ln=a0();cr(E(ln),t,"multi-clear-icon",{},_n=>{Ru(_n)}),fe("pointerup",ln,Ja(ya(()=>G(Gt)))),z(Xt,ln)};Q(ut,Xt=>{T()||N()||!Ru||Xt(un)}),xe(()=>Ot=jt(Lt,1,"multi-item svelte-1ul7oo4",null,Ot,{active:n(Pe)===Gt,disabled:T()})),fe("click",Lt,Ja(()=>N()?G(Gt):{})),fe("keydown",Lt,Ja(ya(function(Xt){el.call(this,t,Xt)}))),z(Rn,Lt)}),z(Qe,rt)},Fe=Qe=>{var rt,Rn=i0();cr(E(Rn),t,"selection",{get selection(){return A()}},Ft=>{var Gt=Jr();xe(()=>tt(Gt,(p(A()),p(je()),P(()=>A()[je()])))),z(Ft,Gt)}),xe(()=>rt=jt(Rn,1,"selected-item svelte-1ul7oo4",null,rt,{"hide-selected-item":n(a)})),z(Qe,Rn)};Q(ce,Qe=>{w()?Qe(Me):Qe(Fe,!1)}),z(R,V)};Q(gr,R=>{n(s)&&R(Wr)});var Xn=D(gr,2);cc(Xn,()=>be(be({readOnly:!W()},n(Ue)),{},{placeholder:n(l),style:ue(),disabled:T()}),void 0,void 0,void 0,"svelte-1ul7oo4",!0),Fn(Xn,R=>M(R),()=>M());var $r=D(Wt,2),Pn=E($r),Bt=R=>{var V=l0();cr(E(V),t,"loading-icon",{},ce=>{(function(Me){z(Me,e0())})(ce)}),z(R,V)};Q(Pn,R=>{se()&&R(Bt)});var Mt=D(Pn,2),Mn=R=>{var V=c0();cr(E(V),t,"clear-icon",{},ce=>{Ru(ce)}),fe("click",V,Un),z(R,V)};Q(Mt,R=>{n(i)&&R(Mn)});var dr=D(Mt,2),er=R=>{var V=u0();cr(E(V),t,"chevron-icon",{get listOpen(){return L()}},ce=>{(function(Me){z(Me,Xj())})(ce)}),z(R,V)};Q(dr,R=>{Xe()&&R(er)});var J=D($r,2);cr(J,t,"input-hidden",{get value(){return A()}},R=>{var V=d0();xe(ce=>{fn(V,"name",k()),Ts(V,ce)},[()=>(p(A()),P(()=>A()?JSON.stringify(A()):null))]),z(R,V)});var ne=D(J,2),ye=R=>{var V=Tt();cr(We(V),t,"required",{get value(){return A()}},ce=>{z(ce,v0())}),z(R,V)};return Q(ne,R=>{p(ie()),p(A()),P(()=>ie()&&(!A()||A().length===0))&&R(ye)}),Dr(()=>fe("pointerup",Gn,Ja(In))),Fn(Gn,R=>O(R),()=>O()),to(Gn,R=>sr?.(R)),xe(()=>{var R;mr=jt(Gn,1,"svelte-select ".concat((R=it())!==null&&R!==void 0?R:""),"svelte-1ul7oo4",mr,{multi:w(),disabled:T(),focused:Y(),"list-open":L(),"show-chevron":Xe(),error:Ye()}),qo(Gn,qe())}),fe("keydown",Xn,kt),fe("blur",Xn,Ze),fe("focus",Xn,jn),wc(Xn,re),z(e,Gn),ct(t,"getFilteredItems",le),ct(t,"handleClear",Un),et(ur)}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-9wqi8y {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-9wqi8y input:where(.svelte-9wqi8y) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) th:where(.svelte-9wqi8y) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var p0=H('<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>');function h0(e,t){var r,o,s,a,i;Ke(t,!1);var l=q(void 0,!0),c=q(void 0,!0),u=q(void 0,!0),d=q(void 0,!0),h=q(void 0,!0),b=q(void 0,!0),g=Ur("jsoneditor:TransformWizard"),j=f(t,"json",9),m=f(t,"queryOptions",29,()=>({})),y=f(t,"onChange",9),x=["==","!=","<","<=",">",">="].map(he=>({value:he,label:he})),k=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],O=q((r=m())!==null&&r!==void 0&&(r=r.filter)!==null&&r!==void 0&&r.path?Fa(m().filter.path):void 0,!0),M=q((o=x.find(he=>{var ie;return he.value===((ie=m().filter)===null||ie===void 0?void 0:ie.relation)}))!==null&&o!==void 0?o:x[0],!0),w=q(((s=m())===null||s===void 0||(s=s.filter)===null||s===void 0?void 0:s.value)||"",!0),N=q((a=m())!==null&&a!==void 0&&(a=a.sort)!==null&&a!==void 0&&a.path?Fa(m().sort.path):void 0,!0),T=q((i=k.find(he=>{var ie;return he.value===((ie=m().sort)===null||ie===void 0?void 0:ie.direction)}))!==null&&i!==void 0?i:k[0],!0);F(()=>p(j()),()=>{v(l,Array.isArray(j()))}),F(()=>(n(l),p(j())),()=>{v(c,n(l)?Qu(j()):[])}),F(()=>(n(l),p(j())),()=>{v(u,n(l)?Qu(j(),!0):[])}),F(()=>(n(c),Fa),()=>{v(d,n(c).map(Fa))}),F(()=>(n(u),Fa),()=>{v(h,n(u)?n(u).map(Fa):[])}),F(()=>(p(m()),n(h),Nt),()=>{var he;v(b,(he=m())!==null&&he!==void 0&&(he=he.projection)!==null&&he!==void 0&&he.paths&&n(h)?m().projection.paths.map(ie=>n(h).find(me=>Nt(me.value,ie))).filter(ie=>!!ie):void 0)}),F(()=>n(O),()=>{var he,ie,me;ie=(he=n(O))===null||he===void 0?void 0:he.value,Nt((me=m())===null||me===void 0||(me=me.filter)===null||me===void 0?void 0:me.path,ie)||(g("changeFilterPath",ie),m(ja(m(),["filter","path"],ie,!0)),y()(m()))}),F(()=>n(M),()=>{var he,ie,me;ie=(he=n(M))===null||he===void 0?void 0:he.value,Nt((me=m())===null||me===void 0||(me=me.filter)===null||me===void 0?void 0:me.relation,ie)||(g("changeFilterRelation",ie),m(ja(m(),["filter","relation"],ie,!0)),y()(m()))}),F(()=>n(w),()=>{var he,ie;he=n(w),Nt((ie=m())===null||ie===void 0||(ie=ie.filter)===null||ie===void 0?void 0:ie.value,he)||(g("changeFilterValue",he),m(ja(m(),["filter","value"],he,!0)),y()(m()))}),F(()=>n(N),()=>{var he,ie,me;ie=(he=n(N))===null||he===void 0?void 0:he.value,Nt((me=m())===null||me===void 0||(me=me.sort)===null||me===void 0?void 0:me.path,ie)||(g("changeSortPath",ie),m(ja(m(),["sort","path"],ie,!0)),y()(m()))}),F(()=>n(T),()=>{var he,ie,me;ie=(he=n(T))===null||he===void 0?void 0:he.value,Nt((me=m())===null||me===void 0||(me=me.sort)===null||me===void 0?void 0:me.direction,ie)||(g("changeSortDirection",ie),m(ja(m(),["sort","direction"],ie,!0)),y()(m()))}),F(()=>n(b),()=>{(function(he){var ie;Nt((ie=m())===null||ie===void 0||(ie=ie.projection)===null||ie===void 0?void 0:ie.paths,he)||(g("changeProjectionPaths",he),m(ja(m(),["projection","paths"],he,!0)),y()(m()))})(n(b)?n(b).map(he=>he.value):void 0)}),dn(),yt(!0);var Y=p0(),A=E(Y),re=E(A),X=D(E(re)),_=E(X),ee=E(_);xs(ee,{class:"jse-filter-path",showChevron:!0,get items(){return n(d)},get value(){return n(O)},set value(he){v(O,he)},$$legacy:!0});var je=D(ee,2);xs(je,{class:"jse-filter-relation",showChevron:!0,clearable:!1,get items(){return x},get value(){return n(M)},set value(he){v(M,he)},$$legacy:!0});var te=D(je,2),Ee=D(re),De=D(E(Ee)),$e=E(De),pe=E($e);xs(pe,{class:"jse-sort-path",showChevron:!0,get items(){return n(d)},get value(){return n(N)},set value(he){v(N,he)},$$legacy:!0}),xs(D(pe,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,get items(){return k},get value(){return n(T)},set value(he){v(T,he)},$$legacy:!0});var we=D(Ee),qe=D(E(we)),Ye=E(qe);xs(E(Ye),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(h)},get value(){return n(b)},set value(he){v(b,he)},$$legacy:!0}),wc(te,()=>n(w),he=>v(w,he)),z(e,Y),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-jrd4q2 {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var m0=H('<button type="button"><!> </button>'),g0=H('<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>');function b0(e,t){Ke(t,!1);var r=f(t,"queryLanguages",8),o=f(t,"queryLanguageId",12),s=f(t,"onChangeQueryLanguage",8);yt();var a=g0();or(E(a),5,r,pr,(i,l)=>{var c,u=m0(),d=E(u),h=j=>{Yt(j,{get data(){return kf}})},b=j=>{Yt(j,{get data(){return Sf}})};Q(d,j=>{n(l),p(o()),P(()=>n(l).id===o())?j(h):j(b,!1)});var g=D(d);xe(()=>{var j;c=jt(u,1,"jse-query-language svelte-jrd4q2",null,c,{selected:n(l).id===o()}),fn(u,"title",(n(l),P(()=>"Select ".concat(n(l).name," as query language")))),tt(g," ".concat((n(l),(j=P(()=>n(l).name))!==null&&j!==void 0?j:"")))}),fe("click",u,()=>{return j=n(l).id,o(j),void s()(j);var j}),z(i,u)}),z(e,a),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1k211ye {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1k211ye .jse-title:where(.svelte-1k211ye) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var j0=H('<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>'),y0=H('<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>');function Uc(e,t){Ke(t,!1);var r=f(t,"title",9,"Modal"),o=f(t,"fullScreenButton",9,!1),s=f(t,"fullscreen",13,!1),a=f(t,"onClose",9,void 0);yt(!0);var i=y0(),l=E(i),c=E(l),u=D(l,2);cr(u,t,"actions",{},null);var d=D(u,2),h=g=>{var j=j0(),m=E(j),y=_e(()=>s()?Im:Um);Yt(m,{get data(){return n(y)}}),fe("click",j,()=>s(!s())),z(g,j)};Q(d,g=>{o()&&g(h)});var b=D(d,2);Yt(E(b),{get data(){return Dc}}),xe(()=>tt(c,r())),fe("click",b,()=>{var g;return(g=a())===null||g===void 0?void 0:g()}),z(e,i),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-5gkegr {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-5gkegr:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-5gkegr {
  display: none;
}`);var x0=H('<button slot="actions" type="button" title="Select a query language"><!></button>'),Tu=Ur("jsoneditor:AutoScrollHandler");function hf(e){var t,r;function o(l){return l<20?200:l<50?400:1200}function s(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function a(l){r&&l===t||(i(),Tu("startAutoScroll",l),t=l,r=setInterval(s,50))}function i(){r&&(Tu("stopAutoScroll"),clearInterval(r),r=void 0,t=void 0)}return Tu("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:u,bottom:d}=e.getBoundingClientRect();c<u?a(-o(u-c)):c>d?a(o(c-d)):i()}},onDragEnd:function(){i()}}}var w0=(e,t,r,o)=>(e/=o/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t,Vh=()=>{var e,t,r,o,s,a,i,l,c,u,d,h,b;function g(y){return y.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+r}function j(y){e.scrollTo?e.scrollTo(e.scrollLeft,y):e.scrollTop=y}function m(y){u||(u=y),j(a(d=y-u,r,l,c)),b=!0,d<c?requestAnimationFrame(m):(function(){j(r+l),t&&i&&(t.setAttribute("tabindex","-1"),t.focus()),typeof h=="function"&&h(),u=0,b=!1})()}return function(y){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,s=x.offset||0,h=x.callback,a=x.easing||w0,i=x.a11y||!1,typeof x.container){case"object":e=x.container;break;case"string":e=document.querySelector(x.container);break;default:e=window.document.documentElement}switch(r=e.scrollTop,typeof y){case"number":t=void 0,i=!1,o=r+y;break;case"object":o=g(t=y);break;case"string":t=document.querySelector(y),o=g(t)}switch(l=o-r+s,typeof x.duration){case"number":c=x.duration;break;case"function":c=x.duration(l)}b?u=0:requestAnimationFrame(m)}};function li(e,t){var r=Date.now(),o=e();return t(Date.now()-r),o}var Ks=Ur("validation"),k0={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function mf(e,t,r,o){return Ld(e,t,r,o,k0)}function Hh(e,t,r,o){if(Ks("validateJSON"),!t)return[];if(r!==o){var s=r.stringify(e);return t(s!==void 0?o.parse(s):void 0)}return t(e)}function S0(e,t,r,o){if(Ks("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:yo.info}]};if(e.length!==0)try{var s=li(()=>r.parse(e),c=>Ks("validate: parsed json in ".concat(c," ms")));if(!t)return;var a=r===o?s:li(()=>o.parse(e),c=>Ks("validate: parsed json with the validationParser in ".concat(c," ms"))),i=li(()=>t(a),c=>Ks("validate: validated json in ".concat(c," ms")));return on(i)?void 0:{validationErrors:i}}catch(c){var l=li(()=>(function(u,d){if(u.length>lj)return!1;try{return d.parse(Ko(u)),!0}catch{return!1}})(e,r),u=>Ks("validate: checked whether repairable in ".concat(u," ms")));return{parseError:ki(e,c.message||c.toString()),isRepairable:l}}}var tc=Ur("jsoneditor:FocusTracker");function Gd(e){var t,{onMount:r,onDestroy:o,getWindow:s,hasFocus:a,onFocus:i,onBlur:l}=e,c=!1;function u(){var h=a();h&&(clearTimeout(t),c||(tc("focus"),i(),c=h))}function d(){c&&(clearTimeout(t),t=setTimeout(()=>{a()||(tc("blur"),c=!1,l())}))}r(()=>{tc("mount FocusTracker");var h=s();h&&(h.addEventListener("focusin",u,!0),h.addEventListener("focusout",d,!0))}),o(()=>{tc("destroy FocusTracker");var h=s();h&&(h.removeEventListener("focusin",u,!0),h.removeEventListener("focusout",d,!0))})}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-cbvd26 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-cbvd26 {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-text:where(.svelte-cbvd26) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26) {
  cursor: pointer;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-cbvd26 {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-cbvd26 {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-cbvd26 {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var C0=H('<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>'),M0=H('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>');function jo(e,t){Ke(t,!1);var r=f(t,"type",9,"success"),o=f(t,"icon",9,void 0),s=f(t,"message",9,void 0),a=f(t,"actions",25,()=>[]),i=f(t,"onClick",9,void 0),l=f(t,"onClose",9,void 0);l()&&Po(l()),yt(!0);var c,u=M0(),d=E(u),h=E(d),b=E(h),g=m=>{Yt(m,{get data(){return o()}})};Q(b,m=>{o()&&m(g)});var j=D(b);or(D(d,2),5,a,pr,(m,y)=>{var x=C0(),k=E(x),O=w=>{Yt(w,{get data(){return n(y),P(()=>n(y).icon)}})};Q(k,w=>{n(y),P(()=>n(y).icon)&&w(O)});var M=D(k);xe(()=>{var w;fn(x,"title",(n(y),P(()=>n(y).title))),x.disabled=(n(y),P(()=>n(y).disabled)),tt(M," ".concat((n(y),(w=P(()=>n(y).text))!==null&&w!==void 0?w:"")))}),fe("click",x,()=>{n(y).onClick&&n(y).onClick()}),fe("mousedown",x,()=>{n(y).onMouseDown&&n(y).onMouseDown()}),z(m,x)}),xe(()=>{var m,y;jt(u,1,"jse-message jse-".concat((m=r())!==null&&m!==void 0?m:""),"svelte-cbvd26"),c=jt(d,1,"jse-text svelte-cbvd26",null,c,{"jse-clickable":!!i()}),tt(j," ".concat((y=s())!==null&&y!==void 0?y:""))}),fe("click",d,function(){i()&&i()()}),z(e,u),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1342rh4 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-error:where(.svelte-1342rh4) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-info:where(.svelte-1342rh4) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-icon:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) div.jse-validation-errors-expand:where(.svelte-1342rh4) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var O0=H('<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>'),z0=H('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>'),q0=H('<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>'),E0=H('<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>'),A0=H('<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>'),P0=H('<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>');function Xd(e,t){Ke(t,!1);var r=q(void 0,!0),o=f(t,"validationErrors",9),s=f(t,"selectError",9),a=q(!0,!0);function i(){v(a,!1)}function l(){v(a,!0)}F(()=>p(o()),()=>{v(r,o().length)}),dn(),yt(!0);var c=Tt(),u=We(c),d=h=>{var b=P0(),g=E(b),j=y=>{var x=E0(),k=E(x),O=E(k);or(O,1,()=>(p(Sc),p(o()),p(Ql),P(()=>Sc(o(),Ql))),pr,(N,T,Y)=>{var A=z0(),re=E(A);Yt(E(re),{get data(){return zs}});var X=D(re),_=E(X),ee=D(X),je=E(ee),te=E(D(ee)),Ee=De=>{var $e=O0();Yt(E($e),{get data(){return Gm}}),fe("click",$e,ya(i)),z(De,$e)};Q(te,De=>{p(o()),P(()=>Y===0&&o().length>1)&&De(Ee)}),xe(De=>{var $e;jt(A,1,"jse-validation-".concat((n(T),($e=P(()=>n(T).severity))!==null&&$e!==void 0?$e:"")),"svelte-1342rh4"),tt(_,De),tt(je,(n(T),P(()=>n(T).message)))},[()=>(p(ao),n(T),P(()=>ao(n(T).path)))]),fe("click",A,()=>{setTimeout(()=>s()(n(T)))}),z(N,A)});var M=D(O),w=N=>{var T=q0(),Y=D(E(T),2),A=E(Y);xe(()=>tt(A,"(and ".concat(n(r)-Ql," more errors)"))),z(N,T)};Q(M,N=>{n(r)>Ql&&N(w)}),z(y,x)},m=y=>{var x=A0(),k=E(x),O=E(k),M=E(O);Yt(E(M),{get data(){return zs}});var w=E(D(M));Yt(E(D(w)),{get data(){return Tf}}),xe(N=>{var T;jt(O,1,"jse-validation-".concat(N??""),"svelte-1342rh4"),tt(w,"".concat((T=n(r))!==null&&T!==void 0?T:""," validation errors "))},[()=>(p(o()),P(()=>{return N=o(),[yo.error,yo.warning,yo.info].find(T=>N.some(Y=>Y.severity===T));var N}))]),fe("click",O,l),z(y,x)};Q(g,y=>{n(a)||n(r)===1?y(j):y(m,!1)}),z(h,b)};Q(u,h=>{p(on),p(o()),P(()=>!on(o()))&&h(d)}),z(e,c),et()}function Kd(e,t){if(e)return e.addEventListener("keydown",r),{destroy(){e.removeEventListener("keydown",r)}};function r(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-2aoco4 {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-2aoco4 {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-2aoco4 {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-2aoco4 {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-2aoco4 {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-2aoco4 {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-2aoco4::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-2aoco4 {
  animation: svelte-2aoco4-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-2aoco4::backdrop {
  animation: svelte-2aoco4-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-2aoco4 .jse-modal-inner:where(.svelte-2aoco4) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-2aoco4-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-2aoco4-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-2aoco4 .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var R0=H('<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>');function xl(e,t){Ke(t,!1);var r=f(t,"className",8,void 0),o=f(t,"fullscreen",8,!1),s=f(t,"onClose",8),a=q();function i(){s()()}Xr(()=>n(a).showModal()),Po(()=>n(a).close()),yt();var l,c=R0(),u=E(c);cr(E(u),t,"default",{},null),Fn(c,d=>v(a,d),()=>n(a)),Dr(()=>fe("close",c,i)),Dr(()=>{return fe("pointerdown",c,(d=i,function(){for(var h=arguments.length,b=new Array(h),g=0;g<h;g++)b[g]=arguments[g];b[0].target===this&&d?.apply(this,b)}));var d}),Dr(()=>fe("cancel",c,Ja(function(d){el.call(this,t,d)}))),to(c,(d,h)=>Kd?.(d,h),()=>i),xe(d=>l=jt(c,1,d,"svelte-2aoco4",l,{"jse-fullscreen":o()}),[()=>as((p(Jo),p(r()),P(()=>Jo("jse-modal",r()))))]),z(e,c),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-10a6ob6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-10a6ob6 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-10a6ob6 .jse-shortcut:where(.svelte-10a6ob6) .jse-key:where(.svelte-10a6ob6) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var T0=H('<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>',1);function Zh(e,t){Ke(t,!1);var r=f(t,"onClose",9),o=Ud()?"⌘":"Ctrl";yt(!0),xl(e,{get onClose(){return r()},className:"jse-copy-paste",children:(s,a)=>{var i=T0(),l=We(i);Uc(l,{title:"Copying and pasting",get onClose(){return r()}});var c=D(l,2),u=D(E(c),2),d=E(u),h=E(d),b=E(h),g=D(d,2),j=E(g),m=E(j),y=E(D(g,2)),x=E(y),k=E(D(u,2));xe(()=>{tt(b,"".concat(o,"+C")),tt(m,"".concat(o,"+X")),tt(x,"".concat(o,"+V"))}),fe("click",k,function(){for(var O,M=arguments.length,w=new Array(M),N=0;N<M;N++)w[N]=arguments[N];(O=r())===null||O===void 0||O.apply(this,w)}),z(s,i)},$$slots:{default:!0}}),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-3erbu0 {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-first:where(.svelte-3erbu0) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-last:where(.svelte-3erbu0) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-selected:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-3erbu0 .jse-space:where(.svelte-3erbu0) {
  flex: 1;
}
.jse-menu.svelte-3erbu0 .jse-separator:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var N0=H('<div class="jse-separator svelte-3erbu0"></div>'),I0=H('<div class="jse-space svelte-3erbu0"></div>'),U0=H('<button type="button"><!> <!></button>'),$0=H('<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>');function au(e,t){Ke(t,!1);var r=f(t,"items",25,()=>[]);yt(!0);var o=$0(),s=E(o);cr(s,t,"left",{},null);var a=D(s,2);or(a,1,r,pr,(i,l)=>{var c=Tt(),u=We(c),d=b=>{z(b,N0())},h=b=>{var g=Tt(),j=We(g),m=x=>{z(x,I0())},y=x=>{var k=Tt(),O=We(k),M=N=>{var T=U0(),Y=E(T),A=_=>{Yt(_,{get data(){return n(l),P(()=>n(l).icon)}})};Q(Y,_=>{n(l),P(()=>n(l).icon)&&_(A)});var re=D(Y,2),X=_=>{var ee=Jr();xe(()=>tt(ee,(n(l),P(()=>n(l).text)))),z(_,ee)};Q(re,_=>{n(l),P(()=>n(l).text)&&_(X)}),xe(()=>{var _;jt(T,1,"jse-button ".concat((n(l),(_=P(()=>n(l).className))!==null&&_!==void 0?_:"")),"svelte-3erbu0"),fn(T,"title",(n(l),P(()=>n(l).title))),T.disabled=(n(l),P(()=>n(l).disabled||!1))}),fe("click",T,function(){for(var _,ee=arguments.length,je=new Array(ee),te=0;te<ee;te++)je[te]=arguments[te];(_=n(l).onClick)===null||_===void 0||_.apply(this,je)}),z(N,T)},w=N=>{var T=Jr();xe(Y=>tt(T,Y),[()=>(n(l),P(()=>(function(Y){return console.error("Unknown type of menu item",Y),"???"})(n(l))))]),z(N,T)};Q(O,N=>{p(Lo),n(l),P(()=>Lo(n(l)))?N(M):N(w,!1)},!0),z(x,k)};Q(j,x=>{p(Oc),n(l),P(()=>Oc(n(l)))?x(m):x(y,!1)},!0),z(b,g)};Q(u,b=>{p(xa),n(l),P(()=>xa(n(l)))?b(d):b(h,!1)}),z(i,c)}),cr(D(a,2),t,"right",{},null),z(e,o),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-16jv58j {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-16jv58j .jse-info:where(.svelte-16jv58j) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-16jv58j .jse-json-text:where(.svelte-16jv58j) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var D0=H('<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>'),J0=H('<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function W0(e,t){Ke(t,!1);var r=q(void 0,!0),o=q(void 0,!0),s=q(void 0,!0),a=q(void 0,!0),i=q(void 0,!0),l=q(void 0,!0),c=f(t,"text",13,""),u=f(t,"readOnly",9,!1),d=f(t,"onParse",9),h=f(t,"onRepair",9),b=f(t,"onChange",9,void 0),g=f(t,"onApply",9),j=f(t,"onCancel",9),m=Ur("jsoneditor:JSONRepair"),y=q(void 0,!0);function x(){if(n(y)&&n(r)){var X=n(r).position!==void 0?n(r).position:0;n(y).setSelectionRange(X,X),n(y).focus()}}function k(){g()(c())}function O(){try{c(h()(c())),b()&&b()(c())}catch{}}var M=q(void 0,!0);F(()=>p(c()),()=>{v(r,(function(X){try{return void d()(X)}catch(_){return ki(X,_.message)}})(c()))}),F(()=>p(c()),()=>{v(o,(function(X){try{return h()(X),!0}catch{return!1}})(c()))}),F(()=>n(r),()=>{m("error",n(r))}),F(()=>p(j()),()=>{v(M,[{type:"space"},{type:"button",icon:Dc,title:"Cancel repair",className:"jse-cancel",onClick:j()}])}),F(()=>sv,()=>{v(s,{icon:sv,text:"Show me",title:"Scroll to the error location",onClick:x})}),F(()=>rs,()=>{v(a,{icon:rs,text:"Auto repair",title:"Automatically repair JSON",onClick:O})}),F(()=>(n(o),n(s),n(a)),()=>{v(i,n(o)?[n(s),n(a)]:[n(s)])}),F(()=>p(u()),()=>{v(l,[{icon:Cd,text:"Apply",title:"Apply fixed JSON",disabled:u(),onClick:k}])}),dn(),yt(!0);var w=J0(),N=E(w);au(N,{get items(){return n(M)},$$slots:{left:(X,_)=>{z(X,D0())}}});var T=D(N,2),Y=X=>{var _=_e(()=>(n(r),P(()=>"Cannot parse JSON: ".concat(n(r).message))));jo(X,{type:"error",get icon(){return zs},get message(){return n(_)},get actions(){return n(i)}})},A=X=>{jo(X,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})};Q(T,X=>{n(r)?X(Y):X(A,!1)});var re=D(T,2);Fn(re,X=>v(y,X),()=>n(y)),xe(()=>{re.readOnly=u(),Ts(re,c())}),fe("input",re,function(X){m("handleChange");var _=X.target.value;c()!==_&&(c(_),b()&&b()(c()))}),z(e,w),et()}function Qh(e,t){Ke(t,!1);var r=f(t,"text",13),o=f(t,"onParse",9),s=f(t,"onRepair",9),a=f(t,"onApply",9),i=f(t,"onClose",9);function l(u){a()(u),i()()}function c(){i()()}yt(!0),xl(e,{get onClose(){return i()},className:"jse-repair-modal",children:(u,d)=>{W0(u,{get onParse(){return o()},get onRepair(){return s()},onApply:l,onCancel:c,get text(){return r()},set text(h){r(h)},$$legacy:!0})},$$slots:{default:!0}}),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1v6dhm4 {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1v6dhm4 {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4),
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4) {
  display: inline;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):hover, div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var _0=H('<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>'),B0=H('<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>');function F0(e,t){Ke(t,!1);var r=q(void 0,!0),o=q(void 0,!0),s=q(void 0,!0),a=q(void 0,!0),i=q(void 0,!0),l=f(t,"visibleSections",9),c=f(t,"sectionIndex",9),u=f(t,"total",9),d=f(t,"path",9),h=f(t,"selection",9),b=f(t,"onExpandSection",9),g=f(t,"context",9);F(()=>(p(l()),p(c())),()=>{v(r,l()[c()])}),F(()=>n(r),()=>{v(o,n(r).end)}),F(()=>(p(l()),p(c()),p(u())),()=>{v(s,l()[c()+1]?l()[c()+1].start:u())}),F(()=>(p(g()),p(h()),p(d()),n(o)),()=>{v(a,gl(g().getJson(),h(),d().concat(String(n(o)))))}),F(()=>(n(o),n(s)),()=>{v(i,(function(M,w){var N={start:M,end:Math.min(Ku(M),w)},T=Math.max(Mc((M+w)/2),M),Y={start:T,end:Math.min(Ku(T),w)},A=Mc(w),re=A===w?A-dl:A,X={start:Math.max(re,M),end:w},_=[N],ee=Y.start>=N.end&&Y.end<=X.start;return ee&&_.push(Y),X.start>=(ee?Y.end:N.end)&&_.push(X),_})(n(o),n(s)))}),dn(),yt(!0);var j,m,y=B0(),x=E(y),k=E(x),O=E(k);or(D(k,2),1,()=>n(i),pr,(M,w)=>{var N=_0(),T=E(N);xe(()=>{var Y,A;return tt(T,"show ".concat((n(w),(Y=P(()=>n(w).start))!==null&&Y!==void 0?Y:""),"-").concat((n(w),(A=P(()=>n(w).end))!==null&&A!==void 0?A:"")))}),fe("click",N,()=>b()(d(),n(w))),z(M,N)}),xe(()=>{var M,w;j=jt(y,1,"jse-collapsed-items svelte-1v6dhm4",null,j,{"jse-selected":n(a)}),m=qo(y,"",m,{"--level":(p(d()),P(()=>d().length+2))}),tt(O,"Items ".concat((M=n(o))!==null&&M!==void 0?M:"","-").concat((w=n(s))!==null&&w!==void 0?w:""))}),fe("mousemove",y,function(M){M.stopPropagation()}),z(e,y),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-10ijtzr {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-10ijtzr {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-10ijtzr {
  right: -1px;
}
.jse-context-menu-pointer.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var L0=H('<button type="button"><!></button>');function Wa(e,t){Ke(t,!1);var r=f(t,"root",9,!1),o=f(t,"insert",9,!1),s=f(t,"selected",9),a=f(t,"onContextMenu",9);yt(!0);var i,l=L0();Yt(E(l),{get data(){return Ra}}),xe(()=>{i=jt(l,1,"jse-context-menu-pointer svelte-10ijtzr",null,i,{"jse-root":r(),"jse-insert":o(),"jse-selected":s()}),fn(l,"title",Dd)}),fe("click",l,function(c){for(var u=c.target;u&&u.nodeName!=="BUTTON";)u=u.parentNode;u&&a()({anchor:u,left:0,top:0,width:Ca,height:Sa,offsetTop:2,offsetLeft:0,showTip:!0})}),z(e,l),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-1n4cez4 {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-1n4cez4 {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-1n4cez4::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var V0=H('<div role="none" data-type="selectable-key"><!></div>'),H0=H("<!> <!>",1),Z0=H('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function Yh(e,t){Ke(t,!0);var r=so(()=>tn(t.selection)&&Ar(t.selection)),o=so(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:n(r),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),s=Tt();or(We(s),17,()=>n(o),pr,(a,i)=>{var l=Tt(),c=We(l),u=h=>{var b=so(()=>n(i).action),g=Z0();to(g,(j,m)=>{var y;return(y=n(b))===null||y===void 0?void 0:y(j,m)},()=>n(i).props),z(h,g)},d=h=>{var b=so(()=>n(i).component),g=Tt();Ip(We(g),()=>n(b),(j,m)=>{m(j,ts(()=>n(i).props))}),z(h,g)};Q(c,h=>{ph(n(i))?h(u):h(d,!1)}),z(a,l)}),z(e,s),et()}var Q0={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function Nu(e){var{json:t,selection:r,deltaY:o,items:s}=e;if(!r)return{operations:void 0,updatedSelection:void 0,offset:0};var a=o<0?(function(d){for(var{json:h,items:b,selection:g,deltaY:j}=d,m=Go(h,g),y=b.findIndex(N=>Nt(N.path,m)),x=()=>{var N;return(N=b[k-1])===null||N===void 0?void 0:N.height},k=y,O=0;x()!==void 0&&Math.abs(j)>O+x()/2;)O+=x(),k-=1;var M=b[k].path,w=k-y;return k!==y&&b[k]!==void 0?{beforePath:M,offset:w}:void 0})({json:t,selection:r,deltaY:o,items:s}):(function(d){for(var h,{json:b,items:g,selection:j,deltaY:m}=d,y=Aa(b,j),x=g.findIndex(re=>Nt(re.path,y)),k=0,O=x,M=()=>{var re;return(re=g[O+1])===null||re===void 0?void 0:re.height};M()!==void 0&&Math.abs(m)>k+M()/2;)k+=M(),O+=1;var w=Zt(y),N=He(b,w),T=Array.isArray(N)?O:O+1,Y=(h=g[T])===null||h===void 0?void 0:h.path,A=O-x;return Y?{beforePath:Y,offset:A}:{append:!0,offset:A}})({json:t,selection:r,deltaY:o,items:s});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=(function(d,h,b){if(!h)return[];var g="beforePath"in b?b.beforePath:void 0,j="append"in b?b.append:void 0,m=Zt(Ve(h)),y=He(d,m);if(!(j||g&&oa(g,m)&&g.length>m.length))return[];var x=Go(d,h),k=Aa(d,h),O=It(x),M=It(k),w=g?g[m.length]:void 0;if(!Ir(y)){if(Nr(y)){var N=Fr(O),T=Fr(M),Y=w!==void 0?Fr(w):y.length;return Km(T-N+1,Y<N?ee=>({op:"move",from:St(m.concat(String(N+ee))),path:St(m.concat(String(Y+ee)))}):()=>({op:"move",from:St(m.concat(String(N))),path:St(m.concat(String(Y)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var A=Object.keys(y),re=A.indexOf(O),X=A.indexOf(M),_=j?A.length:w!==void 0?A.indexOf(w):-1;return re!==-1&&X!==-1&&_!==-1?_>re?[...A.slice(re,X+1),...A.slice(_,A.length)].map(ee=>is(m,ee)):[...A.slice(_,re),...A.slice(X+1,A.length)].map(ee=>is(m,ee)):[]})(t,r,a),l=Zt(Go(t,r)),c=He(t,l);if(Array.isArray(c)){var u=(function(d){var h,b,{items:g,json:j,selection:m,offset:y}=d,x=Go(j,m),k=Aa(j,m),O=g.findIndex(T=>Nt(T.path,x)),M=g.findIndex(T=>Nt(T.path,k)),w=(h=g[O+y])===null||h===void 0?void 0:h.path,N=(b=g[M+y])===null||b===void 0?void 0:b.path;return Zr(w,N)})({items:s,json:t,selection:r,offset:a.offset});return{operations:i,updatedSelection:u,offset:a.offset}}return{operations:i,updatedSelection:void 0,offset:a.offset}}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var Y0=H('<button type="button"><!></button>');function gi(e,t){Ke(t,!1);var r=q(),o=ls("absolute-popup"),s=f(t,"validationError",8),a=f(t,"onExpand",8);F(()=>p(s()),()=>{v(r,fh(s())&&s().isChildError?"Contains invalid data":s().message)}),dn(),yt();var i=Y0();Yt(E(i),{get data(){return zs}}),Dr(()=>fe("click",i,function(){for(var l,c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];(l=a())===null||l===void 0||l.apply(this,u)})),to(i,(l,c)=>Hd?.(l,c),()=>be({text:n(r)},o)),xe(()=>{var l;return jt(i,1,"jse-validation-".concat((p(s()),(l=P(()=>s().severity))!==null&&l!==void 0?l:"")),"svelte-q6a061")}),z(e,i),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-1qi6rc1 {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-1qi6rc1:hover {
  opacity: 0.8;
}

.jse-meta.svelte-1qi6rc1,
.jse-separator.svelte-1qi6rc1,
.jse-index.svelte-1qi6rc1,
.jse-bracket.svelte-1qi6rc1 {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-1qi6rc1 {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-1qi6rc1 {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-1qi6rc1 {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-1qi6rc1 {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-1qi6rc1 {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-1qi6rc1 {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-1qi6rc1 > .jse-contents-outer:where(.svelte-1qi6rc1) > .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: 0;
}
.jse-json-node.svelte-1qi6rc1 .jse-props:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-items:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header-outer:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) .jse-meta:where(.svelte-1qi6rc1) > .jse-meta-inner:where(.svelte-1qi6rc1) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) .jse-value-outer:where(.svelte-1qi6rc1) {
  display: inline-flex;
}
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area:where(.svelte-1qi6rc1) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-inside:where(.svelte-1qi6rc1) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-after:where(.svelte-1qi6rc1) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-1qi6rc1 .jse-context-menu-pointer-anchor:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area:where(.svelte-1qi6rc1) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-hovered:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer.jse-selected-key:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-1qi6rc1 {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-selected:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var Qn=Vc(()=>Q0),G0=H('<div class="jse-separator svelte-1qi6rc1">:</div>'),X0=H('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;',1),K0=H('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>',1),ey=H('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),ty=H('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),ny=H('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),ry=H('<div data-type="insert-selection-area-inside"><!></div>'),oy=H('<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>'),ay=H("<!> <!>",1),sy=H('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),iy=H('<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>',1),ly=H('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),cy=H('<div class="jse-separator svelte-1qi6rc1">:</div>'),uy=H('<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>'),dy=H('<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>',1),vy=H('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),fy=H('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),py=H('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),hy=H('<div data-type="insert-selection-area-inside"><!></div>'),my=H('<div slot="identifier"><!></div>'),gy=H('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),by=H('<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>',1),jy=H('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>',1),yy=H('<div class="jse-separator svelte-1qi6rc1">:</div>'),xy=H('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),wy=H('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),ky=H('<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>'),Sy=H('<div data-type="insert-selection-area-after"><!></div>'),Cy=H('<div role="treeitem" tabindex="-1"><!> <!></div>');function hd(e,t){Ke(t,!1);var r=q(void 0,!0),o=q(void 0,!0),s=f(t,"pointer",9),a=f(t,"value",9),i=f(t,"state",9),l=f(t,"validationErrors",9),c=f(t,"searchResults",9),u=f(t,"selection",9),d=f(t,"context",9),h=f(t,"onDragSelectionStart",9),b=Ur("jsoneditor:JSONNode"),g=q(void 0,!0),j=void 0,m=q(void 0,!0),y=q(void 0,!0),x=q(void 0,!0),k=q(void 0,!0),O=q(void 0,!0),M=q(void 0,!0),w=q(void 0,!0);function N(le){le.stopPropagation();var W=$d(le);d().onExpand(n(y),!n(x),W)}function T(){d().onExpand(n(y),!0)}function Y(le,W){var ue=Il(n(y),Object.keys(a()),le,W);return d().onPatch(ue),It(Oo(ue[0].path))}function A(le){d().onDrag(le)}function re(le){Qn().selecting&&(Qn(Qn().selecting=!1),le.stopPropagation()),d().onDragEnd(),document.removeEventListener("mousemove",A,!0),document.removeEventListener("mouseup",re)}function X(){var le;return((le=d().findElement([]))===null||le===void 0||(le=le.getBoundingClientRect())===null||le===void 0?void 0:le.top)||0}function _(le,W){var ue=X()-le.initialContentTop;return W.clientY-le.initialClientY-ue}function ee(le){if(!d().readOnly&&u()){var W=Zt(Ve(u()));if(Nt(n(y),W)){var ue=(function(Z,U){var pt=[];function st(ke){var Ue=n(y).concat(ke),Ae=d().findElement(Ue);Ae!==void 0&&pt.push({path:Ue,height:Ae.clientHeight})}if(Array.isArray(a())){var Xe=d().getJson();if(Xe===void 0)return;var Ct=Go(Xe,Z),Te=Aa(Xe,Z),Ie=parseInt(It(Ct),10),it=parseInt(It(Te),10),Pe=U.find(ke=>Ie>=ke.start&&it<=ke.end);if(!Pe)return;var{start:Et,end:Ut}=Pe;Vp(Et,Math.min(a().length,Ut),ke=>st(String(ke)))}else Object.keys(a()).forEach(st);return pt})(u(),n(O)||pi);if(b("dragSelectionStart",{selection:u(),items:ue}),ue){var I=d().getJson();if(I!==void 0){var se=Go(I,u()),L=ue.findIndex(Z=>Nt(Z.path,se)),{offset:Ce}=Nu({json:I,selection:d().getSelection(),deltaY:0,items:ue});v(m,{initialTarget:le.target,initialClientY:le.clientY,initialContentTop:X(),selectionStartIndex:L,selectionItemsCount:Ia(I,u()).length,items:ue,offset:Ce,didMoveItems:!1}),Qn(Qn().dragging=!0),document.addEventListener("mousemove",je,!0),document.addEventListener("mouseup",te)}}else b("Cannot drag the current selection (probably spread over multiple sections)")}else h()(le)}}function je(le){if(n(m)){var W=d().getJson();if(W===void 0)return;var ue=_(n(m),le),{offset:I}=Nu({json:W,selection:d().getSelection(),deltaY:ue,items:n(m).items});I!==n(m).offset&&(b("drag selection",I,ue),v(m,be(be({},n(m)),{},{offset:I,didMoveItems:!0})))}}function te(le){if(n(m)){var W=d().getJson();if(W===void 0)return;var ue=_(n(m),le),{operations:I,updatedSelection:se}=Nu({json:W,selection:d().getSelection(),deltaY:ue,items:n(m).items});if(I)d().onPatch(I,(Z,U)=>({state:U,selection:se??u()}));else if(le.target===n(m).initialTarget&&!n(m).didMoveItems){var L=wu(le.target),Ce=sh(le.target);Ce&&d().onSelect(Yv(L,Ce))}v(m,void 0),Qn(Qn().dragging=!1),document.removeEventListener("mousemove",je,!0),document.removeEventListener("mouseup",te)}}function Ee(le){le.shiftKey||(le.stopPropagation(),le.preventDefault(),d().onSelect(ua(n(y))))}function De(le){le.shiftKey||(le.stopPropagation(),le.preventDefault(),d().onSelect(aa(n(y))))}function $e(le){d().onSelect(ua(n(y))),Bn(),d().onContextMenu(le)}function pe(le){d().onSelect(aa(n(y))),Bn(),d().onContextMenu(le)}F(()=>p(s()),()=>{v(y,Oo(s()))}),F(()=>p(s()),()=>{v(r,encodeURIComponent(s()))}),F(()=>p(i()),()=>{v(x,!!ss(i())&&i().expanded)}),F(()=>(p(a()),p(i())),()=>{v(k,Yo(a(),i(),[]))}),F(()=>p(i()),()=>{v(O,Pr(i())?i().visibleSections:void 0)}),F(()=>p(l()),()=>{var le;v(M,(le=l())===null||le===void 0?void 0:le.validationError)}),F(()=>(p(d()),p(u()),n(y)),()=>{v(w,gl(d().getJson(),u(),n(y)))}),F(()=>n(y),()=>{v(o,n(y).length===0)}),dn(),yt(!0);var we,qe,Ye=Cy(),he=E(Ye),ie=le=>{var W=ly(),ue=We(W),I=E(ue),se=E(I),L=E(se),Ce=K=>{Yt(K,{get data(){return Ra}})},Z=K=>{Yt(K,{get data(){return ll}})};Q(L,K=>{n(x)?K(Ce):K(Z,!1)});var U=D(se,2);cr(U,t,"identifier",{},null);var pt=D(U,2),st=K=>{z(K,G0())};Q(pt,K=>{n(o)||K(st)});var Xe=D(pt,2),Ct=E(Xe),Te=E(Ct),Ie=K=>{var G=X0();vc(D(We(G),2),{children:(wt,kt)=>{var jn=Jr();xe(()=>{var Ze,At;return tt(jn,"".concat((p(a()),(Ze=P(()=>a().length))!==null&&Ze!==void 0?Ze:""),`
                `).concat((p(a()),(At=P(()=>a().length===1?"item":"items"))!==null&&At!==void 0?At:"")))}),z(wt,jn)},$$slots:{default:!0}}),z(K,G)},it=K=>{var G=K0();vc(D(We(G),2),{onclick:T,children:(wt,kt)=>{var jn=Jr();xe(()=>{var Ze,At;return tt(jn,"".concat((p(a()),(Ze=P(()=>a().length))!==null&&Ze!==void 0?Ze:""),`
                `).concat((p(a()),(At=P(()=>a().length===1?"item":"items"))!==null&&At!==void 0?At:"")))}),z(wt,jn)},$$slots:{default:!0}}),z(K,G)};Q(Te,K=>{n(x)?K(Ie):K(it,!1)});var Pe=D(Xe,2),Et=K=>{var G=ey();Wa(E(G),{get root(){return n(o)},selected:!0,get onContextMenu(){return p(d()),P(()=>d().onContextMenu)}}),z(K,G)};Q(Pe,K=>{p(d()),n(w),p(u()),p(tn),p(En),p(Ar),p(Nt),p(Ve),n(y),P(()=>!d().readOnly&&n(w)&&u()&&(tn(u())||En(u()))&&!Ar(u())&&Nt(Ve(u()),n(y)))&&K(Et)});var Ut=D(I,2),ke=K=>{gi(K,{get validationError(){return n(M)},onExpand:T})};Q(Ut,K=>{n(M),n(x),P(()=>n(M)&&(!n(x)||!n(M).isChildError))&&K(ke)});var Ue=D(Ut,2),Ae=K=>{var G=ty();fe("click",G,Ee),z(K,G)},ht=K=>{var G=ny();fe("click",G,De),z(K,G)};Q(Ue,K=>{n(x)?K(Ae):K(ht,!1)});var Jt=D(ue,2),nt=K=>{var G=iy(),wt=We(G),kt=E(wt),jn=Un=>{var $t,Cn,$n=ry(),nn=E($n),pn=_e(()=>(n(w),p(Mr),p(u()),P(()=>n(w)&&Mr(u()))));Wa(nn,{insert:!0,get selected(){return n(pn)},onContextMenu:$e}),xe(lt=>{$t=jt($n,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,$t,lt),fn($n,"title",Cu),Cn=qo($n,"",Cn,{"--level":(n(y),P(()=>n(y).length+1))})},[()=>({"jse-hovered":n(g)===hs,"jse-selected":n(w)&&Mr(u())})]),z(Un,$n)};Q(kt,Un=>{p(d()),n(g),p(hs),n(w),p(Mr),p(u()),P(()=>!d().readOnly&&(n(g)===hs||n(w)&&Mr(u())))&&Un(jn)}),or(D(kt,2),1,()=>n(O)||pi,pr,(Un,$t,Cn)=>{var $n=ay(),nn=We($n);or(nn,1,()=>(p(a()),n($t),n(m),P(()=>(function(yn,zt,Le){var sn=zt.start,Dt=Math.min(zt.end,yn.length),Ln=Nf(sn,Dt);return Le&&Le.offset!==0?Uv(Ln,Le.selectionStartIndex,Le.selectionItemsCount,Le.offset).map((Vn,Wn)=>({index:Vn,gutterIndex:Wn})):Ln.map(Vn=>({index:Vn,gutterIndex:Vn}))})(a(),n($t),n(m)))),yn=>yn.index,(yn,zt)=>{var Le=_e(()=>(p(Pr),p(l()),n(zt),P(()=>Pr(l())?l().items[n(zt).index]:void 0))),sn=_e(()=>(p(Xl),p(d()),p(u()),n(y),n(zt),P(()=>Xl(d().getJson(),u(),n(y).concat(String(n(zt).index)))))),Dt=Tt(),Ln=We(Dt),Vn=_e(()=>(p(Jl),p(s()),n(zt),P(()=>Jl(s(),n(zt).index)))),Wn=_e(()=>(p(Pr),p(i()),n(zt),P(()=>Pr(i())?i().items[n(zt).index]:void 0))),ar=_e(()=>(p(Pr),p(c()),n(zt),P(()=>Pr(c())?c().items[n(zt).index]:void 0)));hd(Ln,{get value(){return p(a()),n(zt),P(()=>a()[n(zt).index])},get pointer(){return n(Vn)},get state(){return n(Wn)},get validationErrors(){return n(Le)},get searchResults(){return n(ar)},get selection(){return n(sn)},get context(){return d()},onDragSelectionStart:ee,$$slots:{identifier:(Hn,sr)=>{var hr=oy(),Yn=E(hr),yr=E(Yn);xe(()=>tt(yr,(n(zt),P(()=>n(zt).gutterIndex)))),z(Hn,hr)}}}),z(yn,Dt)});var pn=D(nn,2),lt=yn=>{var zt=_e(()=>n(O)||pi);F0(yn,{get visibleSections(){return n(zt)},sectionIndex:Cn,get total(){return p(a()),P(()=>a().length)},get path(){return n(y)},get onExpandSection(){return p(d()),P(()=>d().onExpandSection)},get selection(){return u()},get context(){return d()}})};Q(pn,yn=>{n($t),p(a()),P(()=>n($t).end<a().length)&&yn(lt)}),z(Un,$n)});var Ze=D(wt,2),At=D(E(Ze),2),In=Un=>{var $t=sy();fe("click",$t,De),z(Un,$t)};Q(At,Un=>{n(o)||Un(In)}),z(K,G)};Q(Jt,K=>{n(x)&&K(nt)}),fe("click",se,N),z(le,W)},me=le=>{var W=Tt(),ue=We(W),I=L=>{var Ce=jy(),Z=We(Ce),U=E(Z),pt=E(U),st=E(pt),Xe=Ze=>{Yt(Ze,{get data(){return Ra}})},Ct=Ze=>{Yt(Ze,{get data(){return ll}})};Q(st,Ze=>{n(x)?Ze(Xe):Ze(Ct,!1)});var Te=D(pt,2);cr(Te,t,"identifier",{},null);var Ie=D(Te,2),it=Ze=>{z(Ze,cy())};Q(Ie,Ze=>{n(o)||Ze(it)});var Pe=D(Ie,2),Et=E(Pe),Ut=E(Et),ke=Ze=>{z(Ze,uy())},Ue=Ze=>{var At=dy();vc(D(We(At),2),{onclick:T,children:(In,Un)=>{var $t=Jr();xe((Cn,$n)=>tt($t,"".concat(Cn??"",`
                `).concat($n??"")),[()=>(p(a()),P(()=>Object.keys(a()).length)),()=>(p(a()),P(()=>Object.keys(a()).length===1?"prop":"props"))]),z(In,$t)},$$slots:{default:!0}}),z(Ze,At)};Q(Ut,Ze=>{n(x)?Ze(ke):Ze(Ue,!1)});var Ae=D(Pe,2),ht=Ze=>{var At=vy();Wa(E(At),{get root(){return n(o)},selected:!0,get onContextMenu(){return p(d()),P(()=>d().onContextMenu)}}),z(Ze,At)};Q(Ae,Ze=>{p(d()),n(w),p(u()),p(tn),p(En),p(Ar),p(Nt),p(Ve),n(y),P(()=>!d().readOnly&&n(w)&&u()&&(tn(u())||En(u()))&&!Ar(u())&&Nt(Ve(u()),n(y)))&&Ze(ht)});var Jt=D(U,2),nt=Ze=>{gi(Ze,{get validationError(){return n(M)},onExpand:T})};Q(Jt,Ze=>{n(M),n(x),P(()=>n(M)&&(!n(x)||!n(M).isChildError))&&Ze(nt)});var K=D(Jt,2),G=Ze=>{var At=fy();fe("click",At,Ee),z(Ze,At)},wt=Ze=>{var At=Tt(),In=We(At),Un=$t=>{var Cn=py();fe("click",Cn,De),z($t,Cn)};Q(In,$t=>{n(o)||$t(Un)},!0),z(Ze,At)};Q(K,Ze=>{n(x)?Ze(G):Ze(wt,!1)});var kt=D(Z,2),jn=Ze=>{var At=by(),In=We(At),Un=E(In),$t=pn=>{var lt,yn,zt=hy(),Le=E(zt),sn=_e(()=>(n(w),p(Mr),p(u()),P(()=>n(w)&&Mr(u()))));Wa(Le,{insert:!0,get selected(){return n(sn)},onContextMenu:$e}),xe(Dt=>{lt=jt(zt,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,lt,Dt),fn(zt,"title",Cu),yn=qo(zt,"",yn,{"--level":(n(y),P(()=>n(y).length+1))})},[()=>({"jse-hovered":n(g)===hs,"jse-selected":n(w)&&Mr(u())})]),z(pn,zt)};Q(Un,pn=>{p(d()),n(g),p(hs),n(w),p(Mr),p(u()),P(()=>!d().readOnly&&(n(g)===hs||n(w)&&Mr(u())))&&pn($t)}),or(D(Un,2),1,()=>(p(a()),n(m),P(()=>(function(pn,lt){var yn=Object.keys(pn);return lt&&lt.offset!==0?Uv(yn,lt.selectionStartIndex,lt.selectionItemsCount,lt.offset):yn})(a(),n(m)))),pr,(pn,lt)=>{var yn=_e(()=>(p(Jl),p(s()),n(lt),P(()=>Jl(s(),n(lt))))),zt=_e(()=>(p(ro),p(c()),n(lt),P(()=>ro(c())?c().properties[n(lt)]:void 0))),Le=_e(()=>(p(ro),p(l()),n(lt),P(()=>ro(l())?l().properties[n(lt)]:void 0))),sn=_e(()=>(n(y),n(lt),P(()=>n(y).concat(n(lt))))),Dt=_e(()=>(p(Xl),p(d()),p(u()),p(n(sn)),P(()=>Xl(d().getJson(),u(),n(sn))))),Ln=Tt(),Vn=We(Ln),Wn=_e(()=>(p(ro),p(i()),n(lt),P(()=>ro(i())?i().properties[n(lt)]:void 0)));hd(Vn,{get value(){return p(a()),n(lt),P(()=>a()[n(lt)])},get pointer(){return n(yn)},get state(){return n(Wn)},get validationErrors(){return n(Le)},get searchResults(){return n(zt)},get selection(){return n(Dt)},get context(){return d()},onDragSelectionStart:ee,$$slots:{identifier:(ar,Hn)=>{var sr,hr=my(),Yn=E(hr),yr=_e(()=>(p(rf),p(n(zt)),P(()=>rf(n(zt)))));(function(ur,mr){Ke(mr,!1);var Gn=q(void 0,!0),de=q(void 0,!0),Pt=f(mr,"pointer",9),vn=f(mr,"key",9),An=f(mr,"selection",9),ir=f(mr,"searchResultItems",9),Or=f(mr,"onUpdateKey",9),Wt=f(mr,"context",9),gr=q(void 0,!0);function Wr(J){n(de)||Wt().readOnly||(J.preventDefault(),Wt().onSelect(Kc(n(gr))))}function Xn(J,ne){var ye=Or()(vn(),Wt().normalization.unescapeValue(J)),R=Zt(n(gr)).concat(ye);Wt().onSelect(ne===Ea.nextInside?_t(R):ca(R)),ne!==Ea.self&&Wt().focus()}function $r(){Wt().onSelect(ca(n(gr))),Wt().focus()}F(()=>p(Pt()),()=>{v(gr,Oo(Pt()))}),F(()=>(p(An()),n(gr)),()=>{v(Gn,Tr(An())&&Nt(An().path,n(gr)))}),F(()=>(n(Gn),p(An())),()=>{v(de,n(Gn)&&Ar(An()))}),dn(),yt(!0);var Pn=H0(),Bt=We(Pn),Mt=J=>{var ne=_e(()=>(p(Wt()),p(vn()),P(()=>Wt().normalization.escapeValue(vn())))),ye=_e(()=>(p(Ar),p(An()),P(()=>Ar(An())?An().initialValue:void 0)));wh(J,{get value(){return n(ne)},get initialValue(){return n(ye)},label:"Edit key",shortText:!0,onChange:Xn,onCancel:$r,get onFind(){return p(Wt()),P(()=>Wt().onFind)}})},Mn=J=>{var ne,ye=V0(),R=E(ye),V=Me=>{var Fe=_e(()=>(p(Wt()),p(vn()),P(()=>Wt().normalization.escapeValue(vn()))));Eh(Me,{get text(){return n(Fe)},get searchResultItems(){return ir()}})},ce=Me=>{var Fe=Jr();xe(Qe=>tt(Fe,Qe),[()=>(p(Mi),p(Wt()),p(vn()),P(()=>Mi(Wt().normalization.escapeValue(vn()))))]),z(Me,Fe)};Q(R,Me=>{ir()?Me(V):Me(ce,!1)}),xe(()=>ne=jt(ye,1,"jse-key svelte-1n4cez4",null,ne,{"jse-empty":vn()===""})),fe("dblclick",ye,Wr),z(J,ye)};Q(Bt,J=>{p(Wt()),n(de),P(()=>!Wt().readOnly&&n(de))?J(Mt):J(Mn,!1)});var dr=D(Bt,2),er=J=>{Wa(J,{selected:!0,get onContextMenu(){return p(Wt()),P(()=>Wt().onContextMenu)}})};Q(dr,J=>{p(Wt()),n(Gn),n(de),P(()=>!Wt().readOnly&&n(Gn)&&!n(de))&&J(er)}),z(ur,Pn),et()})(Yn,{get pointer(){return n(yn)},get key(){return n(lt)},get selection(){return n(Dt)},get searchResultItems(){return n(yr)},get context(){return d()},onUpdateKey:Y}),xe(ur=>sr=jt(hr,1,"jse-key-outer svelte-1qi6rc1",null,sr,ur),[()=>({"jse-selected-key":Tr(n(Dt))&&Nt(n(Dt).path,n(sn))})]),z(ar,hr)}}}),z(pn,Ln)});var Cn=D(In,2),$n=D(E(Cn),2),nn=pn=>{var lt=gy();fe("click",lt,De),z(pn,lt)};Q($n,pn=>{n(o)||pn(nn)}),z(Ze,At)};Q(kt,Ze=>{n(x)&&Ze(jn)}),fe("click",pt,N),z(L,Ce)},se=L=>{var Ce=ky(),Z=E(Ce),U=E(Z);cr(U,t,"identifier",{},null);var pt=D(U,2),st=Ae=>{z(Ae,yy())};Q(pt,Ae=>{n(o)||Ae(st)});var Xe=D(pt,2),Ct=E(Xe),Te=_e(()=>n(w)?u():void 0),Ie=_e(()=>(p(of),p(c()),P(()=>of(c()))));Yh(Ct,{get path(){return n(y)},get value(){return a()},get enforceString(){return n(k)},get selection(){return n(Te)},get searchResultItems(){return n(Ie)},get context(){return d()}});var it=D(Xe,2),Pe=Ae=>{var ht=xy();Wa(E(ht),{get root(){return n(o)},selected:!0,get onContextMenu(){return p(d()),P(()=>d().onContextMenu)}}),z(Ae,ht)};Q(it,Ae=>{p(d()),n(w),p(u()),p(tn),p(En),p(Ar),p(Nt),p(Ve),n(y),P(()=>!d().readOnly&&n(w)&&u()&&(tn(u())||En(u()))&&!Ar(u())&&Nt(Ve(u()),n(y)))&&Ae(Pe)});var Et=D(Z,2),Ut=Ae=>{gi(Ae,{get validationError(){return n(M)},onExpand:T})};Q(Et,Ae=>{n(M)&&Ae(Ut)});var ke=D(Et,2),Ue=Ae=>{var ht=wy();fe("click",ht,De),z(Ae,ht)};Q(ke,Ae=>{n(o)||Ae(Ue)}),z(L,Ce)};Q(ue,L=>{p(Qt),p(a()),P(()=>Qt(a()))?L(I):L(se,!1)},!0),z(le,W)};Q(he,le=>{p(a()),P(()=>Array.isArray(a()))?le(ie):le(me,!1)});var xt=D(he,2),an=le=>{var W,ue=Sy(),I=E(ue),se=_e(()=>(n(w),p(oo),p(u()),P(()=>n(w)&&oo(u()))));Wa(I,{insert:!0,get selected(){return n(se)},onContextMenu:pe}),xe(L=>{W=jt(ue,1,"jse-insert-area jse-after svelte-1qi6rc1",null,W,L),fn(ue,"title",Cu)},[()=>({"jse-hovered":n(g)===Yl,"jse-selected":n(w)&&oo(u())})]),z(le,ue)};Q(xt,le=>{p(d()),n(g),p(Yl),n(w),p(oo),p(u()),P(()=>!d().readOnly&&(n(g)===Yl||n(w)&&oo(u())))&&le(an)}),xe((le,W)=>{we=jt(Ye,1,le,"svelte-1qi6rc1",we,W),fn(Ye,"data-path",n(r)),fn(Ye,"aria-selected",n(w)),qe=qo(Ye,"",qe,{"--level":(n(y),P(()=>n(y).length))})},[()=>as((p(Jo),n(x),p(d()),n(y),p(a()),P(()=>Jo("jse-json-node",{"jse-expanded":n(x)},d().onClassName(n(y),a()))))),()=>({"jse-root":n(o),"jse-selected":n(w)&&En(u()),"jse-selected-value":n(w)&&tn(u()),"jse-readonly":d().readOnly,"jse-hovered":n(g)===Jv})]),fe("mousedown",Ye,function(le){if((le.buttons===1||le.buttons===2)&&!((W=le.target).nodeName==="DIV"&&W.contentEditable==="true"||le.buttons===1&&oh(le.target,"BUTTON"))){var W;le.stopPropagation(),le.preventDefault(),d().focus(),document.addEventListener("mousemove",A,!0),document.addEventListener("mouseup",re);var ue=wu(le.target),I=d().getJson(),se=d().getDocumentState();if(!u()||ue===kn.after||ue===kn.inside||u().type!==ue&&u().type!==kn.multi||!gl(I,u(),n(y)))if(Qn(Qn().selecting=!0),Qn(Qn().selectionAnchor=n(y)),Qn(Qn().selectionAnchorType=ue),Qn(Qn().selectionFocus=n(y)),le.shiftKey){var L=d().getSelection();L&&d().onSelect(Zr(ns(L),n(y)))}else if(ue===kn.multi)if(n(o)&&le.target.hasAttribute("data-path")){var Ce=It(bh(a(),se));d().onSelect(id(Ce))}else d().onSelect(Zr(n(y),n(y)));else I!==void 0&&d().onSelect(Yv(ue,n(y)));else le.button===0&&h()(le)}}),fe("mousemove",Ye,function(le){if(Qn().selecting){le.preventDefault(),le.stopPropagation(),Qn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var W=wu(le.target);Nt(n(y),Qn().selectionFocus)&&W===Qn().selectionAnchorType||(Qn(Qn().selectionFocus=n(y)),Qn(Qn().selectionAnchorType=W),d().onSelect(Zr(Qn().selectionAnchor||Qn().selectionFocus,Qn().selectionFocus)))}}),fe("mouseover",Ye,function(le){Qn().selecting||Qn().dragging||(le.stopPropagation(),Qa(le.target,"data-type","selectable-value")?v(g,Jv):Qa(le.target,"data-type","selectable-key")?v(g,void 0):Qa(le.target,"data-type","insert-selection-area-inside")?v(g,hs):Qa(le.target,"data-type","insert-selection-area-after")&&v(g,Yl),clearTimeout(j))}),fe("mouseout",Ye,function(le){le.stopPropagation(),j=window.setTimeout(()=>v(g,void 0))}),z(e,Ye),et()}var Gh={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},Xh={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},gf={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},My={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1lhnan {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan .jse-space.jse-before:where(.svelte-1lhnan) {
  flex: 1;
}
.jse-welcome.svelte-1lhnan .jse-space.jse-after:where(.svelte-1lhnan) {
  flex: 2;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) .jse-welcome-info:where(.svelte-1lhnan) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var Oy=H('<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>',1),zy=H('<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>');function md(e,t){var r=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return Xm(r,o)}function Kh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=He(e,t);if(Nr(s)){if(r===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return(function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,u=(function(h,b){var g={boolean:0,number:1,string:2,undefined:4},j=3;return function(m,y){var x=He(m,h),k=He(y,h);if(typeof x!=typeof k){var O,M,w=(O=g[typeof x])!==null&&O!==void 0?O:j,N=(M=g[typeof k])!==null&&M!==void 0?M:j;return w>N?b:w<N?-b:0}return typeof x=="number"||typeof x=="boolean"?x>k?b:x<k?-b:0:Kn(x)?0:b*md(x,k)}})(l,c),d=He(a,i);return[{op:"replace",path:St(i),value:d.slice(0).sort(u)}]})(e,t,r,o)}if(Qt(s))return(function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=He(a,i),u=Object.keys(c).slice();u.sort((h,b)=>l*md(h,b));var d={};return u.forEach(h=>d[h]=c[h]),[{op:"replace",path:St(i),value:d}]})(e,t,o);throw new Error("Cannot sort: no array or object")}zl(["click"]);ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-1k47orx {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):focus, .jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-1k47orx) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var qy=H('<button type="button"> </button>'),Ey=H('<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>'),Ay=H('<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>');function Py(e,t){Ke(t,!1);var r=f(t,"items",9),o=f(t,"selectedItem",9),s=f(t,"onSelect",9);yt(!0);var a=Ay(),i=E(a);or(i,1,()=>(p(Sc),p(r()),P(()=>Sc(r(),100))),u=>u,(u,d)=>{var h,b=qy(),g=E(b);xe((j,m)=>{h=jt(b,1,"jse-navigation-bar-dropdown-item svelte-1k47orx",null,h,{"jse-selected":n(d)===o()}),fn(b,"title",j),tt(g,m)},[()=>(n(d),P(()=>n(d).toString())),()=>(p(ka),n(d),P(()=>ka(n(d).toString(),30)))]),fe("click",b,ya(()=>s()(n(d)))),z(u,b)});var l=D(i,2),c=u=>{var d=Ey();fn(d,"title","Limited to 100 items"),z(u,d)};Q(l,u=>{p(r()),P(()=>r().length>100)&&u(c)}),z(e,a),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-13sijxb {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):focus, .jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-13sijxb) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-13sijxb) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-13sijxb:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var Ry=H('<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>'),Ty=H('<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>');function bf(e,t){Ke(t,!1);var r,o=q(void 0,!0),s=q(void 0,!0),{openAbsolutePopup:a,closeAbsolutePopup:i}=ls("absolute-popup"),l=f(t,"path",9),c=f(t,"index",9),u=f(t,"onSelect",9),d=f(t,"getItems",9),h=q(void 0,!0),b=q(!1,!0);function g(O){i(r),u()(n(o).concat(O))}F(()=>(p(l()),p(c())),()=>{v(o,l().slice(0,c()))}),F(()=>(p(l()),p(c())),()=>{v(s,l()[c()])}),dn(),yt(!0);var j,m=Ty(),y=E(m);Yt(E(y),{get data(){return Tf}});var x=D(y,2),k=O=>{var M=Ry(),w=E(M);xe(()=>tt(w,n(s))),fe("click",M,()=>g(n(s))),z(O,M)};Q(x,O=>{n(s)!==void 0&&O(k)}),Fn(m,O=>v(h,O),()=>n(h)),xe(()=>j=jt(y,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb",null,j,{"jse-open":n(b)})),fe("click",y,function(){if(n(h)){v(b,!0);var O={items:d()(n(o)),selectedItem:n(s),onSelect:g};r=a(Py,O,{anchor:n(h),closeOnOuterClick:!0,onClose:()=>{v(b,!1)}})}}),z(e,m),et()}function ev(e){var t,r;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(r=document).queryCommandSupported)!==null&&t!==void 0&&t.call(r,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-uyexy4 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button:where(.svelte-uyexy4) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-copy.copied:where(.svelte-uyexy4) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-validation-error:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 .jse-copied-text:where(.svelte-uyexy4) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var Ny=H('<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>'),Iy=H('<div class="jse-copied-text svelte-uyexy4">Copied!</div>'),Uy=H('<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function $y(e,t){Ke(t,!1);var r=q(),o=ls("absolute-popup"),s=f(t,"path",8),a=f(t,"pathParser",8),i=f(t,"onChange",8),l=f(t,"onClose",8),c=f(t,"onError",8),u=f(t,"pathExists",8),d=q(),h=q(),b=q(!1),g=void 0,j=q(!1);function m(){n(d).focus()}function y(re){try{var X=a().parse(re);return(function(_){if(!u()(_))throw new Error("Path does not exist in current document")})(X),{path:X,error:void 0}}catch(_){return{path:void 0,error:_}}}Xr(()=>{m()}),Po(()=>{clearTimeout(g)}),F(()=>(p(a()),p(s())),()=>{v(h,a().stringify(s()))}),F(()=>(n(b),n(h)),()=>{v(r,n(b)?y(n(h)).error:void 0)}),dn(),yt();var x,k=Uy(),O=E(k);Fn(O,re=>v(d,re),()=>n(d));var M=D(O,2),w=re=>{var X=Ny();Yt(E(X),{get data(){return zs}}),to(X,(_,ee)=>Hd?.(_,ee),()=>be({text:String(n(r)||"")},o)),z(re,X)};Q(M,re=>{n(r)&&re(w)});var N=D(M,2),T=re=>{z(re,Iy())};Q(N,re=>{n(j)&&re(T)});var Y,A=D(N,2);Yt(E(A),{get data(){return Va}}),xe(()=>{x=jt(k,1,"jse-navigation-bar-path-editor svelte-uyexy4",null,x,{error:n(r)}),Ts(O,n(h)),Y=jt(A,1,"jse-navigation-bar-copy svelte-uyexy4",null,Y,{copied:n(j)})}),fe("keydown",O,ya(function(re){var X=la(re);if(X==="Escape"&&(re.preventDefault(),l()()),X==="Enter"){re.preventDefault(),v(b,!0);var _=y(n(h));_.path!==void 0?i()(_.path):c()(_.error)}})),fe("input",O,function(re){v(h,re.currentTarget.value)}),fe("click",A,function(){ev(n(h)),v(j,!0),g=window.setTimeout(()=>v(j,!1),1e3),m()}),z(e,k),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-hjhal6 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.flex:where(.svelte-hjhal6) {
  flex: 1;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):focus, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):hover, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.editing:where(.svelte-hjhal6) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) .jse-navigation-bar-space:where(.svelte-hjhal6) {
  flex: 1;
  text-align: left;
}`);var Dy=H("<!> <!>",1),Jy=H('<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>');function Wy(e,t){Ke(t,!1);var r=q(void 0,!0),o=q(void 0,!0),s=Ur("jsoneditor:NavigationBar"),a=f(t,"json",9),i=f(t,"selection",9),l=f(t,"onSelect",9),c=f(t,"onError",9),u=f(t,"pathParser",9),d=q(void 0,!0),h=q(!1,!0);function b(X){s("get items for path",X);var _=He(a(),X);if(Array.isArray(_))return Nf(0,_.length).map(String);if(Qt(_)){var ee=Object.keys(_).slice(0);return ee.sort(md),ee}return[]}function g(X){return Ha(a(),X)}function j(X){s("select path",JSON.stringify(X)),l()(Zr(X,X))}function m(){v(h,!1)}function y(X){m(),j(X)}F(()=>(p(i()),Ve),()=>{v(r,i()?Ve(i()):[])}),F(()=>(p(a()),n(r)),()=>{v(o,Kn(He(a(),n(r))))}),F(()=>n(r),()=>{n(r),setTimeout(()=>{if(n(d)&&n(d).scrollTo){var X=n(d).scrollWidth-n(d).clientWidth;X>0&&(s("scrollTo ",X),n(d).scrollTo({left:X,behavior:"smooth"}))}})}),dn(),yt(!0);var x=Jy(),k=E(x),O=X=>{var _=Dy(),ee=We(_);or(ee,1,()=>n(r),pr,(Ee,De,$e)=>{bf(Ee,{getItems:b,get path(){return n(r)},index:$e,onSelect:j})});var je=D(ee,2),te=Ee=>{bf(Ee,{getItems:b,get path(){return n(r)},get index(){return n(r),P(()=>n(r).length)},onSelect:j})};Q(je,Ee=>{n(o)&&Ee(te)}),z(X,_)},M=X=>{$y(X,{get path(){return n(r)},onClose:m,onChange:y,get onError(){return c()},pathExists:g,get pathParser(){return u()}})};Q(k,X=>{n(h)?X(M,!1):X(O)});var w,N=D(k,2),T=E(N),Y=E(T),A=D(T,2),re=_e(()=>n(h)?Bm:Fm);Yt(A,{get data(){return n(re)}}),Fn(x,X=>v(d,X),()=>n(d)),xe(X=>{w=jt(N,1,"jse-navigation-bar-edit svelte-hjhal6",null,w,{flex:!n(h),editing:n(h)}),fn(N,"title",n(h)?"Cancel editing the selected path":"Edit the selected path"),tt(Y,X)},[()=>(p(Kn),p(a()),n(h),P(()=>Kn(a())||n(h)?" ":"Navigation bar"))]),fe("click",N,function(){v(h,!n(h))}),z(e,x),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1x1x8q0 {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0),
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-replace-toggle:where(.svelte-1x1x8q0) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-icon:where(.svelte-1x1x8q0) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) label.jse-search-input-label:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count:where(.svelte-1x1x8q0) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count.jse-visible:where(.svelte-1x1x8q0) {
  visibility: visible;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  width: auto;
}`);var _y=H('<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),By=H('<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>'),Fy=H('<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function em(e,t){Ke(t,!1);var r=q(void 0,!0),o=q(void 0,!0),s=q(void 0,!0),a=Ur("jsoneditor:SearchBox"),i=f(t,"json",9),l=f(t,"documentState",9),c=f(t,"parser",9),u=f(t,"showSearch",9),d=f(t,"showReplace",13),h=f(t,"readOnly",9),b=f(t,"columns",9),g=f(t,"onSearch",9),j=f(t,"onFocus",9),m=f(t,"onPatch",9),y=f(t,"onClose",9),x=q("",!0),k="",O=q("",!0),M=q(!1,!0),w=q(void 0,!0),N=fc(function(L){return me.apply(this,arguments)},300),T=fc(function(L){return xt.apply(this,arguments)},300);function Y(){d(!d()&&!h())}function A(L){L.stopPropagation();var Ce=la(L);Ce==="Enter"&&(L.preventDefault(),n(x)!==k?N.flush():$e()),Ce==="Shift+Enter"&&(L.preventDefault(),we()),Ce==="Ctrl+Enter"&&(L.preventDefault(),d()?ee():$e()),Ce==="Ctrl+H"&&(L.preventDefault(),Y()),Ce==="Escape"&&(L.preventDefault(),W())}function re(L){la(L)==="Enter"&&(L.preventDefault(),L.stopPropagation(),ee())}function X(){return _.apply(this,arguments)}function _(){return(_=at(function*(){Bn(),yield N.flush()})).apply(this,arguments)}function ee(){return je.apply(this,arguments)}function je(){return(je=at(function*(){var L;if(!h()){var Ce=(L=n(w))===null||L===void 0?void 0:L.activeItem;if(a("handleReplace",{replaceText:n(O),activeItem:Ce}),n(w)&&Ce&&i()!==void 0){v(w,be(be({},Xv(n(w))),{},{activeIndex:n(o)}));var{operations:Z,newSelection:U}=fj(i(),l(),n(O),Ce,c());m()(Z,(pt,st)=>({state:st,selection:U})),Bn(),yield T.flush(),yield Ye()}}})).apply(this,arguments)}function te(){return Ee.apply(this,arguments)}function Ee(){return(Ee=at(function*(){if(!h()){a("handleReplaceAll",{text:n(x),replaceText:n(O)});var{operations:L,newSelection:Ce}=(function(Z,U,pt,st,Xe){for(var Ct=Kv(pt,Z,{maxResults:1/0}),Te=[],Ie=0;Ie<Ct.length;Ie++){var it=Ct[Ie-1],Pe=Ct[Ie];Ie!==0&&Pe.field===it.field&&Nt(Pe.path,it.path)?It(Te).items.push(Pe):Te.push({path:Pe.path,field:Pe.field,items:[Pe]})}Te.sort((ke,Ue)=>ke.field!==Ue.field?ke.field===Eo.key?1:-1:Ue.path.length-ke.path.length);var Et,Ut=[];return Te.forEach(ke=>{var{field:Ue,path:Ae,items:ht}=ke;if(Ue===Eo.key){var Jt=Zt(Ae),nt=He(Z,Jt),K=It(Ae),G=Il(Jt,Object.keys(nt),K,tf(K,st,ht));Ut=Ut.concat(G),Et=zi(Z,G)}else{if(Ue!==Eo.value)throw new Error("Cannot replace: unknown type of search result field ".concat(Ue));var wt=He(Z,Ae);if(wt===void 0)throw new Error("Cannot replace: path not found ".concat(St(Ae)));var kt=typeof wt=="string"?wt:String(wt),jn=Yo(Z,U,Ae),Ze=tf(kt,st,ht),At=[{op:"replace",path:St(Ae),value:jn?Ze:Ds(Ze,Xe)}];Ut=Ut.concat(At),Et=zi(Z,At)}}),{operations:Ut,newSelection:Et}})(i(),l(),n(x),n(O),c());m()(L,(Z,U)=>({state:U,selection:Ce})),yield Ye()}})).apply(this,arguments)}function De(L){L.select()}function $e(){return pe.apply(this,arguments)}function pe(){return(pe=at(function*(){v(w,n(w)?Xv(n(w)):void 0),yield Ye()})).apply(this,arguments)}function we(){return qe.apply(this,arguments)}function qe(){return qe=at(function*(){v(w,n(w)?(function(L){var Ce=L.activeIndex>0?L.activeIndex-1:L.items.length-1,Z=L.items[Ce],U=L.items.map((pt,st)=>be(be({},pt),{},{active:st===Ce}));return be(be({},L),{},{items:U,activeItem:Z,activeIndex:Ce})})(n(w)):void 0),yield Ye()}),qe.apply(this,arguments)}function Ye(){return he.apply(this,arguments)}function he(){return(he=at(function*(){var L;a("handleFocus",n(w));var Ce=(L=n(w))===null||L===void 0?void 0:L.activeItem;Ce&&i()!==void 0&&(yield j()(Ce.path,Ce.resultIndex))})).apply(this,arguments)}function ie(){return ie=at(function*(L){yield an(L,n(x),i())}),ie.apply(this,arguments)}function me(){return me=at(function*(L){yield an(u(),L,i()),yield Ye()}),me.apply(this,arguments)}function xt(){return xt=at(function*(L){yield an(u(),n(x),L)}),xt.apply(this,arguments)}function an(L,Ce,Z){return le.apply(this,arguments)}function le(){return le=at(function*(L,Ce,Z){return L?(a("applySearch",{showSearch:L,text:Ce}),Ce===""?(a("clearing search result"),n(w)!==void 0&&v(w,void 0),Promise.resolve()):(k=Ce,v(M,!0),new Promise(U=>{setTimeout(()=>{var pt=Kv(Ce,Z,{maxResults:ku,columns:b()});v(w,(function(st,Xe){var Ct=Xe!=null&&Xe.activeItem?nf(Xe.activeItem):void 0,Te=st.findIndex(Pe=>Nt(Ct,nf(Pe))),Ie=Te!==-1?Te:Xe?.activeIndex!==void 0&&Xe?.activeIndex<st.length?Xe?.activeIndex:st.length>0?0:-1,it=st.map((Pe,Et)=>be(be({resultIndex:Et},Pe),{},{active:Et===Ie}));return{items:it,activeItem:it[Ie],activeIndex:Ie}})(pt,n(w))),v(M,!1),U()})}))):(n(w)&&v(w,void 0),Promise.resolve())}),le.apply(this,arguments)}function W(){a("handleClose"),N.cancel(),T.cancel(),an(!1,n(x),i()),y()()}F(()=>n(w),()=>{var L;v(r,((L=n(w))===null||L===void 0||(L=L.items)===null||L===void 0?void 0:L.length)||0)}),F(()=>n(w),()=>{var L;v(o,((L=n(w))===null||L===void 0?void 0:L.activeIndex)||0)}),F(()=>(n(r),ku),()=>{v(s,n(r)>=ku?"".concat(999,"+"):String(n(r)))}),F(()=>(p(g()),n(w)),()=>{g()(n(w))}),F(()=>p(u()),()=>{(function(L){ie.apply(this,arguments)})(u())}),F(()=>n(x),()=>{N(n(x))}),F(()=>p(i()),()=>{T(i())}),dn(),yt(!0);var ue=Tt(),I=We(ue),se=L=>{var Ce=Fy(),Z=E(Ce),U=E(Z),pt=K=>{var G=_y(),wt=E(G),kt=_e(()=>d()?Ra:ll);Yt(wt,{get data(){return n(kt)}}),fe("click",G,Y),z(K,G)};Q(U,K=>{h()||K(pt)});var st=E(D(U,2)),Xe=E(st),Ct=E(Xe),Te=K=>{Yt(K,{get data(){return Ym},spin:!0})},Ie=K=>{Yt(K,{get data(){return Jc}})};Q(Ct,K=>{n(M)?K(Te):K(Ie,!1)});var it=D(Xe,2),Pe=E(it);Dr(()=>wc(Pe,()=>n(x),K=>v(x,K))),to(Pe,K=>De?.(K)),Dr(()=>fe("paste",Pe,X));var Et,Ut=D(it,2),ke=E(Ut),Ue=D(Ut,2);Yt(E(Ue),{get data(){return Hm}});var Ae=D(Ue,2);Yt(E(Ae),{get data(){return Zm}});var ht=D(Ae,2);Yt(E(ht),{get data(){return Dc}});var Jt=D(st,2),nt=K=>{var G=By(),wt=E(G),kt=D(wt,2),jn=D(kt,2);wc(wt,()=>n(O),Ze=>v(O,Ze)),fe("keydown",wt,re),fe("click",kt,ee),fe("click",jn,te),z(K,G)};Q(Jt,K=>{d()&&!h()&&K(nt)}),xe(()=>{var K;Et=jt(Ut,1,"jse-search-count svelte-1x1x8q0",null,Et,{"jse-visible":n(x)!==""}),tt(ke,"".concat(n(o)!==-1&&n(o)<n(r)?"".concat(n(o)+1,"/"):"").concat((K=n(s))!==null&&K!==void 0?K:""))}),fe("click",Ue,$e),fe("click",Ae,we),fe("click",ht,W),fe("keydown",Z,A),z(L,Ce)};Q(I,L=>{u()&&L(se)}),z(e,ue),et()}var wl=Symbol("path");function Ly(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&(function(a,i,l){if(a.length<i)a.forEach(l);else for(var c=i>1?(a.length-1)/(i-1):a.length,u=0;u<i;u++){var d=Math.floor(u*c);l(a[d],d,a)}})(e,r,a=>{Qt(a)?tm(a,o,t):o[wl]=!0});var s=[];return wl in o&&s.push([]),nm(o,[],s,t),s}function tm(e,t,r){for(var o in e){var s=e[o],a=t[o]||(t[o]={});Qt(s)&&r?tm(s,a,r):a[wl]===void 0&&(a[wl]=!0)}}function nm(e,t,r,o){for(var s in e){var a=t.concat(s),i=e[s];i&&i[wl]===!0&&r.push(a),Ir(i)&&o&&nm(i,a,r,o)}}function Vy(e,t,r,o,s,a){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=Nr(r)?r.length:0,c=(function(k,O){var M=Object.values(k);if(on(M))return O;var w=(N,T)=>N+T;return M.reduce(w)/M.length})(o,s),u=e-i,d=t+2*i,h=k=>o[k]||s,b=0,g=a;g<u&&b<l;)g+=h(b),b++;b>0&&(g-=h(--b));for(var j=b,m=0;m<d&&j<l;)m+=h(j),j++;for(var y=0,x=j;x<l;x++)y+=h(x);return{startIndex:b,endIndex:j,startHeight:g,endHeight:y,averageItemHeight:c,visibleHeight:m,visibleItems:Nr(r)?r.slice(b,j):[]}}function jf(e,t,r,o){for(var{rowIndex:s}=ko(e,t),a=0,i=0;i<s;i++)a+=r[i]||o;return a}function ko(e,t){var[r,...o]=e,s=parseInt(r,10);return{rowIndex:isNaN(s)?-1:s,columnIndex:t.findIndex(a=>oa(o,a))}}function ms(e,t){var{rowIndex:r,columnIndex:o}=e;return[String(r),...t[o]]}function Hy(e,t){var[r,o]=_g(e,i=>Rd(i.path[0])),s=Bg(r,Zy),a=Fg(s,i=>{var l={row:[],columns:{}};return i.forEach(c=>{var u=(function(d,h){var b=ko(d.path,h);return b.columnIndex!==-1?b.columnIndex:-1})(c,t);u!==-1?(l.columns[u]===void 0&&(l.columns[u]=[]),l.columns[u].push(c)):l.row.push(c)}),l});return{root:o,rows:a}}function Zs(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(r=>ao(r.path)+" "+r.message).join(", "),severity:yo.warning}}function Zy(e){return parseInt(e.path[0],10)}function Qy(e,t,r){var o=t.some(s=>(function(a,i,l){if(!a)return!1;if(i.op==="replace"){var c=Oo(i.path),{rowIndex:u,columnIndex:d}=ko(c,l),h=l.findIndex(b=>Nt(b,a.path));if(u!==-1&&d!==-1&&d!==h)return!1}return!0})(e,s,r));return o?void 0:e}var eo=Ur("jsoneditor:actions");function rm(e){return gd.apply(this,arguments)}function gd(){return gd=at(function*(e){var{json:t,selection:r,indentation:o,readOnly:s,parser:a,onPatch:i}=e;if(!s&&t!==void 0&&r&&si(r)){var l=xh(t,r,o,a);if(l!==void 0){eo("cut",{selection:r,clipboard:l,indentation:o}),yield ev(l);var{operations:c,newSelection:u}=Oh(t,r);i(c,(d,h)=>({state:h,selection:u}))}}}),gd.apply(this,arguments)}function om(e){return bd.apply(this,arguments)}function bd(){return bd=at(function*(e){var{json:t,selection:r,indentation:o,parser:s}=e,a=xh(t,r,o,s);a!==void 0&&(eo("copy",{clipboard:a,indentation:o}),yield ev(a))}),bd.apply(this,arguments)}function am(e){var{clipboardText:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onChangeText:l,onPasteMultilineText:c,openRepairModal:u}=e;if(!s)try{d(t)}catch{u(t,h=>{eo("repaired pasted text: ",h),d(h)})}function d(h){if(r!==void 0){var b=o||_t([]),g=Mh(r,b,h,a),j=(function(m,y,x){var k=arguments.length>3&&arguments[3]!==void 0?arguments[3]:cj;if(m.length>k)return!1;var O=/\n/.test(m);if(!O)return!1;var M=y.some(N=>N.op==="replace"&&Array.isArray(N.value)),w=y.filter(N=>N.op==="add").length>1;if(!M&&!w)return!1;try{return Al(m,x.parse),!1}catch{return!0}})(t,g,a);eo("paste",{pastedText:h,operations:g,ensureSelection:b,pasteMultilineText:j}),i(g,(m,y)=>{var x=y;return g.filter(k=>(Pf(k)||Md(k))&&Kn(k.value)).forEach(k=>{var O=Xo(r,k.path);x=Ns(m,x,O)}),{state:x}}),j&&c(h)}else eo("paste text",{pastedText:h}),l(t,(m,y)=>{if(m)return{state:Ns(m,y,[])}})}}function sm(e){var{json:t,text:r,selection:o,keepSelection:s,readOnly:a,onChange:i,onPatch:l}=e;if(!a&&o){var c=t!==void 0&&(Tr(o)||tn(o))?Zr(o.path,o.path):o;if(on(Ve(o)))eo("remove root",{selection:o}),i&&i({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:r||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:u,newSelection:d}=Oh(t,c);eo("remove",{operations:u,selection:o,newSelection:d}),l(u,(h,b)=>({state:b,selection:s?o:d}))}}}function $c(e){var{insertType:t,selectInside:r,initialValue:o,json:s,selection:a,readOnly:i,parser:l,onPatch:c,onReplaceJson:u}=e;if(!i){var d=(function(m,y,x){if(x==="object")return{};if(x==="array")return[];if(x==="structure"&&m!==void 0){var k=y?jh(y):[],O=He(m,k);if(Array.isArray(O)&&!on(O)){var M=Ma(O);return Kn(M)?_m(M,w=>Array.isArray(w)?[]:Qt(w)?void 0:""):""}}return""})(s,a,t);if(s!==void 0){var h=l.stringify(d),b=Mh(s,a,h,l);eo("onInsert",{insertType:t,operations:b,newValue:d,data:h});var g=It(b.filter(m=>m.op==="add"||m.op==="replace"));c(b,(m,y,x)=>{if(g){var k=Xo(m,g.path);if(Kn(d))return{state:No(m,y,k,Gc),selection:r?ua(k):x};if(d===""){var O=on(k)?void 0:He(m,Zt(k));return{state:No(m,y,k,sl),selection:Qt(O)?Kc(k,o):ml(k,o)}}}}),eo("after patch")}else{eo("onInsert",{insertType:t,newValue:d});var j=[];u(d,(m,y)=>({state:Ns(m,y,j),selection:Kn(d)?ua(j):ml(j)}))}}}function im(e){return jd.apply(this,arguments)}function jd(){return jd=at(function*(e){var{char:t,selectInside:r,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c,onSelect:u}=e;a||(Tr(s)?u(be(be({},s),{},{edit:!0,initialValue:t})):t==="{"?$c({insertType:"object",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):t==="["?$c({insertType:"array",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):tn(s)&&o!==void 0?Kn(He(o,s.path))||u(be(be({},s),{},{edit:!0,initialValue:t})):(eo("onInsertValueWithCharacter",{char:t}),yield(function(d){return yd.apply(this,arguments)})({char:t,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c})))}),jd.apply(this,arguments)}function yd(){return yd=at(function*(e){var{char:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l}=e;s||$c({insertType:"value",selectInside:!1,initialValue:t,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l})}),yd.apply(this,arguments)}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-25xmyd {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var Yy=H('<div class="jse-json-preview svelte-25xmyd"> </div>');function lm(e,t){Ke(t,!1);var r=q(),o=q(),s=f(t,"text",8),a=f(t,"json",8),i=f(t,"indentation",8),l=f(t,"parser",8);F(()=>(p(a()),p(s())),()=>{v(r,a()!==void 0?{json:a()}:{text:s()||""})}),F(()=>(n(r),p(i()),p(l()),Cc),()=>{v(o,ka(Gu(n(r),i(),l()),Cc))}),dn(),yt();var c=Yy(),u=E(c);xe(()=>tt(u,n(o))),z(e,c),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-16jz6ui {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-16jz6ui:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-16jz6ui:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-16jz6ui:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-16jz6ui {
  text-align: left;
}
button.jse-context-menu-button.svelte-16jz6ui svg {
  width: 16px;
}`);var Gy=H('<button type="button"><!> <!></button>');function Iu(e,t){Ke(t,!1);var r=f(t,"item",8),o=f(t,"className",8,void 0),s=f(t,"onRequestClose",8);yt();var a=Gy(),i=E(a),l=d=>{Yt(d,{get data(){return p(r()),P(()=>r().icon)}})};Q(i,d=>{p(r()),P(()=>r().icon)&&d(l)});var c=D(i,2),u=d=>{var h=Jr();xe(()=>tt(h,(p(r()),P(()=>r().text)))),z(d,h)};Q(c,d=>{p(r()),P(()=>r().text)&&d(u)}),xe(d=>{jt(a,1,d,"svelte-16jz6ui"),fn(a,"title",(p(r()),P(()=>r().title))),a.disabled=(p(r()),P(()=>r().disabled||!1))},[()=>as((p(Jo),p(o()),p(r()),P(()=>Jo("jse-context-menu-button",o(),r().className))))]),fe("click",a,d=>{s()(),r().onClick(d)}),z(e,a),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-bov1j6 {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) li:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown.jse-visible:where(.svelte-bov1j6) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items.jse-visible:where(.svelte-bov1j6) {
  display: block;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var Xy=H('<li class="svelte-bov1j6"><button type="button"><!> </button></li>'),Ky=H('<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>');ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1y5l9l1 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1y5l9l1:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1y5l9l1:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1y5l9l1:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1y5l9l1 {
  text-align: left;
}
button.jse-context-menu-button.svelte-1y5l9l1 svg {
  width: 16px;
}`);var ex=H('<button type="button" slot="defaultItem"><!> </button>');function Uu(e,t){Ke(t,!1);var r=q(),o=f(t,"item",8),s=f(t,"className",8,void 0),a=f(t,"onRequestClose",8);F(()=>(p(o()),p(a())),()=>{v(r,o().items.map(i=>be(be({},i),{},{onClick:l=>{a()(),i.onClick(l)}})))}),dn(),yt(),(function(i,l){Ke(l,!1);var c=q(void 0,!0),u=f(l,"items",25,()=>[]),d=f(l,"title",9,void 0),h=f(l,"width",9,"120px"),b=q(!1,!0);function g(){v(b,!1)}function j(w){la(w)==="Escape"&&(w.preventDefault(),v(b,!1))}Xr(()=>{document.addEventListener("click",g),document.addEventListener("keydown",j)}),Po(()=>{document.removeEventListener("click",g),document.removeEventListener("keydown",j)}),F(()=>p(u()),()=>{v(c,u().every(w=>w.disabled===!0))}),dn(),yt(!0);var m=Ky(),y=E(m);cr(y,l,"defaultItem",{},null);var x,k=D(y,2);Yt(E(k),{get data(){return Ra}});var O,M=D(k,2);or(E(M),5,u,pr,(w,N)=>{var T=Xy(),Y=E(T),A=E(Y),re=_=>{Yt(_,{get data(){return n(N),P(()=>n(N).icon)}})};Q(A,_=>{n(N),P(()=>n(N).icon)&&_(re)});var X=D(A);xe(()=>{var _;fn(Y,"title",(n(N),P(()=>n(N).title))),Y.disabled=(n(N),P(()=>n(N).disabled)),jt(Y,1,as((n(N),P(()=>n(N).className))),"svelte-bov1j6"),tt(X," ".concat((n(N),(_=P(()=>n(N).text))!==null&&_!==void 0?_:"")))}),fe("click",Y,_=>n(N).onClick(_)),z(w,T)}),xe(()=>{var w;fn(m,"title",d()),x=jt(k,1,"jse-open-dropdown svelte-bov1j6",null,x,{"jse-visible":n(b)}),k.disabled=n(c),O=jt(M,1,"jse-dropdown-items svelte-bov1j6",null,O,{"jse-visible":n(b)}),qo(M,"width: ".concat((w=h())!==null&&w!==void 0?w:"",";"))}),fe("click",k,function(){var w=n(b);setTimeout(()=>v(b,!w))}),fe("click",m,g),z(i,m),et()})(e,{get width(){return p(o()),P(()=>o().width)},get items(){return n(r)},$$slots:{defaultItem:(i,l)=>{var c=ex(),u=E(c),d=b=>{Yt(b,{get data(){return p(o()),P(()=>o().main.icon)}})};Q(u,b=>{p(o()),P(()=>o().main.icon)&&b(d)});var h=D(u);xe(b=>{var g;jt(c,1,b,"svelte-1y5l9l1"),fn(c,"title",(p(o()),P(()=>o().main.title))),c.disabled=(p(o()),P(()=>o().main.disabled||!1)),tt(h," ".concat((p(o()),(g=P(()=>o().main.text))!==null&&g!==void 0?g:"")))},[()=>as((p(Jo),p(s()),p(o()),P(()=>Jo("jse-context-menu-button",s(),o().main.className))))]),fe("click",c,b=>{a()(),o().main.onClick(b)}),z(i,c)}}}),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-1shjn02 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-label:where(.svelte-1shjn02) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) div.jse-tip-icon:where(.svelte-1shjn02) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-1shjn02 .jse-separator:where(.svelte-1shjn02) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var tx=H('<div class="jse-separator svelte-1shjn02"></div>'),nx=H('<div class="jse-label svelte-1shjn02"> </div>'),rx=H('<div class="jse-column svelte-1shjn02"></div>'),ox=H('<div class="jse-separator svelte-1shjn02"></div>'),ax=H('<div class="jse-row svelte-1shjn02"></div>'),sx=H('<div class="jse-separator svelte-1shjn02"></div>'),ix=H('<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>'),lx=H('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>');function cm(e,t){Ke(t,!1);var r=f(t,"items",9),o=f(t,"onRequestClose",9),s=f(t,"tip",9),a=q(void 0,!0);Xr(()=>{var b=Array.from(n(a).querySelectorAll("button")).find(g=>!g.disabled);b&&b.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(b){return console.error("Unknown type of context menu item",b),"???"}yt(!0);var c=lx(),u=E(c);or(u,1,r,pr,(b,g)=>{var j=Tt(),m=We(j),y=k=>{Iu(k,{get item(){return n(g)},get onRequestClose(){return o()}})},x=k=>{var O=Tt(),M=We(O),w=T=>{Uu(T,{get item(){return n(g)},get onRequestClose(){return o()}})},N=T=>{var Y=Tt(),A=We(Y),re=_=>{var ee=ax();or(ee,5,()=>(n(g),P(()=>n(g).items)),pr,(je,te)=>{var Ee=Tt(),De=We(Ee),$e=we=>{Iu(we,{get item(){return n(te)},get onRequestClose(){return o()}})},pe=we=>{var qe=Tt(),Ye=We(qe),he=me=>{Uu(me,{get item(){return n(te)},get onRequestClose(){return o()}})},ie=me=>{var xt=Tt(),an=We(xt),le=ue=>{var I=rx();or(I,5,()=>(n(te),P(()=>n(te).items)),pr,(se,L)=>{var Ce=Tt(),Z=We(Ce),U=st=>{Iu(st,{className:"left",get item(){return n(L)},get onRequestClose(){return o()}})},pt=st=>{var Xe=Tt(),Ct=We(Xe),Te=it=>{Uu(it,{className:"left",get item(){return n(L)},get onRequestClose(){return o()}})},Ie=it=>{var Pe=Tt(),Et=We(Pe),Ut=Ue=>{z(Ue,tx())},ke=Ue=>{var Ae=Tt(),ht=We(Ae),Jt=K=>{var G=nx(),wt=E(G);xe(()=>tt(wt,(n(L),P(()=>n(L).text)))),z(K,G)},nt=K=>{var G=Jr();xe(wt=>tt(G,wt),[()=>(n(L),P(()=>l(n(L))))]),z(K,G)};Q(ht,K=>{p(ed),n(L),P(()=>ed(n(L)))?K(Jt):K(nt,!1)},!0),z(Ue,Ae)};Q(Et,Ue=>{p(xa),n(L),P(()=>xa(n(L)))?Ue(Ut):Ue(ke,!1)},!0),z(it,Pe)};Q(Ct,it=>{p(ys),n(L),P(()=>ys(n(L)))?it(Te):it(Ie,!1)},!0),z(st,Xe)};Q(Z,st=>{p(Lo),n(L),P(()=>Lo(n(L)))?st(U):st(pt,!1)}),z(se,Ce)}),z(ue,I)},W=ue=>{var I=Tt(),se=We(I),L=Z=>{z(Z,ox())},Ce=Z=>{var U=Jr();xe(pt=>tt(U,pt),[()=>(n(te),P(()=>l(n(te))))]),z(Z,U)};Q(se,Z=>{p(xa),n(te),P(()=>xa(n(te)))?Z(L):Z(Ce,!1)},!0),z(ue,I)};Q(an,ue=>{p(nd),n(te),P(()=>nd(n(te)))?ue(le):ue(W,!1)},!0),z(me,xt)};Q(Ye,me=>{p(ys),n(te),P(()=>ys(n(te)))?me(he):me(ie,!1)},!0),z(we,qe)};Q(De,we=>{p(Lo),n(te),P(()=>Lo(n(te)))?we($e):we(pe,!1)}),z(je,Ee)}),z(_,ee)},X=_=>{var ee=Tt(),je=We(ee),te=De=>{z(De,sx())},Ee=De=>{var $e=Jr();xe(pe=>tt($e,pe),[()=>(n(g),P(()=>l(n(g))))]),z(De,$e)};Q(je,De=>{p(xa),n(g),P(()=>xa(n(g)))?De(te):De(Ee,!1)},!0),z(_,ee)};Q(A,_=>{p(td),n(g),P(()=>td(n(g)))?_(re):_(X,!1)},!0),z(T,Y)};Q(M,T=>{p(ys),n(g),P(()=>ys(n(g)))?T(w):T(N,!1)},!0),z(k,O)};Q(m,k=>{p(Lo),n(g),P(()=>Lo(n(g)))?k(y):k(x,!1)}),z(b,j)});var d=D(u,2),h=b=>{var g=ix(),j=E(g),m=E(j);Yt(E(m),{get data(){return Lm}});var y=E(D(m,2));xe(()=>tt(y,s())),z(b,g)};Q(d,b=>{s()&&b(h)}),Fn(c,b=>v(a,b),()=>n(a)),fe("keydown",c,function(b){var g=la(b),j=i[g];if(j&&b.target){b.preventDefault();var m=Vb({allElements:Array.from(n(a).querySelectorAll("button:not([disabled])")),currentElement:b.target,direction:j,hasPrio:y=>y.getAttribute("data-type")!=="jse-open-dropdown"});m&&m.focus()}}),z(e,c),et()}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1htmvf1 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1htmvf1, .jse-value.jse-array.svelte-1htmvf1 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1htmvf1 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1htmvf1 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1htmvf1 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1htmvf1 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1htmvf1 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-1htmvf1 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-1htmvf1 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-1htmvf1:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);var cx=H("<option> </option>"),ux=H("<select></select>");function um(e,t){Ke(t,!1);var r=f(t,"path",9),o=f(t,"value",9),s=f(t,"mode",9),a=f(t,"parser",9),i=f(t,"readOnly",9),l=f(t,"selection",9),c=f(t,"onPatch",9),u=f(t,"options",9),d=q(void 0,!0),h=q(o(),!0);F(()=>p(o()),()=>{v(h,o())}),F(()=>p(l()),()=>{(function(j){j&&n(d)&&n(d).focus()})(l())}),dn(),yt(!0);var b,g=ux();xe(()=>{n(h),pb(()=>{s(),a(),l(),n(d),u()})}),or(g,5,u,pr,(j,m)=>{var y=cx(),x=E(y),k={};xe(()=>{var O;tt(x,(n(m),P(()=>n(m).text))),k!==(n(m),k=P(()=>n(m).value))&&(y.value=(O=y.__value=(n(m),P(()=>n(m).value)))!==null&&O!==void 0?O:"")}),z(j,y)}),Fn(g,j=>v(d,j),()=>n(d)),xe((j,m)=>b=jt(g,1,j,"svelte-1htmvf1",b,m),[()=>(p(bl),n(h),p(s()),p(a()),P(()=>"jse-enum-value ".concat(bl(n(h),s(),a())))),()=>({"jse-selected":tn(l())})]),(function(j,m){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:m,x=new WeakSet,k=!0;dp(j,"change",O=>{var M,w=O?"[selected]":":checked";if(j.multiple)M=[].map.call(j.querySelectorAll(w),al);else{var N,T=(N=j.querySelector(w))!==null&&N!==void 0?N:j.querySelector("option:not([disabled])");M=T&&al(T)}y(M),Tn!==null&&x.add(Tn)}),Dr(()=>{var O=m();if(j===document.activeElement){var M=nl??Tn;if(x.has(M))return}if(xc(j,O,k),k&&O===void 0){var w=j.querySelector(":checked");w!==null&&(O=al(w),y(O))}j.__value=O,k=!1}),$p(j)})(g,()=>n(h),j=>v(h,j)),fe("change",g,function(j){j.stopPropagation(),i()||c()([{op:"replace",path:St(r()),value:n(h)}])}),fe("mousedown",g,function(j){j.stopPropagation()}),z(e,g),et()}function dx(e,t,r){var o=ei(e,t||{},r);return o?(function(s){if(Array.isArray(s.enum))return s.enum;var a=s.oneOf||s.anyOf||s.allOf;if(Array.isArray(a)){var i=a.filter(l=>l.enum);if(i.length>0)return i[0].enum}})(o):void 0}function ei(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:e,s=r.slice(1,r.length),a=r[0],i=[o];for(var l of[o.oneOf,o.anyOf,o.allOf])Array.isArray(l)&&(i=i.concat(l));for(var c of i){if("$ref"in(o=c)&&typeof o.$ref=="string"){var u,d=o.$ref;if(d in t)o=t[d];else{if(!d.startsWith("#/")){if(((u=d.match(/#\//g))===null||u===void 0?void 0:u.length)===1){var[h,b]=d.split("#/");if(h in t){var g=t[h],j={$ref:"#/".concat(b)},m=[];return m.push(a),s.length>0&&m.push(...s),ei(g,t,m,j)}throw Error("Unable to resolve reference ".concat(d))}throw Error("Unable to resolve reference ".concat(d))}var y=d.substring(2).split("/");for(var x of(o=e,y)){if(!(x in o))throw Error("Unable to resolve reference ".concat(d));o=o[x]}}}if(a===void 0)return o;if(typeof o.properties=="object"&&o.properties&&a in o.properties)return ei(e,t,s,o=o.properties[a]);if(typeof o.patternProperties=="object"&&o.patternProperties){for(var k in o.patternProperties)if(a.match(k))return ei(e,t,s,o=o.patternProperties[k])}if(typeof o.additionalProperties=="object")return ei(e,t,s,o=o.additionalProperties);if(typeof o.items=="object"&&o.items)return ei(e,t,s,o=o.items)}}function vx(e,t,r){var o=dx(t,r,e.path);if(o){var s=o.map(i=>({value:i,text:i})),a=o.includes(e.value)?s:[{value:e.value,text:e.value}].concat(s);return[{component:um,props:be(be({},e),{},{options:a})}]}}function fx(e){return fm(vm(e).compile(e.schema),e)}function px(e){return dm.apply(this,arguments)}function dm(){return(dm=at(function*(e){var t=vm(e);return fm(yield t.compileAsync(e.schema),e)})).apply(this,arguments)}function vm(e){var t,r,{schemaDefinitions:o,ajvOptions:s}=e,a=new Sm(be({allErrors:!0,verbose:!0,$data:!0},s));if(o&&Object.keys(o).forEach(i=>{a.addSchema(o[i],i)}),(a=(t=(r=e.onCreateAjv)===null||r===void 0?void 0:r.call(e,a))!==null&&t!==void 0?t:a).opts.verbose===!1)throw new Error("Ajv must be configured with the option verbose=true");return a}function fm(e,t){if(e.errors)throw e.errors[0];return function(r){var o;return e(r),((o=e.errors)!==null&&o!==void 0?o:[]).map(hx).map(s=>(function(a,i,l){var c,u;return{path:Xo(a,i.instancePath),message:(c=i.message)!==null&&c!==void 0?c:"Unknown error",severity:(u=l.errorSeverity)!==null&&u!==void 0?u:yo.warning}})(r,s,t))}}function hx(e){var t=void 0;if(e.keyword==="enum"&&Array.isArray(e.schema)){var r=e.schema;if(r){if((r=r.map(s=>JSON.stringify(s))).length>5){var o=["("+(r.length-5)+" more...)"];(r=r.slice(0,5)).push(o)}t="should be equal to one of: "+r.join(", ")}}return e.keyword==="additionalProperties"&&(t="should NOT have additional property: "+e.params.additionalProperty),t?be(be({},e),{},{message:t}):e}var mx={id:"jmespath",name:"JMESPath",description:`
<p>
  Enter a <a href="https://jmespath.org" target="_blank" rel="noopener noreferrer">JMESPath</a> query 
  to filter, sort, or transform the JSON data.
 To learn JMESPath, go to <a href="https://jmespath.org/tutorial.html" target="_blank" rel="noopener noreferrer">the interactive tutorial</a>.
</p>
`,createQuery:function(e,t){var{sort:r,filter:o,projection:s}=t,a="";if(o&&o.path&&o.relation&&o.value){var i=["0"].concat(o.path),l=He(e,i),c=Tl(o.value),u=typeof l=="string"&&c!=null?'"'.concat(o.value,'"'):c;a+="[? "+Gi(o.path)+" "+o.relation+" `"+u+"`]"}else a+=Array.isArray(e)?"[*]":"@";if(r&&r.path&&r.direction&&(r.direction==="desc"?a+=" | reverse(sort_by(@, &"+Gi(r.path)+"))":a+=" | sort_by(@, &"+Gi(r.path)+")"),s&&s.paths)if(a[a.length-1]!=="]"&&(a+=" | [*]"),s.paths.length===1){var d=s.paths[0];a+=d.length===0?"":"."+Gi(d)}else s.paths.length>1&&(a+=".{"+s.paths.map(h=>pm(h[h.length-1])+": "+Gi(h)).join(", ")+"}");return a},executeQuery:function(e,t,r){var o=Zc(r,JSON)?e:(function(s){var a=r.stringify(s);return a!==void 0?JSON.parse(a):void 0})(e);return Cm.search(o,t)}};function Gi(e){if(e.length===0)return"@";var t=e.map(r=>typeof r=="number"?"["+r+"]":"."+pm(String(r))).join("");return t[0]==="."?t.slice(1):t}function pm(e){return e.match(/^[A-Za-z\d_$]+$/)?e:JSON.stringify(e)}var gx={id:"jsonpath",name:"JSONPath",description:`
<p>
  Enter a <a href="https://github.com/JSONPath-Plus/JSONPath" target="_blank" 
  rel="noopener noreferrer"><code>JSONPath</code></a> expression to filter, sort, or transform the data.
</p>`,createQuery:function(e,t){var{filter:r,sort:o,projection:s}=t,a="$";if(r&&r.path&&r.relation&&r.value){var i=Tl(r.value),l=JSON.stringify(i);a+="[?(@".concat(yf(r.path)," ").concat(r.relation," ").concat(l,")]")}if(o&&o.path&&o.direction)throw new Error("Sorting is not supported by JSONPath. Please clear the sorting fields");if(s&&s.paths){if(s.paths.length>1)throw new Error("Picking multiple fields is not supported by JSONPath. Please select only one field");a.endsWith("]")||(a+="[*]"),a+="".concat(yf(s.paths[0])).replace(/^\.\.\./,"..")}return a},executeQuery:function(e,t){var r=qm({json:e,path:t});return r!==void 0?r:null}};function yf(e){var t=/^[A-z]+$/;return e.map(r=>t.test(r)?".".concat(r):JSON.stringify([r])).join("")}var bx={id:"lodash",name:"Lodash",description:`
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
  You can use <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">Lodash</a>
  functions like <code>_.map</code>, <code>_.filter</code>,
  <code>_.orderBy</code>, <code>_.sortBy</code>, <code>_.groupBy</code>,
  <code>_.pick</code>, <code>_.uniq</code>, <code>_.get</code>, etcetera.
</p>
`,createQuery:function(e,t){var{filter:r,sort:o,projection:s}=t,a=[`  return _.chain(data)
`];if(r&&r.path&&r.relation&&r.value){var i="item => item".concat(Fo(r.path)),l=Tl(r.value),c=typeof l=="string"?"'".concat(r.value,"'"):Lp(r.value)&&!Number.isSafeInteger(l)?"".concat(r.value,"n"):r.value;a.push("    .filter(".concat(i," ").concat(r.relation," ").concat(c,`)
`))}if(o&&o.path&&o.direction&&a.push("    .orderBy([".concat((function(h){return h.length===0?"":h.every(b=>eu.test(b)||Zd.test(b))?"'"+h.map(xj).join("").replace(/^\./,"")+"'":JSON.stringify(h)})(o.path),"], ['").concat(o.direction,`'])
`)),s&&s.paths)if(s.paths.length>1){var u=s.paths.map(h=>{var b=It(h)||"item";return"      ".concat(JSON.stringify(b),": item").concat(Fo(h))});a.push(`    .map(item => ({
`.concat(u.join(`,
`),`
    }))
`))}else{var d=s.paths[0];a.push("    .map(item => item".concat(Fo(d),`)
`))}return a.push(`    .value()
`),`function query (data) {
`.concat(a.join(""),"}")},executeQuery:function(e,t){(function(o){var s,a,i=(s=o.match(/_\.chain\(/g))===null||s===void 0?void 0:s.length,l=(a=o.match(/\.value\(\)/g))===null||a===void 0?void 0:a.length;if(i!==l)throw new Error("Cannot execute query: Lodash _.chain(...) must end with .value()")})(t);var r=new Function("_",`"use strict";

`+t+`

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)(Em)(e);return r!==void 0?r:null}},nc,rc,jx={id:"javascript",name:"JavaScript",description:`
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
</p>
`,createQuery:function(e,t){var{filter:r,sort:o,projection:s}=t,a=[`  return data
`];if(r&&r.path&&r.relation&&r.value){var i="item => item".concat(Fo(r.path)),l=Tl(r.value),c=typeof l=="string"?"'".concat(r.value,"'"):Lp(r.value)&&!Number.isSafeInteger(l)?"".concat(r.value,"n"):r.value;a.push("    .filter(".concat(i," ").concat(r.relation," ").concat(c,`)
`))}if(o&&o.path&&o.direction&&(o.direction==="desc"?a.push(`    .slice()
    .sort((a, b) => {
      // sort descending
`+"      const valueA = a".concat(Fo(o.path),`
`)+"      const valueB = b".concat(Fo(o.path),`
`)+`      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0
    })
`):a.push(`    .slice()
    .sort((a, b) => {
      // sort ascending
`+"      const valueA = a".concat(Fo(o.path),`
`)+"      const valueB = b".concat(Fo(o.path),`
`)+`      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0
    })
`)),s&&s.paths)if(s.paths.length>1){var u=s.paths.map(h=>{var b=h[h.length-1]||"item",g="item".concat(Fo(h));return"      ".concat(JSON.stringify(b),": ").concat(g)});a.push(`    .map(item => ({
`.concat(u.join(`,
`),`})
    )
`))}else{var d="item".concat(Fo(s.paths[0]));a.push("    .map(item => ".concat(d,`)
`))}return`function query (data) {
`.concat(a.join(""),"}")},executeQuery:function(e,t){var r=new Function(`"use strict";

`+t+`

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)()(e);return r!==void 0?r:null}};function xd(e,t){return nc||(rc=new WeakMap,nc=new ResizeObserver(r=>{for(var o of r){var s=rc.get(o.target);s&&s(o.target)}})),rc.set(e,t),nc.observe(e),{destroy:()=>{rc.delete(e),nc.unobserve(e)}}}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-10mlrw4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-10mlrw4 .jse-hidden-input-label:where(.svelte-10mlrw4) .jse-hidden-input:where(.svelte-10mlrw4) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-10mlrw4 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-search-box-container:where(.svelte-10mlrw4) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading-space:where(.svelte-10mlrw4) {
  flex: 1;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading:where(.svelte-10mlrw4) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-search-box-background:where(.svelte-10mlrw4) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var yx=H("<!> <!>",1),xx=H('<div class="jse-search-box-background svelte-10mlrw4"></div>'),wx=H('<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>',1),kx=H('<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>',1),Sx=H('<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>'),Cx=H('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function wd(e,t){Ke(t,!1);var r=q(void 0,!0),o=Ur("jsoneditor:TreeMode"),s=typeof window>"u";o("isSSR:",s);var a=bi(),i=bi(),{openAbsolutePopup:l,closeAbsolutePopup:c}=ls("absolute-popup"),u=q(void 0,!0),d=q(void 0,!0),h=q(void 0,!0),b=!1,g=Vh(),j=f(t,"readOnly",9),m=f(t,"externalContent",9),y=f(t,"externalSelection",9),x=f(t,"history",9),k=f(t,"truncateTextSize",9),O=f(t,"mainMenuBar",9),M=f(t,"navigationBar",9),w=f(t,"escapeControlCharacters",9),N=f(t,"escapeUnicodeCharacters",9),T=f(t,"parser",9),Y=f(t,"parseMemoizeOne",9),A=f(t,"validator",9),re=f(t,"validationParser",9),X=f(t,"pathParser",9),_=f(t,"indentation",9),ee=f(t,"onError",9),je=f(t,"onChange",9),te=f(t,"onChangeMode",9),Ee=f(t,"onSelect",9),De=f(t,"onUndo",9),$e=f(t,"onRedo",9),pe=f(t,"onRenderValue",9),we=f(t,"onRenderMenu",9),qe=f(t,"onRenderContextMenu",9),Ye=f(t,"onClassName",9),he=f(t,"onFocus",9),ie=f(t,"onBlur",9),me=f(t,"onSortModal",9),xt=f(t,"onTransformModal",9),an=f(t,"onJSONEditorModal",9),le=!1,W=q(!1,!0),ue=q(void 0,!0);Gd({onMount:Xr,onDestroy:Po,getWindow:()=>Pl(n(h)),hasFocus:()=>le&&document.hasFocus()||Id(n(h)),onFocus:()=>{b=!0,he()&&he()()},onBlur:()=>{b=!1,ie()&&ie()()}});var I=q(void 0,!0),se=q(void 0,!0),L=void 0,Ce=!1,Z=q(sd({json:n(I)}),!0),U=q(hl(y())?y():void 0,!0);function pt(C){v(U,C)}Xr(()=>{if(n(U)){var C=Ve(n(U));v(Z,No(n(I),n(Z),C,sl)),setTimeout(()=>er(C))}});var st,Xe=q(void 0,!0),Ct=q(void 0,!0),Te=q(void 0,!0),Ie=q(void 0,!0),it=q(!1,!0),Pe=q(!1,!0);function Et(C){v(Ie,(st=C)?qh(n(I),st.items):void 0)}function Ut(C,$){return ke.apply(this,arguments)}function ke(){return(ke=at(function*(C,$){v(Z,No(n(I),n(Z),C,sl));var oe=dr($);yield Bt(C,{element:oe})})).apply(this,arguments)}function Ue(){v(it,!1),v(Pe,!1),dt()}function Ae(C){o("select validation error",C),v(U,_t(C.path)),Bt(C.path)}function ht(C){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zc;o("expand"),v(Z,No(n(I),n(Z),C,$))}function Jt(C,$){v(Z,Bv(n(I),n(Z),C,$)),n(U)&&(function(oe,Re){return oa(Ve(oe),Re)&&(Ve(oe).length>Re.length||Mr(oe))})(n(U),C)&&v(U,void 0)}var nt=q(!1,!0),K=q([],!0),G=q(void 0,!0),wt=il(Hh);function kt(C,$,oe,Re){li(()=>{var ze;try{ze=wt(C,$,oe,Re)}catch(Oe){ze=[{path:[],message:"Failed to validate: "+Oe.message,severity:yo.warning}]}Nt(ze,n(K))||(o("validationErrors changed:",ze),v(K,ze),v(G,(function(Oe,mt){var vt;return mt.forEach(Ht=>{vt=mf(Oe,vt,Ht.path,(mn,rn)=>be(be({},rn),{},{validationError:Ht}))}),mt.forEach(Ht=>{for(var mn=Ht.path;mn.length>0;)mn=Zt(mn),vt=mf(Oe,vt,mn,(rn,Dn)=>Dn.validationError?Dn:be(be({},Dn),{},{validationError:{isChildError:!0,path:mn,message:"Contains invalid data",severity:yo.warning}}))}),vt})(C,n(K))))},ze=>o("validationErrors updated in ".concat(ze," ms")))}function jn(){return o("validate"),L?{parseError:L,isRepairable:!1}:(kt(n(I),A(),T(),re()),on(n(K))?void 0:{validationErrors:n(K)})}function Ze(){return n(I)}function At(){return n(Z)}function In(){return n(U)}function Un(C){o("applyExternalContent",{updatedContent:C}),Ci(C)?(function($){if($!==void 0){var oe=!Nt(n(I),$);if(o("update external json",{isChanged:oe,currentlyText:n(I)===void 0}),!!oe){var Re={documentState:n(Z),selection:n(U),json:n(I),text:n(se),textIsRepaired:n(nt)};v(I,$),v(Z,ho($,n(Z))),$t(n(I)),v(se,void 0),v(nt,!1),L=void 0,Cn(n(I)),$n(Re)}}})(C.json):Si(C)&&(function($){if(!($===void 0||Ci(m()))){var oe=$!==n(se);if(o("update external text",{isChanged:oe}),!!oe){var Re={documentState:n(Z),selection:n(U),json:n(I),text:n(se),textIsRepaired:n(nt)};try{v(I,Y()($)),v(Z,ho(n(I),n(Z))),$t(n(I)),v(se,$),v(nt,!1),L=void 0}catch(ze){try{v(I,Y()(Ko($))),v(Z,ho(n(I),n(Z))),$t(n(I)),v(se,$),v(nt,!0),L=void 0,Cn(n(I))}catch{v(I,void 0),v(Z,void 0),v(se,m().text),v(nt,!1),L=n(se)!==void 0&&n(se)!==""?ki(n(se),ze.message||String(ze)):void 0}}Cn(n(I)),$n(Re)}}})(C.text)}function $t(C){Ce||(Ce=!0,v(Z,Ns(C,n(Z),[])))}function Cn(C){n(U)&&(Ha(C,ns(n(U)))&&Ha(C,Ve(n(U)))||(o("clearing selection: path does not exist anymore",n(U)),v(U,Hs(C,n(Z)))))}function $n(C){if(C.json!==void 0||C.text!==void 0){var $=n(I)!==void 0&&C.json!==void 0;x().add({type:"tree",undo:{patch:$?[{op:"replace",path:"",value:C.json}]:void 0,json:C.json,text:C.text,documentState:C.documentState,textIsRepaired:C.textIsRepaired,selection:Zo(C.selection),sortedColumn:void 0},redo:{patch:$?[{op:"replace",path:"",value:n(I)}]:void 0,json:n(I),text:n(se),documentState:n(Z),textIsRepaired:n(nt),selection:Zo(n(U)),sortedColumn:void 0}})}}function nn(C,$){var oe;if(o("patch",C,$),n(I)===void 0)throw new Error("Cannot apply patch: no JSON");var Re=n(I),ze={json:void 0,text:n(se),documentState:n(Z),selection:Zo(n(U)),textIsRepaired:n(nt),sortedColumn:void 0},Oe=zh(n(I),C),mt=mh(n(I),n(Z),C),vt=(oe=zi(n(I),C))!==null&&oe!==void 0?oe:n(U),Ht=typeof $=="function"?$(mt.json,mt.documentState,vt):void 0;return v(I,Ht?.json!==void 0?Ht.json:mt.json),v(Z,Ht?.state!==void 0?Ht.state:mt.documentState),v(U,Ht?.selection!==void 0?Ht.selection:vt),v(se,void 0),v(nt,!1),v(Ct,void 0),v(Te,void 0),L=void 0,Cn(n(I)),x().add({type:"tree",undo:be({patch:Oe},ze),redo:{patch:C,json:void 0,text:n(se),documentState:n(Z),selection:Zo(n(U)),sortedColumn:void 0,textIsRepaired:n(nt)}}),{json:n(I),previousJson:Re,undo:Oe,redo:C}}function pn(){!j()&&n(U)&&v(U,Kc(Ve(n(U))))}function lt(){if(!j()&&n(U)){var C=Ve(n(U)),$=He(n(I),C);Kn($)?(function(oe,Re){o("openJSONEditorModal",{path:oe,value:Re}),le=!0,an()({content:{json:Re},path:oe,onPatch:n(hn).onPatch,onClose:()=>{le=!1,setTimeout(dt)}})})(C,$):v(U,ml(C))}}function yn(){if(!j()&&tn(n(U))){var C=Ve(n(U)),$=St(C),oe=He(n(I),C),Re=!Yo(n(I),n(Z),C),ze=Re?String(oe):Ds(String(oe),T());o("handleToggleEnforceString",{enforceString:Re,value:oe,updatedValue:ze}),ne([{op:"replace",path:$,value:ze}],(Oe,mt)=>({state:Yc(n(I),mt,C,{type:"value",enforceString:Re})}))}}function zt(){return n(nt)&&n(I)!==void 0&&ye(n(I)),n(I)!==void 0?{json:n(I)}:{text:n(se)||""}}function Le(){return sn.apply(this,arguments)}function sn(){return sn=at(function*(){var C=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield rm({json:n(I),selection:n(U),indentation:C?_():void 0,readOnly:j(),parser:T(),onPatch:ne})}),sn.apply(this,arguments)}function Dt(){return Ln.apply(this,arguments)}function Ln(){return Ln=at(function*(){var C=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(I)!==void 0&&(yield om({json:n(I),selection:n(U),indentation:C?_():void 0,parser:T()}))}),Ln.apply(this,arguments)}function Vn(C){var $;C.preventDefault(),Hn(($=C.clipboardData)===null||$===void 0?void 0:$.getData("text/plain"))}function Wn(){return ar.apply(this,arguments)}function ar(){return(ar=at(function*(){try{Hn(yield navigator.clipboard.readText())}catch(C){console.error(C),v(W,!0)}})).apply(this,arguments)}function Hn(C){C!==void 0&&am({clipboardText:C,json:n(I),selection:n(U),readOnly:j(),parser:T(),onPatch:ne,onChangeText:R,onPasteMultilineText:Rn,openRepairModal:sr})}function sr(C,$){v(ue,{text:C,onParse:oe=>Al(oe,Re=>El(Re,T())),onRepair:Zp,onApply:$,onClose:dt})}function hr(){sm({json:n(I),text:n(se),selection:n(U),keepSelection:!1,readOnly:j(),onChange:je(),onPatch:ne})}function Yn(){!j()&&n(I)!==void 0&&n(U)&&si&&!on(Ve(n(U)))&&(o("duplicate",{selection:n(U)}),ne(Sh(n(I),Ia(n(I),n(U)))))}function yr(){j()||!n(U)||!En(n(U))&&!tn(n(U))||on(Ve(n(U)))||(o("extract",{selection:n(U)}),ne(Ch(n(I),n(U)),(C,$)=>{if(Kn(C))return{state:zu(C,$,[])}}))}function ur(C){$c({insertType:C,selectInside:!0,initialValue:void 0,json:n(I),selection:n(U),readOnly:j(),parser:T(),onPatch:ne,onReplaceJson:ye})}function mr(C){Tr(n(U))&&v(U,_t(n(U).path)),n(U)||v(U,Hs(n(I),n(Z))),ur(C)}function Gn(C){if(!j()&&n(U))if(Gl(n(U)))try{var $=ns(n(U)),oe=He(n(I),$),Re=(function(Oe,mt,vt){if(mt==="array"){if(Array.isArray(Oe))return Oe;if(Qt(Oe))return Iv(Oe);if(typeof Oe=="string")try{var Ht=vt.parse(Oe);if(Array.isArray(Ht))return Ht;if(Qt(Ht))return Iv(Ht)}catch{return[Oe]}return[Oe]}if(mt==="object"){if(Array.isArray(Oe))return Nv(Oe);if(Qt(Oe))return Oe;if(typeof Oe=="string")try{var mn=vt.parse(Oe);if(Qt(mn))return mn;if(Array.isArray(mn))return Nv(mn)}catch{return{value:Oe}}return{value:Oe}}if(mt==="value")return Kn(Oe)?vt.stringify(Oe):Oe;throw new Error("Cannot convert ".concat(Hc(Oe,vt)," to ").concat(mt))})(oe,C,T());if(Re===oe)return;var ze=[{op:"replace",path:St($),value:Re}];o("handleConvert",{selection:n(U),path:$,type:C,operations:ze}),ne(ze,(Oe,mt)=>({state:n(U)?Ns(Oe,mt,Ve(n(U))):n(Z)}))}catch(Oe){ee()(Oe)}else ee()(new Error("Cannot convert current selection to ".concat(C)))}function de(){if(n(U)){var C=Hv(n(I),n(Z),n(U),!1),$=Zt(Ve(n(U)));C&&!on(Ve(C))&&Nt($,Zt(Ve(C)))?v(U,aa(Ve(C))):v(U,ua($)),o("insert before",{selection:n(U),selectionBefore:C,parentPath:$}),Bn(),Gt()}}function Pt(){if(n(U)){var C=Aa(n(I),n(U));o("insert after",C),v(U,aa(C)),Bn(),Gt()}}function vn(C){return An.apply(this,arguments)}function An(){return(An=at(function*(C){yield im({char:C,selectInside:!0,json:n(I),selection:n(U),readOnly:j(),parser:T(),onPatch:ne,onReplaceJson:ye,onSelect:pt})})).apply(this,arguments)}function ir(){if(!j()&&x().canUndo){var C=x().undo();if(vl(C)){var $={json:n(I),text:n(se)};v(I,C.undo.patch?ea(n(I),C.undo.patch):C.undo.json),v(Z,C.undo.documentState),v(U,C.undo.selection),v(se,C.undo.text),v(nt,C.undo.textIsRepaired),L=void 0,o("undo",{item:C,json:n(I),documentState:n(Z),selection:n(U)}),J($,C.undo.patch&&C.redo.patch?{json:n(I),previousJson:$.json,redo:C.undo.patch,undo:C.redo.patch}:void 0),dt(),n(U)&&Bt(Ve(n(U)),{scrollToWhenVisible:!1})}else De()(C)}}function Or(){if(!j()&&x().canRedo){var C=x().redo();if(vl(C)){var $={json:n(I),text:n(se)};v(I,C.redo.patch?ea(n(I),C.redo.patch):C.redo.json),v(Z,C.redo.documentState),v(U,C.redo.selection),v(se,C.redo.text),v(nt,C.redo.textIsRepaired),L=void 0,o("redo",{item:C,json:n(I),documentState:n(Z),selection:n(U)}),J($,C.undo.patch&&C.redo.patch?{json:n(I),previousJson:$.json,redo:C.redo.patch,undo:C.undo.patch}:void 0),dt(),n(U)&&Bt(Ve(n(U)),{scrollToWhenVisible:!1})}else $e()(C)}}function Wt(C){var $;j()||n(I)===void 0||(le=!0,me()({id:a,json:n(I),rootPath:C,onSort:($=at(function*(oe){var{operations:Re}=oe;o("onSort",C,Re),ne(Re,(ze,Oe)=>({state:zu(ze,Oe,C),selection:_t(C)}))}),function(oe){return $.apply(this,arguments)}),onClose:()=>{le=!1,setTimeout(dt)}}))}function gr(){n(U)&&Wt(Qv(n(I),n(U)))}function Wr(){Wt([])}function Xn(C){if(n(I)!==void 0){var{id:$,onTransform:oe,onClose:Re}=C,ze=C.rootPath||[];le=!0,xt()({id:$||i,json:n(I),rootPath:ze,onTransform:Oe=>{oe?oe({operations:Oe,json:n(I),transformedJson:ea(n(I),Oe)}):(o("onTransform",ze,Oe),ne(Oe,(mt,vt)=>({state:zu(mt,vt,ze),selection:_t(ze)})))},onClose:()=>{le=!1,setTimeout(dt),Re&&Re()}})}}function $r(){n(U)&&Xn({rootPath:Qv(n(I),n(U))})}function Pn(){Xn({rootPath:[]})}function Bt(C){return Mt.apply(this,arguments)}function Mt(){return Mt=at(function*(C){var{scrollToWhenVisible:$=!0,element:oe}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};v(Z,No(n(I),n(Z),C,sl));var Re=oe??Mn(C);if(o("scrollTo",{path:C,elem:Re,refContents:n(u)}),!Re||!n(u))return Promise.resolve();var ze=n(u).getBoundingClientRect(),Oe=Re.getBoundingClientRect();if(!$&&Oe.bottom>ze.top&&Oe.top<ze.bottom)return Promise.resolve();var mt=-ze.height/4;return new Promise(vt=>{g(Re,{container:n(u),offset:mt,duration:300,callback:()=>vt()})})}),Mt.apply(this,arguments)}function Mn(C){var $,oe;return Bn(),($=(oe=n(u))===null||oe===void 0?void 0:oe.querySelector('div[data-path="'.concat(uc(C),'"]')))!==null&&$!==void 0?$:void 0}function dr(C){var $,oe;return Bn(),($=(oe=n(u))===null||oe===void 0?void 0:oe.querySelector('span[data-search-result-index="'.concat(C,'"]')))!==null&&$!==void 0?$:void 0}function er(C){var $=Mn(C);if($&&n(u)){var oe=n(u).getBoundingClientRect(),Re=$.getBoundingClientRect(),ze=Kn(He(n(I),C))?20:Re.height;Re.top<oe.top+20?g($,{container:n(u),offset:-20,duration:0}):Re.top+ze>oe.bottom-20&&g($,{container:n(u),offset:-(oe.height-ze-20),duration:0})}}function J(C,$){if(C.json!==void 0||C?.text!==void 0){if(n(se)!==void 0){var oe,Re={text:n(se),json:void 0};(oe=je())===null||oe===void 0||oe(Re,C,{contentErrors:jn(),patchResult:$})}else if(n(I)!==void 0){var ze,Oe={text:void 0,json:n(I)};(ze=je())===null||ze===void 0||ze(Oe,C,{contentErrors:jn(),patchResult:$})}}}function ne(C,$){o("handlePatch",C,$);var oe={json:n(I),text:n(se)},Re=nn(C,$);return J(oe,Re),Re}function ye(C,$){var oe={json:n(I),text:n(se)},Re={documentState:n(Z),selection:n(U),json:n(I),text:n(se),textIsRepaired:n(nt)},ze=No(n(I),ho(C,n(Z)),[],ai),Oe=typeof $=="function"?$(C,ze,n(U)):void 0;v(I,Oe?.json!==void 0?Oe.json:C),v(Z,Oe?.state!==void 0?Oe.state:ze),v(U,Oe?.selection!==void 0?Oe.selection:n(U)),v(se,void 0),v(nt,!1),L=void 0,Cn(n(I)),$n(Re),J(oe,void 0)}function R(C,$){o("handleChangeText");var oe={json:n(I),text:n(se)},Re={documentState:n(Z),selection:n(U),json:n(I),text:n(se),textIsRepaired:n(nt)};try{v(I,Y()(C)),v(Z,No(n(I),ho(n(I),n(Z)),[],ai)),v(se,void 0),v(nt,!1),L=void 0}catch(Oe){try{v(I,Y()(Ko(C))),v(Z,No(n(I),ho(n(I),n(Z)),[],ai)),v(se,C),v(nt,!0),L=void 0}catch{v(I,void 0),v(Z,sd({json:n(I),expand:ai})),v(se,C),v(nt,!1),L=n(se)!==""?ki(n(se),Oe.message||String(Oe)):void 0}}if(typeof $=="function"){var ze=$(n(I),n(Z),n(U));v(I,ze?.json!==void 0?ze.json:n(I)),v(Z,ze?.state!==void 0?ze.state:n(Z)),v(U,ze?.selection!==void 0?ze.selection:n(U))}Cn(n(I)),$n(Re),J(oe,void 0)}function V(C,$){var oe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:C,expanded:$,recursive:oe}),$?ht(C,oe?Gc:zc):Jt(C,oe),dt()}function ce(){V([],!0,!0)}function Me(){V([],!1,!0)}function Fe(C){o("openFind",{findAndReplace:C}),v(it,!1),v(Pe,!1),Bn(),v(it,!0),v(Pe,C)}function Qe(C,$){o("handleExpandSection",C,$),v(Z,(function(oe,Re,ze,Oe){return Oi(oe,Re,ze,(mt,vt)=>{if(!Pr(vt))return vt;var Ht=uh(vt.visibleSections.concat(Oe));return be(be({},vt),{},{visibleSections:Ht})})})(n(I),n(Z),C,$))}function rt(C){o("pasted json as text",C),v(Ct,C)}function Rn(C){o("pasted multiline text",{pastedText:C}),v(Te,C)}function Ft(C){var $,{anchor:oe,left:Re,top:ze,width:Oe,height:mt,offsetTop:vt,offsetLeft:Ht,showTip:mn}=C,rn=(function(zn){var{json:nr,documentState:gn,selection:ot,readOnly:en,onEditKey:bt,onEditValue:Ge,onToggleEnforceString:qt,onCut:lr,onCopy:qn,onPaste:rr,onRemove:fr,onDuplicate:_r,onExtract:va,onInsertBefore:lo,onInsert:Ro,onConvert:_o,onInsertAfter:To,onSort:Kr,onTransform:Br}=zn,co=nr!==void 0,fa=!!ot,uo=!!ot&&on(Ve(ot)),bn=ot?He(nr,Ve(ot)):void 0,wr=Array.isArray(bn)?"Edit array":Qt(bn)?"Edit object":"Edit value",kr=co&&(En(ot)||Tr(ot)||tn(ot)),us=ot&&!uo?He(nr,Zt(Ve(ot))):void 0,Js=!en&&co&&qc(ot)&&!uo&&!Array.isArray(us),ds=!en&&co&&ot!==void 0&&qc(ot),$i=ds&&!Kn(bn),Ws=!en&&kr,Di=kr,su=!en&&fa,iu=!en&&co&&kr&&!uo,lu=!en&&co&&ot!==void 0&&(En(ot)||tn(ot))&&!uo,Bo=kr,vs=Bo?"Convert to:":"Insert:",Sr=!en&&(Mr(ot)&&Array.isArray(bn)||oo(ot)&&Array.isArray(us)),xo=!en&&(Bo?Gl(ot)&&!Qt(bn):fa),Ji=!en&&(Bo?Gl(ot)&&!Array.isArray(bn):fa),Wi=!en&&(Bo?Gl(ot)&&Kn(bn):fa),fs=ot!==void 0&&Yo(nr,gn,Ve(ot));function Lr(_i){kr?_i!=="structure"&&_o(_i):Ro(_i)}return[{type:"row",items:[{type:"button",onClick:()=>bt(),icon:ci,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!Js},{type:"dropdown-button",main:{type:"button",onClick:()=>Ge(),icon:ci,text:wr,title:"Edit the value (Double-click on the value)",disabled:!ds},width:"11em",items:[{type:"button",icon:ci,text:wr,title:"Edit the value (Double-click on the value)",onClick:()=>Ge(),disabled:!ds},{type:"button",icon:fs?Mf:Of,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>qt(),disabled:!$i}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>lr(!0),icon:ui,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!Ws},width:"10em",items:[{type:"button",icon:ui,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>lr(!0),disabled:!Ws},{type:"button",icon:ui,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>lr(!1),disabled:!Ws}]},{type:"dropdown-button",main:{type:"button",onClick:()=>qn(!0),icon:Va,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Di},width:"12em",items:[{type:"button",icon:Va,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>qn(!0),disabled:!Di},{type:"button",icon:Va,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>qn(!1),disabled:!Di}]},{type:"button",onClick:()=>rr(),icon:zf,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!su}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>_r(),icon:qf,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!iu},{type:"button",onClick:()=>va(),icon:$m,text:"Extract",title:"Extract selected contents",disabled:!lu},{type:"button",onClick:()=>Kr(),icon:pc,text:"Sort",title:"Sort array or object contents",disabled:en||!kr},{type:"button",onClick:()=>Br(),icon:hc,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:en||!kr},{type:"button",onClick:()=>fr(),icon:$u,text:"Remove",title:"Remove selected contents (Delete)",disabled:en||!kr}]},{type:"column",items:[{type:"label",text:vs},{type:"button",onClick:()=>Lr("structure"),icon:Bo?$l:ti,text:"Structure",title:vs+" structure like the first item in the array",disabled:!Sr},{type:"button",onClick:()=>Lr("object"),icon:Bo?$l:ti,text:"Object",title:vs+" object",disabled:!xo},{type:"button",onClick:()=>Lr("array"),icon:Bo?$l:ti,text:"Array",title:vs+" array",disabled:!Ji},{type:"button",onClick:()=>Lr("value"),icon:Bo?$l:ti,text:"Value",title:vs+" value",disabled:!Wi}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>lo(),icon:Dm,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:en||!kr||uo},{type:"button",onClick:()=>To(),icon:Jm,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:en||!kr||uo}]}]})({json:n(I),documentState:n(Z),selection:n(U),readOnly:j(),onEditKey:pn,onEditValue:lt,onToggleEnforceString:yn,onCut:Le,onCopy:Dt,onPaste:Wn,onRemove:hr,onDuplicate:Yn,onExtract:yr,onInsertBefore:de,onInsert:mr,onInsertAfter:Pt,onConvert:Gn,onSort:gr,onTransform:$r}),Dn=($=qe()(rn))!==null&&$!==void 0?$:rn;if(Dn!==!1){var gt={left:Re,top:ze,offsetTop:vt,offsetLeft:Ht,width:Oe,height:mt,anchor:oe,closeOnOuterClick:!0,onClose:()=>{le=!1,dt()}};le=!0;var tr=l(cm,{tip:mn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Dn,onRequestClose:()=>c(tr)},gt)}}function Gt(C){if(!Ar(n(U)))if(C&&(C.stopPropagation(),C.preventDefault()),C&&C.type==="contextmenu"&&C.target!==n(d))Ft({left:C.clientX,top:C.clientY,width:Ca,height:Sa,showTip:!1});else{var $,oe=($=n(u))===null||$===void 0?void 0:$.querySelector(".jse-context-menu-pointer.jse-selected");if(oe)Ft({anchor:oe,offsetTop:2,width:Ca,height:Sa,showTip:!1});else{var Re,ze=(Re=n(u))===null||Re===void 0?void 0:Re.getBoundingClientRect();ze&&Ft({top:ze.top+2,left:ze.left+2,width:Ca,height:Sa,showTip:!1})}}}function Ot(C){Ft({anchor:ah(C.target,"BUTTON"),offsetTop:0,width:Ca,height:Sa,showTip:!0})}function Lt(){return zr.apply(this,arguments)}function zr(){return(zr=at(function*(){if(o("apply pasted json",n(Ct)),n(Ct)){var{onPasteAsJson:C}=n(Ct);v(Ct,void 0),C(),setTimeout(dt)}})).apply(this,arguments)}function ut(){return un.apply(this,arguments)}function un(){return(un=at(function*(){o("apply pasted multiline text",n(Te)),n(Te)&&(Hn(JSON.stringify(n(Te))),setTimeout(dt))})).apply(this,arguments)}function Xt(){o("clear pasted json"),v(Ct,void 0),dt()}function ln(){o("clear pasted multiline text"),v(Te,void 0),dt()}function _n(){te()(jr.text)}function xn(C){v(U,C),dt(),Bt(Ve(C))}function dt(){o("focus"),n(d)&&(n(d).focus(),n(d).select())}function xr(C){return(function($,oe,Re){var ze=Zt(Re),Oe=[It(Re)],mt=He($,ze),vt=mt?Ou(mt,oe,Oe):void 0;return vt?_t(ze.concat(vt)):aa(Re)})(n(I),n(Z),C)}function vr(C){n(r)&&n(r).onDrag(C)}function qr(){n(r)&&n(r).onDragEnd()}var hn=q(void 0,!0);F(()=>n(U),()=>{var C;C=n(U),Nt(C,y())||(o("onSelect",C),Ee()(C))}),F(()=>(p(w()),p(N())),()=>{v(Xe,Td({escapeControlCharacters:w(),escapeUnicodeCharacters:N()}))}),F(()=>n(it),()=>{(function(C){n(u)&&C&&n(u).scrollTop===0&&(mo(u,n(u).style.overflowAnchor="none"),mo(u,n(u).scrollTop+=tl),setTimeout(()=>{n(u)&&mo(u,n(u).style.overflowAnchor="")}))})(n(it))}),F(()=>p(m()),()=>{Un(m())}),F(()=>p(y()),()=>{(function(C){Nt(n(U),C)||(o("applyExternalSelection",{selection:n(U),externalSelection:C}),hl(C)&&v(U,C))})(y())}),F(()=>(n(I),p(A()),p(T()),p(re())),()=>{kt(n(I),A(),T(),re())}),F(()=>(n(u),hf),()=>{v(r,n(u)?hf(n(u)):void 0)}),F(()=>(p(j()),p(k()),p(T()),n(Xe),p(pe()),p(Ye())),()=>{v(hn,{mode:jr.tree,readOnly:j(),truncateTextSize:k(),parser:T(),normalization:n(Xe),getJson:Ze,getDocumentState:At,getSelection:In,findElement:Mn,findNextInside:xr,focus:dt,onPatch:ne,onInsert:ur,onExpand:V,onSelect:pt,onFind:Fe,onExpandSection:Qe,onPasteJson:rt,onRenderValue:pe(),onContextMenu:Ft,onClassName:Ye()||(()=>{}),onDrag:vr,onDragEnd:qr})}),F(()=>n(hn),()=>{o("context changed",n(hn))}),dn();var On={expand:ht,collapse:Jt,validate:jn,getJson:Ze,patch:nn,acceptAutoRepair:zt,openTransformModal:Xn,scrollTo:Bt,findElement:Mn,findSearchResult:dr,focus:dt};yt(!0);var br=Cx();fe("mousedown",za,function(C){!Ui(C.target,$=>$===n(h))&&Ar(n(U))&&(o("click outside the editor, exit edit mode"),v(U,Zo(n(U))),b&&n(d)&&(n(d).focus(),n(d).blur()),o("blur (outside editor)"),n(d)&&n(d).blur())});var S,B=We(br),ve=E(B),Se=C=>{(function($,oe){Ke(oe,!1);var Re=q(void 0,!0),ze=q(void 0,!0),Oe=q(void 0,!0),mt=f(oe,"json",9),vt=f(oe,"selection",9),Ht=f(oe,"readOnly",9),mn=f(oe,"showSearch",13,!1),rn=f(oe,"history",9),Dn=f(oe,"onExpandAll",9),gt=f(oe,"onCollapseAll",9),tr=f(oe,"onUndo",9),zn=f(oe,"onRedo",9),nr=f(oe,"onSort",9),gn=f(oe,"onTransform",9),ot=f(oe,"onContextMenu",9),en=f(oe,"onCopy",9),bt=f(oe,"onRenderMenu",9);function Ge(){mn(!mn())}var qt=q(void 0,!0),lr=q(void 0,!0),qn=q(void 0,!0),rr=q(void 0,!0);F(()=>p(mt()),()=>{v(Re,mt()!==void 0)}),F(()=>(n(Re),p(vt()),tn),()=>{v(ze,n(Re)&&(En(vt())||Tr(vt())||tn(vt())))}),F(()=>(p(Dn()),p(mt())),()=>{v(qt,{type:"button",icon:Gh,title:"Expand all",className:"jse-expand-all",onClick:Dn(),disabled:!Kn(mt())})}),F(()=>(p(gt()),p(mt())),()=>{v(lr,{type:"button",icon:Xh,title:"Collapse all",className:"jse-collapse-all",onClick:gt(),disabled:!Kn(mt())})}),F(()=>p(mt()),()=>{v(qn,{type:"button",icon:Jc,title:"Search (Ctrl+F)",className:"jse-search",onClick:Ge,disabled:mt()===void 0})}),F(()=>(p(Ht()),n(qt),n(lr),p(nr()),p(mt()),p(gn()),n(qn),p(ot()),p(tr()),p(rn()),p(zn()),p(en()),n(ze)),()=>{v(rr,Ht()?[n(qt),n(lr),{type:"separator"},{type:"button",icon:Va,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:en(),disabled:!n(ze)},{type:"separator"},n(qn),{type:"space"}]:[n(qt),n(lr),{type:"separator"},{type:"button",icon:pc,title:"Sort",className:"jse-sort",onClick:nr(),disabled:Ht()||mt()===void 0},{type:"button",icon:hc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:gn(),disabled:Ht()||mt()===void 0},n(qn),{type:"button",icon:Ef,title:Dd,className:"jse-contextmenu",onClick:ot()},{type:"separator"},{type:"button",icon:kd,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:tr(),disabled:!rn().canUndo},{type:"button",icon:Sd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:zn(),disabled:!rn().canRedo},{type:"space"}])}),F(()=>(p(bt()),n(rr)),()=>{v(Oe,bt()(n(rr))||n(rr))}),dn(),yt(!0),au($,{get items(){return n(Oe)}}),et()})(C,{get json(){return n(I)},get selection(){return n(U)},get readOnly(){return j()},get history(){return x()},onExpandAll:ce,onCollapseAll:Me,onUndo:ir,onRedo:Or,onSort:Wr,onTransform:Pn,onContextMenu:Ot,onCopy:Dt,get onRenderMenu(){return we()},get showSearch(){return n(it)},set showSearch($){v(it,$)},$$legacy:!0})};Q(ve,C=>{O()&&C(Se)});var ae=D(ve,2),Ne=C=>{Wy(C,{get json(){return n(I)},get selection(){return n(U)},onSelect:xn,get onError(){return ee()},get pathParser(){return X()}})};Q(ae,C=>{M()&&C(Ne)});var Je=D(ae,2),Be=C=>{var $=kx(),oe=We($),Re=E(oe);Re.readOnly=!0,Fn(Re,vt=>v(d,vt),()=>n(d));var ze=D(oe,2),Oe=vt=>{var Ht=Tt(),mn=We(Ht),rn=gt=>{(function(tr,zn){function nr(qt){qt.stopPropagation(),zn.onCreateObject()}function gn(qt){qt.stopPropagation(),zn.onCreateArray()}Ke(zn,!0);var ot=zy();ot.__click=()=>zn.onClick();var en=D(E(ot),2),bt=D(E(en),2),Ge=qt=>{var lr=Oy(),qn=D(We(lr),2);fn(qn,"title","Create an empty JSON object (press '{')"),qn.__click=nr;var rr=D(qn,2);fn(rr,"title","Create an empty JSON array (press '[')"),rr.__click=gn,z(qt,lr)};Q(bt,qt=>{zn.readOnly||qt(Ge)}),z(tr,ot),et()})(gt,{get readOnly(){return j()},onCreateObject:()=>{dt(),vn("{")},onCreateArray:()=>{dt(),vn("[")},onClick:()=>{dt()}})},Dn=gt=>{var tr=yx(),zn=We(tr),nr=_e(()=>j()?[]:[{icon:mc,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:_n}]);jo(zn,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(nr)}}),lm(D(zn,2),{get text(){return n(se)},get json(){return n(I)},get indentation(){return _()},get parser(){return T()}}),z(gt,tr)};Q(mn,gt=>{n(se)===""||n(se)===void 0?gt(rn):gt(Dn,!1)}),z(vt,Ht)},mt=vt=>{var Ht=wx(),mn=We(Ht);em(E(mn),{get json(){return n(I)},get documentState(){return n(Z)},get parser(){return T()},get showSearch(){return n(it)},get showReplace(){return n(Pe)},get readOnly(){return j()},columns:void 0,onSearch:Et,onFocus:Ut,onPatch:ne,onClose:Ue});var rn=D(mn,2);fn(rn,"data-jsoneditor-scrollable-contents",!0);var Dn=E(rn),gt=bt=>{z(bt,xx())};Q(Dn,bt=>{n(it)&&bt(gt)}),hd(D(Dn,2),{get value(){return n(I)},pointer:"",get state(){return n(Z)},get validationErrors(){return n(G)},get searchResults(){return n(Ie)},get selection(){return n(U)},get context(){return n(hn)},get onDragSelectionStart(){return Cr}}),Fn(rn,bt=>v(u,bt),()=>n(u));var tr=D(rn,2),zn=bt=>{var Ge=_e(()=>(n(Ct),P(()=>"You pasted a JSON ".concat(Array.isArray(n(Ct).contents)?"array":"object"," as text")))),qt=_e(()=>[{icon:rs,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Lt},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:Xt}]);jo(bt,{type:"info",get message(){return n(Ge)},get actions(){return n(qt)}})};Q(tr,bt=>{n(Ct)&&bt(zn)});var nr=D(tr,2),gn=bt=>{var Ge=_e(()=>[{icon:rs,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:ut},{text:"Leave as is",title:"Keep the pasted array",onClick:ln}]);jo(bt,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(Ge)}})};Q(nr,bt=>{n(Te)&&bt(gn)});var ot=D(nr,2),en=bt=>{var Ge=_e(()=>j()?[]:[{icon:Cd,text:"Ok",title:"Accept the repaired document",onClick:zt},{icon:mc,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:_n}]);jo(bt,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(Ge)},onClose:dt})};Q(ot,bt=>{n(nt)&&bt(en)}),Xd(D(ot,2),{get validationErrors(){return n(K)},selectError:Ae}),z(vt,Ht)};Q(ze,vt=>{n(I)===void 0?vt(Oe):vt(mt,!1)}),fe("paste",Re,Vn),z(C,$)},Rt=C=>{z(C,Sx())};Q(Je,C=>{s?C(Rt,!1):C(Be)}),Fn(B,C=>v(h,C),()=>n(h));var Kt=D(B,2),Vt=C=>{Zh(C,{onClose:()=>v(W,!1)})};Q(Kt,C=>{n(W)&&C(Vt)});var Zn=D(Kt,2),Er=C=>{Qh(C,ts(()=>n(ue),{onClose:()=>{var $;($=n(ue))===null||$===void 0||$.onClose(),v(ue,void 0)}}))};return Q(Zn,C=>{n(ue)&&C(Er)}),xe(()=>S=jt(B,1,"jse-tree-mode svelte-10mlrw4",null,S,{"no-main-menu":!O()})),fe("keydown",B,function(C){var $=la(C),oe=C.shiftKey;if(o("keydown",{combo:$,key:C.key}),$==="Ctrl+X"&&(C.preventDefault(),Le(!0)),$==="Ctrl+Shift+X"&&(C.preventDefault(),Le(!1)),$==="Ctrl+C"&&(C.preventDefault(),Dt(!0)),$==="Ctrl+Shift+C"&&(C.preventDefault(),Dt(!1)),$==="Ctrl+D"&&(C.preventDefault(),Yn()),$!=="Delete"&&$!=="Backspace"||(C.preventDefault(),hr()),$==="Insert"&&(C.preventDefault(),ur("structure")),$==="Ctrl+A"&&(C.preventDefault(),v(U,_t([]))),$==="Ctrl+Q"&&Gt(C),$==="ArrowUp"||$==="Shift+ArrowUp"){C.preventDefault();var Re=n(U)?Hv(n(I),n(Z),n(U),oe)||n(U):Hs(n(I),n(Z));v(U,Re),er(Ve(Re))}if($==="ArrowDown"||$==="Shift+ArrowDown"){C.preventDefault();var ze=n(U)?(function(rn,Dn,gt){var tr=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(gt){var zn=tr?Ve(gt):Aa(rn,gt),nr=Kn(He(rn,zn))?Bv(rn,Dn,zn,!0):Dn,gn=Ou(rn,Dn,zn),ot=Ou(rn,nr,zn);if(tr)return Mr(gt)?gn!==void 0?Zr(gn,gn):void 0:oo(gt)?ot!==void 0?Zr(ot,ot):void 0:ot!==void 0?Zr(ns(gt),ot):void 0;if(oo(gt))return ot!==void 0?_t(ot):void 0;if(Mr(gt)||tn(gt))return gn!==void 0?_t(gn):void 0;if(Tr(gt)){if(gn===void 0||gn.length===0)return;var en=Zt(gn),bt=He(rn,en);return Array.isArray(bt)?_t(gn):ca(gn)}return En(gt)?ot!==void 0?_t(ot):gn!==void 0?_t(gn):void 0:void 0}})(n(I),n(Z),n(U),oe)||n(U):Hs(n(I),n(Z));v(U,ze),er(Ve(ze))}if($==="ArrowLeft"||$==="Shift+ArrowLeft"){C.preventDefault();var Oe=n(U)?(function(rn,Dn,gt){var tr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],zn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(gt){var{caret:nr,previous:gn}=Zv(rn,Dn,gt,zn);if(tr)return En(gt)?void 0:Zr(gt.path,gt.path);if(nr&&gn)return id(gn);var ot=Zt(Ve(gt)),en=He(rn,ot);return tn(gt)&&Array.isArray(en)?Zr(gt.path,gt.path):En(gt)&&!Array.isArray(en)?ca(gt.focusPath):void 0}})(n(I),n(Z),n(U),oe,!j())||n(U):Hs(n(I),n(Z));v(U,Oe),er(Ve(Oe))}if($==="ArrowRight"||$==="Shift+ArrowRight"){C.preventDefault();var mt=n(U)&&n(I)!==void 0?(function(rn,Dn,gt){var tr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],zn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(gt){var{caret:nr,next:gn}=Zv(rn,Dn,gt,zn);return tr?En(gt)?void 0:Zr(gt.path,gt.path):nr&&gn?id(gn):En(gt)?_t(gt.focusPath):void 0}})(n(I),n(Z),n(U),oe,!j())||n(U):Hs(n(I),n(Z));v(U,mt),er(Ve(mt))}if($==="Enter"&&n(U)){if(Xc(n(U))){var vt=n(U).focusPath,Ht=He(n(I),Zt(vt));Array.isArray(Ht)&&(C.preventDefault(),v(U,_t(vt)))}Tr(n(U))&&(C.preventDefault(),v(U,be(be({},n(U)),{},{edit:!0}))),tn(n(U))&&(C.preventDefault(),Kn(He(n(I),n(U).path))?V(n(U).path,!0):v(U,be(be({},n(U)),{},{edit:!0})))}if($.replace(/^Shift\+/,"").length===1&&n(U))return C.preventDefault(),void vn(C.key);if($==="Enter"&&(oo(n(U))||Mr(n(U))))return C.preventDefault(),void vn("");if($==="Ctrl+Enter"&&tn(n(U))){var mn=He(n(I),n(U).path);ql(mn)&&window.open(String(mn),"_blank")}$==="Escape"&&n(U)&&(C.preventDefault(),v(U,void 0)),$==="Ctrl+F"&&(C.preventDefault(),Fe(!1)),$==="Ctrl+H"&&(C.preventDefault(),Fe(!0)),$==="Ctrl+Z"&&(C.preventDefault(),ir()),$==="Ctrl+Shift+Z"&&(C.preventDefault(),Or())}),fe("mousedown",B,function(C){o("handleMouseDown",C);var $=C.target;oh($,"BUTTON")||$.isContentEditable||(dt(),n(U)||n(I)!==void 0||n(se)!==""&&n(se)!==void 0||(o("createDefaultSelection"),v(U,_t([]))))}),fe("contextmenu",B,Gt),z(e,br),ct(t,"expand",ht),ct(t,"collapse",Jt),ct(t,"validate",jn),ct(t,"getJson",Ze),ct(t,"patch",nn),ct(t,"acceptAutoRepair",zt),ct(t,"openTransformModal",Xn),ct(t,"scrollTo",Bt),ct(t,"findElement",Mn),ct(t,"findSearchResult",dr),ct(t,"focus",dt),et(On)}function hm(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(r,o,s)=>hm(Reflect.get(r,o,s)),set:()=>!1,deleteProperty:()=>!1});var t}var oc=Ur("jsoneditor:History");function mm(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,r=[],o=0;function s(){return o<r.length}function a(){return o>0}function i(){return{canUndo:s(),canRedo:a(),items:()=>r.slice().reverse(),add:c,undo:d,redo:h,clear:u}}function l(){e.onChange&&e.onChange(i())}function c(b){oc("add",b),r=[b].concat(r.slice(o)).slice(0,t),o=0,l()}function u(){oc("clear"),r=[],o=0,l()}function d(){if(s()){var b=r[o];return o+=1,oc("undo",b),l(),b}}function h(){if(a())return oc("redo",r[o-=1]),l(),r[o]}return{get:i}}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-lta8xm {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .query-error:where(.svelte-lta8xm) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data.jse-hide:where(.svelte-lta8xm) {
  flex: none;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents.jse-hide-original-data:where(.svelte-lta8xm) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm),
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
    flex: unset;
  }
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) button:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm),
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):focus,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):read-only,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-preview.jse-error:where(.svelte-lta8xm) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-lta8xm a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var Xi=Vc(()=>wj),Qs=Vc(()=>kj),Mx=H('<div class="query-error svelte-lta8xm"> </div>'),Ox=H("<!> <!>",1),zx=H('<div class="jse-preview jse-error svelte-lta8xm"> </div>'),qx=H('<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"><!></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>',1),Ex=H('<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>');function Ax(e,t){var r,o,s;Ke(t,!1);var a=Ur("jsoneditor:TransformModal"),i=f(t,"id",25,()=>"transform-modal-"+oi()),l=f(t,"json",9),c=f(t,"rootPath",25,()=>[]),u=f(t,"indentation",9),d=f(t,"truncateTextSize",9),h=f(t,"escapeControlCharacters",9),b=f(t,"escapeUnicodeCharacters",9),g=f(t,"parser",9),j=f(t,"parseMemoizeOne",9),m=f(t,"validationParser",9),y=f(t,"pathParser",9),x=f(t,"queryLanguages",9),k=f(t,"queryLanguageId",13),O=f(t,"onChangeQueryLanguage",9),M=f(t,"onRenderValue",9),w=f(t,"onRenderMenu",9),N=f(t,"onRenderContextMenu",9),T=f(t,"onClassName",9),Y=f(t,"onTransform",9),A=f(t,"onClose",9),re=q(void 0,!0),X=q(mm({onChange:Z=>v(X,Z)}).get(),!0),_=q(void 0,!0),ee=q(void 0,!0),je=q(!1,!0),te="".concat(i(),":").concat(St(c())),Ee=(r=Xi()[te])!==null&&r!==void 0?r:{},De=q(Qs().showWizard!==!1,!0),$e=q(Qs().showOriginal!==!1,!0),pe=q((o=Ee.queryOptions)!==null&&o!==void 0?o:{},!0),we=q(k()===Ee.queryLanguageId&&Ee.query?Ee.query:"",!0),qe=q((s=Ee.isManual)!==null&&s!==void 0&&s,!0),Ye=q(void 0,!0),he=q(void 0,!0),ie=q({text:""},!0);function me(Z){var U;return(U=x().find(pt=>pt.id===Z))!==null&&U!==void 0?U:x()[0]}function xt(Z){try{v(pe,Z),v(we,me(k()).createQuery(n(_),Z)),v(Ye,void 0),v(qe,!1),a("updateQueryByWizard",{queryOptions:n(pe),query:n(we),isManual:n(qe)})}catch(U){v(Ye,String(U))}}function an(Z){v(we,Z.target.value),v(qe,!0),a("handleChangeQuery",{query:n(we),isManual:n(qe)})}n(qe)||xt(n(pe)),Xr(()=>{var Z;(Z=n(re))===null||Z===void 0||Z.focus()});var le=fc(function(Z,U){if(Z===void 0)return v(ie,{text:""}),void v(he,"Error: No JSON");if(U.trim()!=="")try{a("previewTransform",{query:U});var pt=me(k()).executeQuery(Z,U,g());v(ie,{json:pt}),v(he,void 0)}catch(st){v(ie,{text:""}),v(he,String(st))}else v(ie,{json:Z})},300);function W(){if(n(_)===void 0)return v(ie,{text:""}),void v(he,"Error: No JSON");try{a("handleTransform",{query:n(we)});var Z=me(k()).executeQuery(n(_),n(we),g());Y()([{op:"replace",path:St(c()),value:Z}]),A()()}catch(U){console.error(U),v(ie,{text:""}),v(he,String(U))}}function ue(){v(De,!n(De)),Qs(Qs().showWizard=n(De))}function I(){v($e,!n($e)),Qs(Qs().showOriginal=n($e))}function se(Z){Z.focus()}function L(Z){a("handleChangeQueryLanguage",Z),k(Z),O()(Z),xt(n(pe))}function Ce(){n(je)?v(je,!n(je)):A()()}F(()=>(p(l()),p(c())),()=>{v(_,hm(He(l(),c())))}),F(()=>n(_),()=>{v(ee,n(_)?{json:n(_)}:{text:""})}),F(()=>(n(_),n(we)),()=>{le(n(_),n(we))}),F(()=>(Xi(),n(pe),n(we),p(k()),n(qe)),()=>{Xi(Xi()[te]={queryOptions:n(pe),query:n(we),queryLanguageId:k(),isManual:n(qe)}),a("store state in memory",te,Xi()[te])}),dn(),yt(!0),xl(e,{get onClose(){return A()},className:"jse-transform-modal",get fullscreen(){return n(je)},children:(Z,U)=>{var pt=Ex();Xu(E(pt),{children:(st,Xe)=>{var Ct=qx(),Te=We(Ct);(function(Le,sn){Ke(sn,!1);var Dt,Ln=f(sn,"queryLanguages",9),Vn=f(sn,"queryLanguageId",9),Wn=f(sn,"fullscreen",13),ar=f(sn,"onChangeQueryLanguage",9),Hn=f(sn,"onClose",9),sr=q(void 0,!0),{openAbsolutePopup:hr,closeAbsolutePopup:Yn}=ls("absolute-popup");function yr(){var ur={queryLanguages:Ln(),queryLanguageId:Vn(),onChangeQueryLanguage:mr=>{Yn(Dt),ar()(mr)}};Dt=hr(b0,ur,{offsetTop:-2,offsetLeft:0,anchor:n(sr),closeOnOuterClick:!0})}yt(!0),Uc(Le,{title:"Transform",fullScreenButton:!0,get onClose(){return Hn()},get fullscreen(){return Wn()},set fullscreen(ur){Wn(ur)},$$slots:{actions:(ur,mr)=>{var Gn,de=x0();Yt(E(de),{get data(){return tg}}),Fn(de,Pt=>v(sr,Pt),()=>n(sr)),xe(()=>Gn=jt(de,1,"jse-config svelte-5gkegr",null,Gn,{hide:Ln().length<=1})),fe("click",de,yr),z(ur,de)}},$$legacy:!0}),et()})(Te,{get queryLanguages(){return x()},get queryLanguageId(){return k()},onChangeQueryLanguage:L,get onClose(){return A()},get fullscreen(){return n(je)},set fullscreen(Le){v(je,Le)},$$legacy:!0});var Ie=E(D(Te,2)),it=E(Ie),Pe=D(E(it),2);Np(E(Pe),()=>(p(k()),P(()=>me(k()).description)));var Et=D(Pe,4),Ut=D(Et,2),ke=E(Ut),Ue=E(ke),Ae=E(Ue),ht=_e(()=>n(De)?Ra:ll);Yt(Ae,{get data(){return n(ht)}});var Jt=D(Ut,2),nt=Le=>{var sn=Tt(),Dt=We(sn),Ln=Wn=>{var ar=Ox(),Hn=We(ar);h0(Hn,{get queryOptions(){return n(pe)},get json(){return n(_)},onChange:xt});var sr=D(Hn,2),hr=Yn=>{var yr=Mx(),ur=E(yr);xe(()=>tt(ur,n(Ye))),z(Yn,yr)};Q(sr,Yn=>{n(Ye)&&Yn(hr)}),z(Wn,ar)},Vn=Wn=>{z(Wn,Jr("(Only available for arrays, not for objects)"))};Q(Dt,Wn=>{n(_),P(()=>Array.isArray(n(_)))?Wn(Ln):Wn(Vn,!1)}),z(Le,sn)};Q(Jt,Le=>{n(De)&&Le(nt)});var K=D(Jt,4);Fn(K,Le=>v(re,Le),()=>n(re));var G,wt,kt=D(it,2),jn=E(kt),Ze=E(jn),At=E(Ze),In=E(At),Un=E(In),$t=_e(()=>n($e)?Ra:ll);Yt(Un,{get data(){return n($t)}});var Cn=D(Ze,2),$n=Le=>{wd(Le,{get externalContent(){return n(ee)},externalSelection:void 0,get history(){return n(X)},readOnly:!0,get truncateTextSize(){return d()},mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return h()},get escapeUnicodeCharacters(){return b()},get parser(){return g()},get parseMemoizeOne(){return j()},get onRenderValue(){return M()},get onRenderMenu(){return w()},get onRenderContextMenu(){return N()},onError:P(()=>console.error),get onChange(){return Cr},get onChangeMode(){return Cr},get onSelect(){return Cr},get onUndo(){return Cr},get onRedo(){return Cr},get onFocus(){return Cr},get onBlur(){return Cr},get onSortModal(){return Cr},get onTransformModal(){return Cr},get onJSONEditorModal(){return Cr},get onClassName(){return T()},validator:void 0,get validationParser(){return m()},get pathParser(){return y()}})};Q(Cn,Le=>{n($e)&&Le($n)});var nn=D(jn,2),pn=D(E(nn),2),lt=Le=>{wd(Le,{get externalContent(){return n(ie)},externalSelection:void 0,get history(){return n(X)},readOnly:!0,get truncateTextSize(){return d()},mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return h()},get escapeUnicodeCharacters(){return b()},get parser(){return g()},get parseMemoizeOne(){return j()},get onRenderValue(){return M()},get onRenderMenu(){return w()},get onRenderContextMenu(){return N()},onError:P(()=>console.error),get onChange(){return Cr},get onChangeMode(){return Cr},get onSelect(){return Cr},get onUndo(){return Cr},get onRedo(){return Cr},get onFocus(){return Cr},get onBlur(){return Cr},get onSortModal(){return Cr},get onTransformModal(){return Cr},get onJSONEditorModal(){return Cr},get onClassName(){return T()},validator:void 0,get validationParser(){return m()},get pathParser(){return y()}})},yn=Le=>{var sn=zx(),Dt=E(sn);xe(()=>tt(Dt,n(he))),z(Le,sn)};Q(pn,Le=>{n(he)?Le(yn,!1):Le(lt)});var zt=E(D(Ie,2));Dr(()=>fe("click",zt,W)),to(zt,Le=>se?.(Le)),xe(Le=>{Ts(Et,Le),Ts(K,n(we)),G=jt(kt,1,"jse-data-contents svelte-lta8xm",null,G,{"jse-hide-original-data":!n($e)}),wt=jt(jn,1,"jse-original-data svelte-lta8xm",null,wt,{"jse-hide":!n($e)}),zt.disabled=!!n(he)},[()=>(p(on),p(c()),p(ao),P(()=>on(c())?"(document root)":ao(c())))]),fe("click",Ue,ue),fe("input",K,an),fe("click",In,I),z(st,Ct)},$$slots:{default:!0}}),to(pt,(st,Xe)=>Kd?.(st,Xe),()=>Ce),z(Z,pt)},$$slots:{default:!0}}),et()}function So(){}var Px=0;class Vr{constructor(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=Px++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=t.combine||null}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof t!="function"&&(t=kl.match(t)),r=>{var o=t(r);return o===void 0?null:[this,o]}}}Vr.closedBy=new Vr({deserialize:e=>e.split(" ")}),Vr.openedBy=new Vr({deserialize:e=>e.split(" ")}),Vr.group=new Vr({deserialize:e=>e.split(" ")}),Vr.isolate=new Vr({deserialize:e=>{if(e&&e!="rtl"&&e!="ltr"&&e!="auto")throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),Vr.contextHash=new Vr({perNode:!0}),Vr.lookAhead=new Vr({perNode:!0}),Vr.mounted=new Vr({perNode:!0});var xf,Rx=Object.create(null);class kl{constructor(t,r,o){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=t,this.props=r,this.id=o,this.flags=s}static define(t){var r=t.props&&t.props.length?Object.create(null):Rx,o=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),s=new kl(t.name||"",r,t.id,o);if(t.props){for(var a of t.props)if(Array.isArray(a)||(a=a(s)),a){if(a[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");r[a[0].id]=a[1]}}return s}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if(typeof t=="string"){if(this.name==t)return!0;var r=this.prop(Vr.group);return!!r&&r.indexOf(t)>-1}return this.id==t}static match(t){var r=Object.create(null);for(var o in t)for(var s of o.split(" "))r[s]=t[o];return a=>{for(var i=a.prop(Vr.group),l=-1;l<(i?i.length:0);l++){var c=r[l<0?a.name:i[l]];if(c)return c}}}}kl.none=new kl("",Object.create(null),0,8),(function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers",e[e.IncludeAnonymous=2]="IncludeAnonymous",e[e.IgnoreMounts=4]="IgnoreMounts",e[e.IgnoreOverlays=8]="IgnoreOverlays"})(xf||(xf={})),new Vr({perNode:!0});ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1pmgv9j {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1pmgv9j:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1pmgv9j .jse-status-bar-info:where(.svelte-1pmgv9j) {
  padding: 2px;
}`);var Tx=H('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),Nx=H('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),Ix=H('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),Ux=H('<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>'),tv=Pm.define([{tag:Fi.propertyName,color:"var(--internal-key-color)"},{tag:Fi.number,color:"var(--internal-value-color-number)"},{tag:Fi.bool,color:"var(--internal-value-color-boolean)"},{tag:Fi.string,color:"var(--internal-value-color-string)"},{tag:Fi.keyword,color:"var(--internal-value-color-null)"}]),$x=Cf(tv),Dx=tv.style;tv.style=e=>Dx(e||[]);var Jx=[Rm.fromClass(class{constructor(e){this.view=e,this.indentUnit=av(e.state),this.initialPaddingLeft=null,this.isChrome=window?.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=av(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new Tm;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:r=>{var o=r.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,r.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,r){var o=this.getVisibleLines(t);for(var s of o){var{numColumns:a,containsTab:i}=this.numColumns(s.text,t.tabSize),l="calc(".concat(a+this.indentUnit,"ch + ").concat(r,")"),c=this.isChrome?"calc(-".concat(a+this.indentUnit,"ch - ").concat(i?1:0,"px)"):"-".concat(a+this.indentUnit,"ch");e.add(s.from,s.from,Nm.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(e){var t=new Set,r=null;for(var{from:o,to:s}of this.view.visibleRanges)for(var a=o;a<=s;){var i=e.doc.lineAt(a);r!==i&&(t.add(i),r=i),a=i.to+1}return t}numColumns(e,t){var r=0,o=!1;e:for(var s=0;s<e.length;s++)switch(e[s]){case" ":r+=1;continue e;case"	":r+=t-r%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:r,containsTab:o}}},{decorations:e=>e.decorations})];ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-k2b9e6 {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-k2b9e6 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-hidden:where(.svelte-k2b9e6) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button[name='close'] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading-space:where(.svelte-k2b9e6) {
  flex: 1;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading:where(.svelte-k2b9e6) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-preview:where(.svelte-k2b9e6) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--jse-background-color, #fff);
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-tip:where(.svelte-k2b9e6) {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-track:where(.svelte-k2b9e6) {
  flex: 1;
  height: 6px;
  background: var(--jse-panel-background, #ebebeb);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-fill:where(.svelte-k2b9e6) {
  height: 100%;
  background: linear-gradient(90deg, var(--jse-theme-color, #3883fa), var(--jse-theme-color-highlight, #5f9dff));
  border-radius: 2px;
  transition: width 0.1s ease;
  min-width: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6) {
  padding: 4px 12px;
  font-size: 12px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  background: var(--jse-theme-color, #3883fa);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  border: 1px solid var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6):hover {
  background: var(--jse-theme-color-highlight, #5f9dff);
  color: #fff;
}`);var Wx=H('<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>'),_x=H('<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>',1),Bx=H("<!> <!> <!> <!>",1),Fx=H("<div></div> <!> <!>",1),Lx=H('<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>'),Vx=H("<div><!> <!> <!></div>");function Hx(e,t){Ke(t,!1);var r=q(void 0,!0),o=q(void 0,!0),s=f(t,"readOnly",9),a=f(t,"mainMenuBar",9),i=f(t,"statusBar",9),l=f(t,"askToFormat",9),c=f(t,"externalContent",9),u=f(t,"externalSelection",9),d=f(t,"history",9),h=f(t,"indentation",9),b=f(t,"tabSize",9),g=f(t,"escapeUnicodeCharacters",9),j=f(t,"parser",9),m=f(t,"validator",9),y=f(t,"validationParser",9),x=f(t,"onChange",9),k=f(t,"onChangeMode",9),O=f(t,"onSelect",9),M=f(t,"onUndo",9),w=f(t,"onRedo",9),N=f(t,"onError",9),T=f(t,"onFocus",9),Y=f(t,"onBlur",9),A=f(t,"onRenderMenu",9),re=f(t,"onSortModal",9),X=f(t,"onTransformModal",9),_=Ur("jsoneditor:TextMode"),ee={key:"Mod-i",run:nt,shift:K,preventDefault:!0},je=typeof window>"u";_("isSSR:",je);var te,Ee=q(void 0,!0),De=q(void 0,!0),$e=q(void 0,!0),pe=q(!1,!0),we=q(l(),!0),qe=q([],!0),Ye=q(!1,!0),he=q(0,!0),ie=q(0,!0),me=null,xt=new Li,an=new Li,le=new Li,W=new Li,ue=new Li,I=c(),se=q(Gu(I,h(),j()),!0),L=og.define(),Ce=null;function Z(){if(!Ce||Ce.length===0)return!1;var J=Ce[0].startState,ne=Ce[Ce.length-1].state,ye=Ce.map(V=>V.changes).reduce((V,ce)=>V.compose(ce)),R={type:"text",undo:{changes:ye.invert(J.doc).toJSON(),selection:mr(J.selection)},redo:{changes:ye.toJSON(),selection:mr(ne.selection)}};return _("add history item",R),d().add(R),Ce=null,!0}var U=q(g(),!0);Xr(at(function*(){if(!je)try{te=(function(J){var{target:ne,initialText:ye,readOnly:R,indentation:V}=J;_("Create CodeMirror editor",{readOnly:R,indentation:V});var ce=(function(Fe,Qe){return qu(Fe)?Fe.ranges.every(rt=>rt.anchor<Qe.length&&rt.head<Qe.length):!1})(u(),ye)?Ln(u()):void 0,Me=_s.create({doc:ye,selection:ce,extensions:[iv.of([kg,ee]),xt.of(lt()),ag(),sg(),ig(),lg(),cg(),Te(),ug(),dg(),_s.allowMultipleSelections.of(!0),vg(),Cf(Sg,{fallback:!0}),fg(),pg(),hg(),mg(),gg(),bg(),jg(),iv.of([...Cg,...Mg,...Og,{key:"Mod-z",run:At,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:In,preventDefault:!0},{key:"Ctrl-Shift-z",run:In,preventDefault:!0},...zg,...qg,...Eg]),$x,yg({hideFirstIndent:!0}),Bs.domEventHandlers({dblclick:pn}),Bs.updateListener.of(Fe=>{v($e,Fe.state),Fe.docChanged&&(Fe.transactions.some(Qe=>!!Qe.annotation(L))||(Ce=[...Ce??[],Fe]),hr()),Fe.selectionSet&&ur()}),xg(),wg({top:!0}),Bs.lineWrapping,an.of(_s.readOnly.of(R)),W.of(_s.tabSize.of(b())),le.of(sr(V)),ue.of(Bs.theme({},{dark:yn()}))]});return te=new Bs({state:Me,parent:ne}),ce&&te.dispatch(te.state.update({selection:ce.main,scrollIntoView:!0})),te})({target:n(Ee),initialText:Gn(n(se),n(pe))?"":n(r).escapeValue(n(se)),readOnly:s(),indentation:h()})}catch(J){console.error(J)}})),Po(()=>{Yn(),te&&(_("Destroy CodeMirror editor"),te.destroy()),Et()});var pt=bi(),st=bi();function Xe(){te&&(_("focus"),te.focus())}function Ct(J,ne){if(te)try{(function(){var ye=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],R=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],V=te.state,ce=V.doc.length,Me=lv(V,ce,1/0);if(Me){var Fe=[];if(ye.length===0)Fe=it(Me,V,void 0,R);else{var{from:Qe}=yu(n(r).escapeValue(n(se)),ye);Qe!==void 0&&Qe!==0&&(Fe=it(Me,V,Qe,R))}Fe.length>0&&(function(rt){Pe.apply(this,arguments)})(Fe)}})(J,ne)}catch(ye){N()(ye)}}function Te(){return Ag.of((J,ne,ye)=>{var R=lv(J,J.doc.length,1/0);if(!R||R.length<ye)return null;for(var V=null,ce=R.resolveStack(ye,1);ce;ce=ce.next){var Me=ce.node;if(!(Me.to<=ye||Me.from>ye)){if(V&&Me.from<ne)break;var Fe=Me.type.prop(Pg);if(Fe&&(Me.to<R.length-50||R.length==J.doc.length||!Ie(Me))){var Qe=Fe(Me,J);Qe&&Qe.from<=ye&&Qe.from>=ne&&Qe.to>ye&&(V=Qe)}}}return V})}function Ie(J){var ne=J.lastChild;return ne&&ne.to==J.to&&ne.type.isError}function it(J,ne,ye){var R=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],V=[],ce=new Set;return J.iterate({enter(Me){if(ye===void 0||Me.from>=ye){var Fe=Jg(ne,Me.from,Me.to);if(Fe){var Qe="".concat(Fe.from,"-").concat(Fe.to);if(!ce.has(Qe))if(R)V.push({from:Fe.from,to:Fe.to}),ce.add(Qe);else{var rt=V.some(Rn=>Rn.from<=Fe.from&&Rn.to>=Fe.to);rt||(V.push({from:Fe.from,to:Fe.to}),ce.add(Qe))}}}}}),V}function Pe(){return Pe=at(function*(J){if(J.length!==0){var ne=J.length>5e3;ne&&(v(Ye,!0),v(he,0),v(ie,J.length),me=new AbortController);var ye=R=>new Promise(V=>{var ce;ne&&(ce=me)!==null&&ce!==void 0&&ce.signal.aborted?V():requestAnimationFrame(()=>{var Me=Math.min(R+100,J.length),Fe=J.slice(R,Me);te.dispatch({effects:Fe.map(Qe=>Wg.of({from:Qe.from,to:Qe.to}))}),ne&&v(he,Me),Me<J.length?ye(Me).then(V):V()})});yield ye(0),ne&&(v(Ye,!1),v(he,0),v(ie,0),me=null)}}),Pe.apply(this,arguments)}function Et(){me&&me.abort()}function Ut(J){var ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zc;if(te)try{if(J&&J.length>0){var{from:ye}=yu(n(r).escapeValue(n(se)),J);ye!==void 0&&(te.dispatch({selection:{anchor:ye,head:ye}}),Ig(te))}else Ug(te);ne?.(J)}catch(R){N()(R)}}function ke(){Ut([],()=>!0)}function Ue(){Ct([],!0)}var Ae=!1;function ht(J){return Jt(J,!1)}function Jt(J,ne){_("handlePatch",J,ne);var ye=j().parse(n(se)),R=ea(ye,J),V=Af(ye,J);return Dt({text:j().stringify(R,null,h())},ne,!1),{json:R,previousJson:ye,undo:V,redo:J}}function nt(){if(_("format"),s())return!1;try{var J=j().parse(n(se));return Dt({text:j().stringify(J,null,h())},!0,!1),v(we,l()),!0}catch(ne){N()(ne)}return!1}function K(){if(_("compact"),s())return!1;try{var J=j().parse(n(se));return Dt({text:j().stringify(J)},!0,!1),v(we,!1),!0}catch(ne){N()(ne)}return!1}function G(){if(_("repair"),!s())try{Dt({text:Ko(n(se))},!0,!1),v(de,Mu),v(Pt,void 0)}catch(J){N()(J)}}function wt(){var J;if(!s())try{var ne=j().parse(n(se));Ae=!0,re()({id:pt,json:ne,rootPath:[],onSort:(J=at(function*(ye){var{operations:R}=ye;_("onSort",R),Jt(R,!0)}),function(ye){return J.apply(this,arguments)}),onClose:()=>{Ae=!1,Xe()}})}catch(ye){N()(ye)}}function kt(J){var{id:ne,rootPath:ye,onTransform:R,onClose:V}=J;try{var ce=j().parse(n(se));Ae=!0,X()({id:ne||st,json:ce,rootPath:ye||[],onTransform:Me=>{R?R({operations:Me,json:ce,transformedJson:ea(ce,Me)}):(_("onTransform",Me),Jt(Me,!0))},onClose:()=>{Ae=!1,Xe(),V&&V()}})}catch(Me){N()(Me)}}function jn(){s()||kt({rootPath:[]})}function Ze(){te&&(n(Ee)&&n(Ee).querySelector(".cm-search")?$g(te):Dg(te))}function At(){if(s())return!1;Yn();var J=d().undo();return _("undo",J),od(J)?(te.dispatch({annotations:L.of("undo"),changes:cv.fromJSON(J.undo.changes),selection:cu.fromJSON(J.undo.selection),scrollIntoView:!0}),!0):(M()(J),!1)}function In(){if(s())return!1;Yn();var J=d().redo();return _("redo",J),od(J)?(te.dispatch({annotations:L.of("redo"),changes:cv.fromJSON(J.redo.changes),selection:cu.fromJSON(J.redo.selection),scrollIntoView:!0}),!0):(w()(J),!1)}function Un(){v(pe,!0),Dt(c(),!0,!0)}function $t(){k()(jr.tree)}function Cn(){ar()}function $n(J){_("select validation error",J);var{from:ne,to:ye}=zt(J);ne!==void 0&&ye!==void 0&&(nn(ne,ye),Xe())}function nn(J,ne){_("setSelection",{anchor:J,head:ne}),te&&te.dispatch(te.state.update({selection:{anchor:J,head:ne},scrollIntoView:!0}))}function pn(J,ne){if(ne.state.selection.ranges.length===1){var ye=ne.state.selection.ranges[0],R=n(se).slice(ye.from,ye.to);if(R==="{"||R==="["){var V=If.parse(n(se)),ce=Object.keys(V.pointers).find(Fe=>{var Qe;return((Qe=V.pointers[Fe].value)===null||Qe===void 0?void 0:Qe.pos)===ye.from}),Me=V.pointers[ce];ce&&Me&&Me.value&&Me.valueEnd&&(_("pointer found, selecting inner contents of path:",ce,Me),nn(Me.value.pos+1,Me.valueEnd.pos-1))}}}function lt(){return Rg(vn,{delay:300})}function yn(){return!!n(Ee)&&getComputedStyle(n(Ee)).getPropertyValue("--jse-theme").includes("dark")}function zt(J){var{path:ne,message:ye,severity:R}=J,{line:V,column:ce,from:Me,to:Fe}=yu(n(r).escapeValue(n(se)),ne);return{path:ne,line:V,column:ce,from:Me,to:Fe,message:ye,severity:R,actions:[]}}function Le(J,ne){var{line:ye,column:R,position:V,message:ce}=J;return{path:[],line:ye,column:R,from:V,to:V,severity:yo.error,message:ce,actions:ne&&!s()?[{name:"Auto repair",apply:()=>G()}]:void 0}}function sn(J){return{from:J.from||0,to:J.to||0,message:J.message||"",actions:J.actions,severity:J.severity}}function Dt(J,ne,ye){var R=Gu(J,h(),j()),V=!Nt(J,I),ce=I;_("setCodeMirrorContent",{isChanged:V,emitChange:ne,forceUpdate:ye}),te&&(V||ye)&&(I=J,v(se,R),Gn(n(se),n(pe))||te.dispatch({changes:{from:0,to:te.state.doc.length,insert:n(r).escapeValue(n(se))}}),Z(),V&&ne&&yr(I,ce))}function Ln(J){return qu(J)?cu.fromJSON(J):void 0}function Vn(){return Wn.apply(this,arguments)}function Wn(){return Wn=at(function*(){_("refresh"),yield(function(){return Hn.apply(this,arguments)})()}),Wn.apply(this,arguments)}function ar(){if(te){var J=te?n(r).unescapeValue(te.state.doc.toString()):"",ne=J!==n(se);if(_("onChangeCodeMirrorValue",{isChanged:ne}),ne){var ye=I;v(se,J),I={text:n(se)},Z(),yr(I,ye),Bn(),ur()}}}function Hn(){return(Hn=at(function*(){if(Bn(),te){var J=yn();return _("updateTheme",{dark:J}),te.dispatch({effects:[ue.reconfigure(Bs.theme({},{dark:J}))]}),new Promise(ne=>setTimeout(ne))}return Promise.resolve()})).apply(this,arguments)}function sr(J){var ne=Tg.of(typeof J=="number"?" ".repeat(J):J);return J==="	"?[ne]:[ne,Jx]}Gd({onMount:Xr,onDestroy:Po,getWindow:()=>Pl(n(De)),hasFocus:()=>Ae&&document.hasFocus()||Id(n(De)),onFocus:T(),onBlur:()=>{Yn(),Y()()}});var hr=fc(ar,300);function Yn(){hr.flush()}function yr(J,ne){x()&&x()(J,ne,{contentErrors:An(),patchResult:void 0})}function ur(){O()(mr(n($e).selection))}function mr(J){return be({type:kn.text},J.toJSON())}function Gn(J,ne){return!!J&&J.length>Su&&!ne}var de=q(Mu,!0),Pt=q(void 0,!0);function vn(){if(Gn(n(se),n(pe)))return[];var J=An();if(rd(J)){var{parseError:ne,isRepairable:ye}=J;return[sn(Le(ne,ye))]}return dh(J)?J.validationErrors.map(zt).map(sn):[]}function An(){_("validate:start"),Yn();var J=ir(n(r).escapeValue(n(se)),m(),j(),y());return rd(J)?(v(de,J.isRepairable?Wv:"invalid"),v(Pt,J.parseError),v(qe,[])):(v(de,Mu),v(Pt,void 0),v(qe,J?.validationErrors||[])),_("validate:end"),J}var ir=il(S0);function Or(){n(Pt)&&(function(J){_("select parse error",J);var ne=Le(J,!1);nn(ne.from!=null?ne.from:0,ne.to!=null?ne.to:0),Xe()})(n(Pt))}var Wt={icon:Ng,text:"Show me",title:"Move to the parse error location",onClick:Or};F(()=>p(g()),()=>{v(r,Td({escapeControlCharacters:!1,escapeUnicodeCharacters:g()}))}),F(()=>p(c()),()=>{Dt(c(),!1,!1)}),F(()=>p(u()),()=>{(function(J){if(qu(J)){var ne=Ln(J);!te||!ne||n($e)&&n($e).selection.eq(ne)||(_("applyExternalSelection",ne),te.dispatch({selection:ne}))}})(u())}),F(()=>p(m()),()=>{(function(J){_("updateLinter",J),te&&te.dispatch({effects:xt.reconfigure(lt())})})(m())}),F(()=>p(h()),()=>{(function(J){te&&(_("updateIndentation",J),te.dispatch({effects:le.reconfigure(sr(J))}))})(h())}),F(()=>p(b()),()=>{(function(J){te&&(_("updateTabSize",J),te.dispatch({effects:W.reconfigure(_s.tabSize.of(J))}))})(b())}),F(()=>p(s()),()=>{(function(J){te&&(_("updateReadOnly",J),te.dispatch({effects:[an.reconfigure(_s.readOnly.of(J))]}))})(s())}),F(()=>(n(U),p(g())),()=>{n(U)!==g()&&(v(U,g()),_("forceUpdateText",{escapeUnicodeCharacters:g()}),te&&te.dispatch({changes:{from:0,to:te.state.doc.length,insert:n(r).escapeValue(n(se))}}))}),F(()=>(n(de),p(s()),rs),()=>{v(o,n(de)!==Wv||s()?[Wt]:[{icon:rs,text:"Auto repair",title:"Automatically repair JSON",onClick:G},Wt])}),dn();var gr={focus:Xe,collapse:Ct,expand:Ut,patch:ht,handlePatch:Jt,openTransformModal:kt,refresh:Vn,flush:Yn,validate:An};yt(!0);var Wr,Xn=Vx(),$r=E(Xn),Pn=J=>{var ne=_e(()=>(n(se),P(()=>n(se).length===0))),ye=_e(()=>!n(ne)),R=_e(()=>!n(ne)),V=_e(()=>!n(ne)),ce=_e(()=>!n(ne)),Me=_e(()=>!n(ne)),Fe=_e(()=>!n(ne));(function(Qe,rt){Ke(rt,!1);var Rn=q(void 0,!0),Ft=f(rt,"readOnly",9,!1),Gt=f(rt,"onExpandAll",9),Ot=f(rt,"onCollapseAll",9),Lt=f(rt,"onFormat",9),zr=f(rt,"onCompact",9),ut=f(rt,"onSort",9),un=f(rt,"onTransform",9),Xt=f(rt,"onToggleSearch",9),ln=f(rt,"onUndo",9),_n=f(rt,"onRedo",9),xn=f(rt,"canExpandAll",9),dt=f(rt,"canCollapseAll",9),xr=f(rt,"canUndo",9),vr=f(rt,"canRedo",9),qr=f(rt,"canFormat",9),hn=f(rt,"canCompact",9),On=f(rt,"canSort",9),br=f(rt,"canTransform",9),S=f(rt,"onRenderMenu",9),B=q(void 0,!0),ve=q(void 0,!0),Se={type:"button",icon:Jc,title:"Search (Ctrl+F)",className:"jse-search",onClick:Xt()},ae=q(void 0,!0);F(()=>(p(Gt()),p(xn())),()=>{v(B,{type:"button",icon:Gh,title:"Expand all",className:"jse-expand-all",onClick:Gt(),disabled:!xn()})}),F(()=>(p(Ot()),p(dt())),()=>{v(ve,{type:"button",icon:Xh,title:"Collapse all",className:"jse-collapse-all",onClick:Ot(),disabled:!dt()})}),F(()=>(p(Ft()),n(B),n(ve),p(Lt()),p(qr()),p(zr()),p(hn()),p(ut()),p(On()),p(un()),p(br()),p(ln()),p(xr()),p(_n()),p(vr())),()=>{v(ae,Ft()?[n(B),n(ve),{type:"separator"},Se,{type:"space"}]:[n(B),n(ve),{type:"separator"},{type:"button",icon:gf,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:Lt(),disabled:Ft()||!qr()},{type:"button",icon:My,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:zr(),disabled:Ft()||!hn()},{type:"separator"},{type:"button",icon:pc,title:"Sort",className:"jse-sort",onClick:ut(),disabled:Ft()||!On()},{type:"button",icon:hc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:un(),disabled:Ft()||!br()},Se,{type:"separator"},{type:"button",icon:kd,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:ln(),disabled:!xr()},{type:"button",icon:Sd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:_n(),disabled:!vr()},{type:"space"}])}),F(()=>(p(S()),n(ae)),()=>{v(Rn,S()(n(ae))||n(ae))}),dn(),yt(!0),au(Qe,{get items(){return n(Rn)}}),et()})(J,{get readOnly(){return s()},onExpandAll:ke,onCollapseAll:Ue,onFormat:nt,onCompact:K,onSort:wt,onTransform:jn,onToggleSearch:Ze,onUndo:At,onRedo:In,get canExpandAll(){return n(ye)},get canCollapseAll(){return n(R)},get canFormat(){return n(V)},get canCompact(){return n(ce)},get canSort(){return n(Me)},get canTransform(){return n(Fe)},get canUndo(){return p(d()),P(()=>d().canUndo)},get canRedo(){return p(d()),P(()=>d().canRedo)},get onRenderMenu(){return A()}})};Q($r,J=>{a()&&J(Pn)});var Bt=D($r,2),Mt=J=>{var ne=Wx(),ye=D(E(ne),2),R=E(ye),V=D(ye,2);xe(()=>qo(R,"width: ".concat(n(ie)>0?n(he)/n(ie)*100:0,"%"))),fe("click",V,Et),z(J,ne)};Q(Bt,J=>{n(Ye)&&J(Mt)});var Mn=D(Bt,2),dr=J=>{var ne,ye=_e(()=>(n(se),n(pe),P(()=>Gn(n(se),n(pe))))),R=Fx(),V=We(R);Fn(V,rt=>v(Ee,rt),()=>n(Ee));var ce=D(V,2),Me=rt=>{var Rn=_x(),Ft=We(Rn),Gt=_e(()=>(p(dc),p(Su),n(se),P(()=>"The JSON document is larger than ".concat(dc(Su),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(dc(n(se).length),"."))));jo(Ft,{get icon(){return zs},type:"error",get message(){return n(Gt)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:Un},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:$t},{text:"Cancel",title:"Cancel opening this large document.",onClick:Cn}],onClose:Xe});var Ot=E(D(Ft,2));xe(Lt=>tt(Ot,Lt),[()=>(p(ka),n(se),p(Cc),P(()=>ka(n(se)||"",Cc)))]),z(rt,Rn)};Q(ce,rt=>{n(ye)&&rt(Me)});var Fe=D(ce,2),Qe=rt=>{var Rn=Bx(),Ft=We(Rn),Gt=un=>{(function(Xt,ln){Ke(ln,!1);var _n=f(ln,"editorState",8),xn=q(),dt=q(),xr=q(),vr=q(),qr=q();F(()=>p(_n()),()=>{var ae;v(xn,(ae=_n())===null||ae===void 0||(ae=ae.selection)===null||ae===void 0||(ae=ae.main)===null||ae===void 0?void 0:ae.head)}),F(()=>(n(xn),p(_n())),()=>{var ae;v(dt,n(xn)!==void 0?(ae=_n())===null||ae===void 0||(ae=ae.doc)===null||ae===void 0?void 0:ae.lineAt(n(xn)):void 0)}),F(()=>n(dt),()=>{v(xr,n(dt)!==void 0?n(dt).number:void 0)}),F(()=>(n(dt),n(xn)),()=>{v(vr,n(dt)!==void 0&&n(xn)!==void 0?n(xn)-n(dt).from+1:void 0)}),F(()=>p(_n()),()=>{var ae;v(qr,(ae=_n())===null||ae===void 0||(ae=ae.selection)===null||ae===void 0||(ae=ae.ranges)===null||ae===void 0?void 0:ae.reduce((Ne,Je)=>Ne+Je.to-Je.from,0))}),dn(),yt();var hn=Ux(),On=E(hn),br=ae=>{var Ne=Tx(),Je=E(Ne);xe(()=>{var Be;return tt(Je,"Line: ".concat((Be=n(xr))!==null&&Be!==void 0?Be:""))}),z(ae,Ne)};Q(On,ae=>{n(xr)!==void 0&&ae(br)});var S=D(On,2),B=ae=>{var Ne=Nx(),Je=E(Ne);xe(()=>{var Be;return tt(Je,"Column: ".concat((Be=n(vr))!==null&&Be!==void 0?Be:""))}),z(ae,Ne)};Q(S,ae=>{n(vr)!==void 0&&ae(B)});var ve=D(S,2),Se=ae=>{var Ne=Ix(),Je=E(Ne);xe(()=>{var Be;return tt(Je,"Selection: ".concat((Be=n(qr))!==null&&Be!==void 0?Be:""," characters"))}),z(ae,Ne)};Q(ve,ae=>{n(qr)!==void 0&&n(qr)>0&&ae(Se)}),z(Xt,hn),et()})(un,{get editorState(){return n($e)}})};Q(Ft,un=>{i()&&un(Gt)});var Ot=D(Ft,2),Lt=un=>{jo(un,{type:"error",get icon(){return zs},get message(){return n(Pt),P(()=>n(Pt).message)},get actions(){return n(o)},onClick:Or,onClose:Xe})};Q(Ot,un=>{n(Pt)&&un(Lt)});var zr=D(Ot,2),ut=un=>{var Xt=_e(()=>[{icon:gf,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:nt},{icon:Dc,text:"No thanks",title:"Close this message",onClick:()=>v(we,!1)}]);jo(un,{type:"success",message:"Do you want to format the JSON?",get actions(){return n(Xt)},onClose:Xe})};Q(zr,un=>{n(Pt),n(we),p(Dv),n(se),P(()=>!n(Pt)&&n(we)&&Dv(n(se)))&&un(ut)}),Xd(D(zr,2),{get validationErrors(){return n(qe)},selectError:$n}),z(rt,Rn)};Q(Fe,rt=>{n(ye)||rt(Qe)}),xe(()=>ne=jt(V,1,"jse-contents svelte-k2b9e6",null,ne,{"jse-hidden":n(ye)})),z(J,R)},er=J=>{z(J,Lx())};return Q(Mn,J=>{je?J(er,!1):J(dr)}),Fn(Xn,J=>v(De,J),()=>n(De)),xe(()=>Wr=jt(Xn,1,"jse-text-mode svelte-k2b9e6",null,Wr,{"no-main-menu":!a()})),z(e,Xn),ct(t,"focus",Xe),ct(t,"collapse",Ct),ct(t,"expand",Ut),ct(t,"patch",ht),ct(t,"handlePatch",Jt),ct(t,"openTransformModal",kt),ct(t,"refresh",Vn),ct(t,"flush",Yn),ct(t,"validate",An),et(gr)}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-1jv89ui {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-1jv89ui {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-1jv89ui {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var Zx=H('<button type="button"> </button>');ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-5pxwfq {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-5pxwfq:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-5pxwfq:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-5pxwfq span.jse-column-sort-icon:where(.svelte-5pxwfq) {
  height: 1em;
}`);var Qx=H('<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>'),Yx=H('<button type="button"><span class="jse-column-name"> </span> <!></button>');ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-1b9gnk8 {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-before:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-arrays-info:where(.svelte-1b9gnk8) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) .jse-nested-property-count:where(.svelte-1b9gnk8) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-after:where(.svelte-1b9gnk8) {
  flex: 2;
}`);var Gx=H(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),Xx=H('<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>'),Kx=H('<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>'),e1=H('<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>');function t1(e,t){Ke(t,!0);var r=so(()=>t.json?(function(m){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,x=[];return(function k(O,M){Ir(O)&&M.length<y&&Object.keys(O).forEach(w=>{k(O[w],M.concat(w))}),Nr(O)&&x.push(M)})(m,[]),x})(t.json).slice(0,99).filter(m=>m.length>0):[]),o=so(()=>!on(n(r))),s=so(()=>t.json===void 0&&(t.text===""||t.text===void 0)),a=so(()=>n(o)?"Object with nested arrays":n(s)?"An empty document":Ir(t.json)?"An object":Nr(t.json)?"An empty array":"A ".concat(Hc(t.json,t.parser))),i=e1();i.__click=()=>t.onClick();var l=D(E(i),2),c=E(l),u=E(c),d=D(c,2),h=E(d),b=m=>{z(m,Jr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},g=m=>{var y=Tt(),x=We(y),k=M=>{z(M,Gx())},O=M=>{var w=Jr();xe(()=>{var N;return tt(w,"".concat((N=n(a))!==null&&N!==void 0?N:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),z(M,w)};Q(x,M=>{n(s)&&!t.readOnly?M(k):M(O,!1)},!0),z(m,y)};Q(h,m=>{n(o)?m(b):m(g,!1)});var j=D(d,2);or(j,17,()=>n(r),pr,(m,y)=>{var x=so(()=>(function(re){return He(t.json,re).length})(n(y))),k=Kx(),O=E(k),M=E(O),w=E(D(M)),N=D(O,2);N.__click=()=>t.openJSONEditorModal(n(y));var T=E(N),Y=D(N,2),A=re=>{var X=Xx();X.__click=()=>t.extractPath(n(y)),z(re,X)};Q(Y,re=>{t.readOnly||re(A)}),xe(re=>{var X;tt(M,'"'.concat(re??"",'" ')),tt(w,"(".concat((X=n(x))!==null&&X!==void 0?X:""," ").concat(n(x)!==1?"items":"item",")")),tt(T,t.readOnly?"View":"Edit")},[()=>ao(n(y))]),z(m,k)}),D(j,2).__click=()=>t.onChangeMode(jr.tree),xe(()=>tt(u,n(a))),z(e,i),et()}zl(["click"]);ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-1wgrwv3 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-1wgrwv3:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-1wgrwv3:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var n1=H('<button type="button"><!></button>');ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-1p86y3c {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-1p86y3c {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-search-box-container:where(.svelte-1p86y3c) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) .jse-hidden-input:where(.svelte-1p86y3c) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-start-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c),
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-search-box-background:where(.svelte-1p86y3c) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c), .jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) .jse-table-root-error:where(.svelte-1p86y3c) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer.jse-selected-value:where(.svelte-1p86y3c) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-context-menu-anchor:where(.svelte-1p86y3c) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) {
  align-items: unset;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading-space:where(.svelte-1p86y3c) {
  flex: 1;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading:where(.svelte-1p86y3c) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var r1=H('<div class="jse-table-root-error svelte-1p86y3c"><!></div>'),o1=H('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),a1=H('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),s1=H('<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>'),i1=H('<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>'),l1=H('<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>'),c1=H('<td class="jse-table-cell svelte-1p86y3c"></td>'),u1=H('<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>'),d1=H('<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>',1),v1=H("<!> <!>",1),f1=H('<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>',1),p1=H('<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>'),h1=H('<div role="table"><!> <!></div> <!> <!>',1);function m1(e,t){Ke(t,!1);var r=q(void 0,!0),o=q(void 0,!0),s=q(void 0,!0),a=Ur("jsoneditor:TableMode"),{openAbsolutePopup:i,closeAbsolutePopup:l}=ls("absolute-popup"),c=Vh(),u=bi(),d=bi(),h=typeof window>"u";a("isSSR:",h);var b=f(t,"readOnly",9),g=f(t,"externalContent",9),j=f(t,"externalSelection",9),m=f(t,"history",9),y=f(t,"truncateTextSize",9),x=f(t,"mainMenuBar",9),k=f(t,"escapeControlCharacters",9),O=f(t,"escapeUnicodeCharacters",9),M=f(t,"flattenColumns",9),w=f(t,"parser",9),N=f(t,"parseMemoizeOne",9),T=f(t,"validator",9),Y=f(t,"validationParser",9),A=f(t,"indentation",9),re=f(t,"onChange",9),X=f(t,"onChangeMode",9),_=f(t,"onSelect",9),ee=f(t,"onUndo",9),je=f(t,"onRedo",9),te=f(t,"onRenderValue",9),Ee=f(t,"onRenderMenu",9),De=f(t,"onRenderContextMenu",9),$e=f(t,"onFocus",9),pe=f(t,"onBlur",9),we=f(t,"onSortModal",9),qe=f(t,"onTransformModal",9),Ye=f(t,"onJSONEditorModal",9),he=q(void 0,!0),ie=q(void 0,!0),me=q(void 0,!0),xt=q(void 0,!0),an=q(void 0,!0);Gd({onMount:Xr,onDestroy:Po,getWindow:()=>Pl(n(ie)),hasFocus:()=>Pe&&document.hasFocus()||Id(n(ie)),onFocus:()=>{Et=!0,$e()&&$e()()},onBlur:()=>{Et=!1,pe()&&pe()()}});var le,W=q(void 0,!0),ue=q(void 0,!0),I=q(void 0,!0),se=q(void 0,!0),L=q(void 0,!0),Ce=q(void 0,!0),Z=q(!1,!0),U=q(!1,!0);function pt(S){v(Ce,(le=S)?qh(n(W),le.items):void 0)}function st(S){return Xe.apply(this,arguments)}function Xe(){return(Xe=at(function*(S){v(G,void 0),yield Vn(S)})).apply(this,arguments)}function Ct(){v(Z,!1),v(U,!1),Le()}var Te=q(1e4,!0),Ie=q([],!0),it=q(void 0,!0),Pe=!1,Et=!1,Ut=q(!1,!0),ke=q({},!0),Ue=q(600,!0),Ae=q(0,!0),ht=18;function Jt(S){v(G,S)}function nt(S){n(G)&&S!==void 0&&(Ha(S,ns(n(G)))&&Ha(S,Ve(n(G)))||(a("clearing selection: path does not exist anymore",n(G)),v(G,void 0)))}var K=q(n(W)!==void 0?sd({json:n(W)}):void 0,!0),G=q(hl(j())?j():void 0,!0),wt=q(void 0,!0),kt=q(!1,!0);function jn(S){if(!b()){a("onSortByHeader",S);var B=S.sortDirection===fo.desc?-1:1;nn(Kh(n(W),[],S.path,B),(ve,Se)=>({state:Se,sortedColumn:S}))}}Xr(()=>{n(G)&&ar(Ve(n(G)))});var Ze=q(void 0,!0);function At(S){if(S.json!==void 0||S.text!==void 0){var B=n(W)!==void 0&&S.json!==void 0;m().add({type:"tree",undo:{patch:B?[{op:"replace",path:"",value:S.json}]:void 0,json:S.json,text:S.text,documentState:S.documentState,textIsRepaired:S.textIsRepaired,selection:Zo(S.selection),sortedColumn:S.sortedColumn},redo:{patch:B?[{op:"replace",path:"",value:n(W)}]:void 0,json:n(W),text:n(ue),documentState:n(K),textIsRepaired:n(kt),selection:Zo(n(G)),sortedColumn:n(wt)}})}}var In=q([],!0),Un=il(Hh);function $t(S,B,ve,Se){li(()=>{var ae;try{ae=Un(S,B,ve,Se)}catch(Ne){ae=[{path:[],message:"Failed to validate: "+Ne.message,severity:yo.warning}]}Nt(ae,n(In))||(a("validationErrors changed:",ae),v(In,ae))},ae=>a("validationErrors updated in ".concat(ae," ms")))}function Cn(){return a("validate"),n(I)?{parseError:n(I),isRepairable:!1}:($t(n(W),T(),w(),Y()),on(n(In))?void 0:{validationErrors:n(In)})}function $n(S,B){if(a("patch",S,B),n(W)===void 0)throw new Error("Cannot apply patch: no JSON");var ve=n(W),Se={json:void 0,text:n(ue),documentState:n(K),selection:Zo(n(G)),sortedColumn:n(wt),textIsRepaired:n(kt)},ae=zh(n(W),S),Ne=mh(n(W),n(K),S),Je=Qy(n(wt),S,n(Ie)),Be=typeof B=="function"?B(Ne.json,Ne.documentState,n(G)):void 0;return v(W,Be?.json!==void 0?Be.json:Ne.json),v(K,Be?.state!==void 0?Be.state:Ne.documentState),v(G,Be?.selection!==void 0?Be.selection:n(G)),v(wt,Be?.sortedColumn!==void 0?Be.sortedColumn:Je),v(ue,void 0),v(kt,!1),v(se,void 0),v(L,void 0),v(I,void 0),m().add({type:"tree",undo:be({patch:ae},Se),redo:{patch:S,json:void 0,text:void 0,documentState:n(K),selection:Zo(n(G)),sortedColumn:n(wt),textIsRepaired:n(kt)}}),{json:n(W),previousJson:ve,undo:ae,redo:S}}function nn(S,B){a("handlePatch",S,B);var ve={json:n(W),text:n(ue)},Se=$n(S,B);return pn(ve,Se),Se}function pn(S,B){if((S.json!==void 0||S?.text!==void 0)&&re()){if(n(ue)!==void 0){var ve={text:n(ue),json:void 0};re()(ve,S,{contentErrors:Cn(),patchResult:B})}else if(n(W)!==void 0){var Se={text:void 0,json:n(W)};re()(Se,S,{contentErrors:Cn(),patchResult:B})}}}function lt(S){a("pasted json as text",S),v(se,S)}function yn(S){a("pasted multiline text",{pastedText:S}),v(L,S)}function zt(S){var B=parseInt(S[0],10),ve=[String(B+1),...S.slice(1)];return Ha(n(W),ve)?_t(ve):_t(S)}function Le(){a("focus"),n(xt)&&(n(xt).focus(),n(xt).select())}function sn(S){v(Ae,S.target.scrollTop)}function Dt(){n(G)||v(G,(function(){if(Nr(n(W))&&!on(n(W))&&!on(n(Ie)))return _t(["0",...n(Ie)[0]])})())}function Ln(){if(n(kt)&&n(W)!==void 0){var S={json:n(W),text:n(ue)},B={json:n(W),documentState:n(K),selection:n(G),sortedColumn:n(wt),text:n(ue),textIsRepaired:n(kt)};v(ue,void 0),v(kt,!1),nt(n(W)),At(B),pn(S,void 0)}return{json:n(W),text:n(ue)}}function Vn(S){var{scrollToWhenVisible:B=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ve=n(Z)?tl:0,Se=jf(S,n(Ie),ke,ht),ae=Se-n(Ae)+ve+ht,Ne=Hn(S);if(a("scrollTo",{path:S,top:Se,scrollTop:n(Ae),elem:Ne}),!n(me))return Promise.resolve();var Je=n(me).getBoundingClientRect();if(Ne&&!B){var Be=Ne.getBoundingClientRect();if(Be.bottom>Je.top&&Be.top<Je.bottom)return Promise.resolve()}var Rt=-Math.max(ve+2*ht,Je.height/4);return new Promise(Ne?Kt=>{c(Ne,{container:n(me),offset:Rt,duration:300,callback:()=>{Wn(S),Kt()}})}:Kt=>{c(ae,{container:n(me),offset:Rt,duration:300,callback:()=>{Bn(),Wn(S),Kt()}})})}function Wn(S){var B=Hn(S);if(B&&n(me)){var ve=n(me).getBoundingClientRect(),Se=B.getBoundingClientRect();if(Se.right>ve.right){var ae=Se.right-ve.right;mo(me,n(me).scrollLeft+=ae)}if(Se.left<ve.left){var Ne=ve.left-Se.left;mo(me,n(me).scrollLeft-=Ne)}}}function ar(S){(function(B){if(n(me)){var{rowIndex:ve}=ko(B,n(Ie)),Se=jf(B,n(Ie),ke,ht),ae=Se+(ke[ve]||ht),Ne=ht,Je=n(me).getBoundingClientRect(),Be=n(Ae),Rt=n(Ae)+Je.height-Ne;if(ae>Rt){var Kt=ae-Rt;mo(me,n(me).scrollTop+=Kt)}if(Se<Be){var Vt=Be-Se;mo(me,n(me).scrollTop-=Vt)}}})(S),Wn(S)}function Hn(S){var B,ve,Se=n(Ie).find(Ne=>oa(S.slice(1),Ne)),ae=Se?S.slice(0,1).concat(Se):S;return(B=(ve=n(me))===null||ve===void 0?void 0:ve.querySelector('td[data-path="'.concat(uc(ae),'"]')))!==null&&B!==void 0?B:void 0}function sr(S){var B,{anchor:ve,left:Se,top:ae,width:Ne,height:Je,offsetTop:Be,offsetLeft:Rt,showTip:Kt}=S,Vt=(function($){var{json:oe,documentState:Re,selection:ze,readOnly:Oe,onEditValue:mt,onEditRow:vt,onToggleEnforceString:Ht,onCut:mn,onCopy:rn,onPaste:Dn,onRemove:gt,onDuplicateRow:tr,onInsertBeforeRow:zn,onInsertAfterRow:nr,onRemoveRow:gn}=$,ot=oe!==void 0,en=!!ze,bt=oe!==void 0&&ze?He(oe,Ve(ze)):void 0,Ge=ot&&(En(ze)||Tr(ze)||tn(ze)),qt=!Oe&&ot&&ze!==void 0&&qc(ze),lr=qt&&!Kn(bt),qn=!Oe&&Ge,rr=ze!==void 0&&Yo(oe,Re,Ve(ze));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>mt(),icon:ci,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!qt},width:"11em",items:[{type:"button",icon:ci,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>mt(),disabled:!qt},{type:"button",icon:rr?Mf:Of,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Ht(),disabled:!lr}]},{type:"dropdown-button",main:{type:"button",onClick:()=>mn(!0),icon:ui,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!qn},width:"10em",items:[{type:"button",icon:ui,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>mn(!0),disabled:Oe||!Ge},{type:"button",icon:ui,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>mn(!1),disabled:Oe||!Ge}]},{type:"dropdown-button",main:{type:"button",onClick:()=>rn(!0),icon:Va,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Ge},width:"12em",items:[{type:"button",icon:Va,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>rn(!1),disabled:!Ge},{type:"button",icon:Va,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>rn(!1),disabled:!Ge}]},{type:"button",onClick:()=>Dn(),icon:zf,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Oe||!en},{type:"button",onClick:()=>gt(),icon:$u,text:"Remove",title:"Remove selected contents (Delete)",disabled:Oe||!Ge}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>vt(),icon:ci,text:"Edit row",title:"Edit the current row",disabled:Oe||!en||!ot},{type:"button",onClick:()=>tr(),icon:qf,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Oe||!en||!ot},{type:"button",onClick:()=>zn(),icon:ti,text:"Insert before",title:"Insert a row before the current row",disabled:Oe||!en||!ot},{type:"button",onClick:()=>nr(),icon:ti,text:"Insert after",title:"Insert a row after the current row",disabled:Oe||!en||!ot},{type:"button",onClick:()=>gn(),icon:$u,text:"Remove row",title:"Remove current row",disabled:Oe||!en||!ot}]}]}]})({json:n(W),documentState:n(K),selection:n(G),readOnly:b(),onEditValue:yr,onEditRow:ur,onToggleEnforceString:mr,onCut:Wr,onCopy:$r,onPaste:Pt,onRemove:Bt,onDuplicateRow:Mn,onInsertBeforeRow:dr,onInsertAfterRow:er,onRemoveRow:J}),Zn=(B=De()(Vt))!==null&&B!==void 0?B:Vt;if(Zn!==!1){var Er={left:Se,top:ae,offsetTop:Be,offsetLeft:Rt,width:Ne,height:Je,anchor:ve,closeOnOuterClick:!0,onClose:()=>{Pe=!1,Le()}};Pe=!0;var C=i(cm,{tip:Kt?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Zn,onRequestClose(){l(C),Le()}},Er)}}function hr(S){if(!Ar(n(G)))if(S&&(S.stopPropagation(),S.preventDefault()),S&&S.type==="contextmenu"&&S.target!==n(xt))sr({left:S.clientX,top:S.clientY,width:Ca,height:Sa,showTip:!1});else{var B,ve=(B=n(me))===null||B===void 0?void 0:B.querySelector(".jse-table-cell.jse-selected-value");if(ve)sr({anchor:ve,offsetTop:2,width:Ca,height:Sa,showTip:!1});else{var Se,ae=(Se=n(me))===null||Se===void 0?void 0:Se.getBoundingClientRect();ae&&sr({top:ae.top+2,left:ae.left+2,width:Ca,height:Sa,showTip:!1})}}}function Yn(S){sr({anchor:ah(S.target,"BUTTON"),offsetTop:0,width:Ca,height:Sa,showTip:!0})}function yr(){if(!b()&&n(G)){var S=Ve(n(G));Kn(He(n(W),S))?Qe(S):v(G,_t(S))}}function ur(){!b()&&n(G)&&Qe(Ve(n(G)).slice(0,1))}function mr(){if(!b()&&tn(n(G))){var S=n(G).path,B=St(S),ve=He(n(W),S),Se=!Yo(n(W),n(K),S),ae=Se?String(ve):Ds(String(ve),w());a("handleToggleEnforceString",{enforceString:Se,value:ve,updatedValue:ae}),nn([{op:"replace",path:B,value:ae}],(Ne,Je)=>({state:Yc(n(W),Je,S,{type:"value",enforceString:Se})}))}}function Gn(){return de.apply(this,arguments)}function de(){return(de=at(function*(){if(a("apply pasted json",n(se)),n(se)){var{onPasteAsJson:S}=n(se);S(),setTimeout(Le)}})).apply(this,arguments)}function Pt(){return vn.apply(this,arguments)}function vn(){return(vn=at(function*(){try{R(yield navigator.clipboard.readText())}catch(S){console.error(S),v(Ut,!0)}})).apply(this,arguments)}function An(){return ir.apply(this,arguments)}function ir(){return(ir=at(function*(){a("apply pasted multiline text",n(L)),n(L)&&(R(JSON.stringify(n(L))),setTimeout(Le))})).apply(this,arguments)}function Or(){a("clear pasted json"),v(se,void 0),Le()}function Wt(){a("clear pasted multiline text"),v(L,void 0),Le()}function gr(){X()(jr.text)}function Wr(S){return Xn.apply(this,arguments)}function Xn(){return(Xn=at(function*(S){yield rm({json:n(W),selection:n(G),indentation:S?A():void 0,readOnly:b(),parser:w(),onPatch:nn})})).apply(this,arguments)}function $r(){return Pn.apply(this,arguments)}function Pn(){return Pn=at(function*(){var S=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(W)!==void 0&&(yield om({json:n(W),selection:n(G),indentation:S?A():void 0,parser:w()}))}),Pn.apply(this,arguments)}function Bt(){sm({json:n(W),text:n(ue),selection:n(G),keepSelection:!0,readOnly:b(),onChange:re(),onPatch:nn})}function Mt(S){b()||(a("extract",{path:S}),nn(Ch(n(W),_t(S))))}function Mn(){(function(S){var{json:B,selection:ve,columns:Se,readOnly:ae,onPatch:Ne}=S;if(!ae&&B!==void 0&&ve&&si(ve)){var{rowIndex:Je,columnIndex:Be}=ko(Ve(ve),Se);eo("duplicate row",{rowIndex:Je});var Rt=[String(Je)];Ne(Sh(B,[Rt]),(Kt,Vt)=>({state:Vt,selection:_t(ms({rowIndex:Je<B.length?Je+1:Je,columnIndex:Be},Se))}))}})({json:n(W),selection:n(G),columns:n(Ie),readOnly:b(),onPatch:nn})}function dr(){(function(S){var{json:B,selection:ve,columns:Se,readOnly:ae,onPatch:Ne}=S;if(!ae&&B!==void 0&&ve&&si(ve)){var{rowIndex:Je}=ko(Ve(ve),Se);eo("insert before row",{rowIndex:Je}),Ne(ii(B,[String(Je)],[{key:"",value:Ir(B[0])?{}:""}]))}})({json:n(W),selection:n(G),columns:n(Ie),readOnly:b(),onPatch:nn})}function er(){(function(S){var{json:B,selection:ve,columns:Se,readOnly:ae,onPatch:Ne}=S;if(!ae&&B!==void 0&&ve&&si(ve)){var{rowIndex:Je,columnIndex:Be}=ko(Ve(ve),Se);eo("insert after row",{rowIndex:Je});var Rt=Je+1,Kt=[String(Rt)],Vt=[{key:"",value:Ir(B[0])?{}:""}];Ne(Rt<B.length?ii(B,Kt,Vt):ld(B,[],Vt),(Zn,Er)=>({state:Er,selection:_t(ms({rowIndex:Rt,columnIndex:Be},Se))}))}})({json:n(W),selection:n(G),columns:n(Ie),readOnly:b(),onPatch:nn})}function J(){(function(S){var{json:B,selection:ve,columns:Se,readOnly:ae,onPatch:Ne}=S;if(!ae&&B!==void 0&&ve&&si(ve)){var{rowIndex:Je,columnIndex:Be}=ko(Ve(ve),Se);eo("remove row",{rowIndex:Je}),Ne(Ec([[String(Je)]]),(Rt,Kt)=>{var Vt=Je<Rt.length?Je:Je>0?Je-1:void 0,Zn=Vt!==void 0?_t(ms({rowIndex:Vt,columnIndex:Be},Se)):void 0;return eo("remove row new selection",{rowIndex:Je,newRowIndex:Vt,newSelection:Zn}),{state:Kt,selection:Zn}})}})({json:n(W),selection:n(G),columns:n(Ie),readOnly:b(),onPatch:nn})}function ne(){return(ne=at(function*(S){yield im({char:S,selectInside:!1,json:n(W),selection:n(G),readOnly:b(),parser:w(),onPatch:nn,onReplaceJson:V,onSelect:Jt})})).apply(this,arguments)}function ye(S){var B;S.preventDefault(),R((B=S.clipboardData)===null||B===void 0?void 0:B.getData("text/plain"))}function R(S){S!==void 0&&am({clipboardText:S,json:n(W),selection:n(G),readOnly:b(),parser:w(),onPatch:nn,onChangeText:ce,onPasteMultilineText:yn,openRepairModal:rt})}function V(S,B){var ve={json:n(W),text:n(ue)},Se={json:n(W),documentState:n(K),selection:n(G),sortedColumn:n(wt),text:n(ue),textIsRepaired:n(kt)},ae=ho(S,n(K)),Ne=typeof B=="function"?B(S,ae,n(G)):void 0;v(W,Ne?.json!==void 0?Ne.json:S),v(K,Ne?.state!==void 0?Ne.state:ae),v(G,Ne?.selection!==void 0?Ne.selection:n(G)),v(wt,void 0),v(ue,void 0),v(kt,!1),v(I,void 0),nt(n(W)),At(Se),pn(ve,void 0)}function ce(S,B){a("handleChangeText");var ve={json:n(W),text:n(ue)},Se={json:n(W),documentState:n(K),selection:n(G),sortedColumn:n(wt),text:n(ue),textIsRepaired:n(kt)};try{v(W,N()(S)),v(K,ho(n(W),n(K))),v(ue,void 0),v(kt,!1),v(I,void 0)}catch(Ne){try{v(W,N()(Ko(S))),v(K,ho(n(W),n(K))),v(ue,S),v(kt,!0),v(I,void 0)}catch{v(W,void 0),v(K,void 0),v(ue,S),v(kt,!1),v(I,n(ue)!==""?ki(n(ue),Ne.message||String(Ne)):void 0)}}if(typeof B=="function"){var ae=B(n(W),n(K),n(G));v(W,ae?.json!==void 0?ae.json:n(W)),v(K,ae?.state!==void 0?ae.state:n(K)),v(G,ae?.selection!==void 0?ae.selection:n(G))}nt(n(W)),At(Se),pn(ve,void 0)}function Me(S){a("select validation error",S),v(G,_t(S.path)),Vn(S.path)}function Fe(S){if(n(W)!==void 0){var{id:B,onTransform:ve,onClose:Se}=S,ae=S.rootPath||[];Pe=!0,qe()({id:B||d,json:n(W),rootPath:ae||[],onTransform:Ne=>{ve?ve({operations:Ne,json:n(W),transformedJson:ea(n(W),Ne)}):(a("onTransform",ae,Ne),nn(Ne))},onClose:()=>{Pe=!1,setTimeout(Le),Se&&Se()}})}}function Qe(S){a("openJSONEditorModal",{path:S}),Pe=!0,Ye()({content:{json:He(n(W),S)},path:S,onPatch:nn,onClose:()=>{Pe=!1,setTimeout(Le)}})}function rt(S,B){v(an,{text:S,onParse:ve=>Al(ve,Se=>El(Se,w())),onRepair:Zp,onApply:B,onClose:Le})}function Rn(){(function(S){b()||n(W)===void 0||(Pe=!0,we()({id:u,json:n(W),rootPath:S,onSort:B=>{var{operations:ve,itemPath:Se,direction:ae}=B;a("onSort",ve,S,Se,ae),nn(ve,(Ne,Je)=>({state:Je,sortedColumn:{path:Se,sortDirection:ae===-1?fo.desc:fo.asc}}))},onClose:()=>{Pe=!1,setTimeout(Le)}}))})([])}function Ft(){Fe({rootPath:[]})}function Gt(S){a("openFind",{findAndReplace:S}),v(Z,!1),v(U,!1),Bn(),v(Z,!0),v(U,S)}function Ot(){if(!b()&&m().canUndo){var S=m().undo();if(vl(S)){var B={json:n(W),text:n(ue)};v(W,S.undo.patch?ea(n(W),S.undo.patch):S.undo.json),v(K,S.undo.documentState),v(G,S.undo.selection),v(wt,S.undo.sortedColumn),v(ue,S.undo.text),v(kt,S.undo.textIsRepaired),v(I,void 0),a("undo",{item:S,json:n(W)}),pn(B,S.undo.patch&&S.redo.patch?{json:n(W),previousJson:B.json,redo:S.undo.patch,undo:S.redo.patch}:void 0),Le(),n(G)&&Vn(Ve(n(G)),{scrollToWhenVisible:!1})}else ee()(S)}}function Lt(){if(!b()&&m().canRedo){var S=m().redo();if(vl(S)){var B={json:n(W),text:n(ue)};v(W,S.redo.patch?ea(n(W),S.redo.patch):S.redo.json),v(K,S.redo.documentState),v(G,S.redo.selection),v(wt,S.redo.sortedColumn),v(ue,S.redo.text),v(kt,S.redo.textIsRepaired),v(I,void 0),a("redo",{item:S,json:n(W)}),pn(B,S.undo.patch&&S.redo.patch?{json:n(W),previousJson:B.json,redo:S.redo.patch,undo:S.undo.patch}:void 0),Le(),n(G)&&Vn(Ve(n(G)),{scrollToWhenVisible:!1})}else je()(S)}}function zr(S){v(Ue,S.getBoundingClientRect().height)}F(()=>(p(k()),p(O())),()=>{v(he,Td({escapeControlCharacters:k(),escapeUnicodeCharacters:O()}))}),F(()=>n(Z),()=>{(function(S){if(n(me)){var B=S?tl:-100;n(me).scrollTo({top:mo(me,n(me).scrollTop+=B),left:n(me).scrollLeft})}})(n(Z))}),F(()=>p(g()),()=>{(function(S){var B={json:n(W)},ve=Si(S)?S.text!==n(ue):!Nt(B.json,S.json);if(a("update external content",{isChanged:ve}),ve){var Se={json:n(W),documentState:n(K),selection:n(G),sortedColumn:n(wt),text:n(ue),textIsRepaired:n(kt)};if(Si(S))try{v(W,N()(S.text)),v(K,ho(n(W),n(K))),v(ue,S.text),v(kt,!1),v(I,void 0)}catch(ae){try{v(W,N()(Ko(S.text))),v(K,ho(n(W),n(K))),v(ue,S.text),v(kt,!0),v(I,void 0)}catch{v(W,void 0),v(K,void 0),v(ue,S.text),v(kt,!1),v(I,n(ue)!==""?ki(n(ue),ae.message||String(ae)):void 0)}}else v(W,S.json),v(K,ho(n(W),n(K))),v(ue,void 0),v(kt,!1),v(I,void 0);nt(n(W)),v(wt,void 0),At(Se)}})(g())}),F(()=>p(j()),()=>{(function(S){Nt(n(G),S)||(a("applyExternalSelection",{selection:n(G),externalSelection:S}),hl(S)&&v(G,S))})(j())}),F(()=>(n(Ie),n(W),p(M()),n(Te)),()=>{v(Ie,Nr(n(W))?(function(S,B){var ve=new Set(B.map(St)),Se=new Set(S.map(St));for(var ae of ve)Se.has(ae)||ve.delete(ae);for(var Ne of Se)ve.has(Ne)||ve.add(Ne);return[...ve].map(Oo)})(Ly(n(W),M(),n(Te)),n(Ie)):[])}),F(()=>(n(W),n(Ie)),()=>{v(it,!(!n(W)||on(n(Ie))))}),F(()=>(n(W),n(Te)),()=>{v(r,Array.isArray(n(W))&&n(W).length>n(Te))}),F(()=>(n(Ae),n(Ue),n(W),n(Z),tl),()=>{v(o,Vy(n(Ae),n(Ue),n(W),ke,ht,n(Z)?tl:0))}),F(()=>n(W),()=>{n(W),n(me)&&n(me).scrollTo({top:n(me).scrollTop,left:n(me).scrollLeft})}),F(()=>n(G),()=>{var S;S=n(G),Nt(S,j())||(a("onSelect",S),_()(S))}),F(()=>(p(b()),p(y()),p(w()),n(he),n(W),n(K),p(te())),()=>{v(Ze,{mode:jr.table,readOnly:b(),truncateTextSize:y(),parser:w(),normalization:n(he),getJson:()=>n(W),getDocumentState:()=>n(K),findElement:Hn,findNextInside:zt,focus:Le,onPatch:(S,B)=>nn((function(ve,Se){return ve.flatMap(ae=>{if(Md(ae)){var Ne=Oo(ae.path);if(Ne.length>0){for(var Je=[ae],Be=Zt(Ne);Be.length>0&&!Ha(Se,Be);)Je.unshift({op:"add",path:St(Be),value:{}}),Be=Zt(Be);return Je}}return ae})})(S,n(W)),B),onSelect:Jt,onFind:Gt,onPasteJson:lt,onRenderValue:te()})}),F(()=>(n(W),p(T()),p(w()),p(Y())),()=>{$t(n(W),T(),w(),Y())}),F(()=>(n(In),n(Ie)),()=>{v(s,Hy(n(In),n(Ie)))}),dn();var ut={validate:Cn,patch:$n,focus:Le,acceptAutoRepair:Ln,scrollTo:Vn,findElement:Hn,openTransformModal:Fe};yt(!0);var un=h1();fe("mousedown",za,function(S){!Ui(S.target,B=>B===n(ie))&&Ar(n(G))&&(a("click outside the editor, exit edit mode"),v(G,Zo(n(G))),Et&&n(xt)&&(n(xt).focus(),n(xt).blur()),a("blur (outside editor)"),n(xt)&&n(xt).blur())});var Xt,ln=We(un),_n=E(ln),xn=S=>{(function(B,ve){Ke(ve,!1);var Se=f(ve,"containsValidArray",9),ae=f(ve,"readOnly",9),Ne=f(ve,"showSearch",13,!1),Je=f(ve,"history",9),Be=f(ve,"onSort",9),Rt=f(ve,"onTransform",9),Kt=f(ve,"onContextMenu",9),Vt=f(ve,"onUndo",9),Zn=f(ve,"onRedo",9),Er=f(ve,"onRenderMenu",9);function C(){Ne(!Ne())}var $=q(void 0,!0),oe=q(void 0,!0);F(()=>(p(ae()),p(Be()),p(Se()),p(Rt()),p(Kt()),p(Vt()),p(Je()),p(Zn())),()=>{v($,ae()?[{type:"space"}]:[{type:"button",icon:pc,title:"Sort",className:"jse-sort",onClick:Be(),disabled:ae()||!Se()},{type:"button",icon:hc,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Rt(),disabled:ae()||!Se()},{type:"button",icon:Jc,title:"Search (Ctrl+F)",className:"jse-search",onClick:C,disabled:!Se()},{type:"button",icon:Ef,title:Dd,className:"jse-contextmenu",onClick:Kt()},{type:"separator"},{type:"button",icon:kd,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Vt(),disabled:!Je().canUndo},{type:"button",icon:Sd,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Zn(),disabled:!Je().canRedo},{type:"space"}])}),F(()=>(p(Er()),n($)),()=>{v(oe,Er()(n($))||n($))}),dn(),yt(!0),au(B,{get items(){return n(oe)}}),et()})(S,{get containsValidArray(){return n(it)},get readOnly(){return b()},get history(){return m()},onSort:Rn,onTransform:Ft,onUndo:Ot,onRedo:Lt,onContextMenu:Yn,get onRenderMenu(){return Ee()},get showSearch(){return n(Z)},set showSearch(B){v(Z,B)},$$legacy:!0})};Q(_n,S=>{x()&&S(xn)});var dt=D(_n,2),xr=S=>{var B=f1(),ve=We(B),Se=E(ve);Se.readOnly=!0,Fn(Se,Be=>v(xt,Be),()=>n(xt));var ae=D(ve,2),Ne=Be=>{var Rt=d1(),Kt=We(Rt);em(E(Kt),{get json(){return n(W)},get documentState(){return n(K)},get parser(){return w()},get showSearch(){return n(Z)},get showReplace(){return n(U)},get readOnly(){return b()},get columns(){return n(Ie)},onSearch:pt,onFocus:st,onPatch:nn,onClose:Ct});var Vt=D(Kt,2),Zn=E(Vt),Er=E(Zn),C=E(Er),$=E(C),oe=E($),Re=Ge=>{var qt=_e(()=>(p(Zs),n(s),P(()=>{var fr;return Zs([],(fr=n(s))===null||fr===void 0?void 0:fr.root)}))),lr=Tt(),qn=We(lr),rr=fr=>{var _r=r1();gi(E(_r),{get validationError(){return n(qt)},get onExpand(){return So}}),z(fr,_r)};Q(qn,fr=>{n(qt)&&fr(rr)}),z(Ge,lr)};Q(oe,Ge=>{p(on),n(s),P(()=>{var qt;return!on((qt=n(s))===null||qt===void 0?void 0:qt.root)})&&Ge(Re)});var ze=D($);or(ze,1,()=>n(Ie),pr,(Ge,qt)=>{var lr=o1();(function(qn,rr){Ke(rr,!1);var fr=q(void 0,!0),_r=q(void 0,!0),va=q(void 0,!0),lo=f(rr,"path",9),Ro=f(rr,"sortedColumn",9),_o=f(rr,"readOnly",9),To=f(rr,"onSort",9);F(()=>(p(lo()),ao),()=>{v(fr,on(lo())?"values":ao(lo()))}),F(()=>(p(Ro()),p(lo())),()=>{var wr;v(_r,Ro()&&Nt(lo(),(wr=Ro())===null||wr===void 0?void 0:wr.path)?Ro().sortDirection:void 0)}),F(()=>(n(_r),_v),()=>{v(va,n(_r)?_v[n(_r)]:void 0)}),dn(),yt(!0);var Kr,Br=Yx(),co=E(Br),fa=E(co),uo=D(co,2),bn=wr=>{var kr=Qx(),us=E(kr),Js=_e(()=>(n(_r),p(fo),p(Ra),p(uv),P(()=>n(_r)===fo.asc?Ra:uv)));Yt(us,{get data(){return n(Js)}}),xe(()=>fn(kr,"title","Currently sorted in ".concat(n(va)," order"))),z(wr,kr)};Q(uo,wr=>{n(_r)!==void 0&&wr(bn)}),xe(wr=>{Kr=jt(Br,1,"jse-column-header svelte-5pxwfq",null,Kr,{"jse-readonly":_o()}),fn(Br,"title",_o()?n(fr):n(fr)+" (Click to sort the data by this column)"),tt(fa,wr)},[()=>(p(ka),n(fr),p(50),P(()=>ka(n(fr),50)))]),fe("click",Br,function(){_o()||To()({path:lo(),sortDirection:n(_r)===fo.asc?fo.desc:fo.asc})}),z(qn,Br),et()})(E(lr),{get path(){return n(qt)},get sortedColumn(){return n(wt)},get readOnly(){return b()},onSort:jn}),z(Ge,lr)});var Oe=D(ze),mt=Ge=>{var qt=a1(),lr=E(qt),qn=_e(()=>(n(W),P(()=>Array.isArray(n(W))?n(W).length:0)));(function(rr,fr){Ke(fr,!1);var _r=f(fr,"count",9),va=f(fr,"maxSampleCount",9),lo=f(fr,"readOnly",9),Ro=f(fr,"onRefresh",9);yt(!0);var _o,To=n1();Yt(E(To),{get data(){return Lg}}),xe(()=>{_o=jt(To,1,"jse-column-header svelte-1wgrwv3",null,_o,{"jse-readonly":lo()}),fn(To,"title","The Columns are created by sampling ".concat(va()," items out of ").concat(_r(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")}),fe("click",To,()=>Ro()()),z(rr,To),et()})(lr,{get count(){return n(qn)},get maxSampleCount(){return n(Te)},get readOnly(){return b()},onRefresh:()=>v(Te,1/0)}),z(Ge,qt)};Q(Oe,Ge=>{n(r)&&Ge(mt)});var vt,Ht,mn=D(C),rn=E(mn),Dn=D(mn);or(Dn,1,()=>(n(o),P(()=>n(o).visibleItems)),pr,(Ge,qt,lr)=>{var qn=_e(()=>(n(o),P(()=>n(o).startIndex+lr))),rr=_e(()=>(n(s),p(n(qn)),P(()=>n(s).rows[n(qn)]))),fr=_e(()=>(p(Zs),p(n(qn)),p(n(rr)),P(()=>{var Kr;return Zs([String(n(qn))],(Kr=n(rr))===null||Kr===void 0?void 0:Kr.row)}))),_r=_e(()=>(p(Vo),n(W),n(Ce),p(n(qn)),P(()=>Vo(n(W),n(Ce),[String(n(qn))])))),va=u1(),lo=E(va);Tp(lo,()=>n(qn),Kr=>{var Br=s1(),co=E(Br),fa=D(co),uo=bn=>{gi(bn,{get validationError(){return n(fr)},get onExpand(){return So}})};Q(fa,bn=>{n(fr)&&bn(uo)}),to(Br,(bn,wr)=>xd?.(bn,wr),()=>bn=>(function(wr,kr){ke[kr]=wr.getBoundingClientRect().height})(bn,n(qn))),xe(()=>{var bn;return tt(co,"".concat((bn=n(qn))!==null&&bn!==void 0?bn:""," "))}),z(Kr,Br)});var Ro=D(lo);or(Ro,1,()=>n(Ie),pr,(Kr,Br,co,fa)=>{var uo,bn=_e(()=>(p(n(qn)),n(Br),P(()=>[String(n(qn))].concat(n(Br))))),wr=_e(()=>(p(He),n(qt),n(Br),P(()=>He(n(qt),n(Br))))),kr=_e(()=>(p(tn),n(G),p(oa),p(n(bn)),P(()=>tn(n(G))&&oa(n(G).path,n(bn))))),us=_e(()=>(p(n(rr)),P(()=>{var Sr;return(Sr=n(rr))===null||Sr===void 0?void 0:Sr.columns[co]}))),Js=_e(()=>(p(Zs),p(n(bn)),p(n(us)),P(()=>Zs(n(bn),n(us))))),ds=l1(),$i=E(ds),Ws=E($i),Di=Sr=>{var xo=_e(()=>(p(Ac),p(Vo),n(qt),p(n(_r)),n(Br),P(()=>Ac(Vo(n(qt),n(_r),n(Br)))))),Ji=_e(()=>(p(n(xo)),P(()=>!!n(xo)&&n(xo).some(fs=>fs.active)))),Wi=_e(()=>(p(on),p(n(xo)),P(()=>!on(n(xo)))));(function(fs,Lr){Ke(Lr,!1);var _i=f(Lr,"path",9),nv=f(Lr,"value",9),rv=f(Lr,"parser",9),jm=f(Lr,"isSelected",9),ym=f(Lr,"containsSearchResult",9),xm=f(Lr,"containsActiveSearchResult",9),wm=f(Lr,"onEdit",9);yt(!0);var ov,Ul=Zx(),km=E(Ul);xe(Bi=>{ov=jt(Ul,1,"jse-inline-value svelte-1jv89ui",null,ov,{"jse-selected":jm(),"jse-highlight":ym(),"jse-active":xm()}),tt(km,Bi)},[()=>(p(ka),p(rv()),p(nv()),p(50),P(()=>{var Bi;return ka((Bi=rv().stringify(nv()))!==null&&Bi!==void 0?Bi:"",50)}))]),fe("dblclick",Ul,()=>wm()(_i())),z(fs,Ul),et()})(Sr,{get path(){return n(bn)},get value(){return n(wr)},get parser(){return w()},get isSelected(){return n(kr)},get containsSearchResult(){return n(Wi)},get containsActiveSearchResult(){return n(Ji)},onEdit:Qe})},su=Sr=>{var xo=_e(()=>(p(Vo),n(W),n(Ce),p(n(bn)),P(()=>{var Lr;return(Lr=Vo(n(W),n(Ce),n(bn)))===null||Lr===void 0?void 0:Lr.searchResults}))),Ji=_e(()=>n(wr)!==void 0?n(wr):""),Wi=_e(()=>(p(Yo),n(W),n(K),p(n(bn)),P(()=>Yo(n(W),n(K),n(bn))))),fs=_e(()=>n(kr)?n(G):void 0);Yh(Sr,{get path(){return n(bn)},get value(){return n(Ji)},get enforceString(){return n(Wi)},get selection(){return n(fs)},get searchResultItems(){return n(xo)},get context(){return n(Ze)}})};Q(Ws,Sr=>{p(Kn),p(n(wr)),P(()=>Kn(n(wr)))?Sr(Di):Sr(su,!1)});var iu=D(Ws),lu=Sr=>{var xo=i1();Wa(E(xo),{selected:!0,onContextMenu:sr}),z(Sr,xo)};Q(iu,Sr=>{p(b()),p(n(kr)),p(Ar),n(G),P(()=>!b()&&n(kr)&&!Ar(n(G)))&&Sr(lu)});var Bo=D($i,2),vs=Sr=>{gi(Sr,{get validationError(){return n(Js)},get onExpand(){return So}})};Q(Bo,Sr=>{n(Js)&&Sr(vs)}),xe(Sr=>{fn(ds,"data-path",Sr),uo=jt($i,1,"jse-value-outer svelte-1p86y3c",null,uo,{"jse-selected-value":n(kr)})},[()=>(p(uc),p(n(bn)),P(()=>uc(n(bn))))]),z(Kr,ds)});var _o=D(Ro),To=Kr=>{z(Kr,c1())};Q(_o,Kr=>{n(r)&&Kr(To)}),z(Ge,va)});var gt,tr=E(D(Dn));Fn(Vt,Ge=>v(me,Ge),()=>n(me)),to(Vt,(Ge,qt)=>xd?.(Ge,qt),()=>zr),Dr(()=>fe("scroll",Vt,sn));var zn=D(Vt,2),nr=Ge=>{var qt=_e(()=>(n(se),P(()=>"You pasted a JSON ".concat(Array.isArray(n(se).contents)?"array":"object"," as text")))),lr=_e(()=>[{icon:rs,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:Gn},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:Or}]);jo(Ge,{type:"info",get message(){return n(qt)},get actions(){return n(lr)}})};Q(zn,Ge=>{n(se)&&Ge(nr)});var gn=D(zn,2),ot=Ge=>{var qt=_e(()=>[{icon:rs,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:An},{text:"Leave as is",title:"Keep the pasted array",onClick:Wt}]);jo(Ge,{type:"info",message:"Multiline text was pasted as array",get actions(){return n(qt)}})};Q(gn,Ge=>{n(L)&&Ge(ot)});var en=D(gn,2),bt=Ge=>{var qt=_e(()=>b()?[]:[{icon:Cd,text:"Ok",title:"Accept the repaired document",onClick:Ln},{icon:mc,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:gr}]);jo(Ge,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(qt)},onClose:Le})};Q(en,Ge=>{n(kt)&&Ge(bt)}),Xd(D(en,2),{get validationErrors(){return n(In)},selectError:Me}),xe(()=>{vt=jt(mn,1,"jse-table-invisible-start-section svelte-1p86y3c",null,vt,{"jse-search-box-background":n(Z)}),fn(rn,"colspan",(n(Ie),P(()=>n(Ie).length))),Ht=qo(rn,"",Ht,{height:(n(o),P(()=>n(o).startHeight+"px"))}),fn(tr,"colspan",(n(Ie),P(()=>n(Ie).length))),gt=qo(tr,"",gt,{height:(n(o),P(()=>n(o).endHeight+"px"))})}),z(Be,Rt)},Je=Be=>{var Rt=Tt(),Kt=We(Rt),Vt=Er=>{var C=v1(),$=We(C),oe=_e(()=>b()?[]:[{icon:mc,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:gr}]);jo($,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(oe)}}),lm(D($,2),{get text(){return n(ue)},get json(){return n(W)},get indentation(){return A()},get parser(){return w()}}),z(Er,C)},Zn=Er=>{t1(Er,{get text(){return n(ue)},get json(){return n(W)},get readOnly(){return b()},get parser(){return w()},openJSONEditorModal:Qe,extractPath:Mt,get onChangeMode(){return X()},onClick:()=>{Le()}})};Q(Kt,Er=>{n(I)&&n(ue)!==void 0&&n(ue)!==""?Er(Vt):Er(Zn,!1)},!0),z(Be,Rt)};Q(ae,Be=>{n(it)?Be(Ne):Be(Je,!1)}),fe("paste",Se,ye),z(S,B)},vr=S=>{z(S,p1())};Q(dt,S=>{h?S(vr,!1):S(xr)}),Fn(ln,S=>v(ie,S),()=>n(ie));var qr=D(ln,2),hn=S=>{Zh(S,{onClose:()=>v(Ut,!1)})};Q(qr,S=>{n(Ut)&&S(hn)});var On=D(qr,2),br=S=>{Qh(S,ts(()=>n(an),{onClose:()=>{var B;(B=n(an))===null||B===void 0||B.onClose(),v(an,void 0)}}))};return Q(On,S=>{n(an)&&S(br)}),xe(()=>Xt=jt(ln,1,"jse-table-mode svelte-1p86y3c",null,Xt,{"no-main-menu":!x()})),fe("mousedown",ln,function(S){if(S.buttons===1||S.buttons===2){var B=S.target;B.isContentEditable||Le();var ve=sh(B);if(ve){if(Ar(n(G))&&gl(n(W),n(G),ve))return;v(G,_t(ve)),S.preventDefault()}}}),fe("keydown",ln,function(S){var B=la(S);if(a("keydown",{combo:B,key:S.key}),B==="Ctrl+X"&&(S.preventDefault(),Wr(!0)),B==="Ctrl+Shift+X"&&(S.preventDefault(),Wr(!1)),B==="Ctrl+C"&&(S.preventDefault(),$r(!0)),B==="Ctrl+Shift+C"&&(S.preventDefault(),$r(!1)),B==="Ctrl+D"&&(S.preventDefault(),Mn()),B!=="Delete"&&B!=="Backspace"||(S.preventDefault(),Bt()),B==="Insert"&&S.preventDefault(),B==="Ctrl+A"&&S.preventDefault(),B==="Ctrl+Q"&&hr(S),B==="ArrowLeft"&&(S.preventDefault(),Dt(),n(G))){var ve=(function(Rt,Kt){var{rowIndex:Vt,columnIndex:Zn}=ko(Ve(Kt),Rt);return Zn>0?_t(ms({rowIndex:Vt,columnIndex:Zn-1},Rt)):Kt})(n(Ie),n(G));v(G,ve),ar(Ve(ve))}if(B==="ArrowRight"&&(S.preventDefault(),Dt(),n(G))){var Se=(function(Rt,Kt){var{rowIndex:Vt,columnIndex:Zn}=ko(Ve(Kt),Rt);return Zn<Rt.length-1?_t(ms({rowIndex:Vt,columnIndex:Zn+1},Rt)):Kt})(n(Ie),n(G));v(G,Se),ar(Ve(Se))}if(B==="ArrowUp"&&(S.preventDefault(),Dt(),n(G))){var ae=(function(Rt,Kt){var{rowIndex:Vt,columnIndex:Zn}=ko(Ve(Kt),Rt);return Vt>0?_t(ms({rowIndex:Vt-1,columnIndex:Zn},Rt)):Kt})(n(Ie),n(G));v(G,ae),ar(Ve(ae))}if(B==="ArrowDown"&&(S.preventDefault(),Dt(),n(G))){var Ne=(function(Rt,Kt,Vt){var{rowIndex:Zn,columnIndex:Er}=ko(Ve(Vt),Kt);return Zn<Rt.length-1?_t(ms({rowIndex:Zn+1,columnIndex:Er},Kt)):Vt})(n(W),n(Ie),n(G));v(G,Ne),ar(Ve(Ne))}if(B==="Enter"&&n(G)&&tn(n(G))){S.preventDefault();var Je=n(G).path;Kn(He(n(W),Je))?Qe(Je):b()||v(G,be(be({},n(G)),{},{edit:!0}))}if(B.replace(/^Shift\+/,"").length===1&&n(G))return S.preventDefault(),void(function(Rt){ne.apply(this,arguments)})(S.key);if(B==="Ctrl+Enter"&&tn(n(G))){S.preventDefault();var Be=He(n(W),n(G).path);ql(Be)&&window.open(String(Be),"_blank")}B==="Escape"&&n(G)&&(S.preventDefault(),v(G,void 0)),B==="Ctrl+F"&&(S.preventDefault(),Gt(!1)),B==="Ctrl+H"&&(S.preventDefault(),Gt(!0)),B==="Ctrl+Z"&&(S.preventDefault(),Ot()),B==="Ctrl+Shift+Z"&&(S.preventDefault(),Lt())}),fe("contextmenu",ln,hr),z(e,un),ct(t,"validate",Cn),ct(t,"patch",$n),ct(t,"focus",Le),ct(t,"acceptAutoRepair",Ln),ct(t,"scrollTo",Vn),ct(t,"findElement",Hn),ct(t,"openTransformModal",Fe),et(ut)}function wf(e,t){Ke(t,!1);var r=f(t,"content",8),o=f(t,"selection",12),s=f(t,"readOnly",8),a=f(t,"indentation",8),i=f(t,"tabSize",8),l=f(t,"truncateTextSize",8),c=f(t,"externalMode",8),u=f(t,"mainMenuBar",8),d=f(t,"navigationBar",8),h=f(t,"statusBar",8),b=f(t,"askToFormat",8),g=f(t,"escapeControlCharacters",8),j=f(t,"escapeUnicodeCharacters",8),m=f(t,"flattenColumns",8),y=f(t,"parser",8),x=f(t,"parseMemoizeOne",8),k=f(t,"validator",8),O=f(t,"validationParser",8),M=f(t,"pathParser",8),w=f(t,"insideModal",8),N=f(t,"onChange",8),T=f(t,"onChangeMode",8),Y=f(t,"onSelect",8),A=f(t,"onRenderValue",8),re=f(t,"onClassName",8),X=f(t,"onRenderMenu",8),_=f(t,"onRenderContextMenu",8),ee=f(t,"onError",8),je=f(t,"onFocus",8),te=f(t,"onBlur",8),Ee=f(t,"onSortModal",8),De=f(t,"onTransformModal",8),$e=f(t,"onJSONEditorModal",8),pe=q(),we=q(),qe=q(),Ye=Ur("jsoneditor:JSONEditorRoot"),he=q(mm({onChange:ke=>v(he,ke)}).get()),ie=q(c());function me(ke){if(ad(ke)){v(ie,ke.undo.mode);var Ue=n(he).items(),Ae=Ue.findIndex(Jt=>Jt===ke),ht=Ae!==-1?Ue[Ae-1]:void 0;Ye("handleUndo",{index:Ae,item:ke,items:Ue,prevItem:ht}),ht&&o(ht.redo.selection),T()(n(ie))}}function xt(ke){if(ad(ke)){v(ie,ke.redo.mode);var Ue=n(he).items(),Ae=Ue.findIndex(Jt=>Jt===ke),ht=Ae!==-1?Ue[Ae+1]:void 0;Ye("handleRedo",{index:Ae,item:ke,items:Ue,nextItem:ht}),ht&&o(ht.undo.selection),T()(n(ie))}}var an=q(),le={type:"separator"},W=q(),ue=q();function I(ke){if(n(pe))return n(pe).patch(ke);if(n(we))return n(we).patch(ke);if(n(qe))return n(qe).patch(ke);throw new Error('Method patch is not available in mode "'.concat(n(ie),'"'))}function se(ke,Ue){if(n(pe))return n(pe).expand(ke,Ue);if(n(qe))return n(qe).expand(ke,Ue);throw new Error('Method expand is not available in mode "'.concat(n(ie),'"'))}function L(ke,Ue){if(n(pe))return n(pe).collapse(ke,Ue);if(n(qe))return n(qe).collapse(ke,Ue);throw new Error('Method collapse is not available in mode "'.concat(n(ie),'"'))}function Ce(ke){if(n(qe))n(qe).openTransformModal(ke);else if(n(pe))n(pe).openTransformModal(ke);else{if(!n(we))throw new Error('Method transform is not available in mode "'.concat(n(ie),'"'));n(we).openTransformModal(ke)}}function Z(){if(n(qe))return n(qe).validate();if(n(pe))return n(pe).validate();if(n(we))return n(we).validate();throw new Error('Method validate is not available in mode "'.concat(n(ie),'"'))}function U(){return n(pe)?n(pe).acceptAutoRepair():r()}function pt(ke){if(n(pe))return n(pe).scrollTo(ke);if(n(we))return n(we).scrollTo(ke);throw new Error('Method scrollTo is not available in mode "'.concat(n(ie),'"'))}function st(ke){if(n(pe))return n(pe).findElement(ke);if(n(we))return n(we).findElement(ke);throw new Error('Method findElement is not available in mode "'.concat(n(ie),'"'))}function Xe(){n(qe)?n(qe).focus():n(pe)?n(pe).focus():n(we)&&n(we).focus()}function Ct(){return Te.apply(this,arguments)}function Te(){return(Te=at(function*(){n(qe)&&(yield n(qe).refresh())})).apply(this,arguments)}F(()=>p(c()),()=>{(function(ke){if(ke!==n(ie)){var Ue={type:"mode",undo:{mode:n(ie),selection:void 0},redo:{mode:ke,selection:void 0}};n(ie)==="text"&&n(qe)&&n(qe).flush(),Ye("add history item",Ue),n(he).add(Ue),v(ie,ke)}})(c())}),F(()=>(n(ie),p(T())),()=>{v(an,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(n(ie),")"),className:"jse-group-button jse-first"+(n(ie)===jr.text?" jse-selected":""),onClick:()=>T()(jr.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(n(ie),")"),className:"jse-group-button "+(n(ie)===jr.tree?" jse-selected":""),onClick:()=>T()(jr.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(n(ie),")"),className:"jse-group-button jse-last"+(n(ie)===jr.table?" jse-selected":""),onClick:()=>T()(jr.table)}])}),F(()=>(n(an),p(X()),n(ie),p(w()),p(s())),()=>{v(W,ke=>{var Ue=Oc(ke[0])?n(an).concat(ke):n(an).concat(le,ke),Ae=Ju(Ue);return X()(Ue,{mode:n(ie),modal:w(),readOnly:s()})||Ae})}),F(()=>(p(_()),n(ie),p(w()),p(s()),p(o())),()=>{v(ue,ke=>{var Ue,Ae=Ju(ke);return(Ue=_()(ke,{mode:n(ie),modal:w(),readOnly:s(),selection:o()}))!==null&&Ue!==void 0?Ue:!s()&&Ae})}),dn();var Ie={patch:I,expand:se,collapse:L,transform:Ce,validate:Z,acceptAutoRepair:U,scrollTo:pt,findElement:st,focus:Xe,refresh:Ct};yt();var it=Tt(),Pe=We(it),Et=ke=>{Fn(Hx(ke,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(he)},get readOnly(){return s()},get indentation(){return a()},get tabSize(){return i()},get mainMenuBar(){return u()},get statusBar(){return h()},get askToFormat(){return b()},get escapeUnicodeCharacters(){return j()},get parser(){return y()},get validator(){return k()},get validationParser(){return O()},get onChange(){return N()},get onChangeMode(){return T()},get onSelect(){return Y()},onUndo:me,onRedo:xt,get onError(){return ee()},get onFocus(){return je()},get onBlur(){return te()},get onRenderMenu(){return n(W)},get onSortModal(){return Ee()},get onTransformModal(){return De()},$$legacy:!0}),Ue=>v(qe,Ue),()=>n(qe))},Ut=ke=>{var Ue=Tt(),Ae=We(Ue),ht=nt=>{Fn(m1(nt,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(he)},get readOnly(){return s()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get escapeControlCharacters(){return g()},get escapeUnicodeCharacters(){return j()},get flattenColumns(){return m()},get parser(){return y()},get parseMemoizeOne(){return x()},get validator(){return k()},get validationParser(){return O()},get indentation(){return a()},get onChange(){return N()},get onChangeMode(){return T()},get onSelect(){return Y()},onUndo:me,onRedo:xt,get onRenderValue(){return A()},get onFocus(){return je()},get onBlur(){return te()},get onRenderMenu(){return n(W)},get onRenderContextMenu(){return n(ue)},get onSortModal(){return Ee()},get onTransformModal(){return De()},get onJSONEditorModal(){return $e()},$$legacy:!0}),K=>v(we,K),()=>n(we))},Jt=nt=>{Fn(wd(nt,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(he)},get readOnly(){return s()},get indentation(){return a()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get navigationBar(){return d()},get escapeControlCharacters(){return g()},get escapeUnicodeCharacters(){return j()},get parser(){return y()},get parseMemoizeOne(){return x()},get validator(){return k()},get validationParser(){return O()},get pathParser(){return M()},get onError(){return ee()},get onChange(){return N()},get onChangeMode(){return T()},get onSelect(){return Y()},onUndo:me,onRedo:xt,get onRenderValue(){return A()},get onClassName(){return re()},get onFocus(){return je()},get onBlur(){return te()},get onRenderMenu(){return n(W)},get onRenderContextMenu(){return n(ue)},get onSortModal(){return Ee()},get onTransformModal(){return De()},get onJSONEditorModal(){return $e()},$$legacy:!0}),K=>v(pe,K),()=>n(pe))};Q(Ae,nt=>{n(ie),p(jr),P(()=>n(ie)===jr.table)?nt(ht):nt(Jt,!1)},!0),z(ke,Ue)};return Q(Pe,ke=>{n(ie),p(jr),P(()=>n(ie)===jr.text||String(n(ie))==="code")?ke(Et):ke(Ut,!1)}),z(e,it),ct(t,"patch",I),ct(t,"expand",se),ct(t,"collapse",L),ct(t,"transform",Ce),ct(t,"validate",Z),ct(t,"acceptAutoRepair",U),ct(t,"scrollTo",pt),ct(t,"findElement",st),ct(t,"focus",Xe),ct(t,"refresh",Ct),et(Ie)}ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-t4zsk3 {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) .jse-label-inner:where(.svelte-t4zsk3) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-modal-inline-editor:where(.svelte-t4zsk3) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) .jse-error:where(.svelte-t4zsk3) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var g1=H('<div class="jse-error svelte-t4zsk3"> </div>'),b1=H('<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>'),j1=H('<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>'),y1=H('<button type="button" class="jse-primary svelte-t4zsk3">Close</button>'),x1=H('<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>',1),w1=H('<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>'),k1={};ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-lwzlls {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) th:where(.svelte-lwzlls),
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) td:where(.svelte-lwzlls) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls input.jse-path:where(.svelte-lwzlls) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-lwzlls .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) {
  height: 200px;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) .jse-error:where(.svelte-lwzlls) {
  color: var(--jse-error-color, #ee5341);
}`);var Ys=Vc(()=>k1),S1=H('<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>'),C1=H('<div class="jse-error svelte-lwzlls"> </div>'),M1=H('<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>',1);ft(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-1l55585 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-1l55585:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var O1=H('<div role="none"><!></div> <!> <!> <!>',1);function gm(e,t){Ke(t,!1);var r=q(void 0,!0),o=Ur("jsoneditor:JSONEditor"),s={text:""},a=void 0,i=!1,l=jr.tree,c=!0,u=!0,d=!0,h=!0,b=!1,g=!1,j=!0,m=JSON,y=void 0,x=JSON,k={parse:Th,stringify:ao},O=[ih],M=O[0].id,w=So,N=void 0,T=void 0,Y=Rh,A=So,re=So,X=So,_=So,ee=de=>{console.error(de),alert(de.toString())},je=So,te=So,Ee=f(t,"content",13,s),De=f(t,"selection",13,a),$e=f(t,"readOnly",13,i),pe=f(t,"indentation",13,2),we=f(t,"tabSize",13,4),qe=f(t,"truncateTextSize",13,1e3),Ye=f(t,"mode",13,l),he=f(t,"mainMenuBar",13,c),ie=f(t,"navigationBar",13,u),me=f(t,"statusBar",13,d),xt=f(t,"askToFormat",13,h),an=f(t,"escapeControlCharacters",13,b),le=f(t,"escapeUnicodeCharacters",13,g),W=f(t,"flattenColumns",13,j),ue=f(t,"parser",13,m),I=f(t,"validator",13,y),se=f(t,"validationParser",13,x),L=f(t,"pathParser",13,k),Ce=f(t,"queryLanguages",13,O),Z=f(t,"queryLanguageId",13,M),U=f(t,"onChangeQueryLanguage",13,w),pt=f(t,"onChange",13,N),st=f(t,"onSelect",13,T),Xe=f(t,"onRenderValue",13,Y),Ct=f(t,"onClassName",13,A),Te=f(t,"onRenderMenu",13,re),Ie=f(t,"onRenderContextMenu",13,X),it=f(t,"onChangeMode",13,_),Pe=f(t,"onError",13,ee),Et=f(t,"onFocus",13,je),Ut=f(t,"onBlur",13,te),ke=q(oi(),!0),Ue=q(!1,!0),Ae=q(void 0,!0),ht=q(void 0,!0),Jt=q(void 0,!0),nt=q(void 0,!0),K=q(ue(),!0);function G(){return Ee()}function wt(de){o("set");var Pt=xu(de);if(Pt)throw new Error(Pt);v(ke,oi()),Ee(de),Bn()}function kt(de){o("update");var Pt=xu(de);if(Pt)throw new Error(Pt);Ee(de),Bn()}function jn(de){var Pt=n(Ae).patch(de);return Bn(),Pt}function Ze(de){De(de),Bn()}function At(de,Pt){n(Ae).expand(de,Pt),Bn()}function In(de){var Pt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(Ae).collapse(de,Pt),Bn()}function Un(){var de=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n(Ae).transform(de),Bn()}function $t(){return n(Ae).validate()}function Cn(){var de=n(Ae).acceptAutoRepair();return Bn(),de}function $n(de){return nn.apply(this,arguments)}function nn(){return(nn=at(function*(de){yield n(Ae).scrollTo(de)})).apply(this,arguments)}function pn(de){return n(Ae).findElement(de)}function lt(){n(Ae).focus(),Bn()}function yn(){return zt.apply(this,arguments)}function zt(){return(zt=at(function*(){yield n(Ae).refresh()})).apply(this,arguments)}function Le(de){var Pt,vn,An,ir,Or,Wt,gr,Wr,Xn,$r,Pn,Bt,Mt,Mn,dr,er,J,ne,ye,R,V,ce,Me,Fe,Qe,rt,Rn,Ft,Gt,Ot,Lt,zr=Object.keys(de);for(var ut of zr)switch(ut){case"content":Ee((Pt=de[ut])!==null&&Pt!==void 0?Pt:s);break;case"selection":De((vn=de[ut])!==null&&vn!==void 0?vn:a);break;case"readOnly":$e((An=de[ut])!==null&&An!==void 0?An:i);break;case"indentation":pe((ir=de[ut])!==null&&ir!==void 0?ir:2);break;case"tabSize":we((Or=de[ut])!==null&&Or!==void 0?Or:4);break;case"truncateTextSize":qe((Wt=de[ut])!==null&&Wt!==void 0?Wt:1e3);break;case"mode":Ye((gr=de[ut])!==null&&gr!==void 0?gr:l);break;case"mainMenuBar":he((Wr=de[ut])!==null&&Wr!==void 0?Wr:c);break;case"navigationBar":ie((Xn=de[ut])!==null&&Xn!==void 0?Xn:u);break;case"statusBar":me(($r=de[ut])!==null&&$r!==void 0?$r:d);break;case"askToFormat":xt((Pn=de[ut])!==null&&Pn!==void 0?Pn:h);break;case"escapeControlCharacters":an((Bt=de[ut])!==null&&Bt!==void 0?Bt:b);break;case"escapeUnicodeCharacters":le((Mt=de[ut])!==null&&Mt!==void 0?Mt:g);break;case"flattenColumns":W((Mn=de[ut])!==null&&Mn!==void 0?Mn:j);break;case"parser":ue((dr=de[ut])!==null&&dr!==void 0?dr:m);break;case"validator":I((er=de[ut])!==null&&er!==void 0?er:y);break;case"validationParser":se((J=de[ut])!==null&&J!==void 0?J:x);break;case"pathParser":L((ne=de[ut])!==null&&ne!==void 0?ne:k);break;case"queryLanguages":Ce((ye=de[ut])!==null&&ye!==void 0?ye:O);break;case"queryLanguageId":Z((R=de[ut])!==null&&R!==void 0?R:M);break;case"onChangeQueryLanguage":U((V=de[ut])!==null&&V!==void 0?V:w);break;case"onChange":pt((ce=de[ut])!==null&&ce!==void 0?ce:N);break;case"onRenderValue":Xe((Me=de[ut])!==null&&Me!==void 0?Me:Y);break;case"onClassName":Ct((Fe=de[ut])!==null&&Fe!==void 0?Fe:A);break;case"onRenderMenu":Te((Qe=de[ut])!==null&&Qe!==void 0?Qe:re);break;case"onRenderContextMenu":Ie((rt=de[ut])!==null&&rt!==void 0?rt:X);break;case"onChangeMode":it((Rn=de[ut])!==null&&Rn!==void 0?Rn:_);break;case"onSelect":st((Ft=de[ut])!==null&&Ft!==void 0?Ft:T);break;case"onError":Pe((Gt=de[ut])!==null&&Gt!==void 0?Gt:ee);break;case"onFocus":Et((Ot=de[ut])!==null&&Ot!==void 0?Ot:je);break;case"onBlur":Ut((Lt=de[ut])!==null&&Lt!==void 0?Lt:te);break;default:un(ut)}function un(Xt){o('Unknown property "'.concat(Xt,'"'))}Ce().some(Xt=>Xt.id===Z())||Z(Ce()[0].id),Bn()}function sn(){return Dt.apply(this,arguments)}function Dt(){return(Dt=at(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function Ln(de,Pt,vn){Ee(de),pt()&&pt()(de,Pt,vn)}function Vn(de){De(de),st()&&st()(Ju(de))}function Wn(){v(Ue,!0),Et()&&Et()()}function ar(){v(Ue,!1),Ut()&&Ut()()}function Hn(de){return sr.apply(this,arguments)}function sr(){return(sr=at(function*(de){Ye()!==de&&(Ye(de),Bn(),lt(),it()(de))})).apply(this,arguments)}function hr(de){o("handleChangeQueryLanguage",de),Z(de),U()(de)}function Yn(de){var{id:Pt,json:vn,rootPath:An,onTransform:ir,onClose:Or}=de;$e()||v(nt,{id:Pt,json:vn,rootPath:An,indentation:pe(),truncateTextSize:qe(),escapeControlCharacters:an(),escapeUnicodeCharacters:le(),parser:ue(),parseMemoizeOne:n(r),validationParser:se(),pathParser:L(),queryLanguages:Ce(),queryLanguageId:Z(),onChangeQueryLanguage:hr,onRenderValue:Xe(),onRenderMenu:Wt=>Te()(Wt,{mode:Ye(),modal:!0,readOnly:$e()}),onRenderContextMenu:Wt=>Ie()(Wt,{mode:Ye(),modal:!0,readOnly:$e(),selection:De()}),onClassName:Ct(),onTransform:ir,onClose:Or})}function yr(de){$e()||v(Jt,de)}function ur(de){var{content:Pt,path:vn,onPatch:An,onClose:ir}=de;o("onJSONEditorModal",{content:Pt,path:vn}),v(ht,{content:Pt,path:vn,onPatch:An,readOnly:$e(),indentation:pe(),tabSize:we(),truncateTextSize:qe(),mainMenuBar:he(),navigationBar:ie(),statusBar:me(),askToFormat:xt(),escapeControlCharacters:an(),escapeUnicodeCharacters:le(),flattenColumns:W(),parser:ue(),validator:void 0,validationParser:se(),pathParser:L(),onRenderValue:Xe(),onClassName:Ct(),onRenderMenu:Te(),onRenderContextMenu:Ie(),onSortModal:yr,onTransformModal:Yn,onClose:ir})}function mr(de){de.stopPropagation()}F(()=>(p(ue()),n(K),p(Ee()),oi),()=>{if(!Zc(ue(),n(K))){if(o("parser changed, recreate editor"),Ci(Ee())){var de=n(K).stringify(Ee().json);Ee({json:de!==void 0?ue().parse(de):void 0})}v(K,ue()),v(ke,oi())}}),F(()=>p(Ee()),()=>{var de=xu(Ee());de&&console.error("Error: "+de)}),F(()=>p(De()),()=>{De()===null&&console.warn("selection is invalid: it is null but should be undefined")}),F(()=>p(ue()),()=>{v(r,il(ue().parse))}),F(()=>p(Ye()),()=>{o("mode changed to",Ye())}),dn();var Gn={get:G,set:wt,update:kt,patch:jn,select:Ze,expand:At,collapse:In,transform:Un,validate:$t,acceptAutoRepair:Cn,scrollTo:$n,findElement:pn,focus:lt,refresh:yn,updateProps:Le,destroy:sn};return yt(!0),Xu(e,{children:(de,Pt)=>{var vn,An=O1(),ir=We(An);Tp(E(ir),()=>n(ke),Pn=>{Fn(wf(Pn,{get externalMode(){return Ye()},get content(){return Ee()},get selection(){return De()},get readOnly(){return $e()},get indentation(){return pe()},get tabSize(){return we()},get truncateTextSize(){return qe()},get statusBar(){return me()},get askToFormat(){return xt()},get mainMenuBar(){return he()},get navigationBar(){return ie()},get escapeControlCharacters(){return an()},get escapeUnicodeCharacters(){return le()},get flattenColumns(){return W()},get parser(){return ue()},get parseMemoizeOne(){return n(r)},get validator(){return I()},get validationParser(){return se()},get pathParser(){return L()},insideModal:!1,get onError(){return Pe()},onChange:Ln,onChangeMode:Hn,onSelect:Vn,get onRenderValue(){return Xe()},get onClassName(){return Ct()},onFocus:Wn,onBlur:ar,get onRenderMenu(){return Te()},get onRenderContextMenu(){return Ie()},onSortModal:yr,onTransformModal:Yn,onJSONEditorModal:ur,$$legacy:!0}),Bt=>v(Ae,Bt),()=>n(Ae))});var Or=D(ir,2),Wt=Pn=>{(function(Bt,Mt){var Mn,dr;Ke(Mt,!1);var er=q(void 0,!0),J=q(void 0,!0),ne=q(void 0,!0),ye=q(void 0,!0),R=Ur("jsoneditor:SortModal"),V=f(Mt,"id",9),ce=f(Mt,"json",9),Me=f(Mt,"rootPath",9),Fe=f(Mt,"onSort",9),Qe=f(Mt,"onClose",9),rt={value:1,label:"ascending"},Rn=[rt,{value:-1,label:"descending"}],Ft="".concat(V(),":").concat(St(Me())),Gt=q((Mn=Ys()[Ft])===null||Mn===void 0?void 0:Mn.selectedProperty,!0),Ot=q(((dr=Ys()[Ft])===null||dr===void 0?void 0:dr.selectedDirection)||rt,!0),Lt=q(void 0,!0);function zr(){try{var un,Xt,ln;v(Lt,void 0);var _n=((un=n(Gt))===null||un===void 0?void 0:un.value)||((Xt=n(ye))===null||Xt===void 0||(Xt=Xt[0])===null||Xt===void 0?void 0:Xt.value)||[],xn=(ln=n(Ot))===null||ln===void 0?void 0:ln.value,dt=Kh(ce(),Me(),_n,xn);Fe()!==void 0&&Me()!==void 0&&Fe()({operations:dt,rootPath:Me(),itemPath:_n,direction:xn}),Qe()()}catch(xr){v(Lt,String(xr))}}function ut(un){un.focus()}F(()=>(p(ce()),p(Me())),()=>{v(er,He(ce(),Me()))}),F(()=>n(er),()=>{v(J,Array.isArray(n(er)))}),F(()=>(n(J),n(er)),()=>{v(ne,n(J)?Qu(n(er)):void 0)}),F(()=>(n(ne),Fa),()=>{v(ye,n(ne)?n(ne).map(Fa):void 0)}),F(()=>(Ys(),n(Gt),n(Ot)),()=>{Ys(Ys()[Ft]={selectedProperty:n(Gt),selectedDirection:n(Ot)}),R("store state in memory",Ft,Ys()[Ft])}),dn(),yt(!0),xl(Bt,{get onClose(){return Qe()},className:"jse-sort-modal",children:(un,Xt)=>{var ln=M1(),_n=We(ln),xn=_e(()=>n(J)?"Sort array items":"Sort object keys");Uc(_n,{get title(){return n(xn)},get onClose(){return Qe()}});var dt=E(D(_n,2)),xr=D(E(dt)),vr=E(xr),qr=D(E(vr)),hn=E(qr),On=D(vr),br=Je=>{var Be=S1(),Rt=D(E(Be));xs(E(Rt),{showChevron:!0,get items(){return n(ye)},get value(){return n(Gt)},set value(Kt){v(Gt,Kt)},$$legacy:!0}),z(Je,Be)};Q(On,Je=>{n(J),n(ye),P(()=>{var Be;return n(J)&&n(ye)&&((Be=n(ye))===null||Be===void 0?void 0:Be.length)>1})&&Je(br)});var S=D(On),B=D(E(S));xs(E(B),{showChevron:!0,clearable:!1,get items(){return Rn},get value(){return n(Ot)},set value(Je){v(Ot,Je)},$$legacy:!0});var ve=D(dt,2),Se=E(ve),ae=Je=>{var Be=C1(),Rt=E(Be);xe(()=>tt(Rt,n(Lt))),z(Je,Be)};Q(Se,Je=>{n(Lt)&&Je(ae)});var Ne=E(D(ve,2));Dr(()=>fe("click",Ne,zr)),to(Ne,Je=>ut?.(Je)),xe(Je=>{Ts(hn,Je),Ne.disabled=(n(J),n(ye),n(Gt),P(()=>{var Be;return!!(n(J)&&n(ye)&&((Be=n(ye))===null||Be===void 0?void 0:Be.length)>1)&&!n(Gt)}))},[()=>(p(Me()),p(on),p(ao),P(()=>Me()&&!on(Me())?ao(Me()):"(document root)"))]),z(un,ln)},$$slots:{default:!0}}),et()})(Pn,ts(()=>n(Jt),{onClose:()=>{var Bt;(Bt=n(Jt))===null||Bt===void 0||Bt.onClose(),v(Jt,void 0)}}))};Q(Or,Pn=>{n(Jt)&&Pn(Wt)});var gr=D(Or,2),Wr=Pn=>{Ax(Pn,ts(()=>n(nt),{onClose:()=>{var Bt;(Bt=n(nt))===null||Bt===void 0||Bt.onClose(),v(nt,void 0)}}))};Q(gr,Pn=>{n(nt)&&Pn(Wr)});var Xn=D(gr,2),$r=Pn=>{(function(Bt,Mt){Ke(Mt,!1);var Mn=q(void 0,!0),dr=q(void 0,!0),er=q(void 0,!0),J=q(void 0,!0),ne=Ur("jsoneditor:JSONEditorModal"),ye=f(Mt,"content",9),R=f(Mt,"path",9),V=f(Mt,"onPatch",9),ce=f(Mt,"readOnly",9),Me=f(Mt,"indentation",9),Fe=f(Mt,"tabSize",9),Qe=f(Mt,"truncateTextSize",9),rt=f(Mt,"mainMenuBar",9),Rn=f(Mt,"navigationBar",9),Ft=f(Mt,"statusBar",9),Gt=f(Mt,"askToFormat",9),Ot=f(Mt,"escapeControlCharacters",9),Lt=f(Mt,"escapeUnicodeCharacters",9),zr=f(Mt,"flattenColumns",9),ut=f(Mt,"parser",9),un=f(Mt,"validator",9),Xt=f(Mt,"validationParser",9),ln=f(Mt,"pathParser",9),_n=f(Mt,"onRenderValue",9),xn=f(Mt,"onClassName",9),dt=f(Mt,"onRenderMenu",9),xr=f(Mt,"onRenderContextMenu",9),vr=f(Mt,"onSortModal",9),qr=f(Mt,"onTransformModal",9),hn=f(Mt,"onClose",9),On=q(void 0,!0),br=q(void 0,!0),S={mode:Se(ye()),content:ye(),selection:void 0,relativePath:R()},B=q([S],!0),ve=q(void 0,!0);function Se($){return Ci($)&&Nr($.json)?jr.table:jr.tree}function ae(){var $,oe=($=It(n(B)))===null||$===void 0?void 0:$.selection;hl(oe)&&n(On).scrollTo(Ve(oe))}function Ne(){if(ne("handleApply"),!ce())try{v(ve,void 0);var $=n(Mn).relativePath,oe=n(Mn).content,Re=[{op:"replace",path:St($),value:Yu(oe,ut()).json}];if(n(B).length>1){var ze=Yu(n(B)[n(B).length-2].content,ut()).json,Oe={json:ea(ze,Re)},mt=be(be({},n(B)[n(B).length-2]||S),{},{content:Oe});v(B,[...n(B).slice(0,n(B).length-2),mt]),Bn(),ae()}else V()(Re),hn()()}catch(vt){v(ve,String(vt))}}function Je(){if(ne("handleClose"),n(br))v(br,!1);else if(n(B).length>1){var $;v(B,Zt(n(B))),Bn(),($=n(On))===null||$===void 0||$.focus(),ae(),v(ve,void 0)}else hn()()}function Be($){ne("handleChange",$),Vt(oe=>be(be({},oe),{},{content:$}))}function Rt($){ne("handleChangeSelection",$),Vt(oe=>be(be({},oe),{},{selection:$}))}function Kt($){ne("handleChangeMode",$),Vt(oe=>be(be({},oe),{},{mode:$}))}function Vt($){var oe=$(It(n(B)));v(B,[...Zt(n(B)),oe])}function Zn($){v(ve,$.toString()),console.error($)}function Er($){var oe,{content:Re,path:ze}=$;ne("handleJSONEditorModal",{content:Re,path:ze});var Oe={mode:Se(Re),content:Re,selection:void 0,relativePath:ze};v(B,[...n(B),Oe]),Bn(),(oe=n(On))===null||oe===void 0||oe.focus()}function C($){$.focus()}Xr(()=>{var $;($=n(On))===null||$===void 0||$.focus()}),F(()=>n(B),()=>{v(Mn,It(n(B))||S)}),F(()=>n(B),()=>{v(dr,n(B).flatMap($=>$.relativePath))}),F(()=>(n(dr),ao),()=>{v(er,on(n(dr))?"(document root)":ao(n(dr)))}),F(()=>p(ut()),()=>{v(J,il(ut().parse))}),dn(),yt(!0),xl(Bt,{onClose:Je,className:"jse-jsoneditor-modal",get fullscreen(){return n(br)},children:($,oe)=>{var Re=w1();Xu(E(Re),{children:(ze,Oe)=>{var mt=x1(),vt=We(mt),Ht=_e(()=>(n(B),P(()=>n(B).length>1?" (".concat(n(B).length,")"):"")));Uc(vt,{get title(){var bt;return"Edit nested content ".concat((bt=n(Ht))!==null&&bt!==void 0?bt:"")},fullScreenButton:!0,onClose:Je,get fullscreen(){return n(br)},set fullscreen(bt){v(br,bt)},$$legacy:!0});var mn=D(vt,2),rn=D(E(mn),2),Dn=D(rn,4);Fn(wf(E(Dn),{get externalMode(){return n(Mn),P(()=>n(Mn).mode)},get content(){return n(Mn),P(()=>n(Mn).content)},get selection(){return n(Mn),P(()=>n(Mn).selection)},get readOnly(){return ce()},get indentation(){return Me()},get tabSize(){return Fe()},get truncateTextSize(){return Qe()},get statusBar(){return Ft()},get askToFormat(){return Gt()},get mainMenuBar(){return rt()},get navigationBar(){return Rn()},get escapeControlCharacters(){return Ot()},get escapeUnicodeCharacters(){return Lt()},get flattenColumns(){return zr()},get parser(){return ut()},get parseMemoizeOne(){return n(J)},get validator(){return un()},get validationParser(){return Xt()},get pathParser(){return ln()},insideModal:!0,onError:Zn,onChange:Be,onChangeMode:Kt,onSelect:Rt,get onRenderValue(){return _n()},get onClassName(){return xn()},get onFocus(){return So},get onBlur(){return So},get onRenderMenu(){return dt()},get onRenderContextMenu(){return xr()},get onSortModal(){return vr()},get onTransformModal(){return qr()},onJSONEditorModal:Er,$$legacy:!0}),bt=>v(On,bt),()=>n(On));var gt=E(D(Dn,2)),tr=bt=>{var Ge=g1(),qt=E(Ge);xe(()=>tt(qt,n(ve))),z(bt,Ge)};Q(gt,bt=>{n(ve)&&bt(tr)});var zn=D(gt,2),nr=bt=>{var Ge=b1();Yt(E(Ge),{get data(){return ng}}),fe("click",Ge,Je),z(bt,Ge)};Q(zn,bt=>{n(B),P(()=>n(B).length>1)&&bt(nr)});var gn=D(zn,2),ot=bt=>{var Ge=j1();Dr(()=>fe("click",Ge,Ne)),to(Ge,qt=>C?.(qt)),z(bt,Ge)},en=bt=>{var Ge=y1();fe("click",Ge,Je),z(bt,Ge)};Q(gn,bt=>{ce()?bt(en,!1):bt(ot)}),xe(()=>Ts(rn,n(er))),z(ze,mt)},$$slots:{default:!0}}),z($,Re)},$$slots:{default:!0}}),et()})(Pn,ts(()=>n(ht),{onClose:()=>{var Bt;(Bt=n(ht))===null||Bt===void 0||Bt.onClose(),v(ht,void 0)}}))};Q(Xn,Pn=>{n(ht)&&Pn($r)}),xe(()=>vn=jt(ir,1,"jse-main svelte-1l55585",null,vn,{"jse-focus":n(Ue)})),fe("keydown",ir,mr),z(de,An)},$$slots:{default:!0}}),ct(t,"get",G),ct(t,"set",wt),ct(t,"update",kt),ct(t,"patch",jn),ct(t,"select",Ze),ct(t,"expand",At),ct(t,"collapse",In),ct(t,"transform",Un),ct(t,"validate",$t),ct(t,"acceptAutoRepair",Cn),ct(t,"scrollTo",$n),ct(t,"findElement",pn),ct(t,"focus",lt),ct(t,"refresh",yn),ct(t,"updateProps",Le),ct(t,"destroy",sn),et(Gn)}function bm(e){var{target:t,props:r}=e,o=xb(gm,{target:t,props:r});return o.destroy=at(function*(){return(function(s,a){var i=Zu.get(s);return i?(Zu.delete(s),i(a)):Promise.resolve()})(o)}),Bn(),o}function z1(e){var{target:t,props:r}=e;return console.warn('WARNING: the constructor "new JSONEditor(...)" is deprecated since v1. Please use "createJSONEditor(...)" instead.'),bm({target:t,props:r})}const E1=Object.freeze(Object.defineProperty({__proto__:null,BooleanToggle:lh,get CaretType(){return Mo},ColorPicker:ch,EditableValue:kh,EnumValue:um,JSONEditor:z1,JsonEditor:gm,get Mode(){return jr},ReadonlyValue:Ah,get SearchField(){return Eo},get SelectionType(){return kn},get SortDirection(){return fo},TimestampTag:Ph,get UpdateSelectionAfterChange(){return Ea},get ValidationSeverity(){return yo},createAfterSelection:aa,createAjvValidator:fx,createAjvValidatorAsync:px,createEditKeySelection:Kc,createEditValueSelection:ml,createInsideSelection:ua,createJSONEditor:bm,createKeySelection:ca,createMultiSelection:Zr,createValueSelection:_t,estimateSerializedSize:Xp,expandAll:Gc,expandMinimal:ai,expandNone:sl,expandSelf:zc,getAnchorPath:ns,getEndPath:Aa,getFocusPath:Ve,getSelectionPaths:Ia,getStartPath:Go,getValueClass:bl,hasSearchResults:Jd,isAfterSelection:oo,isArrayRecursiveState:Pr,isBoolean:_p,isColor:Fp,isContent:Ub,isContentParseError:rd,isContentValidationErrors:dh,isContextMenuColumn:nd,isContextMenuRow:td,isEditingSelection:Ar,isEqualParser:Zc,isExpandableState:ss,isInsideSelection:Mr,isJSONContent:Ci,isKeySelection:Tr,isLargeContent:Gp,isMenuButton:Lo,isMenuDropDownButton:ys,isMenuLabel:ed,isMenuSeparator:xa,isMenuSpace:Oc,isModeHistoryItem:ad,isMultiSelection:En,isNestedValidationError:fh,isObject:Qt,isObjectOrArray:Kn,isObjectRecursiveState:ro,isSvelteActionRenderer:ph,isSvelteComponentRenderer:uj,isTextContent:Si,isTextHistoryItem:od,isTimestamp:kc,isTreeHistoryItem:vl,isUrl:ql,isValidationError:vh,isValueRecursiveState:Qc,isValueSelection:tn,javascriptQueryLanguage:jx,jmespathQueryLanguage:mx,jsonQueryLanguage:ih,jsonpathQueryLanguage:gx,keyComboFromEvent:la,lodashQueryLanguage:bx,onEscape:Kd,parseJSONPath:Th,renderJSONSchemaEnum:vx,renderValue:Rh,resizeObserver:xd,stringConvert:Ds,stringifyJSONPath:ao,toJSONContent:Yu,toTextContent:Yp,valueType:Hc},Symbol.toStringTag,{value:"Module"}));export{px as A,Kc as B,aa as C,fx as E,Gc as J,_t as L,ml as O,ua as P,Zr as X,zc as Z,Zg as _,ca as a,E1 as b,sl as l,ai as n,ao as s,Th as v};
