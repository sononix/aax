parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({6:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
"use strict";require("./main.scss"),console.log("Setup in prfffocess..."),function(){var o=document.querySelector(".burger"),t=document.querySelector("#"+o.dataset.target);o.addEventListener("click",function(){o.classList.toggle("is-active"),t.classList.toggle("is-active")}),$(".column.card-1").css({opacity:0}),$(".column.card-2").css({opacity:0}),$(".first").waypoint(function(o){"down"===o&&(e(".navbar","open","closed"),e(".button.is-outlined.is-small","open","closed")),"up"===o&&(e(".navbar","closed","open"),e(".button.is-outlined.is-small","closed","open"))}),$(".first").waypoint(function(o){$(".column.card-1").fadeTo("slow",1,function(){}),setTimeout(function(){$(".column.card-2").fadeTo("slow",1,function(){})},500)});$(window).on("scroll",function(){$(window).scrollTop()>=800?$("#scrolltotop").addClass("visible"):$("#scrolltotop").removeClass("visible")}),$("#scrolltotop a").on("click",function(){return $("html, body").animate({scrollTop:0},300),!1});document.querySelector(".navbar");var e=function(o,t,e){(o=document.querySelector(o)).setAttribute("data-state",o.getAttribute("data-state")===t?e:t)}}();
},{"./main.scss":6}]},{},[4], null)
//# sourceMappingURL=/main.cc28feea.map