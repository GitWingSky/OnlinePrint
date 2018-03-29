package net.wingsky.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import net.wingsky.domain.User;
import net.wingsky.service.UserService;
import net.wingsky.util.EmailUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EmailController {

	/**
	 * 自动注入userService
	 */
	@Autowired
	@Qualifier("userService")
	private UserService userService;
	
	/**
	 * 
	 * @Title: sendEmail
	 * @Description: 处理/sendEmail，主要发送邮件
	 * @param toUser
	 * @param request 设定文件
	 * @return void 返回类型
	 * @throws
	 */
	@RequestMapping(value="/sendEmail")
	public void sendEmail(String toUser,HttpServletRequest request){
		String userName = null;
		EmailUtil emailutil = new EmailUtil();
		User user = null;
		HttpSession session = request.getSession();   
		user = userService.getByUserUsername(toUser);
		if(user != null){
			userName = user.getUserName();
		}
		String emailCode = getRandNum(100000,999999);
		
		StringBuffer theMessage = new StringBuffer();
		theMessage = htmlStyle(userName, emailCode);
		
		emailutil.sendEmail(toUser, "验证码", theMessage.toString());
		session.setAttribute("emailCode", emailCode);
	}
	
	public static String getRandNum(int min, int max) {
	    int randNum = min + (int)(Math.random() * ((max - min) + 1));
	    return String.valueOf(randNum);
	}
	
	public static StringBuffer htmlStyle(String user, String emailCode){
		StringBuffer theMessage = new StringBuffer();
		theMessage.append("<div style='background: #f8f8f8; color: #666; font-size: 12px;font-family:Century Gothic,Trebuchet MS,Hiragino Sans GB,微软雅黑,Microsoft Yahei,Tahoma,Helvetica,Arial,SimSun,sans-serif;'>");
		theMessage.append("<div style='width: 570px; margin: 0 auto; background: #fff; padding: 25px 70px; border: 10px solid #eee;'>");
		theMessage.append("<div style='text-align: center; margin-bottom: 40px; line-height: 1.8em;'><h1 style='color: #333;text-align:center;'>云打印平台</h1><p><i>你最忠实得打印平台</i></p></div>");
		theMessage.append("<p style='font-size: 18px; color: #333;'>(-ω-)尊敬的"+ user +"大人, 您好!</p>");
		theMessage.append("<p style='border: 1px solid #eee; padding: 20px; margin: 15px 0;'> 验证码为：<span style='border-bottom: 1px dashed rgb(204, 204, 204);color: #66c0f4;font-size: 18px;'>" + emailCode + "</span> </p>");
		theMessage.append("<div style='height: 118px; text-align: center; color: #999; border-top: 1px solid #ddd; padding-top: 15px;'>");
		theMessage.append("<div style='float: left; height: 115px; width: 279px; border-right: 1px solid #ddd;'><p style='margin: 0 0 18px; line-height: 14px;'>关于作者</p><p style='margin: 0 auto; width: 200px; text-align: left;'>千里之行，始于足下。</p></div>");
		theMessage.append("<div style='float: left; width: 280px;'><p style='margin: 0 0 18px; line-height: 14px;'>关于本站</p><p style='margin: 0 auto; text-align: left; width: 200px;'>苍山负雪，浮生尽歇。</p></div>");
		theMessage.append("</div>");
		theMessage.append("<p style='text-align: center;color: #bbb;margin-top: 40px;'>「WingSky」 © 2018 Copyright.</p>");
		theMessage.append("</div>");
		theMessage.append("</div>");
		
		return theMessage;
	}
	
}
