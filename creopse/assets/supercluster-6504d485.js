import{K as D}from"./kdbush-ac640998.js";const k={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:a=>a},L=Math.fround||(a=>t=>(a[0]=+t,a[0]))(new Float32Array(1)),Z=2,w=3,T=4,P=5,j=6;class H{constructor(t){this.options=Object.assign(Object.create(k),t),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(t){const{log:e,minZoom:o,maxZoom:i}=this.options;e&&console.time("total time");const n=`prepare ${t.length} points`;e&&console.time(n),this.points=t;const c=[];for(let s=0;s<t.length;s++){const h=t[s];if(!h.geometry)continue;const[u,r]=h.geometry.coordinates,p=L(y(u)),d=L(F(r));c.push(p,d,1/0,s,-1,1),this.options.reduce&&c.push(0)}let l=this.trees[i+1]=this._createTree(c);e&&console.timeEnd(n);for(let s=i;s>=o;s--){const h=+Date.now();l=this.trees[s]=this._createTree(this._cluster(l,s)),e&&console.log("z%d: %d clusters in %dms",s,l.numItems,+Date.now()-h)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let o=((t[0]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,t[1]));let n=t[2]===180?180:((t[2]+180)%360+360)%360-180;const c=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)o=-180,n=180;else if(o>n){const r=this.getClusters([o,i,180,c],e),p=this.getClusters([-180,i,n,c],e);return r.concat(p)}const l=this.trees[this._limitZoom(e)],s=l.range(y(o),F(c),y(n),F(i)),h=l.data,u=[];for(const r of s){const p=this.stride*r;u.push(h[p+P]>1?S(h,p,this.clusterProps):this.points[h[p+w]])}return u}getChildren(t){const e=this._getOriginId(t),o=this._getOriginZoom(t),i="No cluster with the specified id.",n=this.trees[o];if(!n)throw new Error(i);const c=n.data;if(e*this.stride>=c.length)throw new Error(i);const l=this.options.radius/(this.options.extent*Math.pow(2,o-1)),s=c[e*this.stride],h=c[e*this.stride+1],u=n.within(s,h,l),r=[];for(const p of u){const d=p*this.stride;c[d+T]===t&&r.push(c[d+P]>1?S(c,d,this.clusterProps):this.points[c[d+w]])}if(r.length===0)throw new Error(i);return r}getLeaves(t,e,o){e=e||10,o=o||0;const i=[];return this._appendLeaves(i,t,e,o,0),i}getTile(t,e,o){const i=this.trees[this._limitZoom(t)],n=Math.pow(2,t),{extent:c,radius:l}=this.options,s=l/c,h=(o-s)/n,u=(o+1+s)/n,r={features:[]};return this._addTileFeatures(i.range((e-s)/n,h,(e+1+s)/n,u),i.data,e,o,n,r),e===0&&this._addTileFeatures(i.range(1-s/n,h,1,u),i.data,n,o,n,r),e===n-1&&this._addTileFeatures(i.range(0,h,s/n,u),i.data,-1,o,n,r),r.features.length?r:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){const o=this.getChildren(t);if(e++,o.length!==1)break;t=o[0].properties.cluster_id}return e}_appendLeaves(t,e,o,i,n){const c=this.getChildren(e);for(const l of c){const s=l.properties;if(s&&s.cluster?n+s.point_count<=i?n+=s.point_count:n=this._appendLeaves(t,s.cluster_id,o,i,n):n<i?n++:t.push(l),t.length===o)break}return n}_createTree(t){const e=new D(t.length/this.stride|0,this.options.nodeSize,Float32Array);for(let o=0;o<t.length;o+=this.stride)e.add(t[o],t[o+1]);return e.finish(),e.data=t,e}_addTileFeatures(t,e,o,i,n,c){for(const l of t){const s=l*this.stride,h=e[s+P]>1;let u,r,p;if(h)u=v(e,s,this.clusterProps),r=e[s],p=e[s+1];else{const O=this.points[e[s+w]];u=O.properties;const[f,g]=O.geometry.coordinates;r=y(f),p=F(g)}const d={type:1,geometry:[[Math.round(this.options.extent*(r*n-o)),Math.round(this.options.extent*(p*n-i))]],tags:u};let _;h||this.options.generateId?_=e[s+w]:_=this.points[e[s+w]].id,_!==void 0&&(d.id=_),c.features.push(d)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const{radius:o,extent:i,reduce:n,minPoints:c}=this.options,l=o/(i*Math.pow(2,e)),s=t.data,h=[],u=this.stride;for(let r=0;r<s.length;r+=u){if(s[r+Z]<=e)continue;s[r+Z]=e;const p=s[r],d=s[r+1],_=t.within(s[r],s[r+1],l),O=s[r+P];let f=O;for(const g of _){const m=g*u;s[m+Z]>e&&(f+=s[m+P])}if(f>O&&f>=c){let g=p*O,m=d*O,M,E=-1;const I=((r/u|0)<<5)+(e+1)+this.points.length;for(const b of _){const x=b*u;if(s[x+Z]<=e)continue;s[x+Z]=e;const C=s[x+P];g+=s[x]*C,m+=s[x+1]*C,s[x+T]=I,n&&(M||(M=this._map(s,r,!0),E=this.clusterProps.length,this.clusterProps.push(M)),n(M,this._map(s,x)))}s[r+T]=I,h.push(g/f,m/f,1/0,I,-1,f),n&&h.push(E)}else{for(let g=0;g<u;g++)h.push(s[r+g]);if(f>1)for(const g of _){const m=g*u;if(!(s[m+Z]<=e)){s[m+Z]=e;for(let M=0;M<u;M++)h.push(s[m+M])}}}}return h}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e,o){if(t[e+P]>1){const c=this.clusterProps[t[e+j]];return o?Object.assign({},c):c}const i=this.points[t[e+w]].properties,n=this.options.map(i);return o&&n===i?Object.assign({},n):n}}function S(a,t,e){return{type:"Feature",id:a[t+w],properties:v(a,t,e),geometry:{type:"Point",coordinates:[A(a[t]),N(a[t+1])]}}}function v(a,t,e){const o=a[t+P],i=o>=1e4?`${Math.round(o/1e3)}k`:o>=1e3?`${Math.round(o/100)/10}k`:o,n=a[t+j],c=n===-1?{}:Object.assign({},e[n]);return Object.assign(c,{cluster:!0,cluster_id:a[t+w],point_count:o,point_count_abbreviated:i})}function y(a){return a/360+.5}function F(a){const t=Math.sin(a*Math.PI/180),e=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return e<0?0:e>1?1:e}function A(a){return(a-.5)*360}function N(a){const t=(180-a*360)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}export{H as S};