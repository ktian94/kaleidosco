(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(d,b,f){var g=d("./utils/eventTypeAvailable");
var j=d("./shared/camelCasedEventTypes");var c=d("./shared/windowFallbackEventTypes");
var h=d("./shared/prefixHelper");var a={};b.exports=function i(m,l){var n;var o;
var k;l=l||"div";m=m.toLowerCase();if(!(l in a)){a[l]={}}o=a[l];if(m in o){return o[m]
}if(g(m,l)){return o[m]=m}if(m in j){for(k=0;k<j[m].length;k++){n=j[m][k];if(g(n.toLowerCase(),l)){return o[m]=n
}}}for(k=0;k<h.evt.length;k++){n=h.evt[k]+m;if(g(n,l)){h.reduce(k);return o[m]=n
}}if(l!=="window"&&c.indexOf(m)){return o[m]=i(m,"window")}return o[m]=false}},{"./shared/camelCasedEventTypes":2,"./shared/prefixHelper":3,"./shared/windowFallbackEventTypes":4,"./utils/eventTypeAvailable":5}],2:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],3:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],4:[function(b,c,a){c.exports=["transitionend","animationstart","animationend","animationiteration",]
},{}],5:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],6:[function(c,d,b){var a=c("./shared/getEventType");d.exports=function f(j,h,i,g){h=a(j,h);
g=g||false;j.addEventListener(h,i,g)}},{"./shared/getEventType":7}],7:[function(c,f,b){var d=c("@marcom/ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);return g||i}},{"@marcom/ac-prefixer/getEventType":1}],8:[function(c,d,b){var a=function(){var h="";
var g;for(g=0;g<arguments.length;g++){if(g>0){h+=","}h+=arguments[g]}return h};
d.exports=function f(i,h){h=h||a;var g=function(){var j=arguments;var k=h.apply(this,j);
if(!(k in g.cache)){g.cache[k]=i.apply(this,j)}return g.cache[k]};g.cache={};return g
}},{}],9:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)
}return f}}},{}],10:[function(b,c,a){arguments[4][1][0].apply(a,arguments)},{"./shared/camelCasedEventTypes":13,"./shared/prefixHelper":15,"./shared/windowFallbackEventTypes":18,"./utils/eventTypeAvailable":19,dup:1}],11:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":14,"./shared/prefixHelper":15,"./shared/stylePropertyCache":16,"./utils/toCSS":20,"./utils/toDOM":21}],12:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":11,"./shared/prefixHelper":15,"./shared/stylePropertyCache":16,"./shared/styleValueAvailable":17}],13:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],14:[function(c,d,b){var f;d.exports=function a(){if(!f){f=document.createElement("_")
}else{f.style.cssText="";f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null
}},{}],15:[function(b,c,a){arguments[4][3][0].apply(a,arguments)},{dup:3}],16:[function(b,c,a){c.exports={}
},{}],17:[function(c,b,d){var a=c("./stylePropertyCache");var f=c("./getStyleTestElement");
var i=false;var k;var j;var g=function(){var l;if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);
j=false;l=f();try{l.style.width="invalid"}catch(m){j=true}}};b.exports=function h(o,n){var m;
var l;g();if(k){o=a[o].css;return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n
}catch(p){return false}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":14,"./stylePropertyCache":16}],18:[function(b,c,a){arguments[4][4][0].apply(a,arguments)
},{dup:4}],19:[function(b,c,a){arguments[4][5][0].apply(a,arguments)},{dup:5}],20:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;
d.exports=function a(h){var g;if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h
}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],21:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],22:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),mediaQueriesAvailable:b("./mediaQueriesAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":23,"./continuousScrollEventsAvailable":24,"./cookiesAvailable":25,"./cssLinearGradientAvailable":26,"./cssPropertyAvailable":27,"./cssViewportUnitsAvailable":28,"./elementAttributeAvailable":29,"./eventTypeAvailable":30,"./isDesktop":32,"./isHandheld":33,"./isRetina":34,"./isTablet":35,"./localStorageAvailable":36,"./mediaElementsAvailable":37,"./mediaQueriesAvailable":38,"./sessionStorageAvailable":39,"./svgAvailable":40,"./threeDTransformsAvailable":41,"./touchAvailable":42,"./webGLAvailable":43}],23:[function(b,c,a){var g=b("./helpers/globals");
var f=b("@marcom/ac-function/once");var d=function(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("2d"))};c.exports=f(d);
c.exports.original=d},{"./helpers/globals":31,"@marcom/ac-function/once":9}],24:[function(c,f,b){var d=c("@marcom/ac-useragent");
var a=c("./touchAvailable").original;var g=c("@marcom/ac-function/once");function h(){return(!a()||(d.os.ios&&d.os.version.major>=8)||d.browser.chrome)
}f.exports=g(h);f.exports.original=h},{"./touchAvailable":42,"@marcom/ac-function/once":9,"@marcom/ac-useragent":424}],25:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var k=false;var h=g.getDocument();
var j=g.getNavigator();try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";
k=(h.cookie.indexOf("ac_feature_cookie")!==-1);h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(i){}return k}d.exports=f(a);d.exports.original=a},{"./helpers/globals":31,"@marcom/ac-function/once":9}],26:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"@marcom/ac-function/once":9,"@marcom/ac-prefixer/getStyleValue":12}],27:[function(c,d,b){var g=c("@marcom/ac-prefixer/getStyleValue");
var f=c("@marcom/ac-prefixer/getStyleProperty");var h=c("@marcom/ac-function/memoize");
function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)}else{return !!f(j)}}d.exports=h(a);
d.exports.original=a},{"@marcom/ac-function/memoize":8,"@marcom/ac-prefixer/getStyleProperty":11,"@marcom/ac-prefixer/getStyleValue":12}],28:[function(b,c,a){var f=b("@marcom/ac-prefixer/getStyleValue");
var d=b("@marcom/ac-function/once");function g(){return !!f("margin","1vw 1vh")
}c.exports=d(g);c.exports.original=g},{"@marcom/ac-function/once":9,"@marcom/ac-prefixer/getStyleValue":12}],29:[function(b,d,a){var f=b("./helpers/globals");
var g=b("@marcom/ac-function/memoize");function c(h,j){var i=f.getDocument();var k;
j=j||"div";k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c
},{"./helpers/globals":31,"@marcom/ac-function/memoize":8}],30:[function(c,f,b){var a=c("@marcom/ac-prefixer/getEventType");
var g=c("@marcom/ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);
f.exports.original=d},{"@marcom/ac-function/memoize":8,"@marcom/ac-prefixer/getEventType":10}],31:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],32:[function(d,f,b){var a=d("./touchAvailable").original;var h=d("./helpers/globals");
var g=d("@marcom/ac-function/once");function c(){var i=h.getWindow();return(!a()&&!i.orientation)
}f.exports=g(c);f.exports.original=c},{"./helpers/globals":31,"./touchAvailable":42,"@marcom/ac-function/once":9}],33:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("@marcom/ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":32,"./isTablet":35,"@marcom/ac-function/once":9}],34:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":31}],35:[function(f,g,c){var d=f("./isDesktop").original;
var i=f("./helpers/globals");var h=f("@marcom/ac-function/once");var b=600;function a(){var k=i.getWindow();
var j=k.screen.width;if(k.orientation&&k.screen.height<j){j=k.screen.height}return(!d()&&j>=b)
}g.exports=h(a);g.exports.original=a},{"./helpers/globals":31,"./isDesktop":32,"@marcom/ac-function/once":9}],36:[function(c,d,a){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function b(){var j=g.getWindow();var i=false;
try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)}catch(h){}return i
}d.exports=f(b);d.exports.original=b},{"./helpers/globals":31,"@marcom/ac-function/once":9}],37:[function(b,c,a){var g=b("./helpers/globals");
var d=b("@marcom/ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":31,"@marcom/ac-function/once":9}],38:[function(c,d,b){c("@marcom/ac-polyfills/matchMedia");
var g=c("./helpers/globals");var f=c("@marcom/ac-function/once");function a(){var i=g.getWindow();
var h=i.matchMedia("only all");return !!(h&&h.matches)}d.exports=f(a);d.exports.original=a
},{"./helpers/globals":31,"@marcom/ac-function/once":9,"@marcom/ac-polyfills/matchMedia":388}],39:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=false;
try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":31,"@marcom/ac-function/once":9}],40:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":31,"@marcom/ac-function/once":9}],41:[function(b,c,a){var g=b("@marcom/ac-prefixer/getStyleValue");
var d=b("@marcom/ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"@marcom/ac-function/once":9,"@marcom/ac-prefixer/getStyleValue":12}],42:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":31,"@marcom/ac-function/once":9}],43:[function(c,d,b){var g=c("./helpers/globals");
var f=c("@marcom/ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
if(typeof i.getContext==="function"){return !!(i.getContext("webgl")||i.getContext("experimental-webgl"))
}return false}d.exports=f(a);d.exports.original=a},{"./helpers/globals":31,"@marcom/ac-function/once":9}],44:[function(g,a,s){var j=a.exports={};
var k;var m;function h(){throw new Error("setTimeout has not been defined")}function q(){throw new Error("clearTimeout has not been defined")
}(function(){try{if(typeof setTimeout==="function"){k=setTimeout}else{k=h}}catch(t){k=h
}try{if(typeof clearTimeout==="function"){m=clearTimeout}else{m=q}}catch(t){m=q
}}());function f(t){if(k===setTimeout){return setTimeout(t,0)}if((k===h||!k)&&setTimeout){k=setTimeout;
return setTimeout(t,0)}try{return k(t,0)}catch(u){try{return k.call(null,t,0)}catch(u){return k.call(this,t,0)
}}}function d(t){if(m===clearTimeout){return clearTimeout(t)}if((m===q||!m)&&clearTimeout){m=clearTimeout;
return clearTimeout(t)}try{return m(t)}catch(u){try{return m.call(null,t)}catch(u){return m.call(this,t)
}}}var n=[];var r=false;var i;var o=-1;function l(){if(!r||!i){return}r=false;if(i.length){n=i.concat(n)
}else{o=-1}if(n.length){p()}}function p(){if(r){return}var u=f(l);r=true;var t=n.length;
while(t){i=n;n=[];while(++o<t){if(i){i[o].run()}}o=-1;t=n.length}i=null;r=false;
d(u)}j.nextTick=function(t){var u=new Array(arguments.length-1);if(arguments.length>1){for(var v=1;
v<arguments.length;v++){u[v-1]=arguments[v]}}n.push(new b(t,u));if(n.length===1&&!r){f(p)
}};function b(t,u){this.fun=t;this.array=u}b.prototype.run=function(){this.fun.apply(null,this.array)
};j.title="browser";j.browser=true;j.env={};j.argv=[];j.version="";j.versions={};
function c(){}j.on=c;j.addListener=c;j.once=c;j.off=c;j.removeListener=c;j.removeAllListeners=c;
j.emit=c;j.binding=function(t){throw new Error("process.binding is not supported")
};j.cwd=function(){return"/"};j.chdir=function(t){throw new Error("process.chdir is not supported")
};j.umask=function(){return 0}},{}],45:[function(c,d,b){var a=c("@marcom/ac-jetpack-lib/core/BaseComponent");
var i=a.prototype;var h={ELEMENT_ENGAGEMENT:"data-engaged"};function g(o,q,j,m,k,p,l){this.name="EngagedElementComponent_"+l;
a.call(this,o,q,j,m,k,p,l);this.timeToEngage=300;this.inViewThreshold=0.75;if(this.element.hasAttribute(h.ELEMENT_ENGAGEMENT)){try{this._overwriteElementEngagementProps()
}catch(n){console.error("EngagedElementAnimationComponent::_overwriteElementEngagementProps bad JSON in data-attribute!",n)
}}this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:this.timeToEngage,inViewThreshold:this.inViewThreshold})
}var f=g.prototype=Object.create(a.prototype);g.prototype.constructor=g;f.setupEvents=function(){i.setupEvents.call(this);
this._onElementEngaged=this._onElementEngaged.bind(this);this.trackedElement.once("engaged",this._onElementEngaged)
};f._onElementEngaged=function(j){this.element.classList.add("engaged")};f._overwriteElementEngagementProps=function(){var k=this.element.getAttribute(h.ELEMENT_ENGAGEMENT);
var j=JSON.parse(k);this.timeToEngage=j.timeToEngage===undefined?this.timeToEngage:parseFloat(j.timeToEngage);
this.inViewThreshold=j.inViewThreshold===undefined?this.inViewThreshold:parseFloat(j.inViewThreshold)
};d.exports=g},{"@marcom/ac-jetpack-lib/core/BaseComponent":140}],46:[function(c,d,b){d.exports=function a(f,h){var g;
if(h){g=f.getBoundingClientRect();return{width:g.width,height:g.height}}return{width:f.offsetWidth,height:f.offsetHeight}
}},{}],47:[function(f,g,d){var c=f("./getDimensions");var b=f("./getScrollX");var a=f("./getScrollY");
g.exports=function h(i,n){var k;var m;var l;var j;if(n){k=i.getBoundingClientRect();
m=b();l=a();return{top:k.top+l,right:k.right+m,bottom:k.bottom+l,left:k.left+m}
}j=c(i,n);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height};while((i=i.offsetParent)){k.top+=i.offsetTop;
k.left+=i.offsetLeft}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}
}},{"./getDimensions":46,"./getScrollX":48,"./getScrollY":49}],48:[function(c,d,b){d.exports=function a(f){f=f||window;
if(f===window){return window.scrollX||window.pageXOffset}return f.scrollLeft}},{}],49:[function(c,d,b){d.exports=function a(f){f=f||window;
if(f===window){return window.scrollY||window.pageYOffset}return f.scrollTop}},{}],50:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],51:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":52}],52:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"@marcom/ac-polyfills/Array/prototype.forEach":355}],53:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":54}],54:[function(c,b,f){var g;
var k=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;var d={create:c("@marcom/ac-object/create"),defaults:c("@marcom/ac-object/defaults"),extend:c("@marcom/ac-object/extend")};
var h=c("@marcom/ac-element-tracker").ElementTracker;var j={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var i={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(l){h.call(this,null,l);k.call(this);this._thresholdEnter=this._thresholdEnter.bind(this);
this._thresholdExit=this._thresholdExit.bind(this);this._enterView=this._enterView.bind(this);
this._exitView=this._exitView.bind(this)};g=a.prototype=d.create(h.prototype);g=d.extend(g,k.prototype);
g._decorateTrackedElement=function(m,l){var n;n=d.defaults(j,l||{});d.extend(m,n);
d.extend(m,i)};g._attachElementListeners=function(l){l.on("thresholdenter",this._thresholdEnter,this);
l.on("thresholdexit",this._thresholdExit,this);l.on("enterview",this._enterView,this);
l.on("exitview",this._exitView,this)};g._removeElementListeners=function(l){l.off("thresholdenter",this._thresholdEnter);
l.off("thresholdexit",this._thresholdExit);l.off("enterview",this._enterView);l.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(l){if(!l.stopOnEngaged){this._attachElementListeners(l)
}else{if(!l.engaged){this._attachElementListeners(l)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(l){this._removeElementListeners(l)
},this)};g._elementInViewPastThreshold=function(n){var l=document.documentElement.clientHeight||window.innerHeight;
var m=false;if(n.pixelsInView===l){m=true}else{m=(n.percentInView>n.inViewThreshold)
}return m};g._ifInView=function(l,n){var m=l.inThreshold;h.prototype._ifInView.apply(this,arguments);
if(!m&&this._elementInViewPastThreshold(l)){l.inThreshold=true;l.trigger("thresholdenter",l);
if(typeof l.timeToEngage==="number"&&l.timeToEngage>=0){l.engagedTimeout=window.setTimeout(this._engaged.bind(this,l),l.timeToEngage)
}}};g._ifAlreadyInView=function(l){var m=l.inThreshold;h.prototype._ifAlreadyInView.apply(this,arguments);
if(m&&!this._elementInViewPastThreshold(l)){l.inThreshold=false;l.trigger("thresholdexit",l);
if(l.engagedTimeout){window.clearTimeout(l.engagedTimeout);l.engagedTimeout=null
}}};g._engaged=function(l){l.engagedTimeout=null;this._elementEngaged(l);l.trigger("engaged",l);
this.trigger("engaged",l)};g._thresholdEnter=function(l){l.thresholdEnterTime=Date.now();
l.thresholdExitTime=0;this.trigger("thresholdenter",l)};g._thresholdExit=function(l){l.thresholdExitTime=Date.now();
this.trigger("thresholdexit",l)};g._enterView=function(l){this.trigger("enterview",l)
};g._exitView=function(l){this.trigger("exitview",l)};g._elementEngaged=function(l){l.engaged=true;
if(l.stopOnEngaged){this.stop(l)}};g.stop=function(l){if(this.tracking&&!l){this._removeAllElementListeners();
h.prototype.stop.call(this)}if(l&&l.tracking){l.tracking=false;this._removeElementListeners(l)
}};g.start=function(l){if(!l){this._attachAllElementListeners()}if(l&&!l.tracking){if(!l.stopOnEngaged){l.tracking=true;
this._attachElementListeners(l)}else{if(!l.engaged){l.tracking=true;this._attachElementListeners(l)
}}}if(!this.tracking){h.prototype.start.call(this)}else{this.refreshAllElementMetrics();
this.refreshAllElementStates()}};g.addElement=function(n,l){l=l||{};var m=h.prototype.addElement.call(this,n,l.useRenderedPosition);
this._decorateTrackedElement(m,l);return m};g.addElements=function(m,l){[].forEach.call(m,function(n){this.addElement(n,l)
},this)};b.exports=a},{"@marcom/ac-element-tracker":127,"@marcom/ac-event-emitter-micro":130,"@marcom/ac-object/create":50,"@marcom/ac-object/defaults":51,"@marcom/ac-object/extend":52}],55:[function(b,c,a){c.exports={flatten:b("./flatten"),intersection:b("./intersection"),shuffle:b("./shuffle"),toArray:b("./toArray"),union:b("./union"),unique:b("./unique"),without:b("./without")}
},{"./flatten":56,"./intersection":57,"./shuffle":58,"./toArray":59,"./union":60,"./unique":61,"./without":62}],56:[function(b,c,a){b("@marcom/ac-polyfills/Array/isArray");
b("@marcom/ac-polyfills/Array/prototype.forEach");c.exports=function d(h){var f=[];
var g=function(i){if(Array.isArray(i)){i.forEach(g)}else{f.push(i)}};h.forEach(g);
return f}},{"@marcom/ac-polyfills/Array/isArray":352,"@marcom/ac-polyfills/Array/prototype.forEach":355}],57:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.indexOf");
c.exports=function d(n){if(!n){return[]}var m=arguments.length;var k=0;var g=n.length;
var f=[];var l;for(k;k<g;k++){l=n[k];if(f.indexOf(l)>-1){continue}for(var h=1;h<m;
h++){if(arguments[h].indexOf(l)<0){break}}if(h===m){f.push(l)}}return f}},{"@marcom/ac-polyfills/Array/prototype.indexOf":356}],58:[function(b,c,a){c.exports=function d(i){var f=i.length;
var h;var g;while(f){h=Math.floor(Math.random()*f--);g=i[f];i[f]=i[h];i[h]=g}return i
}},{}],59:[function(b,d,a){b("@marcom/ac-polyfills/Array/prototype.slice");d.exports=function c(f){return Array.prototype.slice.call(f)
}},{"@marcom/ac-polyfills/Array/prototype.slice":361}],60:[function(b,d,a){var h=b("./flatten");
var c=b("./toArray");var g=b("./unique");d.exports=function f(i){return g(h(c(arguments)))
}},{"./flatten":56,"./toArray":59,"./unique":61}],61:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.indexOf");
b("@marcom/ac-polyfills/Array/prototype.reduce");c.exports=function d(g){var f=function(h,i){if(h.indexOf(i)<0){h.push(i)
}return h};return g.reduce(f,[])}},{"@marcom/ac-polyfills/Array/prototype.indexOf":356,"@marcom/ac-polyfills/Array/prototype.reduce":359}],62:[function(b,d,a){b("@marcom/ac-polyfills/Array/prototype.indexOf");
b("@marcom/ac-polyfills/Array/prototype.slice");d.exports=function c(f,n,m){var k;
var h=f.indexOf(n);var l=f.length;if(h>=0){if(m){k=f.slice(0,l);var j,g=0;for(j=h;
j<l;j++){if(f[j]===n){k.splice(j-g,1);g++}}}else{if(h===(l-1)){k=f.slice(0,(l-1))
}else{if(h===0){k=f.slice(1)}else{k=f.slice(0,h);k=k.concat(f.slice(h+1))}}}}else{return f
}return k}},{"@marcom/ac-polyfills/Array/prototype.indexOf":356,"@marcom/ac-polyfills/Array/prototype.slice":361}],63:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":73,"./utils/addEventListener":77}],64:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":73,"./utils/dispatchEvent":78}],65:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":63,"./dispatchEvent":64,"./preventDefault":71,"./removeEventListener":72,"./stop":74,"./stopPropagation":75,"./target":76}],66:[function(b,c,a){arguments[4][1][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":67,"./shared/prefixHelper":68,"./shared/windowFallbackEventTypes":69,"./utils/eventTypeAvailable":70,dup:1}],67:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],68:[function(b,c,a){arguments[4][3][0].apply(a,arguments)},{dup:3}],69:[function(b,c,a){arguments[4][4][0].apply(a,arguments)
},{dup:4}],70:[function(b,c,a){arguments[4][5][0].apply(a,arguments)},{dup:5}],71:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],72:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":73,"./utils/removeEventListener":79}],73:[function(c,f,b){var d=c("@marcom/ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);if(g){return g}return i}},{"@marcom/ac-prefixer/getEventType":66}],74:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":71,"./stopPropagation":75}],75:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],76:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],77:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],78:[function(b,c,a){b("@marcom/ac-polyfills/CustomEvent");
c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
}else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"@marcom/ac-polyfills/CustomEvent":363}],79:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],80:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":84}],81:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,o){var l;var n;var m;var k;if(o){l=d(j);n=b();m=a();return{top:l.top+m,right:l.right+n,bottom:l.bottom+m,left:l.left+n}
}k=c(j,o);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};while((j=j.offsetParent)){l.top+=j.offsetTop;
l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":80,"./getScrollX":82,"./getScrollY":83,"./utils/getBoundingClientRect":84}],82:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],83:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],84:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],85:[function(b,c,a){c.exports=8},{}],86:[function(b,c,a){c.exports=11},{}],87:[function(b,c,a){c.exports=9
},{}],88:[function(b,c,a){c.exports=10},{}],89:[function(b,c,a){c.exports=1},{}],90:[function(b,c,a){c.exports=3
},{}],91:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),hasAttribute:b("./hasAttribute"),indexOf:b("./indexOf"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":85,"./DOCUMENT_FRAGMENT_NODE":86,"./DOCUMENT_NODE":87,"./DOCUMENT_TYPE_NODE":88,"./ELEMENT_NODE":89,"./TEXT_NODE":90,"./createDocumentFragment":92,"./filterByNodeType":93,"./hasAttribute":94,"./indexOf":95,"./insertAfter":96,"./insertBefore":97,"./insertFirstChild":98,"./insertLastChild":99,"./isComment":102,"./isDocument":103,"./isDocumentFragment":104,"./isDocumentType":105,"./isElement":106,"./isNode":107,"./isNodeList":108,"./isTextNode":109,"./remove":110,"./replace":111}],92:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],93:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Array/prototype.filter");var g=d("./internal/isNodeType");
var a=d("./ELEMENT_NODE");f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);
return i.filter(function(j){return g(j,h)})}},{"./ELEMENT_NODE":89,"./internal/isNodeType":100,"@marcom/ac-polyfills/Array/prototype.filter":354,"@marcom/ac-polyfills/Array/prototype.slice":361}],94:[function(c,d,a){d.exports=function b(g,f){if("hasAttribute" in g){return g.hasAttribute(f)
}return(g.attributes.getNamedItem(f)!==null)}},{}],95:[function(c,d,b){c("@marcom/ac-polyfills/Array/prototype.indexOf");
c("@marcom/ac-polyfills/Array/prototype.slice");var g=c("./internal/validate");
var a=c("./filterByNodeType");d.exports=function f(k,i){var h=k.parentNode;var j;
if(!h){return 0}j=h.childNodes;if(i!==false){j=a(j,i)}else{j=Array.prototype.slice.call(j)
}return j.indexOf(k)}},{"./filterByNodeType":93,"./internal/validate":101,"@marcom/ac-polyfills/Array/prototype.indexOf":356,"@marcom/ac-polyfills/Array/prototype.slice":361}],96:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":101}],97:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":101}],98:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":101}],99:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":101}],100:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":107}],101:[function(g,d,j){var b=g("./isNodeType");
var c=g("../COMMENT_NODE");var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");
var h=g("../TEXT_NODE");var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":85,"../DOCUMENT_FRAGMENT_NODE":86,"../ELEMENT_NODE":89,"../TEXT_NODE":90,"./isNodeType":100}],102:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":85,"./internal/isNodeType":100}],103:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":87,"./internal/isNodeType":100}],104:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":86,"./internal/isNodeType":100}],105:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":88,"./internal/isNodeType":100}],106:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":89,"./internal/isNodeType":100}],107:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],108:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],109:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":90,"./internal/isNodeType":100}],110:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g){f.childNode(g,true,"remove");if(!g.parentNode){return g
}return g.parentNode.removeChild(g)}},{"./internal/validate":101}],111:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":101}],112:[function(d,f,c){var a=d("qs");f.exports=function b(h,g){var i=a.stringify(h,{strictNullHandling:true});
if(i&&g!==false){i="?"+i}return i}},{qs:113}],113:[function(b,d,a){var g=b("./stringify");
var c=b("./parse");var f={};d.exports={stringify:g,parse:c}},{"./parse":114,"./stringify":115}],114:[function(b,c,a){var f=b("./utils");
var d={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000,strictNullHandling:false,plainObjects:false,allowPrototypes:false};
d.parseValues=function(m,q){var k={};var j=m.split(q.delimiter,q.parameterLimit===Infinity?undefined:q.parameterLimit);
for(var l=0,o=j.length;l<o;++l){var g=j[l];var n=g.indexOf("]=")===-1?g.indexOf("="):g.indexOf("]=")+1;
if(n===-1){k[f.decode(g)]="";if(q.strictNullHandling){k[f.decode(g)]=null}}else{var p=f.decode(g.slice(0,n));
var h=f.decode(g.slice(n+1));if(!Object.prototype.hasOwnProperty.call(k,p)){k[p]=h
}else{k[p]=[].concat(k[p]).concat(h)}}}return k};d.parseObject=function(l,n,k){if(!l.length){return n
}var g=l.shift();var m;if(g==="[]"){m=[];m=m.concat(d.parseObject(l,n,k))}else{m=k.plainObjects?Object.create(null):{};
var j=g[0]==="["&&g[g.length-1]==="]"?g.slice(1,g.length-1):g;var i=parseInt(j,10);
var h=""+i;if(!isNaN(i)&&g!==j&&h===j&&i>=0&&(k.parseArrays&&i<=k.arrayLimit)){m=[];
m[i]=d.parseObject(l,n,k)}else{m[j]=d.parseObject(l,n,k)}}return m};d.parseKeys=function(j,n,g){if(!j){return
}if(g.allowDots){j=j.replace(/\.([^\.\[]+)/g,"[$1]")}var k=/^([^\[\]]*)/;var o=/(\[[^\[\]]*\])/g;
var m=k.exec(j);var l=[];if(m[1]){if(!g.plainObjects&&Object.prototype.hasOwnProperty(m[1])){if(!g.allowPrototypes){return
}}l.push(m[1])}var h=0;while((m=o.exec(j))!==null&&h<g.depth){++h;if(!g.plainObjects&&Object.prototype.hasOwnProperty(m[1].replace(/\[|\]/g,""))){if(!g.allowPrototypes){continue
}}l.push(m[1])}if(m){l.push("["+j.slice(m.index)+"]")}return d.parseObject(l,n,g)
};c.exports=function(k,p){p=p||{};p.delimiter=typeof p.delimiter==="string"||f.isRegExp(p.delimiter)?p.delimiter:d.delimiter;
p.depth=typeof p.depth==="number"?p.depth:d.depth;p.arrayLimit=typeof p.arrayLimit==="number"?p.arrayLimit:d.arrayLimit;
p.parseArrays=p.parseArrays!==false;p.allowDots=p.allowDots!==false;p.plainObjects=typeof p.plainObjects==="boolean"?p.plainObjects:d.plainObjects;
p.allowPrototypes=typeof p.allowPrototypes==="boolean"?p.allowPrototypes:d.allowPrototypes;
p.parameterLimit=typeof p.parameterLimit==="number"?p.parameterLimit:d.parameterLimit;
p.strictNullHandling=typeof p.strictNullHandling==="boolean"?p.strictNullHandling:d.strictNullHandling;
if(k===""||k===null||typeof k==="undefined"){return p.plainObjects?Object.create(null):{}
}var l=typeof k==="string"?d.parseValues(k,p):k;var h=p.plainObjects?Object.create(null):{};
var o=Object.keys(l);for(var j=0,m=o.length;j<m;++j){var n=o[j];var g=d.parseKeys(n,l[n],p);
h=f.merge(h,g,p)}return f.compact(h)}},{"./utils":116}],115:[function(b,c,a){var f=b("./utils");
var d={delimiter:"&",arrayPrefixGenerators:{brackets:function(h,g){return h+"[]"
},indices:function(h,g){return h+"["+g+"]"},repeat:function(h,g){return h}},strictNullHandling:false};
d.stringify=function(l,n,g,j,h){if(typeof h==="function"){l=h(n,l)}else{if(f.isBuffer(l)){l=l.toString()
}else{if(l instanceof Date){l=l.toISOString()}else{if(l===null){if(j){return f.encode(n)
}l=""}}}}if(typeof l==="string"||typeof l==="number"||typeof l==="boolean"){return[f.encode(n)+"="+f.encode(l)]
}var q=[];if(typeof l==="undefined"){return q}var k=Array.isArray(h)?h:Object.keys(l);
for(var m=0,o=k.length;m<o;++m){var p=k[m];if(Array.isArray(l)){q=q.concat(d.stringify(l[p],g(n,p),g,j,h))
}else{q=q.concat(d.stringify(l[p],n+"["+p+"]",g,j,h))}}return q};c.exports=function(o,s){s=s||{};
var j=typeof s.delimiter==="undefined"?d.delimiter:s.delimiter;var l=typeof s.strictNullHandling==="boolean"?s.strictNullHandling:d.strictNullHandling;
var n;var k;if(typeof s.filter==="function"){k=s.filter;o=k("",o)}else{if(Array.isArray(s.filter)){n=k=s.filter
}}var r=[];if(typeof o!=="object"||o===null){return""}var g;if(s.arrayFormat in d.arrayPrefixGenerators){g=s.arrayFormat
}else{if("indices" in s){g=s.indices?"indices":"repeat"}else{g="indices"}}var h=d.arrayPrefixGenerators[g];
if(!n){n=Object.keys(o)}for(var m=0,p=n.length;m<p;++m){var q=n[m];r=r.concat(d.stringify(o[q],q,h,l,k))
}return r.join(j)}},{"./utils":116}],116:[function(b,c,a){var f={};f.hexTable=new Array(256);
for(var d=0;d<256;++d){f.hexTable[d]="%"+((d<16?"0":"")+d.toString(16)).toUpperCase()
}a.arrayToObject=function(k,h){var l=h.plainObjects?Object.create(null):{};for(var j=0,g=k.length;
j<g;++j){if(typeof k[j]!=="undefined"){l[j]=k[j]}}return l};a.merge=function(o,n,h){if(!n){return o
}if(typeof n!=="object"){if(Array.isArray(o)){o.push(n)}else{if(typeof o==="object"){o[n]=true
}else{o=[o,n]}}return o}if(typeof o!=="object"){o=[o].concat(n);return o}if(Array.isArray(o)&&!Array.isArray(n)){o=a.arrayToObject(o,h)
}var l=Object.keys(n);for(var g=0,j=l.length;g<j;++g){var i=l[g];var m=n[i];if(!Object.prototype.hasOwnProperty.call(o,i)){o[i]=m
}else{o[i]=a.merge(o[i],m,h)}}return o};a.decode=function(h){try{return decodeURIComponent(h.replace(/\+/g," "))
}catch(g){return h}};a.encode=function(k){if(k.length===0){return k}if(typeof k!=="string"){k=""+k
}var h="";for(var j=0,g=k.length;j<g;++j){var l=k.charCodeAt(j);if(l===45||l===46||l===95||l===126||(l>=48&&l<=57)||(l>=65&&l<=90)||(l>=97&&l<=122)){h+=k[j];
continue}if(l<128){h+=f.hexTable[l];continue}if(l<2048){h+=f.hexTable[192|(l>>6)]+f.hexTable[128|(l&63)];
continue}if(l<55296||l>=57344){h+=f.hexTable[224|(l>>12)]+f.hexTable[128|((l>>6)&63)]+f.hexTable[128|(l&63)];
continue}++j;l=65536+(((l&1023)<<10)|(k.charCodeAt(j)&1023));h+=f.hexTable[240|(l>>18)]+f.hexTable[128|((l>>12)&63)]+f.hexTable[128|((l>>6)&63)]+f.hexTable[128|(l&63)]
}return h};a.compact=function(o,j){if(typeof o!=="object"||o===null){return o}j=j||[];
var n=j.indexOf(o);if(n!==-1){return j[n]}j.push(o);if(Array.isArray(o)){var g=[];
for(var l=0,h=o.length;l<h;++l){if(typeof o[l]!=="undefined"){g.push(o[l])}}return g
}var m=Object.keys(o);for(l=0,h=m.length;l<h;++l){var k=m[l];o[k]=a.compact(o[k],j)
}return o};a.isRegExp=function(g){return Object.prototype.toString.call(g)==="[object RegExp]"
};a.isBuffer=function(g){if(g===null||typeof g==="undefined"){return false}return !!(g.constructor&&g.constructor.isBuffer&&g.constructor.isBuffer(g))
}},{}],117:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":118,"./create":119,"./defaults":120,"./extend":121,"./getPrototypeOf":122,"./isDate":123,"./isEmpty":124,"./isRegExp":125,"./toQueryParameters":126}],118:[function(c,d,b){c("@marcom/ac-polyfills/Array/isArray");
var h=c("./extend");var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;
for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};
f(i[k],j[k])}else{i[k]=j[k]}}}}return i};d.exports=function g(j,i){if(i){return f({},j)
}return h({},j)}},{"./extend":121,"@marcom/ac-polyfills/Array/isArray":352}],119:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{dup:50}],120:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./extend":121,dup:51}],121:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":355,dup:52}],122:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],123:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],124:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],125:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],126:[function(c,f,b){var a=c("@marcom/ac-url/joinSearchParams");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a(g,false)}},{"@marcom/ac-url/joinSearchParams":112}],127:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":128}],128:[function(d,c,h){d("@marcom/ac-polyfills/Function/prototype.bind");
var m=d("@marcom/ac-array");var l=d("@marcom/ac-dom-nodes");var a={getDimensions:d("@marcom/ac-dom-metrics/getDimensions"),getPagePosition:d("@marcom/ac-dom-metrics/getPagePosition"),getScrollY:d("@marcom/ac-dom-metrics/getScrollY")};
var k=d("@marcom/ac-dom-events");var g=d("@marcom/ac-object");var j=d("./TrackedElement");
var f={autoStart:false,useRenderedPosition:false};function b(o,n){this.options=g.clone(f);
this.options=typeof n==="object"?g.extend(this.options,n):this.options;this._scrollY=this._getScrollY();
this._windowHeight=this._getWindowHeight();this.tracking=false;this.elements=[];
if(o&&(Array.isArray(o)||l.isNodeList(o)||l.isElement(o))){this.addElements(o)}this.refreshAllElementStates=this.refreshAllElementStates.bind(this);
this.refreshAllElementMetrics=this.refreshAllElementMetrics.bind(this);if(this.options.autoStart){this.start()
}}var i=b.prototype;i.destroy=function(){var o,n;this.stop();for(o=0,n=this.elements.length;
o<n;o++){this.elements[o].destroy()}this.elements=null;this.options=null};i._registerElements=function(n){n=[].concat(n);
n.forEach(function(p){if(this._elementInDOM(p)){var o=new j(p,this.options.useRenderedPosition);
o.offsetTop=o.element.offsetTop;this.elements.push(o)}},this)};i._registerTrackedElements=function(n){var o=[].concat(n);
o.forEach(function(p){if(this._elementInDOM(p.element)){p.offsetTop=p.element.offsetTop;
this.elements.push(p)}},this)};i._elementInDOM=function(p){var o=false;var n=document.getElementsByTagName("body")[0];
if(l.isElement(p)&&n.contains(p)){o=true}return o};i._elementPercentInView=function(n){return n.pixelsInView/n.height
};i._elementPixelsInView=function(o){var n=o.top-this._scrollY;var p=o.bottom-this._scrollY;
if(n>this._windowHeight||p<0){return 0}return Math.min(p,this._windowHeight)-Math.max(n,0)
};i._ifInView=function(n,o){if(!o){n.trigger("enterview",n)}};i._ifAlreadyInView=function(n){if(!n.inView){n.trigger("exitview",n)
}};i.addElements=function(q,p){if(typeof p==="undefined"){p=this.options.useRenderedPosition
}q=l.isNodeList(q)?m.toArray(q):[].concat(q);for(var o=0,n=q.length;o<n;o++){this.addElement(q[o],p)
}};i.addElement=function(o,p){var n=null;if(typeof p==="undefined"){p=this.options.useRenderedPosition
}if(l.isElement(o)){n=new j(o,p);this._registerTrackedElements(n);this.refreshElementMetrics(n);
this.refreshElementState(n)}else{throw new TypeError("ElementTracker: "+o+" is not a valid DOM element")
}return n};i.removeElement=function(p){var o=[];var n;this.elements.forEach(function(r,q){if(r===p||r.element===p){o.push(q)
}});n=this.elements.filter(function(r,q){return o.indexOf(q)<0});this.elements=n
};i.start=function(){if(this.tracking===false){this.tracking=true;k.addEventListener(window,"resize",this.refreshAllElementMetrics);
k.addEventListener(window,"orientationchange",this.refreshAllElementMetrics);k.addEventListener(window,"scroll",this.refreshAllElementStates);
this.refreshAllElementMetrics()}};i.stop=function(){if(this.tracking===true){this.tracking=false;
k.removeEventListener(window,"resize",this.refreshAllElementMetrics);k.removeEventListener(window,"orientationchange",this.refreshAllElementMetrics);
k.removeEventListener(window,"scroll",this.refreshAllElementStates)}};i.refreshAllElementMetrics=function(n,o){if(typeof n!=="number"){n=this._getScrollY()
}if(typeof o!=="number"){o=this._getWindowHeight()}this._scrollY=n;this._windowHeight=o;
this.elements.forEach(this.refreshElementMetrics,this)};i.refreshElementMetrics=function(o){var p=a.getDimensions(o.element,o.useRenderedPosition);
var n=a.getPagePosition(o.element,o.useRenderedPosition);o=g.extend(o,p,n);return this.refreshElementState(o)
};i.refreshAllElementStates=function(n){if(typeof n!=="number"){n=this._getScrollY()
}this._scrollY=n;this.elements.forEach(this.refreshElementState,this)};i.refreshElementState=function(n){var o=n.inView;
n.pixelsInView=this._elementPixelsInView(n);n.percentInView=this._elementPercentInView(n);
n.inView=n.pixelsInView>0;if(n.inView){this._ifInView(n,o)}if(o){this._ifAlreadyInView(n)
}return n};i._getWindowHeight=function(){return document.documentElement.clientHeight||window.innerHeight
};i._getScrollY=function(){return a.getScrollY()};c.exports=b},{"./TrackedElement":129,"@marcom/ac-array":55,"@marcom/ac-dom-events":65,"@marcom/ac-dom-metrics/getDimensions":80,"@marcom/ac-dom-metrics/getPagePosition":81,"@marcom/ac-dom-metrics/getScrollY":83,"@marcom/ac-dom-nodes":91,"@marcom/ac-object":117,"@marcom/ac-polyfills/Function/prototype.bind":373}],129:[function(b,a,c){var d=b("@marcom/ac-object").create;
var h=b("@marcom/ac-dom-nodes");var i=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=i.prototype;function g(k,l){if(!h.isElement(k)){throw new TypeError("TrackedElement: "+k+" is not a valid DOM element")
}i.call(this);this.element=k;this.inView=false;this.percentInView=0;this.pixelsInView=0;
this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;this.width=0;
this.height=0;this.useRenderedPosition=l||false}var f=g.prototype=d(j);f.destroy=function(){this.element=null;
j.destroy.call(this)};a.exports=g},{"@marcom/ac-dom-nodes":91,"@marcom/ac-event-emitter-micro":130,"@marcom/ac-object":117}],130:[function(b,c,a){c.exports={EventEmitterMicro:b("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":131}],131:[function(b,c,a){function f(){this._events={}
}var d=f.prototype;d.on=function(g,h){this._events[g]=this._events[g]||[];this._events[g].unshift(h)
};d.once=function(g,j){var i=this;function h(k){i.off(g,h);if(k!==undefined){j(k)
}else{j()}}this.on(g,h)};d.off=function(g,i){if(!this.has(g)){return}var h=this._events[g].indexOf(i);
if(h===-1){return}this._events[g].splice(h,1)};d.trigger=function(g,j){if(!this.has(g)){return
}for(var h=this._events[g].length-1;h>=0;h--){if(j!==undefined){this._events[g][h](j)
}else{this._events[g][h]()}}};d.has=function(g){if(g in this._events===false||this._events[g].length===0){return false
}return true};d.destroy=function(){for(var g in this._events){this._events[g]=null
}this._events=null};c.exports=f},{}],132:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":133}],133:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],134:[function(c,f,b){var a=c("@marcom/ac-shared-instance").SharedInstance;
var g="ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",d="1.0.3";
var h=function(){this._currentID=0};h.prototype.getNewID=function(){this._currentID++;
return"raf:"+this._currentID};f.exports=a.share(g,d,h)},{"@marcom/ac-shared-instance":132}],135:[function(b,c,a){arguments[4][132][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":136,dup:132}],136:[function(b,c,a){arguments[4][133][0].apply(a,arguments)
},{dup:133}],137:[function(b,d,a){var f;function c(g){g=g||{};this._reset();this._willRun=false;
this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);this._boundOnExternalAnimationFrame=this._onExternalAnimationFrame.bind(this)
}f=c.prototype;f.subscribe=function(g){if(this._nextFrameSubscribers[g.id]){return false
}this._nextFrameSubscribers[g.id]=g;this._nextFrameSubscriberCount++;this._run();
return true};f.unsubscribe=function(g){if(!this._nextFrameSubscribers[g.id]){return false
}this._nextFrameSubscribers[g.id]=null;this._nextFrameSubscriberCount--;if(this._nextFrameSubscriberCount===0){this._cancel()
}return true};f.trigger=function(j,h){var g;for(g in this._subscribers){if(this._subscribers.hasOwnProperty(g)&&this._subscribers[g]!==null&&this._subscribers[g]._didDestroy===false){this._subscribers[g].trigger(j,h)
}}};f.destroy=function(){var g=this._cancel();this._subscribers=null;this._nextFrameSubscribers=null;
this._rafData=null;this._boundOnAnimationFrame=null;this._onExternalAnimationFrame=null;
return g};f.useExternalAnimationFrame=function(g){if(typeof g!=="boolean"){return
}var h=this._isUsingExternalAnimationFrame;if(g&&this._animationFrame){cancelAnimationFrame(this._animationFrame);
this._animationFrame=null}if(this._willRun&&!g&&!this._animationFrame){this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
}this._isUsingExternalAnimationFrame=g;if(g){return this._boundOnExternalAnimationFrame
}return h||false};f._run=function(){if(!this._willRun){this._willRun=true;if(this.lastFrameTime===0){this.lastFrameTime=performance.now()
}this._animationFrameActive=true;if(!this._isUsingExternalAnimationFrame){this._animationFrame=requestAnimationFrame(this._boundOnAnimationFrame)
}return true}};f._cancel=function(){var g=false;if(this._animationFrameActive){if(this._animationFrame){cancelAnimationFrame(this._animationFrame);
this._animationFrame=null}this._animationFrameActive=false;this._willRun=false;
g=true}if(!this._isRunning){this._reset()}return g};f._onSubscribersAnimationFrameStart=function(h){var g;
for(g in this._subscribers){if(this._subscribers.hasOwnProperty(g)&&this._subscribers[g]!==null&&this._subscribers[g]._didDestroy===false){this._subscribers[g]._onAnimationFrameStart(h)
}}};f._onSubscribersAnimationFrameEnd=function(h){var g;for(g in this._subscribers){if(this._subscribers.hasOwnProperty(g)&&this._subscribers[g]!==null&&this._subscribers[g]._didDestroy===false){this._subscribers[g]._onAnimationFrameEnd(h)
}}};f._onAnimationFrame=function(g){this._subscribers=this._nextFrameSubscribers;
this._nextFrameSubscribers={};this._nextFrameSubscriberCount=0;this._isRunning=true;
this._willRun=false;this._didRequestNextRAF=false;this._rafData.delta=g-this.lastFrameTime;
this.lastFrameTime=g;this._rafData.fps=0;if(this._rafData.delta>=1000){this._rafData.delta=0
}if(this._rafData.delta!==0){this._rafData.fps=1000/this._rafData.delta}this._rafData.time=g;
this._rafData.naturalFps=this._rafData.fps;this._rafData.timeNow=Date.now();this._onSubscribersAnimationFrameStart(this._rafData);
this.trigger("update",this._rafData);this.trigger("draw",this._rafData);this._onSubscribersAnimationFrameEnd(this._rafData);
if(!this._willRun){this._reset()}};f._onExternalAnimationFrame=function(g){if(!this._isUsingExternalAnimationFrame){return
}this._onAnimationFrame(g)};f._reset=function(){this._rafData={time:0,delta:0,fps:0,naturalFps:0,timeNow:0};
this._subscribers={};this._nextFrameSubscribers={};this._nextFrameSubscriberCount=0;
this._didEmitFrameData=false;this._animationFrame=null;this._animationFrameActive=false;
this._isRunning=false;this._shouldReset=false;this.lastFrameTime=0};d.exports=c
},{}],138:[function(c,g,b){var a=c("@marcom/ac-shared-instance").SharedInstance;
var h="ac-raf-executor:sharedRAFExecutorInstance",f="1.0.2";var d=c("./RAFExecutor");
g.exports=a.share(h,f,d)},{"./RAFExecutor":137,"@marcom/ac-shared-instance":135}],139:[function(f,g,d){var i;
var h=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;var c=f("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
var b=f("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
function a(j){j=j||{};h.call(this);this.id=b.getNewID();this.executor=j.executor||c;
this._reset();this._willRun=false;this._didDestroy=false}i=a.prototype=Object.create(h.prototype);
i.run=function(){if(!this._willRun){this._willRun=true;this.executor.subscribe(this);
return true}return false};i.cancel=function(){var j=false;if(this._willRun){this.executor.unsubscribe(this);
this._willRun=false;j=true}this._reset();return j};i.destroy=function(){var j=this.cancel();
this.executor.unsubscribe(this);this.executor=null;h.prototype.destroy.call(this);
this._didDestroy=true;return j};i.willRun=function(){return this._willRun};i.isRunning=function(){return this._isRunning
};i._onAnimationFrameStart=function(j){this._isRunning=true;this._willRun=false;
if(!this._didEmitFrameData){this._didEmitFrameData=true;this.trigger("start",j)
}};i._onAnimationFrameEnd=function(j){if(!this._willRun){this.trigger("stop",j);
this._reset()}};i._reset=function(){this._didEmitFrameData=false;this._isRunning=false
};g.exports=a},{"@marcom/ac-event-emitter-micro":130,"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance":134,"@marcom/ac-raf-executor/sharedRAFExecutorInstance":138}],140:[function(d,f,c){d("@marcom/ac-polyfills/Object/create");
var a=d("@marcom/ac-raf-emitter/RAFEmitter");var h=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var i=h.prototype;function b(n,p,j,m,k,o,l){if(arguments.length!==7){throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)")
}h.call(this);this.section=n;this.element=p;this.componentName=j;this.index=l;this.isEnabled=true
}var g=b.prototype=Object.create(h.prototype);b.prototype.constructor=b;g.destroy=function(){this.teardownEvents();
this.teardownRAFEmitter();this.section=null;i.destroy.call(this)};g.setupEvents=function(){};
g.teardownEvents=function(){};g.setupRAFEmitter=function(){if(this._rafEmitter){return
}this._rafEmitter=new a();this.onDOMRead=this.onDOMRead.bind(this);this.onDOMWrite=this.onDOMWrite.bind(this);
this._rafEmitter.on("update",this.onDOMRead);this._rafEmitter.on("draw",this.onDOMWrite)
};g.teardownRAFEmitter=function(){if(!this._rafEmitter){return}this._rafEmitter.destroy();
this._rafEmitter=null};g.onSectionWillAppearWithPadding=function(j,k){};g.onSectionWillAppear=function(j,k){};
g.activate=function(){};g.animateIn=function(){};g.requestDOMChange=function(){if(!this.isEnabled||!this.section.isVisible){return false
}if(!this._rafEmitter){this.setupRAFEmitter()}return this._rafEmitter.run()};g.onDOMRead=function(j){};
g.onDOMWrite=function(j){};g.deactivate=function(){};g.onScroll=function(k,j,l){};
g.onSectionWillDisappearWithPadding=function(j,k){};g.onSectionWillDisappear=function(j,k){};
g.onResizeDebounced=function(k,j,l){};g.onResizeImmediate=function(k,j,l){};g.onOrientationChange=function(l,k,j,m){};
g.onBreakpoint=function(k,m,j,l){};g.onRetinaChange=function(m,k,j,l){};f.exports=b
},{"@marcom/ac-event-emitter-micro":130,"@marcom/ac-polyfills/Object/create":377,"@marcom/ac-raf-emitter/RAFEmitter":139}],141:[function(f,c,i){f("@marcom/ac-polyfills/console.log");
var b=f("@marcom/ac-element-tracker").ElementTracker;var l=f("@marcom/ac-viewport-emitter");
if(!l.viewport){console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation.\n\tBreakpoint will always be 'large' and no `onBreakPoint` events will be fired");
l=f("../utils/ViewportEmitterStub")()}var k=f("../utils/Page");var a=f("../model/SectionMap");
var h=f("../model/DataAttributes");var d=f("../model/EnabledFeatures");function g(m){d.init();
k.setPage(this);this.name=this.name||"[NOT SET]";this._mainEl=document.querySelector("main,.main");
this._sections=[];this._visibleSections=[];this._visibleSectionsWithPadding=[];
this._elementTracker=new b(null,{autoStart:true});this._currentSection=null;this._sectionUnderLocalNav=null;
this._currentBreakpoint=l.viewport;this.isRetina=l.retina;this._cachedScrollY=this._getScrollY(true);
this._cachedWindowHeight=this.getWindowHeight(true);this._resizeTimeout=-1;this._resizeTimeoutDelay=this._resizeTimeoutDelay||250;
this.setupSections();this.setupEvents();this._updateSectionVisibility()}var j=g.prototype;
j.destroy=function(){for(var n=0,m=this._sections.length;n<m;n++){this._sections[n].destroy()
}this.teardownEvents();this._elementTracker.destroy();this._elementTracker=null;
this._sections=null;this._currentSection=null;this._sectionUnderLocalNav=null;this._visibleSections=null;
this._mainEl=null;k.removePage(this)};j.setupEvents=function(){this._onScroll=this._onScroll.bind(this);
this._onBreakpoint=this._onBreakpoint.bind(this);this._onRetinaChange=this._onRetinaChange.bind(this);
this._onPageDidAppear=this._onPageDidAppear.bind(this);this._onResizeImmediate=this._onResizeImmediate.bind(this);
this._onOrientationChange=this._onOrientationChange.bind(this);this._onPageWillDisappear=this._onPageWillDisappear.bind(this);
this.performDeepMetricsRefresh=this.performDeepMetricsRefresh.bind(this);window.addEventListener("scroll",this._onScroll);
window.addEventListener("resize",this._onResizeImmediate);window.addEventListener("orientationchange",this._onOrientationChange);
l.on("change",this._onBreakpoint);l.on("retinachange",this._onRetinaChange);k.on(k.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh)
};j.teardownEvents=function(){window.removeEventListener("scroll",this._onScroll);
window.removeEventListener("resize",this._onResizeImmediate);window.removeEventListener("orientationchange",this._onOrientationChange);
l.off("change",this._onBreakpoint);l.off("retinachange",this._onRetinaChange);k.off(k.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh);
this._elementTracker.stop();clearTimeout(this._resizeTimeout)};j.setupSections=function(){var n=this._mainEl.querySelectorAll("section,.section,[data-section-type]");
for(var p=0,m=n.length;p<m;p++){if(n[p].parentElement!==this._mainEl){console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.",n[p]);
continue}var o=n[p];this._addSectionImp(o)}};j.addSection=function(m){var n=this.getBaseSectionForElement(m);
if(n){return n}n=this._addSectionImp(m);this._updateSectionVisibility();return n
};j.removeSection=function(m){var o=(m instanceof a.BaseSection);var n=o?m:this.getBaseSectionForElement(m);
if(n){this._sections.splice(this._sections.indexOf(n),1)}this._updateSectionVisibility();
return n};j._addSectionImp=function(o){if(o.parentNode!==this._mainEl&&this._isNestedSection(o)){console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.",o);
return null}var n=this._elementTracker.addElement(o);this._elementTracker.refreshElementState(n);
var p=(o.hasAttribute(h.SECTION_TYPE))?o.getAttribute(h.SECTION_TYPE):"BaseSection";
if(p===""){p="BaseSection"}if(!a.hasOwnProperty(p)){throw"BasePage::setupSections parsing '#"+o.id+" ."+o.className+"' no section type '"+p+"'found!"
}var m=a[p];var q=new m(o,n,this._getCurrentBreakpoint(),this._getScrollY(),this.getWindowHeight(),this._sections.length);
q.setupEvents();this._sections.push(q);return q};j.getWindowHeight=function(m){if(m){this._cachedWindowHeight=document.documentElement.clientHeight||window.innerHeight
}return this._cachedWindowHeight};j._activateSection=function(m){if(this._currentSection===m){return
}if(this._currentSection){this._currentSection.deactivate()}this._currentSection=m;
this._currentSection.activate()};j._updateSectionVisibility=function(){var A=this._getScrollY();
var m=this.getWindowHeight();var q=k.getViewportPadding();var r=[];var t=this._sections[0];
var p=[];var y=0;var w=[];var C=A-q;var o=A+m+q;for(var s=0,v=this._sections.length;
s<v;s++){var B=this._sections[s];var z=B.trackedElement;var x=z.pixelsInView;if(B.isFixedHero){x=m-A
}if(x>y){t=B;y=x}if(x>0.000001){r.push(B);p.push(B);w.push(B)}else{if(o>z.top&&C<z.bottom){r.push(B);
w.push(B)}}}var n={};var u={};for(s=0,v=Math.max(this._visibleSections.length,r.length);
s<v;s++){if(this._visibleSectionsWithPadding[s]){if(typeof n[s]==="undefined"){n[s]=w.indexOf(this._visibleSectionsWithPadding[s])===-1
}if(n[s]){this._visibleSectionsWithPadding[s].onSectionWillDisappearWithPadding(A,m)
}}if(this._visibleSections[s]&&p.indexOf(this._visibleSections[s])===-1){this._visibleSections[s].onSectionWillDisappear(A,m)
}if(w[s]){if(typeof u[s]==="undefined"){u[s]=this._visibleSectionsWithPadding.indexOf(w[s])===-1
}if(u[s]){w[s].onSectionWillAppearWithPadding(A,m)}}if(p[s]&&this._visibleSections.indexOf(p[s])===-1){p[s].onSectionWillAppear(A,m)
}}this._visibleSections=p;this._visibleSectionsWithPadding=w;this._activateSection(t)
};j._onPageDidAppear=function(m){};j._onPageWillDisappear=function(m){this.destroy()
};j._onBreakpoint=function(r){var n=r.to;var p=r.from;this._currentBreakpoint=n;
var o=this._getScrollY();var s=this.getWindowHeight();this._elementTracker.refreshAllElementMetrics(o,s);
for(var q=0,m=this._sections.length;q<m;q++){this._sections[q].onBreakpoint(n,p,o,s)
}this.performDeepMetricsRefresh()};j._onRetinaChange=function(q){var n=this._getScrollY(true);
var r=this.getWindowHeight(true);this.isRetina=l.retina;var p=this._currentBreakpoint;
this._elementTracker.refreshAllElementMetrics(n,r);for(var o=0,m=this._sections.length;
o<m;o++){this._sections[o].onRetinaChange(this.isRetina,p,n,r)}};j._onScroll=function(p){var n=this._getScrollY(true);
var q=this.getWindowHeight();this._updateSectionVisibility();for(var o=0,m=this._visibleSections.length;
o<m;o++){this._visibleSections[o].onScroll(p,n,q)}};j._onResizeDebounced=function(q){var n=this._getScrollY();
var r=this.getWindowHeight();var p=false;for(var o=0,m=this._sections.length;o<m;
o++){if(!p&&this._sections[o]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
p=true}this._sections[o].onResizeDebounced(q,n,r)}this._updateSectionVisibility()
};j.performDeepMetricsRefresh=function(){var n=this._getScrollY();var p=this.getWindowHeight();
this._elementTracker.refreshAllElementMetrics(n,p);for(var o=0,m=this._sections.length;
o<m;o++){this._sections[o].elementEngagement.refreshAllElementMetrics(n,p);this._sections[o].updateScrollToPosition()
}this._updateSectionVisibility()};j._onOrientationChange=function(q){var o=this._getScrollY(true);
var r=this.getWindowHeight(true);var n=q.orientation;for(var p=0,m=this._sections.length;
p<m;p++){this._sections[p].onOrientationChange(q,n,o,r)}};j._onResizeImmediate=function(q){var n=this._getScrollY();
var r=this.getWindowHeight(true);var p=false;for(var o=0,m=this._sections.length;
o<m;o++){if(!p&&this._sections[o]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
p=true}this._sections[o].onResizeImmediate(q,n,r)}window.clearTimeout(this._resizeTimeout);
this._resizeTimeout=window.setTimeout(this._onResizeDebounced.bind(this,q),this._resizeTimeoutDelay)
};j._getScrollY=function(m){if(m){this._cachedScrollY=window.pageYOffset||(document.documentElement||document.body).scrollTop
}return this._cachedScrollY};j._getVisibleBottomOfPage=function(){return this._getScrollY()+this.getWindowHeight()
};j._getCurrentBreakpoint=function(){return this._currentBreakpoint};j._isNestedSection=function(o){var p=o;
var m=this._sections.length;while(p=p.parentElement){for(var n=0;n<m;n++){if(this._sections[n].element===p){return true
}}}return false};j.getBaseSectionForElement=function(o){for(var n=0,m=this._sections.length;
n<m;n++){if(this._sections[n].element===o){return this._sections[n]}}return null
};c.exports=g},{"../model/DataAttributes":144,"../model/EnabledFeatures":145,"../model/SectionMap":146,"../utils/Page":147,"../utils/ViewportEmitterStub":148,"@marcom/ac-element-tracker":127,"@marcom/ac-polyfills/console.log":385,"@marcom/ac-viewport-emitter":432}],142:[function(c,b,g){c("@marcom/ac-polyfills/Object/create");
c("@marcom/ac-polyfills/console.log");var k={getPagePosition:c("@marcom/ac-dom-metrics/getPagePosition")};
var a=c("@marcom/ac-element-engagement").ElementEngagement;var f=c("./../model/DataAttributes");
var h=c("./../model/ComponentMap");var d=c("./BaseComponent");var l=c("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var m=l.prototype;function j(r,q,p,n,s,o){if(arguments.length!==6){throw new Error("Incorrect number of arguments passed to BaseSection")
}l.call(this);this.element=r;this.trackedElement=q;this.elementEngagement=new a(null,{autoStart:false});
this.index=o;this.isVisible=this.trackedElement.pixelsInView>0;this.isVisibleWithPadding=false;
this.hasAnimatedIn=false;this.isActive=false;this.isFixedHero=false;this.cachedBreakpoint=p;
this.cachedScrollPosition=n;this.cachedWindowHeight=s;this.name=this.name||this.element.className;
this.scrollToPosition=0;this.updateScrollToPosition();this._components=[];this.setupComponents(p,n,s);
this.setIsFixedHero();this.performDeprecatedMethodCheck()}var i=j.prototype=Object.create(l.prototype);
j.prototype.constructor=j;i.performDeprecatedMethodCheck=function(){if(this["onViewWillAppear"]){throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass")
}if(this["onViewWillDisappear"]){throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass")
}return true};i.destroy=function(){this.teardownEvents();this.elementEngagement.stop();
this.elementEngagement=null;for(var o=0,n=this._components.length;o<n;o++){this._components[o].destroy()
}this._components=null;this.trackedElement=null;this.element=null;m.destroy.call(this)
};i.setupEvents=function(){for(var o=0,n=this._components.length;o<n;o++){this._components[o].setupEvents()
}};i.teardownEvents=function(){for(var o=0,n=this._components.length;o<n;o++){this._components[o].teardownEvents()
}};i.setupComponents=function(){var s=Array.prototype.slice.call(this.element.querySelectorAll("["+f.COMPONENT_LIST+"]"));
if(this.element.hasAttribute(f.COMPONENT_LIST)){s.push(this.element)}for(var q=0;
q<s.length;q++){var u=s[q];var t=u.getAttribute(f.COMPONENT_LIST);if(t.indexOf("|")!==-1){throw"BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '"+t+"'"
}var r=t.split(" ");for(var p=0,n=r.length;p<n;p++){var o=r[p];if(o===""||o===" "){continue
}this.addComponentOfType(o,u)}setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement),100)
}};i.addComponentOfType=function(o,q){if(!h.hasOwnProperty(o)){throw"BaseSection::setupComponents parsing '#"+q.id+" ."+q.className+"' no component type '"+o+"'found!"
}var p=h[o];if(!this.componentIsSupported(p,o)){console.log("BaseSection::setupComponents unsupported component '"+o+"'. Reason: '"+o+".IS_SUPPORTED' returned false");
return}var n=new p(this,q,o,this.cachedBreakpoint,this.cachedScrollPosition,this.cachedWindowHeight,this._components.length);
this._components.push(n);return n};i.removeComponentOfType=function(n){var o=this.getComponentOfType(n);
if(o===null){return}this.removeComponent(o)};i.removeComponent=function(o){var n=this._components.indexOf(o);
if(n===-1){return}this._components.splice(n,1);o.destroy()};i.activate=function(){this.element.classList.add("active");
for(var o=0,n=this._components.length;o<n;o++){if(!this._components[o].isEnabled){continue
}this._components[o].activate()}this.isActive=true;if(!this.hasAnimatedIn){this.element.classList.add("animated");
this.animateIn();this.hasAnimatedIn=true}};i.deactivate=function(){this.element.classList.remove("active");
this.isActive=false;for(var o=0,n=this._components.length;o<n;o++){if(!this._components[o].isEnabled){continue
}this._components[o].deactivate()}};i.animateIn=function(){for(var o=0,n=this._components.length;
o<n;o++){if(!this._components[o].isEnabled){continue}this._components[o].animateIn()
}};i.onResizeImmediate=function(r,o,s){this.cachedScrollPosition=o;this.cachedWindowHeight=s;
var q=false;for(var p=0,n=this._components.length;p<n;p++){if(!this._components[p].isEnabled){continue
}if(!q&&this._components[p]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
q=true}this._components[p].onResizeImmediate(r,o,s)}};i.onResizeDebounced=function(r,o,s){this.updateScrollToPosition();
var q=false;for(var p=0,n=this._components.length;p<n;p++){if(!this._components[p].isEnabled){continue
}if(!q&&this._components[p]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
q=true}this._components[p].onResizeDebounced(r,o,s)}this.elementEngagement.refreshAllElementMetrics(o,s)
};i.onBreakpoint=function(p,s,o,r){this.cachedBreakpoint=p;for(var q=0,n=this._components.length;
q<n;q++){if(!this._components[q].isEnabled){continue}this._components[q].onBreakpoint(p,s,o,r)
}};i.onRetinaChange=function(s,q,o,r){for(var p=0,n=this._components.length;p<n;
p++){if(!this._components[p].isEnabled){continue}this._components[p].onRetinaChange(s,q,o,r)
}this.elementEngagement.refreshAllElementMetrics(o,r)};i.onOrientationChange=function(r,p,o,s){this.cachedScrollPosition=o;
this.cachedWindowHeight=s;for(var q=0,n=this._components.length;q<n;q++){if(!this._components[q].isEnabled){continue
}this._components[q].onOrientationChange(r,p,o,s)}};i.onScroll=function(q,o,r){this.cachedScrollPosition=o;
this.elementEngagement.refreshAllElementStates(o);for(var p=0,n=this._components.length;
p<n;p++){if(!this._components[p].isEnabled){continue}this._components[p].onScroll(q,o,r)
}};i.onSectionWillAppearWithPadding=function(o,q){this.cachedScrollPosition=o;this.isVisibleWithPadding=true;
this.elementEngagement.refreshAllElementStates(o);for(var p=0,n=this._components.length;
p<n;p++){this._components[p].onSectionWillAppearWithPadding(o,q)}};i.onSectionWillAppear=function(o,q){this.cachedScrollPosition=o;
this.isVisible=true;this.elementEngagement.refreshAllElementStates(o);for(var p=0,n=this._components.length;
p<n;p++){this._components[p].onSectionWillAppear(o,q)}};i.onSectionWillDisappearWithPadding=function(o,q){this.cachedScrollPosition=o;
this.isVisibleWithPadding=false;for(var p=0,n=this._components.length;p<n;p++){this._components[p].onSectionWillDisappearWithPadding(o,q)
}};i.onSectionWillDisappear=function(o,q){this.cachedScrollPosition=o;this.isVisible=false;
for(var p=0,n=this._components.length;p<n;p++){this._components[p].onSectionWillDisappear(o,q)
}};i.getComponentOfType=function(o){if(!h.hasOwnProperty(o)){throw"BaseSection::getComponentOfType no component type '"+o+"' exist in ComponentMap!"
}for(var p=0,n=this._components.length;p<n;p++){if(this._components[p].componentName===o){return this._components[p]
}}return null};i.getAllComponentsOfType=function(o){if(!h.hasOwnProperty(o)){throw"BaseSection::getAllComponentsOfType no component type '"+o+"' exist in ComponentMap!"
}var q=[];for(var p=0,n=this._components.length;p<n;p++){if(this._components[p].componentName===o){q.push(this._components[p])
}}return q};i.updateScrollToPosition=function(){return this.scrollToPosition=k.getPagePosition(this.element).top
};i.setIsFixedHero=function(){if(this.index!==0){this.isFixedHero=false}else{var n=window.getComputedStyle(this.element);
this.isFixedHero=n.position==="fixed"}};j.prototype.componentIsSupported=function(q,o){var n=q.IS_SUPPORTED;
if(n===undefined){return true}if(typeof n!=="function"){console.error('BaseSection::setupComponents error in "'+o+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}var p=q.IS_SUPPORTED();if(p===undefined){console.error('BaseSection::setupComponents error in "'+o+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}return p};b.exports=j},{"./../model/ComponentMap":143,"./../model/DataAttributes":144,"./BaseComponent":140,"@marcom/ac-dom-metrics/getPagePosition":47,"@marcom/ac-element-engagement":53,"@marcom/ac-event-emitter-micro":130,"@marcom/ac-polyfills/Object/create":377,"@marcom/ac-polyfills/console.log":385}],143:[function(b,c,a){c.exports={BaseComponent:b("../core/BaseComponent")}
},{"../core/BaseComponent":140}],144:[function(b,c,a){c.exports={PAGE_TYPE:"data-page-type",SECTION_TYPE:"data-section-type",JUMP_SECTION_NAME:"data-page-jump-name",COMPONENT_LIST:"data-component-list"}
},{}],145:[function(c,d,b){var a={isDesktop:c("@marcom/ac-feature/isDesktop"),isRetina:c("@marcom/ac-feature/isRetina")};
d.exports={TOUCH:undefined,SVG:undefined,PAGE_JUMP:undefined,IS_IE8:undefined,IS_DESKTOP:undefined,IS_RETINA:undefined,init:function(){var f=document.getElementsByTagName("html")[0];
this.TOUCH=f.classList.contains("touch");this.SVG=f.classList.contains("svg");this.PAGE_JUMP=f.classList.contains("pageJump");
this.IS_IE8=f.classList.contains("ie8");this.IS_DESKTOP=a.isDesktop();this.IS_RETINA=a.isRetina()
},extend:function(h){if(!h.hasOwnProperty("init")||(typeof h.init!=="function")){throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function")
}var i=this.init;var g=h.init;var f=Object.assign(this,h);f.init=function(){if(this.HAS_INITIALIZED){return
}this.HAS_INITIALIZED=true;i.call(f);g.call(f)};return f},HAS_INITIALIZED:false}
},{"@marcom/ac-feature/isDesktop":32,"@marcom/ac-feature/isRetina":34}],146:[function(b,c,a){c.exports={BaseSection:b("../core/BaseSection")}
},{"../core/BaseSection":142}],147:[function(b,d,a){var g=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function c(){g.call(this);this._page=null;this.viewportPaddingRatio=1}var f=c.prototype=Object.create(g.prototype);
c.prototype.constructor=c;f.getPage=function(){return this._page};f.setPage=function(h){this._page=h
};f.removePage=function(h){if(h===this._page){this._page=null}};f.getViewportPadding=function(){return this.getPage().getWindowHeight()*this.viewportPaddingRatio
};f.deepRefreshAllElementMetrics=function(){this.trigger(c.prototype.DEEP_REFRESH_ALL_METRICS)
};f.DEEP_REFRESH_ALL_METRICS="page.deep_refresh_all_metrics";d.exports=new c()},{"@marcom/ac-event-emitter-micro":130}],148:[function(b,c,a){c.exports=function(){var d;
if(window.ViewportEmitterTestProxy){d=window.ViewportEmitterTestProxy}else{d={};
d.viewport="large";d.on=d.off=function(){}}return d}},{}],149:[function(b,f,a){var d=b("./ac-ajax/Ajax");
var c=b("./ac-ajax/Request");f.exports=new d();f.exports.Ajax=d;f.exports.Request=c
},{"./ac-ajax/Ajax":150,"./ac-ajax/Request":151}],150:[function(c,g,b){var f=c("./Request");
var h=c("./XDomain-request");var a=c("./URLParser");var d=function(){};d._Request=f;
d.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]},_getOptions:function(i,j){return this._extend({},this._defaults,j,i)
},_isCrossDomainRequest:function(l){var k=new a();var j=k.parse(window.location.href).origin;
var i=k.parse(l).origin;k.destroy();return(i!==j)},create:function(i){return new f(i)
},cors:function(j){var i=(window.XDomainRequest&&document.documentMode<10)?h:f;
return new i(j)},get:function(j){var i;j=this._getOptions({method:"get"},j);if(this._isCrossDomainRequest(j.url)){i=this.cors(j)
}else{i=this.create(j)}return i.send()},getJSON:function(i){return this.get(i).then(function(j){return JSON.parse(j.responseText)
})},head:function(i){i=this._getOptions({method:"head"},i);return this.create(i).send()
},isCrossDomainRequest:function(i){return this._isCrossDomainRequest(i)},post:function(i){i=this._getOptions({method:"post"},i);
return this.create(i).send()}};g.exports=d},{"./Request":151,"./URLParser":152,"./XDomain-request":153}],151:[function(b,d,a){var c=function(f){this._initialize(f)
};c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()
};c.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(f){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(g,f){this.resolve=g;
this.reject=f}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(h){var g=this._validateConfiguration(h);if(g){throw g}this._configuration=h;
var f=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(f,this._configuration.url);this._setRequestHeaders(h.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(f){if(f){f.forEach(function(g){this.xhr.setRequestHeader(g.name,g.value)
},this)}},_setTimeout:function(f){if(!f){if(this._configuration&&this._configuration.timeout){f=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(f>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),f)
}},_timeout:null,_validateConfiguration:function(h){if(!h){return"Must provide a configuration object"
}var g=[];var f=h.headers;if(!h.url){g.push("Must provide a url")}if(!h.method){g.push("Must provide a method")
}if(f){if(!Array.isArray(f)){return"Must provide an array of headers"}this._validateHeaders(f,g)
}return g.join(", ")},_validateHeaders:function(h,j){for(var g=0,f=h.length;g<f;
g++){if(!h[g].hasOwnProperty("name")||!h[g].hasOwnProperty("value")){j.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],152:[function(c,d,b){var a=function(){this.parser=null
};var f=a.prototype;f.parse=function(k){var i;var l;var h;var g;var j;if(typeof k!=="string"){throw new TypeError(k+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(k);
h=this.parser.hostname;l=this.parser.protocol;g=this._normalizePort(this.parser);
i=this.parser.origin||this._constructOriginString(this.parser,g);j=this.parser.search;
return{originalPath:k,qualifiedPath:this.parser.href,protocol:l,hostname:h,origin:i,port:g,search:j}
};f.destroy=function(){this.parser=null};f._constructOriginString=function(i,g){var h=g?":"+g:"";
return i.protocol+"//"+i.hostname+h};f._normalizePort=function(g){return(g.port==="80"||g.port==="443"||g.port==="0")?"":g.port
};f._qualifyPath=function(g){this.parser.href=g;this.parser.href=this.parser.href
};d.exports=a},{}],153:[function(b,d,a){var c=b("./Request");var f=function(g){c.apply(this,arguments)
};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};f.prototype._sendXHR=function(){setTimeout(function(){c.prototype._sendXHR.call(this)
}.bind(this),0)};d.exports=f},{"./Request":151}],154:[function(b,c,a){c.exports.EventEmitter=b("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":155}],155:[function(d,c,f){var h="EventEmitter:propagation";
var k=function(l){if(l){this.context=l}};var g=k.prototype;var i=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var a=function(m,o){var p=m[0];var q=m[1];var n=m[2];if((typeof p!=="string"&&typeof p!=="object")||p===null||Array.isArray(p)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof p==="string")&&!q){throw new Error("Expecting a callback function to be provided.")
}if(q&&(typeof q!=="function")){if(typeof p==="object"&&typeof q==="object"){n=q
}else{throw new TypeError("Expecting callback to be a function.")}}if(typeof p==="object"){for(var l in p){o.call(this,l,p[l],n)
}}if(typeof p==="string"){p=p.split(" ");p.forEach(function(r){o.call(this,r,q,n)
},this)}};var j=function(o,p){var l;var m;var n;l=i.call(this)[o];if(!l||l.length===0){return
}l=l.slice();this._stoppedImmediatePropagation=false;for(m=0,n=l.length;m<n;m++){if(this._stoppedImmediatePropagation||p(l[m],m)){break
}}};var b=function(m,n,o){var l=-1;j.call(this,n,function(q,p){if(q.callback===o){l=p;
return true}});if(l===-1){return}m[n].splice(l,1)};g.on=function(){var l=i.call(this);
a.call(this,arguments,function(n,o,m){l[n]=l[n]||(l[n]=[]);l[n].push({callback:o,context:m})
});return this};g.once=function(){a.call(this,arguments,function(m,o,l){var n=function(p){o.call(l||this,p);
this.off(m,n)};this.on(m,n,this)});return this};g.off=function(n,p){var m=i.call(this);
if(arguments.length===0){this._events={}}else{if(!n||(typeof n!=="string"&&typeof n!=="object")||Array.isArray(n)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof n==="object"){for(var o in n){b.call(this,m,o,n[o])}}if(typeof n==="string"){var l=n.split(" ");
if(l.length===1){if(p){b.call(this,m,n,p)}else{m[n]=[]}}else{l.forEach(function(q){m[q]=[]
})}}return this};g.trigger=function(m,n,l){if(!m){throw new Error("trigger method requires an event name")
}if(typeof m!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(l&&typeof l!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}m=m.split(" ");m.forEach(function(o){j.call(this,o,function(p){p.callback.call(p.context||this.context||this,n)
}.bind(this));if(!l){j.call(this,h,function(q){var p=o;if(q.prefix){p=q.prefix+p
}q.emitter.trigger(p,n)})}},this);return this};g.propagateTo=function(m,n){var l=i.call(this);
if(!l[h]){this._events[h]=[]}l[h].push({emitter:m,prefix:n})};g.stopPropagatingTo=function(o){var m=i.call(this);
if(!o){m[h]=[];return}var p=m[h];var n=p.length;var l;for(l=0;l<n;l++){if(p[l].emitter===o){p.splice(l,1);
break}}};g.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};g.has=function(l,s,p){var o=i.call(this);var m=o[l];if(arguments.length===0){return Object.keys(o)
}if(!m){return false}if(!s){return(m.length>0)?true:false}for(var n=0,q=m.length;
n<q;n++){var r=m[n];if(p&&s&&r.context===p&&r.callback===s){return true}else{if(s&&!p&&r.callback===s){return true
}}}return false};c.exports=k},{}],156:[function(b,c,a){(function(d,f){if(typeof a==="object"&&a){c.exports=f
}else{if(typeof define==="function"&&define.amd){define(f)}else{d.Deferred=f}}}(this,(function(){var g={};
var f,l,n,d,k,j,m,h;f={0:"pending",1:"resolved",2:"rejected"};l=function(r,t){var q,u,s,p,o;
if(this._status!==0){if(console&&console.warn){console.warn("Trying to fulfill more than once.")
}return false}this.data=t;u=this.pending;s=u.length;for(q=0;q<s;q++){p=u[q];if(p[r]){o=p[r](t)
}if(typeof o==="object"&&o.hasOwnProperty("then")&&o.hasOwnProperty("status")){o.then(function(v){p.deferred.resolve(v)
},function(v){p.deferred.reject(v)},function(v){p.deferred.progress(v)})}else{p.deferred[r](o||undefined)
}}if(r!=="progress"){u=[]}return true};j=function(p,o){this.then=p;this.status=o
};m=j.prototype;h=function(o){return o};m.success=function(p,o){return this.then(p.bind(o),h,h)
};m.fail=function(p,o){return this.then(h,p.bind(o),h)};m.progress=function(p,o){return this.then(h,h,p.bind(o))
};d=function(o){if(typeof o!=="function"){return function(){}}return o};n=function(q,p,o){this.resolve=d(q);
this.reject=d(p);this.progress=d(o);this.deferred=new k()};k=function(){this.pending=[];
this._status=0;this._promise=new j(this.then.bind(this),this.status.bind(this))
};k.prototype={status:function(){return f[this._status]},promise:function(){return this._promise
},progress:function(o){l.call(this,"progress",o);return this._promise},resolve:function(o){l.call(this,"resolve",o);
if(this._status===0){this._status=1}return this._promise},reject:function(o){l.call(this,"reject",o);
if(this._status===0){this._status=2}return this._promise},then:function(s,q,p){var o,r;
r=new n(s,q,p);if(this._status===0){this.pending.push(r)}else{if(this._status===1&&typeof s==="function"){o=s(this.data);
if(typeof o==="object"&&o.hasOwnProperty("then")&&o.hasOwnProperty("status")){o.then(function(t){r.deferred.resolve(t)
},function(t){r.deferred.reject(t)},function(t){r.deferred.progress(t)})}else{r.deferred.resolve(o)
}}else{if(this._status===2&&typeof q==="function"){o=q(this.data);r.deferred.reject(o)
}}}return r.deferred.promise()}};var i=function(){var q,p,s,r,o;q=[].slice.call(arguments);
p=new k();s=0;r=function(u){s--;var t=q.indexOf(this);q[t]=u;if(s===0){p.resolve(q)
}};o=function(t){p.reject(t)};q.forEach(function(t){if(t.then){s++}});q.forEach(function(t){if(t.then){t.then(r.bind(t),o)
}});return p.promise()};k.when=i;g.Deferred=k;return g}())))},{}],157:[function(c,b,d){function g(){}g.prototype={resolve:function h(){this._defer.resolve.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},reject:function j(){this._defer.reject.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},progress:function a(){var k="ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
console.warn(k);this._defer.progress.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},then:function f(){this._defer.then.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},promise:function i(){return this._defer.promise.apply(this._defer,Array.prototype.slice.call(arguments))
}};b.exports=g},{}],158:[function(c,d,a){var h=new (c("./ac-deferred/Deferred"))(),g=c("smartsign-deferred").Deferred;
function b(){this._defer=new g()}b.prototype=h;d.exports.join=function i(){return g.when.apply(null,[].slice.call(arguments))
};d.exports.all=function f(j){return g.when.apply(null,j)};d.exports.Deferred=b
},{"./ac-deferred/Deferred":157,"smartsign-deferred":156}],159:[function(b,c,a){b("@marcom/ac-polyfills");
c.exports.Asset=b("./ac-asset-loader/AssetLoader/Asset");c.exports.Asset.Ajax=b("./ac-asset-loader/AssetLoader/Asset/Ajax");
c.exports.Asset.Ajax.JSON=b("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");c.exports.Asset.Img=b("./ac-asset-loader/AssetLoader/Asset/Img");
c.exports.Asset.Video=b("./ac-asset-loader/AssetLoader/Asset/Video");c.exports.Asset.Binary=b("./ac-asset-loader/AssetLoader/Asset/Binary");
c.exports.Asset.Binary.Chunk=b("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
c.exports.AssetLoader=b("./ac-asset-loader/AssetLoader");c.exports.AssetLoader.Queue=b("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":160,"./ac-asset-loader/AssetLoader/Asset":161,"./ac-asset-loader/AssetLoader/Asset/Ajax":162,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":163,"./ac-asset-loader/AssetLoader/Asset/Binary":164,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":165,"./ac-asset-loader/AssetLoader/Asset/Img":166,"./ac-asset-loader/AssetLoader/Asset/Video":169,"./ac-asset-loader/AssetLoader/Queue":170,"@marcom/ac-polyfills":384}],160:[function(b,a,h){var j;
var g=b("@marcom/ac-object");var o=b("@marcom/ac-event-emitter").EventEmitter;var n=b("./AssetLoader/Asset/Ajax");
var f=b("./AssetLoader/Asset/Ajax/JSON");var i=b("./AssetLoader/Asset/Img");var m=b("./AssetLoader/Asset/Video");
var l=b("../utils/destroy");var c=b("./AssetLoader/Queue");var d={};function k(r,p){this.options=g.defaults(d,p||{});
var q=this._generateAssets(r);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(q,this.options)}j=k.prototype=new o();j.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};j._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};j.pause=function(){this._clearTimeout();return this._queue.pause()
};j.destroy=function(){l(this,true)};j.add=function(p){if(!Array.isArray(p)){p=[p]
}p=this._generateAssets(p);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new c(p,this.options);this._bindQueueListeners();return}this._queue.add(p)
};j._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};j._generateAssets=function(q){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}q=[].concat(q);var p=q.map(this._boundGenerateAsset);return p};j._generateAsset=function(q,p){if(k.isValidAsset(q)){q.index=p;
return q}if(typeof q!=="string"||q===""){return null}if(!!q.match(/\.json$/)){return new f(q,p)
}if(!!q.match(/\.(xml|txt)$/)){return new n(q,p)}return new i(q,p)};j._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};j._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};j._onResolved=function(p){this._clearTimeout();this.trigger("loaded",p)};j._onRejected=function(p){this.trigger("error",p)
};j._onProgress=function(p){this.trigger("progress",p)};k.isValidAsset=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.destroy==="function"))
};k.isValidAssetLoader=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.pause==="function")&&(typeof p.destroy==="function"))
};a.exports=k},{"../utils/destroy":171,"./AssetLoader/Asset/Ajax":162,"./AssetLoader/Asset/Ajax/JSON":163,"./AssetLoader/Asset/Img":166,"./AssetLoader/Asset/Video":169,"./AssetLoader/Queue":170,"@marcom/ac-event-emitter":154,"@marcom/ac-object":306}],161:[function(d,g,b){var i;
var c=d("ac-deferred").Deferred;var h=d("@marcom/ac-event-emitter").EventEmitter;
var f=d("../../utils/destroy");function a(k,j){this.src=k;this.index=j;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}i=a.prototype=new h();i.load=function(){this._load()};i.destroy=function(){f(this)
};i._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};i._onLoad=function(){this.trigger("loaded",this)};i._onError=function(){this.trigger("error",this.data)
};g.exports=a},{"../../utils/destroy":171,"@marcom/ac-event-emitter":154,"ac-deferred":158}],162:[function(d,g,b){var i;
var c=d("@marcom/ac-ajax");var a=d("@marcom/ac-object");var h=d("../Asset");function f(k,j){h.apply(this,arguments)
}i=f.prototype=a.create(h.prototype);i._load=function(){c.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};i._onLoad=function(j){this.data=j.response;h.prototype._onLoad.call(this)};g.exports=f
},{"../Asset":161,"@marcom/ac-ajax":149,"@marcom/ac-object":306}],163:[function(c,d,b){var g;
var a=c("@marcom/ac-object");var f=c("../Ajax");function h(i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._onLoad=function(j){try{f.prototype._onLoad.call(this,{response:JSON.parse(j.response||j.responseText)})
}catch(i){this._onError(i)}};d.exports=h},{"../Ajax":162,"@marcom/ac-object":306}],164:[function(b,a,f){var k=b("@marcom/ac-ajax");
var d=b("@marcom/ac-object");var j=b("./Binary/Chunk");var i=b("./../Asset");var c={chunkSize:1024*1024};
function g(m,l){i.apply(this,arguments);this.options=d.defaults(c,l||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var h=g.prototype=d.create(i.prototype);h.pause=function(){var l;
if(this._request!==null){this._request.xhr.abort()}for(l in this._rangeObjects){if(this._rangeObjects[l].isLoaded()===false){this._rangeObjects[l].pause()
}}};h._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};h._getOrCreateRangeObject=function(n){var m=this._rangeObjects[n.toString()];
var l;var o;if(m===undefined){l=(this.options.chunkSize-1);o=n+l;if(o>this._totalSize){l=null
}m=this._rangeObjects[n.toString()]=new j(this.src,{start:n,length:l});this._numRanges+=1
}return m};h._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};h._queueRangeRequests=function(){var p;var o=[];var q;var l;var m;for(var n=0;
n<this._totalSize;n+=this.options.chunkSize){m=this._getOrCreateRangeObject(n);
m.on("loaded",this._onRangeLoad,this);m.load()}};h._afterAllChunksLoaded=function(){var l;
var n=[];for(var m in this._rangeObjects){n.push(this._rangeObjects[m].data)}l=new Blob(n,{type:this._contentType});
this.trigger("loaded",l)};h._afterHeadRequest=function(l){this._totalSize=parseInt(l.getResponseHeader(["Content-Length"]));
this._contentType=l.getResponseHeader(["Content-Type"]);this._request=null};h._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=k.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};a.exports=g},{"./../Asset":161,"./Binary/Chunk":165,"@marcom/ac-ajax":149,"@marcom/ac-object":306}],165:[function(b,a,f){var g;
var j=b("@marcom/ac-ajax");var d=b("@marcom/ac-object");var h=b("../../Asset");
var c={start:0,length:null};function i(l,k){h.apply(this,arguments);this.options=d.defaults(c,k||{});
this._request=null;this.data=null}g=i.prototype=d.create(h.prototype);g.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};g.isLoaded=function(){return(this.data!==null)};g._load=function(){this._request=j.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};g._onLoad=function(k){this.data=k.response;this._request=null;h.prototype._onLoad.call(this,this.data)
};g._buildRangeString=function(){var k="bytes="+this.options.start+"-";if(this.options.length!==null){k+=(this.options.start+this.options.length)
}return k};g._buildQueryString=function(){var k=this.options.start.toString();if(this.options.length!==undefined){k+=(this.options.start+this.options.length)
}return k};a.exports=i},{"../../Asset":161,"@marcom/ac-ajax":149,"@marcom/ac-object":306}],166:[function(c,d,b){var g;
var a=c("@marcom/ac-object");var f=c("../Asset");function h(j,i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._load=function(){var i=new Image();this.data=i;
this._boundOnLoad=this._onLoad.bind(this);i.onload=this._boundOnLoad;i.onerror=this._boundOnError;
i.src=this.src};d.exports=h},{"../Asset":161,"@marcom/ac-object":306}],167:[function(d,a,h){var k=d("@marcom/ac-ajax").Ajax,g=d("@marcom/ac-object"),j=d("./SplitFile/Chunk"),b=d("../Asset");
var i;var f={splitManifestTimeout:5000,splitChunkTimeout:null};var c=function(m,l){b.apply(this,arguments);
if(m.lastIndexOf("/")!==m.length-1){m=m+"/"}this.options=g.extend(f,l||{});this._manifestPath=m+"manifest.json";
this._ajax=new k();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
i=c.prototype=g.create(b.prototype);i._load=function(){var l={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(l);this._request.send().then(this._boundOnManifestLoaded)
};i._onManifestLoaded=function(p){this._manifest=JSON.parse(p.responseText);this._chunksLen=this._manifest.files.length;
var n,o=this._manifest.files,m,l=this._chunksLen;for(n=0;n<l;n++){m=this._getOrCreateChunkObject(o[n],n);
m.once("loaded",this._onChunkLoaded,this);m.load()}this._request=null;this._ajax=null
};i._getOrCreateChunkObject=function(n,l){var o=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[l]){var q=n.path;if(!q.match(/(^http(s?))/)){q=this.src+"/"+q}else{if(!!this.src.match(/(^http(s?))/)){var p=q.indexOf("/",10);
var m=this.src.indexOf("/",10);q=this.src.substring(0,m)+q.substring(p)}}this._chunks[l]=new j(q,o)
}return this._chunks[l]};i._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var n,l=this._chunks.length,m=[];
for(n=0;n<l;n++){m.push(this._chunks[n].data);this._chunks[n].off()}this.data=new Blob(m,{type:this._manifest.mimeType});
m=this._chunks=null;this.trigger("loaded",this.data)}};i.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};a.exports=c},{"../Asset":161,"./SplitFile/Chunk":168,"@marcom/ac-ajax":149,"@marcom/ac-object":306}],168:[function(c,a,g){var h;
var j=c("@marcom/ac-ajax");var f=c("@marcom/ac-object");var b=c("../../Asset");
var d={timeout:30*1000};function i(l,k){b.apply(this,arguments);this.options=f.extend(d,k||{});
this._request=null;this.data=null}h=i.prototype=f.create(b.prototype);h.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};h.isLoaded=function(){return(this.data!==null)};h._load=function(){this._request=j.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};h._onLoad=function(k){this.data=k.response;this._request=null;b.prototype._onLoad.call(this,this.data)
};a.exports=i},{"../../Asset":161,"@marcom/ac-ajax":149,"@marcom/ac-object":306}],169:[function(c,a,h){var j;
var g=c("@marcom/ac-feature");var f=c("@marcom/ac-object");var i=c("./Binary");
var k=c("../Asset");var b=c("./SplitFile");var d={chunkSize:1024*1024,split:false};
function l(n,m){k.apply(this,arguments);this.options=f.defaults(d,m||{});this._binary=this.options.binary||this._createAssetType()
}j=l.prototype=f.create(k.prototype);j._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function")
};j._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new b(this.src,this.options)
}return new i(this.src,this.options)}};j._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};j._onLoad=function(n){var m=n;
if(n instanceof window.Blob){m=this.options.element;if(!m){m=document.createElement("video")
}if(m.getAttribute("type")!==n.type){m.setAttribute("type",n.type)}m.src=window.URL.createObjectURL(n)
}k.prototype._onLoad.call(this,m)};j.pause=function(){this._binary.pause()};j.destroy=function(){this._binary.destroy();
k.prototype.destroy.call(this)};a.exports=l},{"../Asset":161,"./Binary":164,"./SplitFile":167,"@marcom/ac-feature":22,"@marcom/ac-object":306}],170:[function(b,a,g){var h;
var f=b("@marcom/ac-object");var i=b("ac-deferred").Deferred;var k=b("@marcom/ac-event-emitter").EventEmitter;
var j=b("../../utils/destroy");var d={threads:4};function c(m,l){this.options=f.defaults(d,l||{});
this._queue=m;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new i();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}h=c.prototype=new k();h.start=function(){var m=this._availableThreads;var l;this.paused=false;
if(m>this._queue.length){m=this._queue.length}for(l=1;l<=m;l++){this._startNewThread()
}return this.promise};h.pause=function(){this.paused=true;var l=[];this._active.forEach(function(n,m){if(typeof n.pause==="function"){this._queue.unshift(n);
this._releaseThread();n.off("loaded");n.off("error");n.pause();l.push(m)}},this);
l.forEach(function(m){this._active.splice(m,1)},this)};h.add=function(l){this._queue=this._queue.concat(l)
};h.destroy=function(){this.pause();j(this)};h._startNewThread=function(){var m=this._queue.shift();
this._occupyThread();if(m&&typeof m.load==="function"){var l=function(o){this._onProgress(o);
this._active.splice(this._active.indexOf(m),1);m.off("error",n)};var n=function(o){this._onError();
m.off("loaded",l)};m.once("loaded",l,this);m.once("error",n,this);m.load()}else{this._onError()
}this._active.push(m)};h._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};h._onError=function(l){if(this._errored){return false
}this._errored=true;this._deferred.reject(l);this.trigger("rejected",l)};h.abort=function(){this._deferred.reject()
};h._onProgress=function(l){if(this._errored){return false}this._releaseThread();
this._data[l.index]=l.data;this.trigger("progress",l.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};h._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};h._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};a.exports=c},{"../../utils/destroy":171,"@marcom/ac-event-emitter":154,"@marcom/ac-object":306,"ac-deferred":158}],171:[function(b,d,a){d.exports=function c(f,g){if(typeof f.off==="function"){f.off()
}function h(j){var i=true;for(var k in j){if(j.hasOwnProperty(k)){if(j[k]!==null){i=false;
break}}}return i}window.setTimeout(function(){var i;for(i in f){if(f.hasOwnProperty(i)){if(g&&f[i]&&typeof f[i].destroy==="function"&&!h(f[i])){f[i].destroy()
}f[i]=null}}})}},{}],172:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],173:[function(g,c,i){g("@marcom/ac-polyfills/Array/prototype.indexOf");
var o=g("@marcom/ac-dom-nodes/isNode");var b=g("@marcom/ac-dom-nodes/COMMENT_NODE");
var k=g("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var j=g("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var h=g("@marcom/ac-dom-nodes/ELEMENT_NODE");var f=g("@marcom/ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":198,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":199,"@marcom/ac-dom-nodes/DOCUMENT_NODE":200,"@marcom/ac-dom-nodes/ELEMENT_NODE":202,"@marcom/ac-dom-nodes/TEXT_NODE":203,"@marcom/ac-dom-nodes/isNode":220,"@marcom/ac-polyfills/Array/prototype.indexOf":356}],174:[function(d,f,c){var g=d("@marcom/ac-dom-nodes/isElement");
var i=d("./internal/validate");var a=d("./internal/nativeMatches");var h=d("./shims/matchesSelector");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":172,"./internal/validate":173,"./shims/matchesSelector":176,"@marcom/ac-dom-nodes/isElement":219}],175:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");
var h=b("./internal/validate");var g=b("./shims/querySelectorAll");var f=("querySelectorAll" in document);
c.exports=function d(i,j){j=j||document;h.parentNode(j,true,"querySelectorAll","context");
h.selector(i,true,"querySelectorAll");if(!f){return g(i,j)}return Array.prototype.slice.call(j.querySelectorAll(i))
}},{"./internal/validate":173,"./shims/querySelectorAll":177,"@marcom/ac-polyfills/Array/prototype.slice":361}],176:[function(c,d,b){var f=c("../querySelectorAll");
d.exports=function a(l,g){var k=l.parentNode||document;var h=f(g,k);var j;for(j=0;
j<h.length;j++){if(h[j]===l){return true}}return false}},{"../querySelectorAll":175}],177:[function(c,b,f){c("@marcom/ac-polyfills/Array/prototype.indexOf");
var j=c("@marcom/ac-dom-nodes/isElement");var h=c("@marcom/ac-dom-nodes/isDocumentFragment");
var k=c("@marcom/ac-dom-nodes/remove");var d="_ac_qsa_";var i=function(n,l){var m;
if(l===document){return true}m=n;while((m=m.parentNode)&&j(m)){if(m===l){return true
}}return false};var g=function(l){if("recalc" in l){l.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};b.exports=function a(l,n){var p=document.createElement("style");
var q=d+(Math.random()+"").slice(-6);var m=[];var o;n=n||document;document[q]=[];
if(h(n)){n.appendChild(p)}else{document.documentElement.firstChild.appendChild(p)
}p.styleSheet.cssText="*{display:recalc;}"+l+'{ac-qsa:expression(document["'+q+'"] && document["'+q+'"].push(this));}';
g(n);while(document[q].length){o=document[q].shift();o.style.removeAttribute("ac-qsa");
if(m.indexOf(o)===-1&&i(o,n)){m.push(o)}}document[q]=null;k(p);g(n);return m}},{"@marcom/ac-dom-nodes/isDocumentFragment":217,"@marcom/ac-dom-nodes/isElement":219,"@marcom/ac-dom-nodes/remove":223,"@marcom/ac-polyfills/Array/prototype.indexOf":356}],178:[function(b,c,a){arguments[4][154][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":179,dup:154}],179:[function(b,c,a){arguments[4][155][0].apply(a,arguments)
},{dup:155}],180:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":181}],181:[function(c,b,d){var f;var k=c("ac-event-emitter").EventEmitter,j=c("./DOMEmitterEvent"),g={addEventListener:c("@marcom/ac-dom-events/addEventListener"),removeEventListener:c("@marcom/ac-dom-events/removeEventListener"),dispatchEvent:c("@marcom/ac-dom-events/dispatchEvent")},a={querySelectorAll:c("@marcom/ac-dom-traversal/querySelectorAll"),matchesSelector:c("@marcom/ac-dom-traversal/matchesSelector")};
var i="dom-emitter";function h(l){if(l===null){return}this.el=l;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new k()}f=h.prototype;f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f.has=function(l,q,p,n){var o,r;if(typeof q==="string"){o=q;r=p}else{r=q;
n=p}if(o){var m=this._getDelegateFuncBindingIdx(l,o,r,n,true);if(m>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(n,m,o,s){n=this._parseEventNames(n);n=this._cleanStringData(n);
var q,r,p,l=n.length;if(typeof m==="string"){q=this._cleanStringData(m);r=o}else{r=m;
s=o}for(p=0;p<l;p++){this._triggerDOMEvents(n[p],r,q)}return this};f.emitterTrigger=function(m,o,p){if(!this._eventEmitter){return this
}m=this._parseEventNames(m);m=this._cleanStringData(m);o=new j(o,this);var n,l=m.length;
for(n=0;n<l;n++){this._eventEmitter.trigger(m[n],o,p)}return this};f.propagateTo=function(l,m){this._eventEmitter.propagateTo(l,m);
return this};f.stopPropagatingTo=function(l){this._eventEmitter.stopPropagatingTo(l);
return this};f.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null}}};f._parseEventNames=function(l){if(!l){return[l]
}return l.split(" ")};f._onListenerEvent=function(n,m){var l=new j(m,this);this._eventEmitter.trigger(n,l,false)
};f._setListener=function(l){this._bindings[l]=this._onListenerEvent.bind(this,l);
g.addEventListener(this.el,l,this._bindings[l])};f._removeListener=function(l){g.removeEventListener(this.el,l,this._bindings[l]);
this._bindings[l]=null};f._triggerInternalEvent=function(l,m){this.emitterTrigger(i+":"+l,m)
};f._normalizeArgumentsAndCall=function(l,n){var r={};if(l.length===0){n.call(this,r);
return}if(typeof l[0]==="string"||l[0]===null){l=this._cleanStringData(l);r.events=l[0];
if(typeof l[1]==="string"){r.delegateQuery=l[1];r.callback=l[2];r.context=l[3]}else{r.callback=l[1];
r.context=l[2]}n.call(this,r);return}var m,p,q=":",o=l[0];for(m in o){if(o.hasOwnProperty(m)){r={};
p=this._cleanStringData(m.split(q));r.events=p[0];r.delegateQuery=p[1];r.callback=o[m];
r.context=l[1];n.call(this,r)}}};f._registerDelegateFunc=function(n,p,q,l,o){var m=this._delegateFunc.bind(this,n,p,q,o);
this._delegateFuncs[p]=this._delegateFuncs[p]||{};this._delegateFuncs[p][n]=this._delegateFuncs[p][n]||[];
this._delegateFuncs[p][n].push({func:l,context:o,delegateFunc:m});return m};f._cleanStringData=function(o){var n=false;
if(typeof o==="string"){o=[o];n=true}var m=[],q,s,r,p,l=o.length;for(q=0;q<l;q++){s=o[q];
if(typeof s==="string"){if(s===""||s===" "){continue}r=s.length;while(s[0]===" "){s=s.slice(1,r);
r--}while(s[r-1]===" "){s=s.slice(0,r-1);r--}}m.push(s)}if(n){return m[0]}return m
};f._unregisterDelegateFunc=function(n,q,l,p){if(!this._delegateFuncs[q]||!this._delegateFuncs[q][n]){return
}var o=this._getDelegateFuncBindingIdx(n,q,l,p),m;if(o>-1){m=this._delegateFuncs[q][n][o].delegateFunc;
this._delegateFuncs[q][n].splice(o,1);if(this._delegateFuncs[q][n].length===0){this._delegateFuncs[q][n]=null
}}return m};f._unregisterDelegateFuncs=function(l,n){if(!this._delegateFuncs[n]){return
}if(l!==null&&!this._delegateFuncs[n][l]){return}if(l===null){var m;for(m in this._delegateFuncs[n]){if(this._delegateFuncs[n].hasOwnProperty(m)){this._unbindDelegateFunc(m,n)
}}return}this._unbindDelegateFunc(l,n)};f._unbindDelegateFunc=function(l,n){var o,p,m=0;
while(this._delegateFuncs[n][l]&&this._delegateFuncs[n][l][m]){o=this._delegateFuncs[n][l][m];
p=this._delegateFuncs[n][l][m].length;this._off({events:l,delegateQuery:n,callback:o.func,context:o.context});
if(this._delegateFuncs[n][l]&&p===this._delegateFuncs[n][l].length){m++}}o=p=null
};f._unregisterDelegateFuncsByEvent=function(l){var m;for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._unregisterDelegateFuncs(l,m)
}}};f._delegateFunc=function(l,p,r,n,q){if(this._targetHasDelegateAncestor(q.target,p)){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
n=n||window;if(typeof q.detail==="object"){o[0]=q.detail}r.apply(n,o)}};f._targetHasDelegateAncestor=function(n,m){var l=n;
while(l&&l!==this.el&&l!==document.documentElement){if(a.matchesSelector(l,m)){return true
}l=l.parentNode}return false};f._on=function(p){var m=p.events,q=p.callback,o=p.delegateQuery,n=p.context,l=p.unboundCallback||q;
m=this._parseEventNames(m);m.forEach(function(v,r,t,u,s){if(!this.has(s)){this._setListener(s)
}if(typeof u==="string"){v=this._registerDelegateFunc(s,u,v,r,t)}this._triggerInternalEvent("willon",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.on(s,v,t);this._triggerInternalEvent("didon",{evt:s,callback:v,context:t,delegateQuery:u})
}.bind(this,q,l,n,o));m=q=l=o=n=null};f._off=function(q){var m=q.events,r=q.callback,p=q.delegateQuery,o=q.context,l=q.unboundCallback||r;
if(typeof m==="undefined"){this._eventEmitter.off();var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}for(n in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(n)){this._delegateFuncs[n]=null
}}return}m=this._parseEventNames(m);m.forEach(function(w,s,u,v,t){if(typeof v==="string"&&typeof s==="function"){w=this._unregisterDelegateFunc(t,v,s,u);
if(!w){return}}if(typeof v==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncs(t,v);
return}if(typeof t==="string"&&typeof w==="undefined"){this._unregisterDelegateFuncsByEvent(t);
if(typeof v==="string"){return}}this._triggerInternalEvent("willoff",{evt:t,callback:w,context:u,delegateQuery:v});
this._eventEmitter.off(t,w,u);this._triggerInternalEvent("didoff",{evt:t,callback:w,context:u,delegateQuery:v});
if(!this.has(t)){this._removeListener(t)}}.bind(this,r,l,o,p));m=r=l=p=o=null};
f._once=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context;l=this._parseEventNames(l);
l.forEach(function(t,r,s,q){if(typeof s==="string"){return this._handleDelegateOnce(q,t,r,s)
}if(!this.has(q)){this._setListener(q)}this._triggerInternalEvent("willonce",{evt:q,callback:t,context:r,delegateQuery:s});
this._eventEmitter.once.call(this,q,t,r);this._triggerInternalEvent("didonce",{evt:q,callback:t,context:r,delegateQuery:s})
}.bind(this,p,m,n));l=p=n=m=null};f._handleDelegateOnce=function(l,o,m,n){this._triggerInternalEvent("willonce",{evt:l,callback:o,context:m,delegateQuery:n});
this._on({events:l,context:m,delegateQuery:n,callback:this._getDelegateOnceCallback.bind(this,l,o,m,n),unboundCallback:o});
this._triggerInternalEvent("didonce",{evt:l,callback:o,context:m,delegateQuery:n});
return this};f._getDelegateOnceCallback=function(l,q,n,p){var m=Array.prototype.slice.call(arguments,0),o=m.slice(4,m.length);
q.apply(n,o);this._off({events:l,delegateQuery:p,callback:q,context:n})};f._getDelegateFuncBindingIdx=function(s,p,n,l,t){var r=-1;
if(this._delegateFuncs[p]&&this._delegateFuncs[p][s]){var o,m,q=this._delegateFuncs[p][s].length;
for(o=0;o<q;o++){m=this._delegateFuncs[p][s][o];if(t&&typeof n==="undefined"){n=m.func
}if(m.func===n&&m.context===l){r=o;break}}}return r};f._triggerDOMEvents=function(n,q,p){var m=[this.el];
if(p){m=a.querySelectorAll(p,this.el)}var o,r,l=m.length;for(o=0;o<l;o++){g.dispatchEvent(m[o],n,{bubbles:true,cancelable:true,detail:q})
}};b.exports=h},{"./DOMEmitterEvent":182,"@marcom/ac-dom-events/addEventListener":183,"@marcom/ac-dom-events/dispatchEvent":184,"@marcom/ac-dom-events/removeEventListener":191,"@marcom/ac-dom-traversal/matchesSelector":174,"@marcom/ac-dom-traversal/querySelectorAll":175,"ac-event-emitter":178}],182:[function(b,c,a){var f={preventDefault:b("@marcom/ac-dom-events/preventDefault"),stopPropagation:b("@marcom/ac-dom-events/stopPropagation"),target:b("@marcom/ac-dom-events/target")};
var d;var g=function(i,h){this._domEmitter=h;this.originalEvent=i||{};this._originalTarget=f.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(i){this.data=this.originalEvent;this.originalEvent={}}}};d=g.prototype;
d.preventDefault=function(){f.preventDefault(this.originalEvent)};d.stopPropagation=function(){f.stopPropagation(this.originalEvent)
};d.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};d._isDOMEvent=function(h){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&h instanceof CustomEvent)){return true
}return false};c.exports=g},{"@marcom/ac-dom-events/preventDefault":190,"@marcom/ac-dom-events/stopPropagation":193,"@marcom/ac-dom-events/target":194}],183:[function(b,c,a){arguments[4][63][0].apply(a,arguments)
},{"./shared/getEventType":192,"./utils/addEventListener":195,dup:63}],184:[function(b,c,a){arguments[4][64][0].apply(a,arguments)
},{"./shared/getEventType":192,"./utils/dispatchEvent":196,dup:64}],185:[function(b,c,a){arguments[4][1][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":186,"./shared/prefixHelper":187,"./shared/windowFallbackEventTypes":188,"./utils/eventTypeAvailable":189,dup:1}],186:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],187:[function(b,c,a){arguments[4][3][0].apply(a,arguments)},{dup:3}],188:[function(b,c,a){arguments[4][4][0].apply(a,arguments)
},{dup:4}],189:[function(b,c,a){arguments[4][5][0].apply(a,arguments)},{dup:5}],190:[function(b,c,a){arguments[4][71][0].apply(a,arguments)
},{dup:71}],191:[function(b,c,a){arguments[4][72][0].apply(a,arguments)},{"./shared/getEventType":192,"./utils/removeEventListener":197,dup:72}],192:[function(b,c,a){arguments[4][73][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getEventType":185,dup:73}],193:[function(b,c,a){arguments[4][75][0].apply(a,arguments)
},{dup:75}],194:[function(b,c,a){arguments[4][76][0].apply(a,arguments)},{dup:76}],195:[function(b,c,a){arguments[4][77][0].apply(a,arguments)
},{dup:77}],196:[function(b,c,a){arguments[4][78][0].apply(a,arguments)},{"@marcom/ac-polyfills/CustomEvent":363,dup:78}],197:[function(b,c,a){arguments[4][79][0].apply(a,arguments)
},{dup:79}],198:[function(b,c,a){arguments[4][85][0].apply(a,arguments)},{dup:85}],199:[function(b,c,a){arguments[4][86][0].apply(a,arguments)
},{dup:86}],200:[function(b,c,a){arguments[4][87][0].apply(a,arguments)},{dup:87}],201:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{dup:88}],202:[function(b,c,a){arguments[4][89][0].apply(a,arguments)},{dup:89}],203:[function(b,c,a){arguments[4][90][0].apply(a,arguments)
},{dup:90}],204:[function(b,c,a){arguments[4][91][0].apply(a,arguments)},{"./COMMENT_NODE":198,"./DOCUMENT_FRAGMENT_NODE":199,"./DOCUMENT_NODE":200,"./DOCUMENT_TYPE_NODE":201,"./ELEMENT_NODE":202,"./TEXT_NODE":203,"./createDocumentFragment":205,"./filterByNodeType":206,"./hasAttribute":207,"./indexOf":208,"./insertAfter":209,"./insertBefore":210,"./insertFirstChild":211,"./insertLastChild":212,"./isComment":215,"./isDocument":216,"./isDocumentFragment":217,"./isDocumentType":218,"./isElement":219,"./isNode":220,"./isNodeList":221,"./isTextNode":222,"./remove":223,"./replace":224,dup:91}],205:[function(b,c,a){arguments[4][92][0].apply(a,arguments)
},{dup:92}],206:[function(b,c,a){arguments[4][93][0].apply(a,arguments)},{"./ELEMENT_NODE":202,"./internal/isNodeType":213,"@marcom/ac-polyfills/Array/prototype.filter":354,"@marcom/ac-polyfills/Array/prototype.slice":361,dup:93}],207:[function(b,c,a){arguments[4][94][0].apply(a,arguments)
},{dup:94}],208:[function(b,c,a){arguments[4][95][0].apply(a,arguments)},{"./filterByNodeType":206,"./internal/validate":214,"@marcom/ac-polyfills/Array/prototype.indexOf":356,"@marcom/ac-polyfills/Array/prototype.slice":361,dup:95}],209:[function(b,c,a){arguments[4][96][0].apply(a,arguments)
},{"./internal/validate":214,dup:96}],210:[function(b,c,a){arguments[4][97][0].apply(a,arguments)
},{"./internal/validate":214,dup:97}],211:[function(b,c,a){arguments[4][98][0].apply(a,arguments)
},{"./internal/validate":214,dup:98}],212:[function(b,c,a){arguments[4][99][0].apply(a,arguments)
},{"./internal/validate":214,dup:99}],213:[function(b,c,a){arguments[4][100][0].apply(a,arguments)
},{"../isNode":220,dup:100}],214:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{"../COMMENT_NODE":198,"../DOCUMENT_FRAGMENT_NODE":199,"../ELEMENT_NODE":202,"../TEXT_NODE":203,"./isNodeType":213,dup:101}],215:[function(b,c,a){arguments[4][102][0].apply(a,arguments)
},{"./COMMENT_NODE":198,"./internal/isNodeType":213,dup:102}],216:[function(b,c,a){arguments[4][103][0].apply(a,arguments)
},{"./DOCUMENT_NODE":200,"./internal/isNodeType":213,dup:103}],217:[function(b,c,a){arguments[4][104][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":199,"./internal/isNodeType":213,dup:104}],218:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":201,"./internal/isNodeType":213,dup:105}],219:[function(b,c,a){arguments[4][106][0].apply(a,arguments)
},{"./ELEMENT_NODE":202,"./internal/isNodeType":213,dup:106}],220:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],221:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108}],222:[function(b,c,a){arguments[4][109][0].apply(a,arguments)
},{"./TEXT_NODE":203,"./internal/isNodeType":213,dup:109}],223:[function(b,c,a){arguments[4][110][0].apply(a,arguments)
},{"./internal/validate":214,dup:110}],224:[function(b,c,a){arguments[4][111][0].apply(a,arguments)
},{"./internal/validate":214,dup:111}],225:[function(d,f,c){var b=d("./shared/stylePropertyCache");
var h=d("./getStyleProperty");var g=d("./getStyleValue");f.exports=function a(k,j){var i;
k=h(k);if(!k){return false}i=b[k].css;if(typeof j!=="undefined"){j=g(k,j);if(j===false){return false
}i+=":"+j+";"}return i}},{"./getStyleProperty":226,"./getStyleValue":227,"./shared/stylePropertyCache":230}],226:[function(b,c,a){arguments[4][11][0].apply(a,arguments)
},{"./shared/getStyleTestElement":228,"./shared/prefixHelper":229,"./shared/stylePropertyCache":230,"./utils/toCSS":233,"./utils/toDOM":234,dup:11}],227:[function(b,c,a){arguments[4][12][0].apply(a,arguments)
},{"./getStyleProperty":226,"./shared/prefixHelper":229,"./shared/stylePropertyCache":230,"./shared/styleValueAvailable":231,dup:12}],228:[function(b,c,a){arguments[4][14][0].apply(a,arguments)
},{dup:14}],229:[function(b,c,a){arguments[4][3][0].apply(a,arguments)},{dup:3}],230:[function(b,c,a){arguments[4][16][0].apply(a,arguments)
},{dup:16}],231:[function(b,c,a){arguments[4][17][0].apply(a,arguments)},{"./getStyleTestElement":228,"./stylePropertyCache":230,dup:17}],232:[function(c,d,a){var b=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
d.exports=function f(g){g=String.prototype.replace.call(g,b,"");return g.charAt(0).toLowerCase()+g.substring(1)
}},{}],233:[function(b,c,a){arguments[4][20][0].apply(a,arguments)},{dup:20}],234:[function(b,c,a){arguments[4][21][0].apply(a,arguments)
},{dup:21}],235:[function(b,c,a){c.exports={getStyle:b("./getStyle"),setStyle:b("./setStyle")}
},{"./getStyle":236,"./setStyle":238}],236:[function(c,d,b){var f=c("@marcom/ac-prefixer/getStyleProperty");
var g=c("@marcom/ac-prefixer/stripPrefixes");d.exports=function a(){var k=Array.prototype.slice.call(arguments);
var p=k.shift(k);var m=window.getComputedStyle(p);var l={};var o;var h;var n;var j;
if(typeof k[0]!=="string"){k=k[0]}for(j=0;j<k.length;j++){o=k[j];h=f(o);if(h){o=g(h);
n=m[h];if(!n||n==="auto"){n=null}if(n){n=g(n)}}else{n=null}l[o]=n}return l}},{"@marcom/ac-prefixer/getStyleProperty":226,"@marcom/ac-prefixer/stripPrefixes":232}],237:[function(c,d,b){d.exports=function a(j){var h;
var g;var f;if(!j&&j!==0){return""}if(Array.isArray(j)){return j+""}if(typeof j==="object"){h="";
g=Object.keys(j);for(f=0;f<g.length;f++){h+=g[f]+"("+j[g[f]]+") "}return h.trim()
}return j}},{}],238:[function(d,f,c){var a=d("@marcom/ac-prefixer/getStyleCSS");
var g=d("@marcom/ac-prefixer/getStyleProperty");var b=d("./internal/normalizeValue");
f.exports=function h(o,l){var k="";var j;var n;var i;var m;var p;if(typeof l!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(n in l){m=b(l[n]);if(!m&&m!==0){i=g(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=a(n,m);if(j!==false){k+=" "+j}}}if(k.length){p=o.style.cssText;
if(p.charAt(p.length-1)!==";"){p+=";"}p+=k;o.style.cssText=p}return o}},{"./internal/normalizeValue":237,"@marcom/ac-prefixer/getStyleCSS":225,"@marcom/ac-prefixer/getStyleProperty":226}],239:[function(b,c,a){arguments[4][149][0].apply(a,arguments)
},{"./ac-ajax/Ajax":240,"./ac-ajax/Request":241,dup:149}],240:[function(b,c,a){arguments[4][150][0].apply(a,arguments)
},{"./Request":241,"./URLParser":242,"./XDomain-request":243,dup:150}],241:[function(b,c,a){arguments[4][151][0].apply(a,arguments)
},{dup:151}],242:[function(b,c,a){arguments[4][152][0].apply(a,arguments)},{dup:152}],243:[function(b,c,a){arguments[4][153][0].apply(a,arguments)
},{"./Request":241,dup:153}],244:[function(b,c,a){arguments[4][154][0].apply(a,arguments)
},{"./ac-event-emitter/EventEmitter":245,dup:154}],245:[function(b,c,a){arguments[4][155][0].apply(a,arguments)
},{dup:155}],246:[function(b,c,a){arguments[4][156][0].apply(a,arguments)},{dup:156}],247:[function(b,c,a){arguments[4][157][0].apply(a,arguments)
},{dup:157}],248:[function(b,c,a){arguments[4][158][0].apply(a,arguments)},{"./ac-deferred/Deferred":247,dup:158,"smartsign-deferred":246}],249:[function(b,c,a){b("@marcom/ac-polyfills");
c.exports.Asset=b("./ac-asset-loader/AssetLoader/Asset");c.exports.Asset.Ajax=b("./ac-asset-loader/AssetLoader/Asset/Ajax");
c.exports.Asset.Ajax.JSON=b("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");c.exports.Asset.Img=b("./ac-asset-loader/AssetLoader/Asset/Img");
c.exports.Asset.Video=b("./ac-asset-loader/AssetLoader/Asset/Video");c.exports.Asset.Binary=b("./ac-asset-loader/AssetLoader/Asset/Binary");
c.exports.Asset.Binary.Chunk=b("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
c.exports.AssetLoader=b("./ac-asset-loader/AssetLoader");c.exports.AssetLoader.Queue=b("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":250,"./ac-asset-loader/AssetLoader/Asset":251,"./ac-asset-loader/AssetLoader/Asset/Ajax":252,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":253,"./ac-asset-loader/AssetLoader/Asset/Binary":254,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":255,"./ac-asset-loader/AssetLoader/Asset/Img":256,"./ac-asset-loader/AssetLoader/Asset/Video":259,"./ac-asset-loader/AssetLoader/Queue":260,"@marcom/ac-polyfills":384}],250:[function(b,a,h){var j;
var g=b("@marcom/ac-object");var o=b("@marcom/ac-event-emitter").EventEmitter;var n=b("./AssetLoader/Asset/Ajax");
var f=b("./AssetLoader/Asset/Ajax/JSON");var i=b("./AssetLoader/Asset/Img");var m=b("./AssetLoader/Asset/Video");
var l=b("../utils/destroy");var c=b("./AssetLoader/Queue");var d={};function k(r,p){this.options=g.defaults(d,p||{});
var q=this._generateAssets(r);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(q,this.options)}j=k.prototype=new o();j.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};j._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};j.pause=function(){this._clearTimeout();return this._queue.pause()
};j.destroy=function(){l(this,true)};j.add=function(p){if(!Array.isArray(p)){p=[p]
}p=this._generateAssets(p);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new c(p,this.options);this._bindQueueListeners();return}this._queue.add(p)
};j._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};j._generateAssets=function(q){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}q=[].concat(q);var p=q.map(this._boundGenerateAsset);return p};j._generateAsset=function(q,p){if(k.isValidAsset(q)){q.index=p;
return q}if(typeof q!=="string"||q===""){return null}if(!!q.match(/\.json$/)){return new f(q,p)
}if(!!q.match(/\.(xml|txt)$/)){return new n(q,p)}return new i(q,p)};j._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};j._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};j._onResolved=function(p){this._clearTimeout();this.trigger("loaded",p)};j._onRejected=function(p){this.trigger("error",p)
};j._onProgress=function(p){this.trigger("progress",p)};k.isValidAsset=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.destroy==="function"))
};k.isValidAssetLoader=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.pause==="function")&&(typeof p.destroy==="function"))
};a.exports=k},{"../utils/destroy":261,"./AssetLoader/Asset/Ajax":252,"./AssetLoader/Asset/Ajax/JSON":253,"./AssetLoader/Asset/Img":256,"./AssetLoader/Asset/Video":259,"./AssetLoader/Queue":260,"@marcom/ac-event-emitter":244,"@marcom/ac-object":306}],251:[function(d,g,b){var i;
var c=d("ac-deferred").Deferred;var h=d("@marcom/ac-event-emitter").EventEmitter;
var f=d("../../utils/destroy");function a(k,j){this.src=k;this.index=j;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}i=a.prototype=new h();i.load=function(){this._load()};i.destroy=function(){f(this)
};i._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};i._onLoad=function(){this.trigger("loaded",this)};i._onError=function(){this.trigger("error",this.data)
};g.exports=a},{"../../utils/destroy":261,"@marcom/ac-event-emitter":244,"ac-deferred":248}],252:[function(d,g,b){var i;
var c=d("@marcom/ac-ajax");var a=d("@marcom/ac-object");var h=d("../Asset");function f(k,j){h.apply(this,arguments)
}i=f.prototype=a.create(h.prototype);i._load=function(){c.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};i._onLoad=function(j){this.data=j.response;h.prototype._onLoad.call(this)};g.exports=f
},{"../Asset":251,"@marcom/ac-ajax":239,"@marcom/ac-object":306}],253:[function(c,d,b){var g;
var a=c("@marcom/ac-object");var f=c("../Ajax");function h(i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._onLoad=function(j){try{f.prototype._onLoad.call(this,{response:JSON.parse(j.response||j.responseText)})
}catch(i){this._onError(i)}};d.exports=h},{"../Ajax":252,"@marcom/ac-object":306}],254:[function(b,a,f){var k=b("@marcom/ac-ajax");
var d=b("@marcom/ac-object");var j=b("./Binary/Chunk");var i=b("./../Asset");var c={chunkSize:1024*1024};
function g(m,l){i.apply(this,arguments);this.options=d.defaults(c,l||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var h=g.prototype=d.create(i.prototype);h.pause=function(){var l;
if(this._request!==null){this._request.xhr.abort()}for(l in this._rangeObjects){if(this._rangeObjects[l].isLoaded()===false){this._rangeObjects[l].pause()
}}};h._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};h._getOrCreateRangeObject=function(n){var m=this._rangeObjects[n.toString()];
var l;var o;if(m===undefined){l=(this.options.chunkSize-1);o=n+l;if(o>this._totalSize){l=null
}m=this._rangeObjects[n.toString()]=new j(this.src,{start:n,length:l});this._numRanges+=1
}return m};h._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};h._queueRangeRequests=function(){var p;var o=[];var q;var l;var m;for(var n=0;
n<this._totalSize;n+=this.options.chunkSize){m=this._getOrCreateRangeObject(n);
m.on("loaded",this._onRangeLoad,this);m.load()}};h._afterAllChunksLoaded=function(){var l;
var n=[];for(var m in this._rangeObjects){n.push(this._rangeObjects[m].data)}l=new Blob(n,{type:this._contentType});
this.trigger("loaded",l)};h._afterHeadRequest=function(l){this._totalSize=parseInt(l.getResponseHeader(["Content-Length"]));
this._contentType=l.getResponseHeader(["Content-Type"]);this._request=null};h._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=k.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};a.exports=g},{"./../Asset":251,"./Binary/Chunk":255,"@marcom/ac-ajax":239,"@marcom/ac-object":306}],255:[function(b,a,f){var g;
var j=b("@marcom/ac-ajax");var d=b("@marcom/ac-object");var h=b("../../Asset");
var c={start:0,length:null};function i(l,k){h.apply(this,arguments);this.options=d.defaults(c,k||{});
this._request=null;this.data=null}g=i.prototype=d.create(h.prototype);g.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};g.isLoaded=function(){return(this.data!==null)};g._load=function(){this._request=j.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};g._onLoad=function(k){this.data=k.response;this._request=null;h.prototype._onLoad.call(this,this.data)
};g._buildRangeString=function(){var k="bytes="+this.options.start+"-";if(this.options.length!==null){k+=(this.options.start+this.options.length)
}return k};g._buildQueryString=function(){var k=this.options.start.toString();if(this.options.length!==undefined){k+=(this.options.start+this.options.length)
}return k};a.exports=i},{"../../Asset":251,"@marcom/ac-ajax":239,"@marcom/ac-object":306}],256:[function(c,d,b){var g;
var a=c("@marcom/ac-object");var f=c("../Asset");function h(j,i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._load=function(){var i=new Image();this.data=i;
this._boundOnLoad=this._onLoad.bind(this);i.onload=this._boundOnLoad;i.onerror=this._boundOnError;
i.src=this.src};d.exports=h},{"../Asset":251,"@marcom/ac-object":306}],257:[function(d,a,h){var k=d("@marcom/ac-ajax").Ajax,g=d("@marcom/ac-object"),j=d("./SplitFile/Chunk"),b=d("../Asset");
var i;var f={splitManifestTimeout:5000,splitChunkTimeout:null};var c=function(m,l){b.apply(this,arguments);
if(m.lastIndexOf("/")!==m.length-1){m=m+"/"}this.options=g.extend(f,l||{});this._manifestPath=m+"manifest.json";
this._ajax=new k();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
i=c.prototype=g.create(b.prototype);i._load=function(){var l={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(l);this._request.send().then(this._boundOnManifestLoaded)
};i._onManifestLoaded=function(p){this._manifest=JSON.parse(p.responseText);this._chunksLen=this._manifest.files.length;
var n,o=this._manifest.files,m,l=this._chunksLen;for(n=0;n<l;n++){m=this._getOrCreateChunkObject(o[n],n);
m.once("loaded",this._onChunkLoaded,this);m.load()}this._request=null;this._ajax=null
};i._getOrCreateChunkObject=function(n,l){var o=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[l]){var q=n.path;if(!q.match(/(^http(s?))/)){q=this.src+"/"+q}else{if(!!this.src.match(/(^http(s?))/)){var p=q.indexOf("/",10);
var m=this.src.indexOf("/",10);q=this.src.substring(0,m)+q.substring(p)}}this._chunks[l]=new j(q,o)
}return this._chunks[l]};i._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var n,l=this._chunks.length,m=[];
for(n=0;n<l;n++){m.push(this._chunks[n].data);this._chunks[n].off()}this.data=new Blob(m,{type:this._manifest.mimeType});
m=this._chunks=null;this.trigger("loaded",this.data)}};i.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};a.exports=c},{"../Asset":251,"./SplitFile/Chunk":258,"@marcom/ac-ajax":239,"@marcom/ac-object":306}],258:[function(c,a,g){var h;
var j=c("@marcom/ac-ajax");var f=c("@marcom/ac-object");var b=c("../../Asset");
var d={timeout:30*1000};function i(l,k){b.apply(this,arguments);this.options=f.extend(d,k||{});
this._request=null;this.data=null}h=i.prototype=f.create(b.prototype);h.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};h.isLoaded=function(){return(this.data!==null)};h._load=function(){this._request=j.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};h._onLoad=function(k){this.data=k.response;this._request=null;b.prototype._onLoad.call(this,this.data)
};a.exports=i},{"../../Asset":251,"@marcom/ac-ajax":239,"@marcom/ac-object":306}],259:[function(c,a,h){var j;
var g=c("@marcom/ac-feature");var f=c("@marcom/ac-object");var i=c("./Binary");
var k=c("../Asset");var b=c("./SplitFile");var d={chunkSize:1024*1024,split:false};
function l(n,m){k.apply(this,arguments);this.options=f.defaults(d,m||{});this._binary=this.options.binary||this._createAssetType()
}j=l.prototype=f.create(k.prototype);j._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&g.isDesktop()===true)
};j._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new b(this.src,this.options)
}return new i(this.src,this.options)}};j._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};j._onLoad=function(n){var m=n;
if(n instanceof window.Blob){m=this.options.element;if(!m){m=document.createElement("video")
}if(m.getAttribute("type")!==n.type){m.setAttribute("type",n.type)}m.src=window.URL.createObjectURL(n)
}k.prototype._onLoad.call(this,m)};j.pause=function(){this._binary.pause()};j.destroy=function(){this._binary.destroy();
k.prototype.destroy.call(this)};a.exports=l},{"../Asset":251,"./Binary":254,"./SplitFile":257,"@marcom/ac-feature":22,"@marcom/ac-object":306}],260:[function(b,a,g){var h;
var f=b("@marcom/ac-object");var i=b("ac-deferred").Deferred;var k=b("@marcom/ac-event-emitter").EventEmitter;
var j=b("../../utils/destroy");var d={threads:4};function c(m,l){this.options=f.defaults(d,l||{});
this._queue=m;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new i();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}h=c.prototype=new k();h.start=function(){var m=this._availableThreads;var l;this.paused=false;
if(m>this._queue.length){m=this._queue.length}for(l=1;l<=m;l++){this._startNewThread()
}return this.promise};h.pause=function(){this.paused=true;var l=[];this._active.forEach(function(n,m){if(typeof n.pause==="function"){this._queue.unshift(n);
this._releaseThread();n.off("loaded");n.off("error");n.pause();l.push(m)}},this);
l.forEach(function(m){this._active.splice(m,1)},this)};h.add=function(l){this._queue=this._queue.concat(l)
};h.destroy=function(){this.pause();j(this)};h._startNewThread=function(){var m=this._queue.shift();
this._occupyThread();if(m&&typeof m.load==="function"){var l=function(o){this._onProgress(o);
this._active.splice(this._active.indexOf(m),1);m.off("error",n)};var n=function(o){this._onError();
m.off("loaded",l)};m.once("loaded",l,this);m.once("error",n,this);m.load()}else{this._onError()
}this._active.push(m)};h._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};h._onError=function(l){if(this._errored){return false
}this._errored=true;this._deferred.reject(l);this.trigger("rejected",l)};h.abort=function(){this._deferred.reject()
};h._onProgress=function(l){if(this._errored){return false}this._releaseThread();
this._data[l.index]=l.data;this.trigger("progress",l.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};h._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};h._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};a.exports=c},{"../../utils/destroy":261,"@marcom/ac-event-emitter":244,"@marcom/ac-object":306,"ac-deferred":248}],261:[function(b,d,a){d.exports=function c(f,g){if(typeof f.off==="function"){f.off()
}function h(j){var i=true;for(var k in j){if(j.hasOwnProperty(k)){if(j[k]!==null){i=false;
break}}}return i}window.setTimeout(function(){var i;for(i in f){if(f.hasOwnProperty(i)){if(g&&f[i]&&typeof f[i].destroy==="function"&&!h(f[i])){f[i].destroy()
}f[i]=null}}})}},{}],262:[function(b,c,a){arguments[4][130][0].apply(a,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":263,dup:130}],263:[function(b,c,a){arguments[4][131][0].apply(a,arguments)
},{dup:131}],264:[function(b,c,a){b("@marcom/ac-polyfills/Promise");b("@marcom/ac-polyfills/JSON");
c.exports={createFlow:b("./ac-flow/flow/factory"),Player:b("./ac-flow/flow/Player")}
},{"./ac-flow/flow/Player":267,"./ac-flow/flow/factory":278,"@marcom/ac-polyfills/JSON":374,"@marcom/ac-polyfills/Promise":380}],265:[function(b,a,c){var j=b("@marcom/ac-event-emitter-micro").EventEmitterMicro,i=b("./compositor/decorator/Keyframe"),h=b("./compositor/decorator/Superframe"),g=b("./compositor/decorator/SuperKeyframe"),l=b("./compositor/decorator/Cache");
var k=b("./compositor/Sequence");function d(m,o,p,n){j.call(this);this._compositor=new k(o,p,n);
this.options=m||{}}var f=d.prototype=new j(null);f._gotoImageFrame=function(m){if(this._rendering){return Promise.resolve()
}else{if(this._currentFrame===m){return Promise.resolve()}}this._rendering=true;
return this._compositor.compositeFrames(this._currentFrame,m).then(function(){this._rendering=false;
this._currentFrame=m}.bind(this))};f.init=function(){var m;if(this.options.element.nodeName==="CANVAS"){m=this.options.element
}else{m=document.createElement("canvas");this.options.element.appendChild(m)}this.gotoFrame=this._gotoImageFrame;
return this._compositor.init(m).then(this._decorateCompositor.bind(this))};f.resumeLoading=function(){return this._compositor.resumeLoading()
};f.pauseLoading=function(){this._compositor.pauseLoading()};f._decorateCompositor=function(){var m=this._compositor;
var o;var n;if(m){o=this._compositor._diffRender.flowData;n=this._compositor.canvas;
if(o.superframeFrequency){m=new h(m,o.superframeFrequency)}if(o.version>=4){m=new i(m)
}if(o.version>=4&&o.superframeFrequency){m=new g(m)}if(this.options.keyframeCache){m=new l(m,this.options.keyframeCache)
}if(m===this._compositor){return Promise.resolve()}else{this._compositor=m;return this._compositor.init(n)
}}else{return Promise.reject()}};f._destroy=function(){this.off();this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});a.exports=d},{"./compositor/Sequence":268,"./compositor/decorator/Cache":269,"./compositor/decorator/Keyframe":270,"./compositor/decorator/SuperKeyframe":271,"./compositor/decorator/Superframe":272,"@marcom/ac-event-emitter-micro":262}],266:[function(c,d,a){var b=c("@marcom/ac-asset-loader").AssetLoader,g=c("./data/provider/Async");
var h=function(i,j,k){this._manifestUrl=i;this._keyframeUrls=j;this._imageUrlPattern=k;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this)};var f=h.prototype;f.setManifestUrl=function(i){this._manifestUrl=i;
return this};f.setKeyframeUrls=function(i){this._keyframeUrls=i;return this};f.setImageUrlPattern=function(i){this._imageUrlPattern=i;
return this};f.pause=function(){this._shouldPause=true;var k,j=this._activeLoaders.length;
for(k=0;k<j;k++){this._activeLoaders[k].pause()}this._paused=true};f.destroy=function(){var j,i,k;
this.pause();for(j in this._loaders){if(this._loaders.hasOwnProperty(j)){this._loaders[j].destroy()
}}for(i in this._promises){if(this._promises.hasOwnProperty(i)){if(this._promises[i].status()==="pending"){this._promises[i].reject()
}}}for(k in this){if(this.hasOwnProperty(k)){this[k]=null}}};f.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return true}};f._resume=function(){this._shouldPause=false;var n,k=this._activeLoaders.length;
for(n=0;n<k;n++){this._activeLoaders[n].load()}var m,l=this._resumeQueue.length;
for(m=0;m<l;m++){this._resumeQueue[m].call(this)}this._resumeQueue=[];this._paused=false
};f.loadManifest=function(){if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return}if(this.assets.manifest){return this.assets.manifest}else{this._paused=false;
this._loaders.manifest=new g(this._getManifestAssetsData());this._activeLoaders.push(this._loaders.manifest);
return this._loaders.manifest.load().then(this._boundOnManifestLoaded)}};f.loadKeyframes=function(){var i;
if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes)}if(this.assets.keyframes){i=Promise.resolve(this.assets.keyframes)
}else{this._paused=false;this._loaders.keyframes=new b(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);i=this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)
}this._promises.keyframes=i;return this._promises.keyframes};f.loadDiffs=function(){var i;
if(this._shouldPause){this._resumeQueue.push(this.loadDiffs)}if(this.assets.diffs){i=this._promises.diffs.resolve(this.assets.diffs)
}else{this._paused=false;this._loaders.diffs=new b(this._getDiffsAssetsData());
this._activeLoaders.push(this._loaders.diffs);i=this._loaders.diffs.load().then(this._boundOnDiffsLoaded)
}this._promises.diffs=i;return this._promises.diffs};f._getManifestAssetsData=function(){return this._manifestUrl
};f._getKeyframesAssetsData=function(){return this._keyframeUrls};f._getDiffsAssetsData=function(){var l=this.assets.manifest.imagesRequired,j=[],m,k,n=this._imageUrlPattern.match(/#/g).length;
for(m=1;m<=l;m++){k="0000"+m;k=k.substring(k.length-n);j.push(this._imageUrlPattern.replace(/#{2,}/g,k))
}return j};f._onManifestLoaded=function(i){if(this.assets){this.assets.manifest=i;
this.state.manifestLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);
return this.assets.manifest}};f._onKeyframesLoaded=function(i){if(this.assets){this.assets.keyframes=i;
this.state.keyframeLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);
return Promise.resolve(this.assets.keyframes)}};f._onDiffsLoaded=function(i){if(this.assets){this.assets.diffs=i;
this.state.diffsLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);
return Promise.resolve(this.assets.diffs)}};f._removeFromActiveLoaders=function(l){var k,j=this._activeLoaders.length;
for(k=0;k<j;k++){if(this._activeLoaders[k]===l){this._activeLoaders.splice(k,1);
return}}};d.exports=h},{"./data/provider/Async":276,"@marcom/ac-asset-loader":249}],267:[function(c,d,b){var h=c("@marcom/ac-dom-emitter").DOMEmitter;
var a=c("@marcom/ac-raf-emitter/RAFEmitter");function g(i,j){this.element=j;this._domEmitter=new h(j);
this._frameRate=30;this.paused=true;this.loop=false;this._destroyed=false;this._flow=i;
this._rafEmitter=new a();this._rafDrawSet=false;this._shouldAdvanceToTimeGlobal=false;
this._shouldGlobalTimeUpdate=false;this._shouldLocalTimeUpdate=false;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this);
this._rafEmitter.on("draw",this._onDraw.bind(this))}var f=g.prototype;f._timeToFrame=function(i){var j;
j=Math.round(i/this.duration*this._flow.frameCount);j=j%(this._flow.frameCount+1);
return(j<0)?this._flow.frameCount+j:j};f._advanceToTimeGlobal=function(j){if(this._rafDrawSet){this._prevTime=this._prevTime||j.time;
this._currentTime+=((j.time-this._prevTime)/1000)*this.playbackRate;this._prevTime=j.time;
this._pauseAfterRender=false;var i=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){i=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){i=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(i).then(this._onBoundGlobalTimeUpdate)
}}};f._onGlobalTimeUpdate=function(){this.trigger("timeupdate");if(this._pauseAfterRender){this.paused=true;
this.trigger("ended")}else{this._bindAdvanceToTimeGlobal()}};f._onLocalTimeUpdate=function(){this.seeking=false;
this.trigger("timeupdate");this.trigger("seeked");this._bindAdvanceToTimeGlobal()
};f._advanceToTimeLocal=function(i){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*i;this._prevTime=null;this._cancelFrame();this._flow.gotoFrame(this._timeToFrame(i)).then(this._onBoundLocalTimeUpdate)
}};f._onLoaded=function(){this.trigger("loaded");this.trigger("canplaythrough")
};f._nullProperties=function(k){var j;for(j in k){if(k.hasOwnProperty(j)){k[j]=null
}}return k};f.destroy=function(){this._rafEmitter.destroy();this.trigger("destroy");
this.pause();this.off();this._flow.destroy();this._flow=this._nullProperties(this._flow);
this._nullProperties(this)};f.load=function(){if(this._flow.resumeLoading()){return
}this.trigger("loadstart");return this._flow.init().then(function(k){var j=function(){this._onLoaded()
}.bind(this);var i=function(){if(this._destroyed===false){this.trigger("error")
}}.bind(this);if(k){return k.then(j,i)}else{j()}}.bind(this))};f.pauseLoading=function(){this._flow.pauseLoading()
};f.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._bindAdvanceToTimeGlobal()}return this};f.pause=function(){if(!this.paused){this.paused=true;
this._cancelFrame();this.trigger("pause")}return this};f.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};f.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};f.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};f.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};f._cancelFrame=function(){this._rafEmitter.cancel();
this._rafDrawSet=false};f._onDraw=function(i){if(this._shouldAdvanceToTimeGlobal){this._advanceToTimeGlobal(i)
}else{if(this._shouldGlobalTimeUpdate){this._onGlobalTimeUpdate(i)}else{if(this._shouldLocalTimeUpdate){this._onLocalTimeUpdate(i)
}}}this._shouldLocalTimeUpdate=false;this._shouldGlobalTimeUpdate=false;this._shouldLocalTimeUpdate=false
};f._bindAdvanceToTimeGlobal=function(){this._rafDrawSet=true;this._shouldAdvanceToTimeGlobal=true;
this._rafEmitter.run()};f._bindGlobalTimeUpdate=function(){this._rafDrawSet=true;
this._shouldGlobalTimeUpdate=true;this._rafEmitter.run()};f._bindLocalTimeUpdate=function(){this._rafDrawSet=true;
this._shouldLocalTimeUpdate=true;this._rafEmitter.run()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:f._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(i){if(isFinite(i)){this._frameRate=i;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(i){if(isFinite(i)){this._playbackRate=1*i;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});d.exports=g},{"@marcom/ac-dom-emitter":180,"@marcom/ac-raf-emitter/RAFEmitter":325}],268:[function(b,d,a){var h=b("../diff/Render");
var g=b("../LoadController");function c(j,k,i){this._keyframes=k;this._imageUrlPattern=i;
this._loadController=new g(j,k,i)}var f=c.prototype;f._initDiffRender=function(i){i.then(function(j){this._images=j;
this.canvas.height=j[0].height;this.canvas.width=j[0].width;this.applyFrame(j[0])
}.bind(this))};f.init=function(i){this.canvas=i||document.createElement("canvas");
this.context=i.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
};f.resumeLoading=function(){return this._loadController.load()};f.pauseLoading=function(){this._loadController.pause()
};f.createDiffRender=function(i){this._diffRender=new h(i,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};f.applyFrame=function(j){var i=this.context;i.drawImage(j,0,0)
};f.calculateRenderCount=function(i,j){var k=0;if(Math.abs(j-i)>=j){i=1;k=1}else{if(Math.abs(j-i)>=(this.frameCount-j)&&this._images[1]){i=this.frameCount-2;
k=1}}if(j>0&&j<this.frameCount-1){return Math.abs(i-j)+k}else{return k}};f.compositeFrames=function(i,j){j=(this.frameCount<j)?this.frameCount-1:(j<0)?0:j;
i=(this.frameCount-2<i)?this.frameCount-2:(i<0)?0:i;var k;if(Math.abs(j-i)>=j){i=1;
this.applyFrame(this._images[0])}else{if(Math.abs(j-i)>=(this.frameCount-j)&&this._images[1]){i=this.frameCount-2;
this.applyFrame(this._images[1])}}k=(i>j)?-1:(i<j)?1:0;if(j>0&&j<this.frameCount-1){while(i!==j){this._diffRender.renderDiff(this.canvas,i);
i+=k}}return Promise.resolve(i)};f.destroy=function(){this._loadController.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(i){return this._canvas=i
},enumerable:true},mainCompositor:{get:function(){var i=this;while(i._compositor){i=i._compositor
}return i},enumerable:true}});d.exports=c},{"../LoadController":266,"../diff/Render":277}],269:[function(c,d,b){function a(h,g){this._compositor=h;
this._keyframeInterval=g||8;this._keyframes=[]}var f=a.prototype;f._getClosestKeyframe=function(g){var h=g%this._keyframeInterval,i=Math.floor(g/this._keyframeInterval)+((h>(this._keyframeInterval/2))?1:0);
return i};f._getFrameFromKeyframe=function(g){return g*this._keyframeInterval};
f._saveKeyframe=function(i){var g,h=Math.floor(i/this._keyframeInterval);if(i%this._keyframeInterval===0&&!this._keyframes[h]){g=document.createElement("canvas");
g.width=this._compositor.canvas.width;g.height=this._compositor.canvas.height;g.getContext("2d").drawImage(this._compositor.canvas,0,0);
this._keyframes[h]=g}};f.init=function(g){return this._compositor.init.apply(this._compositor,arguments)
};f.resumeLoading=function(){return this._compositor.resumeLoading()};f.pauseLoading=function(){return this._compositor.pauseLoading()
};f.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};f.calculateRenderCount=function(g,h){g=this._getFrameFromKeyframe(this._getClosestKeyframe(h));
return this._compositor.calculateRenderCount(g,h)+1};f.compositeFrames=function(g,i){var j=this._getClosestKeyframe(i);
if(this._keyframes[j]&&(this._compositor.calculateRenderCount(g,i)>this.calculateRenderCount(g,i))){g=this._getFrameFromKeyframe(j);
this.applyFrame(this._keyframes[j]);return this._compositor.compositeFrames(g,i).then(function h(){})
}else{return this._compositor.compositeFrames(g,i).then(function h(){},null,this._saveKeyframe.bind(this))
}};f.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(g){return this._compositor.canvas=g
},enumerable:true}});d.exports=a},{}],270:[function(c,d,a){var b=c("../../keyframe/Render");
function g(h){this._compositor=h;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}var f=g.prototype;f.init=function(h){this._keyframeDiffRender=new b(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};f.resumeLoading=function(){return this._compositor.resumeLoading()
};f.pauseLoading=function(){return this._compositor.pauseLoading()};f.applyFrame=function(h){return this._compositor.applyFrame.apply(this._compositor,arguments)
};f.applyKeyframe=function(h,i){this._keyframeDiffRender.renderKeyframe(this.canvas,h,i)
};f.compositeFrames=function(h,i){if(!this._isKeyframeDiff(i-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}this.applyKeyframe(i-1);return Promise.resolve(h-1)};f._isKeyframeDiff=function(h){return h in this._keyframeDiffRender._loader._keyframes
};f.calculateRenderCount=function(h,i){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};f.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});d.exports=g},{"../../keyframe/Render":280}],271:[function(b,c,a){function f(g){this._compositor=g;
this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}var d=f.prototype;d.init=function(g){return this._compositor.init.apply(this._compositor,arguments)
};d.resumeLoading=function(){return this._compositor.resumeLoading()};d.pauseLoading=function(){return this._compositor.pauseLoading()
};d.applyFrame=function(g){return this._compositor.applyFrame.apply(this._compositor,arguments)
};d.applyKeyframe=function(g,h){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};d.compositeFrames=function(g,i){var j,h;if(i<1||i>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(i-1)){j=Math.abs(g-i)===1?true:false;this.applyKeyframe(i-1,j);
return Promise.resolve(g-1)}if(Math.abs(i-g)>this._superframeInterval){h=this._getShortestRender(g,i);
if(this._isKeyframeDiff(h-1)||h<=0||h>=this.frameCount-2){return this._compositeFromSuperKeyframe(h,i)
}}return this._compositor.compositeFrames.apply(this._compositor,[g,i])};d._getShortestRender=function(g,i){var k=this._compositor.calculateRenderCount,j=this._getClosestSuperKeyframe(i-1),h=k.apply(this._compositor,[j,i])+1,l=k.apply(this._compositor,[g,i]);
if(h<=l){return j}else{return g}};d._compositeFromSuperKeyframe=function(k,i){var g=this.canvas.getContext("2d"),h=(k<=0)?this.mainCompositor._images[0]:(k>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[k-1].image),j;
g.drawImage(h,0,0);return this._compositor.compositeFrames.call(this._compositor,k,i)
};d._getClosestSuperFrame=function(g){return Math.round(g/this._superframeInterval)*this._superframeInterval
};d._getClosestSuperKeyframe=function(h){var l,m,k,j,g=this._frames.length;if(h<g+1&&h>0){j=h-1;
while(j>=0){if(this._frames[j].type==="keyframe"){l=j+1;break}j-=1}j=h+1;while(j<=g-1){if(this._frames[j].type==="keyframe"){m=j+1;
break}j+=1}}l=l?l:0;m=m?m:this.frameCount;k=(h-l)<(m-h)?l:m;return k};d._isKeyframeDiff=function(g){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};d.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(d,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(g){return this._compositor.canvas=g
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});c.exports=f},{}],272:[function(b,c,a){function f(h,g){this._compositor=h;
this._superframeInterval=g||4}var d=f.prototype;d._getClosestSuperframe=function(g){return Math.round(g/this._superframeInterval)*this._superframeInterval
};d.init=function(g){this._screenCanvas=g};d.resumeLoading=function(){return this._compositor.resumeLoading()
};d.pauseLoading=function(){return this._compositor.pauseLoading()};d.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};d.calculateRenderCount=function(g,i){var h=this._getClosestSuperframe(g);if(Math.abs(h-i)>this._superframeInterval/2){g=h+((g>i)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(g,i)+1}else{return Math.abs(h-i)+1}};d.compositeFrames=function(g,j){var k,h;
if(j<=0||j>=this.frameCount-2){this._compositor.compositeFrames(g,j)}if(g>this.frameCount-2){g=this.frameCount-2
}else{if(g<=0){g=1}}h=this._getClosestSuperframe(g);if(this._compositor.calculateRenderCount(g,j)>this.calculateRenderCount(g,j)){k=this._compositor.compositeFrames(h,h).then(function i(){var l=h+((g>j)?-1:1)*this._superframeInterval;
this._compositor.compositeFrames(h,l).then(function(){return this.compositeFrames(l,j)
}.bind(this))}.bind(this))}else{k=this._compositor.compositeFrames(g,j).then(function i(){}.bind(this))
}k.then(function i(){}.bind(this));return k};d.destroy=function(){return this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(d,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(g){return this._compositor.canvas=g
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});c.exports=f},{}],273:[function(b,c,a){function d(f,g){this.location=f;
this.length=g}c.exports=d},{}],274:[function(c,d,b){function a(){}d.exports=a},{}],275:[function(c,d,b){var h=c("./Manifest"),a=c("./Block"),g;
var f={parseData:function(i){g=0;var j=i.frames.map(this._parseFrame,this);return Object.create(h.prototype,{version:{value:i.version},framecount:{value:i.frameCount},blockSize:{value:i.blockSize},imagesRequired:{value:i.imagesRequired},reversible:{value:i.reversible},superframeFrequency:{value:i.superframeFrequency},frames:{value:j}})
},_valueForCharAt:function(k,i){var j=k.charCodeAt(i);if(j>64&&j<91){return j-65
}if(j>96&&j<123){return j-71}if(j>47&&j<58){return j+4}if(j===43){return 62}if(j===47){return 63
}},_createNumberFromBase64Range:function(m,i,l){var k=0,j;while(l--){j=this._valueForCharAt(m,i++);
k+=(j<<l*6)}return k},_parseFrame:function(n){var m,q=[],l=n.value,k=n.startImageIndex,p=n.startBlockIndex,o,j;
if(n.type==="keyframe"){q.type="keyframe";q.width=n.width;q.height=n.height;q.x=n.x;
q.y=n.y;return q}for(m=0;m<l.length;m+=5){j=this._createNumberFromBase64Range(l,m,3);
o=this._createNumberFromBase64Range(l,m+3,2);q.push(Object.create(a.prototype,{location:{value:j,enumerable:true},length:{value:o,enumerable:true},block:{value:(p+=o)-o,enumerable:true},startImageIndex:{value:k,enumerable:true}}))
}return q}};d.exports=f},{"./Block":273,"./Manifest":274}],276:[function(c,d,a){var b=c("@marcom/ac-asset-loader").AssetLoader,h=c("../processor");
function g(i){this._assetLoader=new b([i])}var f=g.prototype;f.load=function(){return this._assetLoader.load().then(function(j){var i;
if(j&&j.length){i=h.parseData(j[0]);this._data=i}return i}.bind(this))};d.exports=g
},{"../processor":275,"@marcom/ac-asset-loader":249}],277:[function(c,d,b){function a(i,g,h){this.flowData=i;
this.flowData.imageUrlPattern=g;this._loadController=h}var f=a.prototype;f._storeImages=function(g){g.then(function(j){var h=j.length;
this.images=j;this._blocksPerFullDiff=[];this._blockCountUpToIndex=[];var l=0;for(var k=0;
k<h;k++){this._blocksPerFullDiff[k]=(j[k].width/this.flowData.blockSize)*(j[k].height/this.flowData.blockSize);
l+=this._blocksPerFullDiff[k];this._blockCountUpToIndex[k]=l}}.bind(this))};f._applyDiffRange=function(i,o){var s=o.block,j=o.length,h=i.canvas.width/this.flowData.blockSize,l=o.startImageIndex,u=this.images[l].width,g=s%this._blockCountUpToIndex[l],t=u/this.flowData.blockSize,r=(g%t)*this.flowData.blockSize,q=Math.floor(g/(t||1))*this.flowData.blockSize,n=(o.location%h)*this.flowData.blockSize,m=Math.floor(o.location/h)*this.flowData.blockSize,k,p;
while(j){k=Math.min((j*this.flowData.blockSize),i.canvas.width-n,u-r);p=k/this.flowData.blockSize;
i.drawImage(this.images[l],r,q,k,this.flowData.blockSize,n,m,k,this.flowData.blockSize);
j-=p;if(j){if((r+=k)>=u){r=0;q+=this.flowData.blockSize}if((n+=k)>=i.canvas.width){n=0;
m+=this.flowData.blockSize}s+=p}}};f.init=function(){return this._loadController.loadDiffs().then(this._storeImages.bind(this))
};f.renderDiff=function(h,l){var k=h.getContext("2d");l-=1;for(var j=0,g=this.frames[l].length;
j<g;j++){this._applyDiffRange(k,this.frames[l][j])}};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(f,{frames:{get:function(){return this.flowData.frames},set:function(g){this.flowData.frames=g
},enumerable:true}});d.exports=a},{}],278:[function(f,c,h){var k=f("@marcom/ac-object/defaults");
var j=f("./Flow");var d=f("./Player");var b={keyframeCache:8,preload:true};var g={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var a=function(n){if(n.lastIndexOf("/")!==n.length-1){n=n+"/"}return n};var l=function(q){var t=q.basePath?a(q.basePath):null;
var p=q.framePath?a(q.framePath):null;var o=q.diffPath?a(q.diffPath):null;var s=q.manifestPath?a(q.manifestPath):null;
var n=q.baseName+"_";var r={};r.startframe=(p||t)+n+"startframe."+(q.startframeFileFormat||q.fileFormat);
r.endframe=(p||t)+n+"endframe."+(q.endframeFileFormat||q.fileFormat);r.imageUrlPattern=(o||t)+n+q.imageUrlPattern+"."+q.fileFormat;
r.manifest=(s||t)+n+"manifest."+q.manifestFileFormat;return r};var m=function(o,p){var n=l(p);
var q=[n.startframe,n.endframe];return new j(o,n.manifest,q,n.imageUrlPattern)};
var i=function(q,r){var n=q||{};var p=r||{};n=k(b,q);p=k(g,r);if(!n.element){q.element=document.createElement("canvas")
}var o=m(n,p);var s=new d(o,n.element);if(n.preload){s.load()}return s};c.exports=i
},{"./Flow":265,"./Player":267,"@marcom/ac-object/defaults":309}],279:[function(d,f,c){var a=d("@marcom/ac-asset-loader").AssetLoader;
function b(h,k){var j,i=h.match(/#/g).length;this._keyframes={};h=h.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(k.frames){k.frames.forEach(function(m,l){if(m.type==="keyframe"){j="0000"+l;
j=j.substring(j.length-i);this._imageUrls.push(h.replace(/#+/g,j));this._keyframes[l]=m
}}.bind(this))}}var g=b.prototype;g.load=function(){if(this._imageUrls.length>0){return new a(this._imageUrls).load()
}return Promise.resolve()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(g,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
f.exports=b},{"@marcom/ac-asset-loader":249}],280:[function(b,c,a){var g=b("./Loader");
function f(i,h){this.flowData=i;this.flowData.imageUrlPattern=h}var d=f.prototype;
d._storeImages=function(h){var k=0,l;if(h&&h.length>0){for(var j in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(j)){l=h[k];
this._loader._keyframes[j].image=l;k+=1}}}};d.init=function(){this._loader=new g(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};d.renderKeyframe=function(k,j,r){var i=k.getContext("2d"),l=this._loader.keyframes[j],m=l.image,p=l.x,o=l.y,q=l.width,n=l.height;
if(r===true){i.drawImage(m,p,o,q,n,p,o,q,n)}else{if(this.flowData.reversible){i.drawImage(m,0,0)
}else{i.drawImage(m,p,o,q,n)}}};c.exports=f},{"./Loader":279}],281:[function(b,c,a){arguments[4][130][0].apply(a,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":282,dup:130}],282:[function(b,c,a){arguments[4][131][0].apply(a,arguments)
},{dup:131}],283:[function(b,c,a){arguments[4][132][0].apply(a,arguments)},{"./ac-shared-instance/SharedInstance":284,dup:132}],284:[function(b,c,a){arguments[4][133][0].apply(a,arguments)
},{dup:133}],285:[function(b,c,a){c.exports={CID:b("./ac-mvc-cid/CID")}},{"./ac-mvc-cid/CID":286}],286:[function(c,f,b){var a=c("@marcom/ac-shared-instance").SharedInstance;
var g="ac-mvc-cid:CID",d="1.0.0";function i(){this._idCount=0}var h=i.prototype;
h._cidPrefix="cid";h.getNewCID=function(){var j=this._cidPrefix+"-"+this._idCount;
this._idCount++;return j};f.exports=a.share(g,d,i)},{"@marcom/ac-shared-instance":283}],287:[function(b,c,a){c.exports={Model:b("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":288}],288:[function(f,a,g){var k=f("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var b=f("@marcom/ac-object/defaults");var i=f("@marcom/ac-object/create");var c=f("@marcom/ac-mvc-cid").CID;
function d(l){k.call(this);this.attributes=b(this.defaultAttributes,l||{});this.cid=c.getNewCID();
if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}}var j=k.prototype;var h=d.prototype=i(j);h.defaultAttributes={};h.idAttribute="id";
h.get=function(l){if(!this.attributes){return}return this.attributes[l]};h.set=function(m,l){if(!this.attributes){return
}var q;var p;var o;var n={};var r=false;for(q in m){if(m.hasOwnProperty(q)){o=this.get(q);
if((o===m[q])||(typeof o==="object"&&typeof m[q]==="object"&&JSON.stringify(o)===JSON.stringify(m[q]))){continue
}r=true;this.attributes[q]=m[q];p={value:m[q],previous:o};n[q]=p;this._triggerChange(q,p,l)
}}if(r){this._trigger("change",n,l)}};h.hasAttribute=function(l){if(!this.attributes){return false
}return(this.attributes[l]!==undefined)};h.eachAttribute=function(m,l){if(!this.attributes){return
}var n;for(n in this.attributes){if(this.attributes.hasOwnProperty(n)){m.call(l,{attribute:n,value:this.attributes[n]})
}}};h.destroy=function(){this.trigger("destroy");j.destroy.call(this);var l;for(l in this){if(this.hasOwnProperty(l)){this[l]=null
}}};h._trigger=function(n,m,l){l=l||{};if(l.silent!==true){this.trigger(n,m)}};
h._triggerChange=function(n,m,l){return this._trigger("change:"+n,m,l)};a.exports=d
},{"@marcom/ac-event-emitter-micro":281,"@marcom/ac-mvc-cid":285,"@marcom/ac-object/create":308,"@marcom/ac-object/defaults":309}],289:[function(b,c,a){b("@marcom/ac-polyfills/Array/prototype.slice");
b("@marcom/ac-polyfills/Element/prototype.classList");var d=b("./className/add");
c.exports=function f(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);return
}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":290,"@marcom/ac-polyfills/Array/prototype.slice":361,"@marcom/ac-polyfills/Element/prototype.classList":369}],290:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":291}],291:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":292}],292:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],293:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":291,"./getTokenRegExp":292}],294:[function(d,f,c){d("@marcom/ac-polyfills/Array/prototype.slice");
d("@marcom/ac-polyfills/Element/prototype.classList");var b=d("./className/remove");
f.exports=function a(){var j=Array.prototype.slice.call(arguments);var h=j.shift(j);
var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":293,"@marcom/ac-polyfills/Array/prototype.slice":361,"@marcom/ac-polyfills/Element/prototype.classList":369}],295:[function(b,c,a){arguments[4][132][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":296,dup:132}],296:[function(b,c,a){arguments[4][133][0].apply(a,arguments)
},{dup:133}],297:[function(b,c,a){arguments[4][285][0].apply(a,arguments)},{"./ac-mvc-cid/CID":298,dup:285}],298:[function(b,c,a){arguments[4][286][0].apply(a,arguments)
},{"@marcom/ac-shared-instance":295,dup:286}],299:[function(b,c,a){c.exports={View:b("./ac-mvc-view/View")}
},{"./ac-mvc-view/View":300}],300:[function(d,b,g){var k=d("@marcom/ac-dom-emitter").DOMEmitter;
var c=d("@marcom/ac-mvc-cid").CID;var f={create:d("@marcom/ac-object/create"),defaults:d("@marcom/ac-object/defaults")};
var j={insertLastChild:d("@marcom/ac-dom-nodes/insertLastChild"),remove:d("@marcom/ac-dom-nodes/remove")};
var i=d("@marcom/ac-classlist/add");var l=d("@marcom/ac-classlist/remove");function a(m){var o;
var n;var p;this.options=f.defaults(this.defaultOptions,m||{});this.cid=c.getNewCID();
this.model=this.options.model;if(this.options.template){this.template=this.options.template
}o=this.options.tagName||this.tagName;n=this.options.element;p=this.options.className||this.className;
if(!n){n=document.createElement(o)}k.call(this,n);if(p){this.addClassName(p)}if(this.options.events){this.delegateEvents(this.options.events)
}}var h=a.prototype=f.create(k.prototype);h.tagName="div";h.defaultOptions={};h.getTagName=function(){return this.el.tagName.toLowerCase()
};h.appendTo=function(m){j.insertLastChild(this.el,m);return this};h.render=function(){};
h.addClassName=function(m){return this._manipulateClassName(m,i)};h.removeClassName=function(m){return this._manipulateClassName(m,l)
};h.destroy=function(){this.emitterTrigger("destroy");this.off();j.remove(this.el);
var m;for(m in this){if(this.hasOwnProperty(m)){this[m]=null}}};h.delegateEvents=function(n,o){o=o||this;
var m,p;for(m in n){if(n.hasOwnProperty(m)){p=n[m];if(typeof p==="string"){n[m]=this[n[m]]
}}}this.on(n,o);return this};h._manipulateClassName=function(n,o){var m;if(typeof n==="string"){m=n.split(" ")
}else{if(typeof n==="object"&&Array.isArray(n)){m=n.slice()}else{return this}}m.unshift(this.el);
o.apply(this.el,m);return this};b.exports=a},{"@marcom/ac-classlist/add":289,"@marcom/ac-classlist/remove":294,"@marcom/ac-dom-emitter":180,"@marcom/ac-dom-nodes/insertLastChild":212,"@marcom/ac-dom-nodes/remove":223,"@marcom/ac-mvc-cid":297,"@marcom/ac-object/create":308,"@marcom/ac-object/defaults":309}],301:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{dup:112,qs:302}],302:[function(b,c,a){arguments[4][113][0].apply(a,arguments)
},{"./parse":303,"./stringify":304,dup:113}],303:[function(b,c,a){arguments[4][114][0].apply(a,arguments)
},{"./utils":305,dup:114}],304:[function(b,c,a){arguments[4][115][0].apply(a,arguments)
},{"./utils":305,dup:115}],305:[function(b,c,a){arguments[4][116][0].apply(a,arguments)
},{dup:116}],306:[function(b,c,a){arguments[4][117][0].apply(a,arguments)},{"./clone":307,"./create":308,"./defaults":309,"./extend":310,"./getPrototypeOf":311,"./isDate":312,"./isEmpty":313,"./isRegExp":314,"./toQueryParameters":315,dup:117}],307:[function(b,c,a){arguments[4][118][0].apply(a,arguments)
},{"./extend":310,"@marcom/ac-polyfills/Array/isArray":352,dup:118}],308:[function(b,c,a){arguments[4][50][0].apply(a,arguments)
},{dup:50}],309:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./extend":310,dup:51}],310:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":355,dup:52}],311:[function(b,c,a){arguments[4][122][0].apply(a,arguments)
},{dup:122}],312:[function(b,c,a){arguments[4][123][0].apply(a,arguments)},{dup:123}],313:[function(b,c,a){arguments[4][124][0].apply(a,arguments)
},{dup:124}],314:[function(b,c,a){arguments[4][125][0].apply(a,arguments)},{dup:125}],315:[function(b,c,a){arguments[4][126][0].apply(a,arguments)
},{"@marcom/ac-url/joinSearchParams":301,dup:126}],316:[function(b,c,a){arguments[4][130][0].apply(a,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":317,dup:130}],317:[function(b,c,a){arguments[4][131][0].apply(a,arguments)
},{dup:131}],318:[function(b,c,a){arguments[4][132][0].apply(a,arguments)},{"./ac-shared-instance/SharedInstance":319,dup:132}],319:[function(b,c,a){arguments[4][133][0].apply(a,arguments)
},{dup:133}],320:[function(b,c,a){arguments[4][134][0].apply(a,arguments)},{"@marcom/ac-shared-instance":318,dup:134}],321:[function(b,c,a){arguments[4][132][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":322,dup:132}],322:[function(b,c,a){arguments[4][133][0].apply(a,arguments)
},{dup:133}],323:[function(b,c,a){arguments[4][137][0].apply(a,arguments)},{dup:137}],324:[function(b,c,a){arguments[4][138][0].apply(a,arguments)
},{"./RAFExecutor":323,"@marcom/ac-shared-instance":321,dup:138}],325:[function(b,c,a){arguments[4][139][0].apply(a,arguments)
},{"@marcom/ac-event-emitter-micro":316,"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance":320,"@marcom/ac-raf-executor/sharedRAFExecutorInstance":324,dup:139}],326:[function(d,f,c){var h;
var a=d("./RAFEmitter");var i=d("@marcom/ac-object/clone");var g=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function b(k,j){g.call(this);j=j||{};this._fps=k||0;this._delta=0;this._currentFps=0;
this._rafEmitter=j.rafEmitter||new a();this._lastThrottledTime=0;this._didEmitFrameData=false;
this._rafEmitterEvent=null;this._shouldDraw=false;this._boundOnRAFEmitterUpdate=this._onRAFEmitterUpdate.bind(this);
this._boundOnRAFEmitterDraw=this._onRAFEmitterDraw.bind(this);this._boundOnRAFEmitterStop=this._onRAFEmitterStop.bind(this);
this._rafEmitter.on("update",this._boundOnRAFEmitterUpdate);this._rafEmitter.on("draw",this._boundOnRAFEmitterDraw);
this._rafEmitter.on("stop",this._boundOnRAFEmitterStop)}h=b.prototype=Object.create(g.prototype);
h.setFps=function(j){if(j===this._fps){return false}this._fps=j;return true};h.getFps=function(){return this._fps
};h.run=function(){return this._rafEmitter.run()};h.cancel=function(){return this._rafEmitter.cancel()
};h.willRun=function(){return this._rafEmitter.willRun()};h.isRunning=function(){return this._rafEmitter.isRunning()
};h.destroy=function(){var j=this._rafEmitter.destroy();g.prototype.destroy.call(this);
this._rafEmitter=null;this._boundOnRAFEmitterUpdate=null;this._boundOnRAFEmitterDraw=null;
this._boundOnRAFEmitterStop=null;this._rafEmitterEvent=null;return j};h._onRAFEmitterUpdate=function(j){if(this._lastThrottledTime===0){this._lastThrottledTime=this._rafEmitter.executor.lastFrameTime
}this._delta=j.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}this._currentFps=1000/this._delta;if(this._currentFps>this._fps){this._rafEmitter.run();
return}this._rafEmitterEvent=i(j);this._rafEmitterEvent.delta=this._delta;this._rafEmitterEvent.fps=this._currentFps;
this._lastThrottledTime=this._rafEmitterEvent.time;this._shouldDraw=true;if(!this._didEmitFrameData){this.trigger("start",this._rafEmitterEvent);
this._didEmitFrameData=true}this.trigger("update",this._rafEmitterEvent)};h._onRAFEmitterDraw=function(){if(this._shouldDraw){this._shouldDraw=false;
this.trigger("draw",this._rafEmitterEvent)}};h._onRAFEmitterStop=function(){this._lastThrottledTime=0;
this._didEmitFrameData=false;this.trigger("stop",this._rafEmitterEvent)};f.exports=b
},{"./RAFEmitter":325,"@marcom/ac-event-emitter-micro":316,"@marcom/ac-object/clone":307}],327:[function(b,d,a){var c=b("./singleCall");
d.exports=c("draw")},{"./singleCall":328}],328:[function(d,f,c){var a=d("./RAFEmitter");
var b=d("./ThrottledRAFEmitter");f.exports=function(g){return function(j,i){var h;
if(i){h=new b(i)}else{h=new a()}h.once(g,function(k){j(k);h.destroy();j=h=null});
h.run()}}},{"./RAFEmitter":325,"./ThrottledRAFEmitter":326}],329:[function(b,d,a){var f=b("./ac-media-object/factories/createVideo");
var c=b("./ac-media-object/factories/createFlow");d.exports={createFlow:c,createVideo:f}
},{"./ac-media-object/factories/createFlow":330,"./ac-media-object/factories/createVideo":331}],330:[function(c,d,b){var a=c("./../views/FlowView");
var f=c("@marcom/ac-object/clone");d.exports=function(j,l,i){var k=f(i||{},true);
var g;k.type="flow";function h(m){throw new Error(m)}if(!l){h("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!l.basePath){h("Please provide a valid mediaSrc object with a basePath property.")
}}if(!k.mediaObjectView){g=new a(j,l,k);g.options.mediaObjectView=g}else{g=k.mediaObjectView
}return g}},{"./../views/FlowView":334,"@marcom/ac-object/clone":307}],331:[function(c,d,b){var a=c("./../views/VideoView");
var f=c("@marcom/ac-object/clone");d.exports=function(j,l,i){var k=f(i||{},true);
var g;k.type="video";function h(m){throw new Error(m)}if(!l){h("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!l.basePath){h("Please provide a valid mediaSrc object with a basePath property.")
}}if(!k.mediaObjectView){g=new a(j,l,k);g.options.mediaObjectView=g}else{g=k.mediaObjectView
}return g}},{"./../views/VideoView":335,"@marcom/ac-object/clone":307}],332:[function(d,f,c){var h=d("@marcom/ac-mvc-model").Model;
var b=d("@marcom/ac-object");function a(i){h.apply(this,arguments)}var g=a.prototype=b.create(h.prototype);
g.defaultAttributes={type:"video",paused:true,ended:false,ready:false,loadStart:false,loaded:false,error:false,destroyed:false,currentTime:0,playbackRate:1,duration:0,preload:false,autoplay:false,frameRate:24,enhanced:false,looping:false};
g.getType=function(){return this.get("type")};g.getPaused=function(){return this.get("paused")
};g.getEnded=function(){return this.get("ended")};g.getReady=function(){return this.get("ready")
};g.getDestroyed=function(){return this.get("destroyed")};g.getLoadStart=function(){return this.get("loadedStart")
};g.getLoaded=function(){return this.get("loaded")};g.getError=function(){return this.get("error")
};g.getCurrentTime=function(){return this.get("currentTime")};g.getPlaybackRate=function(){return this.get("playbackRate")
};g.getDuration=function(){return this.get("duration")};g.getPreload=function(){return this.get("preload")
};g.getAutoplay=function(){return this.get("autoplay")};g.getFrameRate=function(){return this.get("frameRate")
};g.getEnhanced=function(){return this.get("enhanced")};g.getLooping=function(){return this.get("looping")
};g.setPaused=function(i){this.set({paused:i})};g.setEnded=function(i){this.set({ended:i})
};g.setReady=function(i){this.set({ready:i})};g.setDestroyed=function(i){this.set({destroyed:i})
};g.setDuration=function(i){this.set({duration:i})};g.setLoadStart=function(i){this.set({loadStart:i})
};g.setLoaded=function(i){this.set({loaded:i})};g.setError=function(i){this.set({error:i})
};g.setCurrentTime=function(i){this.set({currentTime:i})};g.setPlaybackRate=function(i){this.set({playbackRate:i})
};g.setPreload=function(i){this.set({preload:i})};g.setAutoplay=function(i){this.set({autoplay:i})
};g.setFrameRate=function(i){this.set({frameRate:i})};g.setEnhanced=function(i){this.set({enhanced:i})
};g.setLooping=function(i){this.set({looping:i})};f.exports=a},{"@marcom/ac-mvc-model":287,"@marcom/ac-object":306}],333:[function(d,g,c){var a=d("./../models/MediaModel");
var i=d("@marcom/ac-mvc-view").View;var b=d("@marcom/ac-object");var f=function(k,l,j){i.call(this,{element:k});
this.options=b.clone(j||{},true);this.mediaSrc=l||"";this.model=this.options.model||new a(this.options);
this._onLoadStartChange=this._onLoadStartChange.bind(this);this._onLoadedChange=this._onLoadedChange.bind(this);
this._onPausedChange=this._onPausedChange.bind(this);this._onReadyChange=this._onReadyChange.bind(this);
this._onErrorChange=this._onErrorChange.bind(this);this._onEnhancedChange=this._onEnhancedChange.bind(this);
this._onCurrentTimeChange=this._onCurrentTimeChange.bind(this);this._onPlaybackRateChange=this._onPlaybackRateChange.bind(this);
this._onDestroyedChange=this._onDestroyedChange.bind(this);this._onEndedChange=this._onEndedChange.bind(this);
this._respondToPlay=this._respondToPlay.bind(this);this._respondToPause=this._respondToPause.bind(this);
this._respondToTimeUpdate=this._respondToTimeUpdate.bind(this);this._respondToEnded=this._respondToEnded.bind(this);
this._respondToDurationChange=this._respondToDurationChange.bind(this);this._respondToRateChange=this._respondToRateChange.bind(this);
this._init()};var h=f.prototype=b.create(i.prototype);h._init=function(){this._createMediaElement();
this._createMediaEmitter();this._createMediaLoader();this._bindEvents();this._config()
};h._createMediaElement=function(){};h._createMediaEmitter=function(){};h._createMediaLoader=function(){};
h._config=function(){if(this.options.preload===true){this._setPreload(true);this.load()
}if(this.options.autoplay===true){this._setAutoplay(true)}if(this.options.looping===true){this._setLooping(true)
}if(this.options.frameRate){this._setFrameRate(this.options.frameRate)}};h._bindEvents=function(){this._bindViewEvents();
this._bindModelEvents()};h.destroy=function(){if(!this.getDestroyed()){this._destroy();
this._setDestroyed(true);this.model.off();this.off();for(var j in this){if(this.hasOwnProperty(j)&&typeof this[j]!=="function"){this[j]=null
}}}};h._bindModelEvents=function(){this.model.on("change:loadStart",this._onLoadStartChange);
this.model.on("change:loaded",this._onLoadedChange);this.model.on("change:paused",this._onPausedChange);
this.model.on("change:ready",this._onReadyChange);this.model.on("change:error",this._onErrorChange);
this.model.on("change:enhanced",this._onEnhancedChange);this.model.on("change:currentTime",this._onCurrentTimeChange);
this.model.on("change:playbackRate",this._onPlaybackRateChange);this.model.on("change:destroyed",this._onDestroyedChange);
this.model.on("change:ended",this._onEndedChange)};h._onLoadStartChange=function(){this.trigger("loadstart")
};h._onLoadedChange=function(){this.trigger("loaded")};h._onPausedChange=function(j){if(j.value===true){this.trigger("pause");
this.el.classList.remove("mediaobject-playing")}else{this.trigger("play");this.el.classList.remove("mediaobject-ended");
this.el.classList.add("mediaobject-playing")}};h._onReadyChange=function(){this.trigger("ready")
};h._onErrorChange=function(){this.trigger("error")};h._onEnhancedChange=function(){this.el.classList.add("mediaobject-enhanced");
this.mediaElement.classList.add("mediaobject-element");this.trigger("enhanced")
};h._onCurrentTimeChange=function(){this.trigger("timeupdate")};h._onPlaybackRateChange=function(){this.trigger("ratechange")
};h._onDestroyedChange=function(){this.el.classList.remove("mediaobject-playing");
this.el.classList.remove("mediaobject-ended");this.el.classList.remove("mediaobject-enhanced");
this.el.classList.add("mediaobject-destroyed");this.trigger("destroyed")};h._onEndedChange=function(j){if(j.value===true){this.trigger("ended")
}};h._bindViewEvents=function(){if(!this.mediaEmitter){return}this.mediaEmitter.on("play",this._respondToPlay);
this.mediaEmitter.on("pause",this._respondToPause);this.mediaEmitter.on("timeupdate",this._respondToTimeUpdate);
this.mediaEmitter.on("ended",this._respondToEnded);this.mediaEmitter.on("durationchange",this._respondToDurationChange);
this.mediaEmitter.on("ratechange",this._respondToRateChange)};h._respondToPlay=function(){this.model.set({ended:false,paused:false})
};h._respondToPause=function(){this.model.setPaused(true)};h._respondToTimeUpdate=function(){var j=0;
if(this.mediaElement.currentTime){j=this.mediaElement.currentTime}else{if(this.mediaEmitter.currentTime){j=this.mediaEmitter.currentTime
}else{return}}if(this.getCurrentTime()!==j){this.model.set({currentTime:j})}};h._respondToEnded=function(){this.model.set({ended:true,paused:true});
this.el.classList.remove("mediaobject-playing");this.el.classList.add("mediaobject-ended")
};h._respondToDurationChange=function(){var j=0;if(this.mediaElement.duration){j=this.mediaElement.duration
}else{if(this.mediaEmitter.duration){j=this.mediaEmitter.duration}else{return}}this.model.set({duration:j})
};h._respondToRateChange=function(){var j=0;if(this.mediaElement.playbackRate){j=this.mediaElement.playbackRate
}else{if(this.mediaEmitter.playbackRate){j=this.mediaEmitter.playbackRate}else{return
}}this.model.set({playbackRate:j})};h.enhance=function(){};h.play=function(){};
h.pause=function(){};h.reset=function(){};h.setCurrentTime=function(j){};h.setPlaybackRate=function(j){};
h.goToFrame=function(k){var j=k/this.model.frameRate;return this.setCurrentTime(j)
};h.goToPercent=function(j){var k=j*this.getDuration();return this.setCurrentTime(k)
};h._setReady=function(j){this.model.setReady(j)};h._setLoadStart=function(j){this.model.setLoadStart(j)
};h._setLoaded=function(j){this.model.setLoaded(j)};h._setError=function(j){this.model.setError(j)
};h._setDuration=function(j){this.model.setDuration(j)};h._setPreload=function(j){this.model.setPreload(j)
};h._setAutoplay=function(j){this.model.setAutoplay(j)};h._setFrameRate=function(j){this.model.setFrameRate(j)
};h._setEnhanced=function(j){this.model.setEnhanced(j)};h._setDestroyed=function(j){this.model.setDestroyed(j)
};h._setLooping=function(j){};h._destroy=function(){};h.getType=function(){return this.model.getType()
};h.getPaused=function(){return this.model.getPaused()};h.getEnded=function(){return this.model.getEnded()
};h.getReady=function(){return this.model.getReady()};h.getLoadStart=function(){return this.model.getLoadStart()
};h.getLoaded=function(){return this.model.getLoaded()};h.getError=function(){return this.model.getError()
};h.getDuration=function(){return this.model.getDuration()};h.getEnhanced=function(){return this.model.getEnhanced()
};h.getCurrentTime=function(){return this.model.getCurrentTime()};h.getCurrentFrame=function(){return Math.floor(this.getCurrentTime()*this.options.frameRate)
};h.getCurrentPercent=function(){return(this.model.getCurrentTime()/this.getDuration())||0
};h.getPlaybackRate=function(){return this.model.getPlaybackRate()};h.getFrameRate=function(){return this.model.getFrameRate()
};h.getPreload=function(){return this.model.getPreload()};h.getAutoplay=function(){return this.model.getAutoplay()
};h.getLooping=function(){return this.model.getLooping()};h.getDestroyed=function(){if(this.model){return this.model.getDestroyed()
}else{return true}};g.exports=f},{"./../models/MediaModel":332,"@marcom/ac-mvc-view":299,"@marcom/ac-object":306}],334:[function(b,a,c){var d=b("./BaseView");
var j=b("@marcom/ac-dom-nodes");var i=b("@marcom/ac-flow").createFlow;var g=b("@marcom/ac-object/create");
var k=b("@marcom/ac-raf-emitter/draw");var h=function(m,n,l){d.call(this,m,n,l);
this._onLoad=this._onLoad.bind(this);this._onError=this._onError.bind(this);this._onReady=this._onReady.bind(this)
};var f=h.prototype=g(d.prototype);f._createMediaElement=function(){this.mediaElement=document.createElement("canvas")
};f._createMediaEmitter=function(){this.flowOptions={element:this.mediaElement,preload:false,keyframeCache:this.options.keyframeCache||false};
this.mediaEmitter=i(this.flowOptions,this.mediaSrc)};f._createMediaLoader=function(){this.mediaLoader=this.mediaEmitter
};f.load=function(){this._setLoadStart(true);this.mediaLoader.once("loaded",this._onLoad);
this.mediaLoader.once("error",this._onError);this.mediaEmitter.once("canplaythrough",this._onReady);
if(!this.loaded){return this._load()}};f._load=function(){return this.mediaLoader.load()
};f._onLoad=function(){this._setLoaded(true)};f._onError=function(){this._setError(true)
};f._onReady=function(){this._setReady(true);this._setDuration(this.mediaEmitter.duration);
this.setPlaybackRate(this.getPlaybackRate());this._totalFrames=this._getTotalFrames();
if(this.getAutoplay()){if(this.getEnhanced===false){this.enhance()}this.play()}};
f._getTotalFrames=function(){return this.getDuration()*this.getFrameRate()};f.enhance=function(){this._setEnhanced(true);
k(function(){if(this.mediaElement){this._inject()}}.bind(this))};f._inject=function(){j.insertFirstChild(this.mediaElement,this.el)
};f._destroy=function(){this._remove();if(this.mediaEmitter){this.mediaEmitter.destroy()
}};f._remove=function(){j.remove(this.mediaElement)};f.play=function(){if(this.model.getPaused()===false){return
}if(this.mediaEmitter.currentTime>=this.getDuration()){this.setCurrentTime(0)}if(this.getReady()&&this.mediaEmitter!==null){this.mediaEmitter.play()
}};f.pause=function(){if(this.model.getPaused()===true){return}this.mediaEmitter.pause()
};f.reset=function(){if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);
this.pause()};f.setCurrentTime=function(l){if(l<0){l=0}if(l>this.getDuration()){l=this.getDuration()
}this.mediaEmitter.currentTime=l};f.setPlaybackRate=function(l){this.mediaEmitter.playbackRate=l
};f._setLooping=function(l){this.mediaEmitter.loop=l;this.model.setLooping(l)};
a.exports=h},{"./BaseView":333,"@marcom/ac-dom-nodes":204,"@marcom/ac-flow":264,"@marcom/ac-object/create":308,"@marcom/ac-raf-emitter/draw":327}],335:[function(d,b,s){var r=d("./BaseView");
var n=r.prototype;var q=d("@marcom/ac-raf-emitter/RAFEmitter");var h=d("@marcom/ac-raf-emitter/draw");
var j=d("@marcom/ac-dom-nodes");var o=d("@marcom/ac-dom-emitter").DOMEmitter;var k=d("@marcom/ac-dom-styles");
var a=d("@marcom/ac-asset-loader").AssetLoader;var i=d("@marcom/ac-asset-loader").Asset.Video;
var f=d("@marcom/ac-useragent");var m=d("@marcom/ac-feature").isHandheld;var p=d("@marcom/ac-feature").isTablet;
var c=d("@marcom/ac-object/create");var g=function(u,v,t){this.srcForVideoEl=null;
this._cannotPlayInlineVideo=null;this._onLoaded=this._onLoaded.bind(this);this._onReady=this._onReady.bind(this);
r.call(this,u,v,t);if(t.iosInline&&(m()||p())){this._initInlineVideo(t)}};var l=g.prototype=c(r.prototype);
l.inlineClassName="mediaobject-ios-inline-video";l.inlineAttribute="playsinline";
l._usePolyfill=null;l._cannotPlayInlineVideo=null;l._initInlineVideo=function(t){if(this.mediaElement.hasAttribute("controls")){this.mediaElement.removeAttribute("controls")
}this.mediaElement.setAttribute(this.inlineAttribute,"");this.mediaElement.classList.add(this.inlineClassName);
this._shouldLoop=false;if(this._inlinePolyfillCheck()){this._polyfillRAFEmitter=t.polyfillRAFEmitter||new q();
this._boundHandlePolyfillRAFEmitterDraw=this._handlePolyfillRAFEmitterDraw.bind(this);
this._polyfillRAFEmitter.on("draw",this._boundHandlePolyfillRAFEmitterDraw)}};l._inlinePolyfillCheck=function(){if(this._usePolyfill!==null){return this._usePolyfill
}var t=true;if(window.matchMedia){t=!window.matchMedia("(-webkit-video-playable-inline)").matches
}this._usePolyfill=t;return this._usePolyfill};l._createMediaElement=function(){this.mediaElement=document.createElement("video")
};l._createMediaEmitter=function(){this.mediaEmitter=new o(this.mediaElement)};
l._createMediaLoader=function(){var t,u;this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath);
if(this.mediaSrc.splitFileLoading){t=this.mediaSrc.basePath;u=new i(t,{element:this.mediaElement,forceElementLoading:false,split:true});
this.mediaLoader=new a(u)}else{this.mediaSrc.fileFormat=this._checkFileFormat(this.mediaSrc.fileFormat);
t=this.mediaSrc.basePath+this.mediaSrc.filename+this.mediaSrc.fileFormat;this.srcForVideoEl=t
}};l._forceTrailingSlash=function(t){if(t&&t.lastIndexOf("/")!==t.length-1){t=t+"/"
}return t};l._checkFileFormat=function(t){if(t&&t.lastIndexOf(".")!==0){t="."+t
}return t};l.load=function(){this._setLoadStart(true);if(this.mediaSrc.splitFileLoading){var u=function(){if(this.mediaEmitter){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}}.bind(this);var t=function(){this._setError(true);
throw new Error("Video failed to load.")}.bind(this);this.mediaLoader.load().then(u,t)
}else{if(!this.cannotPlayInlineVideo()){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}this.mediaElement.src=this.srcForVideoEl;
if(this.cannotPlayInlineVideo()){this._onLoaded()}else{this.mediaElement.load()
}}};l._onLoaded=function(){this._setLoaded(true)};l.cannotPlayInlineVideo=function(){if(this._cannotPlayInlineVideo!==null){return this._cannotPlayInlineVideo
}var t=f.os==="iOS"&&m();var u=f.os==="iOS"&&p()&&f.version<8;this._cannotPlayInlineVideo=t||u;
return this._cannotPlayInlineVideo};l._onReady=function(){this._setReady(true);
if(this.getAutoplay()){if(!this.getEnhanced()){this.enhance()}this.play()}};l.enhance=function(){this._setEnhanced(true);
h(function(){if(this.mediaElement.tagName==="VIDEO"){j.insertLastChild(this.mediaElement,this.el);
k.setStyle(this.mediaElement,{visibility:"hidden"});h(function(){if(this.mediaElement){this.setPlaybackRate(this.getPlaybackRate());
k.setStyle(this.mediaElement,{visibility:"visible"})}}.bind(this))}}.bind(this))
};l._destroy=function(){this._remove();if(this.mediaEmitter){this.mediaEmitter.off()
}if(this.mediaLoader&&typeof this.mediaLoader.off==="function"){this.mediaLoader.off()
}if(this._polyfillRAFEmitter){this._polyfillRAFEmitter.destroy();this._polyfillRAFEmitter=null
}};l._remove=function(){j.remove(this.mediaElement)};l._onEndedChange=function(t){n._onEndedChange.call(this,t);
if(f.os==="iOS"&&m()&&t.value===true){this.mediaElement.webkitExitFullScreen()}};
l.play=function(){if(this.model.getPaused()===false){return}if(this._usePolyfill){if(this.model.getPaused()===false){return
}this.model.setPaused(false);this._polyfillRAFEmitter.run()}else{this.mediaElement.play()
}};l.pause=function(){if(this.model.getPaused()===true){return}if(this._usePolyfill){if(this.model.getPaused()===true){return
}this.model.setPaused(true);this._polyfillRAFEmitter.cancel()}else{this.mediaElement.pause()
}};l.reset=function(){if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);
this.pause()};l.setCurrentTime=function(t){if(!this.mediaElement.duration){return
}this.model.setCurrentTime(t);this.mediaElement.currentTime=t;if(this._usePolyfill){this._polyfillRAFEmitter.run()
}};l.setPlaybackRate=function(t){this.mediaElement.playbackRate=t};l._setLooping=function(t){this.mediaElement.loop=t;
this.model.setLooping(t)};l._handlePolyfillRAFEmitterDraw=function(z){var w=this.model.getCurrentTime();
var v=this.model.getPlaybackRate();var y=this.mediaElement.duration;var A=(z.delta/1000)*v;
if(this.model.getPaused()){return}w+=A;var t=(w<=0);var B=(w>=y);var x=(v>=0);var u=(v<0);
if(t){w=0}if(B){w=y}if(this._shouldLoop){this._shouldLoop=false;if(x){this.setCurrentTime(A)
}else{this.setCurrentTime(y-A)}return}this.setCurrentTime(w);if((t&&u)||(B&&x)){if(this.model.getLooping()){this._shouldLoop=true
}else{this.pause();this.model.setEnded(true)}}};b.exports=g},{"./BaseView":333,"@marcom/ac-asset-loader":159,"@marcom/ac-dom-emitter":180,"@marcom/ac-dom-nodes":204,"@marcom/ac-dom-styles":235,"@marcom/ac-feature":22,"@marcom/ac-object/create":308,"@marcom/ac-raf-emitter/RAFEmitter":325,"@marcom/ac-raf-emitter/draw":327,"@marcom/ac-useragent":424}],336:[function(b,c,a){(function(h){if(!h.console){h.console={}
}var d=h.console;var k,j;var i=function(){};var g=["memory"];var f=("assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");
while(k=g.pop()){if(!d[k]){d[k]={}}}while(j=f.pop()){if(typeof d[j]!=="function"){d[j]=i
}}})(typeof window==="undefined"?this:window)},{}],337:[function(b,c,a){var d=b("./promise/promise").Promise;
var f=b("./promise/polyfill").polyfill;a.Promise=d;a.polyfill=f},{"./promise/polyfill":341,"./promise/promise":342}],338:[function(c,d,b){var a=c("./utils").isArray;
var g=c("./utils").isFunction;function f(h){var i=this;if(!a(h)){throw new TypeError("You must pass an array to all.")
}return new i(function(o,n){var l=[],m=h.length,q;if(m===0){o([])}function p(r){return function(s){j(r,s)
}}function j(r,s){l[r]=s;if(--m===0){o(l)}}for(var k=0;k<h.length;k++){q=h[k];if(q&&g(q.then)){q.then(p(k),n)
}else{j(k,q)}}})}b.all=f},{"./utils":346}],339:[function(b,c,a){(function(f,g){var o=(typeof window!=="undefined")?window:{};
var l=o.MutationObserver||o.WebKitMutationObserver;var n=(typeof g!=="undefined")?g:(this===undefined?window:this);
function m(){return function(){f.nextTick(p)}}function i(){var s=0;var q=new l(p);
var r=document.createTextNode("");q.observe(r,{characterData:true});return function(){r.data=(s=++s%2)
}}function k(){return function(){n.setTimeout(p,1)}}var j=[];function p(){for(var s=0;
s<j.length;s++){var r=j[s];var t=r[0],q=r[1];t(q)}j=[]}var h;if(typeof f!=="undefined"&&{}.toString.call(f)==="[object process]"){h=m()
}else{if(l){h=i()}else{h=k()}}function d(s,q){var r=j.push([s,q]);if(r===1){h()
}}a.asap=d}).call(this,b("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{_process:44}],340:[function(d,f,a){var c={instrument:false};function b(g,h){if(arguments.length===2){c[g]=h
}else{return c[g]}}a.config=c;a.configure=b},{}],341:[function(b,c,a){(function(f){var d=b("./promise").Promise;
var h=b("./utils").isFunction;function g(){var j;if(typeof f!=="undefined"){j=f
}else{if(typeof window!=="undefined"&&window.document){j=window}else{j=self}}var i="Promise" in j&&"resolve" in j.Promise&&"reject" in j.Promise&&"all" in j.Promise&&"race" in j.Promise&&(function(){var k;
new j.Promise(function(l){k=l});return h(k)}());if(!i){j.Promise=d}}a.polyfill=g
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./promise":342,"./utils":346}],342:[function(q,d,D){var B=q("./config").config;
var A=q("./config").configure;var s=q("./utils").objectOrFunction;var a=q("./utils").isFunction;
var f=q("./utils").now;var g=q("./all").all;var j=q("./race").race;var l=q("./resolve").resolve;
var c=q("./reject").reject;var u=q("./asap").asap;var r=0;B.async=u;function h(E){if(!a(E)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}if(!(this instanceof h)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}this._subscribers=[];z(E,this)}function z(I,H){function E(J){v(H,J)}function G(J){k(H,J)
}try{I(E,G)}catch(F){G(F)}}function x(L,N,K,G){var E=a(K),J,I,M,F;if(E){try{J=K(G);
M=true}catch(H){F=true;I=H}}else{J=G;M=true}if(t(N,J)){return}else{if(E&&M){v(N,J)
}else{if(F){k(N,I)}else{if(L===b){v(N,J)}else{if(L===C){k(N,J)}}}}}}var m=void 0;
var p=0;var b=1;var C=2;function o(E,J,I,H){var G=E._subscribers;var F=G.length;
G[F]=J;G[F+b]=I;G[F+C]=H}function w(I,E){var K,J,H=I._subscribers,G=I._detail;for(var F=0;
F<H.length;F+=3){K=H[F];J=H[F+E];x(E,K,J,G)}I._subscribers=null}h.prototype={constructor:h,_state:undefined,_detail:undefined,_subscribers:undefined,then:function(J,H){var I=this;
var F=new this.constructor(function(){});if(this._state){var G=arguments;B.async(function E(){x(I._state,F,G[I._state-1],I._detail)
})}else{o(this,F,J,H)}return F},"catch":function(E){return this.then(null,E)}};
h.all=g;h.race=j;h.resolve=l;h.reject=c;function t(I,G){var H=null,E;try{if(I===G){throw new TypeError("A promises callback cannot return that same promise.")
}if(s(G)){H=G.then;if(a(H)){H.call(G,function(J){if(E){return true}E=true;if(G!==J){v(I,J)
}else{i(I,J)}},function(J){if(E){return true}E=true;k(I,J)});return true}}}catch(F){if(E){return true
}k(I,F);return true}return false}function v(F,E){if(F===E){i(F,E)}else{if(!t(F,E)){i(F,E)
}}}function i(F,E){if(F._state!==m){return}F._state=p;F._detail=E;B.async(y,F)}function k(F,E){if(F._state!==m){return
}F._state=p;F._detail=E;B.async(n,F)}function y(E){w(E,E._state=b)}function n(E){w(E,E._state=C)
}D.Promise=h},{"./all":338,"./asap":339,"./config":340,"./race":343,"./reject":344,"./resolve":345,"./utils":346}],343:[function(c,f,b){var a=c("./utils").isArray;
function d(g){var h=this;if(!a(g)){throw new TypeError("You must pass an array to race.")
}return new h(function(m,l){var k=[],n;for(var j=0;j<g.length;j++){n=g[j];if(n&&typeof n.then==="function"){n.then(m,l)
}else{m(n)}}})}b.race=d},{"./utils":346}],344:[function(b,c,a){function d(g){var f=this;
return new f(function(i,h){h(g)})}a.reject=d},{}],345:[function(b,c,a){function d(g){if(g&&typeof g==="object"&&g.constructor===this){return g
}var f=this;return new f(function(h){h(g)})}a.resolve=d},{}],346:[function(d,f,b){function g(i){return h(i)||(typeof i==="object"&&i!==null)
}function h(i){return typeof i==="function"}function a(i){return Object.prototype.toString.call(i)==="[object Array]"
}var c=Date.now||function(){return new Date().getTime()};b.objectOrFunction=g;b.isFunction=h;
b.isArray=a;b.now=c},{}],347:[function(b,c,a){(function(o,q){var k="3.7.3-pre";
var h=o.html5||{};var l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
var g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
var v;var m="_html5shiv";var d=0;var s={};var i;(function(){try{var y=q.createElement("a");
y.innerHTML="<xyz></xyz>";v=("hidden" in y);i=y.childNodes.length==1||(function(){(q.createElement)("a");
var A=q.createDocumentFragment();return(typeof A.cloneNode=="undefined"||typeof A.createDocumentFragment=="undefined"||typeof A.createElement=="undefined")
}())}catch(z){v=true;i=true}}());function j(y,A){var B=y.createElement("p"),z=y.getElementsByTagName("head")[0]||y.documentElement;
B.innerHTML="x<style>"+A+"</style>";return z.insertBefore(B.lastChild,z.firstChild)
}function p(){var y=n.elements;return typeof y=="string"?y.split(" "):y}function t(y,z){var A=n.elements;
if(typeof A!="string"){A=A.join(" ")}if(typeof y!="string"){y=y.join(" ")}n.elements=A+" "+y;
f(z)}function u(y){var z=s[y[m]];if(!z){z={};d++;y[m]=d;s[d]=z}return z}function r(B,y,A){if(!y){y=q
}if(i){return y.createElement(B)}if(!A){A=u(y)}var z;if(A.cache[B]){z=A.cache[B].cloneNode()
}else{if(g.test(B)){z=(A.cache[B]=A.createElem(B)).cloneNode()}else{z=A.createElem(B)
}}return z.canHaveChildren&&!l.test(B)&&!z.tagUrn?A.frag.appendChild(z):z}function w(A,C){if(!A){A=q
}if(i){return A.createDocumentFragment()}C=C||u(A);var D=C.frag.cloneNode(),B=0,z=p(),y=z.length;
for(;B<y;B++){D.createElement(z[B])}return D}function x(y,z){if(!z.cache){z.cache={};
z.createElem=y.createElement;z.createFrag=y.createDocumentFragment;z.frag=z.createFrag()
}y.createElement=function(A){if(!n.shivMethods){return z.createElem(A)}return r(A,y,z)
};y.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+p().join().replace(/[\w\-:]+/g,function(A){z.createElem(A);
z.frag.createElement(A);return'c("'+A+'")'})+");return n}")(n,z.frag)}function f(y){if(!y){y=q
}var z=u(y);if(n.shivCSS&&!v&&!z.hasCSS){z.hasCSS=!!j(y,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")
}if(!i){x(y,z)}return y}var n={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:k,shivCSS:(h.shivCSS!==false),supportsUnknownElements:i,shivMethods:(h.shivMethods!==false),type:"default",shivDocument:f,createElement:r,createDocumentFragment:w,addElements:t};
o.html5=n;f(q);if(typeof c=="object"&&c.exports){c.exports=n}}(typeof window!=="undefined"?window:this,document))
},{}],348:[function(b,c,a){
/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false
}var i=window.matchMedia,d=i("only all").matches,h=false,j=0,g=[],f=function(k){clearTimeout(j);
j=setTimeout(function(){for(var p=0,m=g.length;p<m;p++){var l=g[p].mql,q=g[p].listeners||[],r=i(l.media).matches;
if(r!==l.matches){l.matches=r;for(var n=0,o=q.length;n<o;n++){q[n].call(window,l)
}}}},30)};window.matchMedia=function(n){var k=i(n),m=[],l=0;k.addListener=function(o){if(!d){return
}if(!h){h=true;window.addEventListener("resize",f,true)}if(l===0){l=g.push({mql:k,listeners:m})
}m.push(o)};k.removeListener=function(q){for(var p=0,o=m.length;p<o;p++){if(m[p]===q){m.splice(p,1)
}}};return k}}())},{}],349:[function(b,c,a){
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){var f=(window.styleMedia||window.media);
if(!f){var g=document.createElement("style"),d=document.getElementsByTagName("script")[0],h=null;
g.type="text/css";g.id="matchmediajs-test";d.parentNode.insertBefore(g,d);h=("getComputedStyle" in window)&&window.getComputedStyle(g,null)||g.currentStyle;
f={matchMedium:function(i){var j="@media "+i+"{ #matchmediajs-test { width: 1px; } }";
if(g.styleSheet){g.styleSheet.cssText=j}else{g.textContent=j}return h.width==="1px"
}}}return function(i){return{matches:f.matchMedium(i||"all"),media:i||"all"}}}())
},{}],350:[function(b,c,a){b("./Array/from");b("./Array/isArray");b("./Array/prototype.every");
b("./Array/prototype.filter");b("./Array/prototype.forEach");b("./Array/prototype.indexOf");
b("./Array/prototype.lastIndexOf");b("./Array/prototype.map");b("./Array/prototype.reduce");
b("./Array/prototype.reduceRight");b("./Array/prototype.slice");b("./Array/prototype.some")
},{"./Array/from":351,"./Array/isArray":352,"./Array/prototype.every":353,"./Array/prototype.filter":354,"./Array/prototype.forEach":355,"./Array/prototype.indexOf":356,"./Array/prototype.lastIndexOf":357,"./Array/prototype.map":358,"./Array/prototype.reduce":359,"./Array/prototype.reduceRight":360,"./Array/prototype.slice":361,"./Array/prototype.some":362}],351:[function(b,c,a){if(!Array.from){Array.from=(function(){var h=Object.prototype.toString;
var i=function(k){return typeof k==="function"||h.call(k)==="[object Function]"
};var g=function(l){var k=Number(l);if(isNaN(k)){return 0}if(k===0||!isFinite(k)){return k
}return(k>0?1:-1)*Math.floor(Math.abs(k))};var f=Math.pow(2,53)-1;var d=function(l){var k=g(l);
return Math.min(Math.max(k,0),f)};return function j(t){var l=this;var s=Object(t);
if(t==null){throw new TypeError("Array.from requires an array-like object - not null or undefined")
}var q=arguments.length>1?arguments[1]:void undefined;var n;if(typeof q!=="undefined"){if(!i(q)){throw new TypeError("Array.from: when provided, the second argument must be a function")
}if(arguments.length>2){n=arguments[2]}}var r=d(s.length);var m=i(l)?Object(new l(r)):new Array(r);
var o=0;var p;while(o<r){p=s[o];if(q){m[o]=typeof n==="undefined"?q(p,o):q.call(n,p,o)
}else{m[o]=p}o+=1}m.length=r;return m}}())}},{}],352:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],353:[function(b,c,a){if(!Array.prototype.every){Array.prototype.every=function d(k,j){var h=Object(this);
var f=h.length>>>0;var g;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(g=0;g<f;g+=1){if(g in h&&!k.call(j,h[g],g,h)){return false}}return true}}},{}],354:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],355:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(l,k){var j=Object(this);
var f;var g;if(typeof l!=="function"){throw new TypeError("No function object passed to forEach.")
}var h=this.length;for(f=0;f<h;f+=1){g=j[f];l.call(k,g,f,j)}}}},{}],356:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],357:[function(c,d,b){if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function a(k,j){var g=Object(this);
var f=g.length>>>0;var h;j=parseInt(j,10);if(f<=0){return -1}h=(typeof j==="number")?Math.min(f-1,j):f-1;
h=h>=0?h:f-Math.abs(h);for(;h>=0;h-=1){if(h in g&&k===g[h]){return h}}return -1
}}},{}],358:[function(b,c,a){if(!Array.prototype.map){Array.prototype.map=function d(l,k){var h=Object(this);
var g=h.length>>>0;var j;var f=new Array(g);if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(j=0;j<g;j+=1){if(j in h){f[j]=l.call(k,h[j],j,h)}}return f}}},{}],359:[function(b,c,a){if(!Array.prototype.reduce){Array.prototype.reduce=function d(l,h){var j=Object(this);
var g=j.length>>>0;var k=0;var f;if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}if(typeof h==="undefined"){if(!g){throw new TypeError("Reduce of empty array with no initial value")
}f=j[0];k=1}else{f=h}while(k<g){if(k in j){f=l.call(undefined,f,j[k],k,j);k+=1}}return f
}}},{}],360:[function(c,d,b){if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function a(l,h){var j=Object(this);
var g=j.length>>>0;var k=g-1;var f;if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}if(h===undefined){if(!g){throw new TypeError("Reduce of empty array with no initial value")
}f=j[g-1];k=g-2}else{f=h}while(k>=0){if(k in j){f=l.call(undefined,f,j[k],k,j);
k-=1}}return f}}},{}],361:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],362:[function(b,c,a){if(!Array.prototype.some){Array.prototype.some=function d(k,j){var g=Object(this);
var f=g.length>>>0;var h;if(typeof k!=="function"){throw new TypeError(k+" is not a function")
}for(h=0;h<f;h+=1){if(h in g&&k.call(j,g[h],h,g)===true){return true}}return false
}}},{}],363:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],364:[function(b,c,a){b("./Date/now");
b("./Date/prototype.toISOString");b("./Date/prototype.toJSON")},{"./Date/now":365,"./Date/prototype.toISOString":366,"./Date/prototype.toJSON":367}],365:[function(c,d,a){if(!Date.now){Date.now=function b(){return new Date().getTime()
}}},{}],366:[function(b,d,a){if(!Date.prototype.toISOString){Date.prototype.toISOString=function c(){if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}var g={year:this.getUTCFullYear(),month:this.getUTCMonth()+1,day:this.getUTCDate(),hours:this.getUTCHours(),minutes:this.getUTCMinutes(),seconds:this.getUTCSeconds(),mseconds:(this.getUTCMilliseconds()/1000).toFixed(3).substr(2,3)};
var h;var f;for(h in g){if(g.hasOwnProperty(h)&&h!=="year"&&h!=="mseconds"){g[h]=String(g[h]).length===1?"0"+String(g[h]):String(g[h])
}}if(g.year<0||g.year>9999){f=g.year<0?"-":"+";g.year=f+String(Math.abs(g.year/1000000)).substr(2,6)
}return g.year+"-"+g.month+"-"+g.day+"T"+g.hours+":"+g.minutes+":"+g.seconds+"."+g.mseconds+"Z"
}}},{}],367:[function(b,c,a){if(!Date.prototype.toJSON){Date.prototype.toJSON=function(h){var i=Object(this);
var d;var g=function(j){var l=typeof j;var k=[null,"undefined","boolean","string","number"].some(function(m){return m===l
});if(k){return true}return false};var f=function(j){var k;if(g(j)){return j}k=(typeof j.valueOf==="function")?j.valueOf():(typeof j.toString==="function")?j.toString():null;
if(k&&g(k)){return k}throw new TypeError(j+" cannot be converted to a primitive")
};d=f(i);if(typeof d==="number"&&!isFinite(d)){return null}if(typeof i.toISOString!=="function"){throw new TypeError("toISOString is not callable")
}return i.toISOString.call(i)}}},{}],368:[function(b,c,a){b("./Element/prototype.classList");
b("./Element/prototype.matches");b("./Element/prototype.remove")},{"./Element/prototype.classList":369,"./Element/prototype.matches":370,"./Element/prototype.remove":371}],369:[function(b,c,a){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
}var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
}}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
},k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
}return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
}},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
};i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
}};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
}};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
};if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
}catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
}}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
}else{return d.call(this,h)}}}f=null}())}}},{}],370:[function(b,c,a){if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(f){var g=(this.document||this.ownerDocument).querySelectorAll(f),d=g.length;
while(--d>=0&&g.item(d)!==this){}return d>-1}}},{}],371:[function(b,c,a){c.exports=(function(){if(!("remove" in Element.prototype)){Element.prototype.remove=function(){if(this.parentNode){this.parentNode.removeChild(this)
}}}})},{}],372:[function(b,c,a){b("./Function/prototype.bind")},{"./Function/prototype.bind":373}],373:[function(b,c,a){if(!Function.prototype.bind){Function.prototype.bind=function(d){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var i=Array.prototype.slice.call(arguments,1);var h=this;var f=function(){};var g=function(){return h.apply((this instanceof f&&d)?this:d,i.concat(Array.prototype.slice.call(arguments)))
};f.prototype=this.prototype;g.prototype=new f();return g}}},{}],374:[function(require,module,exports){if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;
i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}())},{}],375:[function(b,c,a){b("./Object/assign");b("./Object/create");b("./Object/is");
b("./Object/keys")},{"./Object/assign":376,"./Object/create":377,"./Object/is":378,"./Object/keys":379}],376:[function(b,c,a){if(typeof Object.assign!="function"){Object.assign=function(h){if(h==null){throw new TypeError("Cannot convert undefined or null to object")
}h=Object(h);for(var d=1;d<arguments.length;d++){var g=arguments[d];if(g!=null){for(var f in g){if(Object.prototype.hasOwnProperty.call(g,f)){h[f]=g[f]
}}}}return h}}},{}],377:[function(b,c,a){if(!Object.create){var d=function(){};
Object.create=function(f){if(arguments.length>1){throw new Error("Second argument not supported")
}if(f===null||typeof f!=="object"){throw new TypeError("Object prototype may only be an Object.")
}d.prototype=f;return new d()}}},{}],378:[function(b,c,a){if(!Object.is){Object.is=function(f,d){if(f===0&&d===0){return 1/f===1/d
}if(f!==f){return d!==d}return f===d}}},{}],379:[function(b,c,a){if(!Object.keys){Object.keys=function d(g){var f=[];
var h;if((!g)||(typeof g.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(h in g){if(g.hasOwnProperty(h)){f.push(h)}}return f}}},{}],380:[function(b,c,a){c.exports=b("es6-promise").polyfill()
},{"es6-promise":337}],381:[function(b,c,a){b("./String/prototype.trim")},{"./String/prototype.trim":382}],382:[function(c,d,b){if(!String.prototype.trim){String.prototype.trim=function a(){return this.replace(/^\s+|\s+$/g,"")
}}},{}],383:[function(b,c,a){window.XMLHttpRequest=window.XMLHttpRequest||function(){var f;
try{f=new ActiveXObject("Msxml2.XMLHTTP")}catch(d){try{f=new ActiveXObject("Microsoft.XMLHTTP")
}catch(d){f=false}}return f}},{}],384:[function(b,c,a){b("./Array");b("./console.log");
b("./CustomEvent");b("./Date");b("./Element");b("./Function");b("./getComputedStyle");
b("./html5shiv");b("./JSON");b("./matchMedia");b("./Object");b("./Promise");b("./requestAnimationFrame");
b("./String");b("./XMLHttpRequest")},{"./Array":350,"./CustomEvent":363,"./Date":364,"./Element":368,"./Function":372,"./JSON":374,"./Object":375,"./Promise":380,"./String":381,"./XMLHttpRequest":383,"./console.log":385,"./getComputedStyle":386,"./html5shiv":387,"./matchMedia":388,"./requestAnimationFrame":389}],385:[function(b,c,a){b("console-polyfill")
},{"console-polyfill":336}],386:[function(d,f,c){if(!window.getComputedStyle){function g(j,m,l){j.document;
var k=j.currentStyle[m].match(/(-?[\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],i=k[1],n=k[2],h;
l=!l?l:/%|em/.test(n)&&j.parentElement?g(j.parentElement,"fontSize",null):16;h=m=="fontSize"?l:/width/i.test(m)?j.clientWidth:j.clientHeight;
return n=="%"?i/100*h:n=="cm"?i*0.3937*96:n=="em"?i*l:n=="in"?i*96:n=="mm"?i*0.3937*96/10:n=="pc"?i*12*96/72:n=="pt"?i*96/72:i
}function b(k,n){var o=n=="border"?"Width":"",j=n+"Top"+o,m=n+"Right"+o,h=n+"Bottom"+o,i=n+"Left"+o;
k[n]=(k[j]==k[m]&&k[j]==k[h]&&k[j]==k[i]?[k[j]]:k[j]==k[h]&&k[i]==k[m]?[k[j],k[m]]:k[i]==k[m]?[k[j],k[m],k[h]]:[k[j],k[m],k[h],k[i]]).join(" ")
}function a(k){var l=this,j=k.currentStyle,n=g(k,"fontSize"),h=function(o){return"-"+o.toLowerCase()
},m;for(m in j){Array.prototype.push.call(l,m=="styleFloat"?"float":m.replace(/[A-Z]/,h));
if(m=="width"){l[m]=k.offsetWidth+"px"}else{if(m=="height"){l[m]=k.offsetHeight+"px"
}else{if(m=="styleFloat"){l["float"]=j[m];l.cssFloat=j[m]}else{if(/margin.|padding.|border.+W/.test(m)&&l[m]!="auto"){l[m]=Math.round(g(k,m,n))+"px"
}else{if(/^outline/.test(m)){try{l[m]=j[m]}catch(i){l.outlineColor=j.color;l.outlineStyle=l.outlineStyle||"none";
l.outlineWidth=l.outlineWidth||"0px";l.outline=[l.outlineColor,l.outlineWidth,l.outlineStyle].join(" ")
}}else{l[m]=j[m]}}}}}}b(l,"margin");b(l,"padding");b(l,"border");l.fontSize=Math.round(n)+"px"
}a.prototype={constructor:a,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")
},getPropertyValue:function(h){return this[h.replace(/-\w/g,function(i){return i[1].toUpperCase()
})]},item:function(h){return this[h]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")
}};window.getComputedStyle=function(h){return new a(h)}}},{}],387:[function(b,c,a){b("html5shiv/src/html5shiv")
},{"html5shiv/src/html5shiv":347}],388:[function(b,c,a){b("matchmedia-polyfill");
b("matchmedia-polyfill/matchMedia.addListener")},{"matchmedia-polyfill":349,"matchmedia-polyfill/matchMedia.addListener":348}],389:[function(b,c,a){(function(){var f=0;
var g=["ms","moz","webkit","o"];for(var d=0;d<g.length&&!window.requestAnimationFrame;
++d){window.requestAnimationFrame=window[g[d]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[g[d]+"CancelAnimationFrame"]||window[g[d]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(l,i){var h=Date.now();
var j=Math.max(0,16-(h-f));var k=window.setTimeout(function(){l(h+j)},j);f=h+j;
return k}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(h){clearTimeout(h)
}}}())},{}],390:[function(b,c,a){arguments[4][63][0].apply(a,arguments)},{"./shared/getEventType":397,"./utils/addEventListener":398,dup:63}],391:[function(b,c,a){arguments[4][1][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":392,"./shared/prefixHelper":393,"./shared/windowFallbackEventTypes":394,"./utils/eventTypeAvailable":395,dup:1}],392:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],393:[function(b,c,a){arguments[4][3][0].apply(a,arguments)},{dup:3}],394:[function(b,c,a){arguments[4][4][0].apply(a,arguments)
},{dup:4}],395:[function(b,c,a){arguments[4][5][0].apply(a,arguments)},{dup:5}],396:[function(b,c,a){arguments[4][72][0].apply(a,arguments)
},{"./shared/getEventType":397,"./utils/removeEventListener":399,dup:72}],397:[function(b,c,a){arguments[4][73][0].apply(a,arguments)
},{"@marcom/ac-prefixer/getEventType":391,dup:73}],398:[function(b,c,a){arguments[4][77][0].apply(a,arguments)
},{dup:77}],399:[function(b,c,a){arguments[4][79][0].apply(a,arguments)},{dup:79}],400:[function(b,c,a){arguments[4][85][0].apply(a,arguments)
},{dup:85}],401:[function(b,c,a){arguments[4][86][0].apply(a,arguments)},{dup:86}],402:[function(b,c,a){arguments[4][87][0].apply(a,arguments)
},{dup:87}],403:[function(b,c,a){arguments[4][89][0].apply(a,arguments)},{dup:89}],404:[function(b,c,a){arguments[4][90][0].apply(a,arguments)
},{dup:90}],405:[function(b,c,a){arguments[4][100][0].apply(a,arguments)},{"../isNode":409,dup:100}],406:[function(b,c,a){arguments[4][101][0].apply(a,arguments)
},{"../COMMENT_NODE":400,"../DOCUMENT_FRAGMENT_NODE":401,"../ELEMENT_NODE":403,"../TEXT_NODE":404,"./isNodeType":405,dup:101}],407:[function(b,c,a){arguments[4][104][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":401,"./internal/isNodeType":405,dup:104}],408:[function(b,c,a){arguments[4][106][0].apply(a,arguments)
},{"./ELEMENT_NODE":403,"./internal/isNodeType":405,dup:106}],409:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],410:[function(b,c,a){arguments[4][110][0].apply(a,arguments)},{"./internal/validate":406,dup:110}],411:[function(b,c,a){arguments[4][173][0].apply(a,arguments)
},{"@marcom/ac-dom-nodes/COMMENT_NODE":400,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":401,"@marcom/ac-dom-nodes/DOCUMENT_NODE":402,"@marcom/ac-dom-nodes/ELEMENT_NODE":403,"@marcom/ac-dom-nodes/TEXT_NODE":404,"@marcom/ac-dom-nodes/isNode":409,"@marcom/ac-polyfills/Array/prototype.indexOf":356,dup:173}],412:[function(b,c,a){arguments[4][175][0].apply(a,arguments)
},{"./internal/validate":411,"./shims/querySelectorAll":413,"@marcom/ac-polyfills/Array/prototype.slice":361,dup:175}],413:[function(b,c,a){arguments[4][177][0].apply(a,arguments)
},{"@marcom/ac-dom-nodes/isDocumentFragment":407,"@marcom/ac-dom-nodes/isElement":408,"@marcom/ac-dom-nodes/remove":410,"@marcom/ac-polyfills/Array/prototype.indexOf":356,dup:177}],414:[function(b,c,a){arguments[4][130][0].apply(a,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":415,dup:130}],415:[function(b,c,a){arguments[4][131][0].apply(a,arguments)
},{dup:131}],416:[function(b,c,a){arguments[4][51][0].apply(a,arguments)},{"./extend":417,dup:51}],417:[function(b,c,a){arguments[4][52][0].apply(a,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":355,dup:52}],418:[function(b,c,a){c.exports={Queue:b("./ac-queue/Queue"),QueueItem:b("./ac-queue/QueueItem"),LiveQueue:b("./ac-queue/LiveQueue")}
},{"./ac-queue/LiveQueue":419,"./ac-queue/Queue":420,"./ac-queue/QueueItem":421}],419:[function(b,c,a){b("@marcom/ac-polyfills/Promise");
b("@marcom/ac-polyfills/requestAnimationFrame");b("@marcom/ac-polyfills/Function/prototype.bind");
var g=b("./Queue");var h=b("./QueueItem");function f(i){this._queue=new g();this._maxProcesses=i||1;
this._availableSlots=this._maxProcesses;this._rafId=0;this._isRunning=false;this._boundFunctions={_run:this._run.bind(this),_releaseSlot:this._releaseSlot.bind(this)}
}var d=f.prototype;d.start=function(){if(this._isRunning){cancelAnimationFrame(this._rafId)
}this._rafId=requestAnimationFrame(this._boundFunctions._run);this._isRunning=true
};d.pause=function(){if(this._isRunning){cancelAnimationFrame(this._rafId);this._rafId=0
}this._isRunning=false};d.stop=function(){this.pause();this.clear()};d.enqueue=function(i,j){if(typeof i!=="function"){throw new Error("LiveQueue can only enqueue functions")
}return this._queue.enqueue(i,j)};d.clear=function(){this._queue=new g()};d.destroy=function(){this.pause();
this._isRunning=false;this._queue=null;this._boundFunctions=null};d.count=function(){return this._queue.count()+this.pending()
};d.pending=function(){return this._maxProcesses-this._availableSlots};d.isEmpty=function(){return this.count()===0
};d._run=function(){if(!this._isRunning){return}this._rafId=requestAnimationFrame(this._boundFunctions._run);
if(this._queue.isEmpty()||this._availableSlots==0){return}var j=this._queue.dequeue();
var i=j.data();if(this._isPromise(i)){this._retainSlot();i.then(this._boundFunctions._releaseSlot,this._boundFunctions._releaseSlot)
}this._stopRunningIfDone()};d._retainSlot=function(){this._availableSlots--};d._releaseSlot=function(){this._availableSlots++;
this._stopRunningIfDone()};d._stopRunningIfDone=function(){if(this._rafId!=0&&this._queue.count()===0&&this._availableSlots==this._maxProcesses){cancelAnimationFrame(this._rafId);
this._rafId=0}};d._isPromise=function(i){return !!(i&&typeof i.then==="function")
};c.exports=f},{"./Queue":420,"./QueueItem":421,"@marcom/ac-polyfills/Function/prototype.bind":373,"@marcom/ac-polyfills/Promise":380,"@marcom/ac-polyfills/requestAnimationFrame":389}],420:[function(b,c,a){var g=b("./QueueItem");
function f(){this._items=[]}var d=f.prototype;d.enqueue=function(i,h){if(h===undefined){h=f.PRIORITY_DEFAULT
}return this.enqueueQueueItem(new g(i,h))};d.enqueueQueueItem=function(h){this._items.push(h);
return h};d.dequeue=function(){this._heapSort();var i=this._items.length-1;var h=this._items[0];
this._items[0]=this._items[i];this._items.pop();return h};d.peek=function(){if(this.count()==0){return null
}this._heapSort();return this._items[0]};d.isEmpty=function(){return this._items.length===0
};d.count=function(){return this._items.length};d.toString=function(){var j=["Queue total items: "+this.count()+"\n"];
for(var h=0;h<this.count();++h){j.push(this._items[h].toString()+"\n")}return j.join("")
};d._heapSort=function(){var h=0;for(var m=this._items.length-1;m>=0;m--){var n=m;
while(n>0){h++;var j=Math.floor((n-1)/2);if(this._items[n].compareTo(this._items[j])>=0){break
}var l=this._items[n];this._items[n]=this._items[j];this._items[j]=l;n=j}}};f.PRIORITY_LOW=10;
f.PRIORITY_DEFAULT=5;f.PRIORITY_HIGH=1;c.exports=f},{"./QueueItem":421}],421:[function(b,c,a){var g=0;
function f(i,h){this.priority=h;this.data=i;this.insertionOrder=g++}var d=f.prototype;
d.compareTo=function(h){if(this.priority<h.priority){return -1}else{if(this.priority>h.priority){return 1
}else{return(this.insertionOrder<h.insertionOrder)?-1:1}}};d.toString=function(){return"QueueItem {priority:"+this.priority+",\tdata:"+this.data+"\tinsertionOrder:"+this.insertionOrder+"}"
};c.exports=f},{}],422:[function(d,b,j){d("@marcom/ac-polyfills/Object/create");
d("@marcom/ac-polyfills/Element/prototype.classList");var g=d("@marcom/ac-object/defaults");
var i=d("@marcom/ac-queue").LiveQueue;var m=d("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var h=d("@marcom/ac-dom-events/addEventListener");var c=d("@marcom/ac-dom-events/removeEventListener");
var a=d("@marcom/ac-dom-traversal/querySelectorAll");var f={container:document.body,includeContainer:false};
var l={loadingPoolSize:8,timeout:null,imageClassName:"progressive-image"};function n(o){m.call(this);
this.options=g(f,o);this.loadingOptions=null;this.els=[];this.loadingQueue=null;
this._queueItems=[];this._queueItemsObj={};this._loadOrder=[];this._timeout=null;
this._didCallLoad=false}var k=n.prototype=Object.create(m.prototype);k.load=function(r){if(this._didCallLoad){return
}this._didCallLoad=true;this.loadingOptions=g(l,r);this.loadingQueue=new i(this.loadingOptions.loadingPoolSize);
var q=this._getProgressiveClassName(),p="."+q;this.els=a(p,this.options.container);
if(this.options.includeContainer&&this.options.container.classList.contains(q)){this.els.unshift(this.options.container)
}var s,o=this.els.length,t;for(s=0;s<o;s++){t={queueItem:this.loadingQueue.enqueue(this._loadNextItem.bind(this,s),s),el:this.els[s],id:s};
this._queueItems.push(t);this._queueItemsObj[s]=t}this.loadingQueue.start();if(typeof this.loadingOptions.timeout==="number"){this._timeout=setTimeout(this.cancel.bind(this),this.loadingOptions.timeout)
}};k.setVisible=function(o){o.classList.remove(this.loadingOptions.imageClassName)
};k.cancel=function(){if(this.els){var p,o=this.els.length;for(p=0;p<o;p++){this.setVisible(this.els[p])
}}this._handleLoadingComplete()};k.destroy=function(){this.cancel();this.off();
m.prototype.destroy.call(this)};k._loadNextItem=function(o){return new Promise(function(p,r,q){var s=this._queueItemsObj[p];
this._loadAndSetVisible(s.el).then(function(){var t=this._queueItems.indexOf(s);
this._queueItems.splice(t,1);this._queueItemsObj[s.id]=null;r();this._handleImageLoad(s.el);
s=r=null;if(this.loadingQueue.count()===1){this._handleLoadingComplete()}}.bind(this))
}.bind(this,o))};k._loadAndSetVisible=function(o){this.setVisible(o);var p=this._getBackgroundImageSrc(o);
return this._loadImage(p)};k._getBackgroundImageSrc=function(p){var o=p.currentStyle;
if(!o){o=window.getComputedStyle(p,false)}if(o.backgroundImage.indexOf("url(")===0){return o.backgroundImage.slice(4,-1).replace(/"/g,"")
}return null};k._getProgressiveClassName=function(){return this.loadingOptions.imageClassName
};k._loadImage=function(o){return new Promise(this._loadImagePromiseFunc.bind(this,o))
};k._loadImagePromiseFunc=function(s,r,q){function p(){c(this,"load",p);r(this);
r=null}if(!s){r(null);return}var o=new Image();h(o,"load",p);o.src=s};k._clearTimeout=function(){if(this._timeout){window.clearTimeout(this._timeout);
this._timeout=null}};k._handleImageLoad=function(o){this.trigger("image-load",o)
};k._handleLoadingComplete=function(){this.loadingQueue.stop();this._clearTimeout();
this.trigger("complete")};b.exports=n},{"@marcom/ac-dom-events/addEventListener":390,"@marcom/ac-dom-events/removeEventListener":396,"@marcom/ac-dom-traversal/querySelectorAll":412,"@marcom/ac-event-emitter-micro":414,"@marcom/ac-object/defaults":416,"@marcom/ac-polyfills/Element/prototype.classList":369,"@marcom/ac-polyfills/Object/create":377,"@marcom/ac-queue":418}],423:[function(b,c,a){var d=b("./ProgressiveImageLoader");
c.exports=new d()},{"./ProgressiveImageLoader":422}],424:[function(b,c,a){var d={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
c.exports=b("./parseUserAgent")(d)},{"./parseUserAgent":427}],425:[function(b,c,a){c.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],426:[function(b,c,a){c.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(d){return(d.ua.indexOf("Edge")>-1||d.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(d){return(d.ua.indexOf("Firefox")>-1&&d.ua.indexOf("Opera")===-1)
},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(d){return(d.ua.indexOf("Safari")>-1&&d.vendor.indexOf("Apple")>-1)
},version:"Version"},{name:"ie",test:function(d){return(d.ua.indexOf("IE")>-1||d.ua.indexOf("Trident")>-1)
},version:["MSIE","rv"],parseDocumentMode:function(){var d=false;if(document.documentMode){d=parseInt(document.documentMode,10)
}return d}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(d){return(d.platform.indexOf("Win")>-1)
},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(d){return(d.platform.indexOf("Mac")>-1)
}},{name:"ios",test:function(d){return(d.ua.indexOf("iPhone")>-1||d.ua.indexOf("iPad")>-1)
},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(d){return(d.platform.indexOf("Linux")>-1&&d.ua.indexOf("Android")===-1)
}},{name:"fireos",test:function(d){return(d.ua.indexOf("Firefox")>-1&&d.ua.indexOf("Mobile")>-1)
},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}
},{}],427:[function(b,a,d){var c=b("./defaults");var h=b("./dictionary");function g(k){return new RegExp(k+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function f(n,m){if(typeof n.parseVersion==="function"){return n.parseVersion(m)
}else{var p=n.version||n.userAgent;if(typeof p==="string"){p=[p]}var o=p.length;
var k;for(var l=0;l<o;l++){k=m.match(g(p[l]));if(k&&k.length>1){return k[1].replace(/_/g,".")
}}}}function j(m,r,p){var o=m.length;var q;var k;for(var n=0;n<o;n++){if(typeof m[n].test==="function"){if(m[n].test(p)===true){q=m[n].name
}}else{if(p.ua.indexOf(m[n].userAgent)>-1){q=m[n].name}}if(q){r[q]=true;k=f(m[n],p.ua);
if(typeof k==="string"){var l=k.split(".");r.version.name=k;if(l&&l.length>0){r.version.major=parseInt(l[0]||0);
r.version.minor=parseInt(l[1]||0);r.version.patch=parseInt(l[2]||0)}}else{if(q==="edge"){r.version.name="12.0.0";
r.version.major="12";r.version.minor="0";r.version.patch="0"}}if(typeof m[n].parseDocumentMode==="function"){r.version.documentMode=m[n].parseDocumentMode()
}return r}}return r}function i(l){var k={};k.browser=j(h.browser,c.browser,l);k.os=j(h.os,c.os,l);
return k}a.exports=i},{"./defaults":425,"./dictionary":426}],428:[function(b,c,a){arguments[4][77][0].apply(a,arguments)
},{dup:77}],429:[function(b,c,a){arguments[4][130][0].apply(a,arguments)},{"./ac-event-emitter-micro/EventEmitterMicro":430,dup:130}],430:[function(b,c,a){arguments[4][131][0].apply(a,arguments)
},{dup:131}],431:[function(b,a,f){b("@marcom/ac-polyfills/Function/prototype.bind");
b("@marcom/ac-polyfills/Object/keys");b("@marcom/ac-polyfills/Object/create");var l=b("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var i=b("@marcom/ac-dom-events/utils/addEventListener");var h=b("@marcom/ac-feature/mediaQueriesAvailable");
var c="viewport-emitter";var j="::before";var d="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function k(m){l.call(this);this._initializeElement(m);if(h()){this._updateViewport=this._updateViewport.bind(this);
i(window,"resize",this._updateViewport);i(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(d);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var g=k.prototype=Object.create(l.prototype);
g.viewport=false;g.retina=false;g._initializeElement=function(n){var m;n=n||c;m=document.getElementById(n);
if(!m){m=document.createElement("div");m.id=n;m=document.body.appendChild(m)}this._el=m
};g._getElementContent=function(){var m;if("currentStyle" in this._el){m=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();m=window.getComputedStyle(this._el,j).content}if(m){m=m.replace(/["']/g,"")
}if(m){return m}return false};g._updateViewport=function(){var m=this.viewport;
var n;var o;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(m&&this.viewport!==m){o={from:m,to:this.viewport};this.trigger("change",o);
this.trigger("from:"+m,o);this.trigger("to:"+this.viewport,o)}};g._updateRetina=function(m){var n=this.retina;
this.retina=this._retinaQuery.matches;if(n!==this.retina){this.trigger("retinachange",{from:n,to:this.retina})
}};g._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};a.exports=k},{"@marcom/ac-dom-events/utils/addEventListener":428,"@marcom/ac-event-emitter-micro":429,"@marcom/ac-feature/mediaQueriesAvailable":38,"@marcom/ac-polyfills/Function/prototype.bind":373,"@marcom/ac-polyfills/Object/create":377,"@marcom/ac-polyfills/Object/keys":379}],432:[function(c,d,b){var a=c("./ViewportEmitter");
d.exports=new a()},{"./ViewportEmitter":431}],433:[function(d,a,g){var f=d("@marcom/ac-jetpack-lib/core/BaseComponent");
var i=d("@marcom/ac-media-object");var b=d("@marcom/ac-viewport-emitter");var c=d("ac-analytics").observer.Event;
var n="/105/media/{{locale}}/clips/2017/41bf5b7e_808f_4189_8a56_95fce0abfa55/animations/hero";
var h="ambient-hero-";var k="mp4";var o=document.documentElement.classList.contains("oldIos10");
var l=document.documentElement.classList.contains("ie11");var p=3000;var m=function m(){f.apply(this,arguments);
if(!document.documentElement.classList.contains("inlineVideo")){return}this._videoContainer=document.getElementById("hero-background");
this._options={iosInline:true};this._analyticsTriggered=false;this._locale=this.element.getAttribute("data-locale")||"us";
this._createMedia();this._eventObserver=new c(this._mediaObject.mediaEmitter._eventEmitter,{interactionEvents:["show"]})
};var j=m.prototype=Object.create(f.prototype);m.prototype.constructor=m;j.onLoadStart=function(){var q=this;
this._loadTimeout=setTimeout(function(){if(!q._mediaObject.getLoaded()){q._destroyMedia()
}},p)};j.onLoad=function(){clearTimeout(this._loadTimeout);this._mediaObject.enhance()
};j.onEnhanced=function(){this._mediaObject.play()};j.onPlay=function(){var q=this;
if(this._analyticsTriggered===false){this._mediaObject.mediaEmitter._eventEmitter.trigger("show",{title:"title: "+q._mediaObject.el.id,eVar70:q._mediaObject.el.id});
this._analyticsTriggered=true}};j.onTimeUpdate=function(){if(l){if(this._mediaObject.getCurrentTime()<0.02){this._mediaObject.trigger("play")
}if(this._mediaObject.getCurrentTime()===this._mediaObject.getDuration()){this._mediaObject.trigger("ended")
}}};j.onSectionWillAppear=function(q,r){if(this._mediaObject&&this._mediaObject.getEnhanced()&&(this._mediaObject.getPaused()||this._mediaObject.getEnded())&&!o){this._mediaObject.play()
}};j.onSectionWillDisappear=function(q,r){if(this._mediaObject){this._mediaObject.pause()
}};j.onBreakpoint=function(r,t,q,s){f.prototype.onSectionWillDisappear.call(this,r,t,q,s);
if(!this._mediaObject||(t==="large"&&r==="xlarge")||(t==="xlarge"&&r==="large")){return
}this._destroyMedia();this._createMedia()};j.onRetinaChange=function(t,r,q,s){f.prototype.onSectionWillDisappear.call(this,t,r,q,s);
if(this._mediaObject){this._destroyMedia();this._createMedia()}};j._createMedia=function(){this._setMediaSrc(n,h,k);
this._mediaObject=i.createVideo(this._videoContainer,this._getMediaSrc(),this._options);
this._mediaObject.on("loadstart",this.onLoadStart.bind(this));this._mediaObject.on("loaded",this.onLoad.bind(this));
this._mediaObject.on("enhanced",this.onEnhanced.bind(this));this._mediaObject.on("play",this.onPlay.bind(this));
if(l){this._mediaObject.on("timeupdate",this.onTimeUpdate.bind(this))}this._mediaObject.load()
};j._destroyMedia=function(){this._mediaObject.pause();this._mediaObject.destroy();
this._mediaSrc=null;this._mediaObject=null};j._getMediaSrc=function(){if(!this._mediaSrc){this._createMedia()
}return this._mediaSrc};j._setMediaSrc=function(s,q,r){this._mediaSrc={basePath:s.replace("{{locale}}",this._locale),filename:q+b.viewport.replace("x","")+(b.retina?"_2x":""),fileFormat:r}
};a.exports=m},{"@marcom/ac-jetpack-lib/core/BaseComponent":140,"@marcom/ac-media-object":329,"@marcom/ac-viewport-emitter":432,"ac-analytics":"ac-analytics"}],434:[function(f,b,i){var g=f("@marcom/ac-jetpack-lib/core/BaseComponent");
var j=f("@marcom/ac-media-object");var c=f("@marcom/ac-viewport-emitter");var h=f("@marcom/ac-dom-events/addEventListener");
var d=f("ac-analytics").observer.Event;var o="/105/media/{{locale}}/clips/2017/41bf5b7e_808f_4189_8a56_95fce0abfa55/animations";
var l="mp4";var a=500;var p=0.4;var q=document.documentElement.classList.contains("oldIos10");
var m=document.documentElement.classList.contains("ie11");var r=3000;var n=function n(){g.apply(this,arguments);
if(!document.documentElement.classList.contains("inlineVideo")){return}this._videoContainer=this.element.querySelector(".video-container");
this._replayButton=this.element.querySelector(".icon-replay");this._filename=this._videoContainer.dataset.videoFilename;
this._analyticsAlias=this._videoContainer.dataset.analyticsAlias||this._filename;
this._options={iosInline:true};this._locale=this.element.getAttribute("data-locale")||"us";
this._analyticsTriggered=false;this._hasAutoplayed=false;this._createMedia();h(this._replayButton,"click",this.replayClicked.bind(this));
this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:a,inViewThreshold:p});
this.trackedElement.on("engaged",this.onEngaged.bind(this));this._eventObserver=new d(this._mediaObject.mediaEmitter._eventEmitter,{interactionEvents:["show"]})
};var k=n.prototype=Object.create(g.prototype);n.prototype.constructor=n;k.onLoadStart=function(){var s=this;
this._loadTimeout=setTimeout(function(){if(!s._mediaObject.getLoaded()){s._destroyMedia()
}},r)};k.onLoad=function(){clearTimeout(this._loadTimeout);this._mediaObject.enhance();
this._replayButton.classList.add("enhanced")};k.onEngaged=function(){if(this._mediaObject&&this._mediaObject.getEnhanced()&&!this._hasAutoplayed){this._mediaObject.play();
this._hasAutoplayed=true}};k.onPlay=function(){var s=this;if(this._analyticsTriggered===false){this._mediaObject.mediaEmitter._eventEmitter.trigger("show",{title:"title: "+s._analyticsAlias,eVar70:s._analyticsAlias});
this._analyticsTriggered=true}this._disableReplay()};k.onPause=function(){this._enableReplay()
};k.onEnd=function(){this._enableReplay()};k.onTimeUpdate=function(){if(m){if(this._mediaObject.getCurrentTime()<0.26){this._mediaObject.trigger("play")
}if(this._mediaObject.getCurrentTime()===this._mediaObject.getDuration()){this._mediaObject.trigger("ended")
}}};k.replayClicked=function(){this._mediaObject.setCurrentTime(0);this._mediaObject.play()
};k.onSectionWillAppear=function(s,t){};k.onSectionWillDisappear=function(s,t){if(this._mediaObject){this._resetMedia();
this._disableReplay()}this._hasAutoplayed=false};k.onRetinaChange=function(v,t,s,u){g.prototype.onSectionWillDisappear.call(this,v,t,s,u);
if(this._mediaObject){this._destroyMedia();this._createMedia()}};k._disableReplay=function(){this._replayButton.disabled=true
};k._enableReplay=function(){this._replayButton.disabled=false};k._createMedia=function(){this._setMediaSrc(o,this._filename,l);
this._mediaObject=j.createVideo(this._videoContainer,this._getMediaSrc(),this._options);
this._mediaObject.on("loadstart",this.onLoadStart.bind(this));this._mediaObject.on("loaded",this.onLoad.bind(this));
this._mediaObject.on("play",this.onPlay.bind(this));this._mediaObject.on("ended",this.onEnd.bind(this));
if(q||m){this._mediaObject.on("pause",this.onPause.bind(this))}if(m){this._mediaObject.on("timeupdate",this.onTimeUpdate.bind(this))
}this._mediaObject.load()};k._destroyMedia=function(){this._mediaObject.pause();
this._mediaObject.destroy();this._mediaSrc=null;this._mediaObject=null};k._resetMedia=function(){this._mediaObject.reset();
this._mediaObject.el.classList.remove("mediaobject-ended")};k._getMediaSrc=function(){if(!this._mediaSrc){this._createMedia()
}return this._mediaSrc};k._setMediaSrc=function(u,s,t){this._mediaSrc={basePath:u.replace("{{locale}}",this._locale),filename:s+(c.retina?"_2x":""),fileFormat:t}
};b.exports=n},{"@marcom/ac-dom-events/addEventListener":6,"@marcom/ac-jetpack-lib/core/BaseComponent":140,"@marcom/ac-media-object":329,"@marcom/ac-viewport-emitter":432,"ac-analytics":"ac-analytics"}],435:[function(d,b,g){var c=d("@marcom/ac-progressive-image-loader");
var f=d("@marcom/ac-jetpack-lib/core/BasePage");var h=d("@marcom/ac-jetpack-lib/model/ComponentMap");
var j=d("./components/HeroVideo");var k=d("./components/InlineVideo");var a=d("@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent");
var i={initialize:function(){this.initProgressiveImageLoader();this.initJetPack()
},initProgressiveImageLoader:function(){setTimeout(function(){c.load()},250)},initJetPack:function(){h.HeroVideo=j;
h.InlineVideo=k;h.EngagedElement=a;new f()}};b.exports=i.initialize()},{"./components/HeroVideo":433,"./components/InlineVideo":434,"@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent":45,"@marcom/ac-jetpack-lib/core/BasePage":141,"@marcom/ac-jetpack-lib/model/ComponentMap":143,"@marcom/ac-progressive-image-loader":423}]},{},[435]);