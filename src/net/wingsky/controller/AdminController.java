package net.wingsky.controller;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;

import net.wingsky.domain.Apply;
import net.wingsky.domain.Message;
import net.wingsky.domain.Orders;
import net.wingsky.domain.Shop;
import net.wingsky.domain.ShopStar;
import net.wingsky.domain.User;
import net.wingsky.service.ApplyService;
import net.wingsky.service.MessageService;
import net.wingsky.service.OrderService;
import net.wingsky.service.ShopService;
import net.wingsky.service.UserService;
import net.wingsky.util.DrawStringPicUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {

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
	 * 自动注入applyService
	 */
	@Autowired
	@Qualifier("applyService")
	private ApplyService applyService;
	
	/**
	 * 自动注入userService
	 */
	@Autowired
	@Qualifier("userService")
	private UserService userService;
	
	
	@RequestMapping(value="/shop-list")
	public String shopList(Model model){
		List<Shop> shopList = shopService.getAll();
		
		List<ShopStar> shopStarrList = new ArrayList<ShopStar>();
		for (Shop shop : shopList) {
			ShopStar shopStar = new ShopStar();
			shopStar.setShop(shop);
			List<Message> allMessageList = messageService.getMessageByMany(0, 0, shop.getShopId());
			List<Message> badMessageList = messageService.getMessageByMany(3, 0, shop.getShopId());
			double tmp = badMessageList.size() * 1.0 / allMessageList.size();
			int star = (int) Math.round(tmp * 100);
			shopStar.setStar(star);
			shopStarrList.add(shopStar);
			List<Orders> orderList = orderService.getByShopId(3, shop.getShopId());
			shopStar.setNum(orderList.size());
		}
		model.addAttribute("shopStarrList", shopStarrList);
		return "shop-list";
	}
	
	@RequestMapping(value="/apply-list")
	public String apply(Model model){
		List<Apply> applyList = applyService.get();
		model.addAttribute("applyList", applyList);
		return "apply-list";
	}
	
	@RequestMapping(value="/freezeShop")
	public void freezeShop(int shopId){
		Shop shop = null;
		shop = shopService.getById(shopId);
		if(shop.getShopState().equals("3")){
			shop.setShopState("2");
		}else{
			shop.setShopState("3");
		}
		shopService.update(shop);
	}
	
	@RequestMapping(value="/comfirmApply")
	public void comfirmApply(HttpServletRequest request, int applyId) throws Exception{
		Apply apply = applyService.getById(applyId);
		apply.setState("2");
		User user = userService.getById(apply.getUser().getUserId());
		user.setUserType("2");
		userService.update(user);
		Shop shop = new Shop();
		shop.setShopName(apply.getShopName());
		shop.setUser(apply.getUser());
		shop.setShopIntroduction("");
		shop.setShopPictureUrl("");
		shop.setShopAddress("");
		shop.setShopPhone(apply.getShopPhone());
		shop.setShopEmail(apply.getUser().getUserEmail());
		shop.setShopOneGray(0);
		shop.setShopTwoGray(0);
		shop.setShopOneRBG(0);
		shop.setShopTwoRBG(0);
		shop.setShopState("2");
		shopService.add(shop);
		
		Shop shopTmp = shopService.getByUserId(apply.getUser().getUserId());
		
		
		
		String name = apply.getShopName();
    	int width = name.length() * 100;
    	int height = width / 2;
    	
        BufferedImage imgMap = DrawStringPicUtil.drawStringPic(width, height, 105, Color.white, name);
        BufferedImage imgMap1 = DrawStringPicUtil.drawStringPic(width, height, 105, Color.black, name);
        
        String path = request.getServletContext().getRealPath("/resource/shop/");
        
        File imgFile = new File(path + File.separator + "t" + shopTmp.getShopId() + ".png");
        File imgFile1 = new File(path + File.separator + shopTmp.getShopId() + ".png");
        ImageIO.write(imgMap, "PNG", imgFile);
        ImageIO.write(imgMap1, "PNG", imgFile1);
        
        shopTmp.setShopPictureUrl("resource/shop/" + shopTmp.getShopId() + ".png");
        shopService.update(shopTmp);
       
		
		applyService.update(apply);
	}
}
