package net.wingsky.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.wingsky.domain.Message;
import net.wingsky.domain.Orders;
import net.wingsky.domain.Shop;
import net.wingsky.domain.User;
import net.wingsky.service.MessageService;
import net.wingsky.service.OrderService;
import net.wingsky.service.ShopService;
import net.wingsky.service.UserService;
import net.wingsky.util.PrivateCodeUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class HomeController {

	/**
	 * 自动注入orderService
	 */
	@Autowired
	@Qualifier("orderService")
	private OrderService orderService;
	
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
	 * 自动注入messageService
	 */
	@Autowired
	@Qualifier("messageService")
	private MessageService messageService;
	
	/**
	 * 处理/home请求
	 * */
	@RequestMapping(value="/home")
	public String shop(Model model, HttpServletRequest request){
		
		User user = null;
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		List<Orders> ordersList = orderService.getByUserId(userId);
		user = userService.getById(userId);
		model.addAttribute("uuser", user);
		model.addAttribute("ordersList",ordersList);
		return "home";
	}
	
	/**
	 * 
	 * @Title: upload
	 * @Description: 处理/home请求，主要用于修改个人资料
	 * @param request
	 * @param userName
	 * @param userPhone
	 * @param userAddress
	 * @param file
	 * @return
	 * @throws Exception 设定文件
	 * @return String 返回类型
	 * @throws
	 */
	@RequestMapping(value="/changeData",method=RequestMethod.POST)
	public String upload(HttpServletRequest request,
				@RequestParam("userName") String userName,
				@RequestParam("userPhone") String userPhone,
				@RequestParam("userAddress") String userAddress,
				@RequestParam("file1") MultipartFile file) throws Exception{

	 	HttpSession session = request.getSession();   
	 	String userId = session.getAttribute("userId").toString();
	 	User user = null;
	 	user = userService.getById(Integer.parseInt(userId));
	 	user.setUserName(userName);
	 	user.setUserPhone(userPhone);
	 	user.setUserAddress(userAddress);
	 	
	    // 如果文件不为空，写入上传路径
		if(!file.isEmpty()){
			// 上传文件路径
			String path = request.getServletContext().getRealPath(
	                "/resource/user/");
			// 上传文件名
			String filename = file.getOriginalFilename();
			String realname = filename.substring(filename.indexOf("."));
		    File filepath = new File(path,filename);
			// 判断路径是否存在，如果不存在就创建一个
	        if (!filepath.getParentFile().exists()) { 
	        	filepath.getParentFile().mkdirs();
	        }
	        // 将上传文件保存到一个目标文件当中
	        user.setUserPictureUrl("resource/user/" + userId + realname);
			file.transferTo(new File(path+File.separator + userId + realname));
		}
		userService.update(user);
		return "redirect:home";
	}
	
	/**
	 * 
	 * @Title: changePassword
	 * @Description: 修改密码
	 * @param userPassword
	 * @param emailCode
	 * @param model
	 * @param request
	 * @param response
	 * @throws IOException 设定文件
	 * @return void 返回类型
	 * @throws
	 */
	@RequestMapping(value="/changePassword")
	public void changePassword(String userPassword, String emailCode,  Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
		
		User user = null;
		HttpSession session = request.getSession();
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		String code = session.getAttribute("emailCode").toString();
		user = userService.getById(userId);
		user.setUserPassword(PrivateCodeUtil.encode(userPassword));
		PrintWriter out = response.getWriter();
		if(code.equals(emailCode)){
			userService.update(user);
			String html ="<div class='animate-container'><span class='sa-line sa-tip animateSuccessTip'></span><span class='sa-line sa-long animateSuccessLong'></span><div class='animate-before'><div class='circle'></div></div></div>";
			out.print(html);
		}else{
			String html="<div class='animate-container-fail'><span class='sa-line sa-tip animateFailTip'></span><span class='sa-line sa-long animateFailLong'></span><div class='animate-before'><div class='circle'></div></div></div>";
			out.print(html);
		}
	}
	
	/**
	 * 
	 * @Title: confirm
	 * @Description: 确认订单
	 * @param orderId
	 * @param message
	 * @param response
	 * @throws IOException 设定文件
	 * @return void 返回类型
	 * @throws
	 */
	@RequestMapping(value="/confirm")
	public void confirm(String orderId, String message, String star, HttpServletResponse response){
		Orders order = null;
		order = orderService.getById(Integer.parseInt(orderId));
		Message messages = new Message();
		messages.setUser(order.getUser());
		messages.setShop(order.getShop());
		messages.setMessage(message);
		messages.setStar(Integer.parseInt(star));
		messages.setReply(null);
		messages.setReplyMessage("");
		Date submitTime = new Date();	
		messages.setSubmitTime(submitTime);;
		messageService.add(messages);
		order.setState("已完成");
		orderService.update(order);
		Shop shop = shopService.getById(order.getShop().getShopId());
		User user = userService.getById(shop.getUser().getUserId());
		//System.out.println(user);
		double money = user.getUserMoney();
		//System.out.println(money);
		money += order.getMoney();
		//System.out.println(money);
		user.setUserMoney(money);
		userService.update(user);
	}
	
}
