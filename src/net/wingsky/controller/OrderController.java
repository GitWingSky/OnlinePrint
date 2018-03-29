package net.wingsky.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.wingsky.domain.Orders;
import net.wingsky.domain.Shop;
import net.wingsky.domain.User;
import net.wingsky.service.OrderService;
import net.wingsky.service.ShopService;
import net.wingsky.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OrderController {

	/**
	 * 自动注入userService
	 */
	@Autowired
	@Qualifier("userService")
	private UserService userService;
	
	/**
	 * 自动注入shopService
	 */
	@Autowired
	@Qualifier("shopService")
	private ShopService shopService;
	
	/**
	 * 自动注入orderService
	 */
	@Autowired
	@Qualifier("orderService")
	private OrderService orderService;
	
	
	@RequestMapping(value="/order")
	public void order(String shopId, String page,String fileName,String pdfPath,String userAddress, String printType,String num,
			Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
		User user = null;
		HttpSession session = request.getSession();
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		user = userService.getById(userId);
		Shop shop = shopService.getById(Integer.parseInt(shopId));
		String realname = fileName.substring(fileName.indexOf("."));
		String fileType = "5";
		if(realname.equals(".doc") || realname.equals(".docx")){
			fileType = "1";
		}else if(realname.equals(".ppt") || realname.equals(".pptx")){
			fileType = "2";
		}else if(realname.equals(".xls") || realname.equals(".xlsx")){
			fileType = "3";
		}else if(realname.equals(".pdf")){
			fileType = "4";
		}
		String type = printType.substring(printType.length() - 1);
		double money;
		if(type.equals("1")){
			money = shop.getShopOneGray();
		}else if(type.equals("2")){
			money = shop.getShopTwoGray();
		}else if(type.equals("3")){
			money = shop.getShopOneRBG();
		}else{
			money = shop.getShopTwoRBG();
		}
		PrintWriter out = response.getWriter();
		int pages = Integer.parseInt(page);
		if(money * pages <= user.getUserMoney()){
			Orders order = new Orders();
			order.setUser(user);
			order.setPage(Integer.parseInt(page));
			order.setShop(shop);
			order.setFileType(fileType);	
			order.setFileName(fileName);
			order.setPrintType(type);
			order.setUserAddress(userAddress);
			order.setPdfPath(pdfPath);
			Date date = new Date();	
			order.setSubmitTime(date);
			order.setState("未发货");
			order.setNum(Integer.parseInt(num));
			double allMoney = money * pages * Integer.parseInt(num) * 1.0;
			order.setMoney(allMoney);
			orderService.add(order);
			user.setUserMoney(user.getUserMoney() - allMoney);
			userService.update(user);
			String html ="<div class='animate-container'><span class='sa-line sa-tip animateSuccessTip'></span><span class='sa-line sa-long animateSuccessLong'></span><div class='animate-before'><div class='circle'></div></div></div>";
			order = orderService.getByPath(pdfPath);
			out.print(order.getOrderId() + "@" + html);
		}else{
			String html="<div class='animate-container-fail'><span class='sa-line sa-tip animateFailTip'></span><span class='sa-line sa-long animateFailLong'></span><div class='animate-before'><div class='circle'></div></div></div>";
			out.print(html);
		}
	}
}
