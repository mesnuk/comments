(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(t,e,n){t.exports={form:"QuoteForm_form__PY4DV",loading:"QuoteForm_loading__3avhx",control:"QuoteForm_control__3hGX3",actions:"QuoteForm_actions__3kakL"}},function(t,e,n){t.exports={header:"MainNavigation_header___oaJM",logo:"MainNavigation_logo__U_uXl",nav:"MainNavigation_nav__1qeHo",active:"MainNavigation_active__3VQNb"}},,function(t,e,n){t.exports={form:"NewCommentForm_form__I5CuD",loading:"NewCommentForm_loading__3Uj0g",control:"NewCommentForm_control__3MWae",actions:"NewCommentForm_actions__1jJ99"}},,,,function(t,e,n){t.exports={list:"QuoteList_list__1Pk3k",sorting:"QuoteList_sorting__3sYk2"}},,function(t,e,n){t.exports={item:"QuoteItem_item__1uPHo"}},,,function(t,e,n){t.exports={spinner:"LoadingSpinner_spinner__uiXgx"}},function(t,e,n){t.exports={noquotes:"NoQuotesFound_noquotes__2zRee"}},function(t,e,n){t.exports={quote:"HighlightedQuote_quote__1Zlkf"}},function(t,e,n){t.exports={comments:"Comments_comments__1w293"}},function(t,e,n){t.exports={item:"CommentItem_item__1ZCq9"}},function(t,e,n){t.exports={comments:"CommentsList_comments__CgfUI"}},function(t,e,n){t.exports={card:"Card_card__t5hYT"}},function(t,e,n){t.exports={main:"Layout_main__3YPP-"}},function(t,e,n){t.exports=n(62)},,,,,,,,,function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(19),a=n.n(r),o=n(3),c=n(0),i=n.n(c),u=(n(40),n(1)),s=n(20),l=n.n(s),f=function(t){return i.a.createElement("li",{className:l.a.item},i.a.createElement("figure",null,i.a.createElement("blockquote",null,i.a.createElement("p",null,t.text)),i.a.createElement("figcaption",null,t.author)),i.a.createElement(o.b,{className:"btn",to:"/comments/quotes/".concat(t.id)},"View Fullscreen"))},m=n(18),h=n.n(m),p=function(t){var e,n,r=Object(u.h)(),a=Object(u.i)(),o="asc"===new URLSearchParams(a.search).get("sort"),s=(e=t.quotes,n=o,e.sort(function(t,e){return n?t.id>e.id?1:-1:t.id<e.id?1:-1}));return i.a.createElement(c.Fragment,null,i.a.createElement("div",{className:h.a.sorting},i.a.createElement("button",{onClick:function(){r.push({pathname:a.pathname,search:"?sort=".concat(o?"desc":"asc")})}},"Sort ",o?"Descending":"Ascending")),i.a.createElement("ul",{className:h.a.list},s.map(function(t){return i.a.createElement(f,{key:t.id,id:t.id,author:t.author,text:t.text})})))},d=n(23),v=n.n(d),y=function(){return i.a.createElement("div",{className:v.a.spinner})},g=n(24),E=n.n(g),w=function(){return i.a.createElement("div",{className:E.a.noquotes},i.a.createElement("p",null,"No quotes found!"),i.a.createElement(o.b,{className:"btn",to:"/comments/new-quote"},"Add a Quote"))},b=n(10),x=n(7),_=n(9);function N(){N=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(O){i=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),c=new _(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===l)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var l={};function f(){}function m(){}function h(){}var p={};i(p,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(j([])));v&&v!==e&&n.call(v,a)&&(p=v);var y=h.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(a,o){function c(){return new e(function(r,c){!function r(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,c,i)},function(t){r("throw",t,c,i)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,i)})}i(u.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=h,i(y,"constructor",h),i(h,"constructor",m),m.displayName=i(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(E.prototype),i(E.prototype,o,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then(function(t){return t.done?t.value:c.next()})},g(y),i(y,c,"Generator"),i(y,a,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function j(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}var L=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(c.useReducer)(j,{status:e?"pending":null,data:null,error:null}),r=Object(_.a)(n,2),a=r[0],o=r[1],i=Object(c.useCallback)(function(){var e=Object(x.a)(N().mark(function e(n){var r;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:"SEND"}),e.prev=1,e.next=4,t(n);case 4:r=e.sent,o({type:"SUCCESS",responseData:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(b.a)({sendRequest:i},a)};function O(){O=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(L){i=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),c=new _(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===l)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var l={};function f(){}function m(){}function h(){}var p={};i(p,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(N([])));v&&v!==e&&n.call(v,a)&&(p=v);var y=h.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(a,o){function c(){return new e(function(r,c){!function r(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,c,i)},function(t){r("throw",t,c,i)}):e.resolve(f).then(function(t){l.value=t,c(l)},function(t){return r("throw",t,c,i)})}i(u.arg)}(a,o,r,c)})}return r=r?r.then(c,c):c()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=h,i(y,"constructor",h),i(h,"constructor",m),m.displayName=i(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(E.prototype),i(E.prototype,o,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then(function(t){return t.done?t.value:c.next()})},g(y),i(y,c,"Generator"),i(y,a,function(){return this}),i(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var k="https://comments-7cdef-default-rtdb.europe-west1.firebasedatabase.app";function q(){return C.apply(this,arguments)}function C(){return(C=Object(x.a)(O().mark(function t(){var e,n,r,a,o;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,e.ok){t.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(a in r=[],n)o=Object(b.a)({id:a},n[a]),r.push(o);return t.abrupt("return",r);case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function S(t){return F.apply(this,arguments)}function F(){return(F=Object(x.a)(O().mark(function t(e){var n,r,a;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"/quotes/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error(r.message||"Could not fetch quote.");case 8:return a=Object(b.a)({id:e},r),t.abrupt("return",a);case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}function P(t){return I.apply(this,arguments)}function I(){return(I=Object(x.a)(O().mark(function t(e){var n,r;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(t){return A.apply(this,arguments)}function A(){return(A=Object(x.a)(O().mark(function t(e){var n,r;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:r.name});case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}function G(t){return Q.apply(this,arguments)}function Q(){return(Q=Object(x.a)(O().mark(function t(e){var n,r,a,o,c;return O().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"/comments/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,n.ok){t.next=8;break}throw new Error(r.message||"Could not get comments.");case 8:for(o in a=[],r)c=Object(b.a)({id:o},r[o]),a.push(c);return t.abrupt("return",a);case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}var T=function(){var t=L(q,!0),e=t.sendRequest,n=t.status,r=t.data,a=t.error;return Object(c.useEffect)(function(){e()},[e]),"pending"===n?i.a.createElement("div",{className:"centered"},i.a.createElement(y,null)):a?i.a.createElement("p",{className:"centered focused"},a):"completed"!==n||r&&0!==r.length?i.a.createElement(p,{quotes:r}):i.a.createElement(w,null)},D=n(25),Y=n.n(D),M=function(t){return i.a.createElement("figure",{className:Y.a.quote},i.a.createElement("p",null,t.text),i.a.createElement("figcaption",null,t.author))},U=n(26),J=n.n(U),H=n(14),V=n.n(H),X=function(t){var e=Object(c.useRef)(),n=L(R),r=n.sendRequest,a=n.status,o=n.error,u=t.onAddedComment;Object(c.useEffect)(function(){"completed"!==a||o||u()},[a,o,u]);var s=function(n){n.preventDefault();var a=e.current.value;r({commentData:{text:a},quoteId:t.quoteId})};return i.a.createElement("form",{className:V.a.form,onSubmit:s},"pending"===a&&i.a.createElement("div",{className:"centered"},i.a.createElement(y,null)),i.a.createElement("div",{className:V.a.control,onSubmit:s},i.a.createElement("label",{htmlFor:"comment"},"Your Comment"),i.a.createElement("textarea",{id:"comment",rows:"5",ref:e})),i.a.createElement("div",{className:V.a.actions},i.a.createElement("button",{className:"btn"},"Add Comment")))},Z=n(27),z=n.n(Z),B=function(t){return i.a.createElement("li",{className:z.a.item},i.a.createElement("p",null,t.text))},W=n(28),K=n.n(W),$=function(t){return i.a.createElement("ul",{className:K.a.comments},t.comments.map(function(t){return i.a.createElement(B,{key:t.id,text:t.text})}))},tt=function(){var t=Object(c.useState)(!1),e=Object(_.a)(t,2),n=e[0],r=e[1],a=Object(u.j)().quoteId,o=L(G),s=o.sendRequest,l=o.status,f=o.data;Object(c.useEffect)(function(){s(a)},[a,s]);var m,h=Object(c.useCallback)(function(){s(a)},[s,a]);return"pending"===l&&(m=i.a.createElement("div",{className:"centered"},i.a.createElement(y,null))),"completed"===l&&f&&f.length>0&&(m=i.a.createElement($,{comments:f})),"completed"!==l||f&&0!==f.length||(m=i.a.createElement("p",{className:"centered"},"No comments were added yet!")),i.a.createElement("section",{className:J.a.comments},i.a.createElement("h2",null,"User Comments"),!n&&i.a.createElement("button",{className:"btn",onClick:function(){r(!0)}},"Add a Comment"),n&&i.a.createElement(X,{quoteId:a,onAddedComment:h}),m)},et=function(){var t=Object(u.k)(),e=Object(u.j)().quoteId,n=L(S,!0),r=n.sendRequest,a=n.status,s=n.data,l=n.error;return Object(c.useEffect)(function(){r(e)},[r,e]),"pending"===a?i.a.createElement("div",{className:"centered"},i.a.createElement(y,null)):l?i.a.createElement("p",{className:"centered"},l):s.text?i.a.createElement(c.Fragment,null,i.a.createElement(M,{text:s.text,author:s.author}),i.a.createElement(u.c,{path:t.path,exact:!0},i.a.createElement("div",{className:"centered"},i.a.createElement(o.b,{className:"btn--flat",to:"".concat(t.url,"/comments")},"Load Comments"))),i.a.createElement(u.c,{path:"".concat(t.path,"/comments")},i.a.createElement(tt,null))):i.a.createElement("p",null,"No quote found!")},nt=n(29),rt=n.n(nt),at=function(t){return i.a.createElement("div",{className:rt.a.card},t.children)},ot=n(11),ct=n.n(ot),it=function(t){var e=Object(c.useState)(!1),n=Object(_.a)(e,2),r=n[0],a=n[1],o=Object(c.useRef)(),s=Object(c.useRef)();return i.a.createElement(c.Fragment,null,i.a.createElement(u.a,{when:r,message:function(t){return"Are you sure you want to leave? All your entered data will be lost!"}}),i.a.createElement(at,null,i.a.createElement("form",{onFocus:function(){a(!0)},className:ct.a.form,onSubmit:function(e){e.preventDefault();var n=o.current.value,r=s.current.value;t.onAddQuote({author:n,text:r})}},t.isLoading&&i.a.createElement("div",{className:ct.a.loading},i.a.createElement(y,null)),i.a.createElement("div",{className:ct.a.control},i.a.createElement("label",{htmlFor:"author"},"Author"),i.a.createElement("input",{type:"text",id:"author",ref:o})),i.a.createElement("div",{className:ct.a.control},i.a.createElement("label",{htmlFor:"text"},"Text"),i.a.createElement("textarea",{id:"text",rows:"5",ref:s})),i.a.createElement("div",{className:ct.a.actions},i.a.createElement("button",{onClick:function(){a(!1)},className:"btn"},"Add Quote")))))},ut=function(){var t=L(P),e=t.sendRequest,n=t.status,r=Object(u.h)();Object(c.useEffect)(function(){"completed"===n&&r.push("/quotes")},[n,r]);return i.a.createElement(it,{isLoading:"pending"===n,onAddQuote:function(t){e(t)}})},st=function(){return i.a.createElement("div",{className:"centered"},i.a.createElement("p",null,"Page not found!"))},lt=n(30),ft=n.n(lt),mt=n(12),ht=n.n(mt),pt=function(){return i.a.createElement("header",{className:ht.a.header},i.a.createElement("div",{className:ht.a.logo},"Great Quotes"),i.a.createElement("nav",{className:ht.a.nav},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.c,{to:"/comments/quotes",activeClassName:ht.a.active},"All Quotes")),i.a.createElement("li",null,i.a.createElement(o.c,{to:"/comments/new-quote",activeClassName:ht.a.active},"Add a Quote")))))},dt=function(t){return i.a.createElement(c.Fragment,null,i.a.createElement(pt,null),i.a.createElement("main",{className:ft.a.main},t.children))};var vt=function(){return i.a.createElement(dt,null,i.a.createElement(u.e,null,i.a.createElement(u.c,{path:"/comments/",exact:!0},i.a.createElement(u.b,{to:"/comments/quotes"})),i.a.createElement(u.c,{path:"/comments/quotes",exact:!0},i.a.createElement(T,null)),i.a.createElement(u.c,{path:"/comments/quotes/:quoteId"},i.a.createElement(et,null)),i.a.createElement(u.c,{path:"/comments/new-quote"},i.a.createElement(ut,null)),i.a.createElement(u.c,{path:"*"},i.a.createElement(st,null))))};a.a.createRoot(document.getElementById("root")).render(i.a.createElement(o.a,null,i.a.createElement(vt,null)))}],[[31,2,1]]]);
//# sourceMappingURL=main.f4e9b228.chunk.js.map