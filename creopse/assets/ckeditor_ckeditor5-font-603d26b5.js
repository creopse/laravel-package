import{C as $,i as y,P as m}from"./ckeditor_ckeditor5-core-c8d003a2.js";import{O as H,a as P,R as U,K,C as G}from"./ckeditor_ckeditor5-utils-df07b536.js";import{i as q,f as M,g as Y}from"./ckeditor_ckeditor5-engine-af85ebf5.js";import{V as w,f as j,F as W,i as B,j as Z,B as C,k as J,l as F,m as Q,o as X,c as x,b as L,M as S,q as ee,r as te,t as oe}from"./ckeditor_ckeditor5-ui-a35c6a55.js";import"./color-convert-6fc98488.js";import"./vanilla-colorful-3f59310b.js";/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class k extends ${constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=t.selection.getAttribute(this.attributeKey),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,i=t.document.selection,r=e.value,c=e.batch,n=l=>{if(i.isCollapsed)r?l.setSelectionAttribute(this.attributeKey,r):l.removeSelectionAttribute(this.attributeKey);else{const u=t.schema.getValidRanges(i.getRanges(),this.attributeKey);for(const p of u)r?l.setAttribute(this.attributeKey,r,p):l.removeAttribute(this.attributeKey,p)}};c?t.enqueueChange(c,l=>{n(l)}):t.change(l=>{n(l)})}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class se extends H(P){constructor(e){super(e),this.set("isEmpty",!0),this.on("change",()=>{this.set("isEmpty",this.length===0)})}add(e,t){return this.find(s=>s.color===e.color)?this:super.add(e,t)}hasColor(e){return!!this.find(t=>t.color===e)}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class ie extends w{constructor(e,{colors:t,columns:s,removeButtonLabel:i,documentColorsLabel:r,documentColorsCount:c,colorPickerLabel:n,colorPickerConfig:l}){super(e),this.items=this.createCollection(),this.focusTracker=new U,this.keystrokes=new K,this._focusables=new j,this._colorPickerConfig=l,this._focusCycler=new W({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.colorGridsPageView=new re(e,{colors:t,columns:s,removeButtonLabel:i,documentColorsLabel:r,documentColorsCount:c,colorPickerLabel:n,focusTracker:this.focusTracker,focusables:this._focusables}),this.colorPickerPageView=new le(e,{focusables:this._focusables,focusTracker:this.focusTracker,keystrokes:this.keystrokes,colorPickerConfig:l}),this.set("_isColorGridsPageVisible",!0),this.set("_isColorPickerPageVisible",!1),this.set("selectedColor",void 0),this.colorGridsPageView.bind("isVisible").to(this,"_isColorGridsPageVisible"),this.colorPickerPageView.bind("isVisible").to(this,"_isColorPickerPageVisible"),this.on("change:selectedColor",(u,p,a)=>{this.colorGridsPageView.set("selectedColor",a),this.colorPickerPageView.set("selectedColor",a)}),this.colorGridsPageView.on("change:selectedColor",(u,p,a)=>{this.set("selectedColor",a)}),this.colorPickerPageView.on("change:selectedColor",(u,p,a)=>{this.set("selectedColor",a)}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-color-table"]},children:this.items})}render(){super.render(),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}appendGrids(){this.items.length||(this.items.add(this.colorGridsPageView),this.colorGridsPageView.delegate("execute").to(this),this.colorGridsPageView.delegate("showColorPicker").to(this))}appendUI(){this.appendGrids(),this._colorPickerConfig&&this._appendColorPicker()}showColorPicker(){this.colorPickerPageView.colorPickerView&&(this.set("_isColorPickerPageVisible",!0),this.colorPickerPageView.focus(),this.set("_isColorGridsPageVisible",!1))}showColorGrids(){this.set("_isColorGridsPageVisible",!0),this.set("_isColorPickerPageVisible",!1)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}updateDocumentColors(e,t){this.colorGridsPageView.updateDocumentColors(e,t)}updateSelectedColors(){this.colorGridsPageView.updateSelectedColors()}_appendColorPicker(){this.items.length!==2&&(this.items.add(this.colorPickerPageView),this.colorGridsPageView.colorPickerButtonView&&this.colorGridsPageView.colorPickerButtonView.on("execute",()=>{this.showColorPicker()}),this.colorGridsPageView.addColorPickerButton(),this.colorPickerPageView.delegate("execute").to(this),this.colorPickerPageView.delegate("cancel").to(this))}}class re extends w{constructor(e,{colors:t,columns:s,removeButtonLabel:i,documentColorsLabel:r,documentColorsCount:c,colorPickerLabel:n,focusTracker:l,focusables:u}){super(e);const p=this.bindTemplate;this.set("isVisible",!0),this.focusTracker=l,this.items=this.createCollection(),this.colorDefinitions=t,this.columns=s,this.documentColors=new se,this.documentColorsCount=c,this._focusables=u,this._removeButtonLabel=i,this._colorPickerLabel=n,this._documentColorsLabel=r,this.setTemplate({tag:"div",attributes:{class:["ck-color-grids-page-view",p.if("isVisible","ck-hidden",a=>!a)]},children:this.items}),this.removeColorButtonView=this._createRemoveColorButton(),this.items.add(this.removeColorButtonView)}updateDocumentColors(e,t){const s=e.document,i=this.documentColorsCount;this.documentColors.clear();for(const r of s.getRootNames()){const c=s.getRoot(r),n=e.createRangeIn(c);for(const l of n.getItems())if(l.is("$textProxy")&&l.hasAttribute(t)&&(this._addColorToDocumentColors(l.getAttribute(t)),this.documentColors.length>=i))return}}updateSelectedColors(){const e=this.documentColorsGrid,t=this.staticColorsGrid,s=this.selectedColor;t.selectedColor=s,e&&(e.selectedColor=s)}render(){if(super.render(),this.staticColorsGrid=this._createStaticColorsGrid(),this.items.add(this.staticColorsGrid),this.documentColorsCount){const e=B.bind(this.documentColors,this.documentColors),t=new Z(this.locale);t.text=this._documentColorsLabel,t.extendTemplate({attributes:{class:["ck","ck-color-grid__label",e.if("isEmpty","ck-hidden")]}}),this.items.add(t),this.documentColorsGrid=this._createDocumentColorsGrid(),this.items.add(this.documentColorsGrid)}this._createColorPickerButton(),this._addColorTablesElementsToFocusTracker(),this.focus()}focus(){this.removeColorButtonView.focus()}destroy(){super.destroy()}addColorPickerButton(){this.colorPickerButtonView&&(this.items.add(this.colorPickerButtonView),this.focusTracker.add(this.colorPickerButtonView.element),this._focusables.add(this.colorPickerButtonView))}_addColorTablesElementsToFocusTracker(){this.focusTracker.add(this.removeColorButtonView.element),this._focusables.add(this.removeColorButtonView),this.staticColorsGrid&&(this.focusTracker.add(this.staticColorsGrid.element),this._focusables.add(this.staticColorsGrid)),this.documentColorsGrid&&(this.focusTracker.add(this.documentColorsGrid.element),this._focusables.add(this.documentColorsGrid))}_createColorPickerButton(){this.colorPickerButtonView=new C,this.colorPickerButtonView.set({label:this._colorPickerLabel,withText:!0,icon:J.colorPaletteIcon,class:"ck-color-table__color-picker"}),this.colorPickerButtonView.on("execute",()=>{this.fire("showColorPicker")})}_createRemoveColorButton(){const e=new C;return e.set({withText:!0,icon:y.eraser,label:this._removeButtonLabel}),e.class="ck-color-table__remove-color",e.on("execute",()=>{this.fire("execute",{value:null,source:"removeColorButton"})}),e.render(),e}_createStaticColorsGrid(){const e=new F(this.locale,{colorDefinitions:this.colorDefinitions,columns:this.columns});return e.on("execute",(t,s)=>{this.fire("execute",{value:s.value,source:"staticColorsGrid"})}),e}_createDocumentColorsGrid(){const e=B.bind(this.documentColors,this.documentColors),t=new F(this.locale,{columns:this.columns});return t.extendTemplate({attributes:{class:e.if("isEmpty","ck-hidden")}}),t.items.bindTo(this.documentColors).using(s=>{const i=new Q;return i.set({color:s.color,hasBorder:s.options&&s.options.hasBorder}),s.label&&i.set({label:s.label,tooltip:!0}),i.on("execute",()=>{this.fire("execute",{value:s.color,source:"documentColorsGrid"})}),i}),this.documentColors.on("change:isEmpty",(s,i,r)=>{r&&(t.selectedColor=null)}),t}_addColorToDocumentColors(e){const t=this.colorDefinitions.find(s=>s.color===e);t?this.documentColors.add(Object.assign({},t)):this.documentColors.add({color:e,label:e,options:{hasBorder:!1}})}}class le extends w{constructor(e,{focusTracker:t,focusables:s,keystrokes:i,colorPickerConfig:r}){super(e),this.items=this.createCollection(),this.focusTracker=t,this.keystrokes=i,this.set("isVisible",!1),this.set("selectedColor",void 0),this._focusables=s,this._pickerConfig=r;const c=this.bindTemplate,{saveButtonView:n,cancelButtonView:l}=this._createActionButtons();this.saveButtonView=n,this.cancelButtonView=l,this.actionBarView=this._createActionBarView({saveButtonView:n,cancelButtonView:l}),this.setTemplate({tag:"div",attributes:{class:["ck-color-picker-page-view",c.if("isVisible","ck-hidden",u=>!u)]},children:this.items})}render(){super.render();const e=new X(this.locale,this._pickerConfig);this.colorPickerView=e,this.colorPickerView.render(),this.selectedColor&&(e.color=this.selectedColor),this.listenTo(this,"change:selectedColor",(t,s,i)=>{e.color=i}),this.items.add(this.colorPickerView),this.items.add(this.actionBarView),this._addColorPickersElementsToFocusTracker(),this._stopPropagationOnArrowsKeys(),this._executeOnEnterPress(),this._executeUponColorChange()}destroy(){super.destroy()}focus(){this.colorPickerView.focus()}_executeOnEnterPress(){this.keystrokes.set("enter",e=>{this.isVisible&&this.focusTracker.focusedElement!==this.cancelButtonView.element&&(this.fire("execute",{value:this.selectedColor}),e.stopPropagation(),e.preventDefault())})}_stopPropagationOnArrowsKeys(){const e=t=>t.stopPropagation();this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}_addColorPickersElementsToFocusTracker(){for(const e of this.colorPickerView.slidersView)this.focusTracker.add(e.element),this._focusables.add(e);this.focusTracker.add(this.colorPickerView.hexInputRow.children.get(1).element),this._focusables.add(this.colorPickerView.hexInputRow.children.get(1)),this.focusTracker.add(this.saveButtonView.element),this._focusables.add(this.saveButtonView),this.focusTracker.add(this.cancelButtonView.element),this._focusables.add(this.cancelButtonView)}_createActionBarView({saveButtonView:e,cancelButtonView:t}){const s=new w,i=this.createCollection();return i.add(e),i.add(t),s.setTemplate({tag:"div",attributes:{class:["ck","ck-color-table_action-bar"]},children:i}),s}_createActionButtons(){const e=this.locale,t=e.t,s=new C(e),i=new C(e);return s.set({icon:y.check,class:"ck-button-save",withText:!1,label:t("Accept"),type:"submit"}),i.set({icon:y.cancel,class:"ck-button-cancel",withText:!1,label:t("Cancel")}),s.on("execute",()=>{this.fire("execute",{source:"saveButton",value:this.selectedColor})}),i.on("execute",()=>{this.fire("cancel")}),{saveButtonView:s,cancelButtonView:i}}_executeUponColorChange(){this.colorPickerView.on("change:color",(e,t,s)=>{this.fire("execute",{value:s,source:"colorPicker"})})}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const d="fontSize",h="fontFamily",f="fontColor",g="fontBackgroundColor";function N(o,e){const t={model:{key:o,values:[]},view:{},upcastAlso:{}};for(const s of e)t.model.values.push(s.model),t.view[s.model]=s.view,s.upcastAlso&&(t.upcastAlso[s.model]=s.upcastAlso);return t}function E(o){return e=>ce(e.getStyle(o))}function O(o){return(e,{writer:t})=>t.createAttributeElement("span",{style:`${o}:${e}`},{priority:7})}function ne({dropdownView:o,colors:e,columns:t,removeButtonLabel:s,colorPickerLabel:i,documentColorsLabel:r,documentColorsCount:c,colorPickerConfig:n}){const l=o.locale,u=new ie(l,{colors:e,columns:t,removeButtonLabel:s,colorPickerLabel:i,documentColorsLabel:r,documentColorsCount:c,colorPickerConfig:n});return o.colorTableView=u,o.panelView.children.add(u),u}function ce(o){return o.replace(/\s/g,"")}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class ae extends k{constructor(e){super(e,h)}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function D(o){return o.map(ue).filter(e=>e!==void 0)}function ue(o){if(typeof o=="object")return o;if(o==="default")return{title:"Default",model:void 0};if(typeof o=="string")return de(o)}function de(o){const e=o.replace(/"|'/g,"").split(","),t=e[0],s=e.map(he).join(", ");return{title:t,model:s,view:{name:"span",styles:{"font-family":s},priority:7}}}function he(o){return o=o.trim(),o.indexOf(" ")>0&&(o=`'${o}'`),o}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class me extends m{static get pluginName(){return"FontFamilyEditing"}constructor(e){super(e),e.config.define(h,{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:h}),e.model.schema.setAttributeProperties(h,{isFormatting:!0,copyOnEnter:!0});const t=D(e.config.get("fontFamily.options")).filter(i=>i.model),s=N(h,t);e.config.get("fontFamily.supportAllValues")?(this._prepareAnyValueConverters(),this._prepareCompatibilityConverter()):e.conversion.attributeToElement(s),e.commands.add(h,new ae(e))}_prepareAnyValueConverters(){const e=this.editor;e.conversion.for("downcast").attributeToElement({model:h,view:(t,{writer:s})=>s.createAttributeElement("span",{style:"font-family:"+t},{priority:7})}),e.conversion.for("upcast").elementToAttribute({model:{key:h,value:t=>t.getStyle("font-family")},view:{name:"span",styles:{"font-family":/.*/}}})}_prepareCompatibilityConverter(){this.editor.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{face:/.*/}},model:{key:h,value:t=>t.getAttribute("face")}})}}const fe='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.03 3h6.149a.75.75 0 1 1 0 1.5h-5.514L11.03 3zm1.27 3h4.879a.75.75 0 1 1 0 1.5h-4.244L12.3 6zm1.27 3h3.609a.75.75 0 1 1 0 1.5h-2.973L13.57 9zm-2.754 2.5L8.038 4.785 5.261 11.5h5.555zm.62 1.5H4.641l-1.666 4.028H1.312l5.789-14h1.875l5.789 14h-1.663L11.436 13z"/></svg>';/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class pe extends m{static get pluginName(){return"FontFamilyUI"}init(){const e=this.editor,t=e.t,s=this._getLocalizedOptions(),i=e.commands.get(h),r=t("Font Family");e.ui.componentFactory.add(h,c=>{const n=x(c);return L(n,()=>ge(s,i),{role:"menu",ariaLabel:r}),n.buttonView.set({label:r,icon:fe,tooltip:!0}),n.extendTemplate({attributes:{class:"ck-font-family-dropdown"}}),n.bind("isEnabled").to(i),this.listenTo(n,"execute",l=>{e.execute(l.source.commandName,{value:l.source.commandParam}),e.editing.view.focus()}),n})}_getLocalizedOptions(){const e=this.editor,t=e.t;return D(e.config.get(h).options).map(i=>(i.title==="Default"&&(i.title=t("Default")),i))}}function ge(o,e){const t=new P;for(const s of o){const i={type:"button",model:new S({commandName:h,commandParam:s.model,label:s.title,role:"menuitemradio",withText:!0})};i.model.bind("isOn").to(e,"value",r=>r===s.model?!0:!r||!s.model?!1:r.split(",")[0].replace(/'/g,"").toLowerCase()===s.model.toLowerCase()),s.view&&typeof s.view!="string"&&s.view.styles&&i.model.set("labelStyle",`font-family: ${s.view.styles["font-family"]}`),t.add(i)}return t}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class be extends m{static get requires(){return[me,pe]}static get pluginName(){return"FontFamily"}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class we extends k{constructor(e){super(e,d)}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function T(o){return o.map(e=>Ce(e)).filter(e=>e!==void 0)}const z={get tiny(){return{title:"Tiny",model:"tiny",view:{name:"span",classes:"text-tiny",priority:7}}},get small(){return{title:"Small",model:"small",view:{name:"span",classes:"text-small",priority:7}}},get big(){return{title:"Big",model:"big",view:{name:"span",classes:"text-big",priority:7}}},get huge(){return{title:"Huge",model:"huge",view:{name:"span",classes:"text-huge",priority:7}}}};function Ce(o){if(typeof o=="number"&&(o=String(o)),typeof o=="object"&&ye(o))return V(o);const e=ve(o);if(e)return V(e);if(o==="default")return{model:void 0,title:"Default"};if(!Ve(o))return ke(o)}function ke(o){return typeof o=="string"&&(o={title:o,model:`${parseFloat(o)}px`}),o.view={name:"span",styles:{"font-size":o.model}},V(o)}function V(o){return o.view&&typeof o.view!="string"&&!o.view.priority&&(o.view.priority=7),o}function ve(o){return typeof o=="string"?z[o]:z[o.model]}function ye(o){return o.title&&o.model&&o.view}function Ve(o){let e;if(typeof o=="object")if(o.model)e=parseFloat(o.model);else throw new G("font-size-invalid-definition",null,o);else e=parseFloat(o);return isNaN(e)}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const A=["x-small","x-small","small","medium","large","x-large","xx-large","xxx-large"];class Pe extends m{static get pluginName(){return"FontSizeEditing"}constructor(e){super(e),e.config.define(d,{options:["tiny","small","default","big","huge"],supportAllValues:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:d}),e.model.schema.setAttributeProperties(d,{isFormatting:!0,copyOnEnter:!0});const t=e.config.get("fontSize.supportAllValues"),s=T(this.editor.config.get("fontSize.options")).filter(r=>r.model),i=N(d,s);t?(this._prepareAnyValueConverters(i),this._prepareCompatibilityConverter()):e.conversion.attributeToElement(i),e.commands.add(d,new we(e))}_prepareAnyValueConverters(e){const t=this.editor,s=e.model.values.filter(i=>!q(String(i))&&!M(String(i)));if(s.length)throw new G("font-size-invalid-use-of-named-presets",null,{presets:s});t.conversion.for("downcast").attributeToElement({model:d,view:(i,{writer:r})=>{if(i)return r.createAttributeElement("span",{style:"font-size:"+i},{priority:7})}}),t.conversion.for("upcast").elementToAttribute({model:{key:d,value:i=>i.getStyle("font-size")},view:{name:"span",styles:{"font-size":/.*/}}})}_prepareCompatibilityConverter(){this.editor.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{size:/^[+-]?\d{1,3}$/}},model:{key:d,value:t=>{const s=t.getAttribute("size"),i=s[0]==="-"||s[0]==="+";let r=parseInt(s,10);i&&(r=3+r);const c=A.length-1,n=Math.min(Math.max(r,0),c);return A[n]}}})}}const xe='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13zm7.55 2.279.779-.779.707.707-2.265 2.265-2.193-2.265.707-.707.765.765V4.825c0-.042 0-.083.002-.123l-.77.77-.707-.707L17.207 2.5l2.265 2.265-.707.707-.782-.782c.002.043.003.089.003.135v10.454z"/></svg>';/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Te extends m{static get pluginName(){return"FontSizeUI"}init(){const e=this.editor,t=e.t,s=this._getLocalizedOptions(),i=e.commands.get(d),r=t("Font Size");e.ui.componentFactory.add(d,c=>{const n=x(c);return L(n,()=>_e(s,i),{role:"menu",ariaLabel:r}),n.buttonView.set({label:r,icon:xe,tooltip:!0}),n.extendTemplate({attributes:{class:["ck-font-size-dropdown"]}}),n.bind("isEnabled").to(i),this.listenTo(n,"execute",l=>{e.execute(l.source.commandName,{value:l.source.commandParam}),e.editing.view.focus()}),n})}_getLocalizedOptions(){const e=this.editor,t=e.t,s={Default:t("Default"),Tiny:t("Tiny"),Small:t("Small"),Big:t("Big"),Huge:t("Huge")};return T(e.config.get(d).options).map(r=>{const c=s[r.title];return c&&c!=r.title&&(r=Object.assign({},r,{title:c})),r})}}function _e(o,e){const t=new P;for(const s of o){const i={type:"button",model:new S({commandName:d,commandParam:s.model,label:s.title,class:"ck-fontsize-option",role:"menuitemradio",withText:!0})};s.view&&typeof s.view!="string"&&(s.view.styles&&i.model.set("labelStyle",`font-size:${s.view.styles["font-size"]}`),s.view.classes&&i.model.set("class",`${i.model.class} ${s.view.classes}`)),i.model.bind("isOn").to(e,"value",r=>r===s.model),t.add(i)}return t}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Be extends m{static get requires(){return[Pe,Te]}static get pluginName(){return"FontSize"}normalizeSizeOptions(e){return T(e)}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Fe extends k{constructor(e){super(e,f)}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class ze extends m{static get pluginName(){return"FontColorEditing"}constructor(e){super(e),e.config.define(f,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),e.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{color:/[\s\S]+/}},model:{key:f,value:E("color")}}),e.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{color:/^#?\w+$/}},model:{key:f,value:t=>t.getAttribute("color")}}),e.conversion.for("downcast").attributeToElement({model:f,view:O("color")}),e.commands.add(f,new Fe(e)),e.model.schema.extend("$text",{allowAttributes:f}),e.model.schema.setAttributeProperties(f,{isFormatting:!0,copyOnEnter:!0})}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class I extends m{constructor(e,{commandName:t,componentName:s,icon:i,dropdownLabel:r}){super(e),this.commandName=t,this.componentName=s,this.icon=i,this.dropdownLabel=r,this.columns=e.config.get(`${this.componentName}.columns`),this.colorTableView=void 0}init(){const e=this.editor,t=e.locale,s=t.t,i=e.commands.get(this.commandName),r=e.config.get(this.componentName),c=ee(r.colors),n=te(t,c),l=r.documentColors,u=r.colorPicker!==!1;e.ui.componentFactory.add(this.componentName,p=>{const a=x(p);let _=!1;return this.colorTableView=ne({dropdownView:a,colors:n.map(b=>({label:b.label,color:b.model,options:{hasBorder:b.hasBorder}})),columns:this.columns,removeButtonLabel:s("Remove color"),colorPickerLabel:s("Color picker"),documentColorsLabel:l!==0?s("Document colors"):"",documentColorsCount:l===void 0?this.columns:l,colorPickerConfig:u?r.colorPicker||{}:!1}),this.colorTableView.bind("selectedColor").to(i,"value"),a.buttonView.set({label:this.dropdownLabel,icon:this.icon,tooltip:!0}),a.extendTemplate({attributes:{class:"ck-color-ui-dropdown"}}),a.bind("isEnabled").to(i),this.colorTableView.on("execute",(b,v)=>{a.isOpen&&e.execute(this.commandName,{value:v.value,batch:this._undoStepBatch}),v.source!=="colorPicker"&&e.editing.view.focus()}),this.colorTableView.on("showColorPicker",()=>{this._undoStepBatch=e.model.createBatch()}),this.colorTableView.on("cancel",()=>{this._undoStepBatch.operations.length&&(a.isOpen=!1,e.execute("undo",this._undoStepBatch)),e.editing.view.focus()}),a.on("change:isOpen",(b,v,R)=>{_||(_=!0,a.colorTableView.appendUI()),R?(l!==0&&this.colorTableView.updateDocumentColors(e.model,this.componentName),this.colorTableView.updateSelectedColors()):this.colorTableView.showColorGrids()}),oe(a,()=>a.colorTableView.colorGridsPageView.staticColorsGrid.items.find(b=>b.isOn)),a})}}const Ae='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.4 10.3 10 4.5l-2.4 5.8h4.8zm.5 1.2H7.1L5.7 15H4.2l5-12h1.6l5 12h-1.5L13 11.5zm3.1 7H4a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></svg>';/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Ge extends I{constructor(e){const t=e.locale.t;super(e,{commandName:f,componentName:f,icon:Ae,dropdownLabel:t("Font Color")})}static get pluginName(){return"FontColorUI"}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Le extends m{static get requires(){return[ze,Ge]}static get pluginName(){return"FontColor"}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Se extends k{constructor(e){super(e,g)}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Ne extends m{static get pluginName(){return"FontBackgroundColorEditing"}constructor(e){super(e),e.config.define(g,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),e.data.addStyleProcessorRules(Y),e.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{"background-color":/[\s\S]+/}},model:{key:g,value:E("background-color")}}),e.conversion.for("downcast").attributeToElement({model:g,view:O("background-color")}),e.commands.add(g,new Se(e)),e.model.schema.extend("$text",{allowAttributes:g}),e.model.schema.setAttributeProperties(g,{isFormatting:!0,copyOnEnter:!0})}}const Ee='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8.38 9.262H7.62L10 5.506l2.38 5.756zm.532 1.285L14.34 16h1.426L10.804 4H9.196L4.234 16H5.66l1.428-3.453h5.824z"/></svg>';/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Oe extends I{constructor(e){const t=e.locale.t;super(e,{commandName:g,componentName:g,icon:Ee,dropdownLabel:t("Font Background Color")})}static get pluginName(){return"FontBackgroundColorUI"}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class De extends m{static get requires(){return[Ne,Oe]}static get pluginName(){return"FontBackgroundColor"}}/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class qe extends m{static get requires(){return[be,Be,Le,De]}static get pluginName(){return"Font"}}export{qe as F,be as a};