import{u as U,R as b,_ as q,e as F,a as nt,c as st,h as lt}from"./index-55665812.js";import{I as L}from"./iconify_vue-6750bec6.js";import{A as at}from"./auth-type-5b0d67f1.js";import{u as j}from"./vue-router-e670704e.js";import{N as z,S as rt,T as it,L as J,R as ut,I as pt,U as Q,V as ct,c as mt,b as _t,P as dt,J as ft,e as gt,_ as bt,g as vt,W as xt,X as At,O as Nt,Y as St}from"./naive-ui-f034a0d9.js";import{d as O,p as X,as as wt,o as m,c as K,Y as t,aO as e,a as N,P as f,Q as x,F as kt,l as A}from"./vue_runtime-core-4f5fb440.js";import{u as Z}from"./vue-i18n-84a05dd5.js";import{r as S,u as o}from"./vue_reactivity-852d8377.js";import{t as g}from"./vue_shared-7dcc3b7f.js";import"./browser-image-compression-a3ab6596.js";import"./lodash-8d91e508.js";import"./axios-8734fada.js";import"./process-199d9cab.js";import"./fawmi_vue-google-maps-f303fdec.js";import"./vue_runtime-dom-c0cb2070.js";import"./googlemaps_markerclusterer-7ef0bcf9.js";import"./fast-deep-equal-d48ae8fc.js";import"./supercluster-6504d485.js";import"./kdbush-ac640998.js";import"./pinia-5dd13ed8.js";import"./vue-demi-71ba0ef2.js";import"./moment-ea709ccd.js";import"./slugify-4c8e4bf3.js";import"./validator-c9e97e8e.js";import"./vueuse_core-e3c6c607.js";import"./vueuse_shared-d1f69174.js";import"./parse-domain-15b982e1.js";import"./is-ip-33949ce5.js";import"./ip-regex-e6f9cbd8.js";import"./super-regex-a8a38319.js";import"./function-timeout-8f7724f6.js";import"./clone-regexp-3bc3d90c.js";import"./is-regexp-5fa9e804.js";import"./unhead_vue-71da354f.js";import"./unhead-a4367481.js";import"./hookable-e7fd869b.js";import"./unhead_dom-b5f3dd9b.js";import"./unhead_shared-56c99682.js";import"./ckeditor_ckeditor5-vue-a01957a7.js";import"./vue-cb9e9a9a.js";import"./strip-json-comments-680ed425.js";import"./vue-draggable-next-d31a77b2.js";import"./pinia_colada-25af8b56.js";import"./vue-shepherd-6780f0ef.js";import"./shepherd.js-8a3687f6.js";import"./vue-tel-input-40ca5c5d.js";import"./vue3-map-chart-612bd6db.js";import"./crypto-js-a0189596.js";import"./pinia-persistence-plugin-50ba422c.js";/* empty css                    *//* empty css               *//* empty css                                      */import"./date-fns-eed65714.js";import"./seemly-5e1e6f41.js";import"./vueuc-b49649f7.js";import"./evtd-b614532e.js";import"./css-render_vue3-ssr-b91bc731.js";import"./vooks-3c892a1c.js";import"./vdirs-b0483831.js";import"./juggle_resize-observer-41516555.js";import"./css-render-9b607bf6.js";import"./emotion_hash-8a8e73f6.js";import"./lodash-es-a215867d.js";import"./treemate-25c27bff.js";import"./date-fns-tz-6c300683.js";import"./async-validator-d80203ee.js";import"./css-render_plugin-bem-9dde7ffe.js";import"./intlify_shared-f7876323.js";import"./intlify_core-base-c423e336.js";import"./intlify_message-compiler-48af4dac.js";const Et=O({__name:"DataCount",setup(tt){const{t:s}=Z(),{request:_}=F(),{appPrimaryColor:I,appSecondaryColor:G}=U(),v=j(),C=S(0),y=S(0),P=S(0),D=S(0),V=S(0),k=S(0),M=S([]);(async()=>{const u=await _({url:"/count/administrators"});u.success&&u.result&&(C.value=u.result.data);const n=await _({url:"/count/others"});n.success&&n.result&&(y.value=n.result.data);const a=await _({url:"/count/news-articles"});a.success&&a.result&&(P.value=a.result.data);const p=await _({url:"/count/news-categories"});p.success&&p.result&&(D.value=p.result.data);const c=await _({url:"/count/news-comments"});c.success&&c.result&&(V.value=c.result.data);const r=await _({url:"/count/news-tags"});r.success&&r.result&&(k.value=r.result.data);const i=await _({url:"/visits"});i.success&&i.result&&(M.value=i.result.data)})();const R=X(()=>{const u={};return M.value.forEach(n=>{var a;(a=n.locationData)!=null&&a.iso&&(u[n.locationData.iso]?u[n.locationData.iso]++:u[n.locationData.iso]=1)}),u});return(u,n)=>{const a=L,p=z,c=rt,r=it,i=J,d=ut,E=pt,H=Q,$=q,T=ct,h=wt("MapChart");return m(),K("section",null,[t($,{name:"slide-fade",appear:""},{default:e(()=>[t(H,{title:o(s)("players")},{default:e(()=>[t(E,{cols:"1 s:1 m:2 l:2 xl:2 2xl:2",responsive:"screen","x-gap":12,"y-gap":24},{default:e(()=>[t(d,null,{default:e(()=>[t(i,{class:"w-full cursor-pointer",hoverable:"",embedded:"",onClick:n[0]||(n[0]=w=>o(v).push(o(b).USERS_MANAGEMENT.PATH))},{default:e(()=>[t(r,{label:o(s)("administrators")},{prefix:e(()=>[t(p,null,{default:e(()=>[t(a,{icon:"carbon:user-admin"})]),_:1})]),default:e(()=>[t(c,{from:0,to:o(C)},null,8,["to"])]),_:1},8,["label"])]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(i,{class:"w-full cursor-pointer",hoverable:"",embedded:"",onClick:n[1]||(n[1]=w=>o(v).push(o(b).USERS_MANAGEMENT.PATH))},{default:e(()=>[t(r,{label:o(s)("others")},{prefix:e(()=>[t(p,null,{default:e(()=>[t(a,{icon:"carbon:user"})]),_:1})]),default:e(()=>[t(c,{from:0,to:o(y)},null,8,["to"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1}),n[6]||(n[6]=N("br",null,null,-1)),t($,{name:"slide-fade",appear:""},{default:e(()=>[t(H,{title:o(s)("news")},{default:e(()=>[t(E,{cols:"1 s:2 m:2 l:4 xl:4 2xl:4",responsive:"screen","x-gap":12,"y-gap":24},{default:e(()=>[t(d,null,{default:e(()=>[t(i,{class:"w-full cursor-pointer",hoverable:"",embedded:"",onClick:n[2]||(n[2]=w=>o(v).push(o(b).NEWS_MANAGEMENT.PATH+"/articles"))},{default:e(()=>[t(r,{label:o(s)("articles")},{prefix:e(()=>[t(p,null,{default:e(()=>[t(a,{icon:"carbon:document"})]),_:1})]),default:e(()=>[t(c,{from:0,to:o(P)},null,8,["to"])]),_:1},8,["label"])]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(i,{class:"w-full cursor-pointer",hoverable:"",embedded:"",onClick:n[3]||(n[3]=w=>o(v).push(o(b).NEWS_MANAGEMENT.PATH+"/categories"))},{default:e(()=>[t(r,{label:o(s)("categories")},{prefix:e(()=>[t(p,null,{default:e(()=>[t(a,{icon:"carbon:categories"})]),_:1})]),default:e(()=>[t(c,{from:0,to:o(D)},null,8,["to"])]),_:1},8,["label"])]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(i,{class:"w-full cursor-pointer",hoverable:"",embedded:"",onClick:n[4]||(n[4]=w=>o(v).push(o(b).NEWS_MANAGEMENT.PATH+"/tags"))},{default:e(()=>[t(r,{label:o(s)("tags")},{prefix:e(()=>[t(p,null,{default:e(()=>[t(a,{icon:"carbon:tag"})]),_:1})]),default:e(()=>[t(c,{from:0,to:o(k)},null,8,["to"])]),_:1},8,["label"])]),_:1})]),_:1}),t(d,null,{default:e(()=>[t(i,{class:"w-full cursor-pointer",hoverable:"",embedded:"",onClick:n[5]||(n[5]=w=>o(v).push(o(b).NEWS_MANAGEMENT.PATH+"/comments"))},{default:e(()=>[t(r,{label:o(s)("comments")},{prefix:e(()=>[t(p,null,{default:e(()=>[t(a,{icon:"carbon:chat"})]),_:1})]),default:e(()=>[t(c,{from:0,to:o(V)},null,8,["to"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1}),t(T),t(i,null,{default:e(()=>[t($,{name:"slide-fade",appear:""},{default:e(()=>[t(H,{title:o(s)("websiteVisits")},{default:e(()=>[t(E,{cols:"1 s:4 m:4 l:4 xl:4 2xl:4",responsive:"screen","x-gap":12,"y-gap":12},{default:e(()=>[t(d,null,{default:e(()=>[t(i,{class:"w-full",hoverable:"",embedded:""},{default:e(()=>[t(r,{label:o(s)("visitsTotalNumber")},{prefix:e(()=>[t(p,null,{default:e(()=>[t(a,{icon:"carbon:chart-line"})]),_:1})]),default:e(()=>[t(c,{from:0,to:o(M).length},null,8,["to"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1}),t(h,{data:o(R),"base-color":o(I),"legend-text-color":"white","legend-bg-color":o(G),"display-legend-when-empty":!1,height:800,"format-value-with-si-prefix":""},null,8,["data","base-color","legend-bg-color"])]),_:1},8,["title"])]),_:1})]),_:1})])}}}),Tt=O({name:b.DASHBOARD.NAME}),Ue=O({...Tt,setup(tt){const{t:s}=Z(),{request:_}=F(),{tr:I,fileUrl:G,icon:v}=U(),{userHasSuperAdminRole:C}=nt(),y=j(),P=mt(),D=_t(),V=st(),k=S(!1),M=async()=>{k.value=!0;const u=await _({url:"/auth/send-verification-email"});u.failure&&u.error?D.error(s("failedToSend")):P.success({title:s("success"),content:s("verificationLinkSent"),positiveText:s("ok")}),k.value=!1},l=lt(),R=X(()=>!!(l.getSettingValue("name")&&l.getSettingValue("address")&&(l.getSettingValue("phone")||l.getSettingValue("email"))));return(u,n)=>{var W,Y;const a=ft,p=dt,c=gt,r=L,i=z,d=bt,E=vt,H=xt,$=At,T=Nt,h=St,w=Q,B=J,et=q;return m(),K(kt,null,[((W=o(V).userData)==null?void 0:W.emailVerifiedAt)===null&&((Y=o(V).userData)==null?void 0:Y.authType)!=o(at).PHONE?(m(),f(p,{key:0,show:o(k)},{default:e(()=>[t(a,{title:o(s)("verifyYourEmail"),type:"warning",class:"cursor-pointer mb-2",onClick:M},{default:e(()=>[A(g(o(s)("weHaveSentYouVerificationEmail")),1)]),_:1},8,["title"])]),_:1},8,["show"])):x("",!0),t(et,{name:"slide-fade",appear:""},{default:e(()=>[o(R)?(m(),f(B,{key:0,embedded:"",size:"small",class:"mb-2"},{default:e(()=>[t(B,{hoverable:""},{default:e(()=>[t(w,null,{title:e(()=>[N("h3",null,g(o(l).getSettingValue("name")),1)]),avatar:e(()=>[t(c,{"object-fit":"contain",class:"p-1",src:o(l).getSettingValue("icon")?o(G)(o(l).getSettingValue("icon")):o(v)},null,8,["src"])]),extra:e(()=>[o(C)()?(m(),f(E,{key:0},{default:e(()=>[t(d,{onClick:n[0]||(n[0]=ot=>o(y).push(o(b).CONTENT_MANAGEMENT.PATH))},{icon:e(()=>[t(i,null,{default:e(()=>[t(r,{icon:"carbon:edit"})]),_:1})]),default:e(()=>[A(" "+g(o(s)("edit")),1)]),_:1})]),_:1})):x("",!0)]),footer:e(()=>[t(E,null,{default:e(()=>[o(l).getSettingValue("phone")?(m(),f(h,{key:0,prefix:"bar"},{default:e(()=>[t(T,{depth:"3",class:"flex items-center text-sm"},{default:e(()=>[t(r,{icon:"carbon:phone"}),n[2]||(n[2]=A("   ")),N("span",null,g(o(l).getSettingValue("phone")),1)]),_:1})]),_:1})):x("",!0),o(l).getSettingValue("email")?(m(),f(h,{key:1,prefix:"bar"},{default:e(()=>[t(T,{depth:"3",class:"flex items-center text-sm"},{default:e(()=>[t(r,{icon:"carbon:email"}),n[3]||(n[3]=A("   ")),N("span",null,g(o(l).getSettingValue("email")),1)]),_:1})]),_:1})):x("",!0),o(l).getSettingValue("address")?(m(),f(h,{key:2,prefix:"bar"},{default:e(()=>[t(T,{depth:"3",class:"flex items-center text-sm"},{default:e(()=>[t(r,{icon:"carbon:location"}),n[4]||(n[4]=A("   ")),N("span",null,g(o(l).getSettingValue("address")),1)]),_:1})]),_:1})):x("",!0),o(l).getSettingValue("postalCode")?(m(),f(h,{key:3,prefix:"bar"},{default:e(()=>[t(T,{depth:"3",class:"flex items-center text-sm"},{default:e(()=>[t(r,{icon:"carbon:text-short-paragraph"}),n[5]||(n[5]=A("   ")),N("span",null,g(o(l).getSettingValue("postalCode")),1)]),_:1})]),_:1})):x("",!0)]),_:1})]),default:e(()=>[o(I)(o(l).getSettingValue("description"))?(m(),f($,{key:0,depth:"2"},{default:e(()=>[t(H,{"line-clamp":"2",tooltip:!1},{default:e(()=>[A(g(o(I)(o(l).getSettingValue("description"))),1)]),_:1})]),_:1})):x("",!0)]),_:1})]),_:1})]),_:1})):o(C)()?(m(),f(a,{key:1,id:"missingInfoAlert",title:o(s)("missingInfo"),type:"warning",class:"cursor-pointer mb-2",onClick:n[1]||(n[1]=ot=>o(y).push(o(b).CONTENT_MANAGEMENT.PATH))},{default:e(()=>[A(g(o(s)("provideYourMarketInfo")),1)]),_:1},8,["title"])):x("",!0)]),_:1}),n[6]||(n[6]=N("br",null,null,-1)),t(Et),n[7]||(n[7]=N("br",null,null,-1))],64)}}});export{Ue as default};