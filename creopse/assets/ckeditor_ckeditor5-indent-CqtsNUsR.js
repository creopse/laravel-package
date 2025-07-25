import{P as a,M as c}from"./ckeditor_ckeditor5-core-Ck1E_gMX.js";import"./ckeditor_ckeditor5-utils-CWV6iAXC.js";import"./ckeditor_ckeditor5-engine-Bp3orBjd.js";import{B as g}from"./ckeditor_ckeditor5-ui-0Cf30f_5.js";import"./color-name-B0-kzB5j.js";import"./color-convert-CPcGJsTp.js";import"./vanilla-colorful-CgSCOLsm.js";/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class m extends a{static get pluginName(){return"IndentEditing"}init(){const t=this.editor;t.commands.add("indent",new c(t)),t.commands.add("outdent",new c(t))}}const r='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',u='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class h extends a{static get pluginName(){return"IndentUI"}init(){const t=this.editor,e=t.locale,i=t.t,n=e.uiLanguageDirection=="ltr"?r:u,s=e.uiLanguageDirection=="ltr"?u:r;this._defineButton("indent",i("Increase indent"),n),this._defineButton("outdent",i("Decrease indent"),s)}_defineButton(t,e,i){const n=this.editor;n.ui.componentFactory.add(t,s=>{const l=n.commands.get(t),o=new g(s);return o.set({label:e,icon:i,tooltip:!0}),o.bind("isEnabled").to(l,"isEnabled"),this.listenTo(o,"execute",()=>{n.execute(t),n.editing.view.focus()}),o})}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class M extends a{static get pluginName(){return"Indent"}static get requires(){return[m,h]}}export{M as I};
