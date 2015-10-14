$(function(){
	
	var cps = GetQueryString('cps');
	if (cps != null && cps != "" ) {
		addcookie('cps', cps, 24 * 30 * 12);
	} else {
		delCookie('cps');
	}
	
	
	$("input[name=country_id]").val(GetQueryString('country_id'));

	// 国家列表
	var str = '';
	var app_url = "&shopid="+shopid+"&apptype="+apptype+"&appid="+appid+"&token="+token;
	
	if(GetQueryString('country_id') == 1) {
		str += '<a href="/wap/index_country.html?country_id=1'+app_url+'" class="on"><img src="images/country/xl-all_01.png"></a><a href="/wap/index_country.html?country_id=3'+app_url+'"><img src="images/country/xl-all_02.png"></a><a href="/wap/index_country.html?country_id=6'+app_url+'"><img src="images/country/xl-all_05.png"></a><a href="/wap/index_country.html?country_id=2'+app_url+'"><img src="images/country/xl-all_04.png"></a><a href="/wap/tmpl/activity/activity_korea.html?'+app_url+'"><img src="images/country/xl-all_09.png"></a><a href="/wap/tmpl/nation_diretc_mail/taiwam.html?'+app_url+'&g=/wap/index_country.html"><img src="images/country/xl-all_06.png"></a>';
	}
	else if(GetQueryString('country_id') == 3) {
		str += '<a href="/wap/index_country.html?country_id=1'+app_url+'"><img src="images/country/xl-all_01.png"></a><a href="/wap/index_country.html?country_id=3'+app_url+'" class="on"><img src="images/country/xl-all_02.png"></a><a href="/wap/index_country.html?country_id=6'+app_url+'"><img src="images/country/xl-all_05.png"></a><a href="/wap/index_country.html?country_id=2'+app_url+'"><img src="images/country/xl-all_04.png"></a><a href="/wap/tmpl/activity/activity_korea.html?'+app_url+'"><img src="images/country/xl-all_09.png"></a><a href="/wap/tmpl/nation_diretc_mail/taiwam.html?'+app_url+'&g=/wap/index_country.html"><img src="images/country/xl-all_06.png"></a>';
	}
	else if(GetQueryString('country_id') == 6) {
		str += '<a href="/wap/index_country.html?country_id=1'+app_url+'"><img src="images/country/xl-all_01.png"></a><a href="/wap/index_country.html?country_id=3'+app_url+'"><img src="images/country/xl-all_02.png"></a><a href="/wap/index_country.html?country_id=6'+app_url+'" class="on"><img src="images/country/xl-all_05.png"></a><a href="/wap/index_country.html?country_id=2'+app_url+'"><img src="images/country/xl-all_04.png"></a><a href="/wap/tmpl/activity/activity_korea.html?'+app_url+'"><img src="images/country/xl-all_09.png"></a><a href="/wap/tmpl/nation_diretc_mail/taiwam.html?'+app_url+'&g=/wap/index_country.html"><img src="images/country/xl-all_06.png"></a>';
	}
	else if(GetQueryString('country_id') == 2) {
		str += '<a href="/wap/index_country.html?country_id=1'+app_url+'"><img src="images/country/xl-all_01.png"></a><a href="/wap/index_country.html?country_id=3'+app_url+''+app_url+'"><img src="images/country/xl-all_02.png"></a><a href="/wap/index_country.html?country_id=6'+app_url+'"><img src="images/country/xl-all_05.png"></a><a href="/wap/index_country.html?country_id=2'+app_url+'"  class="on"><img src="images/country/xl-all_04.png"></a><a href="/wap/tmpl/activity/activity_korea.html?'+app_url+'"><img src="images/country/xl-all_09.png"></a><a href="/wap/tmpl/nation_diretc_mail/taiwam.html?'+app_url+'&g=/wap/index_country.html"><img src="images/country/xl-all_06.png"></a>';
	}
	else if(GetQueryString('country_id') == 9) {
		str += '<a href="/wap/index_country.html?country_id=1'+app_url+'"><img src="images/country/xl-all_01.png"></a><a href="/wap/index_country.html?country_id=3'+app_url+'"><img src="images/country/xl-all_02.png"></a><a href="/wap/index_country.html?country_id=6'+app_url+'"><img src="images/country/xl-all_05.png"></a><a href="/wap/index_country.html?country_id=2'+app_url+'"><img src="images/country/xl-all_04.png"></a><a href="/wap/tmpl/activity/activity_korea.html?'+app_url+'" class="on"><img src="images/country/xl-all_09.png"></a><a href="/wap/tmpl/nation_diretc_mail/taiwam.html?'+app_url+'&g=/wap/index_country.html"><img src="images/country/xl-all_06.png"></a>';
	}
	else if(GetQueryString('country_id') == 13) {
		str += '<a href="/wap/index_country.html?country_id=1'+app_url+'"><img src="images/country/xl-all_01.png"></a><a href="/wap/index_country.html?country_id=3'+app_url+'"><img src="images/country/xl-all_02.png"></a><a href="/wap/index_country.html?country_id=6'+app_url+'"><img src="images/country/xl-all_05.png"></a><a href="/wap/index_country.html?country_id=2'+app_url+'"><img src="images/country/xl-all_04.png"></a><a href="/wap/tmpl/activity/activity_korea.html?'+app_url+'"><img src="images/country/xl-all_09.png"></a><a href="/wap/tmpl/nation_diretc_mail/taiwam.html?'+app_url+'&g=/wap/index_country.html" class="on"><img src="images/country/xl-all_06.png"></a>';
	}
	else {
		str += '<a href="/wap/index_country.html?country_id=1'+app_url+'"><img src="images/country/xl-all_01.png"></a><a href="/wap/index_country.html?country_id=3'+app_url+'"><img src="images/country/xl-all_02.png"></a><a href="/wap/index_country.html?country_id=6'+app_url+'"><img src="images/country/xl-all_05.png"></a><a href="/wap/index_country.html?country_id=2'+app_url+'"><img src="images/country/xl-all_04.png"></a><a href="/wap/tmpl/activity/activity_korea.html?'+app_url+'"><img src="images/country/xl-all_09.png"></a><a href="/wap/tmpl/nation_diretc_mail/taiwam.html?'+app_url+'&g=/wap/index_country.html"><img src="images/country/xl-all_06.png"></a>';
	}
	
	$('#all_country').html(str);
	
	$.ajax({
		url:ApiUrl+"/index.php?act=index&op=indexCountry",
		type:'get',
		dataType:'json',
		data:{token:token,'shopid':shopid,'apptype':apptype,'appid':appid, cps:getcookie('cps')},
		success:function(result){
			var rData =  result.datas;

			setCartNum(rData.cart_num);
			
			if(token == '') {
                $("#login").show();
            }else{
                $("#exit").show();
            }
            
            if (apptype == 'ios' || apptype == 'android') {
                $(".header").hide();
                $(".c-tag").hide();
            }else{
                $(".header").show();
                $(".c-tag").show();
            }
			
			if(result){
				// var html = template.render('country', result.datas);
				// $("#country_image").append(html);
				// TouchSlide({ 
				// 	slideCell:"#picScroll",
				// 	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
				// 	autoPage:true, //自动分页
				// 	pnLoop:"false", // 前后按钮不循环
				// 	switchLoad:"_src" //切换加载，真实图片路径为"_src" 
				// });
			}
			
			
			$('#logoutbtn').click(function(){
				var username = getcookie('username');
				
				var client = 'wap';
				$.ajax({
					type:'get',
					url:ApiUrl+'/index.php?act=logout',
					data:{username:username,token:token,'shopid':shopid,'apptype':apptype,'appid':appid,client:client},
					success:function(result){
						if(result){
							delCookie('username');
							delCookie('key');
							location.href = WapSiteUrl+'/tmpl/member/login.html';
						}
					}
				});
			});
			
			setTimeout("takeCount()", 1000);
			updateEndTime();
		}
	});
	
	 var country_id = parseInt($("input[name=country_id]").val());
	 var url = ApiUrl+"/index.php?act=goods&op=_getGoodsForCountry&page=8&curpage=1&country_id=" + country_id;
	 $.ajax({
			url: url,
			type:'get',
			data:{token:token,'shopid':shopid,'apptype':apptype,'appid':appid, cps:getcookie('cps')},
			dataType:'json',
			success:function(result){
				if(result){
					if((result.datas.goods_list && result.datas.goods_list.length > 0) || country_id != 13) {
						var html = template.render('goods_list', result.datas);
						$("#goods_list_show").append(html);
						$("input[name=hasmore]").val(result.hasmore);
						$("input[name=page_total]").val(result.page_total);
					}
					else {
						var html = '<div class="allsibox"><div class="limg"><img src="images/tw_wait.jpg"></div>';
						$("#goods_list_show").append(html);
						$("input[name=hasmore]").val(result.hasmore);
						$("input[name=page_total]").val(result.page_total);
					}
					
				}
			}
		});
	   
	 

	//添加购物车
	$(".add-to-cart").live('click', function(){
		var goods_id = $(this).attr('goods_id');
		addCart(goods_id,1);
	});

	$('#topbar').scrollupbar();
	
	load_goods_list();
});

//倒计时函数
function updateEndTime(){
	var date = new Date();
	var time = date.getTime();  //当前时间距1970年1月1日之间的毫秒数
	
	//商品展示倒计时
	$(".time").each(function(i){
		
		var endDate = $(this).attr("endtime"); //结束时间字符串
		var goods_id = $(this).attr("g_id"); //商品ID
		
		
		if(endDate == ''){

		}else{
			//转换为时间日期类型
			var str = endDate.replace(/-/g,"/");

			var endDate1 = new Date(str);

			var endTime = endDate1.getTime(); //结束时间毫秒数

			var lag = (endTime - time) / 1000; //当前时间和结束时间之间的秒数

			if(lag > 0){
				var html = "";
				
				var day = Math.floor((lag / 3600) / 24);
				if(day > 0) {
					html += day+"天";
				}
				var hour = Math.floor((lag / 3600) % 24);
				var minite = Math.floor((lag / 60) % 60);
				var second = Math.floor(lag % 60);
				
				html += hour+":"+minite+":"+second;
				
				$(this).html(html);
				
				
			}
			else{
				// 刷新商品展示页面
				load_goods_show(goods_id);
			}
		}		
	});
	
	setTimeout("updateEndTime()",1000);
}




//加载商品展示信息
function load_goods_show(id) {
    $.ajax({
        type: "POST",
        url:ApiUrl+"/index.php?act=index&op=loadGoodsShow",
        data:{token:token,goods_id:id,'shopid':shopid,'apptype':apptype,'appid':appid, cps:getcookie('cps')},
        dataType:'json',
        success: function(response) {
            var obj = $('#goods_' + id);
            obj.html('');
            
        }
    });
}

// 加载推荐商品列表
function load_goods_list() {
	var stop = true;
	
	$(window).scroll(function(){
	    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()); 
	    
	    if($(document).height() <= totalheight){ 
	        if(stop == true){
	            stop = false;
	            var key = parseInt($("input[name=key]").val());
				var page = parseInt($("input[name=page]").val());			
				var hasmore = $("input[name=hasmore]").val();
				var curpage_show = $("input[name=curpage_show]").val();
				var page_total = $("input[name=page_total]").val();
				var url = ApiUrl+"/index.php?act=goods&op=_getGoodsForCountry&page="+page+"&curpage="+curpage_show;
	            if(hasmore == 'true') {
					$.ajax({
						url: url,
						type:'get',
						data:{token:token,'shopid':shopid,'apptype':apptype,'appid':appid, cps:getcookie('cps')},
						dataType:'json',
						success:function(result){
							$("input[name=hasmore]").val(result.hasmore);
							$("input[name=page_total]").val(result.page_total);
							$("input[name=curpage_show]").val(parseInt(curpage_show) + 1);
							var html = template.render('goods_list', result.datas);
							$("#goods_list_show").append(html);
							
							stop = true;
						}
					});
					
				}
	        } 
	    } 
	});
}



