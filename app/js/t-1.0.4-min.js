/*
汤臣倍健股份有限公司 版权所有 2015
Build Time: December 10, 2015 11:44:57
*/
(function(p,h){var C=[],d="",F=false,b=false,y=false,A="http://qywx.by-health.com/MobileAppAdmin",v=null,G=null,f=null,k=false,B=false,e=null,l=null,o=false,w=false,q="数据请求中...",n="",E="100",r=false;function D(H){s(t.locationHash.getLocationHashValue("curPageId"))}function s(J){var M=C.length,H="",K=0;if(J!==h&&J!==""&&J!==null&&M>0){var I=[],L=false;for(K=0;K<M;K++){I[K]=C[K];if(C[K]===J){L=true;break}}if(L){if(M>1){H="Right";C=I;if(J==="ctCore_tips_page"){wx.closeWindow()}}}else{H="Left";C.push(J)}if(d!==J){if(b){c(d,J,H)}else{$("#"+d).addClass("ct-hidden");$("#"+J).removeClass("ct-hidden")}d=J}}else{wx.closeWindow()}}function u(J,I,H){if(J===h||J===null||J===""){if(F){alert("在"+H+"方法中缺少参数"+I)}console.error("在"+H+"方法中缺少参数"+I);return false}return true}function c(I,H,K){var J=K||"Left";J="slide"+J;if(J==="slideLeft"){$("#"+H).addClass("ct-core-anmiTopPage");$("#"+I).addClass("ct-core-anmiBelowPage")}else{$("#"+I).addClass("ct-core-anmiTopPage");$("#"+H).addClass("ct-core-anmiBelowPage")}$("#"+H).removeClass("ct-hidden").addClass("ct-core-"+J+"In");$("#"+I).addClass("ct-core-"+J+"Out");i(function(){$("#"+I).addClass("ct-hidden").removeClass("ct-core-"+J+"Out").removeClass("ct-core-anmiTopPage").removeClass("ct-core-anmiBelowPage");$("#"+H).removeClass("ct-core-"+J+"In").removeClass("ct-core-anmiTopPage").removeClass("ct-core-anmiBelowPage")},250)}function g(){var H="";H+='<div id="ctCore_tips_page" class="ct-hidden">';H+='	<div id="ctCore_translucent_layer" class="ct-core-translucentLayer ct-hidden"></div>';H+='  	<div id="ctCore_loader" class="ct-core-loader ct-hidden">';H+="  		<div>";H+='  			<div class="ct-core-loadOverlay"></div>';H+='  			<span id="ctCore_loader_text">'+q+"</span>";H+="  		</div>";H+="  	</div>";H+='  	<div id="ctCore_pop_message" class="ct-core-popTips ct-hidden">';H+="  		<div>";H+=' 			<div id="ctCore_pop_tips">出错啦!</div>';H+=' 			<div id="ctCore_popTips_btn">确认</div>';H+=" 		</div>";H+="  	</div>";H+='  	<div id="ctCore_confirm_box" class="ct-core-confirmBox ct-hidden">';H+="  		<div>";H+=' 			<div id="ctCore_confrimBox_tips"></div>';H+=" 			<div>";H+=' 				 <span class="ct-core-confirmBoxCancelBtn">取消</span>';H+=' 				 <span class="ct-core-confirmBoxConfirmBtn">确认</span>';H+=" 			</div>";H+=" 		</div>";H+="  	</div>";H+="</div>";$("body").append(H);z();x()}function z(){$("#ctCore_popTips_btn").on("click",function(H){$("#ctCore_pop_message").addClass("ct-hidden");t.hideTranslucentLayer();if(v!==h&&(typeof v==="function")){v()}v=null})}function j(){$(".ct-core-canBePressed").on({touchstart:function(){$(this).addClass("ct-core-pressed")},touchend:function(){$(this).removeClass("ct-core-pressed")}})}function x(){$(".ct-core-confirmBoxConfirmBtn").on("click",function(H){$("#ctCore_confirm_box").addClass("ct-hidden");t.hideTranslucentLayer();if(G!==h&&(typeof G==="function")){G()}G=null;f=null});$(".ct-core-confirmBoxCancelBtn").on("click",function(H){$("#ctCore_confirm_box").addClass("ct-hidden");t.hideTranslucentLayer();if(f!==h&&(typeof f==="function")){f()}G=null;f=null})}function i(I,H){setTimeout(I,H)}function m(){}m.prototype={init:function(J){var H=J.pageId,I=0;A=J.baseURL||A;F=J.isDevMode||F;b=J.isPageTransition||b;y=J.showErrorCode||y;k=J.needAppIdEveryRequest||k;B=J.needOpenIdEveryRequest||B;o=J.isHideOptionMenu||o;w=J.isNeedWeChatShare||w;q=J.loaderText||q;r=J.isActivityApp||r;if(J.redirectErrorCode&&$.trim(J.redirectErrorCode)!==""){E=$.trim(J.redirectErrorCode)}if(J.redirectURL&&$.trim(J.redirectURL)!==""){n=$.trim(J.redirectURL)}if(!u(H,"pageId","t.init")){return}if($("#ctCore_tips_page").length===0){g()}else{z();x()}if(k){e=t.locationHash.getLocationHashValue("appId");if(!u(e,"appId","t.init")){e=t.cookie("appId");if(e===""){return}}else{t.cookie("appId",e)}a.weChatConfig.pubAppId=t.getAppId()}else{a.weChatConfig.pubAppId=J.pubAppId||""}if(B){l=t.locationHash.getLocationHashValue("openId");if(!u(l,"openId","t.init")){l=t.cookie("openId");if(l===""){return}}else{t.cookie("openId",l)}}t.locationHash.removeLocationHashKey("appId");t.locationHash.removeLocationHashKey("openId");var K=$("body > div"),L=K.length;for(I=0;I<L;I++){$(K[I]).addClass("ct-hidden")}j();p.addEventListener("hashchange",D);d=H;C=[];C.push(d);$("#"+d).removeClass("ct-hidden");t.go(H);if(o||w){t.resetWeChatJSSDKConfig(J)}},getVersion:function(){return"1.0.4"},getCurrentPageId:function(){return d},getAppId:function(){return e},getOpenId:function(){return l},resetIndexPageId:function(I){if(!u(I,"pageId","t.resetIndexPageId")){return}var H=C[0];d=I;C=[];C.push(H);$("#"+d).removeClass("ct-hidden");t.go(I)},go:function(I){var K=false,J=0,H=C.length;if(!u(I,"pageId","t.go")){return}for(;J<H;J++){if(C[J]===I){K=true;break}}if(K&&H>1){if(t.getCurrentPageId()!==I){t.back(I)}return}t.locationHash.addLocationHashKey("curPageId",I);if(o){wx.hideOptionMenu()}},back:function(J){var K=0,H=0;if(J!==h&&J!==""&&J!==null){var I=-1;for(K=0,H=C.length;K<H;K++){if(C[K]===J){I=K}}I=I+1-H;p.history.go(I);return}var L=C.length;if((J===h||J!=="")&&L>1){p.history.go(-1)}},showMessage:function(I,H){if(H&&H==="success"){$("#ctCore_pop_tips").removeClass("ct-core-error").addClass("ct-core-success").html(I)}else{if(H&&H==="error"){$("#ctCore_pop_tips").removeClass("ct-core-success").addClass("ct-core-error").html(I)}else{$("#ctCore_pop_tips").removeClass("ct-core-success").removeClass("ct-core-error").html(I);if(H!==h&&(typeof H==="function")){v=H}}}t.showTranslucentLayer();$("#ctCore_pop_message").removeClass("ct-hidden")},showConfirmBox:function(I,J,H){t.showTranslucentLayer();$("#ctCore_confrimBox_tips").html(I);$("#ctCore_confirm_box").removeClass("ct-hidden");if(J!==h&&(typeof J==="function")){G=J}if(H!==h&&(typeof H==="function")){f=H}},hideTranslucentLayer:function(){if($("#ctCore_loader").hasClass("ct-hidden")&&$("#ctCore_pop_message").hasClass("ct-hidden")&&$("#ctCore_confirm_box").hasClass("ct-hidden")){$("#ctCore_translucent_layer").addClass("ct-hidden");$("#ctCore_tips_page").addClass("ct-hidden")}},showTranslucentLayer:function(){$("#ctCore_tips_page").removeClass("ct-hidden");$("#ctCore_translucent_layer").removeClass("ct-hidden")},hideLoader:function(){$("#ctCore_loader").addClass("ct-hidden");t.hideTranslucentLayer()},showLoader:function(I){var J=30000,H=$("#ctCore_loader_text");if(I){if(I.timeout){J=I.timeout}if(I.loaderText){H.text(I.loaderText)}}else{if(q!==H.text()){H.text(q)}}t.showTranslucentLayer();if($("#ctCore_pop_message").hasClass("ct-hidden")&&$("#ctCore_confirm_box").hasClass("ct-hidden")){$("#ctCore_loader").removeClass("ct-hidden")}i(function(){if(!$("#ctCore_loader").hasClass("ct-hidden")){t.hideLoader()}},J)},getBaseURL:function(){return A},ajax:function(I,H,O,N){var K=I.type||"GET",L="",M=I.data||{},J=I.timeout||30000;K=K.toUpperCase();if(I.isDecodeURIComponent===false){L=I.url}else{L=decodeURIComponent(I.url)}if(!u(L,"url","t.ajax")){return}if(k){M.appId=e}if(B){M.openId=l}if(L.match(/^http/i)!="http"){L=t.getBaseURL()+L}if(K==="GET"){if(L.indexOf("?")===-1){L+="?"}L+="&_random="+new Date().getTime()}if(I.isShowLoader===h||I.isShowLoader){if(I.loaderText){t.showLoader({loaderText:I.loaderText})}else{t.showLoader()}}$.ajax({type:K,url:L,data:M,timeout:J,success:function(P){if(typeof P!=="object"){P=$.parseJSON(P)}if(F){console.log("\n\n url=="+L);console.log("ajax opt");console.log(I);console.log("success response data==");console.log(P)}if(I.isShowLoader===h||I.isShowLoader){t.hideLoader()}if(P.errorCode===E&&n===""){p.location.replace(P.returnObject);return}else{if(P.errorCode===E&&n!==""){p.location.replace(n);return}}if(H!==h&&(typeof H==="function")&&P.errorCode!==h&&P.errorCode==="00"){H(P)}else{if(H!==h&&(typeof H==="function")&&I.handleError!==h&&I.handleError){H(P)}else{if(y){t.showMessage(P.errorMessage+" ("+P.errorCode+")")}else{t.showMessage(P.errorMessage)}}}},error:function(P,R,Q){if(I.isShowLoader===h||I.isShowLoader){t.hideLoader()}if(O!==h&&(typeof O==="function")){O(P,R,Q)}else{if(!r&&!I.ignoreError){t.showMessage("抱歉，服务器繁忙。<br/>请稍后再试。("+P.status+")")}}},complete:function(P,Q){if(N!==h&&(typeof N==="function")){N(P,Q)}}})},ajaxMultipleGet:function(J,M,T){var K=0,S=J.urlArray.length,I=[],O=false,H=[],N=[],Q=J.timeout||30000,L={};if(k){L.appId=e}if(B){L.openId=l}for(;K<S;K++){N[K]=J.urlArray[K];if(!u(N[K],"url","t.ajaxMultipleGet")){return}if(N[K].match(/^http/i)!="http"){N[K]=t.getBaseURL()+N[K]}if(N[K].indexOf("?")===-1){N[K]+="?"}N[K]+="&_random="+new Date().getTime()}if(J.isShowLoader===h||J.isShowLoader){if(J.loaderText){t.showLoader({loaderText:J.loaderText})}else{t.showLoader()}}function P(){var V="抱歉，服务器繁忙。<br/>请稍后再试。( ",W=0,U=0;if(r||J.ignoreError){return}for(W=0,U=H.length;W<U;W++){V+=H[W].status+" "}V+=")";t.showMessage(V)}function R(){var V=true,U=0;for(U=0;U<S;U++){if(!H[U]){V=false;break}}return V}K=0;for(;K<S;K++){(function(U){$.ajax({type:"GET",url:N[U],timeout:Q,data:L,success:function(V){if(typeof V!=="object"){V=$.parseJSON(V)}if(V.errorCode===E&&n===""){p.location.replace(V.returnObject);return}else{if(V.errorCode===E&&n!==""){p.location.replace(n);return}}I[U]=V;H[U]={status:"200"};if(R()){if(J.isShowLoader===h||J.isShowLoader){t.hideLoader()}if(O){if(T!==h&&(typeof T==="function")){T()}else{if(!r&&!J.ignoreError){P()}}}else{if(F){console.log("\najaxMultipleGet url array==");console.log(N);console.log("response data array==");console.log(I)}M(I)}}},error:function(V,X,W){O=true;H[U]={status:V.status};if(R()){if(J.isShowLoader===h||J.isShowLoader){t.hideLoader()}if(T!==h&&(typeof T==="function")){T()}else{if(!r&&!J.ignoreError){P()}}}}})})(K)}},locationHash:{isLocationHashEmpty:function(){var H=p.location.hash;if(H===""){return true}return false},getLocationHashWithoutKey:function(J){var I=decodeURIComponent(p.location.hash).substring(1),M=I.split("&"),N=[],L="",K=0,H=M.length;for(;K<H;K++){N=M[K].split("=");if(N[0]!==J){L+="&"+N[0]+"="+N[1]}}return L.substring(1)},checkLocationHashKeyExist:function(K){var J=decodeURIComponent(p.location.hash).substring(1),M=J.split("&"),N=[],I=false,L=0,H=M.length;for(;L<H;L++){N=M[L].split("=");if(N[0]===K){I=true;break}}return I},addLocationHashKey:function(I,J){var H=decodeURIComponent(p.location.hash);if(t.locationHash.checkLocationHashKeyExist(I)){t.locationHash.updateLocationHashKey(I,J)}else{if(t.locationHash.isLocationHashEmpty()){H=I+"="+J}else{H+="&"+I+"="+J}p.location.hash=H}},removeLocationHashKey:function(H){if(t.locationHash.checkLocationHashKeyExist(H)){p.location.hash=t.locationHash.getLocationHashWithoutKey(H)}},getLocationHashValue:function(J){var I=decodeURIComponent(p.location.hash).substring(1),M=I.split("&"),N=[],L=null,K=0,H=M.length;for(;K<H;K++){N=M[K].split("=");if(N[0]===J){L=N[1];break}}return L},updateLocationHashKey:function(H,I){if(t.locationHash.checkLocationHashKeyExist(H)){if(t.locationHash.getLocationHashWithoutKey(H)===""){p.location.hash=H+"="+I}else{p.location.hash=t.locationHash.getLocationHashWithoutKey(H)+"&"+H+"="+I}}else{t.locationHash.addLocationHashKey(H,I)}}},cookie:function(I,P,S){if(typeof P!="undefined"){S=S||{};if(P===null){P="";S.expires=-1}var L="";if(S.expires&&(typeof S.expires=="number"||S.expires.toUTCString)){var M;if(typeof S.expires=="number"){M=new Date();M.setTime(M.getTime()+(S.expires*24*60*60*1000))}else{M=S.expires}L=";expires="+M.toUTCString()}var R=S.path?";path="+S.path:";path=/";var N=S.domain?";domain="+S.domain:"";var H=S.secure?";secure":"";document.cookie=[I,"=",encodeURIComponent(P),L,R,N,H].join("")}else{var K="";if(document.cookie&&document.cookie!=""){var Q=document.cookie.split(";");for(var O=0;O<Q.length;O++){var J=jQuery.trim(Q[O]);if(J.substring(0,I.length+1)==(I+"=")){K=decodeURIComponent(J.substring(I.length+1));break}}}return K}},getQueryString:function(H){if(!u(H,"name","t.getQueryString")){return}var I=new RegExp("(^|&)"+H+"=([^&]*)(&|$)","i");var J=p.location.search.substr(1).match(I);if(J!==null){return(J[2])}return null},resetWeChatJSSDKConfig:function(H){if(a.weChatConfig.shareTitle===""){a.weChatConfig.shareTitle=H.shareTitle||document.title}else{a.weChatConfig.shareTitle=H.shareTitle||a.weChatConfig.shareTitle}if(a.weChatConfig.shareDesc===""){a.weChatConfig.shareDesc=H.shareDesc||document.title}else{a.weChatConfig.shareDesc=H.shareDesc||a.weChatConfig.shareDesc}if(a.weChatConfig.shareImgUrl===""){a.weChatConfig.shareImgUrl=H.shareImgUrl||""}else{a.weChatConfig.shareImgUrl=H.shareImgUrl||a.weChatConfig.shareImgUrl}if(a.weChatConfig.shareLink===""){a.weChatConfig.shareLink=H.shareLink||""}else{a.weChatConfig.shareLink=H.shareLink||a.weChatConfig.shareLink}a.weChatSDK.initWeChat()}};if(typeof p.t==="undefined"){p.t=new m()}var a={weChatConfig:{pubAppId:"",timestamp:"",nonceStr:"",signature:"",url:"",shareTitle:"",shareDesc:"",shareImgUrl:"",shareLink:"",},weChatSDK:{initWeChat:function(){var I=0;a.weChatConfig.timestamp=new Date().getTime().toString().substr(0,10);var H="ABCDEfghijk";var J="";for(I=0;I<16;I++){J+=H.charAt(Math.round(Math.random()*10))}a.weChatConfig.nonceStr=J,a.weChatConfig.url=location.href.split("#")[0];a.weChatConfig.url=encodeURIComponent(decodeURIComponent(a.weChatConfig.url));if(a.weChatConfig.shareLink===""){if(location.href.indexOf("#")===-1){a.weChatConfig.shareLink=location.href+"#appId="+a.weChatConfig.pubAppId}else{a.weChatConfig.shareLink=location.href+"&appId="+a.weChatConfig.pubAppId}}else{if(a.weChatConfig.shareLink.indexOf("#")===-1){a.weChatConfig.shareLink+="#appId="+a.weChatConfig.pubAppId}else{a.weChatConfig.shareLink+="&appId="+a.weChatConfig.pubAppId}}a.weChatSDK.querySignature()},querySignature:function(){var H="/wechatApi/getJsTicketAndSignature?noncestr="+a.weChatConfig.nonceStr+"&timestamp="+a.weChatConfig.timestamp+"&url="+a.weChatConfig.url;if(!k){H+="&appId="+a.weChatConfig.pubAppId}var I={type:"GET",ignoreError:true,isShowLoader:false,isDecodeURIComponent:false,url:H};t.ajax(I,function(J){a.weChatConfig.signature=J.returnObject.signature;a.weChatSDK.weChatConfigShare()})},weChatConfigShare:function(){wx.config({debug:false,appId:a.weChatConfig.pubAppId,timestamp:a.weChatConfig.timestamp,nonceStr:a.weChatConfig.nonceStr,signature:a.weChatConfig.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","hideOptionMenu","closeWindow","previewImage"]});wx.ready(function(){if(o){wx.hideOptionMenu()}wx.onMenuShareAppMessage({title:a.weChatConfig.shareTitle,desc:a.weChatConfig.shareDesc,link:a.weChatConfig.shareLink,imgUrl:a.weChatConfig.shareImgUrl,type:"link",dataUrl:"",success:function(){},cancel:function(){}});wx.onMenuShareTimeline({title:a.weChatConfig.shareTitle,link:a.weChatConfig.shareLink,imgUrl:a.weChatConfig.shareImgUrl,success:function(){},cancel:function(){}})});wx.error(function(H){})}}}})(window);