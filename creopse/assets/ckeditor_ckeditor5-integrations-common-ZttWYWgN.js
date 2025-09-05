/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 *//**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */new Array(256).fill("").map((n,t)=>("0"+t.toString(16)).slice(-2));/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function m(n,t){const r=n.extraPlugins||[];return{...n,extraPlugins:[...r,...t.filter(e=>!r.includes(e))]}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function i(n){return!!n&&/^\d+\.\d+\.\d+/.test(n)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function a(n){return n?["nightly","alpha","internal","nightly-","staging"].some(t=>n.includes(t)):!1}function u(n){return i(n)||a(n)}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function o(n){if(!i(n))throw new Error(`Invalid semantic version: ${n||"<blank>"}.`);const[t,r,e]=n.split(".");return{major:Number.parseInt(t,10),minor:Number.parseInt(r,10),patch:Number.parseInt(e,10)}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function c(n){if(a(n))return 3;const{major:t}=o(n);switch(!0){case t>=44:return 3;case t>=38:return 2;default:return 1}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function l(){const{CKEDITOR_VERSION:n,CKEDITOR:t}=window;return u(n)?{source:t?"cdn":"npm",version:n}:null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function f(){const n=l();return n?c(n.version):null}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function g(n,t){switch(t||=f()||void 0,t){case 1:case 2:return n===void 0;case 3:return n==="GPL";default:return!1}}/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */function p(n,t){return function(e){g(e.config.get("licenseKey"))||e.on("collectUsageData",(d,{setUsageData:s})=>{s(`integration.${n}`,t)})}}export{m as a,p as c,g as i};
