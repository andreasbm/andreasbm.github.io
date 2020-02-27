import{a as e,N as t,o,b as n,r as s}from"../../common/lit-html-9957b87e.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=(e,n)=>{const s=e.startNode.parentNode,r=void 0===n?e.endNode:n.startNode,l=s.insertBefore(o(),r);s.insertBefore(o(),r);const i=new t(e.options);return i.insertAfterNode(l),i},l=(e,t)=>(e.setValue(t),e.commit(),e),i=(e,t,o)=>{const s=e.startNode.parentNode,r=o?o.startNode:e.endNode,l=t.endNode.nextSibling;l!==r&&n(s,t.startNode,l,r)},a=e=>{s(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},d=(e,t,o)=>{const n=new Map;for(let s=t;s<=o;s++)n.set(e[s],s);return n},f=new WeakMap,N=new WeakMap,c=e((e,o,n)=>{let s;return void 0===n?n=o:void 0!==o&&(s=o),o=>{if(!(o instanceof t))throw new Error("repeat can only be used in text bindings");const c=f.get(o)||[],u=N.get(o)||[],p=[],g=[],m=[];let b,h,w=0;for(const t of e)m[w]=s?s(t,w):w,g[w]=n(t,w),w++;let v=0,x=c.length-1,M=0,k=g.length-1;for(;v<=x&&M<=k;)if(null===c[v])v++;else if(null===c[x])x--;else if(u[v]===m[M])p[M]=l(c[v],g[M]),v++,M++;else if(u[x]===m[k])p[k]=l(c[x],g[k]),x--,k--;else if(u[v]===m[k])p[k]=l(c[v],g[k]),i(o,c[v],p[k+1]),v++,k--;else if(u[x]===m[M])p[M]=l(c[x],g[M]),i(o,c[x],c[v]),x--,M++;else if(void 0===b&&(b=d(m,M,k),h=d(u,v,x)),b.has(u[v]))if(b.has(u[x])){const e=h.get(m[M]),t=void 0!==e?c[e]:null;if(null===t){const e=r(o,c[v]);l(e,g[M]),p[M]=e}else p[M]=l(t,g[M]),i(o,t,c[v]),c[e]=null;M++}else a(c[x]),x--;else a(c[v]),v++;for(;M<=k;){const e=r(o,p[k+1]);l(e,g[M]),p[M++]=e}for(;v<=x;){const e=c[v++];null!==e&&a(e)}f.set(o,p),N.set(o,m)}});export{c as repeat};
//# sourceMappingURL=repeat.js.map
