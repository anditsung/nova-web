(self.webpackChunk=self.webpackChunk||[]).push([[260],{9533:(t,e,n)=>{"use strict";var r=n(538),o=n(9665),i=n.n(o),s=n(7757),a=n.n(s),c=n(8345);const u={name:"Home"};var l=n(1900);const f=[{name:"home",path:"/",component:(0,l.Z)(u,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex h-80"},[n("div",{staticClass:"m-auto"},[n("h3",[t._v("title")])])])}],!1,null,null,null).exports}];function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){v(i,r,o,s,a,"next",t)}function a(t){v(i,r,o,s,a,"throw",t)}s(void 0)}))}}r.Z.use(c.Z);var w=function(){var t=new c.Z({scrollBehavior:C,mode:"history",routes:f});return t.beforeEach(g),t.afterEach(_),t}();const y=w;function g(t,e,n){return b.apply(this,arguments)}function b(){return(b=m(a().mark((function t(e,n,r){var o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(w.getMatchedComponents(h({},e)));case 2:if(0!==(o=t.sent).length){t.next=5;break}return t.abrupt("return",r());case 5:!1!==o[o.length-1].loading&&w.app.$nextTick((function(){return w.app.$loading.start()})),r();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t,e,n){return x.apply(this,arguments)}function x(){return(x=m(a().mark((function t(e,n,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.app.$nextTick();case 2:w.app.$loading.finish();case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return Promise.all(t.map((function(t){return"function"==typeof t?t():t})))}function C(t,e,n){return new Promise((function(r,o){setTimeout((function(){return n?r(n):e.name!==t.name||e.params.resourceName!==t.params.resourceName?r({x:0,y:0}):r({})}),250)}))}const O={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"3px",color:"var(--primary)",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval((function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()}),100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout((function(){t.show=!1,t.$nextTick((function(){setTimeout((function(){t.percent=0}),200)}))}),500),this},fail:function(){return this.canSuccess=!1,this}}};n(234);const $=(0,l.Z)(O,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,opacity:t.show?1:0,"background-color":t.canSuccess?t.color:t.failedColor}})}),[],!1,null,"0596bf36",null).exports;var Z=n(8492);function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}r.Z.use(Z.ZP),r.Z.use(i(),{router:y,position:"bottom-right",duration:6e3});var P=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bus=new r.Z,this.config=e}var e,n,o;return e=t,(n=[{key:"liftOff",value:function(){var t=this;this.app=new r.Z({el:"#novaweb",router:y,components:{Loading:$},mounted:function(){var e=this;this.$loading=this.$refs.loading,t.$on("error",(function(t){e.$toasted.show(t,{type:"error"})})),t.$on("token-expired",(function(){e.$toasted.show(e.__("Sorry, your session has expired."),{action:{onClick:function(){return location.reload()},text:e.__("Reload")},duration:null,type:"error"})}))}})}},{key:"request",value:function(t){return void 0!==t?axios(t):axios}},{key:"formatNumber",value:function(t,e){var n=numbro(t);return void 0!==e?n.format(e):n.format()}},{key:"$on",value:function(){var t;(t=this.bus).$on.apply(t,arguments)}},{key:"$once",value:function(){var t;(t=this.bus).$once.apply(t,arguments)}},{key:"$off",value:function(){var t;(t=this.bus).$off.apply(t,arguments)}},{key:"$emit",value:function(){var t;(t=this.bus).$emit.apply(t,arguments)}},{key:"error",value:function(t){r.Z.toasted.show(t,{type:"error"})}},{key:"success",value:function(t){r.Z.toasted.show(t,{type:"success"})}}])&&E(e.prototype,n),o&&E(e,o),t}();const j={};const S=(0,l.Z)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("label",{staticClass:"inline-block text-80 pt-2 leading-tight"},[t._t("default")],2)}),[],!1,null,null,null).exports;const M={props:["label","options"]};const T=(0,l.Z)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full p-2"},[n("label-field",[t._v(t._s(t.label))]),t._v(" "),n("select",{staticClass:"mt-2 w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-normal"},[n("option",{attrs:{value:"",disable:""}},[t._v("Select an item")]),t._v(" "),t._l(t.options,(function(e){return n("option",{domProps:{value:e.value}},[t._v(t._s(e.name))])}))],2)],1)}),[],!1,null,null,null).exports;r.Z.component("label-field",S),r.Z.component("select-field",T);const I={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}},active:{type:Boolean,default:!1}},data:function(){return{open:!1}},created:function(){document.addEventListener("keydown",this.closeOnEscape)},destroyed:function(){document.removeEventListener("keydown",this.closeOnEscape)},methods:{closeOnEscape:function(t){this.open&&27===t.keyCode&&(this.open=!1)}},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"},activeIconColor:function(){return this.active?"var(--white)":"var(--90)"}}};const N=(0,l.Z)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{staticClass:"flex items-center",on:{click:function(e){t.open=!t.open}}},[t._t("trigger"),t._v(" "),n("svg",{staticClass:"ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"6",viewBox:"0 0 10 6"}},[n("path",{attrs:{fill:t.activeIconColor,d:"M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"}})])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),n("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 rounded-md shadow-lg",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[n("div",{staticClass:"rounded-md border border-60 ring-opacity-5",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports;const z=(0,l.Z)({},(function(t,e){return(0,e._c)("transition",{attrs:{name:"fade",mode:"out-in"}},[e._t("default")],2)}),[],!0,null,null,null).exports;r.Z.component("jet-dropdown",N),r.Z.component("fade-transition",z),r.Z.config.productionTip=!1,function(){this.CreateNovaWeb=function(t){return new P(t)}}.call(window)},3965:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var r=n(3645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".progress[data-v-0596bf36]{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""]);const i=o},8916:()=>{},234:(t,e,n)=>{var r=n(3965);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5346).Z)("3e38b933",r,!0,{})}},t=>{"use strict";var e=e=>t(t.s=e);t.O(0,[143,660],(()=>(e(9533),e(8916))));t.O()}]);