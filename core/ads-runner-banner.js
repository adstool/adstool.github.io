/**
 * adsRunner banner
 * @version 1.1.2
 * @homepage https://adstool.github.io/
 * @copyright Copyright © 2020-present BravePham
 * @license ISC
 */
function groupBy(e,i){return e.reduce(function(e,t,n,r){var o=arguments.length<=4||void 0===arguments[4]?i(t):arguments[4];return(e[o]||(e[o]=[])).push(t),e},{})}window.sheetrock||function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("sheetrock",[],t):"object"==typeof exports?exports.sheetrock=t():e.sheetrock=t()}(this,function(){return o={},n.m=r=[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){function e(e){if(e&&"SheetrockError"===e.name&&o&&o.update&&o.update({failed:!0}),t.callback)t.callback(e,r,i);else if(e)throw e}var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,r=null,o=null,i=null;try{r=new s.default(a({target:this},t),!!n),o=new u.default(r),i=new l.default(o)}catch(t){e(t)}return n?i.loadData(n,e):r&&o&&i&&(0,c.default)(i,e),this}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=r(n(1)),u=r(n(5)),l=r(n(6)),i=n(2),c=r(n(8));a(o,{defaults:i.defaults,version:"1.1.4"});try{window.jQuery.fn.sheetrock=o}catch(e){}t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2)),s=n(3),o=n(4),u=(r=o)&&r.__esModule?r:{default:r};t.default=function e(){var t,n,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=1<arguments.length&&void 0!==arguments[1]&&arguments[1];(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.user=function(e){var t={};if(t.target=(0,s.extractElement)(e.target),t.fetchSize=Math.max(0,parseInt(e.fetchSize,10)||0),!t.target&&!e.callback&&!a.defaults.callback)throw new u.default("No element targeted or callback provided.");return i({},a.defaults,e,t)}((t=r,n={},Object.keys(t).forEach(function(e){!{}.hasOwnProperty.call(a.legacyOptions,e)?n[e]=t[e]:n[a.legacyOptions[e]]=t[e]}),n)),this.request=function(n,e){if(e)return{data:e};var r=null;if(Object.keys(a.sheetTypes).forEach(function(e){var t=a.sheetTypes[e];t.keyFormat.test(n.url)&&t.gidFormat.test(n.url)&&(r=t)}),r){var t=n.url.match(r.keyFormat)[1];return{key:t,gid:n.url.match(r.gidFormat)[1],apiEndpoint:r.apiEndpoint.replace("%key%",t)}}throw new u.default("No key/gid in the provided URL.")}(this.user,o),this.requestIndex=this.request.key+"_"+this.request.gid+"_"+this.user.query},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={2014:{apiEndpoint:"https://docs.google.com/spreadsheets/d/%key%/gviz/tq?",keyFormat:new RegExp("spreadsheets/d/([^/#]+)","i"),gidFormat:new RegExp("gid=([^/&#]+)","i")},2010:{apiEndpoint:"https://spreadsheets.google.com/tq?key=%key%&",keyFormat:new RegExp("key=([^&#]+)","i"),gidFormat:new RegExp("gid=([^/&#]+)","i")}};t.defaults={url:"",query:"",target:null,fetchSize:0,labels:[],rowTemplate:null,callback:null,reset:!1},t.legacyOptions={sql:"query",resetStatus:"reset",chunkSize:"fetchSize",rowHandler:"rowTemplate"},t.sheetTypes=n},function(e,t){"use strict";function o(e,t){return"<"+t+">"+e+"</"+t+">"}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.append=function(e,t){e&&e.insertAdjacentHTML&&e.insertAdjacentHTML("beforeEnd",t)},t.extractElement=function(e){var t=e;return"object"===(void 0===t?"undefined":n(t))&&t.jquery&&t.length&&(t=t[0]),t&&t.nodeType&&1===t.nodeType?t:null},t.getCellValue=function(e){var t=e?e.f||e.v||e:"";return t instanceof Array&&(t=t.join("")),"object"===(void 0===t?"undefined":n(t))?"":(""+t).replace(/^\s+|\s+$/,"")},t.hasClass=function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},t.isTable=function(e){return e&&"TABLE"===e.tagName},t.toHTML=function(t){var n=t.num?"td":"th",r="";return Object.keys(t.cells).forEach(function(e){r+=o(t.cells[e],n)}),o(r,"tr")},t.wrapTag=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,Error),r);function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n.name="SheetrockError",n.code=t,n.message=e,n}t.default=n,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e},a=n(4),s=(r=a)&&r.__esModule?r:{default:r},u={defaults:{failed:!1,header:0,labels:null,loaded:!1,offset:0},store:{}},l=(i(c,[{key:"update",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};u.store[this.index]=o(this.state,e)}},{key:"state",get:function(){var e,t={}.hasOwnProperty.call(u.store,this.index),n=this.options.user.reset||this.options.request.data;return t&&!n||(e={labels:t?u.store[this.index].labels:null},u.store[this.index]=o({},u.defaults,e)),u.store[this.index]}},{key:"url",get:function(){var e=this.options.user.fetchSize,t=e?" limit "+(e+1)+" offset "+this.state.offset:"",n=["gid="+encodeURIComponent(this.options.request.gid),"tq="+encodeURIComponent(this.options.user.query+t)];return this.options.request.apiEndpoint+n.join("&")}}]),c);function c(e){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),this.options=e,this.index=e.requestIndex,this.state.failed)throw new s.default("A previous request for this resource failed.");if(this.state.loaded)throw new s.default("No more rows to load!")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.default=l,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e},i=r(n(7)),a=r(n(4)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3)),u=(o(l,[{key:"setAttributes",value:function(){var e=this.options.user.fetchSize,n=this.raw.table.rows,t=this.raw.table.cols,r={last:n.length-1,rowNumberOffset:this.request.state.header||0},o=this.request.state.labels;this.request.state.offset||(o=t.map(function(e,t){return e.label?e.label.replace(/\s/g,""):(r.last+=1,r.rowNumberOffset=1,s.getCellValue(n[0].c[t])||e.id)}),this.request.update({header:r.rowNumberOffset,labels:o,offset:this.request.state.offset+r.rowNumberOffset})),(!e||n.length-r.rowNumberOffset<e)&&(r.last+=1,this.request.update({loaded:!0}));var i=this.options.user.labels,a=i&&i.length===o.length;r.labels=a?i:o,this.attributes=r}},{key:"setOutput",value:function(){var r=this;this.rows=[],this.request.state.offset||this.attributes.rowNumberOffset||this.rows.push(new i.default(0,this.attributes.labels,this.attributes.labels)),this.raw.table.rows.forEach(function(e,t){var n;e.c&&t<r.attributes.last&&(n=r.request.state.offset+t+1-r.attributes.rowNumberOffset,r.rows.push(new i.default(n,e.c,r.attributes.labels)))}),this.request.update({offset:this.request.state.offset+this.options.user.fetchSize})}},{key:"setHTML",value:function(){var e=this.options.user.target,t=this.options.user.rowTemplate||s.toHTML,n=s.isTable(e),r=e&&s.hasClass(e,"sheetrock-header"),o="",i="";this.rows.forEach(function(e){e.num?i+=t(e):(n||r)&&(o+=t(e))}),n&&(o=s.wrapTag(o,"thead"),i=s.wrapTag(i,"tbody")),s.append(e,o+i),this.html=o+i}},{key:"loadData",value:function(e,t){this.raw=e;try{this.setAttributes(),this.setOutput()}catch(e){return void t(new a.default("Unexpected API response format."))}this.setHTML(),t(null)}}]),l);function l(e){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,l),this.request=e,this.options=e.options}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.default=u,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e},o=n(3),i=(r(a,[{key:"cells",get:function(){var n=this,r={};return this.labels.forEach(function(e,t){r[e]=n.cellsArray[t]}),r}}]),a);function a(e,t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,a),this.num=e,this.cellsArray=t.map(o.getCellValue),this.labels=n}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(4),a=(r=o)&&r.__esModule?r:{default:r},s=window.document.getElementsByTagName("head")[0],u=0;t.default=function(t,n){function r(){s.removeChild(o),delete window[i]}function e(){r(),n(new a.default("Request failed."))}var o=window.document.createElement("script"),i="_sheetrock_callback_"+u;u+=1,window[i]=function(e){r(),t.loadData(e,n)},o.addEventListener&&(o.addEventListener("error",e,!1),o.addEventListener("abort",e,!1)),o.type="text/javascript",o.src=t.request.url+"&tqx=responseHandler:"+i,s.appendChild(o)},e.exports=t.default}],n.c=o,n.p="",n(0);function n(e){if(o[e])return o[e].exports;var t=o[e]={exports:{},id:e,loaded:!1};return r[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}}),function(e){("object"!=typeof exports||"undefined"==typeof module)&&"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})}function u(e){return e&&void 0!==e.length}function n(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(e,this)}function o(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e,t=1===n._state?r.onFulfilled:r.onRejected;if(null!==t){try{e=t(n._value)}catch(e){return void s(r.promise,e)}a(r.promise,e)}else(1===n._state?a:s)(r.promise,n._value)})):n._deferreds.push(r)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void c((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){s(t,e)}var r,o}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function c(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var t=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(r,e){var t=new this.constructor(n);return o(this,new function(e,t,n){this.onFulfilled="function"==typeof r?r:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(0,e,t)),t},i.prototype.finally=e,i.all=function(t){return new i(function(o,i){if(!u(t))return i(new TypeError("Promise.all accepts an array"));var a=Array.prototype.slice.call(t);if(0===a.length)return o([]);for(var s=a.length,e=0;a.length>e;e++)!function t(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if("function"==typeof r)return r.call(e,function(e){t(n,e)},i),0}a[n]=e,0==--s&&o(a)}catch(e){i(e)}}(e,a[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){if(!u(o))return t(new TypeError("Promise.race accepts an array"));for(var n=0,r=o.length;n<r;n++)i.resolve(o[n]).then(e,t)})},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){t(e,0)},i._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in r?r.Promise.prototype.finally||(r.Promise.prototype.finally=e):r.Promise=i});var runnerDom=new function(){return{write:function(e,t){e=e||runnerDom.getCurrentScript();var n=document.createElement("div");n.innerHTML=t,runnerDom.insertNode(e,n,"after")},insertNode:function(n,e,r){e.childNodes.forEach(function(e){var t=runnerDom.createNode(n,e,r);"after"===r&&(n=t)})},createNode:function(e,t,n){var r=null;switch(t.nodeType){case 1:r=document.createElement(t.tagName),"script"===t.tagName.toLowerCase()&&(r.async=t.async),Array.prototype.slice.call(t.attributes).forEach(function(e){r.setAttribute(e.name,e.value)}),runnerDom.insertNode(r,t);break;case 2:break;case 3:r=document.createTextNode(t.textContent);break;case 8:r=document.createComment(t.textContent);break;default:r=t}return"after"===n?runnerDom.insertAfter(r,e):e.appendChild(r),r},getCurrentScript:function(){return document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1];},insertAfter:function(e,t){try{t.appendChild(e)}catch(e){console.log(e)}}}};function pOnMess(e,t){try{if(e){console.log("AdRunnerBanner: "+e);var n=document.getElementById("ads-runner-banner");n&&(n.innerHTML+="<p>"+e+"</p>")}else if(t)throw new Error("AdRunnerBanner: Time expired!")}catch(e){throw new Error(e)}}function phat8(e){if(!e)return"";var t="",t=-1!==e.indexOf("3gnuD=")?e.replace("3gnuD=","=="):e.replace("3mahP=","");return parseInt(window.atob(t))}function thien8(e){return e<(new Date).getTime()}function visibleArea(e,t){t=t||0;var n=window.innerHeight,r=e.getBoundingClientRect().top-t,o=e.getBoundingClientRect().bottom+t,i=o-r;return n<r||o<=0?0:0<=r&&o<=n||r<0&&n<o?1:r<0&&o<=n?-o/i:0<=r&&n<o?(n-r)/i:0}function pWriter(e,t,n){t=unescape(t),e.style.height="auto",e.innerHTML="",setTimeout(function(){return runnerDom.write(e,t),n()},100)}function pSequence(e,n){return e.reduce(function(e,t){return e.then(function(e){return e?Promise.resolve(e):n(t)})},Promise.resolve())}function pProcess(a){try{return new Promise(function(i,e){return pOnMess("",window._ueu_),pWriter(a.el,a.task,function(){var r=a.wait||8,o=setInterval(function(){var t,n,e=a.el.clientHeight;49<e?(pOnMess("["+a.id+"] has ad (size: "+a.el.clientWidth+"x"+e+")",window._ueu_),clearInterval(o),a.view?(t=a.view||7,n=setInterval(function(){var e=visibleArea(a.el);(1===e||e<-.25||.25<e)&&(t--,a.debug&&pOnMess("viewability remaining "+t+"s",window._ueu_)),t<=0&&(clearInterval(n),i())},1e3)):setTimeout(function(){i()},1e3*(a.cycle||16)),a.el.style.height=e+"px",a.el.parentNode.style.visibility="visible"):a.debug&&pOnMess("["+a.id+"] check ad",window._ueu_),0===r&&(pOnMess("["+a.id+"] not ad",window._ueu_),clearInterval(o),i()),r--},1e3)})})}catch(e){pOnMess(e)}}function AdBannerCore(){var e=adBannerPack[0],t=e[0].placement;if(t){adBannerPack.shift();var n=document.querySelector('[data-ad-runner="'+t+'"]');if(n){var r=document.createElement("div");r.style.cssText="position:relative;visibility:hidden;display:flex;flex-flow:column;justify-content:center;align-items:center;";var o=document.createElement("div");o.style.transform="height ease 0.5s",r.appendChild(o),n.appendChild(r);var i=[];for(var a in window._ueu_=thien8(phat8(adBannerActive)),e){var s=e[a].ad_cycle?parseInt(e[a].ad_cycle):16,u=e[a].ad_wait?parseInt(e[a].ad_wait):8,l=e[a].ad_viewability?parseInt(e[a].ad_viewability):15,c="TRUE"===e[a].ad_debug;i.push({id:t+"-"+a,el:o,view:l,cycle:s,wait:u,task:e[a].ad_code,debug:c})}return pSequence(i,pProcess)}console.log("Error ! The query select element is non-existent.")}else console.log("Error ! Placement is empty.")}function pSheetRockConvert(e,t){if(!e||0===e.length)return[];for(var n=[],r=0;r<e.length;r++){for(var o={},i=0;i<t;i++)o[e[r].labels[i]]=e[r].cellsArray[i]||"";n.push(o)}return n}function pSheetRock(t,n,i){return new Promise(function(o,e){try{return sheetrock({url:t,query:n,callback:function(e,t,n){e&&o([]);var r=pSheetRockConvert(n.rows||[],i);o(r)}})}catch(e){console.log(e),o([])}})}function pAdsStart(n){return new Promise(function(t,e){try{return window.adBannerPack=n||[],new AdBannerCore}catch(e){console.log(e),t(!1)}})}function AdRunnerBanner(){var e,t,n,i,r=document.domain;if(console.log("--\x3e AdsRunner Banner For Domain: "+r),localStorage&&(!(t=localStorage.getItem("AdRunnerBanner"))||(n=JSON.parse(t)).expired>(new Date).getTime()&&(e=n.data,window.adBannerActive=n.token)),!e)return pSheetRock("https://docs.google.com/spreadsheets/d/1Qbczfw0lD3kh4RtmC2TIGJF0o95YX9OLgHUbUaDXYl4/edit#gid=0",'select * where A = "'+r+'"',6).then(function(e){if(e.length){i=e.cache||1;var t=e[e.length-1];return console.log,window.adBannerActive=t.active,pSheetRock(t.link,"select *",6)}console.log("AdsRunner: No data found from domain name")}).then(function(e){if(e){var t=groupBy(e,function(e){return e.placement}),n={expired:(new Date).getTime()+6e4*parseInt(i),data:t,token:window.adBannerActive};localStorage&&localStorage.setItem("AdRunnerBanner",JSON.stringify(n));var r=Promise.resolve();for(var o in t)r=r.then(pAdsStart([t[o]]))}});var o=Promise.resolve();for(var a in e)o=o.then(pAdsStart([e[a]]))}AdRunnerBanner();