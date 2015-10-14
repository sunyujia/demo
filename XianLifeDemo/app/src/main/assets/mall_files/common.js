var shopid = getShop();
var shoptype = getShopType();
var apptype = getApptype();
var token = getToken();// 登录标记
var appid = getAppid();
var appversion = getAppversion();

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function addcookie(name, value, expireHours) {
	var cookieString = name + "=" + escape(value) + "; path=/";
	// 判断是否设置过期时间
	if (expireHours > 0) {
		var date = new Date();
		date.setTime(date.getTime() + expireHours * 3600 * 1000);
		cookieString = cookieString + "; expires=" + date.toGMTString();
	}
	document.cookie = cookieString;
}

// 读取cookie
function getcookie(name) {
	var strcookie = document.cookie;
	var arrcookie = strcookie.split("; ");
	for ( var i = 0; i < arrcookie.length; i++) {
		var arr = arrcookie[i].split("=");
		if (arr[0] == name)
			return arr[1];
	}
	return "";
}

// 读取cookie
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getcookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + "; path=/;expires="
				+ exp.toGMTString();
}

function checklogin(state) {
	return true;
	if (state == 0) {
		location.href = WapSiteUrl + '/tmpl/member/login.html';
		return false;
	} else {
		return true;
	}
}

function contains(arr, str) {
	var i = arr.length;
	while (i--) {
		if (arr[i] === str) {
			return true;
		}
	}
	return false;
}

// 倒计时
function takeCount() {
	setTimeout("takeCount()", 1000);
	$(".time-remain").each(function() {
		var obj = $(this);
		var tms = obj.attr("count_down");
		if (tms > 0) {
			tms = parseInt(tms) - 1;
			var d = Math.floor(tms / (1 * 60 * 60 * 24));
			var h = Math.floor(tms / (1 * 60 * 60)) % 24;
			var m = Math.floor(tms / (1 * 60)) % 60;
			var s = Math.floor(tms / 1) % 60;

			if (d < 0)
				days = 0;
			if (h < 0)
				hours = 0;
			if (m < 0)
				minutes = 0;
			if (s < 0)
				seconds = 0;
			obj.find("[time_id='d']").html(d);
			obj.find("[time_id='h']").html(h);
			obj.find("[time_id='m']").html(m);
			obj.find("[time_id='s']").html(s);
			obj.attr("count_down", tms);
		}
	});
}

// 获取购物车数量
function getCartNum() {
	$.ajax({
		url : ApiUrl + "/index.php?act=index&op=getcartnum",
		type : 'get',
		dataType : 'json',
		data : {
			token : token,
			'shopid' : shopid,
			'apptype' : apptype,
			'appid' : appid
		},
		success : function(result) {
			var rData = result.datas;

			setCartNum(rData.cart_num);
		}
	});
}
// 获取购物车数量
function getAllCartNum() {
	$.ajax({
		url : ApiUrl + "/index.php?act=index&op=getcartnum",
		type : 'get',
		dataType : 'json',
		data : {
			token : token,
			'shopid' : 0,
			'apptype' : apptype,
			'appid' : appid
		},
		success : function(result) {
			var rData = result.datas;

			setCartNum(rData.cart_num);
		}
	});
}

// 计算购物车数量
function setCartNum(num) {

	if (num > 0) {
		if ($('.float_car').find('.shoping_car_num').length > 0) {
			$('.float_car').find('.shoping_car_num').text(num);
			$('.float_car').find('.shoping_car_num').show();
		} else {
			$('.float_car').append(
					'<span class="shoping_car_num">' + num + '</span>');
		}

		if ($('#fixa-a1').length > 0) {
			$('#fixa-a1').text(num);
			$('#fixa-a1').show();
		} else {
			$('#fixa-a1').append(num);
		}

		if ($('#fixa-a1-xian').length > 0) {
			$('#fixa-a1-xian').text(num);
			$('#fixa-a1-xian').show();
		} else {
			$('fixa-a1-xian').append(num);
		}

		if ($('#cart_num').length > 0) {
			$('#cart_num').text(num);
			$('#cart_num').show();
		} else {
			$('#cart_num').append(num);
		}

	} else {
		if ($('.float_car').find('.shoping_car_num').length > 0) {
			$('.float_car').find('.shoping_car_num').hide();
		}

		if ($('#fixa-a1').length > 0) {
			$('#fixa-a1').text(num);
			$('#fixa-a1').hide();
		}

		if ($('#fixa-a1-xian').length > 0) {
			$('#fixa-a1-xian').text(num);
			$('#fixa-a1-xian').hide();
		}

		if ($('#cart_num').length > 0) {
			$('#cart_num').text(num);
			$('#cart_num').hide();
		}
	}
}

/**
 * 获取可用的优惠券数量
 */
function getVoucherNum() {

	$.ajax({
		url : ApiUrl + "/index.php?act=index&op=getVoucherNum",
		type : 'get',
		dataType : 'json',
		data : {
			token : token,
			'shopid' : shopid,
			'apptype' : apptype,
			'appid' : appid
		},
		success : function(result) {
			var rData = result.datas;
			setVoucherNum(rData.voucher_num);
		}
	});
}

function setVoucherNum(num) {
	if (num > 0) {
		if ($('#fixa-a1-oucher').length > 0) {
			$('#fixa-a1-oucher').text(num);
			$('#fixa-a1-oucher').show();
		}

		if ($('#voucher_num_top').length > 0) {
			$('#voucher_num_top').text(num);
			$('#voucher_num_top').show();
		}
	} else {
		if ($('#fixa-a1-oucher').length > 0) {
			$('#fixa-a1-oucher').hide();
		}
		if ($('#voucher_num_top').length > 0) {
			$('#voucher_num_top').hide();
		}
	}
}

//获取url参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
}

/***
 * 显示弹出购物车添加成功
 */
function showAddSuccessBox(){
	$.sDialog({
		skin : "block",
		text : "添加购物车成功",
		content : "提示",
		okBtn : false,
		autoTime: '2000',
		"lock": true,
		cancelBtn : false
	});
}

// 加入购物车
function addCart(goods_id, quantity) {
	// alert('shopid:'+shopid+'--apptype:'+apptype+'-key:'+key+'--appid:'+appid);
	
	//***************************************************
	shopid = GetQueryString("shopid");

	if (shopid == null || shopid == 'null' || shopid == 'undefined') {
		shopid = 0;
	}

	//**************************************************
	if (apptype == 'ios') {
		if (appversion <= 128) {
			alert('addToCart|:'+goods_id+'|:'+shopid+'|:1');
			return;
		}
	} else if (apptype == 'android') {
		if (appversion <= 128) {
			mallInterface.addToCart(goods_id, parseInt(shopid), 1);
			return;
		}
	}
	
	// ==2015-0707 奶粉特殊处理
	//var topaystatus = StandardPost(goods_id, quantity);
    //if(topaystatus) {
    //    return ;
    // }
	// ==2015-0707 奶粉特殊处理
	
     
     $.ajax({
    	url : ApiUrl + "/index.php?act=member_cart&op=tax",
 		data : {token : token,goods_id : goods_id,quantity : quantity,'shopid' : shopid,'apptype' : apptype,'appid' : appid},
 		type : "post",
 		success : function(result) {
 			var result = $.parseJSON(result);
				if(result.tax > 50 && (result.is_tax == '0' || result.is_tax == '')) {
					$.sDialog({
						skin:"block1",
	                    content: "友情提示",
	                    text:"省钱小贴士：您购买的商品金额已经达到海关免税标准，请先确认该订单，并欢迎您继续购物。完成商品挑选后，不要忘了去购物车结算哦～",
	                    okBtnText:"确认订单并继续购物",
	                    taxBtnText:"我是土豪,交税购买",
		                okFn:function(){

							if(apptype == 'ios') {
								//不交税
								$.ajax({
									url:ApiUrl+"/index.php?act=member_cart&op=no_taxes",
									type:"post",
									data:{'token':token,'shopid':shopid,'apptype':apptype,'appid':appid,'is_clear':1},
									success:function (res){
										alert('addToCart|:'+goods_id+'|:'+shopid+'|:1');
									}
								});
								return;
							}else if (apptype == 'android'){
								$.ajax({
									url:ApiUrl+"/index.php?act=member_cart&op=no_taxes",
									type:"post",
									data:{'token':token,'shopid':shopid,'apptype':apptype,'appid':appid,'is_clear':1},
									success:function (res){
										mallInterface.addToCart(goods_id, parseInt(shopid), 1);
									}
								});
								return;
							}
		                    	//************************************************************************************
							var btn_id = null;
							$.ajax({
		    						url : ApiUrl + "/index.php?act=member_cart&op=cart_add",
		    						data : {token : token,goods_id : goods_id,quantity : quantity,'shopid' : shopid,'apptype' : apptype,'appid' : appid,btn_id:btn_id, is_tax:0},
		    						type : "post",
		    						success : function(result) {
		    							var rData = $.parseJSON(result);
		    							if (!rData.datas.error) {
											setCartNum(rData.datas.cart_num);
		    							} else {
		    								$.sDialog({
		    									skin : "block",
		    									text : rData.datas.error,
		    									content : "提示",
		    									okBtn : false,
		    									cancelBtn : false
		    								});
		    							}
		    						}
		    					});
		    					//**********************************************************************************************
		               },
		               cancelBtnText:"先去结算",
		               cancelFn:function(){
		            	   if(apptype == 'ios' || apptype == 'android') {
		            		   alert('gotoShopCar');
		            	   }else{
		            		   window.location.href = WapSiteUrl+'/tmpl/cart_list.html';
		            	   }
		               },
		               taxFn:function(){

					   if(apptype == 'ios') {
						   $.ajax({
							   url:ApiUrl+"/index.php?act=member_cart&op=taxes",
							   type:"post",
							   data:{'token':token,'shopid':shopid,'apptype':apptype,'appid':appid,'is_clear':1},
							   success:function (res){
								   alert('addToCart|:'+goods_id+'|:'+shopid+'|:1');
							   }
						   });
						   return;
					   }else if (apptype == 'android'){
						   $.ajax({
							   url:ApiUrl+"/index.php?act=member_cart&op=taxes",
							   type:"post",
							   data:{'token':token,'shopid':shopid,'apptype':apptype,'appid':appid,'is_clear':1},
							   success:function (res){
								   mallInterface.addToCart(goods_id, parseInt(shopid), 1);
							   }
						   });
						   return;
					   }
	                	   //************************************************************************************
                    	var btn_id = null;
	 	               	$.ajax({
	 	               		url:ApiUrl+"/index.php?act=member_cart&op=cart_add",
	 	               		data : {token : token,goods_id : goods_id,quantity : quantity,'shopid' : shopid,'apptype' : apptype,'appid' : appid, is_tax:1},
	 	               		type:"post",
	 	               		success:function (result){
		 	               		var rData = $.parseJSON(result);

								if (!rData.datas.error) {

									$.sDialog({
										skin:"block",
										content : "提示",
										text : '加入购物车成功',
										"okBtn": false,
										"cancelBtn": false,
										"taxBtn": false,
										autoTime: '2000',
										"lock": true,
										okFn:function (){},
										cancelFn:function (){
											window.location.href = WapSiteUrl+'/tmpl/cart_list.html';
										}
									});

									setCartNum(rData.datas.cart_num);

								} else {
									$.sDialog({
										skin : "block",
										text : rData.datas.error,
										content : "提示",
										okBtn : false,
										"taxBtn": false,
										cancelBtn : false
									});
								}
	 	               		}
	 	               	});
    					//**********************************************************************************************
	                   }
	                });
				}else{

					if(apptype == 'ios') {
						alert('addToCart|:'+goods_id+'|:'+shopid+'|:1');
						return;
					}else if (apptype == 'android'){
						mallInterface.addToCart(goods_id, parseInt(shopid), 1);
						return;
					}
					//************************************************************************************
					$.ajax({
						url : ApiUrl + "/index.php?act=member_cart&op=cart_add",
						data : {token : token,goods_id : goods_id,quantity : quantity,'shopid' : shopid,'apptype' : apptype,'appid' : appid},
						type : "post",
						success : function(result) {
							var rData = $.parseJSON(result);
							if (!rData.datas.error) {

								$.sDialog({
									skin:"block",
									content:false,
									"okBtn": false,
									"cancelBtn": false,
									autoTime: '2000',
									"lock": true,
									okFn : function() {
										if (shopid && shopid > 0) {
											window.location.href = WapSiteUrl + '/tmpl/shop/shop.html?shopid=' + shopid;
										} else {
											// window.location.href = WapSiteUrl;
										}
									},
									cancelFn : function() {
										window.location.href = WapSiteUrl + '/tmpl/cart_list.html';
									}
								});
								// guide_animate();
								// 购物车数量

								setCartNum(rData.datas.cart_num);

							} else {
								$.sDialog({
									skin:"block",
									autoTime: '2000',
									"lock": false,
									text:rData.datas.error,
									content : "提示",
									okBtn : false,
									"taxBtn": false,
									cancelBtn : false
								});
							}
						}
					});
				//**********************************************************************************************
			}
 		}
     });
}

// 加入购物车
function addShopCart(goods_id, quantity) {
	// alert('shopid:'+shopid+'--apptype:'+apptype+'-key:'+key+'--appid:'+appid);
	
	shopid = GetQueryString("shopid");
	
	if (shopid == null || shopid == 'null' || shopid == 'undefined') {
		shopid = 0;
	}
	
	// ==2015-0707 奶粉特殊处理
	//var topaystatus = StandardPost(goods_id, quantity);
    // if(topaystatus) {
    //    return ;
    // }
	// ==2015-0707 奶粉特殊处理
	
     $.ajax({
     	url : ApiUrl + "/index.php?act=member_cart&op=tax",
  		data : {token : token,goods_id : goods_id,quantity : quantity,'shopid' : shopid,'apptype' : apptype,'appid' : appid},
  		type : "post",
  		success : function(result) {
  			var result = $.parseJSON(result);
  			if (!result.error) {
  				if(result.tax > 50 && (result.is_tax == '0' || result.is_tax == '')) {
  					$.sDialog({
  	                    skin:"block",
  	                    content: "友情提示",
  	                    text:"省钱小贴士：您购买的商品金额已经达到海关免税标准，请先确认该订单，并欢迎您继续购物。完成商品挑选后，不要忘了去购物车结算哦～",
  	                    okBtnText:"确认订单并继续购物",
  	                    okFn:function(){
  	                    	//************************************************************************************
  	                    	$.ajax({
  	                  		url : ApiUrl + "/index.php?act=member_cart&op=cart_add",
  	                  		data : {token : token,goods_id : goods_id,quantity : quantity,'shopid' : shopid,'apptype' : apptype,'appid' : appid},
  	                  		type : "post",
  	                  		success : function(result) {
  	                  			var rData = $.parseJSON(result);
  	                  			if (!rData.datas.error) {
  	                  				setCartNum(rData.datas.cart_num);
  	                  			} else {
  	                  				$.sDialog({
  	                  					skin : "block",
  	                  					text : rData.datas.error,
  	                  					content : "提示",
  	                  					okBtn : false,
  	                  					cancelBtn : false
  	                  				});
  	                  			}
  	                  		}
  	                  	});
  	                   },
  	                   cancelBtnText:"先去结算",
  	                   cancelFn:function(){
  	                	  window.location.href = WapSiteUrl + '/tmpl/cart_list.html';
 	                  }
  	                });
  				}else{
  					//************************************************************************************
  					$.ajax({
  						url : ApiUrl + "/index.php?act=member_cart&op=cart_add",
  						data : {token : token,goods_id : goods_id,quantity : quantity,'shopid' : shopid,'apptype' : apptype,'appid' : appid},
  						type : "post",
  						success : function(result) {
  							var rData = $.parseJSON(result);
  							if (!rData.datas.error) {
  								$.sDialog({
  									skin : "block",
  									content : "提示",
  									"okBtnText" : "再逛逛",
  									"cancelBtnText" : "去购物车",
  									okFn : function() {

  									},
  									cancelFn : function() {
  										window.location.href = WapSiteUrl + '/tmpl/cart_list.html';
  									}
  								});
  								// guide_animate();
  								// 购物车数量

  								setCartNum(rData.datas.cart_num);
  							} else {
  								$.sDialog({
  									skin : "block",
  									text : rData.datas.error,
  									content : "提示",
  									okBtn : false,
  									cancelBtn : false
  								});
  							}
  						}
  					});
  					//**********************************************************************************************
  				}
  			}else{
  				$.sDialog({
 					skin : "block",
 					text : rData.error,
 					content : "提示",
 					okBtn : false,
 					cancelBtn : false
 				});
  			}
  		}
      });
     
}

function addBlCart(bl_id, quantity) {
	// alert('shopid:'+shopid+'--apptype:'+apptype+'-key:'+key+'--appid:'+appid);
	
	shopid = GetQueryString("shopid");
	
	if (shopid == null || shopid == 'null' || shopid == 'undefined') {
		shopid = 0;
	}
	
	$.ajax({
		url : ApiUrl + "/index.php?act=member_cart&op=cart_addBl",
		data : {
			token : token,
			bl_id : bl_id,
			quantity : quantity,
			'shopid' : shopid,
			'apptype' : apptype,
			'appid' : appid
		},
		type : "post",
		success : function(result) {
			var rData = $.parseJSON(result);
			if (!rData.datas.error) {

				// jQuery.noConflict();
				// 元素以及其他一些变量
				// guide_animate(img_id);
				// 购物车数量

				setCartNum(rData.datas.cart_num);
				$.sDialog({
					content : "提示",
					text : "添加购物车成功！<br/>您可以选择：",
					"okBtnText" : "再逛逛",
					"cancelBtnText" : "去购物车",
					okFn : function() {
					},
					cancelFn : function() {
						window.location.href = WapSiteUrl
								+ '/tmpl/cart_list.html';
					}
				});
			} else {
				$.sDialog({
					content : "提示",
					text : rData.datas.error,
					okBtn : false,
					cancelBtn : false
				});
			}
		}
	});
}

// 立即购买
function buynow(goods_id, buynum) {
	// alert('shopid:'+shopid+'--apptype:'+apptype+'-key:'+key+'--appid:'+appid);
	var json = {};
	json.token = token;
	json.cart_id = '1|'+goods_id + '|' + buynum;

	json.shopid = shopid;
	json.apptype = apptype;
	json.appid = appid;

	$.ajax({
		type : 'post',
		url : ApiUrl + '/index.php?act=member_buy&op=buy_step1',
		data : json,
		dataType : 'json',
		success : function(result) {
			if (typeof (result.datas.error) == 'undefined') {
				location.href = WapSiteUrl
						+ '/tmpl/order/buy_step1.html?goods_id=' + goods_id
						+ '&buynum=' + buynum;
			} else {
				$.sDialog({
					skin : "red",
					content : result.datas.error,
					okBtn : false,
					cancelBtn : false
				});
			}
		}
	});
}

// 获取appid
function getAppid() {
	var appid = GetQueryString("appid");

	if (appid != null && appid != 'undefined' && appid != undefined) {
		var expireHour = 30 * 24; // 自动登录为30天
		addcookie('appid', appid, expireHour);

		return appid;
	} else if (getcookie('appid') != null && getcookie('appid') != 0 && getcookie('appid') != 'undefined') {
		return getcookie('appid');
	} else if (appid == null && getcookie('appid') == '') {
		return '';
	} else {
		return '';
	}
}

function getApptype() {
	apptype = GetQueryString("apptype");
	if (apptype != null && apptype != 'undefined') {
		return apptype;
	}
	return '';
}

function getShop() {
	shopid = GetQueryString("shopid");
	
	var cookie_shopid = getcookie('shopid');
	
	if (shopid != null && shopid != 'null' && shopid != 'undefined') {
		return shopid;
	}else if(cookie_shopid != null && cookie_shopid != 'null'  && cookie_shopid != 'undefined') {
		return cookie_shopid;
	}
	return '';
}

function getShopType() {
	var shoptype = getcookie('shoptype');
	
	if(shoptype != null && shoptype != 'null'  && shoptype != 'undefined') {
		return shoptype;
	}else{
		return '';
	}
}

// 获取token
function getToken() {
	var token = $.trim(GetQueryString("token"));
	
	var key = $.trim(getcookie('key'));
	
	if (token != '' && token != null && token != 'null' && token != undefined && token != 'undefined' && token != '(null)' && token != '%28null%29') {
		var expireHour = 30 * 24; // 自动登录为30天
		addcookie('key', token, expireHour);

		return token;
	} else if (key != null && key != 0 && key != undefined && key != 'undefined' && key != '' && key != '(null)' && key != '%28null%29') {
		return key;
	} else {
		return '';
	}
}

function getAppversion(){
	var appversion = GetQueryString("appversion");
	
	if (appversion != null && appversion != undefined && appversion != 'undefined') {
		return appversion;
	}else{
		return '';
	}
}

function is_weixn() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}

/**
 * 免费进货成功回调 （app 调用javascript） javascript: 提供方法addToShopSuccessCallback(goodsid)
 * //修改dom，从免费进货变为已进货
 * 
 * @param goodsid
 */
function addToShopSuccessCallback(goodsid) {
	$(".jh_" + goodsid).html("<img src=\"../images/bnt-jh-o.png\">").attr("onclick", "");

	$(".bundling_jh_" + goodsid).removeClass("xl-zjmh").addClass("xl-zjmh-y")
			.html("已进货").attr("onclick", "");
}

//特殊商品判断（奶粉跳转）
function StandardPost (goods_id, quantity) {
    //var id_arr = ['101153', '101152', '101151', '101150', '101149', '101148', '101147', '101146', , '101145', '101144', '101040', '101039', '101038', '100968', '100391', '100366', '100363', '100362', '100282', '100272', '100271', '100268', '100265', '100264', '100245', '100244', '100243', '100241', '101502', '101501'];
	var id_arr = ['101813', '101151','101803','101910',  '101722','100208','100306','101795',   '101721','101451','101791','102034','102192']; //七夕活动单品包邮
	if($.inArray(goods_id, id_arr) == -1) {
        return;
    }
	
	if(token == ''){
		window.location.href='/wap/tmpl/member/login.html';
	}

	var json = {};
	json.token = token;
	json.cart_id = '1|'+goods_id+'|'+quantity;
	$.ajax({
		type:'post',
		url:ApiUrl+'/index.php?act=member_buy&op=buy_step1',
		data:json,
		dataType:'json',
		success:function(result){
			
			if(typeof(result.datas.error) == 'undefined'){
				//console.log('DEBUG --- STOP');
				location.href = WapSiteUrl+'/tmpl/order/buy_step1.html?goods_id='+goods_id+'&buynum='+quantity;
				//return true;
			}else{
				$.sDialog({
					content:result.datas.error,//result.datas.error
					okBtn:false,
					cancelBtn:false
				});
				///alert(result.datas.error);
				return;
			}
		}
	});

	return true;
}

//土豪交税，重新购买
function taxes() {

	$.sDialog({
		skin:"block1",
        content: "友情提示",
        text:"亲，重新购买将会清空购物车哦~",
        okBtn:true,
        cancelBtn:true,
        "taxBtn": false, //是否显示交税按钮
        okFn:function(){
        	$.ajax({
                url:ApiUrl+"/index.php?act=member_cart&op=taxes",
                type:"post",
                data:{'token':token,'shopid':shopid,'apptype':apptype,'appid':appid},
                success:function (res){
                	if(shopid > 0) {
                		if(shoptype == 'one' || shoptype == '') {
                			window.location.href = "/wap/tmpl/shop/shop.html?shopid="+shopid;
            			}else{
            				window.location.href = "/wap/tmpl/shop/shop_two.html?shopid="+shopid;
            			}
                	}else{
                		window.location.href = WapSiteUrl;
                	}
                	
                	if(apptype == 'ios') {
                		alert('getcardnum');
                	}else if (apptype == 'android'){
						mallInterface.getcartnum();
                	}

                }
            });
        }
    });
	
	
}

//不交税，重新购买 
function no_taxes() {

	$.sDialog({
		skin:"block1",
        content: "友情提示",
        text:"亲，重新购买将会清空购物车哦~",
        okBtn:true,
        cancelBtn:true,
        "taxBtn": false, //是否显示交税按钮
        okFn:function(){
        	$.ajax({
                url:ApiUrl+"/index.php?act=member_cart&op=no_taxes",
                type:"post",
                data:{'token':token,'shopid':shopid,'apptype':apptype,'appid':appid},
                success:function (res){
                	if(shopid > 0) {
                		if(shoptype == 'one' || shoptype == '') {
                			window.location.href = "/wap/tmpl/shop/shop.html?shopid="+shopid;
            			}else{
            				window.location.href = "/wap/tmpl/shop/shop_two.html?shopid="+shopid;
            			}
                	}else{
                		window.location.href = WapSiteUrl;
                	}
                	if(apptype == 'ios') {
                		alert('getcardnum');
                	}else if (apptype == 'android'){
						mallInterface.getcartnum();
                	}
                }
            });
        }
    });
	
}

//选择模式
function SellerMode() {
	$.sDialog({
		skin:"block1",
        content: "友情提示",
        text:"省钱小贴士：您购买的商品金额已经达到海关免税标准，请先确认该订单，并欢迎您继续购物。完成商品挑选后，不要忘了去购物车结算哦～",
        okBtnText:"确认订单并继续购物",
        taxBtnText:"我是土豪,交税购买",
        okFn:function(){
        	//不交税
        	$.ajax({
                url:ApiUrl+"/index.php?act=member_cart&op=no_taxes",
                type:"post",
                data:{'token':token,'shopid':shopid,'apptype':apptype,'appid':appid,'is_clear':1},
                success:function (res){
                	window.location.reload();
                }
            });
	    },
	    taxFn:function(){
	    	//交税
	    	$.ajax({
                url:ApiUrl+"/index.php?act=member_cart&op=taxes",
                type:"post",
                data:{'token':token,'shopid':shopid,'apptype':apptype,'appid':appid,'is_clear':1},
                success:function (res){
                	window.location.reload();
                }
            });
	    },
	    cancelBtn:false
    });
}
