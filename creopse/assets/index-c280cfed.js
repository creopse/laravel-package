import{u as He,b as Ge,a as Ke,c as Qe,y as Ye,P as H,z as Ze,R as Je,e as We,A as fe,r as ae,U as ve,_ as Xe}from"./index-55665812.js";import{a as ea}from"./index.vue_vue_type_script_setup_true_lang-6864bd92.js";import{_ as aa}from"./PageLayout.vue_vue_type_script_setup_true_lang-e9893029.js";import{I as U}from"./iconify_vue-6750bec6.js";import{A as ta}from"./auth-type-5b0d67f1.js";import{R as _e}from"./response-error-code-87d1097e.js";import{u as la}from"./profile-type-c2266917.js";import{a as sa}from"./pinia-5dd13ed8.js";import{_ as ge}from"./lodash-8d91e508.js";import{_ as na}from"./validator-c9e97e8e.js";import{v as ye}from"./uuid-cf522c50.js";import{d as Se,i as ra,p as be,w as oa,o as h,c as G,Y as n,aO as r,F as ia,h as u,P as O,l as ke,Q as he,a as w}from"./vue_runtime-core-4f5fb440.js";import{a as ua,b as pa,c as da,a4 as ma,e as K,Z as we,E as Q,_ as j,N as P,a5 as ca,g as fa,a7 as va,a1 as _a,R as ga,H as ya,I as ba,F as ka,j as ha,ap as wa,aj as Ea,M as Sa,G as Aa,k as xa,L as $a}from"./naive-ui-f034a0d9.js";import{u as Da}from"./vue-i18n-84a05dd5.js";import{r as d,u as e,c as V}from"./vue_reactivity-852d8377.js";import{t as q,n as Ee}from"./vue_shared-7dcc3b7f.js";import"./browser-image-compression-a3ab6596.js";import"./fawmi_vue-google-maps-f303fdec.js";import"./vue_runtime-dom-c0cb2070.js";import"./googlemaps_markerclusterer-7ef0bcf9.js";import"./fast-deep-equal-d48ae8fc.js";import"./axios-8734fada.js";import"./process-199d9cab.js";import"./supercluster-6504d485.js";import"./kdbush-ac640998.js";import"./moment-ea709ccd.js";import"./slugify-4c8e4bf3.js";import"./vueuse_core-e3c6c607.js";import"./vueuse_shared-d1f69174.js";import"./parse-domain-15b982e1.js";import"./is-ip-33949ce5.js";import"./ip-regex-e6f9cbd8.js";import"./super-regex-a8a38319.js";import"./function-timeout-8f7724f6.js";import"./clone-regexp-3bc3d90c.js";import"./is-regexp-5fa9e804.js";import"./vue-router-e670704e.js";import"./unhead_vue-71da354f.js";import"./unhead-a4367481.js";import"./hookable-e7fd869b.js";import"./unhead_dom-b5f3dd9b.js";import"./unhead_shared-56c99682.js";import"./ckeditor_ckeditor5-vue-a01957a7.js";import"./vue-cb9e9a9a.js";import"./strip-json-comments-680ed425.js";import"./vue-draggable-next-d31a77b2.js";import"./pinia_colada-25af8b56.js";import"./vue-shepherd-6780f0ef.js";import"./shepherd.js-8a3687f6.js";import"./vue-tel-input-40ca5c5d.js";import"./vue3-map-chart-612bd6db.js";import"./crypto-js-a0189596.js";import"./pinia-persistence-plugin-50ba422c.js";/* empty css                    *//* empty css               *//* empty css                                      */import"./date-fns-eed65714.js";import"./seemly-5e1e6f41.js";import"./vueuc-b49649f7.js";import"./evtd-b614532e.js";import"./css-render_vue3-ssr-b91bc731.js";import"./vooks-3c892a1c.js";import"./vdirs-b0483831.js";import"./juggle_resize-observer-41516555.js";import"./css-render-9b607bf6.js";import"./emotion_hash-8a8e73f6.js";import"./lodash-es-a215867d.js";import"./treemate-25c27bff.js";import"./date-fns-tz-6c300683.js";import"./async-validator-d80203ee.js";import"./css-render_plugin-bem-9dde7ffe.js";import"./vue-demi-71ba0ef2.js";import"./intlify_shared-f7876323.js";import"./intlify_core-base-c423e336.js";import"./intlify_message-compiler-48af4dac.js";import"./media-library-e7aafc09.js";import"./vue-advanced-cropper-7a0dcf27.js";var E=(L=>(L[L.DISABLED=0]="DISABLED",L[L.ENABLED=1]="ENABLED",L))(E||{});const Ia={key:0,class:"text-6xl"},za={class:"flex justify-center mb-5"},Na={key:0},Ta={key:1},Ca=Se({name:Je.USERS_MANAGEMENT.NAME}),ll=Se({...Ca,setup(L){const g=ua(),y=pa(),Y=da(),{pickByTheme:te,fileUrl:Ae,displayFormErrors:xe}=He(),{profileTypes:le,getProfileTypeLabel:$e}=la(),{defaultPrefs:Z}=Ge(),{userIsAbleTo:J}=Ke(),{request:N}=We(),{t,locale:W}=Da(),De=Qe(),X=Ye(),{roles:Ie}=sa(X),ze=ra("appConfig"),f=d(""),Ne=d(),F=d([]),ee=d(!1),R=d(!1),se=d(0),B=d(Z.value),Te=be(()=>[{title:t("n_"),key:"no",width:50,fixed:"left"},{title:t("avatar"),key:"avatar",width:75,fixed:"left",render(l){return l.avatar?u(K,{size:"medium",src:l.avatarUrl}):u(K,{size:"medium",style:{width:"36px",height:"36px",display:"block"}},{default:()=>fe(l.fullname)})}},{title:t("lastnameAndFirstname_s"),key:"name",resizable:!0,width:200,ellipsis:{tooltip:!0},fixed:"left",sortOrder:!1,sorter:"default",render(l){return u("div",{},{default:()=>l.fullname})}},{title:t("type"),key:"type",resizable:!0,width:125,render(l){return u("div",{},{default:()=>$e(l.profileType)})},defaultFilterOptionValues:[],filterOptions:le,filter:(l,a)=>a.profileType==l},{title:t("roles"),key:"roles",resizable:!0,width:150,render(l){return u("div",{},{default:()=>{var i;return(i=l.roles)==null?void 0:i.map(m=>u(we,{class:"mx-1 my-1",size:"small",type:"info",round:!1,strong:!0,bordered:!1},{default:()=>m.displayName}))}})},defaultFilterOptionValues:[],filterOptions:Ie.value.map(l=>({label:l.displayName,value:l.name})),filter:(l,a)=>{var i,m;return((m=(i=a.roles)==null?void 0:i.map(v=>v.name))==null?void 0:m.includes(String(l)))||!1}},{title:t("email"),key:"email",resizable:!0,width:200,ellipsis:{tooltip:!0}},{title:t("phoneNumber"),key:"phone",width:200,ellipsis:{tooltip:!0}},{title:t("status"),key:"accountStatus",width:125,render(l){return u(we,{type:l.accountStatus==E.ENABLED?"success":l.accountStatus==E.DISABLED?"error":"warning",bordered:!1},{default:()=>l.accountStatus==E.ENABLED?t("activated"):l.accountStatus==E.DISABLED?t("deactivated"):t("undefined")})},sortOrder:!1,sorter:"default"},{title:t("lastLogin"),key:"lastLoggedInAt",width:125,render(l){return u("div",{},{default:()=>ae(l.lastLoggedInAt||"",{locale:W.value})})}},{title:t("lastEdition"),key:"updatedAt",width:125,render(l){return u("div",{},{default:()=>ae(l.updatedAt,{locale:W.value})})}},{title:t("creation"),key:"createdAt",width:125,render(l){return u("div",{},{default:()=>ae(l.createdAt,{locale:W.value})})}},{title:()=>u(ca,{},{default:()=>[u(Q,{ref:Ne,placeholder:t("search"),value:f.value,onInput:l=>{f.value=l,f.value||S(`/users?pageSize=${c.value}&page=${_.value}&query=${f.value}`)},clearable:!0}),u(j,{onClick:()=>{S(`/users?pageSize=${c.value}&page=${_.value}&query=${f.value}`)}},{default:()=>u(P,{},{default:()=>u(U,{icon:"carbon:search"})})})]}),key:"actions",width:200,render(l){const a=()=>{var m,v,k;return l.id!=((m=De.userData)==null?void 0:m.id)&&!((k=(v=l.roles)==null?void 0:v.map(A=>A.name))!=null&&k.includes(ve.SUPER_ADMIN))},i=[];return J("edit-user")&&a()&&(i.push(u(j,{size:"small",type:"warning",onClick:()=>{oe(l)},renderIcon:()=>u(P,null,{default:()=>u(U,{icon:"carbon:edit"})})},{default:()=>t("edit")})),i.push(u("div",{class:"w-2"})),i.push(u(j,{size:"small",type:"success",onClick:()=>{B.value=l.preferences||Z.value,se.value=l.id||0,R.value=!0},renderIcon:()=>u(P,null,{default:()=>u(U,{icon:"carbon:settings"})})}))),J("delete-user")&&a()&&(i.push(u("div",{class:"w-2"})),i.push(u(j,{size:"small",type:"error",onClick:()=>{Y.warning({title:t("confirm"),content:t("confirmDeleteUser"),positiveText:t("yes"),negativeText:t("no"),onPositiveClick:async()=>{g.start(),(await N({url:`/users/${l.id}`,method:"delete"})).success?y.success(t("success")):y.error(t("anErrorOccurred")),g.finish(),S(`/users?pageSize=${c.value}&page=${_.value}&query=${f.value}`)}})},renderIcon:()=>u(P,null,{default:()=>u(U,{icon:"carbon:trash-can"})})}))),u("div",{class:"flex justify-end items-center w-full"},i)},fixed:"right"}]),ne=d(0),c=d(6),_=d(1),Ce=l=>{S(`/users?pageSize=${c.value}&page=${l}&query=${f.value}`)},Ue=l=>{c.value=l,S(`/users?pageSize=${c.value}&query=${f.value}`)},S=async(l=null,a=!1)=>{var m,v,k,A,I;ee.value=!0,g.start();const i=await N({url:l||`/users?pageSize=${c.value}&query=${f.value}`});i.success&&i.result&&(ne.value=((v=(m=i.result.data)==null?void 0:m.meta)==null?void 0:v.total)||0,_.value=((A=(k=i.result.data)==null?void 0:k.meta)==null?void 0:A.currentPage)||1,F.value=(((I=i.result.data)==null?void 0:I.users)||[]).map((C,x)=>{const p=ge.cloneDeep(C);return p.no=x+1+(_.value-1)*c.value,p})),a&&X.loadRoles(),g.finish(),ee.value=!1};S(null,!0);const $=d(!1),D=d(!1),T=d(!1),b=d(null),re=d(null),s=d({avatar:"",lastname:"",firstname:"",email:"",profileType:H.ADMIN,accountStatus:E.DISABLED,roles:[]}),Pe=be(()=>({lastname:[{required:!0,message:t("fillRequired")}],firstname:[{required:!0,message:t("fillRequired")}],status:[{required:!0,message:t("fillRequired")}],profileType:[{required:!0,message:t("fillRequired")}],email:[{required:b.value?b.value.authType!=ta.PHONE:!0,message:t("fillRequired")},{trigger:["input"],validator(l,a){return a&&!na.isEmail(a)?new Error(t("invalidEmail")):!0}}]})),oe=l=>{var a;b.value=ge.cloneDeep(l),s.value={avatar:l?l.avatar:"",lastname:l?l.lastname:"",firstname:l?l.firstname:"",email:l?l.email:"",profileType:l?l.profileType:H.ADMIN,accountStatus:l?l.accountStatus:E.DISABLED,roles:l?((a=l.roles)==null?void 0:a.map(i=>i.name))??[]:[]},D.value=!0},qe=async()=>{var l;return(l=re.value)==null||l.validate(async a=>{var i,m,v,k,A,I,C;if(!a){const x=Ze(12);if(b.value)if(b.value.email!==s.value.email&&F.value.findIndex(p=>p.email==s.value.email)>-1)y.error(t("sameEmailMessage"));else{if(g.start(),$.value=!0,(await N({url:`/users/${b.value.id}`,method:"put",data:{password:x,avatar:s.value.avatar,lastname:s.value.lastname,firstname:s.value.firstname,email:s.value.email,roles:s.value.roles,accountStatus:s.value.accountStatus,sendCredentialsEmail:T.value}})).success){let z;switch(s.value.profileType){case H.ADMIN:z={};break}await N({url:`/auth/profile/${(i=b.value.profile)==null?void 0:i.id}`,method:"put",data:{type:s.value.profileType,profileData:z}}),T.value?Y.success({title:t("success"),content:t("userAccountPasswordReset",[s.value.email,x]),positiveText:t("ok")}):y.success(t("success"))}else y.error(t("anErrorOccurred"));$.value=!1,g.finish(),S(`/users?pageSize=${c.value}&page=${_.value}&query=${f.value}`),D.value=!1}else if(F.value.findIndex(p=>p.email==s.value.email)>-1)y.error(t("sameEmailMessage"));else{g.start(),$.value=!0;const p=await N({url:"/users",method:"post",data:{password:x,email:s.value.email,lastname:s.value.lastname,firstname:s.value.firstname,avatar:s.value.avatar,roles:s.value.roles,accountStatus:s.value.accountStatus,sendCredentialsEmail:T.value,preferences:Z.value}});if(p.failure&&p.error)switch((k=(v=(m=p.error)==null?void 0:m.response)==null?void 0:v.data)==null?void 0:k.errorCode){case _e.AUTH_MISSING_DATA:y.error(t("missingData"));break;case _e.FORM_INVALID_DATA:xe((C=(I=(A=p.error)==null?void 0:A.response)==null?void 0:I.data)==null?void 0:C.data);break;default:y.error(t("registrationNotSuccessful"))}else{let z;switch(s.value.profileType){case H.ADMIN:z={};break}await N({url:"/auth/profile",method:"post",data:{type:s.value.profileType,id:p.result.data.id,profileData:z}}),Y.success({title:t("success"),content:t("userAccountEmailContent",[s.value.email,x]),positiveText:t("ok")})}$.value=!1,g.finish(),S(`/users?pageSize=${c.value}&page=${_.value}&query=${f.value}`),D.value=!1}}}),!1},Le=async()=>{g.start(),$.value=!0;const l=await N({url:`/users/${se.value}`,method:"put",data:{preferences:B.value}});l.success&&l.result?(S(`/users?pageSize=${c.value}&page=${_.value}&query=${f.value}`),y.success(t("success"))):y.error(t("anErrorOccurred")),$.value=!1,g.finish(),R.value=!1},Re="avatars",M=d(!1),Be=async l=>{s.value.avatar=l,M.value=!1},Me=()=>{s.value.avatar=""},ie=d(ye());return oa(()=>[D.value],()=>{setTimeout(()=>{ie.value=ye()},500)}),(l,a)=>{var ce;const i=fa,m=va,v=_a,k=aa,A=ea,I=ga,C=ya,x=ba,p=ka,z=ha,ue=wa,Oe=Ea,je=Sa,Ve=Xe,Fe=Aa,pe=ma,de=xa,me=$a;return h(),G(ia,null,[n(k,null,{"header-extra":r(()=>[e(J)("add-user")?(h(),O(i,{key:0},{default:r(()=>[n(e(j),{type:"primary",onClick:a[0]||(a[0]=o=>oe(null))},{icon:r(()=>[n(e(P),{size:"18"},{default:r(()=>[n(e(U),{icon:"carbon:add-alt"})]),_:1})]),default:r(()=>[ke(" "+q(e(t)("add")),1)]),_:1})]),_:1})):he("",!0)]),default:r(()=>[n(m,{"pagination-behavior-on-filter":"first",columns:e(Te),data:e(F),loading:e(ee),"single-line":!1,"scroll-x":2e3,striped:""},null,8,["columns","data","loading"]),n(v,{page:e(_),"onUpdate:page":[a[1]||(a[1]=o=>V(_)?_.value=o:null),Ce],class:"mt-5 justify-end","show-size-picker":"","page-size":e(c),"page-sizes":[6,12,24,36,48],"page-count":Math.ceil(e(ne)/e(c)),"onUpdate:pageSize":Ue},null,8,["page","page-size","page-count"])]),_:1}),n(A,{show:e(M),"onUpdate:show":a[2]||(a[2]=o=>V(M)?M.value=o:null),title:e(t)("selectImage"),"upload-config":{folder:Re,limit:0,maxSize:0,baseUrl:((ce=e(ze))==null?void 0:ce.apiUrl)+"/media-files/upload",excludedExtensions:[]},onSubmit:Be},null,8,["show","title","upload-config"]),n(pe,{show:e(D),"onUpdate:show":a[14]||(a[14]=o=>V(D)?D.value=o:null),loading:e($),preset:"dialog",style:{width:"700px"},bordered:!1,"show-icon":!1,"mask-closable":!1,title:e(b)?e(t)("edit"):e(t)("add"),"positive-text":e(t)("validate"),"negative-text":e(t)("cancel"),onPositiveClick:qe,onNegativeClick:a[15]||(a[15]=o=>D.value=!1)},{default:r(()=>[n(x,{"x-gap":"12","y-gap":"12",span:24,"item-responsive":"",responsive:"screen"},{default:r(()=>[n(I,{span:"24 s:8 m:8 l:8 xl:8 2xl:8",class:"text-center"},{default:r(()=>[n(i,{align:"center",justify:"center",style:{height:"100%"}},{default:r(()=>[e(s).avatar?(h(),O(e(K),{key:0,class:"cursor-pointer","object-fit":"contain",style:Ee("border: 1px dashed "+e(te)("green","white")),size:150,src:e(Ae)(e(s).avatar),onClick:a[3]||(a[3]=o=>M.value=!0)},null,8,["style","src"])):(h(),O(e(K),{key:1,class:"cursor-pointer",style:Ee("border: 1px dashed "+e(te)("green","white")),size:150,onClick:a[4]||(a[4]=o=>M.value=!0)},{default:r(()=>[e(s).firstname&&e(s).lastname?(h(),G("span",Ia,q(e(fe)(`${e(s).firstname} ${e(s).lastname}`)),1)):(h(),O(e(P),{key:1,size:64},{default:r(()=>[n(e(U),{icon:"carbon:image",class:"text-gray-400"})]),_:1}))]),_:1},8,["style"])),e(s).avatar?(h(),O(e(j),{key:2,quaternary:"",onClick:a[5]||(a[5]=o=>Me())},{icon:r(()=>[n(e(P),null,{default:r(()=>[n(e(U),{icon:"carbon:trash-can"})]),_:1})]),default:r(()=>[ke(" "+q(e(t)("clear")),1)]),_:1})):he("",!0)]),_:1})]),_:1}),n(I,{span:"24 s:16 m:16 l:16 xl:16 2xl:16"},{default:r(()=>[n(Fe,{ref_key:"formRef",ref:re,model:e(s),rules:e(Pe),"show-require-mark":!1,size:"medium"},{default:r(()=>[n(x,{"x-gap":"12",span:24},{default:r(()=>[n(C,{span:12,label:e(t)("lastname"),path:"lastname"},{default:r(()=>[n(e(Q),{value:e(s).lastname,"onUpdate:value":a[6]||(a[6]=o=>e(s).lastname=o),placeholder:e(t)("lastname"),class:"w-full"},null,8,["value","placeholder"])]),_:1},8,["label"]),n(C,{span:12,label:e(t)("firstname_s"),path:"firstname"},{default:r(()=>[n(e(Q),{value:e(s).firstname,"onUpdate:value":a[7]||(a[7]=o=>e(s).firstname=o),placeholder:e(t)("firstname_s"),class:"w-full"},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1}),n(p,{label:e(t)("addressEmail"),path:"email"},{default:r(()=>[n(e(Q),{value:e(s).email,"onUpdate:value":a[8]||(a[8]=o=>e(s).email=o),disabled:e(b)!=null,placeholder:e(t)("addressEmail"),class:"w-full"},null,8,["value","disabled","placeholder"])]),_:1},8,["label"]),n(p,{label:e(t)("type"),path:"type"},{default:r(()=>[n(z,{value:e(s).profileType,"onUpdate:value":a[9]||(a[9]=o=>e(s).profileType=o),options:e(le),placeholder:e(t)("type"),placement:"bottom",filterable:"",class:"w-full"},null,8,["value","options","placeholder"])]),_:1},8,["label"]),n(p,{label:e(t)("roles"),path:"roles"},{default:r(()=>[n(z,{value:e(s).roles,"onUpdate:value":a[10]||(a[10]=o=>e(s).roles=o),options:e(X).roles.filter(o=>o.name!=e(ve).SUPER_ADMIN),placeholder:e(t)("roles"),placement:"bottom",filterable:"",multiple:"","value-field":"name","label-field":"displayName",class:"w-full"},null,8,["value","options","placeholder"])]),_:1},8,["label"]),n(p,{label:e(t)("status"),path:"accountStatus"},{default:r(()=>[(h(),O(Oe,{key:e(ie),value:e(s).accountStatus,"onUpdate:value":[a[11]||(a[11]=o=>e(s).accountStatus=o),a[12]||(a[12]=o=>{o==e(E).DISABLED&&(T.value=!1)})],type:"segment"},{default:r(()=>[n(ue,{name:e(E).ENABLED,tab:e(t)("activated")},null,8,["name","tab"]),n(ue,{name:e(E).DISABLED,tab:e(t)("deactivated")},null,8,["name","tab"])]),_:1},8,["value"]))]),_:1},8,["label"]),n(Ve,null,{default:r(()=>[w("div",za,[n(je,{checked:e(T),"onUpdate:checked":a[13]||(a[13]=o=>V(T)?T.value=o:null)},{default:r(()=>[e(b)?(h(),G("span",Na,q(e(t)("resetAndSendCredentialsEmail")),1)):(h(),G("span",Ta,q(e(t)("sendCredentialsEmailToUser")),1))]),_:1},8,["checked"])])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1},8,["show","loading","title","positive-text","negative-text"]),n(pe,{show:e(R),"onUpdate:show":a[18]||(a[18]=o=>V(R)?R.value=o:null),loading:e($),preset:"dialog",style:{width:"500px"},bordered:!1,"show-icon":!1,"mask-closable":!1,title:e(t)("userSettings"),"positive-text":e(t)("validate"),"negative-text":e(t)("cancel"),onPositiveClick:Le,onNegativeClick:a[19]||(a[19]=o=>R.value=!1)},{default:r(()=>[a[24]||(a[24]=w("div",{class:"h-4"},null,-1)),n(me,{class:"w-full",size:"small"},{default:r(()=>[n(i,{align:"center",justify:"space-between"},{default:r(()=>[w("span",null,q(e(t)("notificationsInApp")),1),n(de,{value:e(B).inAppNotifEnabled,"onUpdate:value":a[16]||(a[16]=o=>e(B).inAppNotifEnabled=o),"checked-value":1,"unchecked-value":0,size:"small"},{checked:r(()=>a[20]||(a[20]=[w("div",{class:"w-6"},null,-1)])),unchecked:r(()=>a[21]||(a[21]=[w("div",{class:"w-6"},null,-1)])),_:1},8,["value"])]),_:1})]),_:1}),a[25]||(a[25]=w("div",{class:"h-2"},null,-1)),n(me,{class:"w-full",size:"small"},{default:r(()=>[n(i,{align:"center",justify:"space-between"},{default:r(()=>[w("span",null,q(e(t)("notificationsInEmail")),1),n(de,{value:e(B).emailNotifEnabled,"onUpdate:value":a[17]||(a[17]=o=>e(B).emailNotifEnabled=o),"checked-value":1,"unchecked-value":0,size:"small"},{checked:r(()=>a[22]||(a[22]=[w("div",{class:"w-6"},null,-1)])),unchecked:r(()=>a[23]||(a[23]=[w("div",{class:"w-6"},null,-1)])),_:1},8,["value"])]),_:1})]),_:1}),a[26]||(a[26]=w("div",{class:"h-4"},null,-1))]),_:1},8,["show","loading","title","positive-text","negative-text"])],64)}}});export{ll as default};