(function(e){function t(t){for(var r,o,c=t[0],i=t[1],d=t[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4f3ed595":"a7edb8ad","chunk-18d46143":"2871ffa9","chunk-2d0d3a92":"0ae7eb38","chunk-2d210fbc":"3f93f4fd","chunk-7dd3900f":"62f1e611"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-18d46143":1,"chunk-7dd3900f":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4f3ed595":"31d6cfe0","chunk-18d46143":"bd3f5048","chunk-2d0d3a92":"31d6cfe0","chunk-2d210fbc":"31d6cfe0","chunk-7dd3900f":"afe4ee26"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var d=u[c],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){d=f[c],s=d.getAttribute("data-href");if(s===r||s===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],l.parentNode.removeChild(l),n(u)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var f=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var f=0;f<d.length;f++)t(d[f]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},3:function(e,t){},"3fb7":function(e,t,n){"use strict";n("e3a2")},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("96cf"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"bg"}),n("hot-header"),n("router-view")],1)},u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hot_header_module"},[n("div",{staticClass:"hot_header"},[n("div",{staticClass:"hot_header_left logo",on:{click:function(t){return e.toPage("homepage")}}}),n("div",{staticClass:"hot_header_right hot_header_row"},[n("div",{class:["hot_header_col","lp"===e.currRouteName?"is_active":""],on:{click:function(t){return e.toPage("lp")}}},[e._v("LP区")]),n("div",{class:["hot_header_col","pledge"===e.currRouteName?"is_active":""],on:{click:function(t){return e.toPage("pledge")}}},[e._v("质押池")]),n("div",{class:["hot_header_col","mine"===e.currRouteName?"is_active":""],on:{click:function(t){return e.toPage("mine")}}},[e._v("我的")])])]),n("div",{staticClass:"hot_header"},[n("div",{staticClass:"hot_header_left"}),n("div",{staticClass:"hot_header_right hot_header_row"},[n("div",{staticClass:"hot_header_col address",on:{click:function(t){return e.toPage("mine")}}},[n("span",{staticClass:"not_enabled"},[e._v("未激活")]),e._v(" "+e._s(e._f("addressFormat")(e.address))+" ")]),n("div",{staticClass:"hot_header_col tag"},[e._v("EN")])])])])},i=[],d=(n("b0c0"),n("99af"),{data:function(){return this.$Config},mounted:function(){this.$getAddress()},computed:{currRouteName:function(){return this.$route.name}},filters:{addressFormat:function(e){if(!e)return"";var t=e;return t.length>8?"".concat(t.substr(0,4),"...").concat(t.substr(t.length-4,4)):e}},methods:{toPage:function(e){this.$router.push({name:e})}}}),s=d,f=(n("3fb7"),n("2877")),l=Object(f["a"])(s,c,i,!1,null,"57881ea8",null),h=l.exports,p={name:"App",components:{HotHeader:h},data:function(){return{wallet:{address:"0xB7357633A0255Bd0146285c6Bb4F63Ef66698654"}}},mounted:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{}},m=p,v=(n("5c0b"),n("dc3f"),Object(f["a"])(m,a,u,!1,null,null,null)),b=v.exports,g=n("5c96"),_=n.n(g),w=(n("0fae"),n("901e")),k=n.n(w),y={address:"",totalDeposit:{},userInfo:[],deposit:""},P=(n("7e7d"),n("99e5")),C=n.n(P),x=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["default"].use(x["a"]);var O=new x["a"]({routes:[{path:"/",name:"homepage",component:function(){return Promise.all([n.e("chunk-4f3ed595"),n.e("chunk-7dd3900f")]).then(n.bind(null,"f572"))}},{path:"/index",name:"homepage",component:function(){return Promise.all([n.e("chunk-4f3ed595"),n.e("chunk-7dd3900f")]).then(n.bind(null,"f572"))}},{path:"/lp",name:"lp",component:function(){return Promise.all([n.e("chunk-4f3ed595"),n.e("chunk-2d210fbc")]).then(n.bind(null,"b9e4"))}},{path:"/pledge",name:"pledge",component:function(){return Promise.all([n.e("chunk-4f3ed595"),n.e("chunk-2d0d3a92")]).then(n.bind(null,"5e5a"))}},{path:"/mine",name:"mine",component:function(){return Promise.all([n.e("chunk-4f3ed595"),n.e("chunk-18d46143")]).then(n.bind(null,"b5b1"))}}]}),j=O;o["default"].prototype.BigNumber=k.a,o["default"].prototype.$Config=y,o["default"].prototype.Web3=C.a;var E=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=12;break}return window.web3=new C.a(ethereum),e.prev=2,e.next=5,ethereum.enable();case 5:this.web3Provider=ethereum,e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](2);case 10:e.next=13;break;case 12:window.web3?(this.web3Provider=web3.currentProvider,window.web3=new C.a(web3.currentProvider)):console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");case 13:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(){return e.apply(this,arguments)}}();function N(){var e=this;web3.eth.getAccounts().then((function(t){return e.address=t[0]}))}E(),o["default"].prototype.$I3=E,o["default"].filter("multipUnit",(function(e){return e=k()(e),e.multipliedBy(k()(10).pow(18))})),o["default"].prototype.$getAddress=N,o["default"].use(_.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(b)},router:j}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6:function(e,t){},7:function(e,t){},"7e7d":function(e,t,n){},8:function(e,t){},9:function(e,t){},"9c0c":function(e,t,n){},dc3f:function(e,t,n){"use strict";n("f912")},e3a2:function(e,t,n){},f912:function(e,t,n){}});
//# sourceMappingURL=app.c21d4602.js.map