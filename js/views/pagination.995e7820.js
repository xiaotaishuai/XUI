!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s="./src/views/pagination/index.js")}({"./src/styles/code.js":function(t,e){var i=[],n={};n.elem=$("pre"),n.elem.each((function(){i.push(this)})),i.reverse().forEach((function(t){var e=$(t),i=e.html();(e.attr("lay-encode")||n.encode)&&(i=i.replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")),e.html('<ol class="layui-code-ol"><li>'+i.replace(/[\r\t\n]+/g,"</li><li>")+"</li></ol>"),e.find(">.layui-code-h3")[0]||e.prepend('<h3 class="layui-code-h3">'+(e.attr("lay-title")||"code")+"</h3>"),e.addClass("layui-box layui-code-view"),(e.attr("lay-skin")||n.skin)&&e.addClass("layui-code-"+(e.attr("lay-skin")||n.skin));var s=e.find(">.layui-code-ol");(s.find("li").length/100|0)>0&&s.css("margin-left",(s.find("li").length/100|0)+"px"),e.attr("lay-height")&&s.css("max-height",e.attr("lay-height"))}))},"./src/styles/code.scss":function(t,e,i){},"./src/views/pagination/index.js":function(t,e,i){"use strict";i.r(e);i("./src/views/pagination/index.scss"),i("./src/styles/code.scss"),i("./src/styles/code.js");!function(t,e,i,n){function s(e,i){return this.$el=t(e),this.options=t.extend({},t.fn.pagination.defaults,i),this.options.pageIndex<1&&(this.options.pageIndex=1),this.options.pageIndex>this.options.total&&(this.options.pageIndex=this.options.total),this.options.total=parseInt(this.options.total),this.options.visiblePages=parseInt(this.options.visiblePages),this.options.beforeClick instanceof Function&&this.$el.first().on("beforeClick",this.options.beforeClick),this.options.onPageClick instanceof Function&&this.$el.first().on("onPageClick",this.options.onPageClick),1==this.options.total?this:(this.$el.addClass(this.options.paginationClass),this.show(this.options.pageIndex),this.setupEvents(),this)}s.prototype={constructor:s,destroy:function(){return this.$el.empty(),this.$el.removeData("pagination"),this.$el.off("onPageClick"),this},show:function(t){(t=parseInt(t))<1&&(t=1),t>this.options.total&&(t=this.options.total),this.pageIndex=t,this.$el.trigger("beforeClick",t);var e=this.getPages(t);this.render(e),this.$el.trigger("onPageClick",t)},enable:function(){this.show(this.pageIndex)},disable:function(){this.$el.off("click").on("click","button",(function(t){t.preventDefault()})),this.$el.children().each((function(){var e=t(this);e.hasClass("active")||e.addClass("disabled")}))},buildListItems:function(t){var e=[];if(this.options.first&&e.push(this.buildItem("first",1)),this.options.prev){var i=t.pageIndex>1?t.pageIndex-1:1;e.push(this.buildItem("prev",i))}for(var n=0;n<t.numeric.length;n++)e.push(this.buildItem("page",t.numeric[n]));if(this.options.next){var s=t.pageIndex<this.options.total?t.pageIndex+1:this.options.total;e.push(this.buildItem("next",s))}return this.options.last&&e.push(this.buildItem("last",this.options.total)),this.options.jump&&e.push('前往 <input type="text" maxlength="9"/> 页'),e},buildItem:function(e,i){var n=t("<button></button>"),s=this.options[e]||i;return n.data("page",i),n.data("page-type",e),n.append(s),n},getPages:function(t){var e=Math.floor(this.options.visiblePages/2),i=t-e+1-this.options.visiblePages%2,n=t+e,s=this.options.visiblePages;s>this.options.total&&(s=this.options.total),i<=0&&(i=1,n=s),n>this.options.total&&(i=this.options.total-s+1,n=this.options.total);for(var o=[],a=i;a<=n;)o.push(a),a++;return{pageIndex:t,numeric:o}},render:function(e){var i=this;this.$el.html("");var n=this.buildListItems(e);t.each(n,(function(t,e){i.$el.append(e)})),this.$el.children().each((function(){var n=t(this);switch(n.data("page-type")){case"page":n.data("page")===e.pageIndex&&n.addClass("active");break;case"first":n.toggleClass("disabled",1===e.pageIndex);break;case"last":n.toggleClass("disabled",e.pageIndex===i.options.total);break;case"prev":n.toggleClass("disabled",1===e.pageIndex);break;case"next":n.toggleClass("disabled",e.pageIndex===i.options.total)}}))},setupEvents:function(){var e=this;this.$el.off("click").on("click","button",(function(i){var n=t(this);if(n.hasClass("disabled")||n.hasClass("active"))return!1;i.preventDefault(),e.show(parseInt(n.data("page")))})),this.$el.off("input").on("input","input",(function(t){t.target.value=t.target.value.replace(/\D/g,"")})),this.$el.off("keydown").on("keydown","input",(function(t){13==t.keyCode&&e.show(t.target.value-0)}))},changetotal:function(t,e){this.options.total=t,e&&this.show(e)},getCurrentPage:function(){return this.pageIndex}},t.fn.pagination=function(e){var i=t(this),n=i.data("pagination");return n||i.data("pagination",n=new s(this,e)),i},t.fn.pagination.defaults={total:1,pageIndex:1,visiblePages:5,first:"<",prev:"上一页",next:"下一页",last:">",jump:!0,beforeClick:null,onPageClick:null,paginationClass:"pagination"}}($,window,document),$(".box").pagination({total:25,pageIndex:2,onPageClick:function(t,e){console.log(t,e)}})},"./src/views/pagination/index.scss":function(t,e,i){}});