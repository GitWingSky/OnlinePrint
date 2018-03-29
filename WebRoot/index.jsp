<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<meta name="format-detection" content="telephone=no" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge", chrome="1" />
		<meta name="renderer" content="webkit" />
		<title>首页</title>
		<link href="css/vendors.css" rel="stylesheet">
		<link href="css/index.css" rel="stylesheet">
		<!-- font-awesome 图标字体 -->
		<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" media="screen" rel="stylesheet" type="text/css">
		<style>
			.news-img .swiper-slide img {
				width: 100%
			}
			
			.dream-content {
			    width: 100%;
			    height: 494px;
			    margin-top: 10px;
			    text-align: center;
			    background: url(img/dream.png) no-repeat center -205px;
			    overflow: hidden;
			}
			
			/* 彩色块，样式来自 alloyteam */

			.mk-color-item {
				font-family: microsoft yahei;
				background-color: #70c3ff;
				padding: 20px 10px;
				text-align: center;
				border-radius: 4px;
				color: #fff;
				margin-bottom: 25px;
				-webkit-transition: all .3s ease;
				transition: all .3s ease;
				overflow: hidden;
				cursor: pointer;
				position: relative;
			}
			
			.mk-color-item:hover {
				transform: translateY(-6px);
				-webkit-transform: translateY(-6px);
				-moz-transform: translateY(-6px);
				box-shadow: 0 26px 40px -24px rgba(0, 36, 100, .5);
				-webkit-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, .5);
				-moz-box-shadow: 0 26px 40px -24px rgba(0, 36, 100, .5)
			}
			
			.mk-color-item.color1 {
				background-color: #70c3ff!important;
			}
			
			.mk-color-item.color2 {
				background-color: #fd6a7f!important;
			}
			
			.mk-color-item.color3 {
				background-color: #7f8ea0!important;
			}
			
			.mk-color-item.color4 {
				background-color: #89d04f!important;
			}
			
			.mk-color-item.color5 {
				background-color: #998899!important;
			}
			
			.mk-color-item.color6 {
				background-color: #888069!important;
			}
			
			.mk-color-item.color6 {
				background-color: #888069!important;
			}
			
			.mk-color-item>p {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: 14px;
			}
			
			.mk-color-item>.item-logo {
				height: 60px;
				overflow: hidden;
				display: inline-block
			}
			
			.mk-color-item>.item-logo>img {
				height: 100%
			}
			
			.mk-color-item>.item-logo>.fa {
				font-size: 60px;
				line-height: 60px;
			}
			
			.mk-color-item>h3 {
				font-size: 24px;
				margin-top: 20px;
				margin-bottom: 10px;
				font-family: inherit;
				font-weight: 500;
				line-height: 1.1;
				color: inherit;
			}
			
			.mk-color-item>.light {
				cursor: pointer;
				position: absolute;
				left: -100%;
				top: 0;
				width: 100%;
				height: 100%;
				background-image: -webkit-linear-gradient(0deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .5), hsla(0, 0%, 100%, 0));
				transform: skewx(-25deg);
				-o-transform: skewx(-25deg);
				-moz-transform: skewx(-25deg);
				-webkit-transform: skewx(-25deg);
			}
			
			.mk-color-item:hover>.light {
				-webkit-transition: all .3s ease;
				transition: all .3s ease;
				left: 100%
			}
			
			
		</style>
	</head>

	<body>
		
		<div class="nav-bar">
			<div class="nav-left">
				<a href="index.html"><img src="img/logo.png" /></a>
			</div>
			<div class="nav-right">
				<ul>
					<li class="active">
						<a href="javascript:void(0);">首页</a>
					</li>
					<li>
						<a href="loginForm">登陆</a>
					</li>
					
				</ul>
			</div>
		</div>
		<div class="loop" id="loop">
			<div class="swiper-container swiper-container1">
				<div class="swiper-wrapper">
					<div class="swiper-slide loop-bg-1" id="b1"> </div>
					<div class="swiper-slide loop-bg-2" id="b2"> </div>
					<div class="swiper-slide loop-bg-3" id="b3"> </div>
				</div>
				<div class="swiper-pagination swiper-p1"></div>
				<div class="swiper-button-prev swiper-button-black"></div>
				<div class="swiper-button-next swiper-button-black"></div>
			</div>
		</div>
		<div class="box">
			<div class="box-outer" style="background:#fff">
				<div class="details"> <img src="img/num/01.png" class="number" />
					<p class="ft-fix">时尚的互联网打印体验</p>
					<div class="floor">
						<p>「云打印平台」是一款基于互联网 + 技术的自助移动文印产品</p>
						<p class="ft-block">它采取云平台架构，实现多平台打印数据同步共享</p>
						<p class="ft-block">通过手机、微信、网页都可以随时随地想印就印</p>
						<p class="ft-block">开创打印行业新格局</p>
					</div>
					<div class="container">
						<ul>
							<li class="entry-one">
								<div class="item" data-aos="flip-left"> <img src="img/ico/inter.png" />
									<p class="ft-blue">互联网+打印</p>
									<p>充分发挥互联网开放互动优势</p>
									<p class="mt-20">与传统打印产业深度融合共赢</p>
								</div>
							</li>
							<li>
								<div class="item" data-aos="flip-left"> <img src="img/ico/ball.png" />
									<p class="ft-blue">多入口使用</p>
									<p>云平台架构</p>
									<p class="mt-20">迎合多种场景需求</p>
								</div>
							</li>
							<li>
								<div class="item" data-aos="flip-left"> <img src="img/ico/hours.png" />
									<p class="ft-blue">24小时服务</p>
									<p>专业提供24小时</p>
									<p class="mt-20">智能打印服务</p>
								</div>
							</li>
							<li>
								<div class="item" data-aos="flip-left"> <img src="img/ico/water.png" />
									<p class="ft-blue" style="margin-top:25px">打印店铺众多</p>
									<p>遍布四周，方便查找</p>
									<p class="mt-20">随时随地，快速打印</p>
								</div>
							</li>
							<li>
								<div class="item" data-aos="flip-left"> <img src="img/ico/hands.png" />
									<p class="ft-blue">操作简单</p>
									<p>操作简单，功能实用</p>
									<p class="mt-20">界面友好，无需指导</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			
			<div class="scene details"> <img src="img/num/02.png" class="number" />
				<p class="ft-fix">精细化打印服务</p>
				<div class="floor">
					<p>「云打印平台」目前支持多种格式打印</p>
					<p class="ft-block">包括doc、docx、ppt、pptx、xls、xlsx、pdf、jpg、jpge、png。</p>
				</div>
				<div class="space">
					<div class="container">
						<ul>
							<li class="entry-one">
								<div class="aos-item" data-aos="fade-up"> 
									<article class="mk-color-item color1">
										<div class="item-logo">
											<i class="fa fa-file-word-o" aria-hidden="true"></i>
										</div>
										<h3>Word</h3>
										<p></p>
										<h5>Word格式的文件</h5>
										<p></p>
										<i class="light"></i>
									</article>
								</div>
							</li>
							<li>
								<div class="aos-item" data-aos="fade-down">
									<article class="mk-color-item color2">
										<div class="item-logo">
											<i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>
										</div>
										<h3>PPT</h3>
										<p></p>
										<h5>PPT格式的文件</h5>
										<p></p>
										<i class="light"></i>
									</article>
								</div>
							</li>
							<li>	
								<div class="aos-item" data-aos="fade-up">
									<article class="mk-color-item color4">
										<div class="item-logo">
											<i class="fa fa-file-excel-o" aria-hidden="true"></i>
										</div>
										<h3>Excel</h3>
										<p></p>
										<h5>Excel格式的文件</h5>
										<p></p>
										<i class="light"></i>
									</article>
								</div>
							</li>
							<li class="entry-one">
								<div class="aos-item" data-aos="fade-down">
									<article class="mk-color-item color5">
										<div class="item-logo">
											<i class="fa fa-file-pdf-o" aria-hidden="true"></i>
										</div>
										<h3>PDF</h3>
										<p></p>
										<h5>PDF格式的文件</h5>
										<p></p>
										<i class="light"></i>
									</article>
								</div>
							</li>
							<li>
								<div class="aos-item" data-aos="fade-up"> 
									<article class="mk-color-item color3">
										<div class="item-logo">
											<i class="fa fa-file-image-o" aria-hidden="true"></i>
										</div>
										<h3>Picture</h3>
										<p></p>
										<h5>图片文件</h5>
										<p></p>
										<i class="light"></i>
									</article>
								</div>
							</li>
							<li>
								<div class="aos-item" data-aos="fade-down">
									<article class="mk-color-item color6">
										<div class="item-logo">
											<i class="fa fa-circle-thin" aria-hidden="true"></i>
										</div>
										<h3>更多格式</h3>
										<p></p>
										<h5>等待添加</h5>
										<p></p>
										<i class="light"></i>
									</article>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="partner details"> <img src="img/num/03.png" class="number" />
				<p class="ft-fix">我们每时每刻都在变</p>
				<div class="space">
					<div class="container">
						<div class="news-img">
							<div class="swiper-container swiper-container2">
								<div class="swiper-wrapper">
									<div class="swiper-slide loop-bg-2"> <img class="c1" /> </div>
									<div class="swiper-slide loop-bg-1"> <img class="c2" /> </div>
									<div class="swiper-slide loop-bg-5"> <img class="c3" /> </div>
									<div class="swiper-slide loop-bg-3"> <img src="img/logo/b3.png" class="c4" /> </div>
								</div>
								<div class="swiper-pagination swiper-p2"></div>
							</div>
						</div>
						<div class="new-data">
							<div class="new-data-title">新闻大事件</div>
							<ul id="news">
								<li>
									<a href="#">
										<div class="news-left"> · </div>
										<div class="news-right">
											<div class="tl" id="newsOne">2018-5-1  </div>
											<div class="tl" id="newsOneCon">入驻电子科技大学中山学院 </div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<div class="news-left"> · </div>
										<div class="news-right">
											<div class="tl" id="newsTwo">2018-4-1 </div>
											<div class="tl" id="newsTwoCon">云打印平台通过审核 </div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<div class="news-left"> · </div>
										<div class="news-right">
											<div class="tl" id="newsThree">2018-3-20 </div>
											<div class="tl" id="newsThreeCon">云打印平台正式完工 </div>
										</div>
									</a>
								</li>
								<li>
									<a href="#">
										<div class="news-left"> · </div>
										<div class="news-right">
											<div class="tl" id="newsFour">2018-1-28 </div>
											<div class="tl" id="newsFourCon">云打印平台正式开始编写 </div>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="partner details"> <img src="img/num/04.png" class="number" />
				<p class="ft-fix">未来梦想</p>
				<div class="floor dream-content">
					<p>「PrintSky - 云打印平台」希望联合无数的中小企业与个体，利用互联网+的思维打造一个全新的互联网</p>
					<p class="ft-block">打印服务平台，让「PrintSky - 云打印平台」遍布每一座城市和每一个有需求的角落，成就每一笔小而美的生意。</p>
					
				</div>
			</div>
		</div>
		<div class="bot"> <img src="img/by.png" class="mt-30" />
			<div class="data">
				<ul>
					<li><img src="img/floor/company.png"/> <span>&nbsp;PrintSky-云打印平台</span> </li>
					<li class="bot-two"> <img src="img/floor/address.png" /> <span>&nbsp;电子科技大学中山学院18栋622</span> </li>
					<li class="bot-three"> <img src="img/floor/phone.png" /> <span>&nbsp;136-8021-1019</span> </li>
					<li class="bot-four"> <img src="img/floor/email.png">
						<a href="mailto:wingskymail@163.com"><span>&nbsp;wingskymail@163.com</span></a>
					</li>
					<li class="bot-five"> <img src="img/floor/earth.png" /> <span>&nbsp;print.wingsky.net</span> </li>
					<li class="bot-six"> <img src="img/floor/github.png" /> <a href="https://github.com/gitwingsky"><span>&nbsp;GitWingSky</span></a> </li>
					<li class="bot-seven"> <img src="img/floor/qq.png" /> <span>&nbsp;664347225</span> </li>
				</ul>
			</div>
			<div class="line"> </div>
			<p class="mt-30">© 2017-2018 WingSky 版权所有</p>
			
		</div>
		<script type="text/javascript" src="js/vendors.js"></script>
		<script type="text/javascript" src="js/index.js?v=0205"></script>
	</body>


</html>