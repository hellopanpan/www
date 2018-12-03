$(function(){
var index=0;
init();
function init(){
	$("body").height($(window).height());
	$(".bg").height($(window).height());
	$(".bg").css("transform","translateZ(0px)");
	$(".page2").css("top",($(window).height()-$(".page2").height())/2);
	$(window).one("mousewheel",wheeelFn);
	console.log(index);
	$(".page1").show();
		setTimeout(function(){
			initPage1();
	},100);
		
};
$(window).resize(function(){
	$("body").height($(window).height());
	$(".bg").height($(window).height());
	$(".page2").css("top",($(window).height()-$(".page2").height())/2);
});
setInterval(function(){
	console.log(index);
},2000);
function wheeelFn(e,direction){
	if(direction==-1){//向下
		index++;
		if(index==4){
			index=0;
		};	
	}else{
		index--;
		if(index<0){
			index=3;
		}
	};
	setTimeout(function(){
		$(window).one("mousewheel",wheeelFn);
	},1000);
	changeStep();//
	
};
$(".side").find("li").click(function(){
	index=($(this).index());
	changeStep();	
});
//切换页面
function changeStep(){
	if(index==0){//第一页
		$(".page1").show();
		$(".page2").hide();
		$(".page3").hide();
		$(".page4").hide();
		$(".bg").css("transform","translateZ(0px)");
		setTimeout(function(){
			initPage1();
		},100);
		updatePage2();
		updatePage3();
		updatePage4();
	}else if(index==1){//第2页
		$(".page1").hide();
		$(".page3").hide();
		$(".page4").hide();
		$(".page2").show();
		setTimeout(function(){
			initPage2();
		},100);
		
		updatePage3();
		updatePage4();
	}else if(index==2){//第3页
		$(".page1").hide();
		$(".page2").hide();
		$(".page4").hide();
		$(".page3").show();
		setTimeout(function(){
			initPage3();
		},100);
		updatePage4();
		updatePage2();
	}else if(index=3){//第4页
		$(".page3").hide();
		$(".page2").hide();
		$(".page1").hide();
		$(".page4").css("display","block");
		setTimeout(function(){
			initPage4();
		},100);
		updatePage3();
		updatePage2();
		$(".bg").css("transform","translateZ(400px)");
		
	}
	
}
function initPage1(){
	$(".side").find("li").removeClass("active");
	$(".side").find("li").eq(0).addClass("active");
	$(".head2").hide();
	$(".page1 .top1").css("transform","translateZ(0px)");
	$(".page1 .top2").css("transform","translateZ(0px)");
}

function initPage2(){
	$(".side").find("li").removeClass("active");
	$(".side").find("li").eq(1).addClass("active");
	$(".bg").css("transform","translateZ(400px)");
	$(".head2").show();
	$(".page2 .row1 .clock3").css("transform","rotate(0deg)");	
	$(".page2 .row1").css("transform","translateX(0px) translateY(0px) rotateY(00deg) rotateX(0deg) translateZ(300px)");
	setTimeout(function(){
		
		$(".page2 .row1").css("transform","translateZ(700px) rotateY(0deg)");
		setTimeout(function(){
			$(".page2 .row2").css("transform","translateZ(200px) translateX(00px) translateY(00px) rotateY(0deg)").css("opacity",1);
		},300)
	},1000);	
};	
function updatePage2(){
	
	setTimeout(function(){
		$(".page2 .row1 .clock3").css("transform","rotate(-240deg)");	
		$(".page2 .row1").css("transform","translateZ(-6000px) translateX(-1000px) translateY(1000px) rotateY(-180deg) rotateX(-90deg)");
		$(".page2 .row2").css("transform","translateZ(-6000px) translateX(-1000px) translateY(1000px)");
		$(".page2 .row2").css("opacity",0);
		
	},1000);
	
}
function initPage3(){
	$(".side").find("li").removeClass("active");
	$(".side").find("li").eq(2).addClass("active");
	$(".page3 .text1").css("transform","rotateX(45deg) rotateY(0deg) translateX(100px) translateY(-100px)translateZ(-100px)");
	$(".page3 .pic").css("transform","rotateX(45deg) rotateY(0deg) translateX(-200px) translateY(-100px)translateZ(-200px)");
};
function updatePage3(){
	
	$(".page3 .text1").css("transform","rotateX(45deg) rotateY(-90deg) translateX(100px) translateY(-100px)translateZ(-100px)");
	$(".page3 .pic").css("transform","rotateX(45deg) rotateY(90deg) translateX(-200px) translateY(-100px)translateZ(-200px)");
}
function initPage4(){
	$(".side").find("li").removeClass("active");
	$(".side").find("li").eq(3).addClass("active");
	$(".page4 .pic .img1").css("transform","translateZ(0px) translateX(0px) translateY(60px) rotateX(0deg) rotateZ(0deg) scale(1)");
	$(".page4 .pic .img4").css("transform","translateZ(0px) translateX(0px) translateY(0px) rotateY(0deg) rotateZ(0deg) scale(1)");
	$(".page4 .pic .img2").css("transform","translateZ(0px) translateX(0px) translateY(0px) rotateZ(0deg) scale(1)");
	$(".page4 .pic .img3").css("transform","translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(1)");
	$(".page4 .text p").css("opacity",1);
	$(" .page4 .text h3").css("transform","translateZ(00px)  rotateY(00deg)");
	$(".footer  .footer4").show();
};
function updatePage4(){
	$(".side").find("li").removeClass("active");
	$(".side").find("li").eq(3).addClass("active");
	$(".page4 .pic .img1").css("transform","translateZ(100px) translateX(-200px) translateY(-200px) rotateX(-140deg) rotateZ(-90deg) scale(0.1)");
	$(".page4 .pic .img4").css("transform","translateZ(500px) translateX(-200px) translateY(200px) rotateY(-100deg)  rotateZ(-100deg) scale(0.1)");
	$(".page4 .pic .img2").css("transform","translateZ(300px) translateX(210px) translateY(-320px) rotateZ(90deg) scale(0.1)");
	$(".page4 .pic .img3").css("transform","translateZ(300px) translateX(310px) translateY(-300px) rotateX(90deg) scale(0.1)");
	$(".page4 .text p").css("opacity",0);
	$(" .page4 .text h3").css("transform","translateZ(00px) rotateX(10deg) rotateY(-100deg)");
	$(".footer  .footer4").hide();
}
//小球运动	
(function(){
	//运动1
	var i=0;
	
	setInterval(function(){
		$(".bg .row1 div").css("left",function(){
			if($(this).position().left<-$(this).width()){
				return $(window).width()+"px";
				
			}else{
				return $(this).position().left-6-2*i+"px";
			}
			
		});
	},50);
	//运动2
	setInterval(function(){
		$(".bg .row2 div").css("left",function(){
			if($(this).position().left<-$(this).width()){
				return $(window).width()+"px";
				
			}else{
				return $(this).position().left-2-2*i+"px";
			}
			
		});
	},50);
	//运动3
	setInterval(function(){
		$(".bg .row3 div").css("left",function(){
			if($(this).position().left<-$(this).width()){
				return $(window).width()+"px";
				
			}else{
				return $(this).position().left-1-2*i+"px";
			}
			
		});
	},50);
	//运动4
	setInterval(function(){
		$(".bg .row4 div").css("left",function(){
			if($(this).position().left<-$(this).width()){
				return $(window).width()+"px";
				
			}else{
				return $(this).position().left-1-2*i+"px";
			}
			
		});
	},100);
	
})();



});