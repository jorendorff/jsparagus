var AdultFlag;(function(n){function w(){l||(l=!0,u(_w,y,b,!0))}function b(){f=[];l=!1}var y="unload",r="adultFlag",t="undefined",e=typeof VideoRichHoverUtils!=t?VideoRichHoverUtils:null,o=typeof SmartEvent!=t?SmartEvent:null,i=typeof pMMUtils!=t?pMMUtils:null,s=!1,h=null,c=null,a=null,u=null,f=[],l=!1,v;if(!s&&i&&i.gfbc&&i.sepd&&e&&e.showElement&&o&&o.bind&&(h=i.gfbc,c=i.sepd,a=e.showElement,u=o.bind,s=!0),s&&_w&&!_w[r]){_w[r]=n;function p(n,t,i,r,u,e,o,s){n&&n.length>1&&i&&i.length>1&&u&&u.length>1&&r&&r.length>1&&(f[n]&&(f[n]=null),f[n]=new v(t,i,r,u,e,o,s));return}w();n.init=p}v=function(){function n(n,i,f,e,o,s,l){var v=this;(this.playUrl=null,this.mediaUrl=null,this.staticUrl=null,this.hash=null,this.bindEvents=function(){v.adultHandle&&(u(v.adultHandleContainer,"mouseup",c),u(v.adultHandle,"click",v.markAsAdultHandler))},this.markAsAdultHandler=function(n){var r,i,u;c(n);r=typeof EditorialToolTabs!=t?EditorialToolTabs:null;i=typeof FlagFeedback!=t?FlagFeedback:null;v.enableMarkAsAdult&&r&&r.videoClick&&(n==null||n.button!==2)?r.videoClick(v.mediaUrl,v.playUrl,v.staticUrl,v.hash):v.enableFlagFeedback&&i&&i.c&&(u={turl:v.staticUrl,surl:v.mediaUrl,imgurl:v.mediaUrl,src:"videovertical",md5:v.hash},i.metadata=u,i.c(n))},!n||!i||i.length<1||!e||e.length<1||!o||o.length<1||!f||f.length<1)||(this.mediaUrl=f,this.playUrl=i,this.staticUrl=e,this.hash=o,this.enableMarkAsAdult=s,this.enableFlagFeedback=l,this.adultHandle=h(r+" cont",n),this.adultHandleContainer=h(r,n),this.adultHandleContainer&&this.adultHandle)&&(this.bindEvents(),a(this.adultHandleContainer,!0))}return n}()})(AdultFlag||(AdultFlag={}))