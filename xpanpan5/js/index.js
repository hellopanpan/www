$(function(){
//向下移动
$(".side .list1 .btn1").click(function(){
	var index=$(this).parent().parent().index();
	if(index<8){
		$(".side .list1 li").eq(index).animate({"top":"40px"},600);
		$(".side .list1 li").eq(index+1).animate({"top":"-40px"},600);
		setTimeout(function(){
			$(".side .list1 li").eq(index).css("top","0px");
			$(".side .list1 li").eq(index+1).css("top","0px");
				$(".side .list1 li").eq(index).insertAfter($(".side .list1 li").eq(index+1));
		},700);
	};		
});
//向上移动
$(".side .list1 .btn2").click(function(){
	var index=$(this).parent().parent().index();
	if(index>0){
		$(".side .list1 li").eq(index).animate({"top":"-40px"},300);
		$(".side .list1 li").eq(index-1).animate({"top":"40px"},300);
		setTimeout(function(){
			$(".side .list1 li").eq(index).css("top","0px");
			$(".side .list1 li").eq(index-1).css("top","0px");
			$(".side .list1 li").eq(index).insertBefore($(".side .list1 li").eq(index-1));
		},400);
		
	}	
});
//点击checkbox；
var checkFlag=0;
$(".content .con1 .tool3 label").click(function(){
	if(checkFlag==0){
		$(this).addClass("active");
		checkFlag=1;
	}else{
		$(this).removeClass("active");
		checkFlag=0;
	}
	
});
//点击选取文件

function reCheck(obj){
	obj.click(doCheck);
	
};
function doCheck(){
		
		if(!$(this).parent().parent().hasClass("check")){
			$(this).css("opacity",1).addClass("active");
			$(this).parent().css("border","2px solid #2e80dc");
			$(this).parent().parent().addClass("check");
			
			$(this).parent().hover(function(){
				showFile($(this));
			},function(){
				showFile($(this));
			});
			checkNum();
		}else{
			$(this).removeClass("active");
			$(this).parent().parent().removeClass("check");
			$(this).parent().mouseleave(function(){
				hideFile($(this));
			});
			$(this).parent().hover(function(){
				showFile($(this));
			},function(){
				hideFile($(this));
			});
			checkNum();
		}
		
};
reCheck($(".content .con2 .item .pic .check"));
var arrFile=[];
//修改文件
var changeFlag=0;
$(".content .con1 .tool3 .tool3btn5").click(function(){
	var now=0;
	for(var i=0;i<$(".content .con2 .item").size();i++){
		if($(".content .con2 .item").eq(i).hasClass("check")){
			
			now++;
			if(now>1){
				alert("一次只能修改1个");
				return;
			}
			$(".content .con2 .item").eq(i).find(".text .new").show();
			$(".content .con2 .item").eq(i).find(".text .new input").val($(".content .con2 .item").eq(i).find(".text p").html());
			$(".content .con2 .item").eq(i).find(".text p").hide();
			changeFlag=1;
			$(".content .con2 .item").eq(i).find(".text .new .sure").click(function(){
				$(this).parent().hide();
				
				$(this).parent().parent().find("p").show();
				$(this).parent().parent().find("p").html($(this).parent().find("input").val());
			});
			$(".content .con2 .item").eq(i).find(".text .new .cancel").click(function(){
				
				$(this).parent().hide();
				$(this).parent().parent().find("p").show();
			});
		}
	}
	
})
//鼠标经过时事件
function hideFile(obj){//obj为.item .pic
	obj.css("border","none");
	obj.find(".check").css("opacity",0);
}
function showFile(obj){//obj为.item .pic
	obj.css("border","2px solid #2e80dc");
	obj.find(".check").css("opacity",1);
};
function hoverFn(obj){
	obj.hover(function(){
		showFile($(this));
	},function(){
		hideFile($(this));
	});
};
hoverFn($(".content .con2 .item .pic"));

//新建文件
var newCreate=0;
$(".content .con1 .tool1 .tool1btn1").click(function(){
	if(newCreate==0){
		newCreate++;
		$(".content .con2 ul").prepend('<li class="item"><div class="pic"><div class="check "></div></div><div class="text"><p class="">新文件夹</p><div class="new none"><input type="text" value="新建文件夹"/><span class="sure"></span><span class="cancel"></span></div></div></li>');
		$(".content .con2 .item").eq(0).find(".text .new").show();
		$(".content .con2 .item").eq(0).find(".text .new input").val($(".content .con2 .item").eq(0).find(".text p").html());
		$(".content .con2 .item").eq(0).find(".text p").hide();
		changeFlag=1;
			showFile($(".content .con2 .item").eq(0).find(".pic"));
		$(".content .con2 .item").eq(0).find(".text .new .sure").click(function(){
			$(this).parent().hide();
			$(this).parent().parent().find("p").show();
			$(this).parent().parent().find("p").html($(this).parent().find("input").val());
			newCreate=0;
			reCheck($(".content .con2 .item").eq(0).find(".pic .check"));
			hideFile($(".content .con2 .item").eq(0).find(".pic"));
			hoverFn($(".content .con2 .item").eq(0).find(".pic"));
		});
		$(".content .con2 .item").eq(0).find(".text .new .cancel").click(function(){
			$(".content .con2 .item").eq(0).remove();
			newCreate=0;
		});
		
		
			
	}else{
		return;
	}
	
});
//删除文件
$(".content .con1 .tool3 .tool3btn4").click(function(){
	for(var i=0;i<$(".content .con2 .item").size();i++){
		if($(".content .con2 .item").eq(i).hasClass("check")){
			$(".content .con2 .item").eq(i).remove();
		}
	}
	
})
//全选
var checkAll=0;
$(".content .con1 .tool3 .tool3btn1").click(function(){
	if(checkAll==0){
		$(".content .con2 .item").addClass("check");
		$(".content .con2 .item").find(".pic").css("border","2px solid #2e80dc");
		$(".content .con2 .item").find(".pic .check").css("opacity",1).addClass("active");
		$(".content .con2 .item").find(".pic").hover(function(){
				showFile($(this));
			},function(){
				showFile($(this));
		});
		checkAll=1;
		checkNum();
	}else{
		$(".content .con2 .item").removeClass("check");
		$(".content .con2 .item").find(".pic").css("border","none");
		$(".content .con2 .item").find(".pic .check").css("opacity",0).removeClass("active");
		$(".content .con2 .item").find(".pic").hover(function(){
				showFile($(this));
			},function(){
				hideFile($(this));
		});
		checkAll=0;
		checkNum();
	}
		
		
});
//选择文件数目；
function checkNum(){
	var num=0;
	for(var i=0;i<$(".content .con2 .item").size();i++){
		if($(".content .con2 .item").eq(i).hasClass("check")){
			num++;
		}
	};
	$(".content .con1 .tool3 p").find("strong").html(num);
}
//显示搜索框
var searchShow=0;
$(".head .login .search1").click(function(){
	if(searchShow==0){
		$('.head .login input').show(1000);
		searchShow=1;
	}else{
		$('.head .login input').hide(1000);
		searchShow=0;
	}
});
//拖动登录框；
$(".baidu .login").on("mousedown",function(e){
	var eX=e.clientX;
	var eY=e.clientY;
	var iL=$(this).offset().left;
	var iT=$(this).offset().top;
	$(document).on("mousemove",function(e){
		var oT=(e.clientY-eY+iT);
		var oL=(e.clientX-eX+iL);
		if(oT<0){oT=0};
		if(oL<0){oL=0};
		if(oT>($(window).height()-$(".baidu .login").height())){
			oT=($(window).height()-$(".baidu .login").height());
		};
		$(".baidu .login").offset({top:oT,left:oL});
		if(oL>($(window).width()-$(".baidu .login").width()/2)){
			$(document).off("mousemove");
			$(".baidu").hide();
			$(".head").show(1000);
			$(".content").show(1000);
			$(".side").show(1000);
			$(".page1").css("top",0).css("transform","rotateZ(0deg) ");
		}
	});
	$(document).on("mouseup",function(){
		$(document).off("mousemove");
	});
	
});





















})