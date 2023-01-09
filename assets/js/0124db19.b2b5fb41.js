"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[2230],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},356:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"structural-directive",title:"Structural Directive",description:"Structural Directive | Transloco Angular i18n"},c=void 0,u={unversionedId:"structural-directive",id:"structural-directive",title:"Structural Directive",description:"Structural Directive | Transloco Angular i18n",source:"@site/docs/structural-directive.mdx",sourceDirName:".",slug:"/structural-directive",permalink:"/transloco/docs/structural-directive",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/structural-directive.mdx",tags:[],version:"current",frontMatter:{id:"structural-directive",title:"Structural Directive",description:"Structural Directive | Transloco Angular i18n"}},s={},p=[{value:"Get the current language",id:"get-the-current-language",level:2},{value:"Utilizing the read input",id:"utilizing-the-read-input",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using a structural directive is the ",(0,o.kt)("strong",{parentName:"p"},"recommended")," approach. It's DRY and efficient, as it creates one subscription per template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<ng-container *transloco=\"let t\">\n  <p>{{ t('title') }}</p>\n\n  <comp [title]=\"t('title')\"></comp>\n</ng-container>\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," function is ",(0,o.kt)("strong",{parentName:"p"},"memoized"),". It means that given the same key it will return the result directly from the cache."),(0,o.kt)("p",null,"We can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," object as the second parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<ng-container *transloco=\"let t\">\n  <p>{{ t('name', { name: 'Transloco' }) }}</p>\n</ng-container>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "name": "My name is {{name}}"\n}\n')),(0,o.kt)("p",null,"We can instruct the directive to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"different")," language in our template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="home.component.html"',"{1}":!0,title:'"home.component.html"'},"<ng-container *transloco=\"let t; lang: 'es'\">\n  <p>{{ t('title') }}</p>\n</ng-container>\n")),(0,o.kt)("p",null,"This will translate each key based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spanish")," language translation file."),(0,o.kt)("h2",{id:"get-the-current-language"},"Get the current language"),(0,o.kt)("p",null,"We can obtain the resolved language by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentLang")," context variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="home.component.html"',"{1}":!0,title:'"home.component.html"'},'<ng-container *transloco="let t; currentLang as currentLang">\n  <p>The resolved language is {{ currentLang }}</p>\n</ng-container>\n')),(0,o.kt)("h2",{id:"utilizing-the-read-input"},"Utilizing the read input"),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," input in the structural directive to get translations of a particular nested (including deeply nested) property."),(0,o.kt)("p",null,"Let's say we need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard")," scope all over the template. Given this translation file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "foo": "Foo",\n  "bar": "Bar"\n  "dashboard": {\n    "title": "Dashboard Title",\n    "desc": "Dashboard Desc"\n  }\n}\n')),(0,o.kt)("p",null,"we can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="home.component.html"',"{1}":!0,title:'"home.component.html"'},"<ng-container *transloco=\"let t; read: 'dashboard'\">\n  <p>{{ t('title') }}</p>\n</ng-container>\n")),(0,o.kt)("p",null,"without having to repeat the ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard")," key in each translation. Under the hood, it will do the following for you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<ng-container *transloco=\"let t;\">\n  <h1>{{ t('dashboard.title') }}</h1>\n  <p>{{ t('dashboard.desc') }}</p>\n</ng-container>\n")))}d.isMDXComponent=!0}}]);