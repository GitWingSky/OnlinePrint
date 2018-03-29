<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>admin-edit</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" href="./css/font.css">
		<link rel="stylesheet" href="./css/xadmin.css">
		<script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
		<script type="text/javascript" src="./lib/layui/layui.js" charset="utf-8"></script>
		<script type="text/javascript" src="./js/xadmin.js"></script>
		<style>
			.changeImg{
				width: 300px;
				height: 150px;
			}	
			.files {
				position: relative;
				margin: 10px 15%;
			}
					
			.files input {
				position: absolute;
				font-size: 18px;
				right: 0;
				top: 0;
				opacity: 0;
			}
		
		</style>
		<!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
		<!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	</head>

	<body>
		<div class="x-body">
			<form id="form1" class="layui-form" enctype="multipart/form-data">
				<div class="layui-form-item">
					<img src="${shop.shopPictureUrl}" id="img0" class="changeImg">
					<p class="files layui-btn">更改头像
						<input type="file" name="file1" id="file0" />
					</p>
				</div>
				<div class="layui-form-item">
					<label for="shopName" class="layui-form-label">
                  		<span class="x-red">*</span>商铺名称
              		</label>
					<div class="layui-input-inline">
						<input type="text" id="shopName" name="shopName" required="" lay-verify="shopName" autocomplete="off" value="${shop.shopName}" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item">
					<label for="phone" class="layui-form-label">
                  <span class="x-red">*</span>手机
              </label>
					<div class="layui-input-inline">
						<input type="text" value="${shop.shopPhone}" id="phone" name="phone" required="" lay-verify="phone" autocomplete="off" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item">
					<label for="address" class="layui-form-label">
                  <span class="x-red">*</span>地址
              </label>
					<div class="layui-input-inline">
						<input type="text" value="${shop.shopAddress}" id="address" name="address" required="" lay-verify="required" autocomplete="off" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item">
					<label for="introduction" class="layui-form-label">
                  <span class="x-red">*</span>商铺介绍
              </label>
					<div class="layui-input-inline">
						<input type="text" value="${shop.shopIntroduction}" id="introduction" name="introduction" required="" lay-verify="required" autocomplete="off" class="layui-input">
					</div>
				</div>
				<div class="layui-form-item">
					<label for="grayOne" class="layui-form-label">
                  <span class="x-red">*</span>黑白单面
              </label>
					<div class="layui-input-inline">
						<input type="text" value="${shop.shopOneGray}" id="grayOne" name="grayOne" required="" lay-verify="pass" autocomplete="off" class="layui-input">
					</div>
					<div class="layui-form-mid layui-word-aux">
						元
					</div>
				</div>
				<div class="layui-form-item">
					<label for="grayTwo" class="layui-form-label">
                  <span class="x-red">*</span>黑白双面
              </label>
					<div class="layui-input-inline">
						<input type="text" value="${shop.shopTwoGray}" id="grayTwo" name="grayTwo" required="" lay-verify="pass" autocomplete="off" class="layui-input">
					</div>
					<div class="layui-form-mid layui-word-aux">
						元
					</div>
				</div>
				<div class="layui-form-item">
					<label for="RBGOne" class="layui-form-label">
                  <span class="x-red">*</span>彩印单面
              </label>
					<div class="layui-input-inline">
						<input type="text" value="${shop.shopOneRBG}" id="RBGOne" name="RBGOne" required="" lay-verify="pass" autocomplete="off" class="layui-input">
					</div>
					<div class="layui-form-mid layui-word-aux">
						元
					</div>
				</div>
				<div class="layui-form-item">
					<label for="RBGTwo" class="layui-form-label">
                  <span class="x-red">*</span>彩印双面
              </label>
					<div class="layui-input-inline">
						<input type="text" value="${shop.shopTwoRBG}" id="RBGTwo" name="RBGTwo" required="" lay-verify="pass" autocomplete="off" class="layui-input">
					</div>
					<div class="layui-form-mid layui-word-aux">
						元
					</div>
				</div>
				
				<div class="layui-form-item">
					<label for="L_repass" class="layui-form-label">
              		</label>
					<button type="button" class="layui-btn" lay-filter="add" lay-submit="">
                  		修改
              		</button>
				</div>
			</form>
		</div>
		<script>
			layui.use(['form', 'layer'], function() {
				$ = layui.jquery;
				var form = layui.form,
					layer = layui.layer;

				//自定义验证规则
				form.verify({
					shopName: function(value) {
						if(value.length < 2) {
							return '商铺名称至少得2个字符啊';
						}
					},
					pass: [/^[0-9]+(.[0-9]{1,2})?$/, '必须数字且只有两位小数']

				});

				//监听提交
				form.on('submit(add)', function(data) {
					console.log(data);
					//发异步，把数据提交
					var dataa = new FormData($('#form1')[0]);
					$.ajax({
						type: "POST", //用POST方式传输
						dataType: "text", //数据格式:JSON
						url: "changeShopData", //目标地址
						data: dataa ,
						cache: false,    
				        processData: false,    
				        contentType: false ,
						error: function (XMLHttpRequest, textStatus, errorThrown) { },
						success: function (msg){ }
					});
					
					layer.alert("修改成功", {
						icon: 6
					}, function() {
						// 获得frame索引
						var index = parent.layer.getFrameIndex(window.name);
						//关闭当前frame
						parent.layer.close(index);
					});
					return false;
				});

			});
			
			
			$("#file0").change(function(ev) {
				var imgFiles = ev.target.files;
				for(var i = 0; i < imgFiles.length; i++) {
					if(imgFiles[i].type.indexOf('image') != -1) {
						var imgRead = new FileReader(); //新建文件来读取信息
						imgRead.readAsDataURL(imgFiles[i]); //读取文件对象
						imgRead.onload = function() {
							$("#img0").attr("src", this.result);
						}
					}
				}
			});
			
		</script>
		
	</body>

</html>