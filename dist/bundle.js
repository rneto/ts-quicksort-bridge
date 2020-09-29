!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(u=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(i).concat([o]).join("\n")}var u,s,c;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e},u=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],u=0,s=i.length;u<s;u++,o++)n[o]=i[u];return n};Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0,r(2);var s=r(5),c=r(10),a=i(r(13)),f=r(14),l=r(15),d=function(){function t(){this.title="Implementations of the QuickSort Algorithm and use the Bridge Pattern with TypeScript",this.writer=a.createHTMLWriter("app")}return t.prototype.init=function(){document.title=this.title,this.writer.push("<h1>"+this.title+"</h1>"),this.writer.push("<div class='numbers'>"+l.numbers.join(", ")+"</div>"),this.showBasicQuicksortDemo(),this.showLomutoQuicksortDemo(),this.showNativeQuicksortDemo()},t.prototype.showBasicQuicksortDemo=function(){var t=new s.BasicQuicksort,e=new c.QuicksortSorter(t),r=new f.Timer,n=u(l.numbers);r.start(),e.sort(n),r.end(),this.writer.push("<h2>Basic Quicksort <small>("+r.elapsedTime()+"ms to order "+l.numbers.length+" numbers)</small></h2>"),this.writer.push("<div class='numbers'>"+n.join(", ")+"</div>")},t.prototype.showLomutoQuicksortDemo=function(){var t=new s.LomutoQuicksort,e=new c.QuicksortSorter(t),r=new f.Timer,n=u(l.numbers);r.start(),e.sort(n),r.end(),this.writer.push("<h2>Lomuto Quicksort <small>("+r.elapsedTime()+"ms to order "+l.numbers.length+" numbers)</small></h2>"),this.writer.push("<div class='numbers'>"+n.join(", ")+"</div>")},t.prototype.showNativeQuicksortDemo=function(){var t=new s.NativeQuicksort,e=new c.QuicksortSorter(t),r=new f.Timer,n=u(l.numbers);r.start(),e.sort(n),r.end(),this.writer.push("<h2>Native Quicksort <small>("+r.elapsedTime()+"ms to order "+l.numbers.length+" numbers)</small></h2>"),this.writer.push("<div class='numbers'>"+n.join(", ")+"</div>")},t}();e.App=d,(new d).init()},function(t,e,r){var n=r(3),o=r(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);t.exports=o.locals||{}},function(t,e,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),u=[];function s(t){for(var e=-1,r=0;r<u.length;r++)if(u[r].identifier===t){e=r;break}return e}function c(t,e){for(var r={},n=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],a=r[c]||0,f="".concat(c," ").concat(a);r[c]=a+1;var l=s(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(u[l].references++,u[l].updater(d)):u.push({identifier:f,updater:m(d,e),references:1}),n.push(f)}return n}function a(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var u=i(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function d(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function p(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,v=0;function m(t,e){var r,n,o;if(e.singleton){var i=v++;r=h||(h=a(e)),n=d.bind(null,r,i,!1),o=d.bind(null,r,i,!0)}else r=a(e),n=p.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=s(r[n]);u[o].references--}for(var i=c(t,e),a=0;a<r.length;a++){var f=s(r[a]);0===u[f].references&&(u[f].updater(),u.splice(f,1))}r=i}}}},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n)()(!1);o.push([t.i,"h1,\r\nh2 {\r\n  font-family: Lato;\r\n}\r\n\r\n.numbers {\r\n  height: 100px;\r\n  padding: 1rem;\r\n  margin-bottom: 1rem;\r\n\r\n  background-color: whitesmoke;\r\n\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n",""]),e.default=o},function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(6),e),o(r(7),e),o(r(8),e),o(r(9),e)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},function(t,e,r){"use strict";var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],u=0,s=i.length;u<s;u++,o++)n[o]=i[u];return n};Object.defineProperty(e,"__esModule",{value:!0}),e.BasicQuicksort=void 0;var o=function(){function t(){}return t.prototype.sort=function(t){if(!(t.length<=1)){var e=t[t.length-1],r=t.filter((function(t){return t<e})),o=t.filter((function(t){return t>e}));this.sort(r),this.sort(o),t.splice.apply(t,n([0,t.length],r,t.filter((function(t){return t===e})),o))}},t}();e.BasicQuicksort=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LomutoQuicksort=void 0;var n=function(){function t(){}return t.prototype.sort=function(t,e,r){if(e<r){var n=this.partition(t,e,r);this.sort(t,e,n-1),this.sort(t,n+1,r)}},t.prototype.partition=function(t,e,r){for(var n,o,i=t[r],u=e,s=e;s<=r;s+=1)t[s]<i&&(n=[t[s],t[u]],t[u]=n[0],t[s]=n[1],u+=1);return t[r]<t[u]&&(o=[t[r],t[u]],t[u]=o[0],t[r]=o[1]),u},t}();e.LomutoQuicksort=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NativeQuicksort=void 0;var n=function(){function t(){}return t.prototype.sort=function(t){t.length<=1||(t=t.sort((function(t,e){return t-e})))},t}();e.NativeQuicksort=n},function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),o(r(11),e)},function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.QuicksortSorter=void 0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(r(12).DivideConquerSorter);e.QuicksortSorter=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DivideConquerSorter=void 0;var n=function(){function t(t){this.sorterAlgorithm=t}return t.prototype.sort=function(t){t.length>1&&this.sorterAlgorithm.sort(t,0,t.length-1)},t}();e.DivideConquerSorter=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createHTMLWriter=e.HTMLWriterFactory=void 0;var n=function(){function t(t){this.htmlElement=t,this.htmlContent=[]}return t.prototype.renderHTML=function(){this.htmlElement.innerHTML=this.htmlContent.join("")},t.prototype.push=function(t){this.htmlContent.push(t),this.renderHTML()},t}();e.HTMLWriterFactory=n,e.createHTMLWriter=function(t){var e=document.getElementById(t);return null==e&&((e=document.createElement("div")).setAttribute("id",t),document.body.appendChild(e)),new n(e)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Timer=void 0;var n=function(){function t(){this.startTime=(new Date).getTime(),this.endTime=this.startTime}return t.prototype.start=function(){this.startTime=(new Date).getTime()},t.prototype.end=function(){this.endTime=(new Date).getTime()},t.prototype.elapsedTime=function(){return this.endTime-this.startTime},t}();e.Timer=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.numbers=void 0,e.numbers=[];for(var n=0,o=1e5;n<o;n+=1)e.numbers.push(Math.round(Math.random()*o*(Math.random()<.5?-1:1)))}]);