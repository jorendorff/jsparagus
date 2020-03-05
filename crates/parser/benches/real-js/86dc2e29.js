var ThumbnailPlayer;(function(n){function pt(){p||(p=!0,tt(_w,st,wt,!0))}function wt(){u=[];p=!1}function it(n,t,i,r,u,f,e,o){var s=null,h=!0;switch(n){case VRHEnums.ThumbnailType.ST:s=ThUrlGenerator.NewThumbnailUrl(t,i,u,f,e,ThUrlGenerator.CroppingType.SmartRatio,ThUrlGenerator.ResizeMode.Ratio);r==VRHEnums.HoveredElementType.Adult&&(s+="&m=3");break;case VRHEnums.ThumbnailType.MT:case VRHEnums.ThumbnailType.MMMT:h=!1;s=o;break;default:return null}return b(s,h)}function bt(n){if(u[n])return u[n].clientHeight}var ut="vrhi",ft="vt_vp",et="vrhtc",ot="player_ol",st="unload",w="thumbnailplayer",h="undefined",t=typeof pMMUtils!=h?pMMUtils:null,v=typeof SmartEvent!=h?SmartEvent:null,r=typeof VideoRichHoverUtils!=h?VideoRichHoverUtils:null,i=typeof VRHConsts!=h?VRHConsts:null,c=!1,f=null,ht=null,ct=null,b=null,lt=null,k=null,e=null,o=null,d=null,at=null,y=null,g=null,nt=null,vt=null,l=null,tt=null,s=!1,u=[],p=!1,s=!1,a,rt;if(!c&&t&&t.gebc&&t.sc&&t.sw&&t.sh&&t.ga&&t.gfbc&&t.st&&t.ac&&t.ss&&i&&r&&r.showElementFromList&&r.showElementTree&&v&&i&&v.bind&&(f=t.gfbc,ht=t.sepd,ct=t.ga,lt=t.sc,k=t.rc,e=t.sw,o=t.sh,d=t.ss,at=t.st,y=t.ac,nt=t.gsh,s=t.isTest(),g=r.showElementFromList,vt=r.showElement,l=r.showElementTree,b=r.getThumbUrlOrMockThumbUrl,tt=v.bind,c=!0),c&&_w&&!_w[w]){_w[w]=n;function yt(n,t,i,r,f,e,o,s){if(c&&n&&n.length>1){if(!f||!o||!o.thid||!e||e.length<1||!r)return;u[n]&&(u[n]=null);u[n]=new rt(n,t,i,r,f,e,o,s)}return}pt();n.init=yt}n.clientHeight=bt;rt=function(){function n(n,t,r,u,h,c,v,p){var w=this,tt,b;(this.imageThumbnailId=null,this.smtThumbnailLink=null,this.videoPlayer=null,this.imageContainer=null,this.smtContainer=null,this.thumbnailContainer=null,this.playerOverlay=null,this.thumbnailPlayerMeta=null,this.instMeta=null,this.thumbnailClientWidth=0,this.thumbnailClientHeight=0,this.pidStr=null,this.isAdultThumb=!1,this.eventBinded=!1,this.richHoverConfig=null,this.isCanceled=!1,this.playerNameStr=null,this.clientHeight=0,this.elementIntialize=function(n,t,i){return(w.isAdultThumb=w.thumbnailPlayerMeta.isAdultThumb,!w.thumbnailPlayerMeta.thid||w.thumbnailPlayerMeta.thid.length<1)?!1:(w.richHoverConfig=n,w.smtThumbnailLink=w.thumbnailPlayerMeta.smtThumbUrl,w.playerNameStr=i,w.thumbnailClientWidth=w.thumbnailPlayerMeta.thumbnailWidth,w.thumbnailClientHeight=w.thumbnailPlayerMeta.thumbnailHeight,w.thumbnailContainer=f(et,t),w.thumbnailContainer==null)?!1:(e(w.thumbnailContainer,w.thumbnailClientWidth),o(w.thumbnailContainer,w.thumbnailClientHeight),w.pidStr=w.richHoverConfig.pid,w.imageThumbnailId=w.thumbnailPlayerMeta.thid,!0)},this.prepareSMTPlayer=function(n){if(w.videoPlayerStatus=VRHEnums.PlayerStatus.None,w.smtThumbnailLink){if(w.smtContainer=f(ft,w.thumbnailContainer),!w.smtContainer)return!1;if(w.playerOverlay=f(ot,w.thumbnailContainer),e(w.smtContainer,w.thumbnailClientWidth),o(w.smtContainer,w.thumbnailClientHeight),e(w.playerOverlay,w.thumbnailClientWidth),o(w.playerOverlay,w.thumbnailClientHeight),n.push(w.smtContainer),typeof Html5VideoSMTPlayer!="undefined"&&(w.videoPlayer=Html5VideoSMTPlayer),w.videoPlayer&&w.videoPlayer.init&&w.videoPlayer.init(w.smtContainer,w.playerNameStr,w.thumbnailPlayerMeta,w.instMeta,w.richHoverConfig.enmuteinst))return y(w.smtContainer,"load"),a=0,w.eventBind(),!0}return!1},this.eventBind=function(){sj_evt.bind(i.PlayerLoadEvt,w.onVideoLoadding);sj_evt.bind(i.PlayerEndEvt,w.onVideoStop);sj_evt.bind(i.PlayerPauseEvt,w.onVideoPause);sj_evt.bind(i.PlayerStartEvt,w.onVideoStart);sj_evt.bind(i.PlayerDownloadEndEvt,w.onVideoDownloadFinish);sj_evt.bind(i.MMSTSeekEvt,w.onVideoSeek);sj_evt.bind(i.PlayerErrEvt,w.onVideoPlayErr);sj_evt.bind(i.HoverCancelEvt,w.onHoverCancel);s&&sj_evt.bind(i.HoverDisplay,w.onHoverDisplay);w.eventBinded=!0},this.eventUnbind=function(){w.eventBinded&&(sj_evt.unbind(i.PlayerLoadEvt,w.onVideoLoadding),sj_evt.unbind(i.PlayerEndEvt,w.onVideoStop),sj_evt.unbind(i.PlayerPauseEvt,w.onVideoPause),sj_evt.unbind(i.PlayerStartEvt,w.onVideoStart),sj_evt.unbind(i.PlayerDownloadEndEvt,w.onVideoDownloadFinish),sj_evt.unbind(i.MMSTSeekEvt,w.onVideoSeek),sj_evt.unbind(i.PlayerErrEvt,w.onVideoPlayErr),sj_evt.unbind(i.HoverCancelEvt,w.onHoverCancel),s&&sj_evt.unbind(i.HoverDisplay,w.onHoverDisplay),w.eventBinded=!1)},this.isCallMe=function(n){return w.videoPlayer&&n&&n.length>2&&n[2]===w.playerNameStr},this.onVideoPlayErr=function(n){w.isCallMe(n)&&(w.videoPlayerStatus=VRHEnums.PlayerStatus.Stopped,w.isCanceled=!1,l(w.smtContainer,!1));sj_evt.fire(i.FallbackToNonSMTEvt)},this.onHoverCancel=function(){w.eventUnbind()},this.onHoverDisplay=function(){s&&console.log("hit hover player")},this.onVideoStart=function(n){if(w.videoPlayerStatus!==VRHEnums.PlayerStatus.Playing&&w.isCallMe(n))if(w.isCanceled)w.onVideoStop(n);else a===0&&(a=sb_st(function(){if((sb_ct(a),w.videoPlayerStatus!==VRHEnums.PlayerStatus.Playing)&&w.videoPlayer){if(w.isCanceled){w.onVideoStop(n);return}w.smtContainer&&(k(w.smtContainer,"load"),l(w.smtContainer,!0),w.videoPlayerStatus=VRHEnums.PlayerStatus.Playing,s&&sj_evt.fire(i.HoverDisplay))}},20))},this.onVideoSeek=function(n){if(w.videoPlayerStatus===VRHEnums.PlayerStatus.Playing&&n&&!(n.length<3)&&w.videoPlayer&&w.videoPlayer.seekVideo){var t=parseInt(n[2]);isNaN(t)||w.videoPlayer.seekVideo(t)}},this.onVideoLoadding=function(n){w.isCallMe(n)&&(y(w.smtContainer,"load"),w.videoPlayerStatus=VRHEnums.PlayerStatus.Loading)},this.onVideoStop=function(n){w.isCallMe(n)&&(w.videoPlayerStatus=VRHEnums.PlayerStatus.Stopped,w.isCanceled=!1,l(w.smtContainer,!1))},this.onVideoDownloadFinish=function(){},this.onVideoPause=function(n){w.isCallMe(n)&&(w.videoPlayerStatus=VRHEnums.PlayerStatus.Paused)},this.onNoVideoPlay=function(n){if(w.isCallMe(n)){w.videoPlayerStatus=VRHEnums.PlayerStatus.Error;w.onVideoStop(n)}},this.initializeThumbnailContainer=function(n,t){if(w.imageContainer=f(ut,t),!w.imageContainer)return!1;var i=it(VRHEnums.ThumbnailType.ST,w.imageThumbnailId,w.isAdultThumb,w.hoverType,w.thumbnailClientWidth,w.thumbnailClientHeight,w.pidStr,w.smtThumbnailLink);return i==null?!1:(w.thumbnailPlayerMeta.smtThumbUrl&&(w.thumbnailPlayerMeta.smtThumbUrl=it(VRHEnums.ThumbnailType.MT,w.imageThumbnailId,w.isAdultThumb,w.hoverType,w.thumbnailClientWidth,w.thumbnailClientHeight,w.pidStr,w.smtThumbnailLink)),w.thumbnailPlayerMeta.imageThumbUrl=i,w.imageContainer.src=i,w.imageContainer.alt=w.thumbnailPlayerMeta.videoTitle,w.thumbnailPlayerMeta.beginClipIndex>1?d(w.imageContainer,"margin-left",(1-w.thumbnailPlayerMeta.beginClipIndex)*w.thumbnailClientWidth+"px"):(e(w.imageContainer,w.thumbnailClientWidth),o(w.imageContainer,w.thumbnailClientHeight)),sj_evt.fire(VRHConsts.HoverThumbLoadEvt,w.instMeta),n.push(w.imageContainer),!0)},!n||n.length<1||!v)||(this.thumbnailPlayerMeta=v,this.hoverType=r,p&&(this.instMeta=p),tt=new Array(0),this.elementIntialize(u,h,c))&&this.initializeThumbnailContainer(tt,this.thumbnailContainer)&&(tt.push(this.thumbnailContainer),b=this.prepareSMTPlayer(tt),b||sj_evt.fire(VRHConsts.FallbackToNonSMTEvt),ThumbnailPlayerOverlay&&ThumbnailPlayerOverlay.init&&ThumbnailPlayerOverlay.init(n,this.thumbnailContainer,this.playerNameStr,t,r,this.richHoverConfig,this.thumbnailPlayerMeta,p,b,b?this.videoPlayer.setVolume:null,b?this.videoPlayer.setLastStableVolume:null,b?this.videoPlayer.setMute:null,b?this.videoPlayer.getVolume:null,b?this.videoPlayer.isMute:null),g(tt,!0),this.clientHeight=nt(this.thumbnailContainer))}return n}()})(ThumbnailPlayer||(ThumbnailPlayer={}))