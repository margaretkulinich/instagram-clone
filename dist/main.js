(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);a&&r[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),t.push(p))}},t}},742:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},738:e=>{e.exports=function(e){return e[1]}},99:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(738),i=n.n(a),o=n(705),r=n.n(o),c=n(742),d=n.n(c),s=new URL(n(96),n.b),p=r()(i()),l=d()(s);p.push([e.id,'body{background-color:#fafafa;margin:0;font-family:"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;letter-spacing:1px;height:100vh}.header{height:60px;background-color:#FFF;width:100%;padding:3px 0px;box-shadow:0px 1px 0px #DBDBDB;box-sizing:border-box;position:fixed;z-index:3}.feed{max-width:975px;margin:auto}.header-links-block{display:flex;align-items:center;margin-left:auto;margin-right:auto;padding:10px 20px 0;height:100%;justify-content:space-between;cursor:pointer}.logo-instagram-link{text-decoration:none;height:100%;cursor:pointer}.logo-instagram{max-height:80%}.nav-avatar-bar{height:100%}.nav-avatar{border:2px solid grey;border-radius:100%;max-height:50%;margin:2px}.avatar{background:url('+l+') no-repeat center/100%;border-radius:100%;width:150px;height:150px;padding:0;cursor:pointer}.profile{margin-left:auto;margin-right:auto;display:flex;flex-direction:row;margin-bottom:44px;padding-top:70px}.profile-avatar,.profile-information{padding:40px 80px}.username{font-size:28px;line-height:32px;font-weight:200}.user-information{display:flex;flex-direction:row;flex-wrap:wrap}.user-information>span{margin-right:20px;font-size:16px}.profile-publications-container{margin-left:auto;margin-right:auto}.nav-publications{display:flex;align-items:center;width:100%;justify-content:center;border-top:1px solid #DBDBDB;height:53px}.nav-publications-link{font-size:12px}.profile-publications{display:flex;flex-wrap:wrap;justify-content:center;margin:0 -14px}.publication{position:relative;height:293px;width:293px;margin:14px;cursor:pointer}.publication::before{display:flex;align-items:center;content:"Click to open";z-index:2;width:100%;height:100%;position:absolute;opacity:0;transition:opacity .3s ease-out;background-color:rgba(0,0,0,0.5);color:#DBDBDB;justify-content:center}.publication:hover::before{opacity:1}.publication-img{height:100%;width:100%;top:0;left:0;object-fit:cover;position:absolute;z-index:1}.nav-avatar-bar{position:relative}.header-popup-body{position:absolute;background-color:white;top:60%;right:-70%;box-shadow:1px 1px 8px #DBDBDB;width:220px;padding:5px 0;border-radius:4px}.pop-up-profile-option{display:inline-block;text-decoration:none;color:black;font-size:13px;padding:7px;width:100%;letter-spacing:normal;box-sizing:border-box}.pop-up-profile-option:hover{background-color:#fafafa}.fas{color:antiquewhite}.fa-user-circle{padding:5px}.fa-times{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:25px}.fa-border-all{padding-right:15px;font-weight:500;color:black}.arrowIcon{position:absolute}.carousel-arrow-wrapper{display:flex;align-items:center;position:absolute;height:100%;font-size:25px;flex-direction:row;justify-content:center;padding:2.5rem;cursor:pointer;z-index:1}.carousel-arrow-wrapper:hover{background-color:rgba(124,124,124,0.667)}#carouselNextButton{right:0}#fullscreenModal{height:100%;width:100%;top:0;left:0;display:block;position:fixed;z-index:4;margin:auto;background-color:rgba(0,0,0,0.7);align-items:center}.fullscreen-img{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);margin:auto;max-width:640px;max-height:768px;display:block;cursor:pointer}.close-button{position:absolute;padding:2.5rem;right:0;cursor:pointer;z-index:2}.close-button:hover{background-color:rgba(124,124,124,0.667)}.noscroll{overflow:hidden}#footer{display:flex;align-items:center;justify-content:center;margin-top:25px}.copyrigth{padding:5px}.hidden{display:none}@media screen and (max-width: 480px){.feed{font-size:14px}.avatar{height:75px;width:75px}.profile-avatar,.profile-information{padding:10px 10px}.user-information>span{margin-right:10px;font-size:12px}}@media screen and (min-width: 481px) and (max-width: 768px){.profile{margin-bottom:20px}.profile-avatar,.profile-information{padding:20px 20px}}@media screen and (max-width: 1024px){.publication{padding-bottom:30%;width:30%;margin:0;height:0}}@media screen and (min-width: 769px) and (max-width: 1024px){.profile-avatar,.profile-information{padding:20px 40px}.publication{margin:10px}.profile-publications{margin:0 -10px}}@media screen and (min-width: 1025px) and (max-width: 1920px){.publication{padding-bottom:30%;width:30%;height:0;margin:10px}.profile-publications{margin:0 -10px}.feed{max-width:1024px;font-size:17px}.avatar{height:170px;width:170px}.user-information>span{margin-right:25px;font-size:18px}}\n',""]);const u=p},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},r=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],p=o[s]||0,l="".concat(s," ").concat(p);o[s]=p+1;var u=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var g=i(m,a);a.byIndex=c,t.splice(c,0,{identifier:l,updater:g,references:1})}r.push(l)}return r}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var c=n(o[r]);t[c].references--}for(var d=a(e,i),s=0;s<o.length;s++){var p=n(o[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},96:(e,t,n)=>{e.exports=n.p+"f3fa5488a7f981e35d8a.jpg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{const e="carouselNextButton",t="carouselPrevButton",a="headerPopupBody",i="carousel-arrow-wrapper",o="fullscreenModal",r="profilePublications",c=["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/6.jpg","./img/7.jpg","./img/8.jpg","./img/9.jpg"],d=document.body,s=c.length;function p(n){const a=n.path.find((t=>t.id===e)),i=n.path.find((e=>e.id===t));if(void 0===n.target.dataset.imgIndex&&!a&&!i)return document.getElementById(o).removeEventListener("click",p),document.getElementById(o).remove(),void d.classList.remove("noscroll");if(a){const e=document.getElementById(t),n=a.dataset.imgIndexToSwitch,i=document.querySelector(`[data-img-index='${n}']`);l(i),u(i,a,e)}else if(i){const t=document.getElementById(e),n=i.dataset.imgIndexToSwitch,a=document.querySelector(`[data-img-index='${n}']`);l(a),u(a,t,i)}}function l(e){const t=document.getElementById(o),n=Array.from(t.children).find((e=>void 0!==e.dataset.imgIndex));n.src=e.src,n.dataset.imgIndex=e.dataset.imgIndex}function u(e,t,n){e.dataset.imageNext?(t.dataset.imgIndexToSwitch=e.dataset.imageNext,t.classList.remove("hidden")):(t.classList.add("hidden"),delete t.dataset.imgIndexToSwitch),e.dataset.imagePrev?(n.dataset.imgIndexToSwitch=e.dataset.imagePrev,n.classList.remove("hidden")):(n.classList.add("hidden"),delete n.dataset.imgIndexToSwitch)}function m(){document.getElementById(a).remove()}function g(e){e.target.id!==a&&m()}var f=n(379),h=n.n(f),x=n(795),b=n.n(x),v=n(569),y=n.n(v),w=n(565),E=n.n(w),I=n(216),B=n.n(I),k=n(589),N=n.n(k),j=n(99),S={};S.styleTagTransform=N(),S.setAttributes=E(),S.insert=y().bind(null,"head"),S.domAPI=b(),S.insertStyleElement=B(),h()(j.Z,S),j.Z&&j.Z.locals&&j.Z.locals,function(){const e=document.getElementById("footer"),t=document.createElement("div");t.id=r,t.className="profile-publications feed";for(let e=0;e<s;e++){const n=document.createElement("div"),a=document.createElement("img");n.className="publication",a.className="publication-img",a.dataset.imgIndex=e,0===e?a.dataset.imageNext=e+1:e===s-1?a.dataset.imagePrev=e-1:(a.dataset.imagePrev=e-1,a.dataset.imageNext=e+1),a.setAttribute("src",c[e]),a.setAttribute("alt",""),n.append(a),t.append(n)}e.before(t)}();const z=document.getElementById("headerPopupNavAvatar"),T=document.getElementById(r);z.addEventListener("click",(e=>{null!==document.getElementById(a)?(document.removeEventListener("click",g),m()):(e.stopPropagation(),function(){const e=document.getElementById("headerPopupContainer"),t=document.createElement("div"),n=document.createElement("a"),i=document.createElement("i");t.className="header-popup-body",t.id=a,n.setAttribute("href","https://www.instagram.com/k____margarita/"),n.setAttribute("target","blank"),n.className="pop-up-profile-option",i.className="far fa-user-circle",n.append(i),n.append("Visit my Instagram account"),t.append(n),e.append(t),document.addEventListener("click",g)}())})),T.addEventListener("click",(n=>{const a=Array.from(n.target.children).find((e=>void 0!==e.dataset.imgIndex));a&&function(n){const a=n.src,r=document.createElement("div"),c=document.createElement("img"),s=document.createElement("div"),l=document.createElement("div"),m=document.createElement("i"),g=document.createElement("div"),f=document.createElement("i"),h=document.createElement("i"),x=n.dataset.imgIndex;l.id=e,g.id=t,l.className=i,g.className=i,m.className="fas fa-arrow-circle-right arrowIcon",f.className="fas fa-arrow-circle-left arrowIcon",c.dataset.imgIndex=x,c.src=a,c.setAttribute("alt","fullImage"),r.id=o,c.className="fullscreen-img",s.className="close-button",h.className="fas fa-times",u(n,l,g),s.append(h),g.append(f),l.append(m),r.append(g),r.append(l),r.append(c),r.append(s),d.classList.add("noscroll"),d.append(r),document.getElementById(o).addEventListener("click",p)}(a)}))})()})();