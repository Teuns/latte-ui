(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-740c61ed"],{"07aa":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-header"},[a("h2",{staticClass:"panel-title m-0"},[t._v(t._s(t.title))])]),a("table",{staticClass:"table"},[t._m(0),a("tbody",{staticClass:"text-monospace",staticStyle:{"font-size":".8rem"}},[t._l(t.vars,function(e){return[a("tr",[a("td",[a("div",{staticClass:"column-content"},[t._v(t._s(e.name))])]),a("td",[a("div",{staticClass:"column-content"},["int"===e.type||"string"===e.type?[t._v("\n\t\t\t\t\t\t\t"+t._s(e.default)+"\n\t\t\t\t\t\t")]:"rgb"===e.type?[a("RgbDisplay",{attrs:{rgb:e.default}})]:"none"===e.type?[a("i",[t._v("None")])]:t._e()],2)])])]})],2)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticStyle:{width:"270px"}},[a("div",{staticClass:"column-content"},[a("strong",[t._v("Property")])])]),a("th",[a("div",{staticClass:"column-content"},[a("strong",[t._v("Default value")])])])])])}],l=a("fbe3"),i={name:"Variables",components:{RgbDisplay:l["a"]},props:{title:{default:"Properties",required:!1,type:String},vars:{default:[],required:!0,type:Array}}},r=i,o=(a("91c9"),a("2be6")),c=Object(o["a"])(r,n,s,!1,null,"05f9a7e4",null);e["a"]=c.exports},"1bb7":function(t,e,a){},"2fb1":function(t,e,a){"use strict";var n=a("7d46"),s=a.n(n);s.a},"641f":function(t,e,a){},"73d1":function(t,e,a){"use strict";var n=a("641f"),s=a.n(n);s.a},"7d46":function(t,e,a){},"91c9":function(t,e,a){"use strict";var n=a("dcc2"),s=a.n(n);s.a},"9f6c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel mb-panel-gutter"},[a("nav",{staticClass:"nav nav-list"},[t._l(t.elements,function(e){return[e.isSeparator?a("div",{staticClass:"divider divider-horizontal"}):a("latte-ripple",{staticClass:"nav-link",class:{"pl-5":"h3"===e.type},attrs:{as:"a"},on:{click:function(a){return t.goToElement(e.el)}}},[a("span",[t._v(t._s(e.title))])])]})],2)])},s=[],l=a("a287"),i={name:"TableOfContents",data:function(){return{elements:[]}},mounted:function(){var t=document.querySelector("div.page"),e=Array.prototype.slice.call(t.querySelectorAll("h2,h3,.docs-separator"));this.elements=e.map(function(t){return{el:t,title:t.textContent,type:t.tagName.toLowerCase(),isSeparator:t.classList.contains("docs-separator")}})},methods:{goToElement:function(t){var e=l["a"].util.dom.closest(t,"div.panel");null!==e&&(t=e);var a=t.getBoundingClientRect();window.scrollTo({behavior:"smooth",top:a.top+document.scrollingElement.scrollTop-84})}}},r=i,o=(a("b313"),a("2be6")),c=Object(o["a"])(r,n,s,!1,null,"24566663",null);e["a"]=c.exports},b313:function(t,e,a){"use strict";var n=a("1bb7"),s=a.n(n);s.a},bc8f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",attrs:{id:"components-panel"}},[a("PageHeader",[a("h1",[t._v("Panel")])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-9 mb-panel-gutter"},[a("CodeExample",{staticClass:"darker",attrs:{title:"Panel",url:"/snippets/components/panel/basic.html"}}),a("CodeExample",{staticClass:"darker",attrs:{title:"Panel with footer",url:"/snippets/components/panel/footer.html"}}),a("CodeExample",{staticClass:"darker",attrs:{title:"Panel with media",url:"/snippets/components/panel/media.html"}}),a("CodeExample",{staticClass:"darker",attrs:{title:"Panel with notice",url:"/snippets/components/panel/notice.html"}}),a("CodeExample",{staticClass:"darker",attrs:{title:"Panel with list",url:"/snippets/components/panel/list.html"}}),a("CodeExample",{staticClass:"darker",attrs:{title:"Panel with nav",url:"/snippets/components/panel/nav.html"}}),a("CodeExample",{staticClass:"darker",attrs:{title:"Panel with tabs",url:"/snippets/components/panel/tabs.html"}}),a("div",{staticClass:"divider divider-horizontal docs-separator"}),a("Variables",{attrs:{vars:t.panelVars}})],1),a("div",{staticClass:"col-12 col-lg-3"},[a("TableOfContents")],1)])])],1)},s=[],l=(a("4fb0"),a("c8e6")),i=a("36ad"),r=a("9f6c"),o=a("07aa"),c={name:"Panels",components:{CodeExample:l["a"],PageHeader:i["a"],TableOfContents:r["a"],Variables:o["a"]},data:function(){var t=window.getComputedStyle(document.body);return{panelVars:[{name:"--panel-background",type:"rgb",default:t.getPropertyValue("--panel-background").split(",").map(function(t){return parseInt(t)})},{name:"--panel-elevation",type:"string",default:t.getPropertyValue("--panel-elevation")},{name:"--panel-elevation-hover",type:"string",default:t.getPropertyValue("--panel-elevation-hover")},{name:"--panel-gutter",type:"string",default:t.getPropertyValue("--panel-gutter")}]}}},p=c,d=a("2be6"),u=Object(d["a"])(p,n,s,!1,null,null,null);e["default"]=u.exports},c8e6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel code-example-panel",class:{"is-loading":t.isLoading}},[a("div",{staticClass:"panel-header"},[a("h2",{staticClass:"panel-title mb-0"},[t._v(t._s(t.title))]),a("div",{staticClass:"ml-auto"}),t._t("header")],2),t.$slots.default?a("div",{staticClass:"panel-body"},[t._t("default")],2):t._e(),a("div",{staticClass:"code-example-preview"},[null!==t.component?a(t.component,{tag:"component"}):t._e()],1),t.showCode?a("div",{staticClass:"code-example-code"},[t.code?a("CodeSnippet",{attrs:{lang:"html"}},[t._v(t._s(t.code))]):t._e()],1):t._e(),a("span",{staticClass:"spinner spinner-primary"})])},s=[],l=(a("04f7"),a("ae66"),a("4f2b")),i=a("2d1a"),r=a("a287"),o={name:"CodeExample",components:{CodeSnippet:i["a"]},props:{showCode:{default:!0,required:!1,type:Boolean},title:{default:"Example",required:!1,type:String},url:{default:"Example",required:!0,type:String}},data:function(){return{code:null,component:null,isLoading:!0}},mounted:function(){this.loadSnippet()},methods:{loadSnippet:function(){var t=this;this.isLoading=!0,r["a"].api.request(this.url).then(function(t){return t.text()}).then(function(e){return t.onSnippetLoaded(e)}).catch(function(t){return r["a"].core.handleError(t)})},onSnippetLoaded:function(t){this.code=t.replace(new RegExp('\n<div class="ce-gutter"></div>\n',"g"),""),this.component=l["a"].extend({template:"<div>".concat(t,"</div>")}),this.isLoading=!1}},watch:{url:function(){this.loadSnippet()}}},c=o,p=(a("73d1"),a("2be6")),d=Object(p["a"])(c,n,s,!1,null,null,null);e["a"]=d.exports},dcc2:function(t,e,a){},fbe3:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rgb-display",style:t.styles},[a("span",[t._v(t._s(t.rgb[0])+", "+t._s(t.rgb[1])+", "+t._s(t.rgb[2]))])])},s=[],l={name:"RgbDisplay",props:{rgb:{default:function(){return[0,0,0]},required:!1,type:Array}},computed:{styles:function(){return{"--color":"rgb(".concat(this.rgb[0],", ").concat(this.rgb[1],", ").concat(this.rgb[2],")")}}}},i=l,r=(a("2fb1"),a("2be6")),o=Object(r["a"])(i,n,s,!1,null,"52277d38",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-740c61ed.693dad9c.js.map