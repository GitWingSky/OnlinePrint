<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8">
    <title>店铺管理</title>
    
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./css/font.css">
	<link rel="stylesheet" href="./css/xadmin.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="./lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="./js/xadmin.js"></script>

  </head>
	<body>
	    <!-- 顶部开始 -->
	    <div class="container">
	        <div class="logo"><a href="./index.html">官方打印店</a></div>
	        <div class="left_open">
	            <i title="展开左侧栏" class="iconfont">&#xe699;</i>
	        </div>
	        
	        <ul class="layui-nav right" lay-filter="">
	          <li class="layui-nav-item">
	            <a href="javascript:;"><i class="iconfont">&#xe699;</i></a>
	            <dl class="layui-nav-child"> <!-- 二级菜单 -->
	              <dd><a href="home"><i class="iconfont">&#xe6b8;</i>个人主页</a></dd>
	              <dd><a href="shop"><i class="layui-icon">&#xe698;</i>商城</a></dd>
	              <dd><a href="exit"><i class="layui-icon">&#xe65c;</i>退出</a></dd>
	            </dl>
	          </li>
	          <li class="layui-nav-item to-index"><a href="index"><i class="layui-icon">&#xe68e;</i>首页</a></li>
	        </ul>
	        
	    </div>
	    <!-- 顶部结束 -->
	    <!-- 中部开始 -->
	     <!-- 左侧菜单开始 -->
	    <div class="left-nav">
	      <div id="side-nav">
	        <ul id="nav">
	            <li>
	                <a href="javascript:;">
	                    <i class="iconfont">&#xe723;</i>
	                    <cite>订单管理</cite>
	                    <i class="iconfont nav_right">&#xe697;</i>
	                </a>
	                <ul class="sub-menu">
	                    <li>
	                        <a _href="order-list">
	                            <i class="iconfont">&#xe6a7;</i>
	                            <cite>未处理订单</cite>
	                        </a>
	                    </li >
	                    <li>
	                        <a _href="order-list1">
	                            <i class="iconfont">&#xe6a7;</i>
	                            <cite>已处理订单</cite>
	                        </a>
	                    </li >
	                    <li>
	                        <a _href="order-list2">
	                            <i class="iconfont">&#xe6a7;</i>
	                            <cite>已完成订单</cite>
	                        </a>
	                    </li >
	                </ul>
	            </li>
	            <li>
	                <a href="javascript:;">
	                    <i class="iconfont">&#59035;</i>
	                    <cite>评论管理</cite>
	                    <i class="iconfont nav_right">&#xe697;</i>
	                </a>
	                <ul class="sub-menu">
	                    <li>
	                        <a _href="message-list">
	                            <i class="iconfont">&#xe6a7;</i>
	                            <cite>评论列表</cite>
	                        </a>
	                    </li >
	                </ul>
	            </li>
	        </ul>
	      </div>
	    </div>
	    <!-- <div class="x-slide_left"></div> -->
	    <!-- 左侧菜单结束 -->
	    <!-- 右侧主体开始 -->
	    <div class="page-content">
	        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
	          <ul class="layui-tab-title">
	            <li>我的桌面</li>
	          </ul>
	          <div class="layui-tab-content">
	            <div class="layui-tab-item layui-show">
	                <iframe src='./welcome' frameborder="0" scrolling="yes" class="x-iframe"></iframe>
	            </div>
	          </div>
	        </div>
	    </div>
	    <div class="page-content-bg"></div>
	    <!-- 右侧主体结束 -->
	    <!-- 中部结束 -->
	    <!-- 底部开始 -->
	    <div class="footer">
	        <div class="copyright">Copyright © 2017-2018 WingSky All Rights Reserved</div>  
	    </div>
	    <!-- 底部结束 -->
	    
	</body>
</html>