package net.wingsky.util;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 * 
 * @ClassName EmailUtil
 * @Description 邮件发送
 * @author WingSky
 * @date 2018年1月21日 下午7:30:32
 *
 */
public class EmailUtil {
	/**
	 * 
	 * @Title: sendEmail
	 * @Description: 发送邮件核心方法
	 * @param user 收件人邮箱
	 * @param top 标题
	 * @param content 内容
	 * @return void 返回类型
	 * @throws
	 */
	public void sendEmail(String user,String top, String content){
		//设置一个邮件的发送者
		String username = "wingskymail@163.com";
		//授权码
		String password = "chenweijun0624";
		
		Properties properties = new Properties();
		properties.put("mail.transport.protocol", "smtp");//邮件的传输协议
		properties.put("mail.host", "smtp.163.com");//邮件发送的服务
		properties.put("mail.smtp.auth","true");//密码验证
		
		Session session =  Session.getInstance(properties);
		//创建一个邮箱
		MimeMessage ms = new MimeMessage(session);
		
		
		try {
			//设置邮件的来源
			Address toAddress = new InternetAddress(username);
			ms.setFrom(toAddress);
			
			//邮件的接收者
			ms.setRecipients(Message.RecipientType.TO, user);
			ms.setSubject(top);
			ms.setContent(content,"text/html;charset=utf-8");
			ms.saveChanges();//保存
			
			//创建一个邮件发送工具
			Transport ts = session.getTransport();
			ts.connect(username, password);
			ts.sendMessage(ms, ms.getAllRecipients());
			ts.close();
			
		} catch (AddressException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
