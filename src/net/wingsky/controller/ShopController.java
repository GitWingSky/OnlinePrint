package net.wingsky.controller;


import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
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
import net.wingsky.util.PictureUtil;
import net.wingsky.util.TimeAssistUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class ShopController {

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
	 * 自动注入orderService
	 */
	@Autowired
	@Qualifier("orderService")
	private OrderService orderService;
	
	/**
	 * 
	 * @Title: shop
	 * @Description: 商店选择页面和商店个体页面
	 * @param shopId
	 * @param model
	 * @param request
	 * @return 设定文件
	 * @return String 返回类型
	 * @throws
	 */
	@RequestMapping(value="/shop")
	public String shop(String shopId, Model model, HttpServletRequest request){
	
		User user = null;
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		user = userService.getById(userId);
		model.addAttribute("uuser", user);
		
		//System.out.println(shopId);
		if(shopId == null){
			List<Shop> shopList = shopService.get();
			model.addAttribute("shopList", shopList);
			//System.out.println(shopList);
			return "shop";
		}else{

			Shop shop = shopService.getById(Integer.parseInt(shopId));
			model.addAttribute("shop", shop);
			List<Message> messageList = messageService.getByShopId(Integer.parseInt(shopId));
			model.addAttribute("messageList", messageList);
			List<Message> Outstanding = messageService.getOutstandingByStar(Integer.parseInt(shopId));
			List<Message> Good = messageService.getGoodByStar(Integer.parseInt(shopId));
			List<Message> Bad = messageService.getBadByStar(Integer.parseInt(shopId));
			model.addAttribute("Outstanding", Outstanding.size());
			model.addAttribute("Good", Good.size());
			model.addAttribute("Bad", Bad.size());
			//System.out.println(Outstanding + " " + Good + " " + Bad);
			return "shopIndex";
		}
		
	}
	
	@RequestMapping(value="/changeStar")
	public void changeStar(String shopId, String star, HttpServletResponse response) throws IOException {
		List<Message> messageList = null;
		String html = "";
		if(star.equals("1")){
			messageList = messageService.getByShopId(Integer.parseInt(shopId));
			
		}else if(star.equals("2")){
			messageList = messageService.getOutstandingByStar(Integer.parseInt(shopId));
		}else if(star.equals("3")){
			messageList = messageService.getGoodByStar(Integer.parseInt(shopId));
		}else{
			messageList = messageService.getBadByStar(Integer.parseInt(shopId));
		}
		for(Message message : messageList){
			html += "<li class='media'><div class='media-left'><img class='media-object img-circle messageImg' src='" + message.getUser().getUserPictureUrl() + "'></div>";
			html += "<div class='media-body'><h4 class='media-heading'><a class='star' href='#'>" + message.getUser().getUserName() + "</a>";
			for(int i = 1; i <= message.getStar(); i++){
				html += "<i class='fa fa-star yellow' aria-hidden='true'></i>";
			}
			for(int i = message.getStar(); i < 5; i++){
				html += "<i class='fa fa-star gray' aria-hidden='true'></i>";
			}
			html += "</h4><p>" + message.getMessage() + "</p>";
			html += "<span class='date' title='2018/03/12 21:57'>" + TimeAssistUtil.getStringByDateTime(message.getSubmitTime()) + "</span><hr/>";
			if(message.getReply()!=null){
				html += "<ul class='media-list'><li class='media'><div class='media-left'><img class='media-object img-circle messageImg' src='" + message.getReply().getUserPictureUrl() + "'>";
				html += "</div><div class='media-body'><h4 class='media-heading' style='color: #aaa;'>[掌柜回复]</h4><p class='text-danger'>" + message.getReplyMessage() + "</p></div></li><hr/></ul>";
			}
			html += "</div></li>";
		}
		
		PrintWriter out = response.getWriter();
		out.print(html);
	}
	
	@RequestMapping(value="/shop-edit")
	public String shopEdit(Model model, HttpServletRequest request){
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = null;
		shop = shopService.getByUserId(userId);
		model.addAttribute("shop", shop);
		return "shop-edit";
	}
	
	@RequestMapping(value="/welcome")
	public String welcome(Model model, HttpServletRequest request){

			HttpSession session = request.getSession();   
			int userId = Integer.parseInt(session.getAttribute("userId").toString());
			Shop shop = null;
			shop = shopService.getByUserId(userId);
			int[] num = orderService.getNum(shop.getShopId());
			double[] money = orderService.getMoney(shop.getShopId());
			int[] outstandingNum = messageService.getOutstandingNum(shop.getShopId());
			int[] goodNum = messageService.getGoodNum(shop.getShopId());
			int[] badNum = messageService.getBadNum(shop.getShopId());
			model.addAttribute("shop", shop);
			model.addAttribute("num", num);
			model.addAttribute("money", money);
			model.addAttribute("outstandingNum", outstandingNum);
			model.addAttribute("goodNum", goodNum);
			model.addAttribute("badNum", badNum);
			return "welcome";
	}
	
	@RequestMapping(value="/changeShopState")
	public void changeShopState(String shopId){
		Shop shop = null;
		shop = shopService.getById(Integer.parseInt(shopId));
		if(shop.getShopState().equals("1")){
			shop.setShopState("2");
		}else{
			shop.setShopState("1");
		}
		shopService.update(shop);
	}
	
	@RequestMapping(value="/order-list")
	public String orderList(Model model, HttpServletRequest request){
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = null;
		shop = shopService.getByUserId(userId);
		List<Orders> ordersList = orderService.getByShopId(1, shop.getShopId());
		model.addAttribute("shopId", shop.getShopId());
		model.addAttribute("ordersList", ordersList);
		return "order-list";
	}
	
	@RequestMapping(value="/order-list1")
	public String orderList1(Model model, HttpServletRequest request){
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = null;
		shop = shopService.getByUserId(userId);
		List<Orders> ordersList = orderService.getByShopId(2, shop.getShopId());
		model.addAttribute("ordersList", ordersList);
		return "order-list";
	}
	
	@RequestMapping(value="/order-list2")
	public String orderList2(Model model, HttpServletRequest request){
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = null;
		shop = shopService.getByUserId(userId);
		List<Orders> ordersList = orderService.getByShopId(3, shop.getShopId());
		model.addAttribute("ordersList", ordersList);
		return "order-list";
	}
	
	@RequestMapping(value="/message-list")
	public String messageList(Model model, HttpServletRequest request){
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = null;
		shop = shopService.getByUserId(userId);
		List<Message> messageList = messageService.getByShopId(shop.getShopId());
		model.addAttribute("messageList", messageList);
		return "message-list";
	}
	
	@RequestMapping(value="/getMessageByMany")
	public String getMessageByMany(String assess, String all,Model model, HttpServletRequest request){
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = null;
		shop = shopService.getByUserId(userId);
		List<Message> messageList = messageService.getMessageByMany(Integer.parseInt(assess), Integer.parseInt(all), shop.getShopId());
		model.addAttribute("messageList", messageList);
		return "message-list";
	}
	
	@RequestMapping(value="/comfirmOrder")
	public void comfirmOrder(int orderId){
		Orders order = orderService.getById(orderId);
		order.setState("已发货");
		orderService.update(order);
	}
	
	@RequestMapping(value="/sendReply")
	public void sendReply(int messageId, String replyMessage, HttpServletRequest request){
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		User user = null;
		user = userService.getById(userId);
		Message message = null;
		message = messageService.getById(messageId);
		message.setReply(user);
		message.setReplyMessage(replyMessage);
		messageService.update(message);
	}
	
	@RequestMapping(value="/changeShopData",method=RequestMethod.POST)
	public void upload(HttpServletRequest request,
				@RequestParam("shopName") String shopName,
				@RequestParam("phone") String phone,
				@RequestParam("address") String address,
				@RequestParam("introduction") String introduction,
				@RequestParam("grayOne") double grayOne,
				@RequestParam("grayTwo") double grayTwo,
				@RequestParam("RBGOne") double RBGOne,
				@RequestParam("RBGTwo") double RBGTwo,
				@RequestParam("file1") MultipartFile file) throws Exception{
		
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = null;
		shop = shopService.getByUserId(userId);
		shop.setShopName(shopName);
		shop.setShopPhone(phone);
		shop.setShopAddress(address);
		shop.setShopIntroduction(introduction);
		shop.setShopOneGray(grayOne);
		shop.setShopTwoGray(grayTwo);
		shop.setShopOneRBG(RBGOne);
		shop.setShopTwoRBG(RBGTwo);
	 	
	    // 如果文件不为空，写入上传路径
		if(!file.isEmpty()){
			// 上传文件路径
			String path = request.getServletContext().getRealPath(
	                "/resource/shop/");
			// 上传文件名
			String filename = file.getOriginalFilename();
			String realname = filename.substring(filename.indexOf("."));
		    File filepath = new File(path,filename);
			// 判断路径是否存在，如果不存在就创建一个
	        if (!filepath.getParentFile().exists()) { 
	        	filepath.getParentFile().mkdirs();
	        }
	        // 将上传文件保存到一个目标文件当中
	        shop.setShopPictureUrl("resource/shop/" + shop.getShopId() + realname);
			file.transferTo(new File(path+File.separator + shop.getShopId() + realname));
			PictureUtil.ChangeSize(path+File.separator + shop.getShopId() + realname);
		}
		shopService.update(shop);
	}
	
	@RequestMapping(value="/checkShopInfo")
	public void checkShopInfo(HttpServletRequest request, HttpServletResponse response) throws IOException {
		HttpSession session = request.getSession();
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = shopService.getByUserId(userId);
		PrintWriter out = response.getWriter();
		if(shop.getShopIntroduction().equals("") || shop.getShopAddress().equals("")
				|| shop.getShopOneGray() == 0 || shop.getShopOneRBG() == 0 
				|| shop.getShopTwoGray() ==0 || shop.getShopTwoRBG() == 0){
			out.print("fail");
			
		}else{
			out.print("success");
		}
	}
	
	@RequestMapping(value="/shopAdmin")
	public String shopAdmin(Model model, HttpServletRequest request){
		HttpSession session = request.getSession();   
		int userId = Integer.parseInt(session.getAttribute("userId").toString());
		Shop shop = null;
		shop = shopService.getByUserId(userId);
		model.addAttribute("shopName", shop.getShopName());
		return "shopAdmin";
	}
	
}
