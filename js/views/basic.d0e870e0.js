!function(e){function t(t){for(var r,l,s=t[0],a=t[1],u=t[2],f=0,p=[];f<s.length;f++)l=s[f],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={4:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=a;o.push(["./src/views/basic/index.js",0]),n()}({"./src/views/basic/index.js":function(e,t,n){"use strict";n.r(t);n("./src/styles/xui.scss"),n("./src/views/basic/index.scss");new Vue({el:"#app",data:{list:[{key:"fl, fr, clearfix, bold, normal",value:"左浮动, 右浮动, 清除浮动, 字体变粗, 字体正常"},{key:"hide, inline-block, inline, block, show, table, flex",value:"分别对应display: none, inline-block, inline, block, table, flex"},{key:"justify-center, justify-around, justify-between",value:"center, space-around, space-between"},{key:"visisble, invisible",value:"分别对应visibility: visible, hidden"},{key:"relative, absolute, fixed",value:"分别对应position: relative, absolute, fixed"},{key:"opacity0, opacity-50, opacity-1",value:"分别对应opacity: 0, 0.5, 1"},{key:"height-auto, height-34, no-border",value:"height高度, border:none"}]}})},"./src/views/basic/index.scss":function(e,t,n){}});