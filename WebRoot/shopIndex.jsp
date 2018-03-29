<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>云打印平台</title>
		
	<!-- 新 Bootstrap 核心 CSS 文件 -->
	<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
		
	<!-- font-awesome 图标字体 -->
	<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" media="screen" rel="stylesheet" type="text/css">

	<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
	<script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
		
	<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
	<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		
	<!-- 商店页面核心样式文件 -->
	<link rel="stylesheet" href="css/shop.css">
		
	<!-- 导航样式文件 -->
	<link rel="stylesheet" type="text/css" href="css/menu_elastic.css" />
	<script src="js/snap.svg-min.js"></script>
		
	<!-- fileinput样式文件 -->
	<link href="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/css/fileinput.min.css" rel="stylesheet">
	<script src="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/js/fileinput.min.js"></script>
	<script src="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/js/locales/zh.min.js"></script>
		
	<!-- 单选按钮 -->
	<link href="css/awesome-bootstrap-checkbox.css" rel="stylesheet">
		
	<!-- tips样式文件 -->
	<link href="css/tips.css" rel="stylesheet" />
	<!-- 三级联动 -->
	<link rel="stylesheet" type="text/css" href="css/city-picker.css">
	<!--公共头文件结束-->

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
			
		<header class="header">
			<!-- 动画展示区域 -->
			<div id="victor-container">
				<div id="victor-output"></div>
			</div>

			<div class="welcome">
				<p>— 欢迎访问 —</p>
				<img class="web-title" src="resource/shop/t${shop.shopId }.png" alt="${shop.shopName }" draggable="false" onerror="onerror=null;src='resource/shop/t${shop.shopId }.png'">
			</div>

			<!--向下滚动提示-->
			<a class="scroll-down-tips" href="#product" onclick="$('html, body').animate({scrollTop: $('.header').height()}, '500');return false;">
				<i class="fa fa-angle-double-down" aria-hidden="true"></i> 向下滚动
			</a>
		</header>
		<!-- header -->
		<div class="container">

			<section class="section">

				<a name="product"></a>
				<h3 class="mk-sub-title">
    				<span>Print</span>
    				<span>/</span>
    				打印
				</h3>

				<p class="mk-title-describe">没错，这些都是可供打印的格式</p>

				<div class="mk-item-box">

					<div class="mk-item">
						<a href="#" data-toggle="modal" data-target="#print">
							<article class="mk-color-item color1">
								<div class="item-logo">
									<i class="fa fa-file-word-o" aria-hidden="true"></i>
								</div>
								<h3>Document</h3>
								<p>文档文件</p>
								<i class="light"></i>
							</article>
						</a>
					</div>
					<!-- mk-item -->

					<div class="mk-item">
						<a href="#" data-toggle="modal" data-target="#picture">
							<article class="mk-color-item color3">
								<div class="item-logo">
									<i class="fa fa-file-image-o" aria-hidden="true"></i>
								</div>
								<h3>Picture</h3>
								<p>图片文件</p>
								<i class="light"></i>
							</article>
						</a>
					</div>
					<!-- mk-item -->
					
					<div class="mk-item">
    					<a href="javascript:;" target="_blank">
        					<article class="mk-color-item color6">
	            				<div class="item-logo">
	                				<i class="fa fa-circle-thin" aria-hidden="true"></i>
	            				</div>
	            				<h3>更多格式</h3>
	            				<p>等待添加</p>
	            				<i class="light"></i>
        					</article>
    					</a>
					</div>
					<!-- mk-item -->

				</div>
				<!-- mk-item-box -->

				<h3 class="mk-sub-title">
    				<span>Function</span>
    				<span>/</span>
    				功能
				</h3>

				<p class="mk-title-describe">没错，这些都是你的选择</p>

				<div class="mk-item-box">

					

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

					<div class="mk-item">
						<a href="shop">
							<article class="mk-color-item color6">
								<div class="item-logo">
									<i class="fa fa-shopping-cart" aria-hidden="true"></i>
								</div>
								<h3>商店</h3>
								<p>前往商店页面</p>
								<i class="light"></i>
							</article>
						</a>
					</div>
					<!-- mk-item -->

					<div class="mk-item">
						<a href="home">
							<article class="mk-color-item color2">
								<div class="item-logo">
									<i class="fa fa-home" aria-hidden="true"></i>
								</div>
								<h3>Home</h3>
								<p>回到个人主页</p>
								<i class="light"></i>
							</article>
						</a>
					</div>
					<!-- mk-item -->

				</div>
				<!-- mk-item-box -->

			</section>
			<!--  class="section" -->

			<section class="section">
				<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active">
							<a href="#about" aria-controls="home" role="tab" data-toggle="tab">介绍</a>
						</li>
						<li role="presentation">
							<a href="#message" aria-controls="profile" role="tab" data-toggle="tab">评论</a>
						</li>
						
					</ul>
					
					<div class="out-info-border tab-content">
						<div role="tabpanel" class="tab-pane active " id="about">
							<div class="mk-big-title">
								<h4>介绍</h4>
							</div>
							<div class="cent1">
								<div class="about-content">
									${shop.shopIntroduction }
			
								</div>
							</div>
						</div>
						<!-- about -->
						<div role="tabpanel" class="tab-pane" id="message">
							<div class="mk-big-title">
								<h4>评论</h4>
							</div>
							<div class="cent1 panel panel-default">
								<div class="panel-heading">
									<div class="row">
										<div class='col-sm-2'>
											<div class='radio radio-success'>
												<input type='radio' name='printType' id='radio5' value='1' required="required" checked>
												<label for='radio5'>全部</label>
											</div>
										</div>
										<div class='col-sm-2'>
											<div class='radio radio-success'>
												<input type='radio' name='printType' id='radio6' value='2' required="required">
												<label for='radio6'>好评<span class="data">(${Outstanding})</span></label>
											</div>
										</div>
										<div class='col-sm-2'>
											<div class='radio radio-success'>
												<input type='radio' name='printType' id='radio7' value='3' required="required">
												<label for='radio7'>中评<span class="data">(${Good})</span></label>
											</div>
										</div>
										<div class='col-sm-2'>
											<div class='radio radio-success'>
												<input type='radio' name='printType' id='radio8' value='4' required="required">
												<label for='radio8'>差评<span class="data">(${Bad})</span></label>
											</div>
										</div>
										
									</div>
								</div>
								
								<ul id="messageContent" class="media-list" style="margin: 20px;">
									<c:forEach items="${messageList}" var="message">
									<li class="media">
										<div class="media-left">
											<img class="media-object img-circle messageImg" src="${message.user.userPictureUrl }" alt="...">
										</div>
										<div class="media-body">
											<h4 class="media-heading">
				                                <a class="star" href="#">${message.user.userName}</a>
				                                <c:forEach begin="1" end="${message.star}" >
				                               		<i class="fa fa-star yellow" aria-hidden="true"></i>
				                               	</c:forEach>
				                               	<c:forEach begin="${message.star}" end="4" >
				                            		<i class="fa fa-star gray" aria-hidden="true"></i>
				                            	</c:forEach>
				                            </h4>
											<p>${message.message}</p>
											<span class="date" title="2017/07/11 21:57"><fmt:formatDate value="${message.submitTime }" type="date" pattern="yyyy-MM-dd hh:mm:ss" /></span>
											<hr/>
											<c:if test="${message.reply!=null}">
												<ul class="media-list">
													<li class="media">
														<div class="media-left">
															<img class="media-object img-circle messageImg" src="${message.reply.userPictureUrl }" alt="...">
														</div>
														<div class="media-body">
															<h4 class="media-heading" style="color: #aaa;">[掌柜回复]</h4>
															<p class="text-danger">${message.replyMessage }</p>
														</div>
													</li>
													<hr/>
												</ul>
											</c:if>
											
										</div>
									</li>
									</c:forEach>
								</ul>
							</div>
						</div>
						<!-- message -->
					</div>
			</section>

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
		<div class="modal fade" id="print" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content" id="printD">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">打印文档</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="printFile" class="control-label">支持[doc、docx、ppt、pptx、xls、xlsx、pdf]格式文件(大小10M以内)</label>
							<div class="file-loading">
								<input id="printFile" name="printFile" type="file">
							</div>
							<div id="kv-error-1" style="margin-top:10px;display:none"></div>
						</div>
						<div id="printBody">
							<div class="form-group" id="printContent" style="display: none">
								<div class='print-box'>
									<div class='print-content'>
										<div class="row cent">
											<p class='print-font-size col-md-5' id="fileName">test.xlsx</p>
											<p class='print-font-size col-md-5'>页数：<span id="page"></span>&nbsp;页</p>
											<a href="#" class="btn btn-primary col-md-2" target="_blank" id="preview" >预览</a>
										</div>
										
										<div class='print-radio-box'>
											<div class='row'>
												<div class='col-sm-6'>
													<div class='radio radio-success'>
														<input type='radio' name='printType' id='radio1' value='0.3' required="required">
														<label for='radio1'>黑白单面：<b id="oneGray">0.3</b>元</label>
													</div>
													<div class='radio radio-success'>
														<input type='radio' name='printType' id='radio2' value='0.3'>
														<label for='radio2'>黑白双面：<b id="twoGray"></b>元</label>
													</div>
												</div>
												<div class='col-sm-6'>
													<div class='radio radio-success'>
														<input type='radio' name='printType' id='radio3' value='0.3'>
														<label for='radio3'>彩印单面：<b id="oneRBG"></b>元</label>
													</div>
													<div class='radio radio-success'>
														<input type='radio' name='printType' id='radio4' value='0.3'>
														<label for='radio4'>彩印双面：<b id="twoRBG"></b>元</label>
													</div>
												</div>
											</div>
										</div>
										
										<div class='print-radio-box'>
											<div class='row'>
												<div class='col-sm-6'>
													<p class='print-font-size col-md-10'>页数：<span class='print-span' >12</span>&nbsp;页</p>
												</div>
												<div class='col-sm-6'>
													<div class="input-group">
														<span class="input-group-btn">
															<input type="button" class="btn btn-primary" value="-" onclick="sub()">
														</span>
														<input type="text" class="form-control" id="ans" value="1">
														<span class="input-group-btn">
															<input type="button" class="btn btn-primary" value="+" onclick="add()">
														</span>
													</div>
													
												</div>
											</div>
										</div>
										
										<div class='print-money-box'>
											<div class='print-money-left'>
												<p>价格：<b id='money'></b>元</p>
											</div>
											<div class='print-money-right'>
												<p>余额：<b id='userMoney'>50</b>元</p>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="userPassword" class="control-label">地址:</label>
									<div class="city-picker-select"></div>
								</div>
								<div class="form-group">
									<input type="text"  id="userAddress" class="form-control" name="userAddress" placeholder="具体地址" required="required">
								</div>
							</div>
						
					</div>
					</div>
					
					<input type="hidden" id="fileName" value="">
					<p id="warning" class="print-warning"></p>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" onclick="order();">提交</button>
					</div>
				</div>
			</div>
		</div>
		
		
		<!-- Modal -->
		<div class="modal fade" id="picture" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content" id="printPictureD">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">打印文档</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="printPicture" class="control-label">支持[jpg、jpge、png]格式文件(大小10M以内)</label>
							<div class="file-loading">
								<input id="printPicture" name="printPicture" type="file">
							</div>
							<div id="kv-error-2" style="margin-top:10px;display:none"></div>
						</div>
						<div id="pictureBody">
							<div class="form-group" id="pictureContent" style="display: none">
								<div class='print-box'>
									<div class='print-content'>
										<div class="row cent">
											<p class='print-font-size col-md-10' id="pictureName">1.jpg</p>
											<a href="#" class="btn btn-primary col-md-2" target="_blank" id="previewPicture" >预览</a>
										</div>
										
										<div class='print-radio-box'>
											<div class='row'>
												<div class='col-sm-6'>
													<div class='radio radio-success'>
														<input type='radio' name='printPictureType' id='r1' value='${shop.shopOneGray }' required="required">
														<label for='r1'>黑白：<b>${shop.shopOneGray }</b>元</label>
													</div>
												</div>
												<div class='col-sm-6'>
													<div class='radio radio-success'>
														<input type='radio' name='printPictureType' id='r3' value='${shop.shopOneRBG }'>
														<label for='r3'>彩印：<b>${shop.shopOneRBG }</b>元</label>
													</div>
												</div>
											</div>
										</div>
										
										<div class='print-radio-box'>
											<div class='row'>
												<div class='col-sm-3'>
												</div>
												<div class='col-sm-6'>
													<div class="input-group">
														<span class="input-group-btn">
															<input type="button" class="btn btn-primary" value="-" onclick="sub1()">
														</span>
														<input type="text" class="form-control" id="ans1" value="1">
														<span class="input-group-btn">
															<input type="button" class="btn btn-primary" value="+" onclick="add1()">
														</span>
													</div>
												</div>
												<div class='col-sm-3'>
												</div>
											</div>
										</div>
										
										<div class='print-money-box'>
											<div class='print-money-left'>
												<p>价格：<b id='money1'></b>元</p>
											</div>
											<div class='print-money-right'>
												<p>余额：<b id='userMoney'>${uuser.userMoney }</b>元</p>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="userPassword" class="control-label">地址:</label>
									<div class="city-picker-select"></div>
								</div>
								<div class="form-group">
									<input type="text"  id="userAddress1" class="form-control" name="userAddress" placeholder="具体地址" required="required">
								</div>
							</div>
						
					</div>
					</div>
					
					<input type="hidden" id="fileName" value="">
					<p id="warning1" class="print-warning"></p>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" onclick="order1();">提交</button>
					</div>
				</div>
			</div>
		</div>
		
		
		<!-- 返回顶部 -->
		<div class="mk-uptop" title="点击返回顶部"></div>

		<!-- js -->
		
		<script src="js/classie.js"></script>
		<script src="js/main3.js"></script>
		<script src="js/vector.js"></script>
		<script type="text/javascript" src="js/citydata.min.js"></script>
		<script type="text/javascript" src="js/cityPicker-1.1.8.js"></script>
		<!--
        	作者：wingsky
        	时间：2018-01-10
        	描述：本页面借鉴孟坤博客 mkblog.cn
        -->
		<script>
			$(function() {

				// 页面加载完毕后固定页头高度，防止在某些自动隐藏工具栏的移动浏览器上出现页面抖动现象
				$(".header").height($(window).height());

				// 初始化 传入dom id
				var victor = new Victor("victor-container", "victor-output");
				var theme = [
					["#002c4a", "#005584"],
					["#35ac03", "#3f4303"],
					["#ac0908", "#cd5726"],
					["#18bbff", "#00486b"]
				];
				var color = theme[fRandomBy(0, 3)];
				victor(color).set();

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
			
		</script>
		
		<script>
			var pB = $("#printBody").html();
			var pA = $("#pictureBody").html();
			
			var page;
			var pa;
			var fileName;
			var pdfPath;
			var pNum = 1;
			$("#printFile").fileinput({
				language: 'zh',
				uploadUrl: 'printUpload',
				allowedFileExtensions: ['doc', 'docx','ppt','pptx','xls','xlsx','pdf'],
				autoReplace: true,
				uploadAsync: false,
				showUpload: true,
				showRemove: true,
				showPreview: false,
				showCaption: true,
				maxFileSize : 10000,
				enctype: 'multipart/form-data',
				uploadExtraData: {"shopId":'${shop.shopId}'},
				maxFileCount: 1,
				elErrorContainer: '#kv-error-1'
			});
			$("#printFile").on("filebatchuploadsuccess", function(e, data) {
	            var res = data.response;
	            if(res.state == "success"){
	            	$("#printContent").css("display","block");
	            	$(".print-span").html("");
	            	$(".print-span").html(res.pages);
	            	$("#page").text("");
	            	$("#page").text(res.pages);
	            	$("#preview").attr("href","#");
	            	$("#preview").attr("href",res.pdfPath);
	            	$("#radio1").val("");
	            	$("#radio1").val(res.oneGray);
	            	$("#radio2").val("");
	            	$("#radio2").val(res.twoGray);
	            	$("#radio3").val("");
	            	$("#radio3").val(res.oneRBG);
	            	$("#radio4").val("");
	            	$("#radio4").val(res.twoRBG);
	            	$("#oneGray").text("");
	            	$("#oneGray").text(res.oneGray);
	            	$("#twoGray").text("");
	            	$("#twoGray").text(res.twoGray);
	            	$("#oneRBG").text("");
	            	$("#oneRBG").text(res.oneRBG);
	            	$("#twoRBG").text("");
	            	$("#twoRBG").text(res.twoRBG);
	            	$("#userMoney").text("");
	            	$("#userMoney").text(res.userMoney);
	            	$("#fileName").html("");
	            	$("#fileName").html(res.fileName);
	            	page = res.pages;
	            	fileName = res.fileName;
	            	pdfPath = res.pdfPath;
	            }
	        });
			
			var flag = true;
			var flag1 = false;
			var printType;
			$("input[type=radio][name=printType]").change(function() {
				var userMoney = $("#userMoney").text();
				pa = page;
				
				if(this.id == "radio2" || this.id == "radio4"){
					pa = Math.ceil(page/2.0);
					$(".print-span").html("");
					$(".print-span").html(pa);
				}else{
					$(".print-span").html("");
					$(".print-span").html(page);
				}
				
				var num = this.value * pa * pNum;
				printType = this.id;
				$("#money").text("");
				$("#money").text(num.toFixed(2));
				if(userMoney >= num){
					flag = true;
				}else{
					flag = false;
				}
				flag1 = true;
			});
			
			
			var address;
			var select;
			city();
			function city() {
				//原生城市-联动
				select = $('.city-picker-select').cityPicker({
					dataJson: cityData,
					renderMode: false,
					autoSelected: true,
					onChoiceEnd: function() {
						address = this.values[0].name + this.values[1].name + this.values[2].name;	
					}
				});
			}
			
			
			
			function order() {
				var flag2 = false;
				var userAddress = $("#userAddress").val();
				if(userAddress != ""){
					flag2 = true;
				}
				if(flag == false){
					$("#warning").html("你的余额不足，请先充值!");
				}else if(flag1 == false){
					$("#warning").html("请选择打印类型!");
				}else if(flag2 == false){
					$("#warning").html("请填写具体地址");
				}else{
					$.ajax({
						type: "POST", //用POST方式传输
						dataType: "text", //数据格式:JSON
						url: "order", //目标地址
						data: {"shopId":'${shop.shopId}',"page":pa,"fileName":fileName,"pdfPath":pdfPath,"userAddress":address + userAddress,"printType":printType,"num":pNum},
						error: function (XMLHttpRequest, textStatus, errorThrown) { },
						success: function (msg){
							var res = msg.split("@");
							$("#printBody").html("");
							$("#printBody").html(res[1]);
							if(msg.indexOf('Success') != -1){
								send(res[0]);
								setTimeout(stt, 2000);
							}else{
								setTimeout(st, 2000);
							}
						}
					});
				}
			}
			function st(){
				$("#printBody").html("");
				$("#printBody").html(pB);
				city();
			}
			function stt(){
				$(location).prop("href", "home");
			}
			function sttt(){
				$("#pictureBody").html("");
				$("#pictureBody").html(pA);
				city();
			}
			
			function sub() {
				var a = $("#ans").val();
				a = parseInt(a);
				a--;
				if(a < 1){
					a = 1;
				}
				pNum = a;
				$("#ans").val(a);
				var va = $("input[type=radio][name=printType]:checked").val();
				var num = va * pa * pNum;
				$("#money").text("");
				$("#money").text(num.toFixed(2));
			}

			function add() {
				var a = $("#ans").val();
				a = parseInt(a);
				a++;
				pNum = a;
				$("#ans").val(a);
				var va = $("input[type=radio][name=printType]:checked").val();
				var num = va * pa * pNum;
				$("#money").text("");
				$("#money").text(num.toFixed(2));
			}
			
			$(":radio").click(function(){
				$.ajax({
					type: "POST", //用POST方式传输
					dataType: "text", //数据格式:JSON
					url: "changeStar", //目标地址
					data: "shopId=" + ${shop.shopId } + "&star=" + $(this).val(),
					error: function (XMLHttpRequest, textStatus, errorThrown) { },
					success: function (msg){
						if(msg==""){
							$("#messageContent").html("");
						}else{
							$("#messageContent").html("");
							$("#messageContent").html(msg);
						}
						
						
					}
				});		    
			});
			
			var picNum = 1;
			function sub1() {
				var a = $("#ans1").val();
				a = parseInt(a);
				a--;
				if(a < 1){
					a = 1;
				}
				picNum = a;
				$("#ans1").val(a);
				var va = $("input[type=radio][name=printPictureType]:checked").val();
				var num = va * picNum;
				$("#money1").text("");
				$("#money1").text(num.toFixed(2));
			}
			
			function add1() {
				var a = $("#ans1").val();
				a = parseInt(a);
				a++;
				picNum = a;
				$("#ans1").val(a);
				var va = $("input[type=radio][name=printPictureType]:checked").val();
				var num = va * picNum;
				$("#money1").text("");
				$("#money1").text(num.toFixed(2));
			}
			
			var flag3 = true;
			var flag4 = false;
			var pictureType;
			$("input[type=radio][name=printPictureType]").change(function() {
				var userMoney = $("#userMoney").text();

				var num = this.value * picNum;
				pictureType = this.id;
				$("#money1").text("");
				$("#money1").text(num.toFixed(2));
				if(userMoney >= num){
					flag3 = true;
				}else{
					flag3 = false;
				}
				flag4 = true;
			});
			
			
			var pictureName;
			var imgPath;
			function order1() {
				var flag2 = false;
				var userAddress = $("#userAddress1").val();
				if(userAddress != ""){
					flag2 = true;
				}
				if(flag3 == false){
					$("#warning1").html("你的余额不足，请先充值!");
				}else if(flag4 == false){
					$("#warning1").html("请选择打印类型!");
				}else if(flag2 == false){
					$("#warning1").html("请填写具体地址");
				}else{
					$.ajax({
						type: "POST", //用POST方式传输
						dataType: "text", //数据格式:JSON
						url: "order", //目标地址
						data: {"shopId":'${shop.shopId}',"page":1,"fileName":pictureName,"pdfPath":imgPath,"userAddress":address + userAddress,"printType":pictureType,"num":picNum},
						error: function (XMLHttpRequest, textStatus, errorThrown) { },
						success: function (msg){
							var res = msg.split("@");
							$("#pictureBody").html("");
							$("#pictureBody").html(res[1]);
							if(msg.indexOf("Success") != -1){
								send(res[0]);
								setTimeout(stt, 2000);
							}else{
								setTimeout(sttt, 2000);
							}
						}
					});
				}
			}
			
			$("#printPicture").fileinput({
				language: 'zh',
				uploadUrl: 'PictureUpload',
				allowedFileExtensions: ['jpg', 'png','jpeg'],
				autoReplace: true,
				uploadAsync: false,
				showUpload: true,
				showRemove: true,
				showPreview: false,
				showCaption: true,
				maxFileSize : 10000,
				enctype: 'multipart/form-data',
				maxFileCount: 1,
				elErrorContainer: '#kv-error-2'
			});
			$("#printPicture").on("filebatchuploadsuccess", function(e, data) {
	            var res = data.response;
	            if(res.state == "success"){
	            	$("#pictureContent").css("display","block");        	
	            	$("#previewPicture").attr("href","#");
	            	$("#preview").attr("href",res.imgPath);

	            	$("#pictureName").html("");
	            	$("#pictureName").html(res.pictureName);
	            	pictureName = res.pictureName;
	            	imgPath = res.imgPath;
	            }
	        });
			
			
			var ws = null;
			if(WebSocket){
				//建立连接
				ws = new WebSocket("ws://${pageContext.request.getServerName()}:${pageContext.request.getServerPort()}${pageContext.request.contextPath}/websocket/user");
			}else{
				alert("浏览器不支持WebSocket！");
			}
			
			function send(orderId) {
				ws.send(orderId);
			}
			
		</script>
		
		
  </body>
</html>
