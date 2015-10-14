!function(a,b){"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b(a)}):b(a,!0)}(this,function(a,b){function c(b,c,d){a.WeixinJSBridge?WeixinJSBridge.invoke(b,e(c),function(a){g(b,a,d)}):j(b,d)}function d(b,c,d){a.WeixinJSBridge?WeixinJSBridge.on(b,function(a){d&&d.trigger&&d.trigger(a),g(b,a,c)}):d?j(b,d):j(b,c)}function e(a){return a=a||{},a.appId=z.appId,a.verifyAppId=z.appId,a.verifySignType="sha1",a.verifyTimestamp=z.timestamp+"",a.verifyNonceStr=z.nonceStr,a.verifySignature=z.signature,a}function f(a){return{timeStamp:a.timestamp+"",nonceStr:a.nonceStr,"package":a.package,paySign:a.paySign,signType:a.signType||"SHA1"}}function g(a,b,c){var d,e,f;switch(delete b.err_code,delete b.err_desc,delete b.err_detail,d=b.errMsg,d||(d=b.err_msg,delete b.err_msg,d=h(a,d,c),b.errMsg=d),c=c||{},c._complete&&(c._complete(b),delete c._complete),d=b.errMsg||"",z.debug&&!c.isInnerInvoke&&alert(JSON.stringify(b)),e=d.indexOf(":"),f=d.substring(e+1)){case"ok":c.success&&c.success(b);break;case"cancel":c.cancel&&c.cancel(b);break;default:c.fail&&c.fail(b)}c.complete&&c.complete(b)}function h(a,b){var d,e,f,g;if(b){switch(d=b.indexOf(":"),a){case o.config:e="config";break;case o.openProductSpecificView:e="openProductSpecificView";break;default:e=b.substring(0,d),e=e.replace(/_/g," "),e=e.replace(/\b\w+\b/g,function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}),e=e.substring(0,1).toLowerCase()+e.substring(1),e=e.replace(/ /g,""),-1!=e.indexOf("Wcpay")&&(e=e.replace("Wcpay","WCPay")),f=p[e],f&&(e=f)}g=b.substring(d+1),"confirm"==g&&(g="ok"),"failed"==g&&(g="fail"),-1!=g.indexOf("failed_")&&(g=g.substring(7)),-1!=g.indexOf("fail_")&&(g=g.substring(5)),g=g.replace(/_/g," "),g=g.toLowerCase(),("access denied"==g||"no permission to execute"==g)&&(g="permission denied"),"config"==e&&"function not exist"==g&&(g="ok"),b=e+":"+g}return b}function i(a){var b,c,d,e;if(a){for(b=0,c=a.length;c>b;++b)d=a[b],e=o[d],e&&(a[b]=e);return a}}function j(a,b){if(z.debug&&!b.isInnerInvoke){var c=p[a];c&&(a=c),b&&b._complete&&delete b._complete,console.log('"'+a+'",',b||"")}}function k(){if(!("6.0.2">w||y.systemType<0)){var b=new Image;y.appId=z.appId,y.initTime=x.initEndTime-x.initStartTime,y.preVerifyTime=x.preVerifyEndTime-x.preVerifyStartTime,C.getNetworkType({isInnerInvoke:!0,success:function(a){y.networkType=a.networkType;var c="https://open.weixin.qq.com/sdk/report?v="+y.version+"&o="+y.isPreVerifyOk+"&s="+y.systemType+"&c="+y.clientVersion+"&a="+y.appId+"&n="+y.networkType+"&i="+y.initTime+"&p="+y.preVerifyTime+"&u="+y.url;b.src=c}})}}function l(){return(new Date).getTime()}function m(b){t&&(a.WeixinJSBridge?b():q.addEventListener&&q.addEventListener("WeixinJSBridgeReady",b,!1))}function n(){C.invoke||(C.invoke=function(b,c,d){a.WeixinJSBridge&&WeixinJSBridge.invoke(b,e(c),d)},C.on=function(b,c){a.WeixinJSBridge&&WeixinJSBridge.on(b,c)})}var o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;if(!a.jWeixin)return o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest"},p=function(){var b,a={};for(b in o)a[o[b]]=b;return a}(),q=a.document,r=q.title,s=navigator.userAgent.toLowerCase(),t=-1!=s.indexOf("micromessenger"),u=-1!=s.indexOf("android"),v=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),w=function(){var a=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/);return a?a[1]:""}(),x={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},y={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:v?1:u?2:-1,clientVersion:w,url:encodeURIComponent(location.href)},z={},A={_completes:[]},B={state:0,res:{}},m(function(){x.initEndTime=l()}),C={config:function(a){z=a,j("config",a),m(function(){c(o.config,{verifyJsApiList:i(z.jsApiList)},function(){A._complete=function(a){x.preVerifyEndTime=l(),B.state=1,B.res=a},A.success=function(){y.isPreVerifyOk=0},A.fail=function(a){A._fail?A._fail(a):B.state=-1};var a=A._completes;return a.push(function(){z.debug||k()}),A.complete=function(b){for(var c=0,d=a.length;d>c;++c)a[c](b);A._completes=[]},A}()),x.preVerifyStartTime=l()}),z.beta&&n()},ready:function(a){0!=B.state?a():(A._completes.push(a),!t&&z.debug&&a())},error:function(a){"6.0.2">w||(-1==B.state?a(B.res):A._fail=a)},checkJsApi:function(a){var b=function(a){var c,d,b=a.checkResult;for(c in b)d=p[c],d&&(b[d]=b[c],delete b[c]);return a};c("checkJsApi",{jsApiList:i(a.jsApiList)},function(){return a._complete=function(a){if(u){var c=a.checkResult;c&&(a.checkResult=JSON.parse(c))}a=b(a)},a}())},onMenuShareTimeline:function(a){d(o.onMenuShareTimeline,{complete:function(){c("shareTimeline",{title:a.title||r,desc:a.title||r,img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareAppMessage:function(a){d(o.onMenuShareAppMessage,{complete:function(){c("sendAppMessage",{title:a.title||r,desc:a.desc||"",link:a.link||location.href,img_url:a.imgUrl,type:a.type||"link",data_url:a.dataUrl||""},a)}},a)},onMenuShareQQ:function(a){d(o.onMenuShareQQ,{complete:function(){c("shareQQ",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},onMenuShareWeibo:function(a){d(o.onMenuShareWeibo,{complete:function(){c("shareWeiboApp",{title:a.title||r,desc:a.desc||"",img_url:a.imgUrl,link:a.link||location.href},a)}},a)},startRecord:function(a){c("startRecord",{},a)},stopRecord:function(a){c("stopRecord",{},a)},onVoiceRecordEnd:function(a){d("onVoiceRecordEnd",a)},playVoice:function(a){c("playVoice",{localId:a.localId},a)},pauseVoice:function(a){c("pauseVoice",{localId:a.localId},a)},stopVoice:function(a){c("stopVoice",{localId:a.localId},a)},onVoicePlayEnd:function(a){d("onVoicePlayEnd",a)},uploadVoice:function(a){c("uploadVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadVoice:function(a){c("downloadVoice",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},translateVoice:function(a){c("translateVoice",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},chooseImage:function(a){c("chooseImage",{scene:"1|2",count:a.count||9,sizeType:a.sizeType||["original","compressed"]},function(){return a._complete=function(a){if(u){var b=a.localIds;b&&(a.localIds=JSON.parse(b))}},a}())},previewImage:function(a){c(o.previewImage,{current:a.current,urls:a.urls},a)},uploadImage:function(a){c("uploadImage",{localId:a.localId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},downloadImage:function(a){c("downloadImage",{serverId:a.serverId,isShowProgressTips:0==a.isShowProgressTips?0:1},a)},getNetworkType:function(a){var b=function(a){var c,d,e,b=a.errMsg;if(a.errMsg="getNetworkType:ok",c=a.subtype,delete a.subtype,c)a.networkType=c;else switch(d=b.indexOf(":"),e=b.substring(d+1)){case"wifi":case"edge":case"wwan":a.networkType=e;break;default:a.errMsg="getNetworkType:fail"}return a};c("getNetworkType",{},function(){return a._complete=function(a){a=b(a)},a}())},openLocation:function(a){c("openLocation",{latitude:a.latitude,longitude:a.longitude,name:a.name||"",address:a.address||"",scale:a.scale||28,infoUrl:a.infoUrl||""},a)},getLocation:function(a){a=a||{},c(o.getLocation,{type:a.type||"wgs84"},function(){return a._complete=function(a){delete a.type},a}())},hideOptionMenu:function(a){c("hideOptionMenu",{},a)},showOptionMenu:function(a){c("showOptionMenu",{},a)},closeWindow:function(a){a=a||{},c("closeWindow",{immediate_close:a.immediateClose||0},a)},hideMenuItems:function(a){c("hideMenuItems",{menuList:a.menuList},a)},showMenuItems:function(a){c("showMenuItems",{menuList:a.menuList},a)},hideAllNonBaseMenuItem:function(a){c("hideAllNonBaseMenuItem",{},a)},showAllNonBaseMenuItem:function(a){c("showAllNonBaseMenuItem",{},a)},scanQRCode:function(a){a=a||{},c("scanQRCode",{needResult:a.needResult||0,scanType:a.scanType||["qrCode","barCode"]},function(){return a._complete=function(a){var b,c;v&&(b=a.resultStr,b&&(c=JSON.parse(b),a.resultStr=c&&c.scan_code&&c.scan_code.scan_result))},a}())},openProductSpecificView:function(a){c(o.openProductSpecificView,{pid:a.productId,view_type:a.viewType||0},a)},addCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,card_ext:g.cardExt},d.push(h);c(o.addCard,{card_list:d},function(){return a._complete=function(a){var c,d,e,b=a.card_list;if(b){for(b=JSON.parse(b),c=0,d=b.length;d>c;++c)e=b[c],e.cardId=e.card_id,e.cardExt=e.card_ext,e.isSuccess=e.is_succ?!0:!1,delete e.card_id,delete e.card_ext,delete e.is_succ;a.cardList=b,delete a.card_list}},a}())},chooseCard:function(a){c("chooseCard",{app_id:z.appId,location_id:a.shopId||"",sign_type:a.signType||"SHA1",card_id:a.cardId||"",card_type:a.cardType||"",card_sign:a.cardSign,time_stamp:a.timestamp+"",nonce_str:a.nonceStr},function(){return a._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},a}())},openCard:function(a){var e,f,g,h,b=a.cardList,d=[];for(e=0,f=b.length;f>e;++e)g=b[e],h={card_id:g.cardId,code:g.code},d.push(h);c(o.openCard,{card_list:d},a)},chooseWXPay:function(a){c(o.chooseWXPay,f(a),a)}},b&&(a.wx=a.jWeixin=C),C});

$(function (){
	getVoucherNum();


	//header
	
	var url = window.location.href;
	
	var header_tmpl = '';	

	// head by wzx
	var headTitle = document.title;
	//header_tmpl = '<header class="header-con">';
	if(shopid != null && shopid > 0) {
		if(shoptype == 'one' || shoptype == '') {
			header_tmpl +=	'<nav class="d-nav"><div class="d-back"><a href="/wap/tmpl/shop/shop.html?shopid='+shopid+'">返回上一页</a></div>	<div class="d-text" id="goods_name">'+headTitle+'</div><div class="d-xianlife"><a class="" href="/wap/tmpl/shop/shop.html?shopid='+shopid+'">首页</a></div></nav>';
		}else{
			header_tmpl +=	'<nav class="d-nav"><div class="d-back"><a href="/wap/tmpl/shop/shop_two.html?shopid='+shopid+'">返回上一页</a></div>	<div class="d-text" id="goods_name">'+headTitle+'</div><div class="d-xianlife"><a class="" href="/wap/tmpl/shop/shop_two.html?shopid='+shopid+'">首页</a></div></nav>';
		}
		
    }else{
    	header_tmpl +=	'<nav class="d-nav"><div class="d-back"><a href="javascript:history.back();">返回上一页</a></div>	<div class="d-text" id="goods_name">'+headTitle+'</div><div class="d-xianlife"><a class="" href="/wap/">首页</a></div></nav>';
    }
	
	//header_tmpl += '</header>'
	var head_html = template.compile(header_tmpl);
	
	if (apptype == 'ios' || apptype == 'android') {
		
	}else{
		$(".header-con").html(head_html);
	}
	
	if(url.indexOf("tmpl") > 0) {
		$("#header-wrap").remove();
	}
	
	//$("body").before("<br /><br /><br /><br /><span>"+window.location.href+"</span>");
	
	$(".search-btn").die().live('click',function(){
		var keyword = encodeURIComponent($('#keyword').val());
		location.href = WapSiteUrl+'/tmpl/product_activity.html?keyword='+keyword;
	});
	
	//section
	var headTitle = document.title;
	
	if(shopid != null && shopid > 0) {
		if(shoptype == 'one' || shoptype == '') {
			var section_tmpl = '<div class="i-con"><a href="/wap/tmpl/shop/shop.html?shopid='+shopid+'" class=" return"><img width="100%" src="'+WapSiteUrl+'/images/top_03.png" /></a></div>'
			+'<span class="title">'+headTitle+'</span>'
			//+'<a href="'+WapSiteUrl+'"><img src="'+WapSiteUrl+'/images/home.png" class="home"></a>'
			//+'<a href="'+WapSiteUrl+'/tmpl/member/member.html?act=member""><img src="'+WapSiteUrl+'/images/my.png" class="home"></a>';
		}else{
			var section_tmpl = '<div class="i-con"><a href="/wap/tmpl/shop/shop.html?shopid='+shopid+'" class=" return"><img width="100%" src="'+WapSiteUrl+'/images/top_03.png" /></a></div>'
			+'<span class="title">'+headTitle+'</span>'
			//+'<a href="'+WapSiteUrl+'"><img src="'+WapSiteUrl+'/images/home.png" class="home"></a>'
			//+'<a href="'+WapSiteUrl+'/tmpl/member/member.html?act=member""><img src="'+WapSiteUrl+'/images/my.png" class="home"></a>';
		}
	}else{
		var section_tmpl = '<div class="i-con"><a href="javascript:history.back();" class=" return"><img width="100%" src="'+WapSiteUrl+'/images/top_03.png" /></a></div>'
		+'<span class="title">'+headTitle+'</span>'
		//+'<a href="'+WapSiteUrl+'"><img src="'+WapSiteUrl+'/images/home.png" class="home"></a>'
		//+'<a href="'+WapSiteUrl+'/tmpl/member/member.html?act=member""><img src="'+WapSiteUrl+'/images/my.png" class="home"></a>';
	}
	
	var section_html = template.compile(section_tmpl);
	$("#section-wrap").html(section_html);
	

	//其他页面 footer
    var footer_tmpl = '<section class="foot-word"><p>Copyright ©2015北京鲜生活电子商务有限公司 xianlife.com 保留一切权利 </p><p>Tel：400-890-7717</p></section>';
    var footer_tmpl = 'Comyright 2014北京鲜生活电子商务有限公司 xianlife.com 保留一切权利';
	var render = template.compile(footer_tmpl);
	var footer_html = render();
	
	if (apptype == 'ios' || apptype == 'android') {
		$(".header").hide();
		$(".header-con").hide();
		
		if(url.indexOf("product_list.html") > 0 || url.indexOf("shop_two.html") > 0 || url.indexOf("shop.html") > 0) {

			$(".navbar").show();
			$(".navbar").find(".icon-home,.icon-user").parent("a").hide();
			$(".navbar").find(".icon-shop").parent("a").attr("href","javascript:;alert('gotoShopCar')");

		}else{
			$(".navbar").hide();
		}
		
		$(".c-tag").hide();
		$(".go_top").hide();
		$(".foot-word").hide();

		if (appversion <= 128){
			$(".navbar").hide();
		}
	}else{
		if(shopid > 0) {
			
		}else{
			$("#footer").html(footer_html);
		}
		
		$(".header").show();
		$(".header-con").show();
		$(".navbar").find(".icon-home,.icon-user").parent("a").show();
		$(".c-tag").show();
		$(".navbar").show();
		$(".go_top").show();
		$(".foot-word").show();
	}
	
	
	//go top
    var window_w=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
    var window_h=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
    window.onscroll=function(){
        if(document.body.scrollTop+document.documentElement.scrollTop>window_h){
        	if (apptype == 'ios' || apptype == 'android') {
        		$('.go_top').hide();
        	}else{
        		$('.go_top').show();
        	}
        }
        else{
            $('.go_top').hide();
        }
        
        //导航浮动
        if($("#scroll_nav").length>0){
	        var oTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (oTop >= 50) {
				$("#scroll_nav").css({
	                'position':'fixed',
	                'top':'0px',
	                'right':'0px',
	                'z-index':88
	            })
			} else {
				$("#scroll_nav").css({
	                //'position':'static',
	            })
				
			}
        }
    }
    
    $('.go_top').click(function(){
    	
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        return false;
    });
    
    $(".xian").bind('click',function(){
		  $(this).addClass('hover');
		  $(this).next(".b-bar").css("left","0px").addClass('hover');
	});
	$(".b-sear").bind('click',function(e){
		$(this).find(".flbox").toggle().css('bottom','46px');
	});
	$(".blf").bind('click',function(){
		$(this).parent().parent(".b-bar").css("left","-100rem").removeClass("hover");
		$(".xian").removeClass("hover");
	});
	
});

var curHost = window.location.host;
if (curHost == 'wapapp.xianlife.com') {
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    
    
    var baidu = "<script>";
    baidu += "var _hmt = _hmt || [];";
    baidu += "(function() {";
    baidu += "var hm = document.createElement(\"script\");";
    baidu += "hm.src = \"" + _bdhmProtocol + "hm.baidu.com/hm.js?815708f7578623a471edd6aaa9af3291\";";
    baidu += "  var s = document.getElementsByTagName(\"script\")[0];";
    baidu += "s.parentNode.insertBefore(hm, s);";
    baidu += "})()";
    baidu += "</script>";
    //alert(baidu);
    document.write("<div style='display:none'>" + baidu + "<div>");
}


/**
 * wap站全站增加weixin js接口，用于后台可控微信分享内容设置
 */
function checkWeixinShare() {
	var url_check = false;
	var url_share_config_data = null;

	// 1. 获取本页是否被后台认定为需要分享设置的
	$.ajax({
		type:'post',
		url:ApiUrl+'/index.php?act=weixin&op=check_url&url=' + encodeURIComponent(location.href.split('#')[0]),
		data:{},
		dataType:'json',
		success:function(result){
			if(result.rtn == 0 && result != null){
				url_check = true;
				url_share_config_data = result;		
				//alert(url_share_config_data);
					if (typeof(wx) == 'undefined') {
						alert("wx not exist");
						return;
					}
					shareWeixin(url_share_config_data);
			
			} else{
				return;
			}
		}
	});	
}

function shareWeixin(url_share_config_data) {
	// 2. 如果有设置，则获取相关变量
	var appId = url_share_config_data.config.WEIXIN_APPID;
	var timestamp = url_share_config_data.config.timestamp;
	var nonceStr = url_share_config_data.config.WEIXIN_TOKEN;
	var signature = url_share_config_data.config.sign;	

	// 3. 配置微信config
	//通过config接口注入权限验证配置
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: appId, // 必填，公众号的唯一标识
		timestamp: timestamp, // 必填，生成签名的时间戳
		nonceStr: nonceStr, // 必填，生成签名的随机串
		signature: signature,// 必填，签名
		jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表
	});
	//通过ready接口处理成功验证
	wx.ready(function(){
		// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后
		wx.onMenuShareAppMessage({
			title: url_share_config_data.data.share_title, // 分享标题
			desc: url_share_config_data.data.share_content, // 分享描述
			link: url_share_config_data.data.share_link, // 分享链接
			imgUrl: url_share_config_data.data.share_imgUrl,// 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function () {
				// 用户确认分享后执行的回调函数
				//alert("很好，你分享成功！");
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
				//alert("不好，你没有分享成功！");
			}
		});

		wx.onMenuShareTimeline({
			title: url_share_config_data.data.share_title, // 分享标题
			link: url_share_config_data.data.share_link, // 分享链接
			imgUrl: url_share_config_data.data.share_imgUrl,// 分享图标
			success: function () {
				// 用户确认分享后执行的回调函数
				//alert("很好，你分享成功！");
			},
			cancel: function () {
				// 用户取消分享后执行的回调函数
				//alert("不好，你没有分享成功！");
			}
		});

	});

}

// weixin share interface
//checkWeixinShare();
