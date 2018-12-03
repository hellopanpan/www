$(function(){
	if (BrowserDetect.browser == 'Internet Explorer'){
		
		alert("温馨提示：请使用chrome浏览器访问！")
		
	};
	function getHeight(obj){
		var w=$(obj).width();
		$(obj).height(Math.sqrt(3)*2*w/3);
		var h=$(obj).height();
		var t=140-h/2;
		$(obj).css("top",t);		
	};
	getHeight(".animate .top .caret1");
	getHeight(".animate .top .caret2");
	//绘制3条弧线
	(function(){
		var oc1=document.getElementsByClassName("canvas1")[0];
		var oGc1=oc1.getContext("2d");
		
		var x=125;
		var y=125;
		var r=120;
		oGc1.beginPath();
		oGc1.lineWidth=8;
		oGc1.strokeStyle="white";
		oGc1.arc(x,y,r,-60*Math.PI/180,0*Math.PI/180,false);
		oGc1.stroke();
		oGc1.beginPath();
		oGc1.arc(x,y,r,60*Math.PI/180,120*Math.PI/180,false);
		oGc1.stroke();
		oGc1.beginPath();
		oGc1.arc(x,y,r,180*Math.PI/180,240*Math.PI/180,false);
		oGc1.stroke();
		
	})();
	//绘制6条（2种）弧线，2小圆
	(function(){
		var oc2_1=document.getElementsByClassName("canvas2_1")[0];
		var oGc2_1=oc2_1.getContext("2d");
		
		var x=120;
		var y=120;
		//1
		var r=116;
		oGc2_1.beginPath();
		oGc2_1.lineWidth=8;
		oGc2_1.globalAlpha=0.9;
		oGc2_1.strokeStyle="#00bebe";
		oGc2_1.arc(x,y,r,-110*Math.PI/180,-70*Math.PI/180,false);
		oGc2_1.stroke();
		oGc2_1.beginPath();
		oGc2_1.arc(x,y,r,10*Math.PI/180,50*Math.PI/180,false);
		oGc2_1.stroke();
		oGc2_1.beginPath();
		oGc2_1.arc(x,y,r,130*Math.PI/180,170*Math.PI/180,false);
		oGc2_1.stroke();
		
		
		//2
		var oc2_2=document.getElementsByClassName("canvas2_2")[0];
		var oGc2_2=oc2_2.getContext("2d");
		
		var x=120;
		var y=120;
		r=113;
		oGc2_2.strokeStyle="#00bebe";
		oGc2_2.lineWidth=2;
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,-60*Math.PI/180,-0*Math.PI/180,false);
		oGc2_2.stroke();
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,60*Math.PI/180,120*Math.PI/180,false);
		oGc2_2.stroke();
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,180*Math.PI/180,240*Math.PI/180,false);
		oGc2_2.stroke();
		//3
		var oc2_3=document.getElementsByClassName("canvas2_3")[0];
		var oGc2_3=oc2_3.getContext("2d");
		var x=120;
		var y=120;
		oGc2_3.beginPath();
		
		oGc2_3.globalAlpha=0.5;
		r=107;
		oGc2_3.lineWidth=6;
		oGc2_3.strokeStyle="#88c0c0";
		oGc2_3.arc(x,y,r,0*Math.PI/180,-360*Math.PI/180,false);
		oGc2_3.stroke();
		
		//4
		var oc2_4=document.getElementsByClassName("canvas2_4")[0];
		var oGc2_4=oc2_4.getContext("2d");
		var x=120;
		var y=120;
		oGc2_4.beginPath();
		r=101;
		oGc2_4.lineWidth=3;
		oGc2_4.strokeStyle="#88c0c0";
		oGc2_4.globalAlpha=0.8;
		oGc2_4.arc(x,y,r,0*Math.PI/180,-360*Math.PI/180,false);
		oGc2_4.stroke();
		//5
		
		var oc2_5=document.getElementsByClassName("canvas2_5")[0];
		var oGc2_5=oc2_5.getContext("2d");
		var x=120;
		var y=120;
		oGc2_5.lineWidth=3;
		oGc2_5.strokeStyle="#00bebe";
		r=96;
		for(var i=0;i<180;i++){
			oGc2_5.beginPath();
			oGc2_5.arc(x,y,r,(2*i)*Math.PI/180,(2*i+1)*Math.PI/180,false);
			oGc2_5.stroke();
		}
		//6
		var oc2_6=document.getElementsByClassName("canvas2_6")[0];
		var oGc2_6=oc2_6.getContext("2d");
		var x=120;
		var y=120;
		var obj=oGc2_6.createLinearGradient(0,0,240,240);
		obj.addColorStop(0,"#88c0c0");
		obj.addColorStop(1,"#00bebe");
		
		oGc2_6.fillStyle=obj;
		oGc2_6.globalAlpha=0.3;
		var timer=null;
		var i=0;
		timer=setInterval(function(){
			oGc2_6.beginPath();
			r=90;
			oGc2_6.arc(x,y,r,(i*45+2)*Math.PI/180,(i*45+45-2)*Math.PI/180,false);
			r=44;
			oGc2_6.arc(x,y,r,(i*45+45-2)*Math.PI/180,(i*45+2)*Math.PI/180,true);
			oGc2_6.closePath();
			oGc2_6.fill();
			if(i==7){
				clearInterval(timer);
				timer=null;
			};
			i++;
				
		},150);
			
			
		
		
		
	})();
	//绘制半边弧面
		(function(){
		var oc3=document.getElementsByClassName("canvas3_3")[0];
		var oGc3=oc3.getContext("2d");
		
		var x=260;
		var y=260;
		var r=200;
		oGc3.beginPath();
		oGc3.fillStyle="rgba(0,113,177,0.5)";
		oGc3.arc(x,y,r,30*Math.PI/180,-130*Math.PI/180,true);
		r=160;
		oGc3.arc(x,y,r,-130*Math.PI/180,30*Math.PI/180,false);
		oGc3.fill();
		
	})();
	//绘制图片img1
	(function(){
		var oc4=document.getElementsByClassName("canvas4_4")[0];
		var oGc4=oc4.getContext("2d");
		var img=document.getElementById("img1");
		img.onload=function(){
			var pat=oGc4.createPattern(img,"repeat");
			oGc4.fillStyle=pat;
			oGc4.beginPath();
			oGc4.moveTo(26,0);
			oGc4.lineTo(57,31);
			oGc4.lineTo(57,80);
			oGc4.lineTo(49,96);
			oGc4.lineTo(0,75);
			oGc4.lineTo(0,31);
			oGc4.closePath();
			oGc4.fill();
		};
		
		
	})();
	//绘制图片img2
	(function(){
	var oc5=document.getElementsByClassName("canvas5")[0];
	var oGc5=oc5.getContext("2d");
	var img=document.getElementById("img2");
		img.onload=function(){
			var pat=oGc5.createPattern(img,"repeat");
			oGc5.fillStyle=pat;
			oGc5.beginPath();
			oGc5.moveTo(8,0);
			oGc5.lineTo(57,20);
			oGc5.lineTo(57,77);
			oGc5.lineTo(0,77);
			oGc5.lineTo(0,19);
			oGc5.closePath();
			oGc5.fill();
		};
	
		
	})();
		//绘制图片img3
	(function(){
		var oc6=document.getElementsByClassName("canvas6")[0];
		var oGc6=oc6.getContext("2d");
		var img=document.getElementById("img3");
			img.onload=function(){
				var pat=oGc6.createPattern(img,"repeat");
				oGc6.fillStyle=pat;
				oGc6.beginPath();
				oGc6.moveTo(0,0);
				oGc6.lineTo(57,0);
				oGc6.lineTo(57,58);
				oGc6.lineTo(4,77);
				oGc6.lineTo(0,72);
				oGc6.closePath();
				oGc6.fill();
		};
	
		
	})();
	//绘制图片img4
	(function(){
		var oc7=document.getElementsByClassName("canvas7")[0];
		var oGc7=oc7.getContext("2d");
		var img=document.getElementById("img4");
		img.onload=function(){
			var pat=oGc7.createPattern(img,"repeat");
			oGc7.fillStyle=pat;
			oGc7.beginPath();
			oGc7.moveTo(46,0);
			oGc7.lineTo(57,22);
			oGc7.lineTo(57,59);
			oGc7.lineTo(21,93);
			oGc7.lineTo(0,69);
			oGc7.lineTo(0,22);
			oGc7.closePath();
			oGc7.fill();
		};
		
		
	})();
	//绘制线
		(function(){
		var ocLine=document.getElementsByClassName("line1")[0];
		var oGcLine=ocLine.getContext("2d");
		oGcLine.strokeStyle="#00bebe";
		oGcLine.beginPath();
		oGcLine.moveTo(1,0);
		oGcLine.lineTo(1,520);
		oGcLine.stroke();
		
		
		
	})();
	/////////////////////2start
	//绘制3条弧线
	(function(){
		var oc1=document.getElementsByClassName("canvas1")[1];
		var oGc1=oc1.getContext("2d");
		
		var x=125;
		var y=125;
		var r=120;
		oGc1.beginPath();
		oGc1.lineWidth=8;
		oGc1.strokeStyle="white";
		oGc1.arc(x,y,r,-60*Math.PI/180,0*Math.PI/180,false);
		oGc1.stroke();
		oGc1.beginPath();
		oGc1.arc(x,y,r,60*Math.PI/180,120*Math.PI/180,false);
		oGc1.stroke();
		oGc1.beginPath();
		oGc1.arc(x,y,r,180*Math.PI/180,240*Math.PI/180,false);
		oGc1.stroke();
		
	})();
	//绘制6条（2种）弧线，2小圆
	(function(){
		var oc2_1=document.getElementsByClassName("canvas2_1")[1];
		var oGc2_1=oc2_1.getContext("2d");
		
		var x=120;
		var y=120;
		//1
		var r=116;
		oGc2_1.beginPath();
		oGc2_1.lineWidth=8;
		oGc2_1.globalAlpha=0.9;
		oGc2_1.strokeStyle="#00bebe";
		oGc2_1.arc(x,y,r,-110*Math.PI/180,-70*Math.PI/180,false);
		oGc2_1.stroke();
		oGc2_1.beginPath();
		oGc2_1.arc(x,y,r,10*Math.PI/180,50*Math.PI/180,false);
		oGc2_1.stroke();
		oGc2_1.beginPath();
		oGc2_1.arc(x,y,r,130*Math.PI/180,170*Math.PI/180,false);
		oGc2_1.stroke();
		
		
		//2
		var oc2_2=document.getElementsByClassName("canvas2_2")[1];
		var oGc2_2=oc2_2.getContext("2d");
		
		var x=120;
		var y=120;
		r=113;
		oGc2_2.strokeStyle="#00bebe";
		oGc2_2.lineWidth=2;
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,-60*Math.PI/180,-0*Math.PI/180,false);
		oGc2_2.stroke();
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,60*Math.PI/180,120*Math.PI/180,false);
		oGc2_2.stroke();
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,180*Math.PI/180,240*Math.PI/180,false);
		oGc2_2.stroke();
		//3
		var oc2_3=document.getElementsByClassName("canvas2_3")[1];
		var oGc2_3=oc2_3.getContext("2d");
		var x=120;
		var y=120;
		oGc2_3.beginPath();
		
		oGc2_3.globalAlpha=0.5;
		r=107;
		oGc2_3.lineWidth=6;
		oGc2_3.strokeStyle="#88c0c0";
		oGc2_3.arc(x,y,r,0*Math.PI/180,-360*Math.PI/180,false);
		oGc2_3.stroke();
		
		//4
		var oc2_4=document.getElementsByClassName("canvas2_4")[1];
		var oGc2_4=oc2_4.getContext("2d");
		var x=120;
		var y=120;
		oGc2_4.beginPath();
		r=101;
		oGc2_4.lineWidth=3;
		oGc2_4.strokeStyle="#88c0c0";
		oGc2_4.globalAlpha=0.8;
		oGc2_4.arc(x,y,r,0*Math.PI/180,-360*Math.PI/180,false);
		oGc2_4.stroke();
		//5
		
		var oc2_5=document.getElementsByClassName("canvas2_5")[1];
		var oGc2_5=oc2_5.getContext("2d");
		var x=120;
		var y=120;
		oGc2_5.lineWidth=3;
		oGc2_5.strokeStyle="#00bebe";
		r=96;
		for(var i=0;i<180;i++){
			oGc2_5.beginPath();
			oGc2_5.arc(x,y,r,(2*i)*Math.PI/180,(2*i+1)*Math.PI/180,false);
			oGc2_5.stroke();
		}
		//6
		var oc2_6=document.getElementsByClassName("canvas2_6")[1];
		var oGc2_6=oc2_6.getContext("2d");
		var x=120;
		var y=120;
		var obj=oGc2_6.createLinearGradient(0,0,240,240);
		obj.addColorStop(0,"#88c0c0");
		obj.addColorStop(1,"#00bebe");
		
		oGc2_6.fillStyle=obj;
		oGc2_6.globalAlpha=0.3;
		var timer=null;
		var i=0;
		timer=setInterval(function(){
			oGc2_6.beginPath();
			r=90;
			oGc2_6.arc(x,y,r,(i*45+2)*Math.PI/180,(i*45+45-2)*Math.PI/180,false);
			r=44;
			oGc2_6.arc(x,y,r,(i*45+45-2)*Math.PI/180,(i*45+2)*Math.PI/180,true);
			oGc2_6.closePath();
			oGc2_6.fill();
			if(i==7){
				clearInterval(timer);
				timer=null;
			};
			i++;
				
		},150);
			
			
		
		
		
	})();
	//绘制半边弧面
		(function(){
		var oc3=document.getElementsByClassName("canvas3_3")[1];
		var oGc3=oc3.getContext("2d");
		
		var x=260;
		var y=260;
		var r=200;
		oGc3.beginPath();
		oGc3.fillStyle="rgba(0,113,177,0.5)";
		oGc3.arc(x,y,r,30*Math.PI/180,-130*Math.PI/180,true);
		r=160;
		oGc3.arc(x,y,r,-130*Math.PI/180,30*Math.PI/180,false);
		oGc3.fill();
		
	})();
	//绘制图片img1
	(function(){
		var oc4=document.getElementsByClassName("canvas22-4")[0];
		var oGc4=oc4.getContext("2d");
		var img=document.getElementById("img22-1");
		img.onload=function(){
			var pat=oGc4.createPattern(img,"repeat");
			oGc4.fillStyle=pat;
			oGc4.beginPath();
			oGc4.moveTo(26,0);
			oGc4.lineTo(57,31);
			oGc4.lineTo(57,80);
			oGc4.lineTo(49,96);
			oGc4.lineTo(0,75);
			oGc4.lineTo(0,31);
			oGc4.closePath();
			oGc4.fill();
		};
		
		
	})();
	//绘制图片img2
	(function(){
	var oc5=document.getElementsByClassName("canvas22-4")[1];
	var oGc5=oc5.getContext("2d");
	var img=document.getElementById("img22-2");
		img.onload=function(){
			var pat=oGc5.createPattern(img,"repeat");
			oGc5.fillStyle=pat;
			oGc5.beginPath();
			oGc5.moveTo(8,0);
			oGc5.lineTo(57,20);
			oGc5.lineTo(57,77);
			oGc5.lineTo(0,77);
			oGc5.lineTo(0,19);
			oGc5.closePath();
			oGc5.fill();
		};
	
		
	})();
		//绘制图片img3
	(function(){
		var oc6=document.getElementsByClassName("canvas22-4")[2];
		var oGc6=oc6.getContext("2d");
		var img=document.getElementById("img22-3");
			img.onload=function(){
				var pat=oGc6.createPattern(img,"repeat");
				oGc6.fillStyle=pat;
				oGc6.beginPath();
				oGc6.moveTo(0,0);
				oGc6.lineTo(57,0);
				oGc6.lineTo(57,58);
				oGc6.lineTo(4,77);
				oGc6.lineTo(0,72);
				oGc6.closePath();
				oGc6.fill();
		};
	
		
	})();
	//绘制图片img4
	(function(){
		var oc7=document.getElementsByClassName("canvas22-4")[3];
		var oGc7=oc7.getContext("2d");
		var img=document.getElementById("img22-4");
		img.onload=function(){
			var pat=oGc7.createPattern(img,"repeat");
			oGc7.fillStyle=pat;
			oGc7.beginPath();
			oGc7.moveTo(46,0);
			oGc7.lineTo(57,22);
			oGc7.lineTo(57,59);
			oGc7.lineTo(21,93);
			oGc7.lineTo(0,69);
			oGc7.lineTo(0,22);
			oGc7.closePath();
			oGc7.fill();
		};
		
		
	})();
	//绘制线
	(function(){
		var ocLine=document.getElementsByClassName("line1")[1];
		var oGcLine=ocLine.getContext("2d");
		oGcLine.strokeStyle="#00bebe";
		oGcLine.beginPath();
		oGcLine.moveTo(1,0);
		oGcLine.lineTo(1,520);
		oGcLine.stroke();
		
		
		
	})();
	
	//绘制self角线
	(function(){
		var ocself1=document.getElementsByClassName("canself1")[0];
		var oGcself1=ocself1.getContext("2d");
		oGcself1.strokeStyle="#fff";
		oGcself1.lineWidth=3;
		oGcself1.beginPath();
		oGcself1.moveTo(1,20);
		oGcself1.lineTo(1,8);
		oGcself1.lineTo(8,1);
		oGcself1.lineTo(20,1);
		oGcself1.stroke();
		
		
		
	})();
	(function(){
		var ocself1=document.getElementsByClassName("canself1")[1];
		var oGcself1=ocself1.getContext("2d");
		oGcself1.strokeStyle="#fff";
		oGcself1.lineWidth=3;
		oGcself1.beginPath();
		oGcself1.moveTo(1,20);
		oGcself1.lineTo(1,8);
		oGcself1.lineTo(8,1);
		oGcself1.lineTo(20,1);
		oGcself1.stroke();
	})();
	(function(){
		var ocself1=document.getElementsByClassName("canself1")[2];
		var oGcself1=ocself1.getContext("2d");
		oGcself1.strokeStyle="#fff";
		oGcself1.lineWidth=3;
		oGcself1.beginPath();
		oGcself1.moveTo(1,20);
		oGcself1.lineTo(1,8);
		oGcself1.lineTo(8,1);
		oGcself1.lineTo(20,1);
		oGcself1.stroke();
	})();
	(function(){
		var ocself1=document.getElementsByClassName("canself1")[3];
		var oGcself1=ocself1.getContext("2d");
		oGcself1.strokeStyle="#fff";
		oGcself1.lineWidth=3;
		oGcself1.beginPath();
		oGcself1.moveTo(1,20);
		oGcself1.lineTo(1,8);
		oGcself1.lineTo(8,1);
		oGcself1.lineTo(20,1);
		oGcself1.stroke();
	})();
	//self 横线
	(function(){
		var ocself2=document.getElementsByClassName("selfpic")[0];
		var oGcself2=ocself2.getContext("2d");
		oGcself2.strokeStyle="#fff";
		oGcself2.lineWidth=1;
		for(var i=1;i<24;i+=3){
			oGcself2.beginPath();
			oGcself2.moveTo(0,i);
			oGcself2.lineTo(200,i);
			oGcself2.stroke()		
		}	
	})();
	//绘制self2角线
	(function(){
		var ocself1=document.getElementsByClassName("canself22")[0];
		var oGcself1=ocself1.getContext("2d");
		oGcself1.strokeStyle="#fff";
		oGcself1.lineWidth=3;
		oGcself1.beginPath();
		oGcself1.moveTo(1,20);
		oGcself1.lineTo(1,8);
		oGcself1.lineTo(8,1);
		oGcself1.lineTo(20,1);
		oGcself1.stroke();
		
		
		
	})();
	(function(){
		var ocself1=document.getElementsByClassName("canself22")[1];
		var oGcself1=ocself1.getContext("2d");
		oGcself1.strokeStyle="#fff";
		oGcself1.lineWidth=3;
		oGcself1.beginPath();
		oGcself1.moveTo(1,20);
		oGcself1.lineTo(1,8);
		oGcself1.lineTo(8,1);
		oGcself1.lineTo(20,1);
		oGcself1.stroke();
	})();
	(function(){
		var ocself1=document.getElementsByClassName("canself22")[2];
		var oGcself1=ocself1.getContext("2d");
		oGcself1.strokeStyle="#fff";
		oGcself1.lineWidth=3;
		oGcself1.beginPath();
		oGcself1.moveTo(1,20);
		oGcself1.lineTo(1,8);
		oGcself1.lineTo(8,1);
		oGcself1.lineTo(20,1);
		oGcself1.stroke();
	})();
	(function(){
		var ocself1=document.getElementsByClassName("canself22")[3];
		var oGcself1=ocself1.getContext("2d");
		oGcself1.strokeStyle="#fff";
		oGcself1.lineWidth=3;
		oGcself1.beginPath();
		oGcself1.moveTo(1,20);
		oGcself1.lineTo(1,8);
		oGcself1.lineTo(8,1);
		oGcself1.lineTo(20,1);
		oGcself1.stroke();
	})();
	/////////2end
	/////////////////////3page start
	//绘制3条弧线
	(function(){
		var oc1=document.getElementsByClassName("canvas33-1")[0];
		var oGc1=oc1.getContext("2d");
		
		var x=125;
		var y=125;
		var r=120;
		oGc1.beginPath();
		oGc1.lineWidth=8;
		oGc1.strokeStyle="white";
		oGc1.arc(x,y,r,-60*Math.PI/180,0*Math.PI/180,false);
		oGc1.stroke();
		oGc1.beginPath();
		oGc1.arc(x,y,r,60*Math.PI/180,120*Math.PI/180,false);
		oGc1.stroke();
		oGc1.beginPath();
		oGc1.arc(x,y,r,180*Math.PI/180,240*Math.PI/180,false);
		oGc1.stroke();
		
	})();
	//绘制6条（2种）弧线，2小圆
	(function(){
		var oc2_1=document.getElementsByClassName("canvas33-2")[0];
		var oGc2_1=oc2_1.getContext("2d");
		
		var x=120;
		var y=120;
		//1
		var r=116;
		oGc2_1.beginPath();
		oGc2_1.lineWidth=8;
		oGc2_1.globalAlpha=0.9;
		oGc2_1.strokeStyle="#00bebe";
		oGc2_1.arc(x,y,r,-110*Math.PI/180,-70*Math.PI/180,false);
		oGc2_1.stroke();
		oGc2_1.beginPath();
		oGc2_1.arc(x,y,r,10*Math.PI/180,50*Math.PI/180,false);
		oGc2_1.stroke();
		oGc2_1.beginPath();
		oGc2_1.arc(x,y,r,130*Math.PI/180,170*Math.PI/180,false);
		oGc2_1.stroke();
		
		
		//2
		var oc2_2=document.getElementsByClassName("canvas33-2")[1];
		var oGc2_2=oc2_2.getContext("2d");
		
		var x=120;
		var y=120;
		r=113;
		oGc2_2.strokeStyle="#00bebe";
		oGc2_2.lineWidth=2;
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,-60*Math.PI/180,-0*Math.PI/180,false);
		oGc2_2.stroke();
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,60*Math.PI/180,120*Math.PI/180,false);
		oGc2_2.stroke();
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,180*Math.PI/180,240*Math.PI/180,false);
		oGc2_2.stroke();
		//3
		var oc2_3=document.getElementsByClassName("canvas33-2")[2];
		var oGc2_3=oc2_3.getContext("2d");
		var x=120;
		var y=120;
		oGc2_3.beginPath();
		
		oGc2_3.globalAlpha=0.5;
		r=107;
		oGc2_3.lineWidth=6;
		oGc2_3.strokeStyle="#88c0c0";
		oGc2_3.arc(x,y,r,0*Math.PI/180,-360*Math.PI/180,false);
		oGc2_3.stroke();
		
		//4
		var oc2_4=document.getElementsByClassName("canvas33-2")[3];
		var oGc2_4=oc2_4.getContext("2d");
		var x=120;
		var y=120;
		oGc2_4.beginPath();
		r=101;
		oGc2_4.lineWidth=3;
		oGc2_4.strokeStyle="#88c0c0";
		oGc2_4.globalAlpha=0.8;
		oGc2_4.arc(x,y,r,0*Math.PI/180,-360*Math.PI/180,false);
		oGc2_4.stroke();
		//5
		
		var oc2_5=document.getElementsByClassName("canvas33-2")[4];
		var oGc2_5=oc2_5.getContext("2d");
		var x=120;
		var y=120;
		oGc2_5.lineWidth=3;
		oGc2_5.strokeStyle="#00bebe";
		r=96;
		for(var i=0;i<180;i++){
			oGc2_5.beginPath();
			oGc2_5.arc(x,y,r,(2*i)*Math.PI/180,(2*i+1)*Math.PI/180,false);
			oGc2_5.stroke();
		}
		//6
		var oc2_6=document.getElementsByClassName("canvas33-2")[5];
		var oGc2_6=oc2_6.getContext("2d");
		var x=120;
		var y=120;
		var obj=oGc2_6.createLinearGradient(0,0,240,240);
		obj.addColorStop(0,"#88c0c0");
		obj.addColorStop(1,"#00bebe");
		
		oGc2_6.fillStyle=obj;
		oGc2_6.globalAlpha=0.3;
		var timer=null;
		var i=0;
		timer=setInterval(function(){
			oGc2_6.beginPath();
			r=90;
			oGc2_6.arc(x,y,r,(i*45+2)*Math.PI/180,(i*45+45-2)*Math.PI/180,false);
			r=44;
			oGc2_6.arc(x,y,r,(i*45+45-2)*Math.PI/180,(i*45+2)*Math.PI/180,true);
			oGc2_6.closePath();
			oGc2_6.fill();
			if(i==7){
				clearInterval(timer);
				timer=null;
			};
			i++;
				
		},150);
			
			
		
		
		
	})();
	//绘制半边弧面
		(function(){
		var oc3=document.getElementsByClassName("canvas33-3")[0];
		var oGc3=oc3.getContext("2d");
		
		var x=260;
		var y=260;
		var r=200;
		oGc3.beginPath();
		oGc3.fillStyle="rgba(0,113,177,0.5)";
		oGc3.arc(x,y,r,30*Math.PI/180,-130*Math.PI/180,true);
		r=160;
		oGc3.arc(x,y,r,-130*Math.PI/180,30*Math.PI/180,false);
		oGc3.fill();
		
	})();
	//绘制图片img1
	(function(){
		var oc4=document.getElementsByClassName("canvas33-4")[0];
		var oGc4=oc4.getContext("2d");
		var img=document.getElementById("img33-1");
		img.onload=function(){
			var pat=oGc4.createPattern(img,"repeat");
			oGc4.fillStyle=pat;
			oGc4.beginPath();
			oGc4.moveTo(26,0);
			oGc4.lineTo(57,31);
			oGc4.lineTo(57,80);
			oGc4.lineTo(49,96);
			oGc4.lineTo(0,75);
			oGc4.lineTo(0,31);
			oGc4.closePath();
			oGc4.fill();
		};
		
		
	})();
	//绘制图片img2
	(function(){
	var oc5=document.getElementsByClassName("canvas33-4")[1];
	var oGc5=oc5.getContext("2d");
	var img=document.getElementById("img33-2");
		img.onload=function(){
			var pat=oGc5.createPattern(img,"repeat");
			oGc5.fillStyle=pat;
			oGc5.beginPath();
			oGc5.moveTo(8,0);
			oGc5.lineTo(57,20);
			oGc5.lineTo(57,77);
			oGc5.lineTo(0,77);
			oGc5.lineTo(0,19);
			oGc5.closePath();
			oGc5.fill();
		};
	
		
	})();
		//绘制图片img3
	(function(){
		var oc6=document.getElementsByClassName("canvas33-4")[2];
		var oGc6=oc6.getContext("2d");
		var img=document.getElementById("img33-3");
			img.onload=function(){
				var pat=oGc6.createPattern(img,"repeat");
				oGc6.fillStyle=pat;
				oGc6.beginPath();
				oGc6.moveTo(0,0);
				oGc6.lineTo(57,0);
				oGc6.lineTo(57,58);
				oGc6.lineTo(4,77);
				oGc6.lineTo(0,72);
				oGc6.closePath();
				oGc6.fill();
		};
	
		
	})();
	//绘制图片img4
	(function(){
		var oc7=document.getElementsByClassName("canvas33-4")[3];
		var oGc7=oc7.getContext("2d");
		var img=document.getElementById("img33-4");
		img.onload=function(){
			var pat=oGc7.createPattern(img,"repeat");
			oGc7.fillStyle=pat;
			oGc7.beginPath();
			oGc7.moveTo(46,0);
			oGc7.lineTo(57,22);
			oGc7.lineTo(57,59);
			oGc7.lineTo(21,93);
			oGc7.lineTo(0,69);
			oGc7.lineTo(0,22);
			oGc7.closePath();
			oGc7.fill();
		};
		
		
	})();
	//绘制线
	(function(){
		var ocLine=document.getElementsByClassName("line1")[2];
		var oGcLine=ocLine.getContext("2d");
		oGcLine.strokeStyle="#00bebe";
		oGcLine.beginPath();
		oGcLine.moveTo(1,0);
		oGcLine.lineTo(1,520);
		oGcLine.stroke();
		
		
		
	})();
	
	
	/////////3end
		///////////////////// 4 page start
	//绘制3条弧线
	(function(){
		var oc1=document.getElementsByClassName("canvas44-1")[0];
		var oGc1=oc1.getContext("2d");
		
		var x=125;
		var y=125;
		var r=120;
		oGc1.beginPath();
		oGc1.lineWidth=8;
		oGc1.strokeStyle="white";
		oGc1.arc(x,y,r,-60*Math.PI/180,0*Math.PI/180,false);
		oGc1.stroke();
		oGc1.beginPath();
		oGc1.arc(x,y,r,60*Math.PI/180,120*Math.PI/180,false);
		oGc1.stroke();
		oGc1.beginPath();
		oGc1.arc(x,y,r,180*Math.PI/180,240*Math.PI/180,false);
		oGc1.stroke();
		
	})();
	//绘制6条（2种）弧线，2小圆
	(function(){
		var oc2_1=document.getElementsByClassName("canvas44-2")[0];
		var oGc2_1=oc2_1.getContext("2d");
		
		var x=120;
		var y=120;
		//1
		var r=116;
		oGc2_1.beginPath();
		oGc2_1.lineWidth=8;
		oGc2_1.globalAlpha=0.9;
		oGc2_1.strokeStyle="#00bebe";
		oGc2_1.arc(x,y,r,-110*Math.PI/180,-70*Math.PI/180,false);
		oGc2_1.stroke();
		oGc2_1.beginPath();
		oGc2_1.arc(x,y,r,10*Math.PI/180,50*Math.PI/180,false);
		oGc2_1.stroke();
		oGc2_1.beginPath();
		oGc2_1.arc(x,y,r,130*Math.PI/180,170*Math.PI/180,false);
		oGc2_1.stroke();
		
		
		//2
		var oc2_2=document.getElementsByClassName("canvas44-2")[1];
		var oGc2_2=oc2_2.getContext("2d");
		
		var x=120;
		var y=120;
		r=113;
		oGc2_2.strokeStyle="#00bebe";
		oGc2_2.lineWidth=2;
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,-60*Math.PI/180,-0*Math.PI/180,false);
		oGc2_2.stroke();
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,60*Math.PI/180,120*Math.PI/180,false);
		oGc2_2.stroke();
		oGc2_2.beginPath();
		oGc2_2.arc(x,y,r,180*Math.PI/180,240*Math.PI/180,false);
		oGc2_2.stroke();
		//3
		var oc2_3=document.getElementsByClassName("canvas44-2")[2];
		var oGc2_3=oc2_3.getContext("2d");
		var x=120;
		var y=120;
		oGc2_3.beginPath();
		
		oGc2_3.globalAlpha=0.5;
		r=107;
		oGc2_3.lineWidth=6;
		oGc2_3.strokeStyle="#88c0c0";
		oGc2_3.arc(x,y,r,0*Math.PI/180,-360*Math.PI/180,false);
		oGc2_3.stroke();
		
		//4
		var oc2_4=document.getElementsByClassName("canvas44-2")[3];
		var oGc2_4=oc2_4.getContext("2d");
		var x=120;
		var y=120;
		oGc2_4.beginPath();
		r=101;
		oGc2_4.lineWidth=3;
		oGc2_4.strokeStyle="#88c0c0";
		oGc2_4.globalAlpha=0.8;
		oGc2_4.arc(x,y,r,0*Math.PI/180,-360*Math.PI/180,false);
		oGc2_4.stroke();
		//5
		
		var oc2_5=document.getElementsByClassName("canvas44-2")[4];
		var oGc2_5=oc2_5.getContext("2d");
		var x=120;
		var y=120;
		oGc2_5.lineWidth=3;
		oGc2_5.strokeStyle="#00bebe";
		r=96;
		for(var i=0;i<180;i++){
			oGc2_5.beginPath();
			oGc2_5.arc(x,y,r,(2*i)*Math.PI/180,(2*i+1)*Math.PI/180,false);
			oGc2_5.stroke();
		}
		//6
		var oc2_6=document.getElementsByClassName("canvas44-2")[5];
		var oGc2_6=oc2_6.getContext("2d");
		var x=120;
		var y=120;
		var obj=oGc2_6.createLinearGradient(0,0,240,240);
		obj.addColorStop(0,"#88c0c0");
		obj.addColorStop(1,"#00bebe");
		
		oGc2_6.fillStyle=obj;
		oGc2_6.globalAlpha=0.3;
		var timer=null;
		var i=0;
		timer=setInterval(function(){
			oGc2_6.beginPath();
			r=90;
			oGc2_6.arc(x,y,r,(i*45+2)*Math.PI/180,(i*45+45-2)*Math.PI/180,false);
			r=44;
			oGc2_6.arc(x,y,r,(i*45+45-2)*Math.PI/180,(i*45+2)*Math.PI/180,true);
			oGc2_6.closePath();
			oGc2_6.fill();
			if(i==7){
				clearInterval(timer);
				timer=null;
			};
			i++;
				
		},150);
			
			
		
		
		
	})();
	//绘制半边弧面
		(function(){
		var oc3=document.getElementsByClassName("canvas44-3")[0];
		var oGc3=oc3.getContext("2d");
		
		var x=260;
		var y=260;
		var r=200;
		oGc3.beginPath();
		oGc3.fillStyle="rgba(0,113,177,0.5)";
		oGc3.arc(x,y,r,30*Math.PI/180,-130*Math.PI/180,true);
		r=160;
		oGc3.arc(x,y,r,-130*Math.PI/180,30*Math.PI/180,false);
		oGc3.fill();
		
	})();
	//绘制图片img1
	(function(){
		var oc4=document.getElementsByClassName("canvas44-4")[0];
		var oGc4=oc4.getContext("2d");
		var img=document.getElementById("img44-1");
		img.onload=function(){
			var pat=oGc4.createPattern(img,"repeat");
			oGc4.fillStyle=pat;
			oGc4.beginPath();
			oGc4.moveTo(26,0);
			oGc4.lineTo(57,31);
			oGc4.lineTo(57,80);
			oGc4.lineTo(49,96);
			oGc4.lineTo(0,75);
			oGc4.lineTo(0,31);
			oGc4.closePath();
			oGc4.fill();
		};
		
		
	})();
	//绘制图片img2
	(function(){
	var oc5=document.getElementsByClassName("canvas44-4")[1];
	var oGc5=oc5.getContext("2d");
	var img=document.getElementById("img44-2");
		img.onload=function(){
			var pat=oGc5.createPattern(img,"repeat");
			oGc5.fillStyle=pat;
			oGc5.beginPath();
			oGc5.moveTo(8,0);
			oGc5.lineTo(57,20);
			oGc5.lineTo(57,77);
			oGc5.lineTo(0,77);
			oGc5.lineTo(0,19);
			oGc5.closePath();
			oGc5.fill();
		};
	
		
	})();
		//绘制图片img3
	(function(){
		var oc6=document.getElementsByClassName("canvas44-4")[2];
		var oGc6=oc6.getContext("2d");
		var img=document.getElementById("img44-3");
			img.onload=function(){
				var pat=oGc6.createPattern(img,"repeat");
				oGc6.fillStyle=pat;
				oGc6.beginPath();
				oGc6.moveTo(0,0);
				oGc6.lineTo(57,0);
				oGc6.lineTo(57,58);
				oGc6.lineTo(4,77);
				oGc6.lineTo(0,72);
				oGc6.closePath();
				oGc6.fill();
		};
	
		
	})();
	//绘制图片img4
	(function(){
		var oc7=document.getElementsByClassName("canvas44-4")[3];
		var oGc7=oc7.getContext("2d");
		var img=document.getElementById("img44-4");
		img.onload=function(){
			var pat=oGc7.createPattern(img,"repeat");
			oGc7.fillStyle=pat;
			oGc7.beginPath();
			oGc7.moveTo(46,0);
			oGc7.lineTo(57,22);
			oGc7.lineTo(57,59);
			oGc7.lineTo(21,93);
			oGc7.lineTo(0,69);
			oGc7.lineTo(0,22);
			oGc7.closePath();
			oGc7.fill();
		};
		
		
	})();
	//绘制线
	(function(){
		var ocLine=document.getElementsByClassName("line1")[3];
		var oGcLine=ocLine.getContext("2d");
		oGcLine.strokeStyle="#00bebe";
		oGcLine.beginPath();
		oGcLine.moveTo(1,0);
		oGcLine.lineTo(1,520);
		oGcLine.stroke();
		
		
		
	})();
	
	
	/////////4end
	//绘制光线globalAlpha=0.9;
	/*
	(function(){
		var showpage1=document.getElementsByClassName("showpage")[0];
		var oshowpage1=showpage1.getContext("2d");
		oshowpage1.strokeStyle="#03a5ab";
		oshowpage1.lineWidth=3;
		oshowpage1.globalAlpha=0.5;
		oshowpage1.beginPath();
		oshowpage1.moveTo(0,200);
		oshowpage1.lineTo(520,0);
		oshowpage1.stroke();
	})();
	(function(){
		var showpage1=document.getElementsByClassName("showpage")[1];
		var oshowpage1=showpage1.getContext("2d");
		oshowpage1.strokeStyle="#03a5ab";
		oshowpage1.globalAlpha=0.5;
		oshowpage1.lineWidth=3;
		oshowpage1.beginPath();
		oshowpage1.moveTo(0,0);
		oshowpage1.lineTo(520,200);
		oshowpage1.stroke();
	})();
	(function(){
		var showpage1=document.getElementsByClassName("showpage")[2];
		var oshowpage1=showpage1.getContext("2d");
		oshowpage1.strokeStyle="#03a5ab";
		oshowpage1.globalAlpha=0.5;
		oshowpage1.lineWidth=3;
		oshowpage1.beginPath();
		oshowpage1.moveTo(0,200);
		oshowpage1.lineTo(520,0);
		oshowpage1.stroke();
	})();
	绘制光线end
	*/
	//example 绘制线
	(function(){
		var ocLine=document.getElementsByClassName("canvasS1")[0];
		var oGcLine=ocLine.getContext("2d");
		oGcLine.strokeStyle="#04d0d5";
		oGcLine.lineWidth=1;
		oGcLine.beginPath();
		oGcLine.moveTo(0,124);
		oGcLine.lineTo(102,2);
		oGcLine.lineTo(129,2);
		oGcLine.stroke();
	})();
	// example end
	(function(){
		var fl=1;
		var fr=-1;
		//事件
		$(".animate").click(function(){//点击展开或合拢圆环
			if(fr!=$(this).parent().index()){
				fr=$(this).parent().index();
				fl=1;
			};
			if(fl==1){
				//展开fl变0；
				
				if(fr==0){
					$(".showAll").css("transform","translateX(0px)");
					$(".example .text h4").html("100度电商网站");
					$(".example .text .center p").html("这是我在学习期间完成的第1个作品。整体比较简单，主要是熟悉对网页的整体布局，培养整站规划的感觉，UI均来自课堂笔记。");
					$(".example .text .bottom1 a").removeClass("open1 open2 open3");
					$(".example .text .bottom1 a").addClass("open0");
				}else if(fr==1){
					$(".showAll").css("transform","translateX(-520px)");
					$(".example .text h4").html("小米5官网");
					$(".example .text .center p").html("这是我在学习期间完成的第2个作品。运用了TweenMax结合jq进行整屏切换，其中较有难度的是对控制条的把控。UI来自小米官网。");
					$(".example .text .bottom1 a").removeClass("open0 open2 open3");
					$(".example .text .bottom1 a").addClass("open1");
				}else if(fr==2){
					$(".showAll").css("transform","translateX(-1040px)");
					$(".example .text h4").html("QQ浏览器");
					$(".example .text .center p").html("第3个作品是现在已经打开的网页，当时并未完善。QQ浏览器是我在学习期间完成的第4个作品。运用了Css3结合jq进行动画切换，这个页面较为简单，耗时2天，但比较有视觉冲击感，。UI来自QQ。");
					$(".example .text .bottom1 a").removeClass("open1 open0 open3");
					$(".example .text .bottom1 a").addClass("open2");
				}else if(fr==3){
					$(".showAll").css("transform","translateX(-1560px)");
					$(".example .text h4").html("百度云");
					$(".example .text .center p").html("百度云是我在学习期间完成的第4个作品。运用了jq进行Dom节点操作，实现了侧边栏的选项移动，文件的新建，删除，重命名等，页面比较有规矩。UI来自百度。");
					$(".example .text .bottom1 a").removeClass("open1 open2 open0");
					$(".example .text .bottom1 a").addClass("open3");
				};
				$(".showAll .light").removeClass("showlight");
				for(var i=0;i<$(".animate").parent().size();i++){//判断是否移动，page1和page3特殊处理
					if($(".animate").parent().eq(i).hasClass("page1")||$(".animate").parent().eq(i).hasClass("page3")){
						$(".animate").parent().eq(i).css("transform","translateY(200px)");
					}else{
					
						$(".animate").parent().eq(i).css("transform","translateY(0px)");
					};
				};
				
				openGo($(".animate"),0);
				$(this).parent().css("transform","translateY(20px)");//移动
				openGo($(this),1);
				setTimeout(function(){
					fl=0;
				},800);
				
			}else if(fl==0){
				//合并
				$(".showAll .light").addClass("showlight");
				
				if($(this).parent().hasClass("page1")||$(this).parent().hasClass("page3")){
					$(this).parent().css("transform","translateY(200px)");
				}else{
					$(this).parent().css("transform","translateY(0px)");
				};
				
				openGo($(this),0);
				setTimeout(function(){
					fl=1;
				},800);
			}
		});
		function openGo(obj,flag){
			if(flag==0){//合并
				
				obj.find(".meddile .center1").fadeIn(600);
				obj.find(".meddile .side1").css("left","0px");
				obj.find(".meddile .side2").css("right","0px");
				obj.removeClass("show");
				obj.addClass("hide");
				$(".example").hide(100);
				
			}else{//展开
				
				obj.removeClass("hide load");
				obj.addClass("show");
				obj.find(".meddile .side1").css("left","-66px");
				obj.find(".meddile .side2").css("right","-66px");
				obj.find(".meddile .center1").fadeOut(300);
				obj.find(".top").find(".caret1").animate({"opacity":0},100).animate({"opacity":1},150).animate({"opacity":0},150).animate({"opacity":1},150).animate({"opacity":0},150).animate({"opacity":1},200).animate({"opacity":0},200).animate({"opacity":1},200);
				
				setTimeout(function(){
					$(".example").show(600);
				},300);
		}};
			
		
		
	})()
	
	/* $(".animate").hover(function(){//鼠标经过时，环变清晰
		$(this).css('opacity',1);
	},function(){
		$(this).css('opacity',0.3);
	}); */
	
	$(".bg img").load(function(){
		init();
	})
	
	
		
	function init(){
		$(window).resize(function(){
			
			$(".alertbg").height($(window).height());
			$(".alertbg").width($(window).width());
			$(".alertbg .alert").css("top",($(window).height()-$(".alertbg .alert").height())/2);
		});
		//改变light背景
		(function(){
			var i=0;
			setInterval(function(){
				i+=2;
				if(i>500){i=0};
				$(".showAll .light .row .case1").css("backgroundPosition",-i+"px center");
			},100);
			
			
		})();
		//改变light背景end
		
		(function(){
			setTimeout(function(){
				$(".meddile .center1").css("transform","scaleY(0.01)");
				$(".showAll .light").addClass("showlight");//显示light线；
			},1000);
			setTimeout(function(){
				$(".meddile .center1").css("transform","scale(1) ");
				$(".meddile .side1").css("left","0");
				$(".meddile .side2").css("right","0");
				
			},1250);
		})();
		//初始化height。opacity等
		(function(){
			$("#work").height($(window).height());
			$("#self").height($(window).height());
			$(".animate").css("top","0px");
			$(".animate").eq(1).css("opacity",1);
			
			$("#head1").css("color","#fff");
			var w=$(window).width();
			$("#work .bottom .light").css("width",w);
			$("#work .bottom .light").css("left",(580-w)/2);
			$(".alertbg").height($(window).height());
			$(".alertbg").width($(window).width());
			$(".alertbg .alert").css("top",($(window).height()-$(".alertbg .alert").height())/2);
		})();
		(function(){
			var i=45;
			var num=1;
			var h3=["学习HTML5+Css3"];
			var p=["HTML5+css3特效是是当下网站设计的流行趋势,学Css3网站收集了大量国内外HTML5+css3特效代码和教程,帮助初学者了解学习HTML5和css3"];
			$("#work .btn").click(function(){
				if(num==1){
					$("#work .workRotate.load li").css("transition","0.6s");
					$("#work .workRotate.load li").eq(0).css("transform","rotateX("+(i)+"deg) translateZ(100px)");
					$("#work .workRotate.load  li").eq(1).css("transform","rotateX("+(-45+i)+"deg) translateZ(100px)");
					$("#work .workRotate.load  li").eq(2).css("transform","rotateX("+(-90+i)+"deg) translateZ(100px)");
					$("#work .workRotate.load  li").eq(3).css("transform","rotateX("+(-135+i)+"deg) translateZ(100px)");
					$("#work .workRotate.load  li").eq(4).css("transform","rotateX("+(-180+i)+"deg) translateZ(100px)");
					$("#work .workRotate.load  li").eq(5).css("transform","rotateX("+(-225+i)+"deg) translateZ(100px)");
					$("#work .workRotate.load  li").eq(6).css("transform","rotateX("+(-270+i)+"deg) translateZ(100px)");
					$("#work .workRotate.load  li").eq(7).css("transform","rotateX("+(-315+i)+"deg) translateZ(100px)");
					num=0;
					setTimeout(function(){
						i+=45;
						num=1;
					},800)
					$("#work .bottom .light2").css("opacity",0.6);
					setTimeout(function(){$("#work .bottom .light2").css("opacity",0);},300);	
				}
				
			});
			
		})();
		//事件点击
		$(".example .text .bottom1 a").click(function(){
			var item=[
				["100度电商网站","2016.4","/xpanpan1/index.html"],
				["小米5官网","2016.5","/xpanpan2/index.html"],
				["QQ浏览器","2016.7","/xpanpan4/index.html"],
				["百度云","2016.7","/xpanpan5/index.html"]
			];
			var con=["这是我在学习期间完成的第1个作品。整体比较简单，主要是熟悉对网页的整体布局，培养整站规划的感觉，UI均来自课堂笔记。",
				"这是我在学习期间完成的第2个作品。运用了TweenMax结合jq进行整屏切换，其中较有难度的是对控制条的把控。UI来自小米官网。",
				"第3个作品是现在已经打开的网页，当时并未完善。QQ浏览器是我在学习期间完成的第4个作品。运用了Css3结合jq进行动画切换，这个页面较为简单，耗时2天，但比较有视觉冲击感。UI来自QQ。",
				"百度云是我在学习期间完成的第4个作品。运用了jq进行Dom节点操作，实现了侧边栏的选项移动，文件的新建，删除，重命名等，页面比较有规矩。UI来自百度。"
			];
			if($(this).hasClass("open0")){//第一个
				//改变文字
				$(".alertbg .alert .content .text .row1 b").html(item[0][0]);
				$(".alertbg .alert .content .text .row2 b").html(item[0][1]);
				$(".alertbg .alert .content .text .row3 a").html(item[0][2]);
				$(".alertbg .alert .content .text .row3 a").attr("href",item[0][2]);
				$(".alertbg .alert .content .text .row4 b").html(con[0]);
				//改变图片
				$(".alertbg .alert .content .pic img").eq(0).attr("src","img/xpan1-1.png");
				$(".alertbg .alert .content .pic img").eq(1).attr("src","img/xpan1-2.png");
				$(".alertbg .alert .content .pic img").eq(2).attr("src","img/xpan1-3.png");
			}else if($(this).hasClass("open1")){//第二个
				//改变文字
				$(".alertbg .alert .content .text .row1 b").html(item[1][0]);
				$(".alertbg .alert .content .text .row2 b").html(item[1][1]);
				$(".alertbg .alert .content .text .row3 a").html(item[1][2]);
				$(".alertbg .alert .content .text .row3 a").attr("href",item[1][2]);
				$(".alertbg .alert .content .text .row4 b").html(con[1]);
				//改变图片
				$(".alertbg .alert .content .pic img").eq(0).attr("src","img/xpan2-1.png");
				$(".alertbg .alert .content .pic img").eq(1).attr("src","img/xpan2-2.png");
				$(".alertbg .alert .content .pic img").eq(2).attr("src","img/xpan2-3.png");
				
			}else if($(this).hasClass("open2")){//第3个
			//改变文字
				$(".alertbg .alert .content .text .row1 b").html(item[2][0]);
				$(".alertbg .alert .content .text .row2 b").html(item[2][1]);
				$(".alertbg .alert .content .text .row3 a").html(item[2][2]);
				$(".alertbg .alert .content .text .row3 a").attr("href",item[2][2]);
				$(".alertbg .alert .content .text .row4 b").html(con[2]);
				//改变图片
				$(".alertbg .alert .content .pic img").eq(0).attr("src","img/xpan4-1.png");
				$(".alertbg .alert .content .pic img").eq(1).attr("src","img/xpan4-2.png");
				$(".alertbg .alert .content .pic img").eq(2).attr("src","img/xpan4-3.png");
				
			}else if($(this).hasClass("open3")){//第4个
			//改变文字
				$(".alertbg .alert .content .text .row1 b").html(item[3][0]);
				$(".alertbg .alert .content .text .row2 b").html(item[3][1]);
				$(".alertbg .alert .content .text .row3 a").html(item[3][2]);
				$(".alertbg .alert .content .text .row3 a").attr("href",item[3][2]);
				$(".alertbg .alert .content .text .row4 b").html(con[3]);
				//改变图片
				$(".alertbg .alert .content .pic img").eq(0).attr("src","img/xpan5-1.png");
				$(".alertbg .alert .content .pic img").eq(1).attr("src","img/xpan5-2.png");
				$(".alertbg .alert .content .pic img").eq(2).attr("src","img/xpan5-3.png");
				
			}
			$(".alertbg").show(600);
			$(".alertbg .alert").css("top",($(window).height()-$(".alertbg .alert").height())/2);
			
		});
		$(".alertbg .alert .content .closealert").click(function(){
			$(".alertbg").hide(10);
		});
		$("#head1").click(function(){
			$("#head1").css("color","#fff");
			$("#head2").css("color","#00ace3");
			$("#head3").css("color","#00ace3");
			$("#exp").show(100);
			$("#work").hide(100);
			$("#self").hide(100);
				$("#work .bottom .light").css("opacity",0.6);
			$("#work .wrap2").css("left",30);
			$("#work .wrap2 .workRotate").removeClass("load");
			$("#self .wrap1 .pic").hide(100);
			$(".animate").eq(1).css("opacity",1);
		});
		$("#head2").click(function(){
			$("#head1").css("color","#00ace3");
			$("#head2").css("color","#fff");
			$("#head3").css("color","#00ace3");
			$("#exp").hide(100);
			$("#work").show(100);
			$("#self").hide(100);
			var per=(3416/14); 
			var timer=null;	
			timer=setInterval(function(){
			$("#work .bottom .pic").css("backgroundPosition","0 "+-per+"px");
			per+=(3416/14);
			if(per>3400){
				clearInterval(timer);
			}
			},100);
			$("#work .bottom .light").css("opacity",0);
			$("#work .wrap2").css("left",350);
			$("#work .wrap2 .workRotate").addClass("load");
			$("#self .wrap1 .pic").hide(100);
		});
		$("#head3").click(function(){
			$("#head1").css("color","#00ace3");
			$("#head3").css("color","#fff");
			$("#head2").css("color","#00ace3");
			$("#exp").hide(100);
			$("#work").hide(100);
			$("#self").show(100);
			$("#self .wrap1 .pic").show(1000);
			$("#self .caret-wrap").addClass("showCaret");
			$("#self .wrap2 .pic2").find("p").show(1000);
			$("#work .bottom .light").css("opacity",0.6);
			$("#work .wrap2").css("left",30);
			$("#work .wrap2 .workRotate").removeClass("load");
			
		});
		
	};
	


});