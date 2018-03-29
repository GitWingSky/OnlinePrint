<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
  
  <head>
    <meta charset="UTF-8">
    <title>shop-list</title>
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

        <span class="x-right" style="line-height:40px">共有数据：${shopStarrList.size()} 条</span>
      </xblock>
      <table class="layui-table">
        <thead>
          <tr>
            <th>店名</th>
            <th>店主</th>
            <th>邮箱</th>
            <th>价格</th>
            <th>交易数</th>
            <th>差评率</th>
            <th>状态</th>
            <th >操作</th>
            </tr>
        </thead>
        <tbody>
	        <c:forEach items="${shopStarrList}" var="shopStar">
	        	<tr>
	            	<td>${shopStar.shop.shopName}</td>
	            	<td>${shopStar.shop.user.userName}</td>
	            	<td>${shopStar.shop.shopEmail }</td>
	            	<td>
	            	黑白单面：${shopStar.shop.shopOneGray }
	            	黑白双面：${shopStar.shop.shopTwoGray }
	            	<br>
	            	彩印单面：${shopStar.shop.shopOneRBG }
	            	彩印双面：${shopStar.shop.shopTwoRBG }
	            	</td>
	            	<td>${shopStar.num }</td>
	            	<td>${shopStar.star }</td>
	            	
	            	
	            	 <c:choose>
			            <c:when test="${shopStar.shop.shopState.equals('1')}">
			            	<td class="td-status"><span class="layui-btn layui-btn-mini">已启用</span></td>
			           	</c:when>
			           	 <c:when test="${shopStar.shop.shopState.equals('2')}">
			            	<td class="td-status"><span class="layui-btn layui-btn-normal layui-btn-mini">已停用</span></td>
			           	</c:when>
			            <c:otherwise>
			            	<td class="td-status"><span class="layui-btn layui-btn-normal layui-btn-mini layui-btn-disabled">已冻结</span></td>
			            </c:otherwise>
			        </c:choose>
	            	
	            	<td class="td-manage">
	            	 <c:choose>
			            <c:when test="${shopStar.shop.shopState.equals('3')}">
			            	<a title="解冻" onclick="member_stop(this,'${shopStar.shop.shopId}')" href="javascript:;">
		                		<i class="layui-icon">&#xe605;</i>
		              		</a>
			            </c:when>
			            <c:otherwise>
			            	<a title="冻结" onclick="member_stop(this,'${shopStar.shop.shopId}')" href="javascript:;">
		                		<i class="layui-icon">&#x1006;</i>
		              		</a>
			            </c:otherwise>
			        </c:choose>
		              	
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
          layer.confirm('确认要修改吗？',function(index){
        	//发异步把用户状态进行更改
              $.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "freezeShop", //目标地址
					data: "shopId=" + id,
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){ }
				});
              if($(obj).attr('title')=='冻结'){
                
                $(obj).attr('title','解冻')
                $(obj).find('i').html('&#xe605;');

                $(obj).parents("tr").find(".td-status").find('span').addClass('layui-btn-disabled').html('已冻结');
                layer.msg('已冻结!',{icon: 5,time:1000});

              }else{
                $(obj).attr('title','冻结')
                $(obj).find('i').html('&#x1006;');

                $(obj).parents("tr").find(".td-status").find('span').removeClass('layui-btn-disabled').addClass('layui-btn-normal').html('已停用');
                layer.msg('已解冻!',{icon: 6,time:1000});
              }
              
          });
      }

      /*用户-删除*/
      function member_del(obj,id){
          layer.confirm('确定冻结该商店？',function(index){
              //发异步删除数据
             
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