(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24bf5aba"],{"02f4":function(t,e,i){var n=i("4588"),a=i("be13");t.exports=function(t){return function(e,i){var r,o,c=String(a(e)),s=n(i),l=c.length;return s<0||s>=l?t?"":void 0:(r=c.charCodeAt(s),r<55296||r>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):r:t?c.slice(s,s+2):o-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,i){"use strict";var n=i("02f4")(!0);t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},"09fc":function(t,e,i){"use strict";var n=i("9e1d"),a=i.n(n);a.a},"0bfb":function(t,e,i){"use strict";var n=i("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,i){"use strict";i("b0c5");var n=i("2aba"),a=i("32e9"),r=i("79e5"),o=i("be13"),c=i("2b4c"),s=i("520a"),l=c("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var p=c(t),v=!r(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=v?!r(function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[l]=function(){return i}),i[p](""),!e}):void 0;if(!v||!d||"replace"===t&&!u||"split"===t&&!f){var g=/./[p],h=i(o,p,""[t],function(t,e,i,n,a){return e.exec===s?v&&!a?{done:!0,value:g.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),m=h[0],b=h[1];n(String.prototype,t,m),a(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,i){"use strict";var n=i("aae3"),a=i("cb7c"),r=i("ebd6"),o=i("0390"),c=i("9def"),s=i("5f1b"),l=i("520a"),u=i("79e5"),f=Math.min,p=[].push,v="split",d="length",g="lastIndex",h=4294967295,m=!u(function(){RegExp(h,"y")});i("214f")("split",2,function(t,e,i,u){var b;return b="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[d]||2!="ab"[v](/(?:ab)*/)[d]||4!="."[v](/(.?)(.?)/)[d]||"."[v](/()()/)[d]>1||""[v](/.?/)[d]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(a,t,e);var r,o,c,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?h:e>>>0,m=new RegExp(t.source,u+"g");while(r=l.call(m,a)){if(o=m[g],o>f&&(s.push(a.slice(f,r.index)),r[d]>1&&r.index<a[d]&&p.apply(s,r.slice(1)),c=r[0][d],f=o,s[d]>=v))break;m[g]===r.index&&m[g]++}return f===a[d]?!c&&m.test("")||s.push(""):s.push(a.slice(f)),s[d]>v?s.slice(0,v):s}:"0"[v](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var a=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,a,n):b.call(String(a),i,n)},function(t,e){var n=u(b,t,this,e,b!==i);if(n.done)return n.value;var l=a(t),p=String(this),v=r(l,RegExp),d=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),x=new v(m?l:"^(?:"+l.source+")",g),y=void 0===e?h:e>>>0;if(0===y)return[];if(0===p.length)return null===s(x,p)?[p]:[];var _=0,M=0,L=[];while(M<p.length){x.lastIndex=m?M:0;var S,w=s(x,m?p:p.slice(M));if(null===w||(S=f(c(x.lastIndex+(m?0:M)),p.length))===_)M=o(p,M,d);else{if(L.push(p.slice(_,M)),L.length===y)return L;for(var C=1;C<=w.length-1;C++)if(L.push(w[C]),L.length===y)return L;M=_=S}}return L.push(p.slice(_)),L}]})},"520a":function(t,e,i){"use strict";var n=i("0bfb"),a=RegExp.prototype.exec,r=String.prototype.replace,o=a,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(o=function(t){var e,i,o,u,f=this;return l&&(i=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(e=f[c]),o=a.call(f,t),s&&o&&(f[c]=f.global?o.index+o[0].length:e),l&&o&&o.length>1&&r.call(o[0],i,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},"5f1b":function(t,e,i){"use strict";var n=i("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var r=i.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"9e1d":function(t,e,i){},aae3:function(t,e,i){var n=i("d3f4"),a=i("2d95"),r=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},ac6a:function(t,e,i){for(var n=i("cadf"),a=i("0d58"),r=i("2aba"),o=i("7726"),c=i("32e9"),s=i("84f2"),l=i("2b4c"),u=l("iterator"),f=l("toStringTag"),p=s.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=a(v),g=0;g<d.length;g++){var h,m=d[g],b=v[m],x=o[m],y=x&&x.prototype;if(y&&(y[u]||c(y,u,p),y[f]||c(y,f,m),s[m]=p,b))for(h in n)y[h]||r(y,h,n[h],!0)}},b0c5:function(t,e,i){"use strict";var n=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},da27:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movies"},[i("div",{staticClass:"top"},[i("a",{on:{click:t.goBack}},[i("i")]),i("h3",[t._v(t._s(t.detailMovie.nm))])]),i("a",[i("div",{staticClass:"heade"},[i("img",{attrs:{src:t.detailMovie.img,alt:""}})]),i("ul",{staticClass:"count"},[i("li",[i("img",{attrs:{src:t.detailMovie.img}}),i("div",[i("h3",[t._v(t._s(t.detailMovie.nm))]),i("p",[t._v(t._s(t.detailMovie.enm))]),i("p",[i("img",{attrs:{src:"http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png"}}),i("img",{attrs:{src:"http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png"}}),i("img",{attrs:{src:"http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png"}}),i("img",{attrs:{src:"http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png"}}),i("img",{attrs:{src:"http://s0.meituan.net/bs/?f=myfe/canary:/img/star-half-new.png"}}),i("label",[t._v(t._s(t.detailMovie.sc))])]),i("p",[t._v(" ("+t._s(t.detailMovie.snum)+")万人评")]),i("p",[t._v("\n              "+t._s(t.detailMovie.cat)+"\n              "),i("i")]),i("p",[t._v(t._s(t.detailMovie.dir))]),i("p",[t._v(t._s(t.detailMovie.fra)+"/"+t._s(t.detailMovie.episodeDur)+"分钟")]),i("p",[t._v(t._s(t.detailMovie.pubDesc))])])])])]),i("button",[t._v("特惠购票")]),i("div",{staticClass:"dear"},[t._v("\n      "+t._s(t.detailMovie.dra)+"\n    ")]),i("div",{staticClass:"parent-dom"},[i("p",[t._v("媒体库")]),i("vue-scroll",[i("ul",{staticClass:"child-dom img"},t._l(t.img,function(t,e){return i("li",{key:e},[i("img",{attrs:{src:t,alt:""}})])}),0)])],1)])},a=[],r=(i("ac6a"),i("28a5"),{name:"movies",data:function(){return{ids:null,detailMovie:null,img:[]}},created:function(){var t=this;this.ids=this.$route.query.plan,this.$axios.get("http://api.kele8.cn/agent/http://m.maoyan.com/ajax/detailmovie?",{params:{movieId:this.ids}}).then(function(e){console.log(e.data),t.detailMovie=e.data.detailMovie,t.detailMovie.img="http://p0.meituan.net/177.249/movie/"+t.detailMovie.img.split("/")[5],t.detailMovie.photos.forEach(function(e){e="http://p0.meituan.net/movie/"+e.split("/")[5]+"@250w_140h_1e_1c.webp",t.img.push(e)}),t.img[0]="http://p1.meituan.net/movie/ad22ec511a5222fda792e90766ab02bc406744.jpg@250w_140h_1e_1c.webp",console.log(t.detailMovie.photos)})},methods:{goBack:function(){this.$router.go(-1)}}}),o=r,c=(i("09fc"),i("2877")),s=Object(c["a"])(o,n,a,!1,null,"e2fc6ae4",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-24bf5aba.b729e1ae.js.map