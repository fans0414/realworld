(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return m})),r.d(e,"g",(function(){return d}));var n=r(60),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},d=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})}},188:function(t,e,r){var n=r(6),c=r(27),o=r(11),l=r(189),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),d=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=d.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(m,"")),t};t.exports=d},189:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},190:function(t,e,r){"use strict";var n=r(4),c=r(21),o=r(26),l=r(124),f=r(62),v=r(11),m=r(50).f,d=r(63).f,_=r(10).f,O=r(188).trim,h=n.Number,C=h,j=h.prototype,y="Number"==o(r(78)(j)),N="trim"in String.prototype,E=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=N?e.trim():O(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof h&&(y?v((function(){j.valueOf.call(r)})):"Number"!=o(r))?l(new C(E(e)),r,h):E(e)};for(var w,I=r(7)?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)c(C,w=I[x])&&!c(h,w)&&_(h,w,d(C,w));h.prototype=j,j.constructor=h,r(13)(n,"Number",h)}},191:function(t,e,r){var n=r(6),c=r(192);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},192:function(t,e,r){var n=r(4).parseInt,c=r(188).trim,o=r(189),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},266:function(t,e,r){"use strict";r.r(e);r(61),r(24),r(25),r(12),r(49);var n=r(34),c=(r(190),r(191),r(36),r(3)),article=r(187),o=r(46);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={middleware:"authenticated",name:"UserProfile",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,l,f,v,data,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.params,console.log("params.tab: ",c.tab),o=Number.parseInt(c.page||1),20,l=c.tab||"my_articles",f="my_articles"===c.tab?"author":"favorited",e.next=8,Object(article.d)((r={},Object(n.a)(r,f,c.username),Object(n.a)(r,"limit",20),Object(n.a)(r,"offset",20*(o-1)),r));case 8:return v=e.sent,data=v.data,m=data.articles,d=data.articlesCount,e.abrupt("return",{tab:l,articles:m,articlesCount:d});case 12:case"end":return e.stop()}}),e)})))()},watchQuery:["tab"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["user"]))},v=r(23),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.user.image}}),t._v(" "),r("h4",[t._v(t._s(t.user.username))]),t._v(" "),r("p",[t._v("\n            "+t._s(t.user.bio)+"\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn"},[r("i",{staticClass:"ion-plus-round"}),t._v("\n              Follow "+t._s(t.user.username)+"\n          ")])])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"my_articles"===t.tab},attrs:{exact:"",to:{name:"profile",params:{username:t.user.username,tab:"my_articles"}}}},[t._v("My Articles")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"favorited_articles"===t.tab},attrs:{exact:"",to:{name:"profile",params:{username:t.user.username,tab:"favorited_articles"}}}},[t._v("Favorited Articles")])],1)])]),t._v(" "),r("div",{staticClass:"article-preview"},[r("ul",t._l(t.articles,(function(e,n){return r("li",{key:n},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:e.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("dateformatter")(e.createdAt,"MMM DD, YYYY")))])]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:e.favorited}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(e.favoritesCount)+"\n                ")])]),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:e.slug}}}},[r("h1",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),0)])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);