<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE HTML>
<html>
    <meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>云打印平台</title>
	<!-- 新 Bootstrap 核心 CSS 文件 -->
	<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">

	<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
	<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>

	<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
	<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

	<!-- font-awesome 图标字体 -->
	<link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" media="screen" rel="stylesheet" type="text/css">

	<!-- 首页核心样式文件 -->
	<link rel="stylesheet" href="css/shop.css">

	<!-- 导航样式文件 -->
	<link rel="stylesheet" type="text/css" href="css/menu_elastic.css" />
	<script src="js/snap.svg-min.js"></script>
	<!--[if IE]>
  	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<link rel="stylesheet" href="./lib/layui/css/layui.css">
	<script type="text/javascript" src="./lib/layui/layui.js" charset="utf-8"></script>
	
	<!-- fileinput样式文件 -->
	<link href="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/css/fileinput.min.css" rel="stylesheet">
	<script src="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/js/fileinput.min.js"></script>
	<script src="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/js/locales/zh.min.js"></script>
	
	<!-- tips样式文件 -->
	<link href="css/tips.css" rel="stylesheet" />
	<!-- star样式文件 -->
	<link rel="stylesheet" href="css/star.css">
	<!--公共头文件结束-->
	
	<style>
		body{
			background: #F2F2F2;
		}
		
		.stop{
			cursor: not-allowed;
		    filter: alpha(opacity=65);
		    -webkit-box-shadow: none;
		    box-shadow: none;
		    opacity: .65;
		}
	</style>
	<!--滚动加载插件-->
	<script src="https://cdn.bootcss.com/jquery_lazyload/1.9.7/jquery.lazyload.min.js"></script>

	<script type="text/javascript">
		$(function() {
			$(".lazy").lazyload({
				effect: "show", // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
				failurelimit: 4, //加载N张可加区域外的图片
				threshold: 100 //距离屏幕180px即开始加载
			});

		});
	</script>
  </head>
  
  <body>
    <div class="menu-wrap">
			<nav class="menu">
				<div class="icon-list">
					<div class="avatar">
						<img src="${uuser.userPictureUrl}" class="masthead">
					</div>

					<div class="tools">
				
						<a href="#"><i class="fa fa-fw fa-star-o"></i><span>主页</span></a>
						<a href="shop"><i class="fa fa-fw fa-shopping-cart"></i><span>商店</span></a>
						<a href="home"><i class="fa fa-fw fa-user"></i><span>个人主页</span></a>
						<c:if test="${uuser.userType.equals('2')}">
							<a href="shopAdmin"><i class="fa fa-fw fa-bar-chart-o"></i><span>商店控制台</span></a>
						</c:if>
						<c:if test="${uuser.userId == 1}">
							<a href="admin"><i class="fa fa-fw fa-windows"></i><span>管理控制台</span></a>
						</c:if>
						<a href="exit"><i class="fa fa-fw fa-sign-out"></i><span>退出</span></a>
					
					</div>
				</div>
			</nav>
			<button class="close-button" id="close-button">Close Menu</button>
			<div class="morph-shape" id="morph-shape" data-morph-open="M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z">
				<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">
					<path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z" />
				</svg>
			</div>
		</div>

		<button class="menu-button" id="open-button">Open Menu</button>
		<div class="content-wrap">

			<div class="container">

				<div class="modal-content">
					<div class="content">
						<a name="product"></a>
						<h3 class="mk-sub-title">
		    				<span>SelfInfo</span>
		    				<span>/</span>
		    				个人信息
						</h3>

						<p class="mk-title-describe">没错，这些都是你的个人信息</p>
						<div class="mk-item-box">
							<div class="cent">
								<div class="col-md-5">
									<img src="${uuser.userPictureUrl}" class="img-responsive img-circle masthead selfImg" alt="" />
								</div>
								<div class="col-md-7">
									<table class="table table-hover">
										<tbody>
											<tr>
												<th scope="row"><i class="fa fa-user" aria-hidden="true"><b>&nbsp;Name:</b></i></th>
												<td><b><a href="#">${uuser.userName}</a></b></td>

											</tr>
											<tr>
												<th scope="row"><i class="fa fa-phone" aria-hidden="true"><b>&nbsp;Phone:</b></i></th>
												<td><b><a href="#">${uuser.userPhone}</a></b></td>
											</tr>
											<tr>
												<th scope="row"><i class="fa fa-map-marker" aria-hidden="true"><b>&nbsp;Address:</b></i></th>
												<td><b><a href="#">${uuser.userAddress}</a></b></td>
											</tr>
											<tr>
												<th scope="row"><i class="fa fa-envelope" aria-hidden="true"><b>&nbsp;Email:</b></i></th>
												<td><b><a href="#">${uuser.userEmail}</a></b></td>
											</tr>
											<tr>
												<th scope="row"><i class="fa fa-usd" aria-hidden="true"><b>&nbsp;Money:</b></i></th>
												<td><b><a href="#">${uuser.userMoney}元</a></b></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<!-- mk-item-box -->

						<h3 class="mk-sub-title">
		    				<span>Function</span>
		    				<span>/</span>
		    				功能
						</h3>

						<p class="mk-title-describe">没错，这些都是你的选择</p>
						<div class="mk-item-box">
							<div class="cent">
								<div class="mk-item">
									<a href="#" data-toggle="modal" data-target="#changeData">
										<article class="mk-color-item color1">
											<div class="item-logo">
												<i class="fa fa-wrench" aria-hidden="true"></i>
											</div>
											<h3>设置</h3>
											<p>修改你的个人信息</p>
											<i class="light"></i>
										</article>
									</a>
								</div>
								<!-- mk-item -->

								<div class="mk-item">
									<a href="#" data-toggle="modal" data-target="#changePassword">
										<article class="mk-color-item color6">
											<div class="item-logo">
												<i class="fa fa-key" aria-hidden="true"></i>
											</div>
											<h3>密码</h3>
											<p>修改你的账号密码</p>
											<i class="light"></i>
										</article>
									</a>
								</div>
								<!-- mk-item -->

								<div class="mk-item">
									<a href="#" data-toggle="modal" data-target="#recharge">
										<article class="mk-color-item color3">
											<div class="item-logo">
												<i class="fa fa-usd" aria-hidden="true"></i>
											</div>
											<h3>充值</h3>
											<p>为你的账号充值</p>
											<i class="light"></i>
										</article>
									</a>
								</div>
								<!-- mk-item -->
								<c:choose>
									<c:when test="${uuser.userType.equals('1')}">
										<div class="mk-item">
											<a href="#" data-toggle="modal" data-target="#openShop">
												<article class="mk-color-item color2">
													<div class="item-logo">
														<i class="fa fa-shopping-cart" aria-hidden="true"></i>
													</div>
													<h3>开店</h3>
													<p>开设你的打印商店</p>
													<i class="light"></i>
												</article>
											</a>
										</div>
										<!-- mk-item -->
									</c:when>
									<c:when test="${uuser.userType.equals('3')}">
										<div class="mk-item">
											<a href="#">
												<article class="mk-color-item color2 stop">
													<div class="item-logo">
														<i class="fa fa-shopping-cart" aria-hidden="true"></i>
													</div>
													<h3>开店</h3>
													<p>审核中</p>
													<i class="light"></i>
												</article>
											</a>
										</div>
										<!-- mk-item -->
									</c:when>
								</c:choose>
								
								
								
								
								
							</div>
						</div>
						<!-- mk-item-box -->

						<h3 class="mk-sub-title">
		    				<span>SelfOrder</span>
		    				<span>/</span>
		    				个人订单
						</h3>

						<p class="mk-title-describe">就是多了点...</p>
						<div class="mk-item-box">
							<c:choose>
								<c:when test="${!empty orders}">
									<div class="cent text-center">
										<b>- ( ゜- ゜)つロ 这个人连订单都没有!</b>
									</div>
								</c:when>
								<c:otherwise>
									<div class="border_gray cent">
										<c:forEach items="${ordersList}" var="orders">
											<div class="media image-light">
												<a class="media-left" href="#">
													<img class="mimg" src="img/${orders.fileType }.jpg" alt="">
												</a>
												<div class="media-body">
													<h2 class="media-heading">
														<a href="#">${orders.fileName }</a> 
														<a href="${orders.pdfPath }" class="btn btn-primary btn-sm pull-right" target="_blank">预览</a>
													</h2>
			
													<div class="archive-content">
														<ul>
															<li>店铺：
																<a href="#">${orders.shop.shopName }</a>
															</li>
															<li>价格：
																<a href="#">${orders.money }元</a>
															</li>
															<li>详细：
																<a href="#">
																<c:choose>
																	<c:when test="${orders.printType.equals('1') }">
																		黑白单面
																	</c:when>
																	<c:when test="${orders.printType.equals('2') }">
																		黑白双面
																	</c:when>
																	<c:when test="${orders.printType.equals('3') }">
																		彩印单面
																	</c:when>
																	<c:otherwise>
																		彩印双面
																	</c:otherwise>
																</c:choose>
																 x ${orders.page }页 x ${orders.num }份
																</a>
															</li>
															<li>状态：
																<a id="state${orders.orderId }" href="#">${orders.state }</a>
															</li>
															<li>联系：
																<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=664347225&amp;site=qq&amp;menu=yes" target="_blank">
																	<span class="ico"><i class="fa fa-qq" aria-hidden="true"></i></span>
																	<span class="txt">客服</span>
																</a>
																<a href="mailto:${orders.shop.user.userEmail }" target="_blank">
																	<span class="ico"><i class="fa fa-envelope" aria-hidden="true"></i></span>
																	<span class="txt">${orders.shop.user.userEmail }</span>
																</a>
																<a>
																	<span class="ico"><i class="fa fa-phone" aria-hidden="true"></i></span>
																	<span class="txt">${orders.shop.user.userPhone }</span>
																</a>
															</li>
														</ul>
													</div>
													<c:if test="${orders.state.equals('已发货')}">
														<button id="confirmButton${orders.orderId }" class="btn btn-success btn-sm" data-toggle="modal" data-target="#confirm" data-whatever="${orders.orderId }">确认送达</button>
													</c:if>
													<span class="date" title="2017/07/11 21:57">下单时间:&nbsp;<fmt:formatDate value="${orders.submitTime }" type="date" pattern="yyyy-MM-dd hh:mm:ss" /></span>
													
												</div>
											</div>
										</c:forEach>
									
										
									</div>
									<!-- border_gray -->
								</c:otherwise>
							</c:choose>
							
							
						</div>
						<!-- mk-item-box -->
					</div>
					<!-- content -->
				</div>
				<!-- modal-content -->
			</div>
			<!-- class=container -->

			<footer class="footer">
				<div class="social">
					<a href="https://github.com/gitwingsky" target="_blank" title="Github" mkpop="快去 Follow">
						<i class="fa fa-github" aria-hidden="true"></i>
					</a>
				</div>

				<div class="count">
					『您是本站第
					<img src="//cc.amazingcounters.com/counter.php?i=3216768&c=9650617"> 位访客』
				</div>

				<div class="web-record">
					© 2017-2018 WingSky 版权所有
				</div>
			</footer>
		</div>
		<!-- /content-wrap -->

		<!-- Modal -->
		<div class="modal fade" id="confirm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">确认送达</h4>
					</div>
					<div class="modal-body">
						<div class="alert alert-danger" role="alert"><strong>提示：</strong>确认之后钱会转达商家！</div>
						<label>评价打分：</label>
						<div class="star-rating">			
							<fieldset>
								<input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Outstanding">5 stars</label>
								<input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Very Good">4 stars</label>
								<input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Good">3 stars</label>
								<input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Poor">2 stars</label>
								<input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Very Poor">1 star</label>
							</fieldset>
						</div>
						<div class="form-group">
							<label for="message-text" class="control-label">评价:</label>
							<textarea class="form-control" id="message" rows="5" /></textarea>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-success" onclick="confirm();">确认</button>
					</div>
				</div>
			</div>
		</div>

		
		<!-- Modal -->
		<div class="modal fade" id="changeData" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">修改信息</h4>
					</div>
					<form action="changeData" enctype="multipart/form-data" method="post">
						<div class="modal-body">
							<div class="form-group">
								<div class="changeHead">
									<img src="${uuser.userPictureUrl}" class="masthead" id="img0">
									<p class="files btn btn-primary">更改头像
										<input type="file" name="file1" id="file0" />
									</p>
								</div>
							</div>
							<div class="form-group">
								<label for="shopName" class="control-label">名称:</label>
								<input type="text" class="form-control" id="userName" name="userName" required="required" value="${uuser.userName}">
							</div>
							<div class="form-group">
								<label for="shopPhone" class="control-label">电话:</label>
								<input type="text" class="form-control" id="userPhone" name="userPhone" required="required" value="${uuser.userPhone}">
							</div>
							<div class="form-group">
								<label for="shopAddress" class="control-label">地址:</label>
								<input type="text" class="form-control" id="userAddress" name="userAddress" required="required" value="${uuser.userAddress}">
							</div>

						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							<button type="submit" class="btn btn-primary">Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="changePassword" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">修改密码</h4>
					</div>
					<form>
						<div class="modal-body" id="changePasswordBody">
							<div class="form-group">
								<label for="userPassword" class="control-label">新密码:</label>
								<input type="text" class="form-control" id="userPassword" name="userPassword" required="required">
							</div>
							<div class="form-group">
								<label for="emailCode" class="control-label">验证码:</label>
								<div class="input-group">
									<input type="text" class="form-control" placeholder="注册邮箱接送到的验证码" id="emailCode" name="emailCode">
									<span class="input-group-btn">
	                        			<button class="btn btn-primary" type="button" onclick="sendMessage(this);"><i class="glyphicon glyphicon-envelope"></i>&nbsp;发送验证码</button>
	                    			</span>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary" onclick="changePassword();">Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>	
		
		<!-- Modal -->
		<div class="modal fade" id="recharge" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">充值</h4>
					</div>
					<div class="modal-body">
						<div class="alert alert-danger text-center" role="alert"><strong>提示：</strong>记得备注用户账号！</div>
						<img class="img-thumbnail img-responsive center-block" src="img/weChatPay.png" width="240" height="340" alt="weChatPayPic" />
						<div class="alert alert-success alert-top text-center" role="alert">
							有任何问题请联系：
							<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=664347225&amp;site=qq&amp;menu=yes" target="_blank">
								<span class="ico"><i class="fa fa-qq" aria-hidden="true"></i></span>
								<span class="txt">客服</span>
							</a>
							<a href="mailto:webmaster@csdn.net" target="_blank">
								<span class="ico"><i class="fa fa-envelope" aria-hidden="true"></i></span>
								<span class="txt">wingskymail@163.com</span>
							</a>
							<a>
								<span class="ico"><i class="fa fa-phone" aria-hidden="true"></i></span>
								<span class="txt">13680211019</span>
							</a>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-success">confirm</button>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Modal -->
		<div class="modal fade" id="openShop" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">开店</h4>
					</div>
					<form id="form1" class="layui-form" enctype="multipart/form-data">
					<div class="modal-body" id="openShopBody">
						
							<div class="form-group">
								<label for="shopName" class="control-label">店铺名称:</label>
								<input type="text" class="form-control" id="shopName" name="shopName" required="" lay-verify="shopName">
							</div>
							<div class="form-group">
								<label for="shopPhone" class="control-label">电话:</label>
								<input type="text" class="form-control" id="shopPhone" name="shopPhone" required="" lay-verify="phone">
							</div>
							<div class="form-group">
								<label for="emailCode" class="control-label">验证码:</label>
								<div class="input-group">
									<input type="text" class="form-control" placeholder="注册邮箱接送到的验证码" required="" id="emailCode" name="emailCode" lay-verify="emailCode"> 
									<span class="input-group-btn">
                        				<button class="btn btn-primary" type="button" onclick="sendMessage(this);"><i class="glyphicon glyphicon-envelope"></i>&nbsp;发送验证码</button>
                    				</span>
								</div>
							</div>
							<div class="form-group">
								<label for="AuxiliaryFile" class="control-label">上传相关辅助资料[打印机相关信息图片，店铺相关信息图片](大小10M以内):</label>
						        <input id="AuxiliaryFile" name="AuxiliaryFile" lay-verify="file" required="" class="file" type="file" data-show-upload="false" data-show-preview="false">
						       <div id="kv-error-1" style="margin-top:10px;display:none"></div>
							</div>
						
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" lay-filter="add" lay-submit="">
                  		确定
              		</button>
					</div>
					</form>
				</div>
			</div>
		</div>
		<!-- 返回顶部 -->
		<div class="mk-uptop" title="点击返回顶部"></div>

		<!-- js -->
		<script src="js/classie.js"></script>
		<script src="js/main3.js"></script>
		<script src="js/vector.js"></script>
		<!--
        	作者：wingsky
        	时间：2018-01-10
        	描述：本页面借鉴孟坤博客 mkblog.cn
        -->
		<script>
			$(function() {

				

				// 监听滚动变化
				$(window).scroll(function() {
					if($(window).scrollTop() < 300) {
						$(".mk-uptop").removeClass("show");
					} else {
						$(".mk-uptop").addClass("show");
					}
				});

				// 返回顶部
				$(".mk-uptop").click(function() {
					$("html, body").animate({
						scrollTop: 0
					}, "normal");
					return false;
				});

				// 烦人的 CNZZ，输出一大堆错误信息、、清除掉！	
				console.clear();

				console.log('%c云打印平台', 'font-size: 60px;background: #EEE url(img/2.png) repeat; text-shadow: 5px -5px black, 4px -4px white;  font-weight: bold;  -webkit-text-fill-color: transparent;  -webkit-background-clip: text;');
				console.info('Version 1.0, Designed by www.wingsky.net.');
				console.error('版权所有，侵权必究！');
			});

			/*******************************
			 * 函数名：生成指定范围的随机数
			 * 输入：  (under)下限   (over)上限
			 * 输出： 所需要的数值
			 * *****************************/
			function fRandomBy(under, over) {
				switch(arguments.length) {
					case 1:
						return parseInt(Math.random() * under + 1);
					case 2:
						return parseInt(Math.random() * (over - under + 1) + under);
					default:
						return 0;
				}
			}
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
			
			var InterValObj; //timer变量，控制时间
			var count = 30; //间隔函数，1秒执行
			var curCount;//当前剩余秒数
			
			
			function sendMessage(obj) {
				curCount = count;
				//设置button效果，开始计时
				$(obj).attr("disabled", "true");
				$(obj).text( + curCount + "秒再获取");
				InterValObj = window.setInterval(function () {
					if (curCount == 0) {                
						window.clearInterval(InterValObj);//停止计时器
						$(obj).removeAttr("disabled");//启用按钮
						$(obj).text("重新发送验证码");
						code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
					}
					else {
						curCount--;
						$(obj).text( + curCount + "秒再获取");
					}
				}, 1000); //启动计时器，1秒执行一次
				//向后台发送处理数据
				$.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "sendEmail", //目标地址
					data: {"toUser":'${uuser.userUsername}'},
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){ }
				});
			}
			
			var h;
			
			function changePassword() {
				var userPassword = $('#userPassword').val();
				var emailCode = $('#emailCode').val();
				$.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "changePassword", //目标地址
					data: "userPassword=" + userPassword +"&emailCode=" + emailCode,
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){
						h = $("#changePasswordBody").html();
						$("#changePasswordBody").html("");
						$("#changePasswordBody").html(msg);
						if(msg.indexOf('Success') != -1){
							setTimeout(stt, 2000);
						}else{
							setTimeout(st, 2000);
						}
					}
				});
			}
			
			function st(){
				$("#changePasswordBody").html("");
				$("#changePasswordBody").html(h);
			}
			function stt(){
				$(location).prop("href", "exit");
			}
			function sttt(){
				$(location).prop("href", "home");
			}
			
			var orderId;
			
			$('#confirm').on('show.bs.modal', function (event) {
				  var button = $(event.relatedTarget);
				  orderId = button.data('whatever');
			});
			
			function confirm(){
				var message = $("#message").val();
				var star = $("input[type=radio][name=rating]:checked").val();
				console.log(star);
				$.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "confirm", //目标地址
					data: "orderId=" + orderId +"&message=" + message + "&star=" + star,
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){
						$("#confirm").modal('hide');
						$("#state" + orderId).text("已确认");
						$("#confirmButton" + orderId).remove();
					}
				});
			}
			
			layui.use(['form', 'layer'], function() {
				
				$ = layui.jquery;
				var form = layui.form,
					layer = layui.layer;
				
				//自定义验证规则
				form.verify({
					shopName: function(value) {
						if(value.length == 0) {
							return '必须填写商店名称';
						}
					},
					emailCode: function(value) {
						if(value.length == 0) {
							return '必须填写验证码';
						}
					},
					file: function(value) {
						if(value=='') {
							return '必须上传文件';
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
						url: "OpenShop", //目标地址
						data: dataa ,
						cache: false,    
				        processData: false,    
				        contentType: false ,
						error: function (XMLHttpRequest, textStatus, errorThrown) { },
						success: function (msg){ 
							h = $("#openShopBody").html();
							$("#openShopBody").html("");
							$("#openShopBody").html(msg);
							setTimeout(sttt, 2000);
						}
					});
					
					
					return false;
				});
			});

			
		</script>
		
	</body>
  </body>
</html>
