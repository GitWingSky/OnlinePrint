package net.wingsky.controller;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.wingsky.domain.User;
import net.wingsky.service.UserService;




import net.wingsky.util.PrivateCodeUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;


@Controller
public class UserController {

	/**
	 * 自动注入userService
	 */
	@Autowired
	@Qualifier("userService")
	private UserService userService;
	
	/**
	 * 处理/login请求
	 * */
	@RequestMapping(value="/login")
	public ModelAndView login(
			 String userUsername,String userPassword,
			 ModelAndView mv,
			 HttpSession session){
		// 根据登录名和密码查找用户，判断用户登录
		User user = null;
		user = userService.getByUserUsername(userUsername);
		if(user != null){
			if(PrivateCodeUtil.decode(userPassword, user.getUserPassword())){
				// 登录成功，将user对象设置到HttpSession作用范围域
				session.setAttribute("user", user);
				session.setAttribute("userId", user.getUserId());
				//System.out.println(user.getUserType());
				if(user.getUserType().equals("2")){
					// 转发到index请求
					mv.setView(new RedirectView("shopAdmin"));
				}else{
					// 转发到index请求
					mv.setView(new RedirectView("home"));
				}
				
			}else{
				// 登录失败，设置失败提示信息，并跳转到登录页面
				mv.addObject("message1", "密码错误，请重新输入!");
				mv.setViewName("loginForm");
			}
			
		}else{
			// 登录失败，设置失败提示信息，并跳转到登录页面
			mv.addObject("message1", "登录名错误，请重新输入!");
			mv.setViewName("loginForm");
		}
		return mv;
	}
	
	/**
	 * 处理/register请求
	 * */
	@RequestMapping(value="/register")
	public ModelAndView register(
			String reUserUsername,
			String reUserPassword,
			String emailCode,
			ModelAndView mv,
			 HttpServletRequest request){
		
		HttpSession session = request.getSession();
		String code = session.getAttribute("emailCode").toString();
		if(code.equals(emailCode)){
			// 登录成功，将user对象设置到HttpSession作用范围域
			User user = userService.register(reUserUsername, reUserPassword);
			System.out.println(user);
			session.setAttribute("user", user);
			session.setAttribute("userId", user.getUserId());
			// 转发到home请求
			mv.setView(new RedirectView("home"));
		}else{
			mv.addObject("message2", "验证码错误!");
			mv.setViewName("loginForm");
		}
		return mv;
	}
	
	@RequestMapping(value="/exit")
	public String exit(HttpServletRequest request){
		request.getSession().invalidate();
		return "redirect:loginForm";
	}
	
	@RequestMapping(value="/checkUser")
	public void checkUser(String userUsername, HttpServletResponse response) throws IOException{
		PrintWriter out = response.getWriter();
		
		if(!userService.checkUser(userUsername)){
			out.print("success");
		}else{
			out.print("该邮箱已经被注册");	
		}
	}
	
}
