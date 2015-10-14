$(function (){
	
	var cps = GetQueryString('cps');
	if (cps != null && cps != "" ) {
		addcookie('cps', cps, 24 * 30 * 12);
	} else {
		delCookie('cps');
	}
	
	$.ajax({
		url:ApiUrl+"/index.php?act=index&op=index_new",
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
			
			TouchSlide({ 
				slideCell:"#focus",
				titCell:".hdi ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
				mainCell:".bdi ul", 
				effect:"left", 
				autoPlay:true,//自动播放
				autoPage:true, //自动分页
				switchLoad:"_src" //切换加载，真实图片路径为"_src" 
			});
			
			setTimeout("takeCount()", 1000);
			
			updateEndTime();
			
			//$('#topbar').scrollupbar();

		}
	});
	
	var url = ApiUrl+"/index.php?act=goods&op=new_goods_list&page=8&curpage=1";

    $.ajax({
		url: url,
		type:'get',
		dataType:'json',
		success:function(result){
			$("input[name=hasmore]").val(result.hasmore);
			$("input[name=page_total]").val(result.page_total);
			$("input[name=curpage_show]").val(2);

			var html = template.render('goods_list_one', result.datas);
			$("#goods_list_one_show").append(html);

			var html = template.render('goods_list_two', result.datas);
			$("#goods_list_two_show").append(html);
		}
	});

	//添加购物车
	$(".add-to-cart").live('click', function(){
		var goods_id = $(this).parent('.f').attr('goods_id');
		addCart(goods_id,1);
	});

	// 滑动加载推荐商品列表
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
        data: 'goods_id=' + id,
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
				

				var url = ApiUrl+"/index.php?act=goods&op=new_goods_list&page="+page+"&curpage="+curpage_show;

	            if(hasmore == 'true') {
					$.ajax({
						url: url,
						type:'get',
						dataType:'json',
						success:function(result){
							$("input[name=hasmore]").val(result.hasmore);
							$("input[name=page_total]").val(result.page_total);
							$("input[name=curpage_show]").val(parseInt(curpage_show) + 1);

							var html = template.render('goods_list_one', result.datas);
							$("#goods_list_one_show").append(html);

							var html = template.render('goods_list_two', result.datas);
							$("#goods_list_two_show").append(html);

							stop = true;
						}
					});
				}
	        } 
	    } 
	});
}