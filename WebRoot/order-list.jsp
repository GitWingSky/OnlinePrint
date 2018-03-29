<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>order-list</title>
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

        <span class="x-right" style="line-height:40px">共有数据：${ordersList.size()} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
            
            <th>文件</th>
            <th>收货人</th>
            <th>收货地址</th>
            <th>应付金额</th>
            <th>打印方式</th>
            <th>页数</th>
            <th>数量</th>
            <th>下单时间</th>
            <th>订单状态</th>
            <th >操作</th>
            </tr>
        </thead>
        <tbody id = "box">
	        <c:forEach items="${ordersList}" var="orders">
	        	<tr>
	            	<td>${orders.fileName}</td>
	            	<td>${orders.user.userName}</td>
	            	<td>${orders.userAddress}</td>
	            	<td>${orders.money }</td>
	            	<c:choose>
	            		<c:when test="${orders.printType.equals('1') }">
	            			<td>黑白单面</td>
	            		</c:when>
	            		<c:when test="${orders.printType.equals('2') }">
	            			<td>黑白双面</td>
	            		</c:when>
	            		<c:when test="${orders.printType.equals('3') }">
	            			<td>彩印单面</td>
	            		</c:when>
	            		<c:otherwise>
	            			<td>彩印双面</td>
	            		</c:otherwise>
	            	</c:choose>
	            	
	            	<td>${orders.page }</td>
	            	<td>${orders.num }</td>
	            	<td><fmt:formatDate value="${orders.submitTime }" type="date" pattern="yyyy-MM-dd hh:mm:ss" /></td>
	            	<td>${orders.state}</td>
	            	<td class="td-manage">
		              	<a title="预览"  onclick="x_admin_show('预览','${orders.pdfPath}')" href="javascript:;">
		                	<i class="layui-icon">&#xe615;</i>
		              	</a>
		              	<c:if test="${orders.state.equals('未发货')}">
		              		<a title="确认" onclick="member_del(this,'${orders.orderId }')" href="javascript:;">
		                		<i class="layui-icon">&#xe618;</i>
		              		</a>
		              	</c:if>
		              	
	            	</td>
	          	</tr>
	        </c:forEach>
          
        </tbody>
      </table>
    

    </div>
    <script>
    var ws = null;
	if(WebSocket){
		//建立连接
		ws = new WebSocket("ws://${pageContext.request.getServerName()}:${pageContext.request.getServerPort()}${pageContext.request.contextPath}/websocket/shop");
	}else{
		alert("浏览器不支持WebSocket！");
	}
	ws.onmessage = function(event){
		var res = $.parseJSON(event.data);
		if(res.shop.shopId == '${shopId}'){
			showMessage(res);
		}
	};
	function showMessage(res){
			var html = $("#box").html();
			console.log(res);
			var s = "<tr><td>" + res.fileName + "</td><td>" + res.user.userName + "</td><td>" + res.userAddress + "</td><td>" + res.money+ "</td>";
        	if(res.printType == "1"){
        		s += "<td>黑白单面</td>";
        	}else if(res.printType == "2"){
        		s += "<td>黑白双面</td>";
        	}else if(res.printType == "3"){
        		s += "<td>彩印单面</td>";
        	}else{
        		s += "<td>彩印双面</td>";
        	}
        	s += "<td>" + res.page + "</td><td>" + res.num + "</td><td>" + CurentTime(res.submitTime) + "</td><td>未发货</td>";
        	s += "<td class=\"td-manage\"><a title=\"预览\"  onclick=\"x_admin_show('预览','" + res.pdfPath + "')\" href=\"javascript:;\"><i class=\"layui-icon\">&#xe615;</i></a>";
        	s += "<a title=\"确认\" onclick=\"member_del(this,'" + res.orderId + "')\" href=\"javascript:;\"><i class=\"layui-icon\">&#xe618;</i></a></td></tr>";   	
        	$("#box").html(html + s);
	}
	
	function CurentTime(date)  
    {   
		var now = new Date(date);
          
        var year = now.getFullYear();       //年  
        var month = now.getMonth() + 1;     //月  
        var day = now.getDate();            //日  
          
        var hh = now.getHours();            //时  
        var mm = now.getMinutes();          //分  
        var ss = now.getSeconds();           //秒  
          
        var clock = year + "-";  
          
        if(month < 10)  
            clock += "0";  
          
        clock += month + "-";  
          
        if(day < 10)  
            clock += "0";  
              
        clock += day + " ";  
          
        if(hh < 10)  
            clock += "0";  
              
        clock += hh + ":";  
        if (mm < 10) clock += '0';   
        clock += mm + ":";   
           
        if (ss < 10) clock += '0';   
        clock += ss;   
        return(clock);   
	}  
    
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
                layer.msg('已启用!',{icon: 6,time:1000});
              }
              
          });
      }

      /*用户-删除*/
      function member_del(obj,id){
          layer.confirm('已经下载好了么？',function(index){
              //发异步删除数据
              $.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "comfirmOrder", //目标地址
					data: "orderId=" + id,
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){ }
				});
              $(obj).parents("tr").remove();
              layer.msg('已确认!',{icon:1,time:1000});
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