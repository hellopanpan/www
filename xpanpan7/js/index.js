$(function(){
	$("body").on("selectstart",function(ev){var ev=ev||window.event;ev.preventDefault();});
	(function(){
		var i=85;
		var fl=0;
		var j=0;
		var k=45;
		var h=1;
		$("#nav li a").eq(1).click(function(){
			j+=40;
			k+=20;
			if(j>190){
				j=0;
			}
			if(k>190){
				k=0;
			}
		});
		setInterval(function(){
			$('body').css("background","radial-gradient(circle at 75% 0%,rgba("+(j+50)+","+(k+50)+","+(i+50)+","+0.8*h+") 0%,rgba("+j+","+k+","+i+","+h+") 100%)");
			
			if(fl==0){
				i+=3;
				if(i>150){
					fl=1;
				}
			}else{
				i-=3;
				if(i<50){
					fl=0;
				}
			};
		},500);
		
		
	})();
	var flg1=0;
	$("#nav li a").eq(3).click(loginClick);
	function loginClick(){//登录
		if(flg1==0){
			$("#login").css("display",'block');	
			
			setTimeout(function(){
				$("#login").css("transform","rotateY(0deg)");
			},50);
			flg1=1;
		}else{
			$("#login").css("transform","rotateY(90deg)");
			$("#reg").css("transform","rotateY(90deg)");
			setTimeout(function(){
				$("#login").hide();
				$("#reg").hide();
			},500);
			
			flg1=0;
		}
			
	}
	$("#login a").click(function(){//切换到登录
		
		$("#reg").css("display",'block');
		setTimeout(function(){
			$("#login").css("transform","rotateY(90deg)");
			setTimeout(function(){
					$("#reg").css("transform","rotateY(0deg)");
			},500);
		},50);
			
	
			
	});
	$("#reg a").click(function(){//切换到注册
		$("#login").css("display",'block');
		setTimeout(function(){
			$("#reg").css("transform","rotateY(90deg)");
			setTimeout(function(){
					$("#login").css("transform","rotateY(0deg)");
			},900);
		},100);
	});
	//点击side的a跳转href
	
		

	

	$("#question").resetForm();
	
	function changeTop(){//改变注册和用户名等切换
		if($.cookie("user")){
			$("#nav li").eq(3).hide();
			$("#nav li").eq(4).show();
			$("#nav li a").eq(4).html("<i class='ico ico5'></i>"+$.cookie("user")+"/登出");
		}else{
			$("#nav li").eq(4).hide();
			$("#nav li").eq(3).show();
		};
	};
	changeTop();
	
	
	//退出
	$("#nav li a").eq(4).click(function(){
		
		$.removeCookie("user");
		changeTop();
		$("#loading").show();
		$("#loading").html("成功退出");
		setTimeout(function(){
			$("#loading").hide();
			$("#loading").html("数据交互中");
		},1000);
	});
	//注册框

	//验证注册框
	$("#reg").validate({
		rules:{
			user:{
				required:true,
				minlength:3,
				remote:{
					url:"is_user.php",
					type:"POST",
				}
			},
			pass:{
				required:true,
				minlength:4,
			},
			email:{
				required:true,
				email:true,
			},
			
		},
		messages:{
			user:{
				required:"账号不为空",
				minlength:jQuery.format("账号不小于{0}"),
				remote:"账号被占用",
				
			},
			pass:{
				required:"密码不为空",
				minlength:jQuery.format("账号不小于{0}"),
			},
			email:{
				required:"邮箱不为空",
				email:"请输入正确的邮箱格式",
			},
			
		},
		//错误提示
		highlight:function(element,errorClass){
			$(element).css("border","1px solid #fe2098");
			$(element).css("background","rgba(255,252,253,0.6)");
		},
		unhighlight:function(element,errorClass){
			$(element).css("border","1px solid #666");
		},
		wrapper:"li",
		//提交注册信息表php
		submitHandler:function(form){
			$(form).ajaxSubmit({
				url:"add.php",
				type:"POST",
				beforeSubmit:function(){
					$("#loading").show();
					$(".loading2").show();
					$(".loading2").width($("#head").width()-2);
				},
				success:function(responseText,statusText){
					
					$.cookie("user",$("#reg").find("input").eq(0).val());
					$("#loading").html("注册成功");
					
					setTimeout(function(){
						$("#reg").hide();
						$(".loading2").hide();
						$(".loading2").width(0);
						
						$("#loading").hide();
						$("#loading").html("数据交互中");
						//head头的变化；
						changeTop();
					},1000);
					
					
				},
			});
		},
		
		
	});
	//提示条框
	
	
	//登录框

	//是否登录
	$("#login").validate({
		rules:{
			user:{
				required:true,
				minlength:3,
				
			},
			pass:{
				required:true,
				minlength:4,
			},	
		},
		messages:{
			user:{
				required:"账号不为空",
				minlength:jQuery.format("账号不小于{0}"),
				
			},
			pass:{
				required:"密码不为空",
				minlength:jQuery.format("账号不小于{0}"),
			},
		},
		//错误提示
		highlight:function(element,errorClass){
			$(element).css("border","1px solid #fe2098");
			$(element).css("background","rgba(255,252,253,0.6)");
		},
		unhighlight:function(element,errorClass){
			$(element).css("border","1px solid #666");
		},
		wrapper:"li",
		submitHandler:function(form){
			$(form).ajaxSubmit({
				url:"login.php",
				type:"POST",
				beforeSubmit:function(){
					$("#loading").show();
					$(".loading2").show();
					$(".loading2").width($("#head").width()-2);
				},
				success:function(responseText,statusText){
					
					if(responseText=="true"){
						$("#loading").html("登录成功");
						//设置cookie
						$.cookie("user",$("#login").find("input").eq(0).val());
						setTimeout(function(){
							changeTop();
							$(".loading2").hide();
							$(".loading2").width(0);
							$("#login").hide();
							$("#loading").hide();
							$("#loading").html("数据交互中");
							$(".loading2").hide();
							$(".loading2").width(0);
						},1000);
							
					}else{
						$("#loading").html("登录失败");
						setTimeout(function(){
							$(".loading2").hide();
							$(".loading2").width(0);
							$("#loading").hide();
							$("#loading").html("数据交互中");
						},1000);
					}	
							
				},
			});
		},

	});
	//问题框
	$("#nav li a").eq(2).click(function(){
		if($.cookie("user")){
			$(".question").show();
			$("#question").css("top",($(window).height()-$("#question").height())/4);
			$(".question").on("mousewheel",function(ev){
				var ev=ev||window.event;
				ev.preventDefault();
			});
		}else{
			$("#loading").show();
			$("#loading").html("请登录后操作");
			setTimeout(function(){
				$("#loading").hide();
				$("#loading").html("数据交互中");
				if(flg1==0)loginClick();				
			},1000);
			
		}
		
	});
	$(".question .close1").click(function(){
			$(".question").hide();
	});
	
	$("#question").validate({
		//问题数据验证
		rules:{
			title:{
				required:true,
				minlength:2,
				maxlength:30,
			},
			content:{
				required:true,
				minlength:10,
			},
		},
		messages:{
			title:{
				required:"标题不为空",
				minlength:jQuery.format("标题不小于{0}"),
				maxlength:jQuery.format("标题不大于{0}"),
			},
			content:{
				required:"内容不为空",
				minlength:jQuery.format("内容不小于{0}个字符"),
			}
		},
		submitHandler:function(form){
			//提交问题
			var picsizeFlag=0;
			var picnameFlag=0;
			function checkpicSize(){
				if($(".question .pic input").get(0).files[0].size/1024<1024){
					picsizeFlag=1;
				};
				if(picsizeFlag==0){
					alert("请上传小于1M的图片！");
				};
			}
			function checkpicType(){
				var picName=$(".question .pic input").val();
				var picArr=['jpg','jpeg','png','gif'];
				var nameArr=picName.split(".");
				var newnameArr=nameArr[nameArr.length-1];
				for(var i=0;i<picArr.length;i++){
					if(picArr[i]==newnameArr){
						picnameFlag=1;
					};
				};
				if(picnameFlag==0){
					alert("请上传jpg、png、gif格式图片！");
				};	
			};
			function uploadFn(){
				//图片文件上传
				var oForm=new FormData();
				oForm.append("file",$(".question .pic input").get(0).files[0]);
				var xhr22 = new XMLHttpRequest();
					xhr22.open("POST","add_file.php",false);
					xhr22.onload=function(){
						if(this.responseText==1){
							formSubmitFn();
							$("#loading").html("图片上传成功");
							setTimeout(function(){	
								$("#loading").hide();
								$("#loading").html("数据交互中");
							},1000);
						}else{
							$("#loading").html("图片上传失败");
							setTimeout(function(){	
								$("#loading").hide();
								$("#loading").html("数据交互中");
							},1000);
						}
						
					};
				xhr22.send(oForm);
			};
			if($(".question .pic input").val()){
				checkpicType();
				checkpicSize();
				if(picsizeFlag==1&&picnameFlag==1){
						uploadFn();
				};
			}else{
				alert("必须上传图片");
			};
			function formSubmitFn(){
				var postnameArr=$(".question .pic input").val().split('\\');
				var newpostname=postnameArr[postnameArr.length-1];
				$(form).ajaxSubmit({
					url:"add_content.php",
					type:"POST",
					//添加问题的信息：用户名，
					data:{
						"user":$.cookie("user"),
						"picname":newpostname,
					},
					beforeSubmit:function(){
						$(".loading2").show();
						$(".loading2").width($("#head").width()-2);
						$("#loading").show();
					},
					success:function(responseText,statusText){
						
						if(responseText=="1"){
							$("#loading").html("问题提交成功");
							
							setTimeout(function(){
								$(".question").hide();
								$("#loading").hide();
								$(".loading2").hide();
								$(".loading2").width(0);
								shownewlist();
								$("#loading").html("数据交互中");
								$("#question").resetForm();
								upData();
							},1000);
								
						}else{
							$("#loading").html("问题提交失败");
							setTimeout(function(){
								$(".loading2").hide();
								$(".loading2").width(0);
								$("#loading").hide();
								$("#loading").html("数据交互中");
							},1000);
						}	
					},
					
				})
			};
		},
		
	});//更新内容
	upData();
	function upData(){
		$.ajax({
			url:"show_content.php",
			type:"POST",
			success:function(response,status,xhr){
				var json=$.parseJSON(response);
				var html='';
				var arr=[];
				for(var i=0;i<json.length;i++){//显示全部问题
					if(json[i].picname){
						html+='<div class="item"><div class="itemhead"><img src="img/user'+json[i].userid%4+'.png" onerror="javascript:this.src='+"'img/user3.png'"+'"/><div class="text"><a name="item'+json[i].id+'"></a><h4>'+(json[i].user)+'</h4><span>'+(json[i].date)+'</span></div></div><h3>'+(json[i].title)+'</h3><div class="content1">'+(json[i].content)+'</div><div class="addpic"><img src="upload/'+(json[i].picname)+'"></div><div class="bottom"><span class="comment" data-id="'+json[i].id+'">'+json[i].count+'条评论</span><span class="down">显示全部</span><span class="up">收起</span></div><div class="line"></div><div class="comment_list"></div></div>';
					
					}else{
						html+='<div class="item"><div class="itemhead"><img src="img/user'+json[i].userid%4+'.png" onerror="javascript:this.src='+"'img/user3.png'"+'"/><div class="text"><a name="item'+json[i].id+'"></a><h4>'+json[i].user+'</h4><span>'+json[i].date+'</span></div></div><h3>'+json[i].title+'</h3><div class="content1">'+json[i].content+'</div><div class="addpic"></div><div class="bottom"><span class="comment" data-id="'+json[i].id+'">'+json[i].count+'条评论</span><span class="down">显示全部</span><span class="up">收起</span></div><div class="line"></div><div class="comment_list"></div></div>';
					};
					
				};
				$("#content").html(html);
				
				$.each($("#content .content1"),function(index,value){ //每个问题下面的额按钮点击
					arr[index]=$(value).height();
					if($(value).height()> 34){
						$(value).height(34);
						$("#content .up").eq(index).hide();
					}else{
						$("#content .up").eq(index).hide();
						$("#content .down").eq(index).hide();
					};
					//图片 大小显示
					var iImg=$("#content .item").eq(index).find(".addpic img");
					if(iImg.length==3){
						iImg.width(160);
						//iImg.height(160);
					}else if(iImg.length==4){
						iImg.width(200);
						//iImg.height(220);
					}else if(iImg.length>=5){
						iImg.width(160);
						//iImg.height(160);
					}
					$("#content .down").eq(index).click(function(){//展开
						$(this).hide();
						$(value).height(arr[index]);
						$("#content .up").eq(index).show();
					});
					$("#content .up").eq(index).click(function(){//收起
						$(this).hide();
						$(value).height(34);
						$("#content .down").eq(index).show();
					});
					$("#content .comment").eq(index).click(function(){//0条评论，点击
						if($.cookie("user")){//如果没有登录cookie
							if(!$("#content .comment_list").eq(index).has("form").length){//如果没有评论框，添加
								
								$.ajax({//加载评论
									url:"show_comment.php",
									type:"POST",
									data:{
										"data-id":$("#content .comment").eq(index).attr("data-id"),
									},
									beforeSend:function(){
										$("#content .comment_list").eq(index).append('<div class="comment_load">正在加载</div>');
									},
									success:function(response,status,xhr){
										$("#content .comment_list").eq(index).find(".comment_load").hide();
										var count=0;
										var json2=$.parseJSON(response);
										
										for(var j=0;j<json2.length;j++){
											$("#content .comment_list").eq(index).append('<div class="comment_content"><p><span>'+json2[j].user+'</span>评论于<span>'+json2[j].date+'</span></p><p>'+json2[j].content+'</p></div>');
											count=json2[j].count;
											
										};
										$("#content .comment_list").eq(index).append('<div class="load_more">加载更多</div>');
										var page=2;
										if(page>count){
											$("#content .comment_list").eq(index).find(".load_more").hide();
										}
										$("#content .comment_list").eq(index).find(".load_more").click(function(){// 加载更多
											$.ajax({
												url:"show_comment.php",
												type:"POST",
												data:{
													"data-id":$("#content .comment").eq(index).attr("data-id"),
													"page":page,
												},
												beforeSend:function(){
													
												},
												success:function(response,status,xhr){
													var json3=$.parseJSON(response);
													
													for(var k=0;k<json3.length;k++){
														$("#content .comment_list").eq(index).find(".comment_content").last().after('<div class="comment_content"><p><span>'+json3[k].user+'</span>评论于<span>'+json3[k].date+'</span></p><p>'+json3[k].content+'</p></div>');
													};
													page++;
													if(page>count){
														$("#content .comment_list").eq(index).find(".load_more").hide();
													}
												},
												
												
												
											});
											
										});
										$("#content .comment_list").eq(index).append('<div class="comment_push"><form><dl class="comment_add"><dt><textarea name="comment" placeholder="输入评论"></textarea></dt><dd><input type="button" class="publish" value="发表"></dd></dl></form></div>');
										
										$("#content .comment_list").eq(index).find(".publish").click(function(){//评论发布按钮点击：、==注意，是评论展开下面
											var _this=this;
											$("#content .comment_list").eq(index).find("form").ajaxSubmit({
												url:"add_comment.php",
												type:"POST",
												data:{
													"user": $.cookie("user"),
													"data-id":$("#content .comment").eq(index).attr("data-id"),
												},
												beforeSubmit:function(){
													
												
													$("#loading").show();
												},
												success:function(responseText,statusText){
													
													if(responseText=="1"){
														$("#loading").html("评论提交成功");
														setTimeout(function(){
															$("#loading").hide();
															$("#loading").html("数据交互中");
															showhotlist();
															var date=new Date();
															$("#content .comment_list").eq(index).prepend('<div class="comment_content"><p><span>'+$.cookie("user")+'</span>评论于<span>'+date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+'-'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'</span></p><p>'+$("#content .comment_list").eq(index).find("textarea").val()+'</p></div>');
															$("#content .comment").eq(index).html((parseInt($("#content .comment").eq(index).html())+1)+"条评论");
															$("#content .comment_list").eq(index).find("form").resetForm();
														},1000);
															
													}else{
														$("#loading").html("问题提交失败");
														setTimeout(function(){
															$("#loading").hide();
															$("#loading").html("数据交互中");
														},1000);
													}	
												},
												
												
											});
										});
									},
									
								});
													
							};
							if($("#content .comment_list").eq(index).is(":hidden")){
								$("#content .comment_list").eq(index).show();
							}else{
								$("#content .comment_list").eq(index).hide();
							}
						}else{//跳转登录
						
							$("#loading").show();
							$("#loading").html("请登录后操作");
							setTimeout(function(){
								$("#loading").hide();
								$("#loading").html("数据交互中");
								if(flg1==0)loginClick();
								
											
							},1000);
						};	
					});
					
					
				});
				
			}
			
			
			
			
			
		});
		
		
	};
	var showTimer=null;
	$(".controllbg input").eq(0).one("click", pausebgFn);
	function pausebgFn(){
		clearInterval(showTimer);
		$(".controllbg input").css("background","#65aefa");
		$(".controllbg input").eq(0).css("background","#a1a1a1");
		$(".controllbg input").eq(1).one("click",function(){
			$(".controllbg input").css("background","#65aefa");
			$(".controllbg input").eq(1).css("background","#a1a1a1");
			showbgFn();
			$(".controllbg input").eq(0).one("click", pausebgFn);
		})
	};
	var oCan=document.getElementById("canvas");
		var oC=oCan.getContext("2d");
		var arr=[[1300,150,10,100],[1200,300,3,133],[400,300,7,23],[20,330,8,64],[600,300,9,65],[553,100,6,93],[1140,500,15,109],[200,40,11,190],[480,500,13,87],[900,300,18,78],[700,500,16,192],[480,190,5,168],[777,400,7,89],[323,100,9,78],[880,300,18,106]];
		var flg=new Array();
		var flg2=new Array();
		var flg3=new Array();
		var flg4=new Array();
		//初始化
		for(var i=0;i<arr.length;i++){
			
			if(i<arr.length/4&&i>=0){
					flg[i]=1;
					flg2[i]=1;
					flg3[i]=-1;
			}else if(i<arr.length/2&&i>=arr.length/4){
						flg[i]=-1;
						flg2[i]=-1;
						flg3[i]=1;
			}else if(i<arr.length*3/4&&i>=arr.length/2){
						flg[i]=1;
						flg2[i]=-1;
						flg3[i]=-1;
			}else if(i<=arr.length&&i>=arr.length*3/4){
						flg[i]=-1;
						flg2[i]=1;
						flg3[i]=1;
			};
	};
	function showbgFn(){
		showTimer=setInterval(function(){
			oC.clearRect(0,0,1300,600);
			for(var i=0;i<arr.length;i++){
				//1
				if(arr[i][0]>1300){
					flg[i]=-1;
				};
				if(arr[i][0]<0){
					flg[i]=1;
				};
				
				if(flg[i]==-1){arr[i][0]--};
				if(flg[i]==1){arr[i][0]++};
				//2
				if(arr[i][1]>600){
					flg2[i]=-1;
				};
				if(arr[i][1]<0){
					flg2[i]=1;
				};
				if(flg2[i]==-1){arr[i][1]--};
				if(flg2[i]==1){arr[i][1]++};
				//3
				if(arr[i][2]>16){
					flg3[i]=-1;
				};
				if(arr[i][2]<5){
					flg3[i]=1;
				};
				if(flg3[i]==-1){arr[i][2]-=0.2};
				if(flg3[i]==1){arr[i][2]+=0.2};
				//
				if(arr[i][3]>200){
					flg4[i]=-1;
				};
				if(arr[i][3]<50){
					flg3[i]=1;
				};
				if(flg3[i]==-1){arr[i][3]-=2};
				if(flg3[i]==1){arr[i][3]+=2};
				
				oC.fillStyle="rgba("+(arr[i][3]+50)+","+(arr[i][3]-50)+","+arr[i][3]+",1)";
				oC.strokeStyle="rgba(255,255,255,0.1)";
			
				oC.beginPath();
				oC.moveTo(arr[i][0],arr[i][1]);
				oC.arc(arr[i][0],arr[i][1],arr[i][2],0,2*Math.PI,false);
				oC.fill();
			};
			for(var i=0;i<arr.length;i++){
				for(var j=0;j<arr.length;j++){
					oC.beginPath();
					oC.moveTo(arr[i][0],arr[i][1]);
					oC.lineTo(arr[j][0],arr[j][1]);
					oC.stroke();
					
					
				};
				
			};
			
			
			
		},100);
		
				
		
			
	}
	showbgFn();
	$(window).scroll(function(){
		showReturn();
	});
	
	function showReturn(){
		if($(window).scrollTop()>500){
			$(".returnUp").show();
		}
		if($(window).scrollTop()<500){
			$(".returnUp").hide();
		}
	};
	$(".returnUp").click(function(){
		 $('html,body').animate({"scrollTop":0},600);
		
	});
	var oMusic=document.getElementById("music1");
	$(".music").css("transform","translate(-335px)");
	var musicflg=0;
	$(".music .caret").click(function(){
		if(musicflg==0){
			$(".music").css("transform","translate(0px)");
			musicflg=1;
		}else{
			$(".music").css("transform","translate(-335px)");
			musicflg=0;
		}
		
	});
//游戏1--start
function game1Fn(){
var oCan=document.getElementById("c1");
var oC=oCan.getContext("2d");
var oImg1=document.getElementsByClassName("canvas2")[0].getElementsByTagName("img")[1];
var score=0;
var oImg=new Image();
oImg.src="img/person.png";
oImg.onload=function(){
	gameFn();
};

function gameFn(){
	var ball=[];
	var bullet=[];
	var iRotate=0;
	var balltimer=null;
	var changeTimer=null;
	drawFn();
	var timer1=1;
	function drawFn(){
		var octimer=setInterval(function(){//绘图
			oC.clearRect(0,0,oCan.width,oCan.height);
			oC.beginPath();
			oC.strokeStyle="#42b9fe";
			oC.arc(300,200,200,-90/180*Math.PI,180/180*Math.PI,false);
			oC.arc(250,200,150,180/180*Math.PI,360/180*Math.PI,false);
			oC.stroke();
			oC.save();
			oC.beginPath();
			var objp1=oC.createPattern(oImg1,"repeat");
			oC.fillStyle=objp1;
			oC.translate(380,180);
			oC.rect(0,0,40,40);
			oC.fill();
			oC.restore();
			oC.beginPath();
			oC.arc(400,200,20,0/180*Math.PI,360/180*Math.PI,false);
			oC.stroke();
			//绘制小球
			
			for(var i=0;i<ball.length;i++){
				if((ball[i].z)==1){
					oC.save();
					//渐变
					var obj=oC.createLinearGradient(300,0,650,50);
					obj.addColorStop(0,"#ff19a6");
					obj.addColorStop(1,"#fa5dae");
					oC.fillStyle=obj;
					
					oC.beginPath();
					oC.arc(ball[i].x,ball[i].y,10,0,2*Math.PI,false);
					oC.fill();
					oC.restore();
					
				}else{
					oC.save();
					//渐变
					var obj=oC.createLinearGradient(300,0,650,50);
					obj.addColorStop(0,"#ce54f5");
					obj.addColorStop(1,"#00bebe");
					oC.fillStyle=obj;
					
					oC.beginPath();
					oC.arc(ball[i].x,ball[i].y,10,0,2*Math.PI,false);
					oC.fill();
					oC.restore();
				}
				
			};
			//绘制子弹
			for(var i=0;i<bullet.length;i++){
				
					oC.save();
					//渐变
					var obj=oC.createLinearGradient(300,0,650,50);
					obj.addColorStop(0,"#fac819");
					obj.addColorStop(1,"#fb8525");
					oC.fillStyle=obj;
					oC.strokeStyle="#fefcc4";
					oC.beginPath();
					oC.arc(bullet[i].x,bullet[i].y,10,0,2*Math.PI,false);
					oC.fill();
					oC.stroke();
					oC.restore();	
				
				
			}
			//绘制中间蛤蟆
			oC.beginPath();
			oC.save();
			oC.translate(300,200);
			oC.rotate(iRotate);
			oC.translate(-40,-40);
			oC.drawImage(oImg,0,0);
			oC.restore();
			oC.save();
			//渐变
			var obj=oC.createLinearGradient(300,0,650,50);
			obj.addColorStop(0,"#ce54f5");
			obj.addColorStop(1,"#00bebe");
			oC.fillStyle=obj;
			//绘制字
			oC.font="48px impact";
			var ow=oC.measureText("美女祖玛").width;
			var w=(oCan.width-ow)/2;
			oC.fillText("美女祖玛",w,460);
			oC.textBaseline="top";
			oC.font="12px arial";
			oC.fillStyle="#ddd";
			var ow2=oC.measureText("@Xpanpan.com").width;
			var w=(oCan.width-ow2)/2;
			oC.fillText("@Xpanpan.com",w,480);
			oC.textBaseline="top";
			oC.restore();
		},100);
	};
	moveFn();
	
	function moveFn(){
		
		//绘制文字
	
		//子弹

		//小球
		balltimer=setInterval(function(){
			timer1+=0.06;
			if(timer1>2){
				setTimeout(function(){
					ball.push({
					x:300,
					y:0,
					num:0,
					startX:300,
					startY:0,
					r:200,
					z:1,
				});	
				},330)
				
			};
			ball.push({
				x:300,
				y:0,
				num:0,
				startX:300,
				startY:0,
				r:200,
				z:0,
			});
		},660);
		changeTimer=setInterval(function(){//改变坐标
				for(var i=0;i<ball.length;i++){
					ball[i].num+=timer1;
					if(ball[i].num>270){
						ball[i].r=150;
						ball[i].startX=250;
						ball[i].startY=50;
					};
					ball[i].x=ball[i].startX+ball[i].r*Math.sin(ball[i].num/180*Math.PI);
					ball[i].y=ball[i].r-ball[i].r*Math.cos(ball[i].num/180*Math.PI)+ball[i].startY;
					
				};
				for(var i=0;i<bullet.length;i++){
					bullet[i].x+=bullet[i].moveX;
					bullet[i].y+=bullet[i].moveY;
					
				};
				//碰撞检测
				for(var i=0;i<ball.length;i++){
					for(var j=0;j<bullet.length;j++){
						if(pzFn(ball[i].x,ball[i].y,bullet[j].x,bullet[j].y)){
							score++;
							$(".score").html("得分为：<span>"+score+"</span>分");
							ball.splice(i,1);	
							bullet.splice(j,1);	
						}	
					};
				};
				for(var i=0;i<bullet.length;i++){
					if((-10>bullet[i].x)||(610<bullet[i].x)||(-10>bullet[i].y)||(610<bullet[i].y)){
						bullet.splice(i,1);	
					}
				}
				//结束检测
				for(var i=0;i<ball.length;i++){
					var ballnum=parseInt(ball[i].num)
					if(ballnum>450){
						console.log("game over");
						pauseFn();
						scoreFn();
						alert("Game over ，你的得分是"+score+"分");
						showScore();
						$(".restart").show();
					};
				}
				
		},100);
	}
	//提交分数
	function scoreFn(){
		$.ajax({
			url:"addscore.php",
			type:"POST",
			data:{
				"score":score,
				"user": $.cookie("user"),
			},
			beforeSend:function(){
				$("#loading").show();
			},
			success:function(response,status,xhr){
				if(response=="1"){
					$("#loading").html("分数成功提交!");
					setTimeout(function(){
						$("#loading").hide();
						$("#loading").html("数据交互中")
					},1000);
				}else{
					$("#loading").html("The score is failed to post!");
					setTimeout(function(){
						$("#loading").hide();
						$("#loading").html("数据交互中")
					},1000);
				}
			},
			
			
		});
	};
	//事件
	function pauseFn(){
		clearInterval(balltimer);
		clearInterval(changeTimer);
			
	};
	$(".pause").one("click",pauseorFn);
	$(".restart").click(function(){
		ball=[];
		bullet=[];
		iRotate=0;
		moveFn();
		timer1=1;
		score=0;
		$(".score").html("得分为：<span>"+score+"</span>分");
		$(this).hide();
	});
	function pauseorFn(){
		pauseFn();
		$(".play").one("click",function(){
			moveFn();
			$(".pause").one("click",pauseorFn);
		});
	}
	oCan.onmousemove=function(ev){
			var  ev=ev||window.event;
			//此处使用了jq来获取相对视口偏移
			var x=ev.clientX-$("#c1").offset().left-300;
			var y=ev.clientY-$("#c1").offset().top-200;
			var c=Math.sqrt(x*x+y*y);
			
			if(x>=0){
				iRotate=Math.acos(-y/c);
			}else{
				iRotate=2*Math.PI-Math.acos(-y/c);
				
			};
			
			
		};
		$(oCan).one("mousedown",clickFn);
		function clickFn(ev){
			var ev=ev||window.event;
			var x=ev.clientX-$("#c1").offset().left-300;
			var y=ev.clientY-$("#c1").offset().top-200;
			var	c=Math.sqrt(x*x+y*y);
			var speed=5;
			var sx=speed*x/c;
			var sy=speed*y/c;
			bullet.push({
				x:300,
				y:200,
				moveX:sx,
				moveY:sy,	
			});
			console.log(ev.clientX+""+oCan.offsetLeft);
			setTimeout(function(){
				$(oCan).one("mousedown",clickFn);
			},500);
		};
	//碰撞函数
	function pzFn(x1,y1,x2,y2){
		var x=x1-x2;
		var y=y1-y2;
		var c=Math.sqrt(x*x+y*y);
		if(c<22){
			return true;
		}else{
			return false;
		};		
	}
};	
	
};
//游戏1--end
var showgameflg=0;
$("#nav li a").eq(0).click(function(){
	if(showgameflg==0){
		if($.cookie("user")){
			$("#nav li a").eq(0).html('<i class="ico ico1"></i>首页</a>');
			$("#page2").hide();
			$("#page3").show();
			$("#page3").height($(window).height()-50);
			game1Fn();
			showgameflg=1;
			
		}else{
			$("#loading").show();
			$("#loading").html("请登录后操作");
			setTimeout(function(){
				$("#loading").hide();
				$("#loading").html("数据交互中");
				if(flg1==0)loginClick();
			},1000);
		}
		
	}else{
		window.location.reload();
	}
	
});
//更新游戏排行
function showScore(){
	$.ajax({
		url:"show_score.php",
		typ:"POST",
		success:function(response,status,xhr){
			if(response){
				var json=$.parseJSON(response);
				var html11="";
				for(var i=0;i<json.length;i++){
					if(json[i].score==null){
						json[i].score=0;
					}
					html11+='<li><i></i><strong>'+(i+1)+'</strong><a>'+json[i].user+'</a><span>'+json[i].score+'</span></li>';
				};
				$("#page3 .content ul").html(html11);
			};
			
		},
		
	})
}
showScore();	
function shownewlist(){
	$.ajax({
		url:"show_new.php",
		typ:"POST",
		success:function(response,status,xhr){	
			var json22=$.parseJSON(response);
			var html22="";
			for(var i=0;i<json22.length;i++){
				
				html22+='<li ><strong>['+(i+1)+']</strong><span>'+json22[i].user+'</span><a href="#item'+json22[i].id+'">'+json22[i].title+'</a></li>';
			};
			$(" #side .side21 .content ul").html(html22);
			sideClickFn();
		},
		
	})
};
shownewlist();
function showhotlist(){
	$.ajax({
		url:"show_hot.php",
		typ:"POST",
		success:function(response,status,xhr){
			var json22=$.parseJSON(response);
			var html22="";
			for(var i=0;i<json22.length;i++){
				
				html22+='<li><strong>['+(i+1)+']</strong><span>'+json22[i].user+'</span><a href="#item'+json22[i].id+'">'+json22[i].title+'</a></li>';
			};
			$(" #side .side22 .content ul").html(html22);
			sideClickFn();
		},
		
	})
};
showhotlist();
function sideClickFn(){
		$("a[href*=#item]").click(function(ev){
			var ev=ev||window.event;
					ev.preventDefault();
					var target=$(this).attr("href").slice(1);
					if(target){
						var targetoffset=($('a[name="'+target+'"]').offset().top)-46;
						if(targetoffset<0)targetoffset=0;
						$('html,body').animate({
							  scrollTop: targetoffset,
							},1000,"linear");
			};
		});	
}














	
});






















