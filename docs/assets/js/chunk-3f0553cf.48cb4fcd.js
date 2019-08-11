(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f0553cf"],{"069c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page",attrs:{id:"component-question"}},[a("PageHeader",[a("h1",[e._v("Question")])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-9 mb-panel-gutter"},[a("CodeExample",{staticClass:"darker",attrs:{"show-code":!1,title:"What is a Question",url:"/snippets/components/question/what.html"}}),a("div",{staticClass:"panel"},[e._m(0),a("div",{staticClass:"panel-body"},[a("button",{staticClass:"btn btn-contained btn-primary",on:{click:e.findMe}},[a("i",{staticClass:"mdi mdi-map-marker"}),a("span",[e._v("Find me")])])]),a("div",{staticClass:"panel-body"},[a("CodeSnippet",{attrs:{lang:"js",url:"/snippets/components/question/api.snippet"}})],1)])],1),a("div",{staticClass:"col-12 col-lg-3"},[a("TableOfContents")],1)])])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel-header"},[a("h2",{staticClass:"panel-title"},[e._v("JavaScript API")])])}],i=(a("df26"),a("c8ff")),o=a("36ad"),l=a("9f6c"),r=a("c8e6"),c=a("2d1a"),u=a("a287"),d={name:"Question",components:{CodeSnippet:c["a"],CodeExample:r["a"],PageHeader:o["a"],TableOfContents:l["a"]},methods:{findMe:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].ui.question.create("map-marker-outline","Allow <strong>Latte UI Docs</strong> to use this device's location?",[{id:1,label:"Allow all the time"},{id:2,label:"Allow when the app in use"},{id:4,label:"Deny"},{id:8,label:"Deny & don't ask again"}]);case 2:t=e.sent,e.t0=t,e.next=1===e.t0?6:2===e.t0?6:4===e.t0?8:8===e.t0?11:14;break;case 6:return navigator.geolocation.getCurrentPosition(function(e){return u["a"].ui.snackbar.create({message:"Lat: ".concat(e.coords.latitude,"; Long: ").concat(e.coords.longitude)})}),e.abrupt("break",14);case 8:return e.next=10,u["a"].ui.snackbar.create({message:"You denied!"});case 10:return e.abrupt("break",14);case 11:return e.next=13,u["a"].ui.snackbar.create({message:"You denied and asked to never show this question again!"});case 13:return e.abrupt("break",14);case 14:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()}},p=d,m=a("2be6"),v=Object(m["a"])(p,n,s,!1,null,null,null);t["default"]=v.exports},"1bb7":function(e,t,a){},"641f":function(e,t,a){},"73d1":function(e,t,a){"use strict";var n=a("641f"),s=a.n(n);s.a},"9f6c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel mb-panel-gutter"},[a("nav",{staticClass:"nav nav-list"},[e._l(e.elements,function(t){return[t.isSeparator?a("div",{staticClass:"divider divider-horizontal"}):a("latte-ripple",{staticClass:"nav-link",class:{"pl-5":"h3"===t.type},attrs:{as:"a"},on:{click:function(a){return e.goToElement(t.el)}}},[a("span",[e._v(e._s(t.title))])])]})],2)])},s=[],i=a("a287"),o={name:"TableOfContents",data:function(){return{elements:[]}},mounted:function(){var e=document.querySelector("div.page"),t=Array.prototype.slice.call(e.querySelectorAll("h2,h3,.docs-separator"));this.elements=t.map(function(e){return{el:e,title:e.textContent,type:e.tagName.toLowerCase(),isSeparator:e.classList.contains("docs-separator")}})},methods:{goToElement:function(e){var t=i["a"].util.dom.closest(e,"div.panel");null!==t&&(e=t);var a=e.getBoundingClientRect();window.scrollTo({behavior:"smooth",top:a.top+document.scrollingElement.scrollTop-84})}}},l=o,r=(a("b313"),a("2be6")),c=Object(r["a"])(l,n,s,!1,null,"24566663",null);t["a"]=c.exports},b313:function(e,t,a){"use strict";var n=a("1bb7"),s=a.n(n);s.a},c8e6:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel code-example-panel",class:{"is-loading":e.isLoading}},[a("div",{staticClass:"panel-header"},[a("h2",{staticClass:"panel-title mb-0"},[e._v(e._s(e.title))]),a("div",{staticClass:"ml-auto"}),e._t("header")],2),e.$slots.default?a("div",{staticClass:"panel-body"},[e._t("default")],2):e._e(),a("div",{staticClass:"code-example-preview"},[null!==e.component?a(e.component,{tag:"component"}):e._e()],1),e.showCode?a("div",{staticClass:"code-example-code"},[e.code?a("CodeSnippet",{attrs:{lang:"html"}},[e._v(e._s(e.code))]):e._e()],1):e._e(),e._t("root"),a("span",{staticClass:"spinner spinner-primary"})],2)},s=[],i=(a("04f7"),a("ae66"),a("a287")),o=a("4f2b"),l=a("2d1a"),r={name:"CodeExample",components:{CodeSnippet:l["a"]},props:{previewClasses:{default:"",type:String},showCode:{default:!0,type:Boolean},title:{default:"Example",type:String},url:{default:"Example",required:!0,type:String}},data:function(){return{code:null,component:null,isLoading:!0}},mounted:function(){this.loadSnippet()},methods:{loadSnippet:function(){var e=this;this.isLoading=!0,i["a"].api.request(this.url).then(function(e){return e.text()}).then(function(t){return e.onSnippetLoaded(t)}).catch(function(e){return i["a"].core.handleError(e)})},onSnippetLoaded:function(e){this.code=e.replace(new RegExp('\n<div class="ce-gutter"></div>\n',"g"),"").replace(new RegExp('\n<div class="ce-gutter-w"></div>\n',"g"),""),this.component=o["a"].extend({template:'<div class="'.concat(this.previewClasses,'">').concat(e,"</div>")}),this.isLoading=!1}},watch:{url:function(){this.loadSnippet()}}},c=r,u=(a("73d1"),a("2be6")),d=Object(u["a"])(c,n,s,!1,null,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-3f0553cf.48cb4fcd.js.map