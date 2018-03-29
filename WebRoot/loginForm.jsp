<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>云打印平台</title>
	<link rel="stylesheet" type="text/css" href="css/style.css" tppabs="css/style.css" />
	<!-- font-awesome 图标字体 -->
	<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" media="screen" rel="stylesheet" type="text/css">
	<style>
		body {
			height: 100%;
			background: #16a085;
			overflow: hidden;
		}
			
		canvas {
			z-index: -1;
			position: absolute;
		}
		
		.input-group {
			display: table;	
		}
			
		.input-group-btn {
			display: table-cell;
		}

		.button {
			width: 145px;
			height: 43px;
			color: #fff;
			border: 1px solid transparent;
			background: #048f74;
		}
		.button:hover{
			background: #0b6f5c;
		}
		
	</style>
	<script src="js/jquery.js" tppabs="js/jquery.js"></script>
	<script src="js/login.js" tppabs="js/login.js"></script>
	<script src="js/verificationNumbers.js" tppabs="js/verificationNumbers.js"></script>
	<script src="js/Particleground.js" tppabs="js/Particleground.js"></script>
	<script>
		$(document).ready(function() {
			//粒子背景特效
			$('body').particleground({
				dotColor: '#5cbdaa',
				lineColor: '#5cbdaa'
			});
			//验证码
			createCode();
			//测试提交，对接程序删除即可
			$(".submit_btn").click(function() {
				location.href = "javascrpt:;" /*tpa=http://***index.html*/ ;
			});
		});
	</script>
  </head>
  
  <body>
    	<dl class="admin_login">
			<dt>
  				<strong>云打印平台</strong>
  				<em>Online Printing System</em>
 			</dt>
 			<div class="header">
        		<div class="switch" id="switch">
        			<a class="switch_btn_focus" id="switch_qlogin" href="javascript:void(0);" tabindex="7">登录</a>
					<a class="switch_btn" id="switch_login" href="javascript:void(0);" tabindex="8">注册</a><div class="switch_bottom" id="switch_bottom" style="position: absolute; width: 64px; left: 0px;"></div>
        		</div>
    		</div>
    		
    		<div class="web_qr_login" id="web_qr_login" style="display: block; height: 235px;">  
    		<form action="login" method="post">
    			<p class="massage">${message1 }</p>
				<dd class="user_icon">
					<input type="text" id="userUsername" name="userUsername" placeholder="账号" class="login_txtbx" />
				</dd>
				<dd class="pwd_icon">
					<input type="password" id="userPassword" name="userPassword" placeholder="密码" class="login_txtbx" />
				</dd>
				<dd class="val_icon">
					<div class="checkcode">
						<input type="text" id="J_codetext" placeholder="验证码" maxlength="4" class="login_txtbx">
						<canvas class="J_codeimg" id="myCanvas" onclick="createCode()">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
					</div>
	
				</dd>
				<dd>
					<input type="submit" value="立即登陆" class="submit_btn" onclick="return validate()" />
				</dd>
				<dd>
					<p>© 2017-2018 WingSky 版权所有</p>
				</dd>
			</form>
			</div>
			<div class="qlogin" id="qlogin" style="display: none; ">
			<form action="register" method="post">
				<p id="reMessage" class="massage">${requestScope.message2 }</p>
   				<dd class="user_icon">
					<input type="email" id="reUserUsername" name="reUserUsername" placeholder="邮箱" class="login_txtbx" required="required" />
				</dd>
				<dd class="pwd_icon">
					<input type="password" id="reUserPassword" name="reUserPassword" placeholder="密码" class="login_txtbx" required="required" />
				</dd>
				<dd class="pwd_icon">
					<input type="password" id="userRetypePassword" name="userRetypePassword" placeholder="确认密码" class="login_txtbx" required="required" />
				</dd>
				<dd class="val_icon">
					<div class="input-group">
						<input type="text" id="emailCode" name="emailCode" placeholder="验证码" class="login_txtbx" required="required">
						<span class="input-group-btn">
            				<button id="btnSendCode" class="button" type="button" onclick="sendMessage();"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;发送验证码</button>
        				</span>
					</div>
				</dd>
				<dd>
					<input type="submit" value="立即注册" class="submit_btn" onclick="return validate1()" />
				</dd>
				<dd>
					<p>© 2017-2018 WingSky 版权所有</p>
				</dd>
    		</form>
    		</div>
		</dl>
		<script type="text/javascript">
		/*
		var reg = new RegExp("(^|&)type=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null){
			$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
			$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
			$('#switch_bottom').animate({
				left: '154px',
				width: '70px'
			});

			$('#qlogin').css('display', 'block');
			$('#web_qr_login').css('display', 'none');
		}
		*/
		
		$("#reUserUsername").blur(function() {
			checkUserName();
		});
		function checkUserName() {
			var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
			var userUsername = $("#reUserUsername").val();
			var check = false;
			if(reg.test(userUsername)){
				$.ajax({
					type: "POST",
					dataType: "text",
					url: "checkUser",
					data: "userUsername=" + userUsername,
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){
						if(msg != "success"){
							$("#reMessage").html(msg);
						}else{
							$("#reMessage").html("");
						}
					}
				});
			}else{
				$("#reMessage").html("请输入正规邮箱");
			}
			
			var tmp = $("#reMessage").html();
			
			if(tmp == ""){
				check = true;
			}
			return check;
		}
		
		var InterValObj; //timer变量，控制时间
		var count = 30; //间隔函数，1秒执行
		var curCount;//当前剩余秒数
		
		//timer处理函数
		function SetRemainTime() {
			if (curCount == 0) {                
				window.clearInterval(InterValObj);//停止计时器
				$("#btnSendCode").removeAttr("disabled");//启用按钮
				$("#btnSendCode").text("重新发送验证码");
				code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
			}
			else {
				curCount--;
				$("#btnSendCode").text( + curCount + "秒再获取");
			}
		}
		
		function sendMessage() {
			
			if(checkUserName()){
				var userUsername = $("#reUserUsername").val();
				curCount = count;
				//设置button效果，开始计时
				$("#btnSendCode").attr("disabled", "true");
				$("#btnSendCode").text( + curCount + "秒再获取");
				InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
				//向后台发送处理数据
				$.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "sendEmail", //目标地址
					data: {"toUser":userUsername},
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){ }
				});
			}else{
				$("#btnSendCode").text("请检查邮箱");
			}
			
		}
		</script>
  </body>
</html>
