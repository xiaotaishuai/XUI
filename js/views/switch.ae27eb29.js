!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/views/switch/index.js")}({"./src/styles/code.js":function(e,t){var r=[],n={};n.elem=$("pre"),n.elem.each((function(){r.push(this)})),r.reverse().forEach((function(e){var t=$(e),r=t.html();(t.attr("lay-encode")||n.encode)&&(r=r.replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")),t.html('<ol class="layui-code-ol"><li>'+r.replace(/[\r\t\n]+/g,"</li><li>")+"</li></ol>"),t.find(">.layui-code-h3")[0]||t.prepend('<h3 class="layui-code-h3">'+(t.attr("lay-title")||"code")+"</h3>"),t.addClass("layui-box layui-code-view"),(t.attr("lay-skin")||n.skin)&&t.addClass("layui-code-"+(t.attr("lay-skin")||n.skin));var i=t.find(">.layui-code-ol");(i.find("li").length/100|0)>0&&i.css("margin-left",(i.find("li").length/100|0)+"px"),t.attr("lay-height")&&i.css("max-height",t.attr("lay-height"))}))},"./src/styles/code.scss":function(e,t,r){},"./src/views/switch/index.js":function(e,t,r){"use strict";r.r(t);r("./src/views/switch/index.scss"),r("./src/styles/code.scss"),r("./src/styles/code.js")},"./src/views/switch/index.scss":function(e,t,r){}});