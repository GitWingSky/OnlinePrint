<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>welcome</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" href="./css/font.css">
		<link rel="stylesheet" href="./css/xadmin.css">
		<script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
		<script type="text/javascript" src="./lib/layui/layui.js" charset="utf-8"></script>
		<script type="text/javascript" src="./js/xadmin.js"></script>
	</head>

	<body>
		<div class="x-nav">
      
      	<a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" href="javascript:location.replace(location.href);" title="刷新">
        <i class="layui-icon" style="line-height:30px">ဂ</i></a>
    </div>
		<div class="x-body">
			<blockquote class="layui-elem-quote">公告：欢迎使用云打印平台！官方交流群： 10086</blockquote>
			<fieldset class="layui-elem-field">
				<legend>信息统计</legend>
				<div class="layui-field-box">
					<table class="layui-table" lay-even>
						<thead>
							<tr>
								<th>统计</th>
								<th>订单数量</th>
								<th>订单金额</th>
								<th>好评</th>
								<th>中评</th>
								<th>差评</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>总数</td>
								<td>${num[0] }</td>
								<td>${money[0] }</td>
								<td>${outstandingNum[0] }</td>
								<td>${goodNum[0] }</td>
								<td>${badNum[0] }</td>
							</tr>
							<tr>
								<td>今日</td>
								<td>${num[1] }</td>
								<td>${money[1] }</td>
								<td>${outstandingNum[1] }</td>
								<td>${goodNum[1] }</td>
								<td>${badNum[1] }</td>
							</tr>
							<tr>
								<td>昨日</td>
								<td>${num[2] }</td>
								<td>${money[2] }</td>
								<td>${outstandingNum[2] }</td>
								<td>${goodNum[2] }</td>
								<td>${badNum[2] }</td>
							</tr>
							<tr>
								<td>本周</td>
								<td>${num[3] }</td>
								<td>${money[3] }</td>
								<td>${outstandingNum[3] }</td>
								<td>${goodNum[3] }</td>
								<td>${badNum[3] }</td>
							</tr>
							<tr>
								<td>本月</td>
								<td>${num[4] }</td>
								<td>${money[4] }</td>
								<td>${outstandingNum[4] }</td>
								<td>${goodNum[4] }</td>
								<td>${badNum[4] }</td>
							</tr>
						</tbody>
					</table>
					<xblock>
						<c:choose>
							<c:when test="${shop.shopState.equals('1') }">
								<button class="layui-btn layui-btn-danger" onclick="member_stop(this,'10001')" title="启用"><i class="layui-icon">&#xe601;</i>状态</button>
							</c:when>
							<c:otherwise>
								<button class="layui-btn layui-btn-danger" onclick="member_stop(this,'10001')" title="停用"><i class="layui-icon">&#xe601;</i>状态</button>
							</c:otherwise>
						</c:choose>
						
						<button class="layui-btn" onclick="x_admin_show('修改信息','./shop-edit',600,630)"><i class="layui-icon">&#xe642;</i>修改信息</button>
						
					</xblock>
					<table class="layui-table">
						<thead>
							<tr>
								<th colspan="2" scope="col">店铺信息</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th width="30%">店铺状态</th>
								<td class="td-status">
									<c:choose>
										<c:when test="${shop.shopState.equals('1') }">
											<span class="layui-btn layui-btn-normal layui-btn-mini">已启用</span>
										</c:when>
										<c:otherwise>
											<span class="layui-btn layui-btn-normal layui-btn-mini layui-btn-disabled">已停用</span>
										</c:otherwise>
									</c:choose>
									
								</td>
							</a>
						</td>
							</tr>
							<tr>
								<td>店铺头像 </td>
								<td><img src="${shop.shopPictureUrl }"></td>
							</tr>
							<tr>
								<td>店铺名称</td>
								<td>${shop.shopName }</td>
							</tr>
							<tr>
								<td>地址</td>
								<td>${shop.shopAddress }</td>
							</tr>
							<tr>
								<td>电话</td>
								<td>${shop.shopPhone }</td>
							</tr>
							<tr>
								<td>邮箱 </td>
								<td>${shop.shopEmail }</td>
							</tr>
							<tr>
								<td>店铺介绍 </td>
								<td>${shop.shopIntroduction }</td>
							</tr>
							<tr>
								<td>黑白单面价格 </td>
								<td>${shop.shopOneGray }</td>
							</tr>
							<tr>
								<td>黑白双面价格 </td>
								<td>${shop.shopTwoGray }</td>
							</tr>
							<tr>
								<td>彩印单面价格 </td>
								<td>${shop.shopOneRBG }</td>
							</tr>
							<tr>
								<td>彩印双面价格 </td>
								<td>${shop.shopTwoRBG }</td>
							</tr>

						</tbody>
					</table>
				</div>
			</fieldset>

			

			<blockquote class="layui-elem-quote layui-quote-nm">My name is WingSky。</blockquote>

		</div>

		<script>
			layui.use('laydate', function() {
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
			function member_stop(obj, id) {
				
				$.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "checkShopInfo", //目标地址
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){
						if(msg == "success"){
							layer.confirm('确认要更改状态吗？', function(index) {
								$.ajax({
									type: "POST", //用POST方式传输
									dataType: "text", //数据格式:JSON
									url: "changeShopState", //目标地址
									data: "shopId=" + ${shop.shopId },
									error: function (XMLHttpRequest, textStatus, errorThrown) { },
									success: function (msg){ }
								});
								if($(obj).attr('title') == '启用') {
									//发异步把用户状态进行更改
									$(obj).attr('title', '停用')
									$(obj).find('i').html('&#xe62f;');

									$(".td-status").find('span').addClass('layui-btn-disabled').html('已停用');
									layer.msg('已停用!', {
										icon: 5,
										time: 1000
									});

								} else {
									$(obj).attr('title', '启用')
									$(obj).find('i').html('&#xe601;');

									$(".td-status").find('span').removeClass('layui-btn-disabled').html('已启用');
									layer.msg('已启用!', {
										icon: 6,
										time: 1000
									});
								}

							});
						}else{
							layer.msg('请补充完整商店信息!', {
								icon: 5,
								time: 2000
							});
						}
					}
				});
				
				
				
			}

			/*用户-删除*/
			function member_del(obj, id) {
				layer.confirm('确认要删除吗？', function(index) {
					//发异步删除数据
					$(obj).parents("tr").remove();
					layer.msg('已删除!', {
						icon: 1,
						time: 1000
					});
				});
			}

			function delAll(argument) {

				var data = tableCheck.getData();

				layer.confirm('确认要删除吗？' + data, function(index) {
					//捉到所有被选中的，发异步进行删除
					layer.msg('删除成功', {
						icon: 1
					});
					$(".layui-form-checked").not('.header').parents('tr').remove();
				});
			}
		</script>
	</body>

</html>