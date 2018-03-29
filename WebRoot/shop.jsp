<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE HTML>
<html>
  <head>
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
	<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" media="screen" rel="stylesheet" type="text/css">

	<!-- 商店页面核心样式文件 -->
	<link rel="stylesheet" href="css/shop.css">
	
	<!-- 导航样式文件 -->
	<link rel="stylesheet" type="text/css" href="css/menu_elastic.css" />
	<script src="js/snap.svg-min.js"></script>
	<!--[if IE]>
  	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	
	<!-- fileinput样式文件 -->
	<link href="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/css/fileinput.min.css" rel="stylesheet">
	<script src="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/js/fileinput.min.js"></script>
	<script src="https://cdn.bootcss.com/bootstrap-fileinput/4.4.6/js/locales/zh.min.js"></script>
	
	<!--公共头文件结束-->

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
		<header class="header">
			<!-- 动画展示区域 -->
			<div id="victor-container">
				<div id="victor-output"></div>
			</div>

			<div class="welcome">
				<p>— 欢迎访问 —</p>
				<img class="web-title" src="/img/2.png" alt="云打印平台" draggable="false" onerror="onerror=null;src='img/2.png'">
			</div>

			<!--向下滚动提示-->
			<a class="scroll-down-tips" href="#product" onclick="$('html, body').animate({scrollTop: $('.header').height()}, '500');return false;">
				<i class="fa fa-angle-double-down" aria-hidden="true"></i> 向下滚动
			</a>
		</header>
		<div class="container">
			<a name="product"></a>
			<h3 class="mk-sub-title">
    			<span>Shops</span>
    			<span>/</span>
    			商店
			</h3>

			<p class="mk-title-describe">没错，这些都是你需要的商店</p>
			<div class="row">
				<c:forEach items="${requestScope.shopList }" var="shop">
				<div class="col-sm-6 col-md-4 col-lg-3 tool-item cx">
					<div class="thumbnail">
						<a href="shop?shopId=${shop.shopId }" title="${shop.shopName }">
							<img class="lazy" src="img/null.png" data-original="${shop.shopPictureUrl }" width="300" height="150">
						</a>
						<div class="caption">
							<h3>
                    			<a href="shop?shopId=${shop.shopId }" title="${shop.shopName }" >${shop.shopName }<br><small>${shop.shopAddress }</small></a>
                			</h3>
							<p>
								黑白单面：${shop.shopOneGray }￥
								
								&nbsp;黑白双面：${shop.shopTwoGray }￥
								<br>
								彩印单面：${shop.shopOneRBG }￥
								
								&nbsp;彩印双面：${shop.shopTwoRBG }￥
							</p>
						</div>
					</div>
				</div>	
				</c:forEach>
			</div>
			<!--class="row"-->
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
  </body>
</html>
