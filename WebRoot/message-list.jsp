<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>message-list</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./css/font.css">
    <link rel="stylesheet" href="./css/xadmin.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="./lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="./js/xadmin.js"></script>
    
    <!-- font-awesome 图标字体 -->
	<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" media="screen" rel="stylesheet" type="text/css">
	
    <!-- 让IE8/9支持媒体查询，从而兼容栅格 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.staticfile.org/html5shiv/r29/html5.min.js"></script>
      <script src="https://cdn.staticfile.org/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
    	.yellow {
			color: #facc16;
		}
			
		.gray {
			color: #ddd;
		}
    </style>
    
  </head>
  
  <body>
    <div class="x-nav">
      
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    <div class="x-body">
      <div class="layui-row">
        <form action="getMessageByMany" class="layui-form layui-col-md12 x-so">
          <div class="layui-input-inline">
            <select name="all">
              <option value="0">全部</option>
              <option value="1">未回复</option>
            </select>
          </div>
          <div class="layui-input-inline">
            <select name="assess">
              <option value="0">全部</option>
              <option value="1">好评</option>
              <option value="2">中评</option>
              <option value="3">差评</option>
            </select>
          </div>
          <button class="layui-btn"  type="submit" lay-submit="" lay-filter="sreach"><i class="layui-icon">&#xe615;</i></button>
        </form>
      </div>
      <xblock>
       
        <span class="x-right" style="line-height:40px">共有数据：${messageList.size()} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>  
            <th>用户名</th>
            <th>评论内容</th>
            <th>打分</th>
            <th>回复</th>
            <th>回复内容</th>
            <th>评论时间</th>
            <th >操作</th>
            </tr>
        </thead>
        <tbody>
         <c:forEach items="${messageList}" var="message">
          <tr>
            <td>${message.user.userName}</td>
            <td>${message.message}</td>
            <td>
            	<c:forEach begin="1" end="${message.star}" >
				    <i class="fa fa-star yellow" aria-hidden="true"></i>
				</c:forEach>
				<c:forEach begin="${message.star}" end="4" >
				     <i class="fa fa-star gray" aria-hidden="true"></i>
				</c:forEach>
			</td>
            <c:choose>
	            <c:when test="${empty message.reply }">
	            	<td>未回复</td>
	           	</c:when>
	            <c:otherwise>
	            	<td>已回复</td>
	            </c:otherwise>
	        </c:choose>
            
            <td>${message.replyMessage}</td>
            <td><fmt:formatDate value="${message.submitTime }" type="date" pattern="yyyy-MM-dd hh:mm:ss" /></td>
            <td class="td-manage">
            	<c:if test="${empty message.reply }">
            		<a title="回复"  onclick="x_admin_show('回复---${message.user.userName }','message-reply?messageId=${message.messageId}',600,400)" href="javascript:;">
		            	<i class="layui-icon">&#xe642;</i>
		            </a>
            	</c:if>
            </td>
          </tr>
          </c:forEach>
        </tbody>
      </table>
      

    </div>
    <script>
      layui.use('laydate', function(){
        var laydate = layui.laydate;
        
        //执行一个laydate实例
        laydate.render({
          elem: '#start' //指定元素
        });

        //执行一个laydate实例
        laydate.render({
          elem: '#end' //指定元素
        });
      });

       /*用户-停用*/
      function member_stop(obj,id){
          layer.confirm('确认要停用吗？',function(index){

              if($(obj).attr('title')=='启用'){

                //发异步把用户状态进行更改
                $(obj).attr('title','停用')
                $(obj).find('i').html('&#xe62f;');

                $(obj).parents("tr").find(".td-status").find('span').addClass('layui-btn-disabled').html('已停用');
                layer.msg('已停用!',{icon: 5,time:1000});

              }else{
                $(obj).attr('title','启用')
                $(obj).find('i').html('&#xe601;');

                $(obj).parents("tr").find(".td-status").find('span').removeClass('layui-btn-disabled').html('已启用');
                layer.msg('已启用!',{icon: 5,time:1000});
              }
              
          });
      }

      /*用户-删除*/
      function member_del(obj,id){
          layer.confirm('确认要删除吗？',function(index){
              //发异步删除数据
              $(obj).parents("tr").remove();
              layer.msg('已删除!',{icon:1,time:1000});
          });
      }



      function delAll (argument) {

        var data = tableCheck.getData();
  
        layer.confirm('确认要删除吗？'+data,function(index){
            //捉到所有被选中的，发异步进行删除
            layer.msg('删除成功', {icon: 1});
            $(".layui-form-checked").not('.header').parents('tr').remove();
        });
      }
    </script>
   
  </body>

</html>