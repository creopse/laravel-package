import{P as T}from"./ckeditor_ckeditor5-core-BLE0sfN-.js";import{a7 as k,g as r,j as y,R as g}from"./ckeditor_ckeditor5-utils-yepbbcvQ.js";import{a6 as V,V as R}from"./ckeditor_ckeditor5-ui-8yCmPWEa.js";import{x as v,y as M}from"./ckeditor_ckeditor5-engine-XE-OfvCZ.js";const _=y("px");class P extends V{_options;constructor(t,e){super(t);const i=this.bindTemplate;this.set("top",0),this.set("height",0),this._options=e,this.extendTemplate({attributes:{tabindex:-1,"aria-hidden":"true",class:["ck-minimap__iframe"],style:{top:i.to("top",n=>_(n)),height:i.to("height",n=>_(n))}}})}render(){return super.render().then(()=>{this._prepareDocument()})}setHeight(t){this.height=t}setTopOffset(t){this.top=t}_prepareDocument(){const t=this.element.contentWindow.document,e=t.adoptNode(this._options.domRootClone),i=this._options.useSimplePreview?`
			.ck.ck-editor__editable_inline img {
				filter: contrast( 0 );
			}

			p, li, a, figcaption, span {
				background: hsl(0, 0%, 80%) !important;
				color: hsl(0, 0%, 80%) !important;
			}

			h1, h2, h3, h4 {
				background: hsl(0, 0%, 60%) !important;
				color: hsl(0, 0%, 60%) !important;
			}
		`:"",o=`<!DOCTYPE html><html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				${this._options.pageStyles.map(a=>typeof a=="string"?`<style>${a}</style>`:`<link rel="stylesheet" type="text/css" href="${a.href}">`).join(`
`)}
				<style>
					html, body {
						margin: 0 !important;
						padding: 0 !important;
					}

					html {
						overflow: hidden;
					}

					body {
						transform: scale( ${this._options.scaleRatio} );
						transform-origin: 0 0;
						overflow: visible;
					}

					.ck.ck-editor__editable_inline {
						margin: 0 !important;
						border-color: transparent !important;
						outline-color: transparent !important;
						box-shadow: none !important;
					}

					.ck.ck-content {
						background: white;
					}

					${i}
				</style>
			</head>
			<body class="${this._options.extraClasses||""}"></body>
		</html>`;t.open(),t.write(o),t.close(),t.body.appendChild(e)}}const w=y("px");class C extends R{constructor(t){super(t);const e=this.bindTemplate;this.set("height",0),this.set("top",0),this.set("scrollProgress",0),this.set("_isDragging",!1),this.setTemplate({tag:"div",attributes:{class:["ck","ck-minimap__position-tracker",e.if("_isDragging","ck-minimap__position-tracker_dragging")],style:{top:e.to("top",i=>w(i)),height:e.to("height",i=>w(i))},"data-progress":e.to("scrollProgress")},on:{mousedown:e.to(()=>{this._isDragging=!0})}})}render(){super.render(),this.listenTo(r.document,"mousemove",(t,e)=>{this._isDragging&&this.fire("drag",e.movementY)},{useCapture:!0}),this.listenTo(r.document,"mouseup",()=>{this._isDragging=!1},{useCapture:!0})}setHeight(t){this.height=t}setTopOffset(t){this.top=t}setScrollProgress(t){this.scrollProgress=t}}class S extends R{_positionTrackerView;_scaleRatio;_minimapIframeView;constructor({locale:t,scaleRatio:e,pageStyles:i,extraClasses:n,useSimplePreview:o,domRootClone:a}){super(t);const h=this.bindTemplate;this._positionTrackerView=new C(t),this._positionTrackerView.delegate("drag").to(this),this._scaleRatio=e,this._minimapIframeView=new P(t,{useSimplePreview:o,pageStyles:i,extraClasses:n,scaleRatio:e,domRootClone:a}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-minimap"]},children:[this._positionTrackerView],on:{click:h.to(this._handleMinimapClick.bind(this)),wheel:h.to(this._handleMinimapMouseWheel.bind(this))}})}destroy(){this._minimapIframeView.destroy(),super.destroy()}get height(){return new g(this.element).height}get scrollHeight(){return Math.max(0,Math.min(this.height,this._minimapIframeView.height)-this._positionTrackerView.height)}render(){super.render(),this._minimapIframeView.render(),this.element.appendChild(this._minimapIframeView.element)}setContentHeight(t){this._minimapIframeView.setHeight(t*this._scaleRatio)}setScrollProgress(t){const e=this._minimapIframeView,i=this._positionTrackerView;if(e.height<this.height)e.setTopOffset(0),i.setTopOffset((e.height-i.height)*t);else{const n=e.height-this.height;e.setTopOffset(-n*t),i.setTopOffset((this.height-i.height)*t)}i.setScrollProgress(Math.round(t*100))}setPositionTrackerHeight(t){this._positionTrackerView.setHeight(t*this._scaleRatio)}_handleMinimapClick(t){const e=this._positionTrackerView;if(t.target===e.element)return;const i=new g(e.element),o=(t.clientY-i.top-i.height/2)/this._minimapIframeView.height;this.fire("click",o)}_handleMinimapMouseWheel(t){this.fire("drag",t.deltaY*this._scaleRatio)}}function x(s,t){const e=s.editing.view.document,i=e.getRoot(t),n=new v(e),o=new M(n,e.selection),a=s.editing.view.getDomRoot().cloneNode();return n.bindElements(a,i),o.markToSync("children",i),o.markToSync("attributes",i),i.on("change:children",(h,c)=>o.markToSync("children",c)),i.on("change:attributes",(h,c)=>o.markToSync("attributes",c)),i.on("change:text",(h,c)=>o.markToSync("text",c)),o.render(),s.editing.view.on("render",()=>o.render()),s.on("destroy",()=>{n.unbindDomElement(a)}),a}function E(){return Array.from(r.document.styleSheets).map(s=>s.href&&!s.href.startsWith(r.window.location.origin)?{href:s.href}:Array.from(s.cssRules).filter(t=>!(t instanceof CSSMediaRule)).map(t=>t.cssText).join(` 
`))}function p(s){return new g(s===r.document.body?r.window:s)}function H(s){return s===r.document.body?r.window.innerHeight:s.clientHeight}function b(s){return s===r.document.body?r.window:s}class $ extends T{static get pluginName(){return"Minimap"}static get isOfficialPlugin(){return!0}_minimapView;_scrollableRootAncestor;_editingRootElement;init(){const t=this.editor;this._minimapView=null,this._scrollableRootAncestor=null,this.listenTo(t.ui,"ready",this._onUiReady.bind(this))}destroy(){super.destroy(),this._minimapView.destroy(),this._minimapView.element.remove()}_onUiReady(){const t=this.editor,e=this._editingRootElement=t.ui.getEditableElement();if(this._scrollableRootAncestor=k(e),!e.ownerDocument.body.contains(e)){t.ui.once("update",this._onUiReady.bind(this));return}this._initializeMinimapView(),this.listenTo(t.editing.view,"render",()=>{t.state==="ready"&&this._syncMinimapToEditingRootScrollPosition()}),this._syncMinimapToEditingRootScrollPosition()}_initializeMinimapView(){const t=this.editor,e=t.locale,i=t.config.get("minimap.useSimplePreview"),n=t.config.get("minimap.container"),o=this._scrollableRootAncestor,a=p(this._editingRootElement).width,c=p(n).width/a,l=this._minimapView=new S({locale:e,scaleRatio:c,pageStyles:E(),extraClasses:t.config.get("minimap.extraClasses"),useSimplePreview:i,domRootClone:x(t)});l.render(),l.listenTo(r.document,"scroll",(u,m)=>{if(o===r.document.body){if(m.target!==r.document)return}else if(m.target!==o)return;this._syncMinimapToEditingRootScrollPosition()},{useCapture:!0,usePassive:!0}),l.listenTo(r.window,"resize",()=>{this._syncMinimapToEditingRootScrollPosition()}),l.on("drag",(u,m)=>{let d;l.scrollHeight===0?d=0:d=m/l.scrollHeight;const f=d*(o.scrollHeight-H(o));b(o).scrollBy(0,Math.round(f))}),l.on("click",(u,m)=>{const d=m*o.scrollHeight;b(o).scrollBy(0,Math.round(d))}),n.appendChild(l.element)}_syncMinimapToEditingRootScrollPosition(){const t=this._editingRootElement,e=this._minimapView;e.setContentHeight(t.offsetHeight);const i=p(t),n=p(this._scrollableRootAncestor);let o;n.getIntersection(i)&&(n.contains(i)||i.top>n.top?o=0:(o=(i.top-n.top)/(n.height-i.height),o=Math.max(0,Math.min(o,1))),e.setPositionTrackerHeight(n.getIntersection(i).height),e.setScrollProgress(o))}}export{$ as M,P as a,C as b,S as c,x as d,p as e,E as f,H as g,b as h};
