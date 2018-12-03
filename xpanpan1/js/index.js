$(function(){
	//选项卡切换
	(function(){
		var arrCon=[
			"例如：美国宇航局已预测，2016将是历史上最热的一年...",
			"例如：夏季全球各地仍将受到超强厄尔尼诺事件的持续影响...",
			"例如：厄尔尼诺事件的滞后影响是...",
			"例如：美国国家航空航天局（NASA）发布的资料显示...",
			"例如：持续时间和强度均被认定为...",
		];
		var num=0;
		$("#menu_form .text").val(arrCon[num]);
		var aLi=$("#menu").find("li");	
		aLi.each(function(index){
			$(this).click(function(){
				aLi.attr("class",'gradient');
				$(this).attr("class","active");
				num=index;
				$("#menu_form .text").val(arrCon[num]);
			});
		});
		$("#menu_form .text").focus(function(){
			if($("#menu_form .text").val()==arrCon[num]){
				$("#menu_form .text").val("");
			};	
		});
		$("#menu_form .text").blur(function(){
			if($("#menu_form .text").val()==""){
				$("#menu_form .text").val(arrCon[num]);
			}
		});
	})();
	//update
	(function(){
		var arrContent=[
			{"name":"萱萱","time":"5分钟前","content":"今年夏季全球各地仍将受到超强厄尔尼诺事件"},
			{"name":"唱唱","time":"6分钟前","content":"美国宇航局已预测，2016将是历史上最热的一年"},
			{"name":"欢欢","time":"3分钟前","content":"2016年5月是现代历史上气温最高的5月"},
			{"name":"娜娜","time":"4分钟前","content":"目前，厄尔尼诺已在美国造成多起天气异常情况"},
		];
		var str="";
		for(var i=0;i<arrContent.length;i++){
			if(!!arrContent[i]){
			str+="<li><a href='#'><strong>"+arrContent[i].name+"</strong><span>"+arrContent[i].time+"</span>"+arrContent[i].content+"</a></li>"
			}
		}
		var aUl=$(".update .wrap").find("ul");
		aUl.html(str);
		var aLi=aUl.find("li");
		var height=aLi.height();
		var iNow=0;
		var updateUp=$("#updateUp");
		var updateDown=$("#updateDown");
		updateUp.click(function(){
			doMove(1);
		});
		updateDown.click(function(){
			doMove(-1);
		});
		function doMove(num){
			iNow+=num;
			if(iNow>0){
				iNow=-(arrContent.length-1);
			};
			if(iNow<-(arrContent.length-1)){
				iNow=0;
			}
			aUl.stop().animate({top:iNow*height},1000);
			
		};
		var timer=null;
		function autoPlay(){
			timer=setInterval(function(){
				doMove(-1);
			},1000);
		};
		autoPlay();
		var oDiv=$("#search .update");
		oDiv.hover(function(){
			clearInterval(timer);
		},autoPlay);
		
	})();
	//options选项卡
	(function(){
		fnTab($(".tabNav1"),$(".tabCon1"),"click");
		fnTab($(".tabNav2"),$(".tabCon2"),"mouseover");
		fnTab($(".tabNav3"),$(".tabCon3"),"mouseover");
		fnTab($(".tabNav4"),$(".tabCon4"),"mouseover");
		function fnTab(oNav,oCon,event1){
			var aLi=oNav.children();
			oCon.hide().eq(0).show();
			aLi.each(function(index){
				$(this)[event1](function(){
					aLi.removeClass("active").addClass("gradient");
					aLi.eq(index).removeClass("gradient").addClass("active");
					aLi.find("a").attr("class","triangle_down_gray");
					aLi.eq(index).find("a").attr("class","triangle_down_red");
					oCon.hide().eq(index).show();
				});
				
			});
			
		};
		
		
	})();
	//fade切换
	(function(){
		var oDiv=$("#fade");
		var aLi=oDiv.find("ul li");
		var oLi=oDiv.find("ol li");
		var iNow=0;
		var oP=oDiv.find("p");
		var conArr=[
			'印度东部村庄Mawlynnong',
			'到2019年甘地150周年诞辰纪念日时',
			'印度总理莫迪才于2014年10月发起',
		];
		var timer=null;
		oLi.each(function(index){
			$(this).click(function(){
				iNow=index;
				fadeFn();
			});
		});
		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow%=oLi.length;
				fadeFn();
				
			},2000);
			
		};
		autoPlay();
		oDiv.hover(function(){
			clearInterval(timer);
		},autoPlay);
		function fadeFn(){
			oLi.each(function(i){
				if(i==iNow){
					$(this).attr("class","active");
					aLi.eq(i).fadeIn().attr("zIndex","3");
				}else{
					$(this).attr("class","");
					aLi.eq(i).fadeOut().attr("zIndex","2");
				}
			});
			oP.text(conArr[iNow]);
		}
		
		
	})();
	//bbs切换
	(function(){
		var oLi=$(".bbs ol li");
		oLi.mouseover(function(){
			oLi.removeClass("active");
			$(this).addClass("active");
		});
		
	})();
	
	
	
	
	//日历切换
	(function(){
		var oDay=$(".calendar h3").find("span");
		var oLi=$(".calendar ol").find("li");
		var oImg=$(".calendar ol li").find('img');
		var oInfo=$(".activity .today_info");
		//oImg.click(function(){	alert();});
		var aImg=oInfo.find("img");
		var aH4=oInfo.find("h4");
		var aP=oInfo.find("p");
		oImg.each(function(index){
			var iLeft=$(this).parent().position().left+50;
			var iTop=$(this).parent().position().top;
			var iNow=$(this).parent().index()%7;
			$(this).hover(function(){
				oImg.removeClass("active");
				$(this).addClass("active");
				oInfo.show().css('left',iLeft).css('top',iTop);
				aP.text($(this).attr("info"));
				aImg.attr("src",$(this).attr("src"));
				aH4.text(oDay.eq(iNow).text());
			},function(){
				oInfo.hide();
			});
		});
	})();
	// hot鼠标提示
	(function(){
		var oLi=$(".hot_area ul").find("li");
		var arrCon=[
			"","中南sdakjfsda","大学ssssss","有色金属成矿safdkasfdlsfd","预测asdflkdsf","与地质smdfafs","环境sdaflljfdsal","监测sfdajkfa","教育部sadffasd","重点dsafsadf","实验室asfsad","湖南safsdaf", 
		];
		oLi.mouseover(function(){
			if($(this).index()==0)return;
			oLi.find("p").remove();
			$(this).append($("<p style='width:"+($(this).width()-24)+"px'>"+arrCon[$(this).index()]+"</p>"));
		
		});
			
		
		
		
		
	})();
	
	
	
	
	
});

































