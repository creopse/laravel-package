/*!
  * message-compiler v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function Ce(n,r,u){return{line:n,column:r,offset:u}}function W(n,r,u){const a={start:n,end:r};return u!=null&&(a.source=u),a}const Ie=/\{([0-9a-zA-Z]+)\}/g;function Te(n,...r){return r.length===1&&Ae(r[0])&&(r=r[0]),(!r||!r.hasOwnProperty)&&(r={}),n.replace(Ie,(u,a)=>r.hasOwnProperty(a)?r[a]:"")}const ce=Object.assign,te=n=>typeof n=="string",Ae=n=>n!==null&&typeof n=="object";function ue(n,r=""){return n.reduce((u,a,L)=>L===0?u+a:u+r+a,"")}const d={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Se={[d.EXPECTED_TOKEN]:"Expected token: '{0}'",[d.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[d.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[d.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[d.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[d.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[d.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[d.EMPTY_PLACEHOLDER]:"Empty placeholder",[d.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[d.INVALID_LINKED_FORMAT]:"Invalid linked format",[d.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[d.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[d.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[d.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[d.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[d.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function F(n,r,u={}){const{domain:a,messages:L,args:i}=u,k=Te((L||Se)[n]||"",...i||[]),_=new SyntaxError(String(k));return _.code=n,r&&(_.location=r),_.domain=a,_}function Ve(n){throw n}const v=" ",ke="\r",b=`
`,Pe=String.fromCharCode(8232),Oe=String.fromCharCode(8233);function De(n){const r=n;let u=0,a=1,L=1,i=0;const k=C=>r[C]===ke&&r[C+1]===b,_=C=>r[C]===b,I=C=>r[C]===Oe,D=C=>r[C]===Pe,O=C=>k(C)||_(C)||I(C)||D(C),P=()=>u,S=()=>a,R=()=>L,U=()=>i,y=C=>k(C)||I(C)||D(C)?b:r[C],T=()=>y(u),s=()=>y(u+i);function l(){return i=0,O(u)&&(a++,L=0),k(u)&&u++,u++,L++,r[u]}function E(){return k(u+i)&&i++,i++,r[u+i]}function o(){u=0,a=1,L=1,i=0}function p(C=0){i=C}function h(){const C=u+i;for(;C!==u;)l();i=0}return{index:P,line:S,column:R,peekOffset:U,charAt:y,currentChar:T,currentPeek:s,next:l,peek:E,reset:o,resetPeek:p,skipToPeek:h}}const Y=void 0,ye=".",ne="'",me="tokenizer";function be(n,r={}){const u=r.location!==!1,a=De(n),L=()=>a.index(),i=()=>Ce(a.line(),a.column(),a.index()),k=i(),_=L(),I={currentType:14,offset:_,startLoc:k,endLoc:k,lastType:14,lastOffset:_,lastStartLoc:k,lastEndLoc:k,braceNest:0,inLinked:!1,text:""},D=()=>I,{onError:O}=r;function P(e,t,c,...f){const N=D();if(t.column+=c,t.offset+=c,O){const A=u?W(N.startLoc,t):null,w=F(e,A,{domain:me,args:f});O(w)}}function S(e,t,c){e.endLoc=i(),e.currentType=t;const f={type:t};return u&&(f.loc=W(e.startLoc,e.endLoc)),c!=null&&(f.value=c),f}const R=e=>S(e,14);function U(e,t){return e.currentChar()===t?(e.next(),t):(P(d.EXPECTED_TOKEN,i(),0,t),"")}function y(e){let t="";for(;e.currentPeek()===v||e.currentPeek()===b;)t+=e.currentPeek(),e.peek();return t}function T(e){const t=y(e);return e.skipToPeek(),t}function s(e){if(e===Y)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t===95}function l(e){if(e===Y)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}function E(e,t){const{currentType:c}=t;if(c!==2)return!1;y(e);const f=s(e.currentPeek());return e.resetPeek(),f}function o(e,t){const{currentType:c}=t;if(c!==2)return!1;y(e);const f=e.currentPeek()==="-"?e.peek():e.currentPeek(),N=l(f);return e.resetPeek(),N}function p(e,t){const{currentType:c}=t;if(c!==2)return!1;y(e);const f=e.currentPeek()===ne;return e.resetPeek(),f}function h(e,t){const{currentType:c}=t;if(c!==8)return!1;y(e);const f=e.currentPeek()===".";return e.resetPeek(),f}function C(e,t){const{currentType:c}=t;if(c!==9)return!1;y(e);const f=s(e.currentPeek());return e.resetPeek(),f}function X(e,t){const{currentType:c}=t;if(!(c===8||c===12))return!1;y(e);const f=e.currentPeek()===":";return e.resetPeek(),f}function m(e,t){const{currentType:c}=t;if(c!==10)return!1;const f=()=>{const A=e.currentPeek();return A==="{"?s(e.peek()):A==="@"||A==="%"||A==="|"||A===":"||A==="."||A===v||!A?!1:A===b?(e.peek(),f()):s(A)},N=f();return e.resetPeek(),N}function K(e){y(e);const t=e.currentPeek()==="|";return e.resetPeek(),t}function ie(e){const t=y(e),c=e.currentPeek()==="%"&&e.peek()==="{";return e.resetPeek(),{isModulo:c,hasSpace:t.length>0}}function B(e,t=!0){const c=(N=!1,A="",w=!1)=>{const H=e.currentPeek();return H==="{"?A==="%"?!1:N:H==="@"||!H?A==="%"?!0:N:H==="%"?(e.peek(),c(N,"%",!0)):H==="|"?A==="%"||w?!0:!(A===v||A===b):H===v?(e.peek(),c(!0,v,w)):H===b?(e.peek(),c(!0,b,w)):!0},f=c();return t&&e.resetPeek(),f}function $(e,t){const c=e.currentChar();return c===Y?Y:t(c)?(e.next(),c):null}function J(e){return $(e,c=>{const f=c.charCodeAt(0);return f>=97&&f<=122||f>=65&&f<=90||f>=48&&f<=57||f===95||f===36})}function ae(e){return $(e,c=>{const f=c.charCodeAt(0);return f>=48&&f<=57})}function oe(e){return $(e,c=>{const f=c.charCodeAt(0);return f>=48&&f<=57||f>=65&&f<=70||f>=97&&f<=102})}function Z(e){let t="",c="";for(;t=ae(e);)c+=t;return c}function le(e){T(e);const t=e.currentChar();return t!=="%"&&P(d.EXPECTED_TOKEN,i(),0,t),e.next(),"%"}function z(e){let t="";for(;;){const c=e.currentChar();if(c==="{"||c==="}"||c==="@"||c==="|"||!c)break;if(c==="%")if(B(e))t+=c,e.next();else break;else if(c===v||c===b)if(B(e))t+=c,e.next();else{if(K(e))break;t+=c,e.next()}else t+=c,e.next()}return t}function fe(e){T(e);let t="",c="";for(;t=J(e);)c+=t;return e.currentChar()===Y&&P(d.UNTERMINATED_CLOSING_BRACE,i(),0),c}function Ee(e){T(e);let t="";return e.currentChar()==="-"?(e.next(),t+=`-${Z(e)}`):t+=Z(e),e.currentChar()===Y&&P(d.UNTERMINATED_CLOSING_BRACE,i(),0),t}function de(e){T(e),U(e,"'");let t="",c="";const f=A=>A!==ne&&A!==b;for(;t=$(e,f);)t==="\\"?c+=Le(e):c+=t;const N=e.currentChar();return N===b||N===Y?(P(d.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),N===b&&(e.next(),U(e,"'")),c):(U(e,"'"),c)}function Le(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return ee(e,t,4);case"U":return ee(e,t,6);default:return P(d.UNKNOWN_ESCAPE_SEQUENCE,i(),0,t),""}}function ee(e,t,c){U(e,t);let f="";for(let N=0;N<c;N++){const A=oe(e);if(!A){P(d.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${t}${f}${e.currentChar()}`);break}f+=A}return`\\${t}${f}`}function Ne(e){T(e);let t="",c="";const f=N=>N!=="{"&&N!=="}"&&N!==v&&N!==b;for(;t=$(e,f);)c+=t;return c}function _e(e){let t="",c="";for(;t=J(e);)c+=t;return c}function pe(e){const t=(c=!1,f)=>{const N=e.currentChar();return N==="{"||N==="%"||N==="@"||N==="|"||N==="("||N===")"||!N||N===v?f:N===b||N===ye?(f+=N,e.next(),t(c,f)):(f+=N,e.next(),t(!0,f))};return t(!1,"")}function V(e){T(e);const t=U(e,"|");return T(e),t}function Q(e,t){let c=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&P(d.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),e.next(),c=S(t,2,"{"),T(e),t.braceNest++,c;case"}":return t.braceNest>0&&t.currentType===2&&P(d.EMPTY_PLACEHOLDER,i(),0),e.next(),c=S(t,3,"}"),t.braceNest--,t.braceNest>0&&T(e),t.inLinked&&t.braceNest===0&&(t.inLinked=!1),c;case"@":return t.braceNest>0&&P(d.UNTERMINATED_CLOSING_BRACE,i(),0),c=G(e,t)||R(t),t.braceNest=0,c;default:let N=!0,A=!0,w=!0;if(K(e))return t.braceNest>0&&P(d.UNTERMINATED_CLOSING_BRACE,i(),0),c=S(t,1,V(e)),t.braceNest=0,t.inLinked=!1,c;if(t.braceNest>0&&(t.currentType===5||t.currentType===6||t.currentType===7))return P(d.UNTERMINATED_CLOSING_BRACE,i(),0),t.braceNest=0,q(e,t);if(N=E(e,t))return c=S(t,5,fe(e)),T(e),c;if(A=o(e,t))return c=S(t,6,Ee(e)),T(e),c;if(w=p(e,t))return c=S(t,7,de(e)),T(e),c;if(!N&&!A&&!w)return c=S(t,13,Ne(e)),P(d.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,c.value),T(e),c;break}return c}function G(e,t){const{currentType:c}=t;let f=null;const N=e.currentChar();switch((c===8||c===9||c===12||c===10)&&(N===b||N===v)&&P(d.INVALID_LINKED_FORMAT,i(),0),N){case"@":return e.next(),f=S(t,8,"@"),t.inLinked=!0,f;case".":return T(e),e.next(),S(t,9,".");case":":return T(e),e.next(),S(t,10,":");default:return K(e)?(f=S(t,1,V(e)),t.braceNest=0,t.inLinked=!1,f):h(e,t)||X(e,t)?(T(e),G(e,t)):C(e,t)?(T(e),S(t,12,_e(e))):m(e,t)?(T(e),N==="{"?Q(e,t)||f:S(t,11,pe(e))):(c===8&&P(d.INVALID_LINKED_FORMAT,i(),0),t.braceNest=0,t.inLinked=!1,q(e,t))}}function q(e,t){let c={type:14};if(t.braceNest>0)return Q(e,t)||R(t);if(t.inLinked)return G(e,t)||R(t);switch(e.currentChar()){case"{":return Q(e,t)||R(t);case"}":return P(d.UNBALANCED_CLOSING_BRACE,i(),0),e.next(),S(t,3,"}");case"@":return G(e,t)||R(t);default:if(K(e))return c=S(t,1,V(e)),t.braceNest=0,t.inLinked=!1,c;const{isModulo:N,hasSpace:A}=ie(e);if(N)return A?S(t,0,z(e)):S(t,4,le(e));if(B(e))return S(t,0,z(e));break}return c}function he(){const{currentType:e,offset:t,startLoc:c,endLoc:f}=I;return I.lastType=e,I.lastOffset=t,I.lastStartLoc=c,I.lastEndLoc=f,I.offset=L(),I.startLoc=i(),a.currentChar()===Y?S(I,14):q(a,I)}return{nextToken:he,currentOffset:L,currentPosition:i,context:D}}const Re="parser",Ue=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Me(n,r,u){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const a=parseInt(r||u,16);return a<=55295||a>=57344?String.fromCodePoint(a):"�"}}}function ve(n={}){const r=n.location!==!1,{onError:u}=n;function a(s,l,E,o,...p){const h=s.currentPosition();if(h.offset+=o,h.column+=o,u){const C=r?W(E,h):null,X=F(l,C,{domain:Re,args:p});u(X)}}function L(s,l,E){const o={type:s};return r&&(o.start=l,o.end=l,o.loc={start:E,end:E}),o}function i(s,l,E,o){o&&(s.type=o),r&&(s.end=l,s.loc&&(s.loc.end=E))}function k(s,l){const E=s.context(),o=L(3,E.offset,E.startLoc);return o.value=l,i(o,s.currentOffset(),s.currentPosition()),o}function _(s,l){const E=s.context(),{lastOffset:o,lastStartLoc:p}=E,h=L(5,o,p);return h.index=parseInt(l,10),s.nextToken(),i(h,s.currentOffset(),s.currentPosition()),h}function I(s,l){const E=s.context(),{lastOffset:o,lastStartLoc:p}=E,h=L(4,o,p);return h.key=l,s.nextToken(),i(h,s.currentOffset(),s.currentPosition()),h}function D(s,l){const E=s.context(),{lastOffset:o,lastStartLoc:p}=E,h=L(9,o,p);return h.value=l.replace(Ue,Me),s.nextToken(),i(h,s.currentOffset(),s.currentPosition()),h}function O(s){const l=s.nextToken(),E=s.context(),{lastOffset:o,lastStartLoc:p}=E,h=L(8,o,p);return l.type!==12?(a(s,d.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),h.value="",i(h,o,p),{nextConsumeToken:l,node:h}):(l.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,M(l)),h.value=l.value||"",i(h,s.currentOffset(),s.currentPosition()),{node:h})}function P(s,l){const E=s.context(),o=L(7,E.offset,E.startLoc);return o.value=l,i(o,s.currentOffset(),s.currentPosition()),o}function S(s){const l=s.context(),E=L(6,l.offset,l.startLoc);let o=s.nextToken();if(o.type===9){const p=O(s);E.modifier=p.node,o=p.nextConsumeToken||s.nextToken()}switch(o.type!==10&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(o)),o=s.nextToken(),o.type===2&&(o=s.nextToken()),o.type){case 11:o.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(o)),E.key=P(s,o.value||"");break;case 5:o.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(o)),E.key=I(s,o.value||"");break;case 6:o.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(o)),E.key=_(s,o.value||"");break;case 7:o.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(o)),E.key=D(s,o.value||"");break;default:a(s,d.UNEXPECTED_EMPTY_LINKED_KEY,l.lastStartLoc,0);const p=s.context(),h=L(7,p.offset,p.startLoc);return h.value="",i(h,p.offset,p.startLoc),E.key=h,i(E,p.offset,p.startLoc),{nextConsumeToken:o,node:E}}return i(E,s.currentOffset(),s.currentPosition()),{node:E}}function R(s){const l=s.context(),E=l.currentType===1?s.currentOffset():l.offset,o=l.currentType===1?l.endLoc:l.startLoc,p=L(2,E,o);p.items=[];let h=null;do{const m=h||s.nextToken();switch(h=null,m.type){case 0:m.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(m)),p.items.push(k(s,m.value||""));break;case 6:m.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(m)),p.items.push(_(s,m.value||""));break;case 5:m.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(m)),p.items.push(I(s,m.value||""));break;case 7:m.value==null&&a(s,d.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(m)),p.items.push(D(s,m.value||""));break;case 8:const K=S(s);p.items.push(K.node),h=K.nextConsumeToken||null;break}}while(l.currentType!==14&&l.currentType!==1);const C=l.currentType===1?l.lastOffset:s.currentOffset(),X=l.currentType===1?l.lastEndLoc:s.currentPosition();return i(p,C,X),p}function U(s,l,E,o){const p=s.context();let h=o.items.length===0;const C=L(1,l,E);C.cases=[],C.cases.push(o);do{const X=R(s);h||(h=X.items.length===0),C.cases.push(X)}while(p.currentType!==14);return h&&a(s,d.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),i(C,s.currentOffset(),s.currentPosition()),C}function y(s){const l=s.context(),{offset:E,startLoc:o}=l,p=R(s);return l.currentType===14?p:U(s,E,o,p)}function T(s){const l=be(s,ce({},n)),E=l.context(),o=L(0,E.offset,E.startLoc);return r&&o.loc&&(o.loc.source=s),o.body=y(l),n.onCacheKey&&(o.cacheKey=n.onCacheKey(s)),E.currentType!==14&&a(l,d.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,s[E.offset]||""),i(o,l.currentOffset(),l.currentPosition()),o}return{parse:T}}function M(n){if(n.type===14)return"EOF";const r=(n.value||"").replace(/\r?\n/gu,"\\n");return r.length>10?r.slice(0,9)+"…":r}function Xe(n,r={}){const u={ast:n,helpers:new Set};return{context:()=>u,helper:i=>(u.helpers.add(i),i)}}function re(n,r){for(let u=0;u<n.length;u++)j(n[u],r)}function j(n,r){switch(n.type){case 1:re(n.cases,r),r.helper("plural");break;case 2:re(n.items,r);break;case 6:j(n.key,r),r.helper("linked"),r.helper("type");break;case 5:r.helper("interpolate"),r.helper("list");break;case 4:r.helper("interpolate"),r.helper("named");break}}function we(n,r={}){const u=Xe(n);u.helper("normalize"),n.body&&j(n.body,u);const a=u.context();n.helpers=Array.from(a.helpers)}function Ye(n){const r=n.body;return r.type===2?se(r):r.cases.forEach(u=>se(u)),n}function se(n){if(n.items.length===1){const r=n.items[0];(r.type===3||r.type===9)&&(n.static=r.value,delete r.value)}else{const r=[];for(let u=0;u<n.items.length;u++){const a=n.items[u];if(!(a.type===3||a.type===9)||a.value==null)break;r.push(a.value)}if(r.length===n.items.length){n.static=ue(r);for(let u=0;u<n.items.length;u++){const a=n.items[u];(a.type===3||a.type===9)&&delete a.value}}}}const Ke="minifier";function g(n){switch(n.t=n.type,n.type){case 0:const r=n;g(r.body),r.b=r.body,delete r.body;break;case 1:const u=n,a=u.cases;for(let O=0;O<a.length;O++)g(a[O]);u.c=a,delete u.cases;break;case 2:const L=n,i=L.items;for(let O=0;O<i.length;O++)g(i[O]);L.i=i,delete L.items,L.static&&(L.s=L.static,delete L.static);break;case 3:case 9:case 8:case 7:const k=n;k.value&&(k.v=k.value,delete k.value);break;case 6:const _=n;g(_.key),_.k=_.key,delete _.key,_.modifier&&(g(_.modifier),_.m=_.modifier,delete _.modifier);break;case 5:const I=n;I.i=I.index,delete I.index;break;case 4:const D=n;D.k=D.key,delete D.key;break;default:throw F(d.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:Ke,args:[n.type]})}delete n.type}const He="parser";function ge(n,r){const{sourceMap:u,filename:a,breakLineCode:L,needIndent:i}=r,k=r.location!==!1,_={filename:a,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:L,needIndent:i,indentLevel:0};k&&n.loc&&(_.source=n.loc.source);const I=()=>_;function D(T,s){_.code+=T}function O(T,s=!0){const l=s?L:"";D(i?l+"  ".repeat(T):l)}function P(T=!0){const s=++_.indentLevel;T&&O(s)}function S(T=!0){const s=--_.indentLevel;T&&O(s)}function R(){O(_.indentLevel)}return{context:I,push:D,indent:P,deindent:S,newline:R,helper:T=>`_${T}`,needIndent:()=>_.needIndent}}function xe(n,r){const{helper:u}=n;n.push(`${u("linked")}(`),x(n,r.key),r.modifier?(n.push(", "),x(n,r.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function $e(n,r){const{helper:u,needIndent:a}=n;n.push(`${u("normalize")}([`),n.indent(a());const L=r.items.length;for(let i=0;i<L&&(x(n,r.items[i]),i!==L-1);i++)n.push(", ");n.deindent(a()),n.push("])")}function Ge(n,r){const{helper:u,needIndent:a}=n;if(r.cases.length>1){n.push(`${u("plural")}([`),n.indent(a());const L=r.cases.length;for(let i=0;i<L&&(x(n,r.cases[i]),i!==L-1);i++)n.push(", ");n.deindent(a()),n.push("])")}}function Fe(n,r){r.body?x(n,r.body):n.push("null")}function x(n,r){const{helper:u}=n;switch(r.type){case 0:Fe(n,r);break;case 1:Ge(n,r);break;case 2:$e(n,r);break;case 6:xe(n,r);break;case 8:n.push(JSON.stringify(r.value),r);break;case 7:n.push(JSON.stringify(r.value),r);break;case 5:n.push(`${u("interpolate")}(${u("list")}(${r.index}))`,r);break;case 4:n.push(`${u("interpolate")}(${u("named")}(${JSON.stringify(r.key)}))`,r);break;case 9:n.push(JSON.stringify(r.value),r);break;case 3:n.push(JSON.stringify(r.value),r);break;default:throw F(d.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:He,args:[r.type]})}}const Be=(n,r={})=>{const u=te(r.mode)?r.mode:"normal",a=te(r.filename)?r.filename:"message.intl",L=!!r.sourceMap,i=r.breakLineCode!=null?r.breakLineCode:u==="arrow"?";":`
`,k=r.needIndent?r.needIndent:u!=="arrow",_=n.helpers||[],I=ge(n,{mode:u,filename:a,sourceMap:L,breakLineCode:i,needIndent:k});I.push(u==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),I.indent(k),_.length>0&&(I.push(`const { ${ue(_.map(P=>`${P}: _${P}`),", ")} } = ctx`),I.newline()),I.push("return "),x(I,n),I.deindent(k),I.push("}"),delete n.helpers;const{code:D,map:O}=I.context();return{ast:n,code:D,map:O?O.toJSON():void 0}};function Qe(n,r={}){const u=ce({},r),a=!!u.jit,L=!!u.minify,i=u.optimize==null?!0:u.optimize,_=ve(u).parse(n);return a?(i&&Ye(_),L&&g(_),{ast:_,code:""}):(we(_,u),Be(_,u))}export{d as C,Qe as b,F as c,Ve as d};