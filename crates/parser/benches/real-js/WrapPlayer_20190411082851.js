var WrapPlayer={init:function(options){if(this._options={videoId:"",inKey:"",rmcSid:"",serviceapiDomainRMC:"",wmode:""},options)for(var i in options)this._options[i]=options[i];this._isInit=!0,this._assignVar(),this._initPlayer(),this._appendPipBtn(),this._bindEvent()},_assignVar:function(){this._htEvent=[],this._videoArea=jindo.$Element(jindo.$$.getSingle(".video_area")),this._pipCloseBtn="",this._hideInterval=0,this._clipEndDa=jindo.$Element(jindo.$$.getSingle("#banner ._banner")),this._playerArea=jindo.$Element("playerArea"),this._player=jindo.$Element("player"),this._playerAuth=jindo.$Element("player_auth"),this._playerCountry=jindo.$Element("player_country"),this._clipInfoTop=0,this._isCloseByBtn=!1,this._isFixed=!1,this._hideFlag=!1,this._isPlayerDown=!1,this._isPlayerMove=!1,this._scroll=0,this._playerPosGap={},this._daMargin=50,this._nowPos={posX:92,posY:22},this._mousePos={},this._closeBtnSize=29,this._tmpPos={posX:92,posY:22},this._playerSize={width:384,height:216},this._browserSize=jindo.$Document().clientSize(),this._headerHeight=parseInt(jindo.$Element("header").height(),10),this._oCookie=jindo.$Cookie(),this._playerEl="",this._isMiniView=!1,this._enterFullScreenAtClipNo=0,this._isClickedTimestamp=!1,this._timestamp=0},_bindEvent:function(){if(this._htEvent.scroll=jindo.$Fn(this._onScroll,this).bind(),this._htEvent.mouseDown=jindo.$Fn(this._onMouseDown,this).bind(),this._htEvent.mouseMove=jindo.$Fn(this._onMouseMove,this).bind(),this._htEvent.mouseUp=jindo.$Fn(this._onMouseUp,this).bind(),this._htEvent.resize=jindo.$Fn(this._onResize,this).bind(),jindo.$Element(window).attach("scroll",this._htEvent.scroll),this._pipCloseBtn){var self=this;this._pipCloseBtn.attach("click",function(e){e.stopDefault(),self._isCloseByBtn=!0,self._closeMiniPlayer(),clickcr(e.srcElement,"pip.close","","",e._event)})}},_appendPipBtn:function(){this._videoArea&&(this._pipCloseBtn=jindo.$Element('<a href="#" class="btn_close" style="display:none;">닫기</a>'),this._videoArea.append(this._pipCloseBtn))},_initPlayer:function(){this.checkPlayAuth(this._options.playerAuth)?(this.warmupPlayer(),this.updateProperties(this._options)):this.warmupPlayer()},checkPlayAuth:function(auth){return"notLogin"!=auth&&"notSafe"!=auth&&"notCountry"!=auth&&"notAdult"!=auth},warmupPlayer:function(){this.rmcPlayer=new nhn.rmcnmv.RMCVideoPlayer({serviceId:2010}),this.rmcPlayer.properties.wmode="window",this.rmcPlayer.properties.skinName="tvcast_white",this.rmcPlayer.init(jindo.$("player")),this.setCallbackFunction(jindo.$Fn(this.callbackHandler,this).bind())},setCallbackFunction:function(f){this.rmcPlayer.properties.callbackFunction=f},_initRmcPlayer:function(){this._options.videoId&&(this.rmcPlayer||(this.rmcPlayer=new nhn.rmcnmv.RMCVideoPlayer(this._options.videoId,this._options.inKey,0,0,this._options.rmcSid,this._options.techType,this._options.serviceapiDomainRMC),this.rmcPlayer.properties.wmode="window",this.rmcPlayer.properties.skinName="tvcast_white",this.rmcPlayer.properties.autoPlay=this._options.autoPlay,this.rmcPlayer.displayRMCPlayer(jindo.$("player")),this.setCallbackFunction(jindo.$Fn(this.callbackHandler,this).bind())))},updateProperties:function(dataJson){this.setChangeInfo(),dataJson.multiTrack&&location.reload();var authState=dataJson.playerAuth,isNotAuth="notLogin"==authState||"notSafe"==authState||"notAdult"==authState,isNotCountry="notCountry"==authState;if(this._player[isNotAuth||isNotCountry?"hide":"show"](),this._playerAuth[isNotAuth?"show":"hide"](),this._playerCountry[isNotCountry?"show":"hide"](),isNotAuth||isNotCountry)this.isAuth=!1,this.rmcPlayer.exitFullScreen(),this.rmcPlayer.stop();else{if(this.isAuth=!0,"koreanfilm"==dataJson.channelId&&(jindo.$Agent().os().iphone||jindo.$Agent().os().ipad))return this.getRmcPlayer().setNotAllowPlay("해당 기기에선 재생이 지원되지 않습니다.<br/>양해 부탁드리며 PC에서 감상해주시기 바랍니다."),void this.getRmcPlayer().displayRMCPlayer(jindo.$("player"));this.getRmcPlayer().updatePlayInfo(dataJson.videoId,dataJson.inKey,this._getProp(dataJson))}},_getProp:function(dataJson){var propertiesInfo={};if(this._options.vr360=dataJson.vr360,this._options.isMT=dataJson.multiTrack,ghtRmcPlayerControlOption.clicked.expand=isGlobalExpand,propertiesInfo.cassiodServiceID="2010",propertiesInfo.isResizableCoverImage=!0,propertiesInfo.hasRelativeMovie=!0,propertiesInfo.controlBarMovable=!0,propertiesInfo.jsCallable="true",propertiesInfo.countryCode=this._options.countryCode,propertiesInfo.interfaceLang=this._options.interfaceLang,propertiesInfo.wmode=this._options.wmode,propertiesInfo.coverImageURL=/https\:\/\//.test(dataJson.coverImageUrl)?dataJson.coverImageUrl:ghtEnv.sPhotoInfraUrl+dataJson.coverImageUrl,propertiesInfo.isP2P=dataJson.p2pEnable,propertiesInfo.nsc=dataJson.nsc,propertiesInfo.apiAd=this._options.apiAd,propertiesInfo.controls=ghtRmcPlayerControlOption,propertiesInfo.advertiseInfo=dataJson.advertiseInfo,propertiesInfo.advertiseUrl=dataJson.advertiseUrl,propertiesInfo.vendor=dataJson.vendor,propertiesInfo.externalTrackingData=dataJson.smrTrackingData,!dataJson.protocol&&dataJson.playerMode&&"video"!=dataJson.playerMode.player?propertiesInfo.protocol="rtmpe":propertiesInfo.protocol=dataJson.protocol||this._options.protocol,propertiesInfo.autoPlay=dataJson.autoPlay,"true"==window.ghtEnv.nstoreFreeMovie||"true"==dataJson.nstoreFreeMovie){var NFM_cookie=jindo.$Cookie().get("NFM_TV");NFM_cookie&&"true"==NFM_cookie||(propertiesInfo.autoPlay="false")}"N"!=dataJson.smrYn&&"N"!=dataJson.isSmrYn||jindo.$Cookie().get("AUTOCNT")%2==0||"TRUE"!=jindo.$Cookie().get("ISAUTO")||!dataJson.advertiseUrl||(propertiesInfo.advertiseUrl=encodeURIComponent(decodeURIComponent(dataJson.advertiseUrl).replace(/(pre\",\"exposure\":)true/,"$1false"))),"Y"==dataJson.adultYn||"Y"==dataJson.isAdult?propertiesInfo.ratingBoard="ADULT":propertiesInfo.ratingBoard="ALL";for(var milliTime=parseInt(((new Date).getTime()-nGapTime)/1e3,10),i=milliTime+2,nLen=milliTime-3;nLen<i;i--)try{if(window.localStorage.getItem("searchTime")==i){propertiesInfo.continuedInfo=window.localStorage.getItem("contInfo"),window.localStorage.removeItem("contInfo"),window.localStorage.removeItem("searchTime");break}}catch(e){}return propertiesInfo},_onScroll:function(e){if(!this._options.isMT&&!(window.isGlobalExpand||this._options.vr360||"undefined"==typeof ghtEnv||"undefined"!=typeof ghtEnv&&"clipEnd"!=ghtEnv.sPageName)){var scroll=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;if(this._playerEl||(this._playerEl=this.rmcPlayer.getElement()),this._clipInfo||(this._clipInfo=jindo.$Element("clipInfoArea"),this._clipInfoTop=this._clipInfo&&this._clipInfo.offset().top),this._clipEndDa||(this._clipEndDa=jindo.$Element(jindo.$$.getSingle("#banner ._banner"))),this._clipInfo&&this._clipEndDa){var checkScrollDownVal=!1,checkScrollUpVal=!1,self=this;checkScrollUpVal=window.ghtEnv&&"Y"==window.ghtEnv.specialDAYn?(checkScrollDownVal=scroll+this._browserSize.height>=this._clipEndDa.offset().top+this._clipEndDa.height()+this._playerSize.height+this._daMargin&&!this._isFixed&&!this._isCloseByBtn,scroll+this._browserSize.height<this._clipEndDa.offset().top+this._clipEndDa.height()+this._playerSize.height+this._daMargin&&this._isFixed):(checkScrollDownVal=scroll>=this._clipInfoTop&&!this._isFixed&&!this._isCloseByBtn,scroll<this._clipInfoTop&&this._isFixed),checkScrollDownVal?(this._isFixed=!0,this._clipInfo.css("marginTop",this._videoArea.height()+"px"),this._hideInterval=0,this._hideFlag=!1,this._hideInterval=setInterval(function(){self._hideUiPlayer()},10),this._videoArea.attach({mousedown:this._htEvent.mouseDown,mousemove:this._htEvent.mouseMove,mouseup:this._htEvent.mouseUp}),this._nowPos={posX:parseInt(this._oCookie.get("EndPlayer_PosX"),10)||this._nowPos.posX,posY:parseInt(this._oCookie.get("EndPlayer_PosY"),10)||this._nowPos.posY},this._tmpPos={posX:this._nowPos.posX,posY:this._nowPos.posY},this._videoArea.css({position:"fixed",right:this._nowPos.posX,bottom:this._nowPos.posY,paddingRight:"29px",background:"none",zIndex:3001,width:this._playerSize.width+"px",height:this._playerSize.height+"px",opacity:1}),this._isMiniView||clickcr&&clickcr("","pip.open","","",""),this._isMiniView=!0,this._pipCloseBtn&&this._pipCloseBtn.show(),this._playerArea.css({height:this._playerSize.height+"px",backgroundColor:"#000"}),jindo.$Element(window).attach("resize",this._htEvent.resize)):checkScrollUpVal&&this._procCloseMiniPlayer()}}},_procCloseMiniPlayer:function(){this._closeMiniPlayer(),this.rmcPlayer.toggleIconDisplay&&!this._isEndFullscreen?(this.rmcPlayer.toggleIconDisplay("expand",!0),this.rmcPlayer.toggleIconDisplay("resolution",!0),this.rmcPlayer.updateLayout()):"flash"==this.rmcPlayer.playerType&&this._playerEl&&this._playerEl.hideUi&&(this._playerEl.hideUi("expand",!0),this._playerEl.hideUi("resolution",!0)),this._isFixed=!1},_onResize:function(){this._browserSize=jindo.$Document().clientSize(),this._setPos(),this._nowPos={posX:this._tmpPos.posX,posY:this._tmpPos.posY},this._setPosCookies()},_onMouseDown:function(e){this._mousePos=e.pos(),this._isPlayerDown=!0},_onMouseMove:function(e){this._isPlayerDown&&(this._isPlayerMove=!0,e.stop(),this._playerPosGap={posX:this._mousePos.clientX-e.pos().clientX,posY:this._mousePos.clientY-e.pos().clientY},this._setPos())},_onMouseUp:function(e){this._isPlayerDown&&this._isPlayerMove&&(e.stop(),this._nowPos={posX:this._tmpPos.posX,posY:this._tmpPos.posY},this._playerPosGap={posX:0,posY:0},this._setPosCookies()),this._isPlayerDown=this._isPlayerMove=!1},_setPosCookies:function(){this._oCookie.set("EndPlayer_PosX",""+this._nowPos.posX),this._oCookie.set("EndPlayer_PosY",""+this._nowPos.posY)},_setPos:function(){this._playerPosGap.posX&&0!=this._playerPosGap.posX&&(this._tmpPos={posX:this._nowPos.posX+this._playerPosGap.posX<0?0:this._nowPos.posX+this._playerPosGap.posX,posY:this._nowPos.posY+this._playerPosGap.posY<0?0:this._nowPos.posY+this._playerPosGap.posY});var sumPlayer={width:this._browserSize.width-this._playerSize.width-this._closeBtnSize,height:this._browserSize.height-this._headerHeight-this._playerSize.height};this._tmpPos={posX:this._tmpPos.posX>sumPlayer.width||this._tmpPos.posX<0?sumPlayer.width:this._tmpPos.posX,posY:this._tmpPos.posY>sumPlayer.height||this._tmpPos.posY<0?sumPlayer.height:this._tmpPos.posY},this._videoArea.css({position:"fixed",right:this._tmpPos.posX,bottom:this._tmpPos.posY,zIndex:3001,paddingRight:"29px",background:"none",width:this._playerSize.width+"px",height:this._playerSize.height+"px",opacity:1})},_hideUiPlayer:function(){this._isFixed&&(this.rmcPlayer.toggleIconDisplay?(this.rmcPlayer.toggleIconDisplay("expand",!1),this.rmcPlayer.toggleIconDisplay("resolution",!1),this._hideFlag=!0,this.rmcPlayer.updateLayout()):"flash"==this.rmcPlayer.playerType&&this._playerEl&&this._playerEl.hideUi&&(this._playerEl.hideUi("expand",!1),this._playerEl.hideUi("resolution",!1),this._hideFlag=!0),this._hideInterval&&this._hideFlag&&(clearInterval(this._hideInterval),this._hideInterval=0))},_closeMiniPlayer:function(){this._videoArea.detach({mousedown:this._htEvent.mouseDown,mousemove:this._htEvent.mouseMove,mouseup:this._htEvent.mouseUp}),jindo.$Element(window).detach("resize",this._htEvent.resize),this._clipInfo&&this._clipInfo.css("marginTop",""),this._pipCloseBtn&&this._pipCloseBtn.hide(),this._videoArea.css({position:"",right:"",bottom:"",paddingRight:"",zIndex:"",width:"",height:"",left:"",background:"#000"}),this._playerArea.css({height:"",backgroundColor:""})},getRmcPlayer:function(){return!!this.isAuth&&this.rmcPlayer},setChangeInfo:function(){this._clipInfo=null,this._isCloseByBtn=!1,this._isFixed=!1,this._clipEndDa=null},moveNextClip:function(){tvcast.pc.ClipEnd&&tvcast.pc.ClipEnd.moveNextClip()},moveCurrentClip:function(){tvcast.pc.ClipEnd&&tvcast.pc.ClipEnd.otherClipPlayInfo()},callbackHandler:function(sCallbackType,pid,id,data){var playTypeCookie="",autoPlayFlag=!1,oPlaybackOrderController=null;if(tvcast.pc.ClipEnd&&tvcast.pc.ClipEnd.getClipEndPlaylist()&&tvcast.pc.ClipEnd.getClipEndPlaylist().getPlaybackOrderController()&&(oPlaybackOrderController=tvcast.pc.ClipEnd.getClipEndPlaylist().getPlaybackOrderController()||null),oPlaybackOrderController){if("ad_complete"===sCallbackType)if(playTypeCookie=oPlaybackOrderController.getCurrentType().sCookie,oPlaybackOrderController.isRepeat()&&jindo.$Cookie().set("NTC_BEFORE_CLIP",ghtEnv.nClipNo,0),(autoPlayFlag=arguments&&id)&&playTypeCookie==oPlaybackOrderController.TYPE.REPEAT_PLAYLIST.sCookie){var cnt=parseInt(jindo.$Cookie().get("AUTOCNT")||0,10)+1;jindo.$Cookie().set("AUTOCNT",cnt,0),this.moveNextClip()}else if(autoPlayFlag&&playTypeCookie==oPlaybackOrderController.TYPE.REPEAT_CLIP.sCookie){cnt=parseInt(jindo.$Cookie().get("AUTOCNT")||0,10)+1;jindo.$Cookie().set("AUTOCNT",cnt,0),this.moveCurrentClip()}else oPlaybackOrderController.movePage();if("beginfullscreen"==sCallbackType&&(window.ghtEnv&&(window.ghtEnv.beginFullscreen=!0,this._enterFullScreenAtClipNo=window.ghtEnv.nClipNo),this.rmcPlayer.toggleIconDisplay&&(this.rmcPlayer.toggleIconDisplay("resolution",!0),this.rmcPlayer.updateLayout())),"replay"===sCallbackType&&(oPlaybackOrderController.increasePlayCountCookie(),oPlaybackOrderController.moveCurrentPage()),"nclick"==sCallbackType&&(data&&/fullscreen$/.test(data)?this._isEndFullscreen=!0:this._isEndFullscreen=!1,data&&clickcr&&clickcr("",data,"","","")),"endfullscreen"===sCallbackType){if(window.ghtEnv.beginFullscreen=!1,this._isEndFullscreen=!1,window.scrollTo(0,1),this._enterFullScreenAtClipNo==window.ghtEnv.nClipNo)return;if(arguments&&data){try{var timeMilli=parseInt(((new Date).getTime()-nGapTime)/1e3,10);window.localStorage.setItem("contInfo",data),window.localStorage.setItem("searchTime",timeMilli)}catch(e){}var moveToOhterClipParam={clipNo:window.ghtEnv.nClipNo,playlistNo:window.ghtEnv.nPlaylistNo};"SEARCHED_CLIPS"==window.ghtEnv.sPlaylistType&&-1==window.ghtEnv.nPlaylistNo&&window.ghtEnv.sQuery&&window.ghtEnv.sPlClips&&(moveToOhterClipParam.ajaxParam={plClips:window.ghtEnv.sPlClips,query:window.ghtEnv.sQuery}),tvcast.pc.ClipEnd.moveToOtherClip(moveToOhterClipParam)}this._hideUiPlayer()}"complete"===sCallbackType&&tvcast.PlayLogger.logCompletePlay(),"first_play"!==sCallbackType&&"firstPlay"!==sCallbackType||tvcast.pc.PlayTimeLogger.clearInterval(),"connect"!==sCallbackType&&"content_loadstart"!==sCallbackType||(tvcast.PlayLogger.logStartPlay(),tvcast.pc.PlayTimeLogger.logPlayTime({apiDomain:window.ghtEnv.logApiDomain,rmcPlayer:void 0!==window.WrapPlayer?window.WrapPlayer.rmcPlayer:null,clipNo:window.ghtEnv.nClipNo,playlistNo:window.ghtEnv.nPlaylistNo}),1==ghtEnv.bIsLogin&&MyPage.addMyPlaylist(this._options.serviceDomain,"recent",window.ghtEnv.nClipNo)),"play"===sCallbackType&&tvcast.Comment.isClickedTimestamp()&&(this.getRmcPlayer().currentTime(tvcast.Comment.getTimestamp()),tvcast.Comment.initTimestampFlags()),"ad_loadstart"===sCallbackType&&tvcast.Comment.isClickedTimestamp()&&tvcast.pc.ClipEnd.showTimestampNoticeLayer()}}};