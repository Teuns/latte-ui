(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2901b044"],{"2e2d":function(t,e,a){},"73d1":function(t,e,a){"use strict";var n=a("a73c"),s=a.n(n);s.a},"9f6c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel mb-panel-gutter"},[a("nav",{staticClass:"nav nav-list"},[t._l(t.elements,(function(e){return[e.isSeparator?a("div",{staticClass:"divider divider-horizontal"}):a("latte-ripple",{staticClass:"nav-link",class:{"pl-5":"h3"===e.type},attrs:{as:"a"},on:{click:function(a){return t.goToElement(e.el)}}},[a("span",[t._v(t._s(e.title))])])]}))],2)])},s=[],l=(a("cfce"),a("33ef"),a("a287")),i={name:"TableOfContents",data:function(){return{elements:[]}},mounted:function(){var t=document.querySelector("div.page"),e=Array.prototype.slice.call(t.querySelectorAll("h2,h3,.docs-separator"));this.elements=e.map((function(t){return{el:t,title:t.textContent,type:t.tagName.toLowerCase(),isSeparator:t.classList.contains("docs-separator")}}))},methods:{goToElement:function(t){var e=l["a"].util.dom.closest(t,"div.panel");null!==e&&(t=e);var a=t.getBoundingClientRect();window.scrollTo({behavior:"smooth",top:a.top+document.scrollingElement.scrollTop-84})}}},o=i,c=(a("b313"),a("2be6")),r=Object(c["a"])(o,n,s,!1,null,"24566663",null);e["a"]=r.exports},a73c:function(t,e,a){},b313:function(t,e,a){"use strict";var n=a("2e2d"),s=a.n(n);s.a},c8e6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel code-example-panel",class:{"is-loading":t.isLoading}},[a("div",{staticClass:"panel-header"},[a("h2",{staticClass:"panel-title mb-0"},[t._v(t._s(t.title))]),a("div",{staticClass:"ml-auto"}),t._t("header")],2),t.$slots.default?a("div",{staticClass:"panel-body"},[t._t("default")],2):t._e(),a("div",{staticClass:"code-example-preview"},[null!==t.component?a(t.component,{tag:"component"}):t._e()],1),t.showCode?a("div",{staticClass:"code-example-code"},[t.code?a("CodeSnippet",{attrs:{lang:"html"}},[t._v(t._s(t.code))]):t._e()],1):t._e(),t._t("root"),a("span",{staticClass:"spinner spinner-primary"})],2)},s=[],l=(a("d86f"),a("88a1"),a("2aa5"),a("0d9f"),a("32f5"),a("a287")),i=a("4f2b"),o=a("2d1a"),c={name:"CodeExample",components:{CodeSnippet:o["a"]},props:{bindings:{default:function(){return{}},type:Object},previewClasses:{default:"",type:String},showCode:{default:!0,type:Boolean},title:{default:"Example",type:String},url:{default:"Example",required:!0,type:String}},data:function(){return{code:null,component:null,isLoading:!0}},mounted:function(){this.loadSnippet()},methods:{loadSnippet:function(){var t=this;this.isLoading=!0,l["a"].api.request(this.url).then((function(t){return t.text()})).then((function(e){return t.onSnippetLoaded(e)})).catch((function(t){return l["a"].core.handleError(t)}))},onSnippetLoaded:function(t){this.code=t.replace(new RegExp('\n<div class="ce-gutter"></div>\n',"g"),"").replace(new RegExp('\n<div class="ce-gutter-w"></div>\n',"g"),"");var e=this.bindings||{};this.component=i["a"].extend({template:'<div class="'.concat(this.previewClasses,'">').concat(t,"</div>"),data:function(){return e||{}}}),this.isLoading=!1}},watch:{url:function(){this.loadSnippet()}}},r=c,d=(a("73d1"),a("2be6")),p=Object(d["a"])(r,n,s,!1,null,null,null);e["a"]=p.exports},ea85:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",attrs:{id:"component-scaffolding"}},[a("PageHeader",[a("h1",[t._v("Scaffolding")])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-9 mb-panel-gutter"},[a("CodeExample",{staticClass:"darker",attrs:{title:"Default",url:"/snippets/components/scaffolding/default.html"}}),a("CodeExample",{staticClass:"darker",attrs:{title:"Sheet below app bar",url:"/snippets/components/scaffolding/below-app-bar.html"}})],1),a("div",{staticClass:"col-12 col-lg-3"},[a("TableOfContents")],1)])])],1)},s=[],l=a("c8e6"),i=a("2d1a"),o=a("36ad"),c=a("9f6c"),r={name:"Scaffolding",components:{CodeExample:l["a"],CodeSnippet:i["a"],PageHeader:o["a"],TableOfContents:c["a"]},methods:{}},d=r,p=a("2be6"),u=Object(p["a"])(d,n,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2901b044.5f7f2537.js.map