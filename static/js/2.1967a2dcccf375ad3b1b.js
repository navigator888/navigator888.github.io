webpackJsonp([2],{"7V12":function(t,e){},RcQE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),r=n.n(i),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hot_mine_view"},[e("div",{staticClass:"view_header"},[e("div",{staticClass:"header_icon"}),this._v(" "),e("div",{staticClass:"header_title"},[this._t("title")],2)]),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var a=n("VU/8")(null,o,!1,function(t){n("7V12")},"data-v-68947aec",null).exports,s=n("TQvf"),c=n.n(s),l=n("iKWp"),u=new web3.eth.Contract(l.a.HOGabi,l.a.HOG),f={components:{HotMineView:a},data:function(){return this.$Config},computed:{formatMyURL:function(){var t=window.location.href;return this.getURL(t,this.address)}},mounted:function(){var t=this;setTimeout(function(){t.$getAddress(),t.getUserInfo(),t.getTotalDeposit()},1e3)},methods:{onCopy:function(){var t=this,e=new c.a("#invite_button");e.on("success",function(){t.$message.success("复制成功"),e.destroy()}),e.on("error",function(){t.$message.error("复制失败"),e.destroy()})},getURL:function(t,e){return"https://"+(t=(t=t.replace("http://","")).replace("https://","")).substring(0,t.indexOf("/"))+"/#/index?address="+e},getUserInfo:function(){var t=this;u.methods.userInfo(this.address).call({from:this.address}).then(function(e){t.userInfo=e,console.log("用户信息："+r()(e))})},getTotalDeposit:function(){var t=this;u.methods.getTotalDepositByAddress(this.address).call({from:this.address}).then(function(e){t.deposit=e,console.log("持币"+r()(e))})}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mine_view"},[n("hot-mine-view",{staticClass:"mine_view_item"},[n("template",{slot:"title"},[t._v("我的邀请连接")]),t._v(" "),n("div",{staticClass:"mine_link",attrs:{id:"invite_url"}},[t._v(t._s(t.formatMyURL))]),t._v(" "),n("div",{staticClass:"button button_fill",attrs:{id:"invite_button","data-clipboard-target":"#invite_url"},on:{click:t.onCopy}},[t._v("\n      复制\n    ")])],2),t._v(" "),n("hot-mine-view",{staticClass:"mine_view_item"},[n("template",{slot:"title"},[t._v("我的邀请奖励")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col_left"},[t._v("累计邀请数量：")]),t._v(" "),n("div",{staticClass:"col_right"},[t._v(t._s(t.userInfo[1]))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col_left"},[t._v("伞下持币数量：")]),t._v(" "),n("div",{staticClass:"col_right"},[t._v(t._s(t.deposit))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col_left"},[t._v("一级3%HOT：")]),t._v(" "),n("div",{staticClass:"col_right"},[t._v(t._s(t.userInfo[2]))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col_left"},[t._v("二级2%HOT：")]),t._v(" "),n("div",{staticClass:"col_right"},[t._v(t._s(t.userInfo[3]))])])],2),t._v(" "),n("hot-mine-view",{staticClass:"mine_view_item"},[n("template",{slot:"title"},[t._v("我的燃烧奖励")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col_left"},[t._v("一级3%HOT：")]),t._v(" "),n("div",{staticClass:"col_right"},[t._v(t._s(t.userInfo[4]))])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col_left"},[t._v("二级2%HOT：")]),t._v(" "),n("div",{staticClass:"col_right"},[t._v(t._s(t.userInfo[5]))])])],2)],1)},staticRenderFns:[]};var h=n("VU/8")(f,d,!1,function(t){n("xc07")},"data-v-2b6d32b4",null);e.default=h.exports},TQvf:function(t,e,n){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
var i;i=function(){return function(){var t={134:function(t,e,n){"use strict";n.d(e,{default:function(){return g}});var i=n(279),r=n.n(i),o=n(370),a=n.n(o),s=n(817),c=n.n(s);function l(t){"@babel/helpers - typeof";return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}var e,n,i;return e=t,(n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var e=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=c()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=c()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==l(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&u(e.prototype,n),i&&u(e,i),t}();function d(t){"@babel/helpers - typeof";return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(s,r());var e,n,i,o=p(s);function s(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return e=s,i=[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}],(n=[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new f({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){var e=m("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&h(e.prototype,n),i&&h(e,i),s}()},828:function(t){var e=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,n){for(;t&&t.nodeType!==e;){if("function"==typeof t.matches&&t.matches(n))return t;t=t.parentNode}}},438:function(t,e,n){var i=n(828);function r(t,e,n,r,o){var a=function(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&r.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,o),{destroy:function(){t.removeEventListener(n,a,o)}}}t.exports=function(t,e,n,i,o){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return r(t,e,n,i,o)}))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var i=n(879),r=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(i.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(i.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),r=document.createRange();r.selectNodeContents(t),i.removeAllRanges(),i.addRange(r),e=i.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function r(){i.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,r=n.length;i<r;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],r=[];if(i&&e)for(var o=0,a=i.length;o<a;o++)i[o].fn!==e&&i[o].fn._!==e&&r.push(i[o]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(134)}().default},t.exports=i()},xc07:function(t,e){}});
//# sourceMappingURL=2.1967a2dcccf375ad3b1b.js.map