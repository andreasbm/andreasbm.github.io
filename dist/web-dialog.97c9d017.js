parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bUia":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return i(t)||o(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function u(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?c(e):n}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function d(t){var e="function"==typeof Map?new Map:void 0;return(d=function(t){if(null===t||!p(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,b(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),v(n,t)})(t)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(m){return!1}}function h(t,e,n){return(h=f()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&v(i,n.prototype),i}).apply(null,arguments)}function p(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t){return t.hasAttribute("hidden")||t.hasAttribute("aria-hidden")&&"false"!==t.getAttribute("aria-hidden")||"none"===t.style.display||"0"===t.style.opacity||"hidden"===t.style.visibility||"collapse"===t.style.visibility}function m(t){return"-1"!==t.getAttribute("tabindex")&&!y(t)&&!function(t){return t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&"false"!==t.getAttribute("aria-disabled")}(t)&&(t.hasAttribute("tabindex")||(t instanceof HTMLAnchorElement||t instanceof HTMLAreaElement)&&t.hasAttribute("href")||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLIFrameElement)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDialogCount=E,exports.openDialog=L,exports.setDialogCount=x,exports.traverseActiveElements=A,exports.WebDialog=void 0;var g=new Map,k=document.createElement("template");k.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';var w=function(t){function n(){var t;r(this,n),(t=u(this,b(n).call(this))).debounceId=Math.random().toString(),t._focused=!1;var e=t.attachShadow({mode:"open"});return e.appendChild(k.content.cloneNode(!0)),t.$backup=e.querySelector("#backup"),t.$start=e.querySelector("#start"),t.$end=e.querySelector("#end"),t.focusLastElement=t.focusLastElement.bind(c(t)),t.focusFirstElement=t.focusFirstElement.bind(c(t)),t.onFocusIn=t.onFocusIn.bind(c(t)),t.onFocusOut=t.onFocusOut.bind(c(t)),t}return l(n,d(HTMLElement)),s(n,[{key:"connectedCallback",value:function(){this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}},{key:"disconnectedCallback",value:function(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}},{key:"attributeChangedCallback",value:function(){this.render()}},{key:"focusFirstElement",value:function(){this.trapFocus()}},{key:"focusLastElement",value:function(){this.trapFocus(!0)}},{key:"getFocusableElements",value:function(){return function t(n,o,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=[];if(a>=r)return s;for(var u=function(e){var n=e.assignedNodes().filter(function(t){return 1===t.nodeType});return n.length>0?t(n[0].parentElement,o,i,r,a+1):[]},c=0,l=Array.from(n.children||[]);c<l.length;c++){var d=l[c];o(d)||(i(d)&&s.push(d),null!=d.shadowRoot?s.push.apply(s,e(t(d.shadowRoot,o,i,r,a+1))):"SLOT"===d.tagName?s.push.apply(s,e(u(d))):s.push.apply(s,e(t(d,o,i,r,a+1))))}return s}(this,y,m)}},{key:"trapFocus",value:function(t){if(!this.inactive){var e=this.getFocusableElements();e.length>0?(t?e[e.length-1].focus():e[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}}},{key:"onFocusIn",value:function(){this.updateFocused(!0)}},{key:"onFocusOut",value:function(){this.updateFocused(!1)}},{key:"updateFocused",value:function(t){var e=this;!function(t,e,n){var o=g.get(n);null!=o&&window.clearTimeout(o),g.set(n,window.setTimeout(function(){t(),g.delete(n)},0))}(function(){e.focused!==t&&(e._focused=t,e.render())},0,this.debounceId)}},{key:"render",value:function(){this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused")}},{key:"inactive",get:function(){return this.hasAttribute("inactive")},set:function(t){t?this.setAttribute("inactive",""):this.removeAttribute("inactive")}},{key:"focused",get:function(){return this._focused}}],[{key:"observedAttributes",get:function(){return["inactive"]}}]),n}();function E(t){return Number(t.getAttribute("data-dialog-count"))||0}function x(t,e){t.setAttribute("data-dialog-count",e.toString())}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.activeElement;return null!=t&&null!=t.shadowRoot&&null!=t.shadowRoot.activeElement?A(t.shadowRoot.activeElement):t}window.customElements.define("focus-trap",w);var C=document.createElement("template");C.innerHTML='\n  <style>*{box-sizing:border-box}:host{padding:var(--dialog-container-padding,5vw 24px);z-index:var(--dialog-z-index,12345678);outline:none}#backdrop,:host{position:fixed;top:0;left:0;bottom:0;right:0}:host,:host([center]) #dialog{overflow-x:var(--dialog-overflow-x,hidden);overflow-y:var(--dialog-overflow-y,auto);overscroll-behavior:contain;-webkit-overflow-scrolling:touch}:host([center]){display:flex;align-items:center;justify-content:center;overflow:hidden}:host([center]) #dialog{max-height:var(--dialog-max-height,100%)}:host(:not(:defined)),:host(:not([open])){display:none}#backdrop{background:var(--dialog-backdrop-bg,rgba(0,0,0,.6));animation:fadeIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);z-index:-1}#dialog{animation:scaleIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);border-radius:var(--dialog-border-radius,12px);box-shadow:var(--dialog-box-shadow,0 2px 10px -5px rgba(0,0,0,.6));max-width:var(--dialog-max-width,700px);width:var(--dialog-width,100%);padding:var(--dialog-padding,24px);max-height:var(--dialog-max-height,unset);height:var(--dialog-height,auto);color:var(--dialog-color,currentColor);background:var(--dialog-bg,#fff);z-index:1;position:relative;display:flex;flex-direction:column;margin:0 auto;border:none}::slotted(article),article{flex-grow:1;overflow-y:auto;-webkit-overflow-scrolling:touch}::slotted(footer),::slotted(header),footer,header{flex-shrink:0}@keyframes scaleIn{0%{transform:scale(.9) translateY(30px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}</style>\n  <div id="backdrop" part="backdrop"></div>\n  <focus-trap id="dialog" part="dialog">\n    <slot></slot>\n  </focus-trap>\n';var $=function(t){function e(){var t;r(this,e),(t=u(this,b(e).call(this))).$scrollContainer=document.documentElement,t.$previousActiveElement=null;var n=t.attachShadow({mode:"open"});return n.appendChild(C.content.cloneNode(!0)),t.$dialog=n.querySelector("#dialog"),t.$backdrop=n.querySelector("#backdrop"),t.onBackdropClick=t.onBackdropClick.bind(c(t)),t.onKeyDown=t.onKeyDown.bind(c(t)),t.setAttribute("aria-modal","true"),t.$dialog.setAttribute("role","alertdialog"),t}return l(e,d(HTMLElement)),s(e,[{key:"connectedCallback",value:function(){this.$backdrop.addEventListener("click",this.onBackdropClick)}},{key:"disconnectedCallback",value:function(){this.$backdrop.removeEventListener("click",this.onBackdropClick),this.open&&this.didClose()}},{key:"show",value:function(){this.open=!0}},{key:"close",value:function(t){this.result=t,this.open=!1}},{key:"onBackdropClick",value:function(){this.assertClosing()&&this.close()}},{key:"onKeyDown",value:function(t){switch(t.code){case"Escape":this.assertClosing()&&(this.close(),t.stopImmediatePropagation())}}},{key:"assertClosing",value:function(){return this.dispatchEvent(new CustomEvent("closing",{cancelable:!0}))}},{key:"didOpen",value:function(){var t=this;this.$previousActiveElement=A(document.activeElement),requestAnimationFrame(function(){t.$dialog.focusFirstElement()}),this.tabIndex=0,this.$scrollContainer.style.overflow="hidden",this.addEventListener("keydown",this.onKeyDown,{capture:!0,passive:!0}),x(this.$scrollContainer,E(this.$scrollContainer)+1),this.dispatchEvent(new CustomEvent("open"))}},{key:"didClose",value:function(){this.removeEventListener("keydown",this.onKeyDown,{capture:!0}),x(this.$scrollContainer,Math.max(0,E(this.$scrollContainer)-1)),E(this.$scrollContainer)<=0&&(this.$scrollContainer.style.overflow=""),this.tabIndex=-1,null!=this.$previousActiveElement&&(this.$previousActiveElement.focus(),this.$previousActiveElement=null),this.dispatchEvent(new CustomEvent("close",{detail:this.result}))}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"open":this.open?this.didOpen():this.didClose()}}},{key:"open",get:function(){return this.hasAttribute("open")},set:function(t){t?this.setAttribute("open",""):this.removeAttribute("open")}},{key:"center",get:function(){return this.hasAttribute("center")},set:function(t){t?this.setAttribute("center",""):this.removeAttribute("center")}}],[{key:"observedAttributes",get:function(){return["open","center"]}}]),e}();function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.$content,n=t.$container,o=void 0===n?document.body:n,i=t.center,r=void 0!==i&&i,a=t.initialize,s=(void 0===a?function(){return new $}:a)();null!=r&&(s.center=r),null!=e&&("function"==typeof e?e(s):s.appendChild(e));var u=new Promise(function(t){s.addEventListener("close",function(e){s.remove(),t(e.detail)},{once:!0})});return o.appendChild(s),s.show(),{$dialog:s,resolver:u}}exports.WebDialog=$,customElements.define("web-dialog",$);
},{}]},{},["bUia"], null)
//# sourceMappingURL=/web-dialog.97c9d017.js.map