parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function H(e,t){const{element:{content:i},parts:r}=e,s=document.createTreeWalker(i,133,null,!1);let o=u(r),n=r[o],a=-1,p=0;const $=[];let l=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&($.push(e),null===l&&(l=e)),null!==l&&p++;void 0!==n&&n.index===a;)n.index=null!==l?-1:n.index-p,n=r[o=u(r,o)]}$.forEach(e=>e.parentNode.removeChild(e))}const ia=new WeakMap,n=t=>"function"==typeof t&&ia.has(t),I=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,ja=(t,e,i=null,$=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,$),e=i}},w=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},f={},J={},h=`{{lit-${String(Math.random()).slice(2)}}}`,K=`\x3c!--${h}--\x3e`,L=new RegExp(`${h}|${K}`);class M{constructor(t,e){this.parts=[],this.element=e;const i=[],$=[],s=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,n=0;const{strings:x,values:{length:p}}=t;for(;n<p;){const t=s.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let $=0;for(let t=0;t<i;t++)N(e[t].name,"$lit$")&&$++;for(;$-->0;){const e=x[n],i=y.exec(e)[2],$=i.toLowerCase()+"$lit$",s=t.getAttribute($);t.removeAttribute($);const o=s.split(L);this.parts.push({type:"attribute",index:r,name:i,strings:o}),n+=o.length-1}}"TEMPLATE"===t.tagName&&($.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(h)>=0){const $=t.parentNode,s=e.split(L),o=s.length-1;for(let e=0;e<o;e++){let i,o=s[e];if(""===o)i=j();else{const t=y.exec(o);null!==t&&N(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(o)}$.insertBefore(i,t),this.parts.push({type:"node",index:++r})}""===s[o]?($.insertBefore(j(),t),i.push(t)):t.data=s[o],n+=o}}else if(8===t.nodeType)if(t.data===h){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(j(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(i.push(t),r--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(h,e+1));)this.parts.push({type:"node",index:-1}),n++}}else s.currentNode=$.pop()}for(const a of i)a.parentNode.removeChild(a)}}const N=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},O=t=>-1!==t.index,j=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class x{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const i of this.__parts)void 0!==i&&i.commit()}_clone(){const t=I?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,$=document.createTreeWalker(t,133,null,!1);let s,o=0,r=0,n=$.nextNode();for(;o<i.length;)if(s=i[o],O(s)){for(;r<s.index;)r++,"TEMPLATE"===n.nodeName&&(e.push(n),$.currentNode=n.content),null===(n=$.nextNode())&&($.currentNode=e.pop(),n=$.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(n.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(n,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return I&&(document.adoptNode(t),customElements.upgrade(t)),t}}const ka=` ${h} `;class p{constructor(t,e,i,$){this.strings=t,this.values=e,this.type=i,this.processor=$}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let $=0;$<t;$++){const t=this.strings[$],s=t.lastIndexOf("<!--");i=(s>-1||i)&&-1===t.indexOf("-->",s+1);const o=y.exec(t);e+=null===o?t+(i?ka:K):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+h}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class la extends p{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),ja(e,i.firstChild),t}}const z=t=>null===t||!("object"==typeof t||"function"==typeof t),P=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Q{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let $=0;$<i.length-1;$++)this.parts[$]=this._createPart()}_createPart(){return new R(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let $=0;$<e;$++){i+=t[$];const e=this.parts[$];if(void 0!==e){const t=e.value;if(z(t)||!P(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class R{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||z(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class A{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(j()),this.endNode=t.appendChild(j())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=j()),t.__insert(this.endNode=j())}insertAfterPart(t){t.__insert(this.startNode=j()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(z(t)?t!==this.value&&this.__commitText(t):t instanceof p?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):P(t)?this.__commitIterable(t):t===J?(this.value=J,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof x&&this.value.template===e)this.value.update(t.values);else{const i=new x(e,t.processor,this.options),$=i._clone();i.update(t.values),this.__commitNode($),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,$=0;for(const s of t)void 0===(i=e[$])&&(i=new A(this.options),e.push(i),0===$?i.appendIntoPart(this):i.insertAfterPart(e[$-1])),i.setValue(s),i.commit(),$++;$<e.length&&(e.length=$,this.clear(i&&i.endNode))}clear(t=this.startNode){w(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ma{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class na extends Q{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new oa(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class oa extends R{}let pa=!1;try{const e={get capture(){return pa=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(t){}class qa{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),$=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),$&&(this.__options=ra(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const ra=t=>t&&(pa?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);class sa{handleAttributeExpressions(t,e,i,$){const s=e[0];return"."===s?new na(t,e.slice(1),i).parts:"@"===s?[new qa(t,e.slice(1),$.eventContext)]:"?"===s?[new ma(t,e.slice(1),i)]:new Q(t,e,i).parts}handleTextExpression(t){return new A(t)}}const S=new sa;function ta(t){let e=q.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},q.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const $=t.strings.join(h);return void 0===(i=e.keyString.get($))&&(i=new M(t,t.getTemplateElement()),e.keyString.set($,i)),e.stringsArray.set(t.strings,i),i}const q=new Map,m=new WeakMap,T=(t,e,i)=>{let $=m.get(e);void 0===$&&(w(e,e.firstChild),m.set(e,$=new A(Object.assign({templateFactory:ta},i))),$.appendInto(e)),$.setValue(t),$.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const a=(t,...e)=>new p(t,e,"html",S),d=(t,...e)=>new la(t,e,"svg",S);const ua=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},u=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(O(t))return i}return-1},U=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const va=e=>t=>{const i=U(t.type,e);let r=q.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},q.set(i,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(h);if(void 0===(s=r.keyString.get(o))){const i=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(i,e),s=new M(t,i),r.keyString.set(o,s)}return r.stringsArray.set(t.strings,s),s},wa=["html","svg"],W=new Set,xa=(e,t,i)=>{W.add(e);const r=i?i.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,e);const n=document.createElement("style");for(let $=0;$<o;$++){const e=s[$];e.parentNode.removeChild(e),n.textContent+=e.textContent}(e=>{wa.forEach(t=>{const i=q.get(U(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),H(e,i)})})})(e);const a=r.content;i?function(e,t,i=null){const{element:{content:r},parts:s}=e;if(null==i)return void r.appendChild(t);const o=document.createTreeWalker(r,133,null,!1);let n=u(s),a=0,p=-1;for(;o.nextNode();)for(p++,o.currentNode===i&&(a=ua(t),i.parentNode.insertBefore(t,i));-1!==n&&s[n].index===p;){if(a>0){for(;-1!==n;)s[n].index+=a,n=u(s,n);return}n=u(s,n)}}(i,n,a.firstChild):a.insertBefore(n,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const p=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==p)t.insertBefore(p.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(n,a.firstChild);const e=new Set;e.add(n),H(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e);}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e);}return e}},X=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:X},ya=Promise.resolve(!0);class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=ya,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const r=this._attributeNameForProperty(i,t);void 0!==r&&(this._attributeToPropertyMap.set(r,i),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=v){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const r=this[e];this[i]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[])];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=X){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||B,s="function"==typeof r?r:r.fromAttribute;return s?s(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||B.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=v){const r=this.constructor,s=r._attributeNameForProperty(e,i);if(void 0!==s){const e=r._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(void 0!==r){const e=i._classProperties.get(r)||v;this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const r=this.constructor,s=r._classProperties.get(e)||v;r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,r)=>{e=i,t=r});try{await i}catch(e){}this._hasConnected||(await new Promise(e=>this._hasConnectedResolver=e));try{const i=this.performUpdate();null!=i&&(await i)}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$=Symbol();class _{constructor(e,t){if(t!==$)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const b=(e,...t)=>{const i=t.reduce((t,i,r)=>t+(e=>{if(e instanceof _)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1],e[0]);return new _(i,$)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const za=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let r=0,s=t.length;r<s;r++){const s=t[r];Array.isArray(s)?e(s,i):i.push(s)}return i}(e);class c extends Y{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];return Array.isArray(e)?za(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e)):e&&t.push(e),t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof p&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}c.finalized=!0,c.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,s=m.has(t),o=V&&11===t.nodeType&&!!t.host,n=o&&!W.has(r),a=n?document.createDocumentFragment():t;if(T(e,a,Object.assign({templateFactory:va(r)},i)),n){const e=m.get(a);m.delete(a);const i=e.value instanceof x?e.value.template:void 0;xa(r,a,i),w(t,t.firstChild),t.appendChild(a),m.set(t,e)}!s&&o&&window.ShadyCSS.styleElement(t.host)};const g=b`
	h1, h2, h3, h4, h5, h6 {
		font-weight: 500;
		line-height: 1.4em;
	}
	
	a {
		text-decoration: none;
	}
	
	* {
		box-sizing: border-box;
	}
`;class aa extends c{static get styles(){return[g,b`
				:host {
					display: inline-flex;
					align-items: center;
				}
				
				::slotted(:not(:last-child)), :host > :not(:last-child) {
					margin: 0 var(--spacing-xxl) 0 0;
				}
				
				@media (max-width: 770px) {
					:host {
						flex-direction: column;
						align-items: stretch;
						justify-content: stretch;
					}
					
					::slotted(*), :host > * {
						width: 100%;
					}
					
					::slotted(:not(:last-child)), :host > :not(:last-child) {
						margin: 0 0 var(--spacing-l);
					}
					
					::slotted(:first-child:last-child), :host > :first-child:last-child (
						margin: 0;
					}
				}
			`]}render(){return a`
			<slot></slot>
		`}}customElements.define("an-buttons",aa);class C extends c{static get styles(){return[g,b`
				:host {
					display: block;
					background: var(--shade-300);
					color: var(--shade-300-contrast);
					border-radius: var(--border-radius-m);
					padding: var(--spacing-xxxxl);
					box-shadow: var(--shadow);
					position: relative;
					overflow: hidden;
				}
			`]}render(){return a`
			<slot></slot>
		`}}customElements.define("an-card",C);class Aa extends c{static get properties(){return{size:{type:String,reflect:!0}}}static get styles(){return[g,b`
				:host {
					display: block;
					padding: var(--spacing-xxxl) var(--spacing-l);
				}
				
				:host([size="small"]) {
					--container-width: var(--container-width-m);
				}
				
				#container {
					max-width: var(--container-width, var(--container-width-l));
					width: 100%;
					margin: 0 auto;
				}
			`]}render(){return a`
			<div id="container">
				<slot></slot>
			</div>
		`}}customElements.define("an-container",Aa);class Ba extends c{static get properties(){return{template:{type:Object}}}static get styles(){return[g,b`
				:host {
					display: flex;
					width: var(--icon-size, 20px);
					height: var(--icon-size, 20px);
				}
			`]}render(){return a`${this.template}`}}customElements.define("an-icon",Ba);const ba=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%" fill="currentColor"><path d="M14.927 4.084A8.068 8.068 0 0012.015 1.1 7.678 7.678 0 008 0a7.68 7.68 0 00-4.016 1.1 8.067 8.067 0 00-2.911 2.984A8.177 8.177 0 000 8.2c0 1.787.509 3.394 1.526 4.821 1.017 1.428 2.332 2.415 3.943 2.963.187.036.326.01.416-.074a.422.422 0 00.136-.32l-.006-.577c-.003-.363-.005-.68-.005-.95l-.24.042c-.152.029-.345.041-.578.038a4.3 4.3 0 01-.724-.075 1.599 1.599 0 01-.697-.32 1.354 1.354 0 01-.459-.657l-.104-.246a2.68 2.68 0 00-.328-.544c-.15-.2-.3-.335-.453-.406l-.073-.053a.772.772 0 01-.135-.129.588.588 0 01-.094-.149c-.02-.05-.004-.09.052-.123.056-.032.156-.048.302-.048l.208.032c.14.029.311.114.516.256.205.143.373.328.505.555.16.292.352.515.578.668.226.153.453.23.682.23.23 0 .428-.018.594-.054.167-.035.323-.089.469-.16.062-.477.233-.844.51-1.1a6.975 6.975 0 01-1.067-.192 4.194 4.194 0 01-.98-.417 2.822 2.822 0 01-.838-.715c-.222-.285-.405-.659-.547-1.121-.142-.463-.213-.997-.213-1.602 0-.861.274-1.595.823-2.2-.257-.647-.233-1.373.073-2.178.2-.064.5-.016.895.144.396.16.686.298.87.411.184.114.332.21.443.289a7.227 7.227 0 012-.278c.687 0 1.354.093 2 .278l.396-.256c.27-.171.59-.328.958-.47.368-.143.65-.182.844-.118.312.805.34 1.53.083 2.178.549.606.823 1.339.823 2.2 0 .605-.071 1.14-.213 1.607-.143.466-.327.84-.552 1.121a2.929 2.929 0 01-.844.71 4.202 4.202 0 01-.98.417c-.315.085-.671.15-1.067.192.361.32.542.826.542 1.516v2.253a.43.43 0 00.13.32c.087.086.224.11.411.075 1.612-.548 2.926-1.536 3.943-2.963S16 9.987 16 8.2c0-1.487-.358-2.86-1.073-4.116z" fill-rule="nonzero"/></svg>
`;const Ca=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><path fill="currentColor" fill-rule="nonzero" d="M9 12.01V0H7v12.01H4L8 16l4-3.99z"/></svg>
`;const Da=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><path fill="currentColor" fill-rule="nonzero" d="M.008 14.714L16 7.857.008 1 0 6.333l11.429 1.524L0 9.381z"/></svg>
`;const i=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><g id="icons/arrow-right" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path id="icon" fill="currentColor" fill-rule="nonzero" d="M12.01 7H0v2h12.01v3L16 8l-3.99-4z"/></g></svg>
`;const D=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><g id="icons/video" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M12.444 7V3.889c0-.489-.4-.889-.888-.889H.889C.4 3 0 3.4 0 3.889v8.889c0 .489.4.889.889.889h10.667c.488 0 .888-.4.888-.89v-3.11L16 13.222V3.444L12.444 7z" id="icon" fill="currentColor" fill-rule="nonzero"/></g></svg>
`;const Ea=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><g id="icons/twitter" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M16 2.57a6.736 6.736 0 01-1.89.528 3.315 3.315 0 001.443-1.85 6.479 6.479 0 01-2.08.81A3.258 3.258 0 0011.077 1C9.261 1 7.799 2.503 7.799 4.346c0 .265.022.52.076.763-2.727-.136-5.14-1.469-6.761-3.5a3.419 3.419 0 00-.449 1.692c0 1.158.585 2.185 1.457 2.78A3.191 3.191 0 01.64 5.669v.036c0 1.626 1.137 2.976 2.628 3.287-.267.074-.558.11-.86.11-.21 0-.422-.012-.621-.057.425 1.325 1.631 2.299 3.065 2.33A6.51 6.51 0 010 12.756a9.105 9.105 0 005.032 1.501c6.036 0 9.336-5.099 9.336-9.518 0-.148-.005-.291-.012-.433A6.617 6.617 0 0016 2.57z" id="icon" fill="currentColor" fill-rule="nonzero"/></g></svg>
`;const Fa=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><g id="icons/spotify" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M7.997 0C3.587 0 0 3.588 0 7.998 0 12.41 3.587 16 7.997 16 12.41 16 16 12.41 16 7.998 16 3.588 12.41 0 7.997 0zM3.939 10.936a9.698 9.698 0 012.825-.425c1.61 0 3.198.408 4.595 1.18.083.045.159.195.192.381.034.186.02.378-.034.478a.407.407 0 01-.556.16 8.738 8.738 0 00-6.776-.69.406.406 0 01-.514-.268c-.072-.234.076-.753.268-.816zm-.35-2.946a12.103 12.103 0 013.175-.424c1.929 0 3.844.467 5.54 1.35a.498.498 0 01.212.673c-.152.297-.329.496-.441.496a.512.512 0 01-.232-.057 10.886 10.886 0 00-5.08-1.236c-.998 0-1.977.131-2.91.39a.499.499 0 01-.613-.35c-.075-.281.096-.773.35-.842zM3.5 6.065a.587.587 0 01-.715-.428c-.082-.332.126-.717.426-.793a14.91 14.91 0 013.553-.432c2.3 0 4.504.517 6.55 1.537a.592.592 0 01.267.794c-.096.192-.303.398-.531.398a.616.616 0 01-.258-.058 13.35 13.35 0 00-6.028-1.417c-1.09 0-2.188.134-3.264.399z" id="icon" fill="currentColor" fill-rule="nonzero"/></g></svg>	
`;const Ga=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><g id="icons/linkedin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M13.656 0H2.344A2.347 2.347 0 000 2.344v11.312A2.347 2.347 0 002.344 16h11.312A2.347 2.347 0 0016 13.656V2.344A2.347 2.347 0 0013.656 0zM6 13H4V6h2v7zm0-8H4V3h2v2zm7 8h-2V9c0-.551-.449-1-1-1-.551 0-1 .449-1 1v4H7V6h2v.377C9.524 6.214 9.864 6 10.5 6c1.356.001 2.5 1.218 2.5 2.656V13z" id="Shape" fill="currentColor" fill-rule="nonzero"/></g></svg>
`;const Ha=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><g fill="currentColor" fill-rule="nonzero"><path d="M3 12.5h10V6H3v6.5zm7.018-3.788a.482.482 0 01-.127-.65.46.46 0 01.636-.13l1.364.928c.127.093.2.232.2.39a.475.475 0 01-.2.39l-1.364.929a.464.464 0 01-.636-.13.482.482 0 01.127-.65l.8-.539-.8-.538zm-3.336 2.191L8.5 7.19a.455.455 0 01.61-.214c.226.12.317.4.208.622L7.5 11.312a.453.453 0 01-.61.213.475.475 0 01-.208-.622zM4.109 8.86l1.364-.928a.46.46 0 01.636.13.482.482 0 01-.127.65l-.8.538.8.539c.209.148.263.436.127.65a.464.464 0 01-.636.13L4.109 9.64a.475.475 0 01-.2-.39c0-.158.073-.297.2-.39z"/><path d="M15.531 0H.47C.206 0 0 .235 0 .533v14.934c0 .298.206.533.469.533H15.53c.263 0 .469-.235.469-.533V.533C16 .235 15.794 0 15.531 0zM11.75 1.857c.263 0 .469.205.469.465s-.206.464-.469.464a.462.462 0 01-.469-.464c0-.26.206-.465.469-.465zm-1.875 0c.263 0 .469.205.469.465s-.206.464-.469.464a.462.462 0 01-.469-.464c0-.26.206-.465.469-.465zm-7.5 0H8c.263 0 .469.205.469.465s-.206.464-.469.464H2.375a.462.462 0 01-.469-.464c0-.26.206-.465.469-.465zM14 13.027a.462.462 0 01-.462.473H2.462A.462.462 0 012 13.028V5.472C2 5.208 2.203 5 2.462 5h11.076c.259 0 .462.208.462.472v7.556zm-.375-10.241a.462.462 0 01-.469-.464c0-.26.206-.465.469-.465s.469.205.469.465-.206.464-.469.464z"/></g></svg>
`;const Ia=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><g fill="currentColor" fill-rule="nonzero"><path d="M14.594 0c-.61 0-1.126.392-1.32.935H9.406V.467A.468.468 0 008.937 0H7.063c-.26 0-.47.21-.47.467v.468H2.727A1.404 1.404 0 000 1.402a1.404 1.404 0 002.726.467h1.78C2.385 3.094.938 5.386.938 7.946a.468.468 0 00.938 0c0-2.818 2.017-5.244 4.719-5.887v.278c0 .259.21.468.468.468h1.875c.26 0 .47-.21.47-.468V2.06c2.701.643 4.718 3.07 4.718 5.887a.468.468 0 00.938 0c0-2.56-1.447-4.852-3.57-6.076h1.78A1.404 1.404 0 0016 1.402C16 .63 15.37 0 14.594 0zM9.793 15.525V14.07H6.07v1.456a.47.47 0 00.465.475h2.794a.47.47 0 00.465-.475z"/><path d="M4.325 10.672a.477.477 0 00.03.473l1.379 2.096h4.532l1.38-2.096a.477.477 0 00.03-.473l-3.21-6.534v6.745c0 .261-.209.472-.466.472a.468.468 0 01-.466-.472V4.138l-3.21 6.534z"/></g></svg>
`;const Ja=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><path fill="currentColor" fill-rule="nonzero" d="M0 16l16-8L0 0z"/></svg>
`;const r=d`
	<svg preserveAspectRatio="none" viewBox="0 0 16 16" width="100%" height="100%"><path d="M14.222 14.222H1.778V1.778H8V0H1.778C.79 0 0 .8 0 1.778v12.444C0 15.2.791 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V8h-1.778v6.222zM9.778 0v1.778h3.19l-8.737 8.738 1.253 1.253 8.738-8.738v3.191H16V0H9.778z" fill="currentColor" fill-rule="nonzero"/></svg>
`;class Ka extends C{static get properties(){return{src:{type:String},iconTemplate:{type:Object}}}static get styles(){return[super.styles,b`
				:host {
					width: var(--media-width, 200px);
					height: var(--media-height, 200px);
					color: var(--light);
					cursor: pointer;
				}
				
				#img, #overlay {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
				
				#img {
					object-fit: cover;
				}
				
				#overlay {
					background: rgba(0, 0, 0, 0.7);
				}
				
				#icon {
					--icon-size: 30px;
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
				
				#overlay, #icon {
					transition: 120ms ease opacity;
					opacity: 0;
				}
				
				:host(:hover) #overlay, :host(:hover) #icon {
					opacity: 1;
				}
			`]}render(){return a`
			${null!=this.src?a`<img id="img" src="${this.src}" role="presentation" loading="lazy" />`:""}
			<div id="overlay"></div>
			<an-icon id="icon" .template="${this.iconTemplate||Ja}" aria-label="Play icon"></an-icon>
		`}}customElements.define("an-media",Ka);class La extends c{static get properties(){return{heading:{type:String,reflect:!0},ariaLevel:{type:String,attribute:"aria-level",reflect:!0},center:{type:Boolean,reflect:!0},margin:{type:String,reflect:!0}}}static get styles(){return[g,b`
				:host {
					display: block;
					font-size: var(--font-size-l);
					font-weight: var(--font-weight-t);
					line-height: var(--line-height-m);
				}
				
				:host([role="heading"]) {
					font-weight: var(--font-weight-b);
				}
				
				:host([aria-level="2"]) {
					text-transform: uppercase;
				}
				
				:host([center]) {
					text-align: center;
				}
				
				:host([margin="medium"]) {
					margin: 0 0 var(--spacing-s);
				}
				
				:host([margin="large"]) {
					margin: 0 0 var(--spacing-l);
				}
				
				:host([margin="xlarge"]) {
					margin: 0 0 var(--spacing-xxxl);
				}
			`]}render(){return a`<slot></slot>`}}customElements.define("an-text",La);class Ma extends c{static get styles(){return[g,b`
				:host {
					display: flex;
					cursor: pointer;
					user-select: none;
				    align-items: center;
			        justify-content: center;
                    line-height: 1;
                    text-decoration: none;
					padding: var(--spacing-m) var(--spacing-xxl);
					background: var(--background);
					color: var(--foreground);
					box-shadow: var(--shadow);
					border-radius: var(--border-radius-m);
					transition: 120ms ease transform;
					transform: scale(1);
					text-transform: uppercase;
					overflow: hidden;
                    text-overflow: ellipsis;
                    outline: none;
				}
				
				:host(:hover), :host(:focus-visible) {
					transform: scale(1.06);
				}
				
				:host(:focus-visible) {
					box-shadow: 0 0 0 3px var(--red-500);	
				}
				
				::slotted(an-icon) {
					flex-shrink: 0;
				}
				
				::slotted(:not(:last-child)) {
					margin: 0 var(--spacing-m) 0 0;
				}
			`]}constructor(){super(),this.tabIndex=0,this.role="button"}render(){return a`
			<slot></slot>
		`}}customElements.define("an-button",Ma);class Na extends c{static get properties(){return{headline:{type:String},text:{type:String},center:{type:Boolean}}}static get styles(){return[g,b`
				:host {
					display: block;
				}
			`]}render(){return a`
			${null!=this.headline?a`<an-text id="headline" role="heading" aria-level="2" ?center="${this.center}" margin="medium">${this.headline}</an-text>`:""}
			${null!=this.text?a`<an-text id="text" ?center="${this.center}" margin="xlarge">${this.text}</an-text>`:""}
		`}}customElements.define("an-section-header",Na);class Oa extends c{static get styles(){return[g,b`
				:host {
					display: block;
				}
				
				#footer {
					background: var(--space-500);
					color: var(--space-500-contrast);
					padding: var(--spacing-l) var(--spacing-xxl);
				}
			`]}render(){return a`
			<footer id="footer">
				<span>©2020 - Andreas Mehlsen</span>
			</footer>
		`}}customElements.define("an-footer",Oa);class Pa extends c{static get properties(){return{img:{type:String},text:{type:String}}}static get styles(){return[g,b`
				#header-container {
					position: relative;
				}

				#header {
					width: 100%;
				    height: 80vh;
                    min-height: 450px;
					background: var(--space-500);
					color: var(--space-500-contrast);
					display: flex;
					align-items: center;
					overflow: hidden;
					position: relative;
				}
				
				#content {
					padding: var(--spacing-m);
					margin: 0 auto;
					text-align: center;
					max-width: var(--container-width-s);
					position: relative;
				}
				
				#sun {
					position: absolute;
					left: 50%;
					top: 40%;
					transform: translate(-50%, -50%);
					animation: rotate 50000s linear infinite;
					transform-origin: 0 0;
					width: 2000px;
					height: 2000px;
				}
				
				#sun > path {
					fill: #0B0C2B;
				}
				
				#avatar {
					animation: scale 4s ease-in-out infinite;
					margin: 0 0 var(--spacing-m);
					width: 140px;
				    height: 167px;
				}
				
				#title {
					transition: 120ms ease-out opacity;
				}
				
				:host(:not(.ready)) #avatar, :host(:not(.ready)) #title {
				    opacity: 0;
				}
				
				::slotted([slot="footer"]) {
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translate(-50%, 50%);
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
				    padding: 0 var(--spacing-l);
				}
				
				#buttons > :not(:last-child) {
					margin: 0 var(--spacing-xxl) 0 0;
				}
				
				#projects-button {
					background: #6D73DB;
					color: var(--light);
				}
				
				@keyframes rotate {
					0% {
						transform: rotate(0deg) translate(-50%, -50%);
					}
					100% {
						transform: rotate(360000deg) translate(-50%, -50%);
					}
				}
				
				@keyframes scale {
					0% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.05);
					}
					100% {
						transform: scale(1);;
					}
				}
				
				
			`]}onAvatarLoaded(t){t.target.animate({transform:["scale(0)","scale(1)"],opacity:["0","1"]},{duration:200,easing:"ease-out"}).onfinish=()=>{this.classList.add("ready")}}render(){return a`
			<div id="header-container">
				<header id="header">
					<svg id="sun" preserveAspectRatio="none" viewBox="0 0 2294 2294">
						<path d="M1966.794 0c-316.537 558.384-818.016 1145.222-818.016 1145.222S1735.616 643.742 2294 327.206v312.98c-529.932 288.084-1145.222 505.036-1145.222 505.036S1721.39 1038.524 2294 1013.628v266.744c-572.61-24.896-1145.222-131.594-1145.222-131.594S1764.068 1365.73 2294 1653.814v312.98c-558.384-316.537-1145.222-818.016-1145.222-818.016s501.48 586.838 818.016 1145.222h-312.98c-288.084-529.932-505.036-1141.665-505.036-1145.222 0 0 106.698 572.611 131.594 1145.222h-263.188c24.897-572.61 131.594-1141.665 131.594-1145.222 0 0-216.952 615.29-505.035 1145.222H327.206c316.537-558.384 814.46-1145.222 818.016-1145.222 0 0-586.838 501.48-1145.222 818.016v-312.98c529.932-288.084 1141.665-505.036 1145.222-505.036 0 0-572.611 106.698-1145.222 131.594v-263.188c572.61 24.897 1141.665 131.594 1145.222 131.594 0 0-615.29-216.952-1145.222-505.035v-312.98c558.384 316.536 1145.222 814.459 1145.222 818.015 0 0-501.48-586.837-818.016-1145.221h312.98c288.084 529.931 505.036 1145.221 505.036 1145.221S1038.524 576.168 1013.628 3.557h263.187c-24.896 572.61-131.593 1145.221-131.593 1145.221s216.952-615.29 505.035-1145.221h316.537V0z" fill="#000" fill-rule="nonzero"/>
					</svg>
					<div id="content">
						${null!=this.img?a`<img @load="${this.onAvatarLoaded}" id="avatar" src="assets/andreas.png" alt="Avatar" loading="lazy"/>`:""}
						${null!=this.text?a`<an-text id="title" role="heading" aria-level="1">Hi, I'm Andreas. I love building awesome things for the web.</an-text>`:""}
					</div>
				</header>
				<slot name="footer"></slot>
			</div>
		`}}customElements.define("an-header",Pa);class Qa extends C{static get properties(){return{cover:{type:String},logo:{type:String},date:{type:String},name:{type:String},text:{type:String}}}static get styles(){return[super.styles,b`
				:host {
					background: var(--theme-600);
					padding: var(--spacing-xxxxxxl) var(--spacing-xxl);
				}
				
				#cover {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					/*filter: blur(var(--cover-blur, 8px));*/
					
					/* Scale to get rid of ugly blur edge */
					/*transform: scale(1.1);*/ 
					object-fit: cover;
				}
				
				#content {
					background: var(--light);
					color: var(--dark);
					border-radius: var(--border-radius-m);
					padding: var(--spacing-xxxl);
					box-shadow: var(--shadow);
					position: relative;
					text-align: center;
					max-width: 850px;
					margin: 0 auto;
				}
				
				#logo {
					width: var(--logo-size, 60px);
					height: var(--logo-size, 60px);
					object-fit: contain;
					margin: 0 0 var(--spacing-m);
				}
				
				#name {
					font-size: var(--font-size-xl);
				}
				
				#text {
				}
				
				#date {
					position: absolute;
					top: var(--spacing-m);
					left: var(--spacing-m);
					font-size: var(--font-size-s);
					border-radius: var(--border-radius-s);
					padding: 0 var(--spacing-s);
					line-height: 2;
					border: 1px solid var(--theme-600, #0D0E34);
					color: var(--theme-600, #0D0E34);
					background: var(--theme-600-contrast, white);
				}
				
				::slotted([slot="footer"]) {
					position: absolute;
					right: var(--spacing-xxxl);
					bottom: var(--spacing-xxxl);
					display: flex;
					align-items: center;
					justify-content: flex-end;
				}
				
				@media (max-width: 800px) {
					#date {
					    left: 50%;
                        transform: translateX(-50%);
					}
					
					::slotted([slot="footer"]) {
					    position: static;
                        margin: var(--spacing-xl) 0 0 0;
					}
				}
			`]}render(){return a`
			${null!=this.cover?a`<img id="cover" loading="lazy" src="${this.cover}" alt="${this.name||""} cover." role="presentation" />`:""}
			${null!=this.date?a`<div id="date">${this.date}</div>`:""}
			<div id="content">
				${null!=this.logo?a`<img id="logo" loading="lazy" src="${this.logo}" alt="${this.name||""} logo." />`:""}
				${null!=this.name?a`<an-text id="name" role="heading" aria-level="3">${this.name}</an-text>`:""}
				${null!=this.text?a`<an-text id="text">${this.text}</an-text>`:""}
			</div>
			<slot name="footer"></slot>
		`}}customElements.define("an-project",Qa);class Ra extends c{static get styles(){return[g,b`
				:host {
					display: flex;
				}
				
				.code, .design {
					width: 100%;
				}
				
				.code {
					margin: 0 var(--spacing-m) 0 0;
				}
				
				.text {
					font-size: var(--font-size-m);
				}
				
				.icon {
					--icon-size: 60px;
					margin: 0 auto var(--spacing-l);
				}
				
				@media (max-width: 800px) {
					:host {
						display: block;
					}
					
					.code {
						margin: 0 0 var(--spacing-xxl);
					}
				}
					
			`]}render(){return a`
			<div class="code">
				<an-icon class="icon" .template="${Ha}"></an-icon>
				<an-text class="title" role="heading" aria-level="2" center margin="medium">Web Development</an-text>
				<an-text class="text" center>I have a great love for building fast, modern, mobile-ready websites. I have been building website for a decade which shines through in my projects.</an-text>
			</div>
			<div class="design">
				<an-icon class="icon" .template="${Ia}"></an-icon>
				<an-text class="title" role="heading" aria-level="2" center margin="medium">Design</an-text>
				<an-text class="text" center>Design is at the core of every projects I make. I believe the best user experiences are achieved when building beautiful experiences for actual people.</an-text>
			</div>
		`}}customElements.define("an-skills",Ra);class Sa extends aa{static get styles(){return[super.styles,b`
				:host {
					width: 100%;
					display: flex;
					justify-content: center;
				}
			`]}render(){return a`
			<a href="https://github.com/andreasbm" target="_blank" rel="noopener">
				<an-button style="--background: #0D0E34; --foreground: var(--light);">
					<an-icon .template="${ba}"></an-icon>
					<span>Github</span>
				</an-button>
			</a>
			<a href="https://twitter.com/AndreasMehlsen" target="_blank" rel="noopener">
				<an-button style="--background: #03A9F4; --foreground: var(--light);">
					<an-icon .template="${Ea}"></an-icon>
					<span>Twitter</span>
				</an-button>
			</a>
			<a href="https://open.spotify.com/user/114799118" target="_blank" rel="noopener">
				<an-button style="--background: #1DB954; --foreground: var(--light);">
					<an-icon .template="${Fa}"></an-icon>
					<span>Spotify</span>
				</an-button>
			</a>
			<a href="https://www.linkedin.com/in/andreasmehlsen" target="_blank" rel="noopener">
				<an-button style="--background: #0072B1; --foreground: var(--light);">
					<an-icon .template="${Ga}"></an-icon>
					<span>LinkedIn</span>
				</an-button>
			</a>
		`}}customElements.define("an-social-buttons",Sa);var E,ca,Ta,Ua,Va=false;function Wa(){return ca||(ca=Xa()),ca}function Xa(){try{throw new Error}catch($){var e=(""+$.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(e)return da(e[0])}return"/"}function da(e){return(""+e).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}function Ya(){if(Va)return;Va=true;E={};ca=null;Ta=Wa;E.getBundleURL=Ta;Ua=da;E.getBaseURL=Ua}var o,Za,ea,$a,_a,s,ab=false;function bb(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch($){if("MODULE_NOT_FOUND"===$.code)return new F(function($,t){fa(r.slice(0,-1)).then(function(){return require(e)}).then($,t)});throw $}}function fa(r){return Promise.all(r.map(db))}function cb(r,e){ea[r]=e}function db(r){var e;if(Array.isArray(r)&&(e=r[1],r=r[0]),s[r])return s[r];var $=(r.substring(r.lastIndexOf(".")+1,r.length)||r).toLowerCase(),t=ea[$];return t?s[r]=t(Za()+r).then(function(r){return r&&require.register(e,r),r}).catch(function(e){throw delete s[r],e}):void 0}function F(r){this.executor=r,this.promise=null}function t(){if(ab)return;ab=true;o={};Za=(Ya(),E).getBundleURL;ea={};$a=fa;(o=o=bb).load=$a;_a=cb;o.register=_a;s={};F.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},F.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)}}var eb={};eb=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};(t(),o).register("js",eb);async function G({youtubeId:e}){gtag("event","watch_video",{event_category:"cta",event_label:`Watch Youtube video with ID '${e}'`}),(t(),o)([["web-dialog.99bc7fab.js","bUia"],"bUia"]).then(({openDialog:o})=>{o({center:!0,$content:o=>T(a`
				<style>
					#video {
						width: 100%;
						height: 420px;
						outline: none;
					}
					
					#loading {
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						z-index: -1;
					}
				</style>
				<div id="loading">Loading...</div>
				<iframe
					id="video"
					src="https://www.youtube.com/embed/${e}?autoplay=1"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			  `,o)})})}const ga="/assets",fb=`${ga}/projects`,gb="UA-96179028-10";function ha(e,a){return`${fb}/${e}${null!=a?`/${a}`:""}`}function k(e){return ha(e,"cover.jpg")}function l(e){return ha(e,"logo.svg")}function e(e){return`${ga}/media/${e}.jpg`}class hb extends c{static get styles(){return[g,b`
				#info-container {
					padding-top: var(--spacing-xxxxxl);
				}
				
				.card:not(:last-child) {
					margin: 0 0 var(--spacing-xxl);
				}
				
				.media-grid {
					--media-width: 200px;
					display: grid;
					grid-template-columns: repeat(4, var(--media-width));
					grid-gap: var(--spacing-xl);
                    justify-content: center;
				}
				
				#skills-card {
				    background: var(--space-500);
                    color: var(--space-500-contrast);
				}
				
				#music-card {
				}
				
				#books-card .media-grid {
					--media-height: 266px;
				}
				
				@media (max-width: 1000px) {
					#contact-button, #projects-button {
						display: none;
					}
					
					.media-grid {
						--media-size: 100%;
						grid-template-columns: repeat(auto-fill, minmax(var(--media-width), 1fr));
					}
				}
			`]}constructor(){super(),gtag("config",gb,{page_path:location.pathname,page_location:location.href}),window.addEventListener("click",e=>{const a="composedPath"in e?e.composedPath().find(e=>e instanceof HTMLAnchorElement):e.target;a instanceof HTMLAnchorElement&&gtag("event","click_link",{event_category:"cta",event_label:`${a.ariaLabel||a.href}`,transport:"beacon"})}),setTimeout(()=>{this.spawnLaserCat()},1e3)}scrollTo(e){let a=null;switch(e){case"projects":a=this.shadowRoot.querySelector("#projects");}null!=a&&a.scrollIntoView({behavior:"smooth",block:"start"})}spawnLaserCat(){(t(),o)([["laser-cat.791c9a70.js","rq2W"],"rq2W"]).then(()=>{const e=document.createElement("laser-cat");e.setAttribute("sounds",JSON.stringify({meow:["./assets/audio/meow.mp3"],laser:["./assets/audio/laser.mp3"],rainbow:["./assets/audio/rainbow.mp3"]})),document.body.appendChild(e)})}render(){return a`
			<!-- Header -->
			<an-header id="header" img="assets/andreas.png" text="Hi, I'm Andreas. I love building awesome things for the web.">
				<an-buttons slot="footer">
					<an-button id="projects-button" style="--background: #6D73DB; --foreground: var(--light);" @click="${()=>this.scrollTo("projects")}">
						<span>See my projects</span>
						<an-icon .template="${Ca}"></an-icon>
					</an-button>
					<a id="github-button" href="https://github.com/andreasbm" rel="noopener">
						<an-button>
							<an-icon .template="${ba}"></an-icon>
							<span>Go to my Github</span>
						</an-button>
					</a>
					<a href="mailto:andmehlsen@gmail.com" rel="noopener" aria-label="Open email">
						<an-button id="contact-button" style="--background: var(--yellow-500); --foreground: var(--yellow-500-contrast)"  @click="${()=>this.scrollTo("contact")}">
							<span>Contact me</span>
							<an-icon .template="${Da}"></an-icon>
						</an-button>
					</a>
				</an-buttons>
			</an-header>	
			
			<!-- Info -->
			<an-container id="info-container" size="small">
				<an-text center>I'm a web developer from Denmark. I love building new exciting things for the web. When I'm not busy working on various projects, you'll find me playing piano or watching cat videos. </an-text>
			</an-container>
			
			<!-- Projects -->
			<an-container id="projects">
				<an-text role="heading" aria-level="2" center margin="large">My Projects</an-text>
				
				<!-- Ideanote -->
				<an-project
					class="card"
					style="--theme-600: #000000; --theme-600-contrast: var(--light);"
					cover="${k("ideanote")}"
					logo="${l("ideanote")}"
					date="2015 - Present"
					name="Ideanote"
					text="Ideanote is the cloud-based innovation platform that empowers your teams to capture, develop and prioritize more of the right ideas.">
					<an-buttons slot="footer">
						<an-button style="--background: #F4426E; --foreground: var(--light);" @click="${()=>G({youtubeId:"9M7Aua8hc0w"})}">
							<span>Watch a product video</span>
							<an-icon .template="${D}"></an-icon>
						</an-button>
						<a href="https://ideanote.io" rel="noopener">
							<an-button style="--background: #000000; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${i}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Lasercat -->
				<an-project
					class="card"
					style="--theme-600: #8A7225; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${k("lasercat")}"
					logo="${l("lasercat")}"
					date="2019 - Present"
					name="Laser Cat"
					text="Shoot laser at things you want to remove from the internet.">
					<an-buttons slot="footer">
						<a href="https://lasercat.app" rel="noopener">
							<an-button style="--background: #8A7225; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${i}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Web skills -->
				<an-project
					class="card"
					style="--theme-600: #15873D; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${k("webskills")}"
					logo="${l("webskills")}"
					date="2020 - Present"
					name="Web Skills"
					text="A visual overview of useful skills to learn as a web developer.">
					<an-buttons slot="footer">
						<a href="https://andreasbm.github.io/web-skills" rel="noopener">
							<an-button style="--background: #15873D; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${i}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Weightless -->
				<an-project
					class="card"
					style="--theme-600: #354D8D; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${k("weightless")}"
					logo="${l("weightless")}"
					date="2019 - Present"
					name="Weightless"
					text="High quality web components with a small footprint.">
					<an-buttons slot="footer">
						<a href="https://weightless.dev" rel="noopener">
							<an-button style="--background: #354D8D; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${i}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Perfect Playlist -->
				<an-project
					class="card"
					style="--theme-600: #1DB954; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${k("perfectplaylist")}"
					logo="${l("perfectplaylist")}"
					date="2019"
					name="Perfect Playlist"
					text="Create the perfect playlist based on you and your friends favorite music.">
					<an-buttons slot="footer">
						<a href="https://perfectplaylist.app" rel="noopener">
							<an-button style="--background: #1DB954; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${i}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Wordbase -->
				<an-project
					class="card"
					style="--theme-600: #A75C08; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${k("wordbase")}"
					logo="${l("wordbase")}"
					date="2013 - 2016"
					name="Wordbase"
					text="Play chess with your vocabulary in Wordbase, the tactical word game that requires the strategic prowess of chess or checkers, along with a mind like a dictionary, to master.">
					<an-buttons slot="footer">
						<an-button style="--background: #00C9EA; --foreground: var(--light);" @click="${()=>G({youtubeId:"7zxtR0segS8"})}">
							<span>Watch an epic battle</span>
							<an-icon .template="${D}"></an-icon>
						</an-button>
						<a href="https://wordbaseapp.com" rel="noopener">
							<an-button style="--background: #FF8800; --foreground: var(--light);">
								<span>Go to website</span>
								<an-icon .template="${i}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
				<!-- Ruandpiano -->
				<an-project
					class="card"
					style="--theme-600: #151515; --theme-600-contrast: var(--light); --logo-size: 80px;"
					cover="${k("ruandpiano")}"
					logo="${l("ruandpiano")}"
					date="2010 - 2013"
					name="Ruandpiano"
					text="Twins playing four-handed piano.">
					<an-buttons slot="footer">
						<an-button style="--background: var(--light); --foreground: #151515;" @click="${()=>G({youtubeId:"JjydF2u0mnY"})}">
							<span>Watch my favorite recording</span>
							<an-icon .template="${D}"></an-icon>
						</an-button>
						<a href="https://www.youtube.com/user/ruandpiano" rel="noopener">
							<an-button style="--background: #151515; --foreground: var(--light);">
								<span>Go to Youtube</span>
								<an-icon .template="${i}"></an-icon>
							</an-button>
						</a>
					</an-buttons>
				</an-project>
				
			</an-container>
			<an-container>
			
				<!-- Skills -->
				<an-text role="heading" aria-level="2" center margin="large">What I do</an-text>
				<an-card class="card" id="skills-card">
					<an-skills></an-skills>
				</an-card>
				
				<!-- Music -->
				<an-card class="card" id="music-card">
					<an-section-header center headline="My favorite music" text="I listen to music every day - try to listen to some of my favorite tunes. I hope you like them as much as I do!"></an-section-header>
					<div class="media-grid">
						<a aria-label="Prep link" href="https://open.spotify.com/playlist/2CTXQsLLL6UiquApb3rf5F?si=gqYvx2McR1OiFvA4Wp4N-w" rel="noopener">
							<an-media src="${e("prep")}"></an-media>
						</a>
						<a aria-label="Deluxe link" href="https://open.spotify.com/playlist/3lrUwE6yLty0NxTR5RDH9b?si=gXX5nWtqQfCGig99zpZv1A" rel="noopener">
							<an-media src="${e("deluxe")}"></an-media>
						</a>
						<a aria-label="Bastille link" href="https://open.spotify.com/playlist/4SW2xyUZlNev7RQdq800Ty?si=uuGqMZKcTcqNLxzScWgTbg" rel="noopener">
							<an-media src="${e("bastille")}"></an-media>
						</a>
						<a aria-label="Two Door Cinema Club link" href="https://open.spotify.com/playlist/6Ig3Hmv4EZmWQcwIsH6bP3?si=ErlfCQj_TF2we5HDEPZyfQ" rel="noopener">
							<an-media src="${e("two-door-cinema-club")}"></an-media>
						</a>
					</div>
				</an-card>
				
				<!-- Books -->
				<an-card class="card" id="books-card">
					<an-section-header center headline="My favorite books" text="I find reading books to be a great way to relax. If you have time, check out some of my favorites."></an-section-header>
					<div class="media-grid">
						<a aria-label="Refactoring UI link" href="https://refactoringui.com/" rel="noopener">
							<an-media src="${e("refactoring-ui")}" .iconTemplate="${r}"></an-media>
						</a>
						<a aria-label="Badass link" href="https://www.amazon.com/Badass-Making-Awesome-Kathy-Sierra/dp/1491919019" rel="noopener">
							<an-media src="${e("badass")}" .iconTemplate="${r}"></an-media>
						</a>
						<a aria-label="The Ego Tunnel link" href="https://www.amazon.com/Ego-Tunnel-Science-Mind-Myth/dp/0465020690" rel="noopener">
							<an-media src="${e("the-ego-tunnel")}" .iconTemplate="${r}"></an-media>
						</a>
						<a aria-label="Two Door Cinema Club link" href="https://samharris.org/books/waking-up" rel="noopener">
							<an-media src="${e("waking-up")}" .iconTemplate="${r}"></an-media>
						</a>
					</div>
				</an-card>
				
				<!-- Podcasts -->
				<an-card class="card" id="podcast-card">
					<an-section-header center headline="My favorite podcasts" text="Every day when I bike through Copenhagen I enjoy listening to podcasts. Here are some of my favorites!"></an-section-header>
					<div class="media-grid">
						<a aria-label="Making Sense link" href="https://open.spotify.com/show/5rgumWEx4FsqIY8e1wJNAk?si=w2cyVtAiTHmaH8mI-O1lSg" rel="noopener">
							<an-media src="${e("making-sense")}"></an-media>
						</a>
						<a aria-label="Reply All link" href="https://open.spotify.com/show/7gozmLqbcbr6PScMjc0Zl4?si=BEO9nQ8aQCaHzzxNlNqNQQ" rel="noopener">
							<an-media src="${e("reply-all")}"></an-media>
						</a>
						<a aria-label="Invisible link" href="https://open.spotify.com/show/2VRS1IJCTn2Nlkg33ZVfkM?si=GwXze2vySPqdmt5AaBBNJg" rel="noopener">
							<an-media src="${e("invisible")}"></an-media>
						</a>
						<a aria-label="Syntax link" href="https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby?si=bWrUaPmBR1Kio2VIXF3prA" rel="noopener">
							<an-media src="${e("syntax")}"></an-media>
						</a>
					</div>
				</an-card>
				
				<!-- Social -->
				<an-card class="card">
					<an-section-header center headline="Say hi" text="If you want to learn more about what I'm doing, find me on my favorite platforms."></an-section-header>
					<an-social-buttons></an-social-buttons>
				</an-card>
			
			</an-container>
			
			<!-- Footer -->
			<an-footer></an-footer>
		`}}customElements.define("an-app",hb);return{"A2T1":{},"z1Am":(t(),o)};});