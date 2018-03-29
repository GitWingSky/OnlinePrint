package net.wingsky.controller;

import java.io.File;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.wingsky.domain.Apply;
import net.wingsky.domain.Shop;
import net.wingsky.domain.User;
import net.wingsky.service.ApplyService;
import net.wingsky.service.ShopService;
import net.wingsky.service.UserService;
import net.wingsky.util.GetPdfpage;
import net.wingsky.util.WpsToPdfUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class FileUploadController {
	
	/**
	 * 自动注入shopService
	 */
	@Autowired
	@Qualifier("shopService")
	private ShopService shopService;
	
	/**
	 * 自动注入userService
	 */
	@Autowired
	@Qualifier("userService")
	private UserService userService;
	
	/**
	 * 自动注入applyService
	 */
	@Autowired
	@Qualifier("applyService")
	private ApplyService applyService;

	@ResponseBody
	@RequestMapping(value="/printUpload",method=RequestMethod.POST)
	public Map<String, Object> upload(HttpServletRequest request, HttpServletResponse response,
			 @RequestParam("shopId") String shopId,
			 @RequestParam("printFile") MultipartFile file) throws Exception{
		
		HttpSession session = request.getSession();   
		String userId = session.getAttribute("userId").toString();
		User user = null;
		user = userService.getById(Integer.parseInt(userId));
		Shop shop = null;
		shop = shopService.getById(Integer.parseInt(shopId));
		Map<String, Object> json = new HashMap<String, Object>();
		int pages = 0;
	    // 如果文件不为空，写入上传路径
		if(!file.isEmpty()){
			
			// 上传文件路径
			String path = request.getServletContext().getRealPath("/resource/data/");
			Date day = new Date();
			SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
			String time = df.format(day);
			// 上传文件名
			String filename = file.getOriginalFilename();
			//后缀名
			String realname = filename.substring(filename.indexOf("."));
		    File filepath = new File(path,filename);
			// 判断路径是否存在，如果不存在就创建一个
	        if (!filepath.getParentFile().exists()) { 
	        	filepath.getParentFile().mkdirs();
	        }
	        
	        String srcFilePath = path + File.separator + time + "uid" + userId + realname;
	        // 将上传文件保存到一个目标文件当中
			file.transferTo(new File(srcFilePath));
			String pdfFilePath = path + File.separator + time + "uid" + userId + ".pdf";
			
			if(realname.equals(".doc") || realname.equals(".docx")){
				WpsToPdfUtil.word2pdf(srcFilePath, pdfFilePath);
			}else if(realname.equals(".ppt") || realname.equals(".pptx")){
				WpsToPdfUtil.ppt2pdf(srcFilePath, pdfFilePath);
			}else if(realname.equals(".xls") || realname.equals(".xlsx")){
				WpsToPdfUtil.excel2pdf(srcFilePath, pdfFilePath);
			}
	
			pages = GetPdfpage.getPdfPage(pdfFilePath);
			json.put("state", "success");
			json.put("pages", pages);
			json.put("pdfPath", "resource/data/" + time + "uid" + userId + ".pdf");
			json.put("oneGray", shop.getShopOneGray());
			json.put("twoGray", shop.getShopTwoGray());
			json.put("oneRBG", shop.getShopOneRBG());
			json.put("twoRBG", shop.getShopTwoRBG());
			json.put("fileName",filename);
			json.put("userMoney", user.getUserMoney());
			return json;
			
		}else{
			
			json.put("state", "fail");
			return json;
		}
		 
	 }
	
	
	
	@ResponseBody
	@RequestMapping(value="/PictureUpload",method=RequestMethod.POST)
	public Map<String, Object> PictureUpload(HttpServletRequest request, HttpServletResponse response,
			 @RequestParam("printPicture") MultipartFile file) throws Exception{
		
		HttpSession session = request.getSession();   
		String userId = session.getAttribute("userId").toString();
		
		Map<String, Object> json = new HashMap<String, Object>();
		
		if(!file.isEmpty()){
			// 上传文件路径
			String path = request.getServletContext().getRealPath("/resource/data/");
			Date day = new Date();
			SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
			String time = df.format(day);
			// 上传文件名
			String filename = file.getOriginalFilename();
			//后缀名
			String realname = filename.substring(filename.indexOf("."));
		    File filepath = new File(path,filename);
			// 判断路径是否存在，如果不存在就创建一个
	        if (!filepath.getParentFile().exists()) { 
	        	filepath.getParentFile().mkdirs();
	        }
	        String srcFilePath = path + File.separator + time + "uid" + userId + realname;
	        // 将上传文件保存到一个目标文件当中
			file.transferTo(new File(srcFilePath));
	
			json.put("state", "success");
			json.put("imgPath", "resource/data/" + time + "uid" + userId + realname);
			json.put("pictureName",filename);			
			return json;
			
		}else{
			json.put("state", "fail");
			return json;
		}
		
	}
	
	@RequestMapping(value="/OpenShop",method=RequestMethod.POST)
	public void OpenShop(HttpServletRequest request, HttpServletResponse response,
			 @RequestParam("shopName") String shopName,
			 @RequestParam("shopPhone") String shopPhone,
			 @RequestParam("emailCode") String emailCode,
			 @RequestParam("AuxiliaryFile") MultipartFile file) throws Exception{
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		if(session.getAttribute("emailCode") != null){
			String code = session.getAttribute("emailCode").toString();
			if(code.equals(emailCode)){
				// 如果文件不为空，写入上传路径
				if(!file.isEmpty()){
					String userId = session.getAttribute("userId").toString();
					User user = null;
					user = userService.getById(Integer.parseInt(userId));
					user.setUserType("3");
					userService.update(user);
					Apply apply = new Apply();
					apply.setUser(user);
					apply.setShopName(shopName);
					apply.setShopPhone(shopPhone);
					// 上传文件路径
					String path = request.getServletContext().getRealPath(
			                "/resource/apply/");
					// 上传文件名
					String filename = file.getOriginalFilename();
					apply.setFileName(filename);
					String realname = filename.substring(filename.indexOf("."));
				    File filepath = new File(path,filename);
					// 判断路径是否存在，如果不存在就创建一个
			        if (!filepath.getParentFile().exists()) { 
			        	filepath.getParentFile().mkdirs();
			        }
			        // 将上传文件保存到一个目标文件当中
			        apply.setFilePath("resource/apply/" + userId + realname);
					file.transferTo(new File(path + File.separator + userId + realname));
					Date date = new Date();	
					apply.setSubmitTime(date);
					apply.setState("1");
					applyService.add(apply);
					String html ="<div class='animate-container'><span class='sa-line sa-tip animateSuccessTip'></span><span class='sa-line sa-long animateSuccessLong'></span><div class='animate-before'><div class='circle'></div></div></div>";
					out.print(html);
					return;
				}
			}
		}
		String html="<div class='animate-container-fail'><span class='sa-line sa-tip animateFailTip'></span><span class='sa-line sa-long animateFailLong'></span><div class='animate-before'><div class='circle'></div></div></div>";
		out.print(html);
	}
	
	 
}
