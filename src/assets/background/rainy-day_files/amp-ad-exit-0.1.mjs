;
(self.AMP=self.AMP||[]).push({n:"amp-ad-exit",v:"2101090132000",m:1,f:function(AMP,_){function f(a,b=""){try{return decodeURIComponent(a)}catch(c){return b}}let m=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function n(a){let b=Object.create(null);if(!a)return b;let c;for(;c=m.exec(a);){let d=f(c[1],c[1]),e=c[2]?f(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b}let p="";function q(){let a=self;if(a.__AMP_MODE)var b=a.__AMP_MODE;else{{b=n(a.location.originalHash||a.location.hash);let c=n(a.location.search);p||(p=a.AMP_CONFIG&&a.AMP_CONFIG.v?a.AMP_CONFIG.v:"012101090132000");b={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(b.development)||a.AMP_DEV_MODE),examiner:"2"==b.development,esm:!0,geoOverride:b["amp-geo"],minified:!0,lite:void 0!=c.amp_lite,test:!1,log:b.log,version:"2101090132000",rtvVersion:p}}b=a.__AMP_MODE=b}return b}let r=Object.prototype.toString;let u=self.AMP_CONFIG||{},v=("string"==typeof u.cdnProxyRegex?new RegExp(u.cdnProxyRegex):u.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function w(a){if(self.document&&self.document.head&&(!self.location||!v.test(self.location.origin))){var b=self.document.head.querySelector(`meta[name="${a}"]`);b&&b.getAttribute("content")}}u.cdnUrl||w("runtime-host");u.geoApiUrl||w("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};let x=self.__AMP_LOG;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor")}function A(a,b,c,d){y().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)}class D{constructor(a,b){this.name=a;this.type=b}filter(){}onLayoutMeasure(){}}class E{constructor(){let a,b;this.promise=new Promise(((c,d)=>{a=c;b=d}));this.resolve=a;this.reject=b}}function F(a){a=G(a);a=H(a);return I(a,"url-replace")?J(a,"url-replace"):null}function K(a){return a.__AMP_TOP||(a.__AMP_TOP=a)}function G(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=K(b);a=J(b,"ampdoc").getAmpDoc(a)}return a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}function J(a,b){I(a,b);a=L(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function M(a){var b;(b=L(a)["host-exit"])?b.promise?b=b.promise:(J(a,"host-exit"),b=b.promise=Promise.resolve(b.obj)):b=null;let c=b;if(c)return c;a=L(a);a["host-exit"]=aa();return a["host-exit"].promise}function L(a){let b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function I(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}function aa(){let a=new E,b=a.promise,c=a.resolve,d=a.reject;b.catch((()=>{}));return{obj:null,promise:b,resolve:c,reject:d,context:null,ctor:null}}
/*
    https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function N(a,b,c){let d;try{d=a.open(b,c,void 0)}catch(g){z().error("DOM","Failed to open url on target: ",c,g)}if(!(c=d||"_top"==c)){var e;"number"!==typeof e&&(e=0);c=0<e+8?!1:-1!=="".indexOf("noopener",e)}c||a.open(b,"_top")}function ba(a){return"SCRIPT"==a.tagName&&a.hasAttribute("type")&&"APPLICATION/JSON"==a.getAttribute("type").toUpperCase()}let O;function ca(a,b){let e,c=a,d=b;e=k=>{try{return d(k)}catch(h){throw self.__AMP_REPORT_ERROR(h),h}};let g=da();c.addEventListener("message",e,g?void 0:!1);return()=>{c&&c.removeEventListener("message",e,g?void 0:!1);e=c=d=null}}function da(){if(void 0!==O)return O;O=!1;try{let a={get capture(){O=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(a){}return O}function ea(a,b){return ca(a,b)}function P(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})));c.push.apply(c,d)}return c}function Q(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?P(Object(c),!0).forEach((function(d){var e=c[d];d in a?Object.defineProperty(a,d,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[d]=e})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):P(Object(c)).forEach((function(d){Object.defineProperty(a,d,Object.getOwnPropertyDescriptor(c,d))}))}return a}let S={bg:"https://tpc.googlesyndication.com/b4a/b4a-runner.html",moat:"https://z.moatads.com/ampanalytics093284/iframe.html"};Q(Q({},S),{},{bg:"https://tpc.googlesyndication.com/b4a/experimental/b4a-runner.html"});function fa(a){A("object"==typeof a);if(a.filters){var b=a.filters;let d=["clickDelay","clickLocation","inactiveElement"];for(let e in b)A("object"==typeof b[e],"Filter specification '%s' is malformed",e),A(-1!=d.indexOf(b[e].type),"Supported filters: "+d.join(", "))}else a.filters={};if(a.transport){b=a.transport;for(var c in b)A("beacon"==c||"image"==c,`Unknown transport option: '${c}'`),A("boolean"==typeof b[c])}else a.transport={};c=a.targets;A("object"==typeof c,"'targets' must be an object");for(let d in c)ha(d,c[d],a);return a}function ha(a,b,c){A("string"==typeof b.finalUrl,"finalUrl of target '%s' must be a string",a);b.filters&&b.filters.forEach((d=>{A(c.filters[d],"filter '%s' not defined",d)}));if(b.vars){a=/^_[a-zA-Z0-9_-]+$/;for(let d in b.vars)A(a.test(d),"'%s' must match the pattern '%s'",d,a)}}function T(a){return y().assertString(S[a],`Unknown or invalid vendor ${a}, note that vendor must use transport: iframe`)}class ia extends D{constructor(a,b,c){super(a,b.type);A("clickDelay"==b.type&&"number"==typeof b.delay&&0<b.delay,"Invalid ClickDelay spec");this.spec=b;this.intervalStart=Date.now();b.startTimingEvent&&c.performance&&c.performance.timing&&void 0!=c.performance.timing[b.startTimingEvent]&&(this.intervalStart=c.performance.timing[b.startTimingEvent])}filter(){return Date.now()-this.intervalStart>=this.spec.delay}}function U(a){return{type:"clickDelay",delay:1e3,startTimingEvent:a}}class ja extends D{constructor(a,b,c){super(a,b.type);A("clickLocation"==b.type&&("undefined"===typeof b.left||"number"===typeof b.left)&&("undefined"===typeof b.right||"number"===typeof b.right)&&("undefined"===typeof b.top||"number"===typeof b.top)&&("undefined"===typeof b.bottom||"number"===typeof b.bottom)&&("undefined"===typeof b.relativeTo||"string"===typeof b.relativeTo),"Invaid ClickLocation spec");this.K=b.left||0;this.L=b.right||0;this.N=b.top||0;this.J=b.bottom||0;this.D=b.relativeTo;this.G=c;this.h={top:0,right:0,bottom:0,left:0}}filter(a){return a.clientX>=this.h.left&&a.clientX<=this.h.right&&a.clientY>=this.h.top&&a.clientY<=this.h.bottom?!0:!1}onLayoutMeasure(){this.G.getVsync().measure((()=>{let a=this.G.win;if(this.D){let b=a.document.querySelector(this.D);A(b,`relativeTo element ${this.D} not found.`);let c=b.getBoundingClientRect();this.h.left=c.left;this.h.top=c.top;this.h.bottom=c.bottom;this.h.right=c.right}else this.h.left=0,this.h.top=0,this.h.bottom=a.innerHeight,this.h.right=a.innerWidth;this.h.left+=this.K;this.h.top+=this.N;this.h.right-=this.L;this.h.bottom-=this.J}))}}class ka extends D{constructor(a,b){super(a,b.type);A("inactiveElement"==b.type&&"string"==typeof b.selector,"Invalid InactiveElementspec");this.M=b.selector}filter(a){{a=a.target;let b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;a=b?b.call(a,this.M):!1}return!a}}function V(a,b,c){switch(b.type){case"clickDelay":return new ia(a,b,c.win);case"clickLocation":return new ja(a,b,c);case"inactiveElement":return new ka(a,b)}}function la(a,b){try{a:{let e=(a.ownerDocument||a).defaultView,g=b||K(e);if(e&&e!=g&&K(e)==g)try{var c=e.frameElement;break a}catch(k){}c=null}let d=c.parentElement;if("AMP-AD"==d.nodeName)return String(d.getResourceId())}catch(d){}return null}(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});let W;function X(a){W||(W=self.document.createElement("a"));var b=W;b.href="";return new URL(a,b.href)}function Y(a,b){return a.every((c=>c.filter(b)))}function ma(a,b,c,d){let e={CLICK_X:()=>c.clientX,CLICK_Y:()=>c.clientY},g=F(a.element),k={RANDOM:!0,CLICK_X:!0,CLICK_Y:!0};if(d.vars)for(let h in d.vars){if("_"!=h[0])continue;let l=d.vars[h];l&&(e[h]=()=>{if(l.iframeTransportSignal){let t=g.expandStringSync(l.iframeTransportSignal,{IFRAME_TRANSPORT_SIGNAL:(R,B)=>{if(!R||!B)return"";let C=a.I[R];if(C&&B in C)return C[B]}});if(l.iframeTransportSignal==`IFRAME_TRANSPORT_SIGNAL${t}`)z().error("amp-ad-exit","Invalid IFRAME_TRANSPORT_SIGNAL format:"+t+" (perhaps there is a space after a comma?)");else if(""!=t)return t}return h in b?b[h]:l.defaultValue},k[h]=!0)}return h=>g.expandUrlSync(h,e,k)}function Z(a){"inabox"!=q().runtime&&(a.j=a.j||la(a.element,K(a.win)),a.j&&(a.A=ea(a.getAmpDoc().win,(b=>{if(a.C[b.origin]){var c=b.data;if("string"==typeof c&&0==c.indexOf("amp-")&&-1!=c.indexOf("{")){var d=c.indexOf("{");try{var e=JSON.parse(c.substr(d))}catch(g){z().error("MESSAGING","Failed to parse message: "+c,g),e=null}}else e=null;e&&"iframe-transport-response"==e.type&&(c=e,b=b.origin,A(c.message,"Received empty response from 3p analytics frame"),A(c.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),A(c.vendor,"Received malformed message from 3p analytics frame: vendor missing"),d=X(T(c.vendor)),A(d&&d.origin==b,`Invalid origin for vendor ${c.vendor}: ${b}`),e.creativeId==a.j&&(a.I[e.vendor]=e.message))}}))))}class na extends AMP.BaseElement{constructor(a){super(a);this.F={};this.H={};this.l=[];this.o={beacon:!0,image:!0};this.B={};this.registerAction("exit",this.exit.bind(this));this.registerAction("setVariable",this.setVariable.bind(this),1);this.I={};this.j=this.A=null;this.C={}}exit(a){let b=a.args;let{event:c}=a;A("variable"in b!="target"in b,"One and only one of 'target' and 'variable' must be specified");let d;"variable"in b?((d=this.H[b.variable])||(d=b["default"]),A(d,`Variable target not found, variable:'${b.variable}', default:'${b["default"]}'`),delete b["default"]):d=b.target;let e=this.F[d];A(e,`Exit target not found: '${d}'`);A(c,"Unexpected null event");c.preventDefault();if(Y(this.l,c)&&Y(e.filters,c)){var g=ma(this,b,c,e);e.trackingUrls&&e.trackingUrls.map(g).forEach((h=>{this.o.beacon&&this.win.navigator.sendBeacon&&this.win.navigator.sendBeacon(h,"")||!this.o.image||(this.win.document.createElement("img").src=h)}));var k=g(e.finalUrl);G(this.getAmpDoc()).getHeadNode().querySelector("script[host-service]")?M(H(this.getAmpDoc())).then((h=>h.openUrl(k))).catch((h=>{h.fallback&&N(this.win,k,"_blank")})):N(this.win,k,e.behaviors&&e.behaviors.clickTarget&&"_top"==e.behaviors.clickTarget?"_top":"_blank")}}setVariable(a){a=a.args;A(this.F[a.target],`Exit target not found: '${a.target}'`);this.H[a.name]=a.target}buildCallback(){this.element.setAttribute("aria-hidden","true");this.l.push(V("minDelay",U(),this));this.l.push(V("carouselBtns",{type:"inactiveElement",selector:".amp-carousel-button"},this));var a=this.element.children;A(1==a.length,"The tag should contain exactly one <script> child.");a=a[0];A(ba(a),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');try{let b=fa(JSON.parse(a.textContent));let c;"[object Object]"===r.call(b.options)&&"string"===typeof b.options.startTimingEvent&&(c=b.options.startTimingEvent,this.l.splice(0,1,V("minDelay",U(b.options.startTimingEvent),this)));for(let d in b.filters){let e=b.filters[d];"clickDelay"==e.type&&(e.startTimingEvent=e.startTimingEvent||c);this.B[d]=V(d,e,this)}for(let d in b.targets){let e=b.targets[d];this.F[d]={finalUrl:e.finalUrl,trackingUrls:e.trackingUrls||[],vars:e.vars||{},filters:(e.filters||[]).map((g=>this.B[g])).filter((g=>g)),behaviors:e.behaviors||{}};for(let g in e.vars){if(!e.vars[g].iframeTransportSignal)continue;let k=e.vars[g].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(!k||2>k.length)continue;let h=k[1],{origin:l}=X(T(h));this.C[l]=this.C[l]||h}}this.o.beacon=!1!==b.transport.beacon;this.o.image=!1!==b.transport.image}catch(b){throw this.user().error("amp-ad-exit","Invalid JSON config",b),b}Z(this)}resumeCallback(){Z(this)}unlayoutCallback(){this.A&&(this.A(),this.A=null);return super.unlayoutCallback()}isLayoutSupported(){return!0}onLayoutMeasure(){for(let a in this.B)this.B[a].onLayoutMeasure()}}(a=>{a.registerElement("amp-ad-exit",na)})(self.AMP)}});