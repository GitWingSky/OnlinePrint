<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

                
<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>message-reply</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./css/font.css">
    <link rel="stylesheet" href="./css/xadmin.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="./lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="./js/xadmin.js"></script>
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  
  <body>
    <div class="x-body">
        <form action="" method="post" class="layui-form layui-form-pane">
                
                
                <div class="layui-form-item layui-form-text">
                    <label for="desc" class="layui-form-label">
                        内容
                    </label>
                    <div class="layui-input-block">
                        <textarea placeholder="请输入内容" id="desc" name="desc" class="layui-textarea" required="" lay-verify="required"></textarea>
                    </div>
                </div>
                <div class="layui-form-item">
                <button class="layui-btn" lay-submit="" lay-filter="add">增加</button>
              </div>
            </form>
    </div>
    <script>
        layui.use(['form','layer'], function(){
            $ = layui.jquery;
          var form = layui.form
          ,layer = layui.layer;
        
          //自定义验证规则
          form.verify({
            nikename: function(value){
              if(value.length < 5){
                return '昵称至少得5个字符啊';
              }
            }
            ,pass: [/(.+){6,12}$/, '密码必须6到12位']
            ,repass: function(value){
                if($('#L_pass').val()!=$('#L_repass').val()){
                    return '两次密码不一致';
                }
            }
          });
          
          
          function getQueryVariable(variable) {
				var query = window.location.search.substring(1);
				var vars = query.split("&");
				for(var i = 0; i < vars.length; i++) {
					var pair = vars[i].split("=");
					if(pair[0] == variable) {
						return pair[1];
					}
				}
				return(false);
			}
			
			var messageId = getQueryVariable("messageId");
		
          //监听提交
          form.on('submit(add)', function(data){
            console.log(data);
            console.log(data.field.desc);
            //发异步，把数据提交给后台
            $.ajax({
				type: "POST", //用POST方式传输
				dataType: "text", //数据格式:JSON
				url: "sendReply", //目标地址
				data: "messageId=" + messageId + "&replyMessage=" + data.field.desc,
				error: function (XMLHttpRequest, textStatus, errorThrown) { },
				success: function (msg){ }
			});
            
            
            layer.alert("增加成功", {icon: 6},function () {
                // 获得frame索引
                var index = parent.layer.getFrameIndex(window.name);
                //关闭当前frame
                parent.layer.close(index);
            });
            return false;
          });
          
          
        });
    </script>
  </body>

</html>