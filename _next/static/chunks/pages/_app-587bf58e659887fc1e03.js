_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"20a2":function(e,t,n){e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Kt/":function(e,t,n){"use strict";var a=n("lSNA");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),p=(o=n("Xuae"))&&o.__esModule?o:{default:o},l=n("lwAK"),c=n("FYa8"),s=n("/0+H");function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var p=r.key.slice(r.key.indexOf("$")+1);e.has(p)?o=!1:e.add(p)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var l=0,c=m.length;l<c;l++){var s=m[l];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var h=r.props[s],d=a[s]||new Set;"name"===s&&i||!d.has(h)?(d.add(h),a[s]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return p["data-href"]=p.href,p.href=void 0,i.default.cloneElement(e,p)}return i.default.cloneElement(e,{key:o})}))}function g(e){var t=e.children,n=(0,i.useContext)(l.AmpStateContext),a=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(p.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,s.isInAmpMode)(n)},t)}g.rewind=function(){};var y=g;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),p=n("a1gu"),l=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),h=function(e){i(n,e);var t=c(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=h},cha2:function(e,t,n){"use strict";n.r(t);var a=n("nKUr");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n("q1tI"),i=n.n(o),p=n("g4pe"),l=n.n(p),c=n("20a2"),s=n.n(c);function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var d={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},u=function(e){var t,n=[];e.titleTemplate&&(d.templateTitle=e.titleTemplate);var a="";e.title?(a=e.title,d.templateTitle&&(a=d.templateTitle.replace(/%s/g,(function(){return a})))):e.defaultTitle&&(a=e.defaultTitle),a&&n.push(i.a.createElement("title",{key:"title"},a));var r=e.noindex||d.noindex||e.dangerouslySetAllPagesToNoIndex,o=e.nofollow||d.nofollow||e.dangerouslySetAllPagesToNoFollow,p="";if(e.robotsProps){var l=e.robotsProps,c=l.nosnippet,s=l.maxSnippet,h=l.maxImagePreview,u=l.maxVideoPreview,m=l.noarchive,f=l.noimageindex,g=l.notranslate,y=l.unavailableAfter;p=(c?",nosnippet":"")+(s?",max-snippet:"+s:"")+(h?",max-image-preview:"+h:"")+(m?",noarchive":"")+(y?",unavailable_after:"+y:"")+(f?",noimageindex":"")+(u?",max-video-preview:"+u:"")+(g?",notranslate":"")}if(r||o?(e.dangerouslySetAllPagesToNoIndex&&(d.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(d.nofollow=!0),n.push(i.a.createElement("meta",{key:"robots",name:"robots",content:(r?"noindex":"index")+","+(o?"nofollow":"follow")+p})),n.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(r?"noindex":"index")+","+(o?"nofollow":"follow")+p}))):(n.push(i.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+p})),n.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+p}))),e.description&&n.push(i.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&n.push(i.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){n.push(i.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&n.push(i.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&n.push(i.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&n.push(i.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&n.push(i.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&n.push(i.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var v=e.openGraph.type.toLowerCase();n.push(i.a.createElement("meta",{key:"og:type",property:"og:type",content:v})),"profile"===v&&e.openGraph.profile?(e.openGraph.profile.firstName&&n.push(i.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&n.push(i.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&n.push(i.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&n.push(i.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===v&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&n.push(i.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&n.push(i.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===v&&e.openGraph.article?(e.openGraph.article.publishedTime&&n.push(i.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&n.push(i.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&n.push(i.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&n.push(i.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==v&&"video.episode"!==v&&"video.tv_show"!==v&&"video.other"!==v||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&n.push(i.a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&n.push(i.a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&n.push(i.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&n.push(i.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&n.push(i.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&n.push(i.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||a})),(e.openGraph.description||e.description)&&n.push(i.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(d.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(d.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"og:image:0"+t,property:"og:image",content:e.url})),e.alt&&n.push(i.a.createElement("meta",{key:"og:image:alt0"+t,property:"og:image:alt",content:e.alt})),e.width?n.push(i.a.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:e.width.toString()})):d.defaultOpenGraphImageWidth&&n.push(i.a.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:d.defaultOpenGraphImageWidth.toString()})),e.height?n.push(i.a.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:e.height.toString()})):d.defaultOpenGraphImageHeight&&n.push(i.a.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:d.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(d.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(d.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"og:video:0"+t,property:"og:video",content:e.url})),e.alt&&n.push(i.a.createElement("meta",{key:"og:video:alt0"+t,property:"og:video:alt",content:e.alt})),e.width?n.push(i.a.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:e.width.toString()})):d.defaultOpenGraphVideoWidth&&n.push(i.a.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:d.defaultOpenGraphVideoWidth.toString()})),e.height?n.push(i.a.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:e.height.toString()})):d.defaultOpenGraphVideoHeight&&n.push(i.a.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:d.defaultOpenGraphVideoHeight.toString()})),e.secureUrl&&n.push(i.a.createElement("meta",{key:"og:video:secure_url"+t,property:"og:video:secure_url",content:e.secureUrl.toString()})),e.type&&n.push(i.a.createElement("meta",{key:"og:video:type"+t,property:"og:video:type",content:e.type.toString()}))})),e.openGraph.locale&&n.push(i.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&n.push(i.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&n.push(i.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,a,r;n.push(i.a.createElement("meta",Object.assign({key:"meta:"+(null!=(t=null!=(a=null!=(r=e.keyOverride)?r:e.name)?a:e.property)?t:e.httpEquiv)},e)))})),null!=(t=e.additionalLinkTags)&&t.length&&e.additionalLinkTags.forEach((function(e){var t;n.push(i.a.createElement("link",Object.assign({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),n},m=function(e){function t(){return e.apply(this,arguments)||this}return h(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,a=e.defaultTitle,r=e.dangerouslySetAllPagesToNoIndex,o=void 0!==r&&r,p=e.dangerouslySetAllPagesToNoFollow,c=void 0!==p&&p,s=e.description,h=e.canonical,d=e.facebook,m=e.openGraph,f=e.additionalMetaTags,g=e.twitter,y=e.defaultOpenGraphImageWidth,v=e.defaultOpenGraphImageHeight,b=e.defaultOpenGraphVideoWidth,k=e.defaultOpenGraphVideoHeight,w=e.mobileAlternate,G=e.languageAlternates,O=e.additionalLinkTags;return i.a.createElement(l.a,null,u({title:t,titleTemplate:n,defaultTitle:a,dangerouslySetAllPagesToNoIndex:o,dangerouslySetAllPagesToNoFollow:c,description:s,canonical:h,facebook:d,openGraph:m,additionalMetaTags:f,twitter:g,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:v,defaultOpenGraphVideoWidth:b,defaultOpenGraphVideoHeight:k,mobileAlternate:w,languageAlternates:G,additionalLinkTags:O}))},t}(o.Component),f=(o.Component,{title:"mCodex - Mateus Andrade",description:"A generalist Javascript Developer from Brazil working with NodeJS, React and React-Native ecosystem since 2015.",canonical:"https://mcodex.dev",images:[{url:"https://mcodex.dev/assets/img/avatar.jpeg",width:800,height:600,alt:"Mateus Andrade"}],openGraph:{type:"website",locale:"en_US",url:"https://mcodex.dev",site_name:"mCodex - Mateus Andrade",images:[{url:"https://mcodex.dev/assets/img/avatar.jpeg",width:800,height:600,alt:"Mateus Andrade"}]}});var g=n("vOnD");function y(){var e,t,n=(e=["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #__next {\n    height: 100%;\n    background-color: #000;\n  }\n\n  body {\n    color: #FFF;\n    -webkit-font-smoothing: antialised;\n  }\n\n  body, input, button {\n    font: 16px 'Montserrat', sans-serif;\n  }\n\n  #root {\n    margin: 0 auto;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 500;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return y=function(){return n},n}var v=Object(g.a)(y());function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}s.a.events.on("routeChangeComplete",(function(e){return function(e){window.gtag("config","UA-79205996-1",{page_path:e})}(e)}));t.default=function(e){var t=e.Component,n=e.pageProps;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(l.a,{children:[Object(a.jsx)("title",{children:"mCodex - Mateus Andrade"}),Object(a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap",rel:"stylesheet"})]}),Object(a.jsx)(m,k({},f)),Object(a.jsx)(t,k({},n)),Object(a.jsx)(v,{})]})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[[0,0,1,3,2]]]);