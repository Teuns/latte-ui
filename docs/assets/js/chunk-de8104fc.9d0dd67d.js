(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de8104fc"],{"14cc":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page",attrs:{id:"component-expandable"}},[a("PageHeader",[a("h1",[e._v("Expandable")])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-9 mb-panel-gutter"},[a("CodeExample",{attrs:{title:"Basic",url:"/snippets/components/expandable/basic.html"}}),a("CodeExample",{attrs:{title:"Group",url:"/snippets/components/expandable/group.html"}}),a("CodeExample",{attrs:{title:"Advanced",url:"/snippets/components/expandable/advanced.html"}}),a("CodeExample",{attrs:{title:"Nav",url:"/snippets/components/expandable/nav.html"}})],1),a("div",{staticClass:"col-12 col-lg-3"},[a("TableOfContents")],1)])])],1)},s=[],l=a("c8e6"),o=a("36ad"),i=a("9f6c"),c={name:"Expandable",components:{CodeExample:l["a"],TableOfContents:i["a"],PageHeader:o["a"]}},r=c,p=a("2be6"),d=Object(p["a"])(r,n,s,!1,null,null,null);t["default"]=d.exports},"1bb7":function(e,t,a){},"641f":function(e,t,a){},"73d1":function(e,t,a){"use strict";var n=a("641f"),s=a.n(n);s.a},"9f6c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel mb-panel-gutter"},[a("nav",{staticClass:"nav nav-list"},[e._l(e.elements,function(t){return[t.isSeparator?a("div",{staticClass:"divider divider-horizontal"}):a("latte-ripple",{staticClass:"nav-link",class:{"pl-5":"h3"===t.type},attrs:{as:"a"},on:{click:function(a){return e.goToElement(t.el)}}},[a("span",[e._v(e._s(t.title))])])]})],2)])},s=[],l=a("a287"),o={name:"TableOfContents",data:function(){return{elements:[]}},mounted:function(){var e=document.querySelector("div.page"),t=Array.prototype.slice.call(e.querySelectorAll("h2,h3,.docs-separator"));this.elements=t.map(function(e){return{el:e,title:e.textContent,type:e.tagName.toLowerCase(),isSeparator:e.classList.contains("docs-separator")}})},methods:{goToElement:function(e){var t=l["a"].util.dom.closest(e,"div.panel");null!==t&&(e=t);var a=e.getBoundingClientRect();window.scrollTo({behavior:"smooth",top:a.top+document.scrollingElement.scrollTop-84})}}},i=o,c=(a("b313"),a("2be6")),r=Object(c["a"])(i,n,s,!1,null,"24566663",null);t["a"]=r.exports},b313:function(e,t,a){"use strict";var n=a("1bb7"),s=a.n(n);s.a},c8e6:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel code-example-panel",class:{"is-loading":e.isLoading}},[a("div",{staticClass:"panel-header"},[a("h2",{staticClass:"panel-title mb-0"},[e._v(e._s(e.title))]),a("div",{staticClass:"ml-auto"}),e._t("header")],2),e.$slots.default?a("div",{staticClass:"panel-body"},[e._t("default")],2):e._e(),a("div",{staticClass:"code-example-preview"},[null!==e.component?a(e.component,{tag:"component"}):e._e()],1),e.showCode?a("div",{staticClass:"code-example-code"},[e.code?a("CodeSnippet",{attrs:{lang:"html"}},[e._v(e._s(e.code))]):e._e()],1):e._e(),e._t("root"),a("span",{staticClass:"spinner spinner-primary"})],2)},s=[],l=(a("04f7"),a("ae66"),a("a287")),o=a("4f2b"),i=a("2d1a"),c={name:"CodeExample",components:{CodeSnippet:i["a"]},props:{previewClasses:{default:"",type:String},showCode:{default:!0,type:Boolean},title:{default:"Example",type:String},url:{default:"Example",required:!0,type:String}},data:function(){return{code:null,component:null,isLoading:!0}},mounted:function(){this.loadSnippet()},methods:{loadSnippet:function(){var e=this;this.isLoading=!0,l["a"].api.request(this.url).then(function(e){return e.text()}).then(function(t){return e.onSnippetLoaded(t)}).catch(function(e){return l["a"].core.handleError(e)})},onSnippetLoaded:function(e){this.code=e.replace(new RegExp('\n<div class="ce-gutter"></div>\n',"g"),"").replace(new RegExp('\n<div class="ce-gutter-w"></div>\n',"g"),""),this.component=o["a"].extend({template:'<div class="'.concat(this.previewClasses,'">').concat(e,"</div>")}),this.isLoading=!1}},watch:{url:function(){this.loadSnippet()}}},r=c,p=(a("73d1"),a("2be6")),d=Object(p["a"])(r,n,s,!1,null,null,null);t["a"]=d.exports}}]);
//# sourceMappingURL=chunk-de8104fc.9d0dd67d.js.map