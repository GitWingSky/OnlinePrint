<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>apply-list</title>
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
    <div class="x-nav">
      
      <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
    <div class="x-body">
      <div class="layui-row">
        
      </div>
      <xblock>

        <span class="x-right" style="line-height:40px">共有数据：${applyList.size()} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
           
            <th>店铺名称</th>
            <th>申请人</th>
            <th>联系方式</th>
            <th>辅助审核资料</th>
            <th>时间</th>
            <th >操作</th>
            </tr>
        </thead>
        <tbody>
	        <c:forEach items="${applyList}" var="apply">
	        	<tr>
	            	
	            	<td>${apply.shopName}</td>
	            	<td>${apply.user.userName}</td>
	            	<td>${apply.shopPhone}</td>
	            	<td>${apply.fileName }</td>

	            	<td><fmt:formatDate value="${apply.submitTime }" type="date" pattern="yyyy-MM-dd hh:mm:ss" /></td>
	            	<td class="td-manage">
		              	<a title="下载"  download="${apply.fileName }" href="${apply.filePath }">
		                	<i class="layui-icon">&#xe615;</i>
		              	</a>
		              
		              	<a title="通过" onclick="member_del(this,'${apply.applyId }')" href="javascript:;">
		                	<i class="layui-icon">&#xe618;</i>
		              	</a>
	
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
          layer.confirm('确定通过该申请？',function(index){
              //发异步删除数据
              $.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "comfirmApply", //目标地址
					data: "applyId=" + id,
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){ }
				});
              $(obj).parents("tr").remove();
              layer.msg('已通过!',{icon:1,time:1000});
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