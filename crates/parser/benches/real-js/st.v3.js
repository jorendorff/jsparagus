(function(){window.EF=window.EF||{};if(!window.EF.main){var k=window.EF.onloadCallbacks||[],l=window.EF.jsTagAdded||0;window.EF={userid:0,pixelHost:"pixel.everesttech.net",cmHost:"cm.everesttech.net",jsHost:"www.everestjs.net",eventType:"pageview",protocol:"https:"==document.location.protocol?"https:":"http:",sid:0,ra:["impression","impression_served"],I:["ev_cl","ev_sid"],fbIsApp:0,fbsPixelId:0,fbsCM:0,appData:"",pageviewProperties:"",transactionProperties:"",transactionObjectList:[],impressionProperties:"",
segment:"",searchSegment:"",sku:"",inFloodlight:0,debug:0,allow3rdPartyPixels:1,accessTopUrl:0,ga:0,M:{gsurfer:"__EFGSURFER__",google:"__EFGCK__",time:"__EFTIME__",optout:"__EFOPTOUT__",throttleCookie:"__EFSYNC__"},Ga:"",a:{},Y:1,F:[],context:{Qa:function(){return window.EF.fbIsApp},Ra:function(){return"pageview"==window.EF.eventType},Ua:function(){return"transaction"==window.EF.eventType},Ta:function(){return"segmentation"==window.EF.eventType}},getPixelDetails:function(a){window.EF.ea().g();window.EF.X(function(){var b=
window.EF.v(window.EF.a);if(b.hasOwnProperty("google")){var c=b.google;delete b.google;b.rtb=c}a(b)})},oa:function(a){"undefined"==typeof a&&(path="/static/st\\.v3\\.js(#|\\?|\\s*$)",host=window.EF.jsHost.replace(/\./g,"\\."),a=host+path);scriptTags=document.getElementsByTagName("script");a=new RegExp("^https?://"+a);for(var b=0;b<scriptTags.length;b++){var c=scriptTags[b];if(c.src&&(c=c.getAttribute("src"))&&c.match(a))return c}return""},Sa:function(){return window.EF.a.hasOwnProperty("google")&&
window.EF.a.hasOwnProperty("gsurfer")&&window.EF.a.google!=window.EF.a.gsurfer},sa:function(){window.__ql={};window.EF.Va=window.EF.f({text:window.EF.oa()});window.EF.location=window.EF.f({text:document.location.toString()});window.EF.ca=window.EF.f({text:document.location.href});window.EF.referrer=window.EF.f({text:document.referrer});window.EF.da=window.EF.f({text:window.EF.location.text,V:!0});window.EF.location.host.match(/((efrontier\.com)|((everesttech|everestads|everestjs)\.net))$/i)?(window.EF.c(window.EF.da.query,
window.__ql),window.EF.c(window.EF.da.hash,window.__ql)):window.__ql=window.EF.referrer.query},init:function(a){window.EF.H=window.EF.H||{};var b={1180:100,2384:10,3197:100,2923:100,3093:100,3219:100,2385:100,4202:100,2370:100,2993:100,2793:100,1728:100}[a.userid];"undefined"==typeof b||!(Math.floor(100*Math.random())<b)||a.userid in window.EF.H?window.EF.U(a):window.EF.pa(a)},serverParamsListener:function(a){a=a||{};!a.userid||a.userid in window.EF.H||(window.EF.H[a.userid]=a)},pa:function(a){var b=
window.EF.f({scheme:"https:",host:window.EF.jsHost,path:["dynamic","js-cfg",a.userid,"def.js"]}),c=window.EF.$(b.text);c.addEventListener?c.addEventListener("load",function(){window.EF.U(a)},!1):c.attachEvent("onload",function(){window.EF.U(a)});window.EF.O(this,function(){window.EF.m(c)})},log:function(){window.EF.debug&&console.log.apply(this,window.EF.log.arguments)},m:function(a){window.EF.log("EFLOG: Adding element to DOM: (",a.tagName,") ",a);document.body.appendChild(a)},C:function(a){var b=
[],c;for(c in a)a.hasOwnProperty(c)&&(b[b.length]=c);b.sort();return b},w:function(a){for(var b in a)return!1;return!0},c:function(a,b){for(var c in a)b[c]=a[c]},ua:function(){return(window.addEventListener||window.attachEvent)&&window.postMessage},u:function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return c;return-1},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},R:function(){if(window.EF.accessTopUrl)try{window.EF.top=window.EF.f({text:top.location.href})}catch(d){window.EF.top=
null}for(var a=window.EF.top?window.EF.top.query:window.EF.ca.query,b={},c=0;c<window.EF.I.length;c++)a.hasOwnProperty(window.EF.I[c])&&(b[window.EF.I[c]]=a[window.EF.I[c]]);return b},ta:function(){function a(a,b){return a+".*(\\?|&)"+b+"=.*"}var b=[a("maynard","q"),a("google","q"),a("yahoo","p"),a("msn","q"),a("bing","q"),a("aol","query"),a("aol","encquery"),a("lycos","query"),a("ask","q"),a("altavista","q"),a("netscape","query"),a("cnn","query"),a("looksmart","qt"),a("about","terms"),a("mamma",
"query"),a("alltheweb","q"),a("gigablast","q"),a("voila","rdata"),a("virgilio","qs"),a("live","q"),a("baidu","wd"),a("alice","qs"),a("yandex","text"),a("najdi","q"),a("aol","q"),a("club-internet","query"),a("mama","query"),a("seznam","q"),a("search","q"),a("wp","szukaj"),a("onet","qt"),a("netsprint","q"),a("google.interia","q"),a("szukacz","q"),a("yam","k"),a("pchome","q"),a("kvasir","searchExpr"),a("sesam","q"),a("ozu","q"),a("terra","query"),a("nostrum","query"),a("mynet","q"),a("ekolay","q"),a("search.ilse",
"search_for")],c;for(c=0;c<b.length;c++){var d=b[c];if(window.EF.referrer.text.match(d))return 1}if(void 0!==window.__ql.ef_id||0!=window.EF.inFloodlight&&void 0!==window.EF.referrer.query.ef_id)if(b=void 0!==window.__ql.ef_id?window.__ql.ef_id.split(":"):window.EF.referrer.query.ef_id.split(":"),"EF_IDV2"==b[0]){if(6<=b.length&&"s"==b[5])return 1}else if(b=b[b.length-1],1==b.length){if("s"==b)return 1}else return 1;return 0},X:function(a){window.EF.w(window.EF.a)?window.EF.F[window.EF.F.length]=
a:a()},addListener:function(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent("onmessage",a)},removeListener:function(a){window.addEventListener?window.removeEventListener("message",a,!1):window.detachEvent("onmessage",a)},ja:function(){window.EF.va().g()},Ka:function(a){if(!window.EF.Y)return!1;window.EF.Y--;a&&a();return!0},S:function(){if(-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")){var a=navigator.userAgent.match(/version\/(\d+(\.\d+)?)/i);
if((a=a&&1<a.length&&a[1]||"")&&""!=a&&11<=parseInt(a))return!0}return!1},main:function(){},P:function(){window.EF.i="";var a=document.documentURI;window.top!=window&&(a=document.referrer);if(-1!=a.indexOf("ef_id"))a=window.EF.f({text:a,V:!1}).query,void 0!==a.ef_id&&(window.EF.i=a.ef_id);else if(void 0===window.EF.i||""==window.EF.i)a=document.cookie.split(";").map(function(a){return a.trim().split(/(=)/)}).reduce(function(a,c){a[c[0]]=a[c[0]]?a[c[0]]+", "+c.slice(2).join(""):c.slice(2).join("");
return a},{}).data_adcloud,window.EF.i=void 0!==a&&""!==a?a:"";return window.EF.i},U:function(a){var b=window.EF.H[a.userid]||{},c;for(c in b)window.EF[c]=b[c];for(c in a)window.EF[c]=a[c];"undefined"!=typeof a.postInitCallback&&a.postInitCallback();window.EF.ea().g();a=window.EF.R();window.EF.appData&&"<app_data>"!=window.EF.appData&&window.EF.c(window.EF.deserializeUrlParams(decodeURIComponent(decodeURIComponent(window.EF.appData))),a);("pageview"==window.EF.eventType||"transaction"==window.EF.eventType&&
2504==window.EF.userid||!window.EF.w(window.EF.R())||window.EF.appData&&"<app_data>"!=window.EF.appData)&&window.EF.za().g();"impression"==window.EF.eventType?window.EF.ya().g():"transaction"==window.EF.eventType&&window.EF.Da().g();window.EF.segment&&(window.EF.fa({segment:window.EF.segment}).g(),window.EF.searchSegment&&window.EF.ta()&&window.EF.fa({segment:window.EF.searchSegment}).g());window.EF.sku&&"<sku_value>"!=window.EF.sku&&window.EF.Ca({ev_plx:window.EF.sku+(window.EF.W?"-"+window.EF.W:
"")}).g();if(window.EF.fbsPixelId)if(a=window.EF.aa(),delete a.ev_transid,a=Object.keys(a),0==a.length)window.EF.xa({fbsPixelId:window.EF.fbsPixelId}).g();else for(var d in a)window.EF.xa({fbsPixelId:window.EF.fbsPixelId,event:a[d]}).g();window.EF.fbsCM&&window.EF.wa().g();window.EF.ja()},Oa:function(a,b){var c=window.EF.ca.query;return c.hasOwnProperty(a)&&-1!=window.EF.u(b,c[a])},Na:function(a){return-1!=window.EF.u(a,String(window.EF.sid))&&-1!=window.EF.u(window.EF.ra,window.EF.eventType)},$:function(a){var b=
document.createElement("script");b.language="Javascript";b.type="text/javascript";b.src=a;return b},ma:function(a){var b=document.createElement("iframe");void 0!==a&&(b.src=a);b.height=0;b.width=0;b.Pa=0;b.style.display="none";return b},na:function(a){var b=document.createElement("img");b.height=1;b.width=1;b.style.display="none";b.src=a;return b},v:function(a){ret={};for(var b in a)ret[b]=a[b];return ret},deserializeUrlParams:function(a,b){var c={};a.replace(b?/(?:^|&)([^&=]*)=?((?:!.*$)|(?:[^&]*))/g:
/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,b,g){b&&(c[b]=decodeURIComponent(g))});return c},Z:function(a,b){for(var c=[],d=0;d<a.length;d++)-1==window.EF.u(b,a[d])&&(c[c.length]=a[d]);return c},ka:function(){for(var a=0;a<window.EF.onloadCallbacks.length;a++)window.EF.onloadCallbacks[a]();window.EF.onloadCallbacks=[]},O:function(a,b){"complete"==document.readyState?b.apply(a):window.addEventListener?window.addEventListener("load",function(){b.apply(a)},!1):window.attachEvent("onload",function(){b.apply(a)})},
f:function(a){var b={};if(a.text){b.text=a.text;var c="",d="",e="";e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+:))?(?:\/\/)?(?:([^:\/?#@]*(?::[^:\/?#@]*)?)?@)?([^:\/?#]*)(?::(\d*))?((?:\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?[^?#\/]*)(?:\?([^#]*))?(?:#(.*))?/.exec(b.text).slice(1);b.scheme=e[0];b.N=e[1];b.host=e[2];b.port=e[3];c=e[4];d=e[5];e=e[6];b.path=c.split("/").slice(1);b.query={};b.l={};b.hash={};d&&(b.query=window.EF.deserializeUrlParams(d,a.V));e&&(b.hash=window.EF.deserializeUrlParams(e,
a.V))}else c=function(a,c){for(var d=[],e=0;e<c.length;e++){var g=c[e];d[d.length]=[g,a[g]].join("=")}return d.join(b.ia)},d=function(a){for(var b={},c=window.EF.C(a),d=0;d<c.length;d++){var e=c[d];b[e]=encodeURIComponent(a[e])}return b},b.scheme=a.scheme,b.N=a.N,b.host=a.host,b.port=a.port,b.path=a.path||[],b.query=a.query||{},b.l=a.l||{},b.hash=a.hash||{},b.ba=a.ba||window.EF.C(b.hash),b.queryPrefix=a.queryPrefix||"?",b.ia=a.ia||"&",b.Fa=a.Fa,e={},window.EF.c(b.query,e),window.EF.c(b.l,e),b.G=a.G||
window.EF.C(e),a=b.host,b.N&&(a=[b.N,a].join("@")),b.port&&(a=[a,b.port].join(":")),b.text=[b.scheme,a].join("//"),b.text=[b.text].concat(b.path).join("/"),window.EF.w(b.l)||window.EF.w(b.query)?window.EF.w(b.query)?window.EF.w(b.l)||(b.text=[b.text,c(b.l,b.G)].join(b.queryPrefix)):b.text=[b.text,c(d(b.query),b.G)].join(b.queryPrefix):(a={},window.EF.c(d(b.query),a),window.EF.c(b.l,a),b.text=[b.text,c(a,b.G)].join(b.queryPrefix)),window.EF.w(b.hash)||(b.text=[b.text,c(d(b.hash),b.ba)].join("#"));
b.L=function(){return[this.scheme]};b.K=function(){return[this.host]};return b},D:function(a){var b=window.EF.f({scheme:window.EF.protocol,host:window.EF.pixelHost,path:[a.userid,a.eventType],query:a.B});b.userid=a.userid;b.eventType=a.eventType;return b},Ba:function(a){a=a||{};var b={};b.url=a.s.text;b.ev_gb=0;b=window.EF.D({userid:a.userid,eventType:"gr",B:b});b.s=a.s;b.qa=a.qa;var c=window.EF.v(b);b.L=function(){var a=c.L.apply(this);return a=a.concat(this.s.L())};b.K=function(){var a=c.K.apply(this);
return a=a.concat(this.s.K())};return b},Aa:function(a){var b={ev_ct:"d",ev_sid:"77"},c={};b.url=a.s;for(var d=[["campaignId","ev_ci"],["adgroupId","ev_ai"],["creativeId","ev_cri"],["impressionId","ev_ii"],["rtbSourceId","ev_rs"],["sku","ev_plx"],["privateExchangeId","ev_dlx"],["ias client id","ev_ias"],["ias advertiser id","ev_ias_advid"],["ias client id","ev_ias"],["ias campaign id","ev_iascmp"],["publisher id","ev_pubid"]],e=0;e<d.length;e++){var g=d[e][0],f=d[e][1],h=a.Ea[f]||window.EF.location.query[f]||
window.EF.location.hash[f];h&&(b[f]=h);c[g]=h}a=window.EF.D({userid:a.userid,eventType:a.Ha?"cq":"c",B:b});window.EF.c(c,a);return a},getDisplayClickUri:function(a){var b=window.EF.Aa({s:a.destinationUri,userid:a.userid||window.EF.userid,Ha:a.tokenPassing,Ea:a.queryParams||{}}),c=a.La||window.EF.location.query.ev_cu||window.EF.location.hash.ev_cu||window.EF.location.query.ev_cud||window.EF.location.hash.ev_cud;return c?c+((void 0!==a.Ia?!a.Ia:window.EF.location.query.ev_cu||window.EF.location.hash.ev_cu||
!window.EF.location.query.ev_cud&&!window.EF.location.hash.ev_cud)?escape(b.text):b.text):b.text},aa:function(a){a=a||{};var b=a.properties||window.EF.transactionProperties,c=a.objectList||window.EF.transactionObjectList;a=window.EF.v(a.queryStringArgs||{});if(b)"string"==typeof b&&(b=window.EF.deserializeUrlParams(b)),window.EF.c(b,a);else if("undefined"!==typeof c){b={};for(var d=0;d<c.length;d++)for(var e=c[d],g=window.EF.C(e),f=0;f<g.length;f++){var h=g[f];b[h]=e[h]}window.EF.c(b,a)}return a},
la:function(a){a=a.Ja;for(var b=[],c=0;6>c;c++)b[c]=window.EF.u("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@-",a[c]);return b[0]<<26|b[1]<<20|b[2]<<14|b[3]<<8|b[4]<<2|b[5]>>4},getMacroSubstitutedText:function(a){var b=a.text,c={};a=a.Ma||window.EF.location.query.ev_cb||window.EF.location.hash.ev_cb;if(!a)try{a=window.EF.la({Ja:window.EF.location.query.ev_ii||window.EF.location.hash.ev_ii})}catch(g){a=Math.round(new Date/1E3)}c.__CACHEBUSTER__=String(a);a=window.EF.C(c);for(var d=
0;d<a.length;d++){var e=a[d];b=b.replace(new RegExp(e,"g"),c[e])}return b},j:function(a){var b={};b.userid=a.userid||window.EF.userid;b.scheme=a.scheme||window.EF.protocol;b.m=function(){this.h();if(this.A()){var a=this.J();window.EF.m(a)}};b.g=function(){var a=this;window.EF.X(function(){a.m()})};b.h=function(){throw"InitializeUri not implemented";};b.J=function(){return window.EF.na(this.uri.text)};b.A=function(){return"https:"==window.EF.protocol&&window.EF.Z(this.uri.L(),["https:"]).length?!1:
window.EF.allow3rdPartyPixels||!window.EF.Z(this.uri.K(),[window.EF.pixelHost,window.EF.jsHost]).length};return b},ea:function(a){a=a||{};var b=window.EF.j(a),c=window.EF.v(b);b.h=function(){var a=window.EF.f({scheme:window.EF.protocol,host:window.EF.jsHost,path:["static","pixel_details.html"],hash:window.EF.M});this.uri=window.EF.Ba({userid:this.userid,s:a})};b.A=function(){return!c.A.apply(this)||window.EF.ga?!1:window.EF.ua()};b.J=function(){return window.EF.ma(this.uri.text)};b.g=function(){window.EF.O(this,
this.m)};b.m=function(){this.h();if(this.A()){window.EF.addListener(this.ha);var a=this.J();window.EF.m(a);window.EF.ga=1}};b.ha=function(a){if(-1!=EF.u(["http://"+window.EF.jsHost,"https://"+window.EF.jsHost],a.origin)){a=window.EF.f({text:a.data});var c=window.EF.C(window.EF.M),d;for(d in a.hash){var f=a.hash[d];-1!=window.EF.u(c,d)&&f!=window.EF.M[d]&&(window.EF.a[d]=f)}window.EF.a.hasOwnProperty("gsurfer")&&window.EF.a.hasOwnProperty("google")&&(window.EF.a.exp_time=window.EF.a.gsurfer==window.EF.a.google?
"1":"30");window.EF.Ga=window.EF.a.throttleCookie;window.EF.removeListener(b.ha);for(d=0;d<window.EF.F.length;d++)window.EF.F[d]();window.EF.F=[]}};return b},za:function(a){a=a||{};var b=window.EF.j(a),c=a.properties||window.EF.pageviewProperties;b.b=window.EF.v(a.queryStringArgs||{});b.b.ev___loc=window.EF.location.text;b.b.ev___ref=window.EF.referrer.text;window.EF.c(window.EF.R(),b.b);window.EF.appData&&"<app_data>"!=window.EF.appData&&window.EF.c(window.EF.deserializeUrlParams(decodeURIComponent(decodeURIComponent(window.EF.appData))),
b.b);"string"==typeof c&&(c=window.EF.deserializeUrlParams(c));window.EF.c(c,b.b);b.h=function(){window.EF.S()&&""!=window.EF.P()&&(this.b.ef_id=window.EF.i);this.uri=window.EF.D({userid:this.userid,eventType:"v",B:this.b})};return b},Da:function(a){a=a||{};var b=window.EF.j(a);b.b=window.EF.aa(a);b.h=function(){window.EF.S()&&""!=window.EF.P()&&(this.b.ef_id=window.EF.i);this.uri=window.EF.D({userid:this.userid,eventType:"t",B:this.b})};return b},ya:function(a){a=a||{};var b=window.EF.j(a),c=a.properties||
window.EF.impressionProperties;b.b=window.EF.v(a.queryStringArgs||{});b.b.ev___loc=window.EF.location.text;b.b.ev___ref=window.EF.referrer.text;"string"==typeof c&&(c=window.EF.deserializeUrlParams(c));window.EF.c(c,b.b);b.h=function(){window.EF.S()&&(""!=window.EF.P()&&(this.b.ef_id=window.EF.i),this.uri=window.EF.D({userid:this.userid,eventType:"i",B:this.b}))}},fa:function(a){a=a||{};var b=window.EF.j(a),c=window.EF.v(b);b.h=function(){this.T=[this.userid,a.segment].join("-");this.T=this.T.concat(".js");
this.uri=window.EF.f({scheme:window.EF.protocol,host:window.EF.jsHost,path:["dl",this.userid,this.T]})};b.A=function(){return c.A.apply(this)&&window.EF.allow3rdPartyPixels&&"1"!=window.EF.a.optout?window.EF.a.optout!=window.EF.M.optout&&"0"==window.EF.a.optout:!1};b.J=function(){return window.EF.$(this.uri.text)};return b},Ca:function(a){a=a||{};var b=window.EF.j(a);b.sku=a.ev_plx||window.EF.sku+(window.EF.W?"-"+window.EF.W:"");b.h=function(){this.uri=window.EF.D({userid:this.userid,eventType:"s",
B:{ev_plx:this.sku}})};return b},va:function(a){a=a||{};a=window.EF.j(a);a.h=function(){this.uri=window.EF.f({scheme:window.EF.protocol,host:window.EF.cmHost,path:["cm"]})};return a},wa:function(){var a=window.EF.j({});a.h=function(){this.uri=window.EF.f({scheme:"https:",host:"www.facebook.com",path:["fr","b.php"],l:{p:"1531105787105294",e:window.EF.a.gsurfer,t:"2592000",o:"0"},G:["p","e","t","o"]})};return a}};window.EF.onloadCallbacks=k;window.EF.jsTagAdded=l;window.EF.sa();window.EF.O(this,window.EF.ka)}})();
