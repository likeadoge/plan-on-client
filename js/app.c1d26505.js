(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"df3e5aa3"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"b3967837"}[e]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"17be":function(e,t,n){},2820:function(e,t,n){"use strict";var a=n("b6ba"),o=n.n(a);o.a},"33c3":function(e,t,n){"use strict";var a=n("f419"),o=n.n(a);o.a},"3e3e":function(e,t,n){},"3e48":function(e,t,n){"use strict";var a=n("3e3e"),o=n.n(a);o.a},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="4678"},"4e3b":function(e,t,n){"use strict";var a=n("17be"),o=n.n(a);o.a},5217:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("5530"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a026")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{attrs:{id:"components-layout-demo-top-side"}},[n("a-layout-header",{staticClass:"header"},[n("div",{staticClass:"logo"}),n("a-menu",{style:{lineHeight:"64px"},attrs:{theme:"dark",mode:"horizontal","default-selected-keys":["2"]}},[n("a-menu-item",{key:"1"},[e._v("nav 1")]),n("a-menu-item",{key:"2"},[e._v("nav 2")]),n("a-menu-item",{key:"3"},[e._v("nav 3")])],1)],1),n("a-layout-content",[n("div",{staticStyle:{height:"100%",overflow:"auto"}},[n("router-view")],1)])],1)},i=[],s=(n("034f"),n("2877")),c={},l=Object(s["a"])(c,r,i,!1,null,null,null),u=l.exports,f=n("f23d"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.type.indexOf("icon")<0?"AIcon":"CustomIcon",{tag:"component",attrs:{type:e.type}})},b=[],p=n("0c63"),m=p["a"].createFromIconfontCN({scriptUrl:"/icon.js"}),h={props:["type"],components:{AntIcon:p["a"],CustomIcon:m}},j=h,v=Object(s["a"])(j,d,b,!1,null,null,null),g=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-button",{attrs:{disabled:e.disabled,ghost:e.ghost,htmlType:e.htmlType,icon:e.icon,loading:e.loading,shape:e.shape,size:e.size,block:e.block,type:e.type},on:{click:function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];return e.click.apply(void 0,t)}}},[e._t("default")],2)},k=[],x=(n("99af"),n("d3b7"),{props:["disabled","ghost","htmlType","icon","shape","size","type","block"],data:function(){return{loading:!1}},methods:{click:function(){var e=this;this.loading=!0;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];this.$emit.apply(this,["click",function(t){t&&t instanceof Promise?t.finally((function(){e.loading=!1})):e.loading=!1}].concat(n))}}}),_=x,O=Object(s["a"])(_,y,k,!1,null,null,null),w=O.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["flex-col"].concat(e.fill?["flex-col_fill"]:[])},[e._t("default")],2)},T=[],L={props:["fill"]},z=L,C=(n("33c3"),Object(s["a"])(z,P,T,!1,null,"251d927e",null)),I=C.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-row"},[e._t("default")],2)},$=[],E={},A=E,D=(n("3e48"),Object(s["a"])(A,S,$,!1,null,"f8ca8d48",null)),U=D.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-fill"},[e._t("default")],2)},M=[],N={},B=N,G=(n("6f81"),Object(s["a"])(B,F,M,!1,null,"32f0d474",null)),R=G.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-fixed"},[e._t("default")],2)},q=[],V={},H=V,J=(n("b541"),Object(s["a"])(H,W,q,!1,null,"6777f268",null)),K=J.exports,Q={install:function(e){e.component("FlexCol",I),e.component("FlexRow",U),e.component("FlexFill",R),e.component("FlexFixed",K)}},X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"cntr",staticClass:"fl",style:{gridTemplateColumns:"repeat("+e.n+",1fr)",gridGap:(e.rowGap||"0")+"px "+(e.colGap||"0")+"px",margin:(e.rowGap||"0")+"px "+(e.colGap||"0")+"px"}},[e._t("default")],2)},Y=[],Z={props:["min","max","rowGap","colGap"],data:function(){return{cnWidth:0}},computed:{_min:function(){return this.min||200},_max:function(){return this.max||1e8},n:function(){if(this.cnWidth<this._min)return 1;var e=Math.floor(this.cnWidth/this._min),t=Math.ceil(this.cnWidth/this._max);return t>=e?t:e}},mounted:function(){var e=this;this.$nextTick().then((function(){var t=new ResizeObserver((function(){e.cnWidth=e.$refs.cntr.clientWidth}));t.observe(e.$refs.cntr)}))}},ee=Z,te=(n("875b"),Object(s["a"])(ee,X,Y,!1,null,"d6cd01ec",null)),ne=te.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.cls},[e._t("default")],2)},oe=[],re=(n("a9e3"),{props:{padding:Boolean,hover:Boolean,level:[Boolean,Number]},computed:{cls:function(){var e=["styled-card"];return this.padding&&e.push("padding"),this.level&&e.push("level"),this.hover&&e.push("hover"),e}}}),ie=re,se=(n("58a8c"),Object(s["a"])(ie,ae,oe,!1,null,"cc8ce158",null)),ce=se.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-select",{attrs:{disabled:e.disabled,labelInValue:"",placeholder:"请选择……"},model:{value:e.target,callback:function(t){e.target=t},expression:"target"}},e._l(e.list,(function(t){return n("a-select-option",{key:t[e.id],attrs:{value:t[e.id]}},[e._v(e._s(t[e.label]))])})),1)},ue=[],fe=n("ade3"),de={props:{list:{default:function(){return[]}},disabled:{default:function(){return!1}},id:String,label:String,value:Object},computed:{target:{get:function(){return this.value?{label:this.value[this.label],key:this.value[this.id]}:void 0},set:function(e){var t;e?this.$emit("update:value",(t={},Object(fe["a"])(t,this.label,e.label),Object(fe["a"])(t,this.id,e.key),t)):this.$emit("change",null)}}}},be=de,pe=Object(s["a"])(be,le,ue,!1,null,null,null),me=pe.exports,he={install:function(e){e.component("IconFont",g),e.component("AsyncButton",w),e.component("ItemsFlow",ne),e.component("StyledCard",ce),e.component("SimpleSelector",me),e.use(Q)}},je=(n("202f"),n("2f62"));o["a"].use(je["a"]);var ve={token:"",username:"",avatar:"",org:"",shouldClearToken:!0},ge={updateUserInfo:function(e,t){var n=t.token,a=t.username,o=t.avatar,r=t.org;e.token=n,e.username=a,e.avatar=o,e.org=r},removeUserInfo:function(e){e.token="",e.username="",e.avatar="",e.org=""},shouldClearToken:function(e,t){e.shouldClearToken=t}},ye={isLogin:function(e){return!!e.token},getUserInfo:function(e){var t=e.username,n=e.avatar,a=e.org;return{username:t,avatar:n,org:a}},getToken:function(e){var t=e.token;return t}},ke={namespaced:!0,state:ve,mutations:ge,getters:ye},xe=new je["a"].Store({modules:{userInfo:ke}});window.ss=xe;var _e=xe,Oe=n("a18c"),we=(n("ccf3"),n("c16e")),Pe=n.n(we),Te=n("c1df"),Le=n.n(Te);Le.a.locale("zh-cn"),window.vue=o["a"],o["a"].use(f["a"]),o["a"].use(he),o["a"].use(Pe.a,{namespace:"vuejs__",name:"ls",storage:"local"}),o["a"].config.productionTip=!1,new o["a"]({el:"#app",components:{App:u},router:Oe["a"],store:_e,template:"<App/>",methods:Object(a["a"])({},Object(je["c"])("userInfo",["updateUserInfo","shouldClearToken"])),mounted:function(){}})},"58a8c":function(e,t,n){"use strict";var a=n("6771"),o=n.n(a);o.a},"5cc8":function(e,t,n){"use strict";var a=n("9cf9"),o=n.n(a);o.a},6771:function(e,t,n){},"6f81":function(e,t,n){"use strict";var a=n("cf09"),o=n.n(a);o.a},"85ec":function(e,t,n){},"875b":function(e,t,n){"use strict";var a=n("a775"),o=n.n(a);o.a},"9cf9":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var a=n("a026"),o=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"48px",height:"100%"}},[n("a-layout",{staticStyle:{padding:"24px 0",background:"#fff",height:"100%"}},[n("a-layout-sider",{staticStyle:{background:"#fff"},attrs:{width:"200"}},[n("flex-col",{staticStyle:{height:"100%"}},[n("flex-fixed",{staticClass:"new-btn-cntr"},[n("a-button",{attrs:{type:"primary"},on:{click:function(){return e.addProject()}}},[e._v("新建项目")])],1),n("flex-fill",[n("a-menu",{staticStyle:{height:"100%"},attrs:{mode:"inline","default-selected-keys":["1"],"default-open-keys":["sub1"]}},[n("a-sub-menu",{key:"sub1"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"user"}}),e._v("进行中 ")],1),n("a-menu-item",{key:"1"},[e._v("option1")]),n("a-menu-item",{key:"2"},[e._v("option2")]),n("a-menu-item",{key:"3"},[e._v("option3")]),n("a-menu-item",{key:"4"},[e._v("option4")])],1),n("a-sub-menu",{key:"sub2"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"laptop"}}),e._v("已归档 ")],1),n("a-menu-item",{key:"5"},[e._v("option5")]),n("a-menu-item",{key:"6"},[e._v("option6")]),n("a-menu-item",{key:"7"},[e._v("option7")]),n("a-menu-item",{key:"8"},[e._v("option8")])],1),n("a-menu-item",{key:"sub3"},[n("a-icon",{attrs:{type:"notification"}}),e._v("回收站")],1),n("a-menu-item",{key:"sub4"},[n("a-icon",{attrs:{type:"notification"}}),e._v("模板库")],1)],1)],1)],1)],1),n("a-layout-content",[n("project-view",{ref:"projectView"})],1)],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cntr"},[n("modal-project-info",{ref:"modalProject"}),e._l(e.list,(function(t){return n("project-item",{key:t.info.projectId,attrs:{info:t.info,id:t.info.projectId,boardList:t.boardList},on:{editProject:function(t){return e.editProject(t)}}})}))],2)},c=[],l=n("ade3"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-collapse",{attrs:{"default-active-key":"1",bordered:!1},scopedSlots:e._u([{key:"expandIcon",fn:function(e){return[n("a-icon",{attrs:{type:"caret-right",rotate:e.isActive?90:0}})]}}])},[n("a-collapse-panel",{key:"1",style:e.customStyle,nativeOn:{click:function(e){e.stopPropagation()}},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(e.info.title)+" "),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link",on:{click:function(e){return e.stopPropagation(),function(e){return e.preventDefault()}(e)}}},[n("a-icon",{attrs:{type:"more",rotate:90}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[e._v("保存为模板")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"},on:{click:function(){return e.editProject()}}},[e._v("编辑")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[e._v("归档")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)],1)]},proxy:!0}])},[n("div",{staticClass:"board-list"},e._l(e.boardList,(function(t){return n("styled-card",{key:t.boardId,staticStyle:{height:"140px"},attrs:{padding:"",level:"",hover:""}},[n("p",[e._v(e._s(t.title))])])})),1)])],1)],1)},f=[],d={props:["id","info","boardList"],mounted:function(){console.log(this.boardList)},data:function(){return{text:"A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",customStyle:"background: #fff;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden"}},methods:{editProject:function(){this.$emit("editProject",this.id)}}},b=d,p=(n("2820"),n("2877")),m=Object(p["a"])(b,u,f,!1,null,"51fe50af",null),h=m.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{width:720,centered:"",title:"add"===e.operaterType?"新建项目":"编辑项目"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("div",{staticStyle:{"text-align":"right"}},[n("a-button",{attrs:{size:"large",type:"link"},on:{click:function(){return e.visible=!1}}},[e._v("取消")]),n("async-button",{attrs:{size:"large",type:"primary"},on:{click:function(t){return t(e.submit())}}},[e._v(e._s("add"===e.operaterType?"新建":"保存"))])],1)]},proxy:!0}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("a-form-model",{attrs:{model:e.info,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[n("a-form-model-item",{attrs:{label:"项目名称"}},[n("a-input",{model:{value:e.info.title,callback:function(t){e.$set(e.info,"title",t)},expression:"info.title"}})],1),n("a-form-model-item",{attrs:{label:"项目模板"}},[n("simple-selector",{attrs:{list:e.templateList,id:"templateId",label:"name",disabled:"add"!==e.operaterType,value:e.info.template},on:{"update:value":function(t){return e.$set(e.info,"template",t)}}})],1),n("a-form-model-item",{attrs:{label:"所属用户组"}},[n("simple-selector",{attrs:{list:e.groupList,id:"gid",label:"name",value:e.info.editableUser},on:{"update:value":function(t){return e.$set(e.info,"editableUser",t)}}})],1),n("a-form-model-item",{attrs:{label:"可见用户组"}},[n("simple-selector",{attrs:{list:e.groupList,id:"gid",label:"name",value:e.info.viewableUser},on:{"update:value":function(t){return e.$set(e.info,"viewableUser",t)}}})],1),n("a-form-model-item",{attrs:{label:"起止时间"}},[n("a-range-picker",{staticStyle:{width:"100%"},model:{value:e.dataRange,callback:function(t){e.dataRange=t},expression:"dataRange"}})],1),n("a-form-model-item",{attrs:{label:"项目描述"}},[n("a-input",{attrs:{rows:5,type:"textarea"},model:{value:e.info.desc,callback:function(t){e.$set(e.info,"desc",t)},expression:"info.desc"}})],1)],1)],1)},v=[],g=(n("3ca3"),n("ddb0"),n("d4ec")),y=n("bee2"),k=(n("cb29"),n("4de4"),n("c975"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),function(e,t){return Math.floor(Math.random()*(t-e))+e}),x=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],_=function(){return"xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxxxxxx".split("").map((function(e){return"-"===e?e:x[k(0,x.length)]})).join("")},O="著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。谢邀，发动机转速上限这个事情，跟几个因素相关。第一个就是运转件的质量，\n运转件就是曲轴连杆活塞气门，气门驱动机构，这些运转件自身惯量越小，越容易的达到高转速。很显然一个问题，大众的TDI是轻量化柴油机，而货车重载车\n辆都是重载柴油机。第二个就是柴油的燃烧速率，你可以认为柴油燃烧速度是有上限的，它属于重质燃油，它燃烧速度比不上航煤，也比不上汽油，所以火焰传\n播速度是有上限的，所以燃烧室越大，火焰能在做工冲程传播完毕的可能性就越小，所以大缸体柴油机必然不适合高速运转。货车发动机一般都是12L起步，单\n缸大约2L容积，而乘用车单缸一般就是0.5L。第三个转速高的意义，转速高意味着可以有更大的功率，实际上单纯的提高扭矩不提高转速也能提高功率，只\n是殊途同归罢了，相对于用高转速柴油机拉转速获得充沛的起步动力，直接提高低转速最大扭矩更为简单。第四个，更高的转速意味着机油劣化速度更快，对于货车这种\n5万公里一次保养的车来说，追求高转速发动机是不合适的第5个，活塞的线速度，摩托车引擎轻松破万，而乘用车就是6-7k，柴油更低4-5k，重载柴油机更低2k上\n下，其中有一点是变化不大的就是活塞相对于气缸的线速度，冲程长转速低活塞线速度并不定就低于短冲转速高的发动机".split("").filter((function(e){return["，","。","\n"].indexOf(e)<0})).join(""),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return new Array(k(e,t)).fill(0).map((function(){return O[k(0,O.length)]})).join("")},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;return function(n){return new Array(k(e,t)).fill(0).map((function(){return n()}))}},T=function(){function e(t){Object(g["a"])(this,e),Object(l["a"])(this,"uid",""),Object(l["a"])(this,"name",""),Object(l["a"])(this,"account",""),Object(l["a"])(this,"avatar",""),Object.assign(this,t)}return Object(y["a"])(e,null,[{key:"rand",value:function(){return new L({uid:_(),name:w(2,4),account:w(),avatar:w()})}}]),e}(),L=function(){function e(t){Object(g["a"])(this,e),Object(l["a"])(this,"gid",""),Object(l["a"])(this,"name",""),Object(l["a"])(this,"creator",null),Object(l["a"])(this,"userList",[]),Object.assign(this,t)}return Object(y["a"])(e,null,[{key:"rand",value:function(){return new e({gid:_(),name:w(4,8),creator:T.rand(),userList:P(4,7)((function(){return w(4,8)}))})}}]),e}();Object(l["a"])(L,"mockData",P(6,12)((function(){return L.rand()})));var z=function(){return Promise.resolve(L.mockData)},C=n("c1df"),I=n.n(C),S=function(){function e(t){Object(g["a"])(this,e),Object(l["a"])(this,"beginTime",null),Object(l["a"])(this,"endTime",null),Object(l["a"])(this,"title",""),Object(l["a"])(this,"desc",""),Object(l["a"])(this,"template",void 0),Object(l["a"])(this,"projectId",""),Object(l["a"])(this,"editableUser",void 0),Object(l["a"])(this,"viewableUser",void 0),Object.assign(this,t)}return Object(y["a"])(e,null,[{key:"rand",value:function(){return new e({beginTime:I()(),endTime:I()(),title:w(5,12),desc:w(50,100),template:$.mockData[0],projectId:_(),editableUser:L.mockData[0],viewableUser:L.mockData[0]})}},{key:"blank",value:function(){return new e({})}}]),e}(),$=function(){function e(t){Object(g["a"])(this,e),Object(l["a"])(this,"templateId",_()),Object(l["a"])(this,"name",""),Object.assign(this,t)}return Object(y["a"])(e,null,[{key:"rand",value:function(){return new e({templateId:_(),name:w(3,7)})}}]),e}();Object(l["a"])($,"mockData",P(3,6)((function(){return $.rand()})));var E,A,D=function(){function e(t){Object(g["a"])(this,e),Object(l["a"])(this,"boardId",void 0),Object(l["a"])(this,"title",void 0),Object.assign(this,t)}return Object(y["a"])(e,null,[{key:"rand",value:function(){return new e({boardId:_(),title:w(15,40)})}}]),e}(),U=function(){return Promise.resolve(new Array(k(4,8)).fill(0).map((function(){return{info:S.rand(),boardList:new Array(k(4,8)).fill(0).map((function(){return D.rand()}))}})))},F=function(e){return Promise.resolve(S.rand(e))},M=function(){return Promise.resolve($.mockData)},N={open:"OPEN",edit:"EDIT"},B={data:function(){return{visible:!1,operaterType:"add",groupList:[],templateList:[],labelCol:{span:5},wrapperCol:{span:16},info:S.blank()}},computed:{dataRange:{get:function(){return[this.info.beginTime,this.info.endTime]},set:function(e){this.info.beginTime=e?e[0]:null,this.info.endTime=e?e[1]:null}}},methods:(E={loadList:function(){var e=this;return Promise.all([z().then((function(t){return e.groupList=t})).then((function(){return console.log("groupList",e.groupList)})),M().then((function(t){return e.templateList=t})).then((function(){return console.log("templateList",e.templateList)}))])},loadProjectInfo:function(e){var t=this;return F(e).then((function(e){return t.info=e})).then((function(){return console.log("info",t.info)}))}},Object(l["a"])(E,N.add,(function(){this.operaterType="add",this.visible=!0,this.info=S.blank(),this.loadList()})),Object(l["a"])(E,N.edit,(function(e){this.operaterType="edit",this.visible=!0,this.info=S.blank(),this.loadList(),this.loadProjectInfo(e)})),Object(l["a"])(E,"submit",(function(){console.log(this.info),this.visible=!1})),E),mounted:function(){this.loadList()}},G=B,R=Object(p["a"])(G,j,v,!1,null,"775bb4ab",null),W=R.exports,q={addProject:"ADD"},V={components:{ProjectItem:h,ModalProjectInfo:W},data:function(){return{list:[]}},mounted:function(){var e=this;U().then((function(t){return e.list=t})).then((function(){return console.log(e.list)}))},methods:(A={},Object(l["a"])(A,q.addProject,(function(){this.addProject()})),Object(l["a"])(A,"addProject",(function(){this.$refs.modalProject[N.add]()})),Object(l["a"])(A,"editProject",(function(e){this.$refs.modalProject[N.edit](e)})),A)},H=V,J=(n("4e3b"),Object(p["a"])(H,s,c,!1,null,"3ab9e4f4",null)),K=J.exports,Q={components:{ProjectView:K},methods:{addProject:function(){this.$refs.projectView[q.addProject]()}}},X=Q,Y=(n("5cc8"),Object(p["a"])(X,r,i,!1,null,"0dba90fc",null)),Z=Y.exports;a["a"].use(o["a"]);var ee=[{path:"/",name:"Home",component:Z},{path:"/board/:id",name:"Board",props:!0,component:function(){return n.e("about").then(n.bind(null,"5d6d"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}}],te=new o["a"]({mode:"history",base:"/",routes:ee});t["a"]=te},a775:function(e,t,n){},b541:function(e,t,n){"use strict";var a=n("5217"),o=n.n(a);o.a},b6ba:function(e,t,n){},ccf3:function(e,t,n){},cf09:function(e,t,n){},f419:function(e,t,n){}});
//# sourceMappingURL=app.c1d26505.js.map