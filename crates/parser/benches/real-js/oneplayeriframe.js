var MsOnePlayer;(function(n){function i(n,i,r){var u=new t(document.getElementById(n),i);u.onPlayerReady(r)}n.render=i;var t=function(){function n(t,i){var r=this,u;(this.playerDiv=t,this.playerData=i,this.playerReady=!1,this.onPlayerReadyCallbacks=[],this.playerEventListeners=[],this.onMessageReceived=function(t){if(t&&t.data&&t.origin===n.iframeOrigin)try{var i=JSON.parse(t.data);if(!i||i.playerId!==r.playerId)return;i.data&&(r.playPosition=i.data);switch(i.eventName.toLowerCase()){case"playerready":r.playerReady=!0;r.doCallback(r.onPlayerReadyCallbacks,r);break;case"postjsllmessage":r.sendTelemetyData(i.data)}r.doCallback(r.playerEventListeners,{name:i.eventName})}catch(u){}},t&&i&&i.metadata&&i.metadata.videoId)&&(n.iframeOrigin[0]==="%"&&(n.iframeOrigin=n.iframeOriginDefault),n.siteName[0]==="%"&&(n.siteName=n.defaultSiteName),this.playerReady=!1,n.playerCount++,u=t.id||"player"+n.playerCount,this.playerId=u+"-oneplayer",this.createPlayer(),this.getCurrentTime=function(){return r.playPosition&&r.playPosition.currentTime||0},this.getDuration=this.getVideoDuration=function(){return r.playPosition&&r.playPosition.endTime-r.playPosition.startTime||0})}return n.prototype.getPlayPosition=function(){return this.playPosition},n.prototype.createPlayer=function(){var r=n.iframeOrigin,i,u,f,t;document.location.href.indexOf("/client/")>0&&document.location.href.indexOf("support.office")>=0&&(r+="/client");this.playerData&&this.playerData.options&&this.playerData.options.market&&(r+="/"+this.playerData.options.market);r+="/"+n.siteName+n.iframeUrlRight+this.playerData.metadata.videoId;i=this.playerData.options;u=this.getQueryParams(i);u&&u.length>0&&(r+="?"+u);f=document.getElementById(this.playerId);f&&f.parentElement.removeChild(f);t=document.createElement("iframe");t.id=this.playerId;t.src=r;t.setAttribute("class",n.iframeClass);t.setAttribute("allowfullscreen","true");t.setAttribute("frameborder","0");t.style.height="100%";t.style.width="100%";t.setAttribute("name","Oneplayer iframe");this.playerData.metadata!=null&&this.playerData.metadata.title!=null&&t.setAttribute("title",this.playerData.metadata.title);i&&(i.height&&(t.height=i.height),i.width&&(t.width=i.width));this.iframeElement=t;this.playerDiv.appendChild(this.iframeElement);this.addEvent(window,"message",this.onMessageReceived)},n.prototype.addEvent=function(n,t,i){n.addEventListener?n.addEventListener(t,i,!1):n.attachEvent&&n.attachEvent("on"+t,i)},n.prototype.doCallback=function(n,t){var i,r,u;if(n)for(i=0,r=n;i<r.length;i++)u=r[i],u&&u(t)},n.prototype.sendPostMessage=function(n,t){if(this.iframeElement){var i={eventName:n,data:t,playerId:this.playerId};this.iframeElement.contentWindow.postMessage(JSON.stringify(i),"*")}},n.prototype.getQueryParams=function(n){var t=[],r,i;t.push("pid="+this.playerId);t.push("jsapi=true");r=window;r.awa&&r.awa.ct&&t.push("postJsllMsg=true");for(i in n)n.hasOwnProperty(i)&&typeof n[i]!="object"&&t.push(i+"="+n[i]);return t.join("&")},n.prototype.isPlayerReady=function(){return this.playerReady},n.prototype.play=function(){this.sendPostMessage("play")},n.prototype.pause=function(){this.sendPostMessage("pause")},n.prototype.mute=function(n){this.sendPostMessage(n!==undefined&&!n?"unmute":"mute")},n.prototype.unmute=function(){this.sendPostMessage("unmute")},n.prototype.seek=function(n){this.sendPostMessage("seek",n)},n.prototype.enterFullScreen=function(){this.sendPostMessage("enterFullScreen")},n.prototype.exitFullScreen=function(){this.sendPostMessage("exitFullScreen")},n.prototype.updatePlayerSource=function(n){this.sendPostMessage("updatePlayerSource",n)},n.prototype.getCurrentTech=function(){return null},n.prototype.getCurrentType=function(){return null},n.prototype.onMediaDataLoaded=function(){},n.prototype.onPlayerReady=function(n){this.onPlayerReadyCallbacks.push(n)},n.prototype.sendTelemetyData=function(n){var t=window;t.awa&&t.awa.ct&&t.awa.ct.captureContentPageAction(n)},n.prototype.addPlayerEventListener=function(n){n&&this.playerEventListeners.push(n)},n.prototype.removePlayerEventListener=function(n){var t=this.playerEventListeners.indexOf(n);t>=0&&this.playerEventListeners.splice(t,1)},n.iframeClass="oneplayer-iframe",n.iframeOrigin="https://www.microsoft.com",n.iframeOriginDefault="https://www.microsoft.com",n.siteName="videoplayer",n.defaultSiteName="videoplayer",n.iframeUrlRight="/embed/",n.playerCount=0,n}();n.OnePlayer=t})(MsOnePlayer||(MsOnePlayer={}))