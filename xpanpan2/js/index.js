$(function(){
var miaov={};
//menu
var menu={};
var twoAnimate={};
var threeAnimate={};
var fiveAnimate={};
//进入时即刻进行
miaov.init=function(){
	miaov.sideTime();
	miaov.resize();
	miaov.events();
	miaov.configInitAnimate();//首屏动画
	$("body").height(8500);
	miaov.configTimeScroll();
	twoAnimate.init();
	threeAnimate.init();
	fiveAnimate.init();
	
	
};
$(document).ready(miaov.init);
//事件start
miaov.events=function(){
	$(window).resize(miaov.resize);
	miaov.nav();
	miaov.buttton3d(".content .start",".state1",".state2",0.5);
	miaov.buttton3d(".scene5 .button1",".state1",".state2",0.5);
	$(".wrapper").on("mousewheel",function(e){
		e.preventDefault();
	});
	$(".wrapper").one("mousewheel",mousewheelFn);
	//鼠标滚动事件
	function mousewheelFn(e,direction){
		$(window).off("scroll",fnScroll);
		if(direction<1){
			console.log("1");;
			miaov.changeStep("next")
		}else{
			console.log("2");
			miaov.changeStep("prev");
		};
		
		setTimeout(function(){
			$(".wrapper").one("mousewheel",mousewheelFn);
		},1200);
	}
	//进入时滚动条为top
	$(window).on("scroll",fnScroll);
	function fnScroll(){
		$(window).scrollTop(0);
	};
	$(window).on("scroll",function(){
		miaov.scrollStatus();
		//滚动时候再次调用
		$(window).on("mouseup",miaov.mouseUp);
		
		});
	//mousedown时解绑top为0
	$(window).on("mousedown",function(){
		$(window).off("scroll",fnScroll);
		
	});
	$(".btn").click(function(){
		miaov.sideScroll.tweenTo("side1");
	});
	$(".left_nav .close").click(function(){
		miaov.sideScroll.tweenTo("side2");
	});
	$(".wrapper").on("mousedown",function(){
		$(window).off("mouseup",miaov.mouseUp);
	});
	//放大cam
	$(".scene2_2 .pic li").hover(function(){
		miaov.camScale($(this),"big");
	},function(){
		miaov.camScale($(this),"small");
	});
	$(".points .point").click(function(){
		miaov.clickTwo($(this).index());
	});
	
};
//事件end
//黑科技放大

//侧边栏弹出
miaov.sideTime=function(){
	miaov.sideScroll=new TimelineMax();
	miaov.sideScroll.to(".left_nav",0,{left:-300});
	miaov.sideScroll.to(".left_nav",0.3,{left:0});
	miaov.sideScroll.add("side1");
	miaov.sideScroll.to(".left_nav",0.3,{left:-300});
	miaov.sideScroll.add("side2");
	miaov.sideScroll.stop();
	
}
//点击第二屏按钮切换
miaov.clickTwo=function(index){
	console.log(index);
	if(index=="0"){
		step="state2";
	}else if(index=="1"){
		step="point2";
	}else if(index=="2"){
		step="point3";
	}else if(index=="3"){
		step="point4";
	};
	//控制滚动条一起滚动
	console.log(step);
	var stepTime=miaov.timeScroll.getLabelTime(step);
	var prevLable=miaov.timeScroll.getLabelBefore(stepTime);
	//miaov.timeScroll.seek(prevLable);
	
	var maxH=$("body").height()-$(window).height();
	var totalTime=miaov.timeScroll.totalDuration();
	
	var positionY=maxH*(stepTime/totalTime);
	var d=Math.abs(miaov.timeScroll.time()-stepTime);
	var twostepAnimation=new TimelineMax();
	twostepAnimation.to("html,body",d,{scrollTop:positionY});
	
	console.log(prevLable);
	miaov.timeScroll.tweenTo(step);
	miaov.currentStep=step;
	console.log(step);
}

//cam放大
miaov.camScale=function(obj,flag){
	if(flag=="big"){
		miaov.camScroll=new TimelineMax();
		miaov.camScroll.to(obj,0,{height:260});
		miaov.camScroll.to(obj.find("img"),0.5,{height:300,top:-20});
	}else{
		miaov.camScroll=new TimelineMax();
		miaov.camScroll.to(obj.find("img"),0.5,{height:260,top:0});
	}
		
}

//鼠标抬起时，调到哪一频
miaov.mouseUp=function(){
	console.log("aaa");
	var scale=miaov.scrollScale();
	var times=scale*miaov.timeScroll.totalDuration();
	var nextLable=miaov.timeScroll.getLabelAfter(times);
	var prevLable=miaov.timeScroll.getLabelBefore(times);
	
	var nextTime=miaov.timeScroll.getLabelTime(nextLable);
	var prevTime=miaov.timeScroll.getLabelTime(prevLable);
	var currentLable=miaov.timeScroll.getLabelBefore(nextTime);
	if(nextTime-prevTime<0.1)return;
	if(currentLable!=prevLable)return;
	var nextDuration=nextTime-times;
	var prevDuration=times-prevTime;
	console.log(nextDuration+"111"+prevDuration+"|||"+prevLable+"|||"+nextLable);
	var step='';
	if(nextDuration>prevDuration){
		step=prevLable;
	}else{
		step=nextLable;
	};
	//控制滚动条一起滚动
	var maxH=$("body").height()-$(window).height();
	var totalTime=miaov.timeScroll.totalDuration();
	var stepTime=miaov.timeScroll.getLabelTime(step);
	var positionY=maxH*(stepTime/totalTime);
	var d=Math.abs(miaov.timeScroll.time()-stepTime);
	var stepAnimation=new TimelineMax();
	stepAnimation.to("html,body",d,{scrollTop:positionY});
	
	miaov.timeScroll.tweenTo(step);
	miaov.currentStep=step;
	
	
};
//滚动条控制动画
miaov.scrollStatus=function(){
	var totalTime=miaov.timeScroll.totalDuration();
	var time=miaov.scrollScale()*totalTime;
	miaov.timeScroll.seek(time,false);
	//滚动条控制动画，并执行某些事件，所以可以忽略掉tweenTo(state)；
	
	
};
//top的滚动比例
miaov.scrollScale=function(){
	var maxH=$("body").height()-$(window).height();
	var positionY=$(window).scrollTop();
	var s=positionY/maxH;
	return s;
	
	
};
//改变窗口resize,start
miaov.resize=function(){
	$(".wrapper").height($(window).height());
	$(".scene").height($(window).height());
	$(".scene:not(':first')").css("top",$(window).height());
	miaov.configTimeScroll();
	if($(window).width()<950){
		$("body").addClass("r950");
	}else{
		$("body").removeClass("r950");
		
	};
	
	
};
//改变窗口resize,end
//miaov切换鼠标滚动,并计算导航条距离
miaov.currentStep="state1";
miaov.changeStep=function(value){
	if(value=="next"){
		var currentTime=miaov.timeScroll.getLabelTime(miaov.currentStep);
		var afterLabel=miaov.timeScroll.getLabelAfter(currentTime);
		if(!afterLabel)return;
		
		var maxH=$("body").height()-$(window).height();
		var totalTime=miaov.timeScroll.totalDuration();
		var afterTime=miaov.timeScroll.getLabelTime(afterLabel);
		var positionY=maxH*(afterTime/totalTime);
		var d=Math.abs(miaov.timeScroll.time()-afterTime);
		var afterAnimation=new TimelineMax();
		afterAnimation.to("html,body",d,{scrollTop:positionY});
		
		//miaov.timeScroll.tweenTo(afterLabel);
		miaov.currentStep=afterLabel;
	}else{
		var currentTime=miaov.timeScroll.getLabelTime(miaov.currentStep);
		var beforeLabel=miaov.timeScroll.getLabelBefore(currentTime);
		if(!beforeLabel)return;
		
		var maxH=$("body").height()-$(window).height();
		var totalTime=miaov.timeScroll.totalDuration();
		var beforeTime=miaov.timeScroll.getLabelTime(beforeLabel);
		var positionY=maxH*(beforeTime/totalTime);
		var d=Math.abs(miaov.timeScroll.time()-beforeTime);
		var beforeAnimation=new TimelineMax();
		beforeAnimation.to("html,body",d,{scrollTop:positionY});
		
		//miaov.timeScroll.tweenTo(beforeLabel);
		miaov.currentStep=beforeLabel;
	};
	
}
//配置首屏动画
miaov.configInitAnimate=function(){
	var initTime=new TimelineMax();
	initTime.to(".wrapper .scene1 .text h1,.wrapper .scene1 .text p,.wrapper .scene1 .price,.wrapper .scene1 .video",0,{opacity:0,rotationX:90});
	initTime.to(".wrapper .scene1 .pic",0,{opacity:0,top:0,rotationZ:60,transformOrigin:"left bottom",scale:0.2});
	initTime.to(".menu_wrapper",0.5,{opacity:1,});
	initTime.to(".menu_wrapper",0.5,{left:0,},"-=0.3");
	initTime.staggerTo(".wrapper .scene1 .text h1,.wrapper .scene1 .text p,.wrapper .scene1 .price,.wrapper .scene1 .video",0.5,{opacity:1,rotationX:0},"0.2");
	initTime.to(".wrapper .scene1 .pic",1,{opacity:1,top:88,rotationZ:0,scale:1},"-=0.8")
	initTime.to("body",0,{"overflow-y":"scroll"});
};
//配置主动画
miaov.timeScroll=null;
miaov.configTimeScroll=function(){
	var time=miaov.timeScroll?miaov.timeScroll.time():0;
	if(miaov.timeScroll)miaov.timeScroll.clear();
	miaov.timeScroll=new TimelineMax();
	miaov.timeScroll.add("state1");
	//将底部和导航复原
	miaov.timeScroll.to(".footer",0,{top:$(window).height(),ease:Cubic.easeInOut});
	miaov.timeScroll.to(".menu_wrapper",0,{top:0,ease:Cubic.easeInOut});
	//第二屏第1个动画
	miaov.timeScroll.to(".scene2",0.3,{top:0,ease:Cubic.easeOutIn});
	miaov.timeScroll.to({},0,{onComplete:function(){
		menu.changeMenu("menu_state2");
	},onReverseComplete:function(){
		menu.changeMenu("menu_state1");
	}},"+=0.1");
	miaov.timeScroll.to({},0,{onComplete:function(){
		twoAnimate.timeScroll.tweenTo("point1");
	},onReverseComplete:function(){
		twoAnimate.timeScroll.tweenTo("pointZ");
	}});
	miaov.timeScroll.to({},0.5,{});
	miaov.timeScroll.add("state2");
	//第二屏第2个动画
	miaov.timeScroll.to({},0,{onComplete:function(){
		twoAnimate.timeScroll.tweenTo("point2");
	},onReverseComplete:function(){
		twoAnimate.timeScroll.tweenTo("point1");
	}});
	miaov.timeScroll.to({},0.6,{});
	miaov.timeScroll.add("point2");
	//第二屏第3个动画
	miaov.timeScroll.to({},0.2,{onComplete:function(){
		twoAnimate.timeScroll.tweenTo("point3");
	},onReverseComplete:function(){
		twoAnimate.timeScroll.tweenTo("point2");
	}});
	miaov.timeScroll.to({},0.6,{});
	miaov.timeScroll.add("point3");
	//第二屏第4个动画
	miaov.timeScroll.to({},0.1,{onComplete:function(){
		twoAnimate.timeScroll.tweenTo("point4");
	},onReverseComplete:function(){
		twoAnimate.timeScroll.tweenTo("point3");
	}});
	miaov.timeScroll.to({},0.6,{});
	miaov.timeScroll.add("point4");
	//第二屏end
	//第三屏start
	miaov.timeScroll.to(".scene3",0.1,{top:0});
	miaov.timeScroll.to({},0.1,{onComplete:function(){
				menu.changeMenu("menu_state3");
			},onReverseComplete:function(){
				menu.changeMenu("menu_state2");
	}});
	miaov.timeScroll.to({},0,{onComplete:function(){
		threeAnimate.timeScroll.tweenTo("state1");
	},onReverseComplete:function(){
		threeAnimate.timeScroll.seek(0);
	}});
	miaov.timeScroll.to({},0.2,{});
	miaov.timeScroll.add("state3");
	
	miaov.timeScroll.to({},0.1,{onComplete:function(){
		threeAnimate.timeScroll.tweenTo("state2");
	},onReverseComplete:function(){
		threeAnimate.timeScroll.tweenTo("state1");
	}});
	miaov.timeScroll.to({},0.5,{});
	miaov.timeScroll.add("state3_2");
	//第三屏end
	
	//第5屏start
	miaov.timeScroll.to(".scene3",0.8,{top:-605,ease:Cubic.easeInOut});
	if($(window).width()>=950){
		miaov.timeScroll.to(".menu_wrapper",0.8,{top:-110,ease:Cubic.easeInOut},"-=0.8");
	}else{
		$(".menu_wrapper").css({top:0});
	}
	
	miaov.timeScroll.to(".scene5",0.8,{top:0},"-=0.8");
	miaov.timeScroll.to({},0,{onComplete:function(){
			menu.changeMenu("menu_state5");
			fiveAnimate.timeScroll.tweenTo("fivepoint");
		},onReverseComplete:function(){
			menu.changeMenu("menu_state3");
			fiveAnimate.timeScroll.seek(0);
	},ease:Cubic.easeInOut},"-=0.2");
	miaov.timeScroll.to({},0.4,{});
	miaov.timeScroll.add("state5");
	
	miaov.timeScroll.to(".scene5",0.8,{top:-$(".footer").height(),ease:Cubic.easeInOut});
	miaov.timeScroll.to(".footer",0.8,{top:$(window).height()-$(".footer").height(),ease:Cubic.easeInOut},"-=0.8");
	miaov.timeScroll.add("footer");
	miaov.timeScroll.stop();
	
	miaov.timeScroll.seek(time);
	
	
	
	
}

//导航事件
miaov.nav=function(){
	//ul下li的下划线
	var navTime=new TimelineMax();
	$(".content .nav li a").mouseover(function(){
		var l=$(this).position().left;
		var w=$(this).width();
		navTime.clear();
		navTime.to(".content .nav .line",0.2,{left:l,width:w,opacity:1});
		
	});
	$(".content .nav li a").mouseout(function(){
		navTime.clear();
		navTime.to(".content .nav .line",0.2,{opacity:0});
		
	});
	//语言栏EN
	var langTime=new TimelineMax();
	$(".language").mouseover(function(){
		langTime.clear();
		langTime.to(".language .dropdown a",0.2,{opacity:1,"display":"block",});
	});
	$(".language").mouseout(function(){
		langTime.clear();
		langTime.to(".language .dropdown a",0.2,{opacity:0,"display":"none",});
	});
};
//3d翻转
miaov.buttton3d=function(obj,elem1,elem2,d){
	
	$(obj).mouseover(function(){
		var buttonTime1=new TimelineMax();
		var ele1=$(obj).find(elem1);
		var ele2=$(obj).find(elem2);
		buttonTime1.to(ele1,d,{top:-ele1.height(),rotationX:90,transformPerspective:600},0);
		buttonTime1.to(ele2,d,{top:0,rotationX:0,transformPerspective:600},0);
	});
	$(obj).mouseout(function(){
		var buttonTime2=new TimelineMax();
		var ele1=$(obj).find(elem1);
		var ele2=$(obj).find(elem2);
		buttonTime2.to(ele1,d,{top:0,rotationX:0},0);
		buttonTime2.to(ele2,d,{top:ele1.height(),rotationX:-90},0);
	});
	
//菜单翻转 start
menu.changeMenu=function(menuState){
	console.log(menuState);
	var oldMenu=$(".menu");
	var newMenu=oldMenu.clone();
	newMenu.removeClass("menu_state1").removeClass("menu_state2").removeClass("menu_state3").removeClass("menu_state4").removeClass("menu_state5");
	newMenu.addClass(menuState);
	oldMenu.addClass("remove");

	$(".menu_wrapper").append(newMenu);
	if($(window).width()>950){
		var menuAnimate=new TimelineMax();
		menuAnimate.to(oldMenu,0,{top:0,rotationX:0,transformPerspective:600,transformOrigin:"bottom center"});
		menuAnimate.to(newMenu,0,{top:78,rotationX:-90,transformPerspective:600,transformOrigin:"top center"});
		menuAnimate.to(oldMenu,0.5,{top:-78,rotationX:90,ease:Cubic.easeInOut});
		menuAnimate.to(newMenu,0.5,{top:0,rotationX:0,ease:Cubic.easeInOut,onComplete:function(){
			$(".remove").remove();
		}},"-=0.5");
		
	}else{
		$(".remove").remove();
	};
	
	miaov.nav();
	miaov.buttton3d(".content .start",".state1",".state2",0.5);
	//miaov.nav();
	//miaov.buttton3d(".content .start",".state1",".state2",0.5);

	
};
//菜单翻转 end

//第二屏动画start
twoAnimate.init=function(){
	twoAnimate.timeScroll=new TimelineMax();
	
	twoAnimate.timeScroll.to(".step .scene2_1 img",0,{rotationX:0,opacity:1});
	twoAnimate.timeScroll.to(".scene2_1 .text1 h2,.scene2_1 .text1 p,.scene2_1 .text1 span,.scene2_1 .text2 li",0,{rotationX:180,opacity:0});
	twoAnimate.timeScroll.to(".scene2_2,.scene2_2,.scene2_3,.scene2_4",0,{top:665});
	twoAnimate.timeScroll.add("pointZ");
	//0
	//1
	
	twoAnimate.timeScroll.staggerTo(".scene2_1 .text1 h2,.scene2_1 .text1 p,.scene2_1 .text1 span,.scene2_1 .text2 li",0.3,{rotationX:0,opacity:1},"0.2");
	//小点变化
	twoAnimate.timeScroll.to(".wrapper .scene2 .point",0.5,{opacity:1});
	//yuan
	twoAnimate.timeScroll.to(".wrapper .scene2 .point",0,{backgroundPosition:"left top",},"-=0.5");
	twoAnimate.timeScroll.to(".wrapper .scene2 .point0",0,{backgroundPosition:"right top"},"-=0.5");
	twoAnimate.timeScroll.add("point1");
	//2
	twoAnimate.timeScroll.to(".scene2_2 .text1 h2,.step .scene2_2 .text1 p,.step .scene2_2 .text1 span",0,{rotationX:180,opacity:0});
	twoAnimate.timeScroll.to(".step .scene2_2 img",0,{left:-80,opacity:0});
	twoAnimate.timeScroll.to(".scene2_2",0.3,{top:7});
	twoAnimate.timeScroll.staggerTo(".step .scene2_2 .text1 h2,.step .scene2_2 .text1 p,.step .scene2_2 .text1 span",0.3,{rotationX:0,opacity:1},"0.2");
	twoAnimate.timeScroll.staggerTo(".step .scene2_2 img",0.5,{left:0,opacity:1,ease:Cubic.easeOutIn},0.2);
	//yuan
	twoAnimate.timeScroll.to(".wrapper .scene2 .point",0,{backgroundPosition:"left top",},"-=0.6");
	twoAnimate.timeScroll.to(".wrapper .scene2 .point1",0,{backgroundPosition:"right top",},"-=0.6");
	twoAnimate.timeScroll.add("point2");
	//3
	twoAnimate.timeScroll.to(".step .scene2_3 img",0,{rotationX:0,opacity:1});
	twoAnimate.timeScroll.to(".scene2_3 .text3 h2,.step .scene2_3 .text3 p,.step .scene2_3 .text3 span",0,{rotationX:180,opacity:0});
	twoAnimate.timeScroll.to(".scene2_3",1,{top:7,ease:Cubic.easeInOut});
	twoAnimate.timeScroll.staggerTo(".step .scene2_3 .text3 h2,.step .scene2_3 .text3 p,.step .scene2_3 .text3 span",0.6,{rotationX:0,opacity:1},"0.2");
	
	//yuan
	twoAnimate.timeScroll.to(".wrapper .scene2 .point",0,{backgroundPosition:"left top",},"-=0.6");
	twoAnimate.timeScroll.to(".wrapper .scene2 .point2",0,{backgroundPosition:"right top",},"-=0.6");
	twoAnimate.timeScroll.add("point3");
	//4
	twoAnimate.timeScroll.to(".wrapper .scene2 .step .scene2_4 ul li",0,{rotationX:0,opacity:0});
	twoAnimate.timeScroll.to(".step .scene2_4 .text4",0,{rotationX:180,opacity:0});
	
	twoAnimate.timeScroll.to(".scene2_4",0.1,{top:78});
	twoAnimate.timeScroll.staggerTo(".wrapper .scene2 .step .scene2_4 ul li",0.2,{rotationX:0,opacity:1},"0.1");
	twoAnimate.timeScroll.to(".step .scene2_4 .text4",0.3,{rotationX:0,opacity:1});
	//yuan
	twoAnimate.timeScroll.to(".wrapper .scene2 .point",0,{backgroundPosition:"left top",},"-=0.6");
	twoAnimate.timeScroll.to(".wrapper .scene2 .point3",0,{backgroundPosition:"right top",},"-=0.6");
	twoAnimate.timeScroll.add("point4");
	twoAnimate.timeScroll.stop();
}
//第二屏动画end
//第3屏动画start
threeAnimate.init=function(){
	threeAnimate.timeScroll=new TimelineMax();
	threeAnimate.timeScroll.to(".scene3 .step3_1 img",0,{opacity:0});
	threeAnimate.timeScroll.to(".scene3 .step3_2",0,{top:688});

	threeAnimate.timeScroll.to(".scene3 .step3_1 h2,.scene3 .step3_1 p,.scene3 .step3_1 span",0,{opacity:0});
	threeAnimate.timeScroll.to(".scene3 .step3_1 img",1,{opacity:1});
	threeAnimate.timeScroll.staggerTo(".scene3 .step3_1 h2,.scene3 .step3_1 p,.scene3 .step3_1 span",0.5,{opacity:1},"0.3");
	threeAnimate.timeScroll.add("state1");
	threeAnimate.timeScroll.to(".scene3 .step3_1 img,.scene3 .step3_1 h2,.scene3 .step3_1 p,.scene3 .step3_1 span",0.1,{opacity:0});
	threeAnimate.timeScroll.to(".scene3 .step3_2 h2,.scene3 .step3_2 p,.scene3 .step3_2 span",0,{opacity:0});
	threeAnimate.timeScroll.to(".scene3 .step3_2",0.1,{top:76});
	threeAnimate.timeScroll.staggerTo(".scene3 .step3_2 h2,.scene3 .step3_2 p,.scene3 .step3_2 span",0.5,{opacity:1},"0.5");
	threeAnimate.timeScroll.add("state2");
	threeAnimate.timeScroll.stop();
};
	
fiveAnimate.init=function(){
	fiveAnimate.timeScroll=new TimelineMax();
	fiveAnimate.timeScroll.to(".wrapper .scene5 .wrap",0.2,{top:88,rotationX:0,opacity:1});
	fiveAnimate.timeScroll.staggerTo(".scene5 h2,.scene5 p,.scene5 span",0.5,{opacity:0.1,rotationX:0},0.5);
	fiveAnimate.timeScroll.staggerTo(".scene5 h2,.scene5 p,.scene5 span",0.5,{opacity:1,rotationX:0},0.5);
	fiveAnimate.timeScroll.add("fivepoint");
	fiveAnimate.timeScroll.stop();
}

	
	
	
};













});