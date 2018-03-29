package net.wingsky.util;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.Transparency;
import java.awt.font.FontRenderContext;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;

/**
 * 
 * @ClassName DrawStringPicUtil
 * @Description 生成文字图片
 * @author WingSky
 * @date 2018年1月20日 上午10:30:14
 *
 */
public class DrawStringPicUtil {

	/**
	 * 
	 * @Title: drawStringPic
	 * @Description: 生成文字图片方法
	 * @param width
	 * @param height
	 * @param fontHeight 字体大小
	 * @param color
	 * @param drawStr 内容
	 * @return 设定文件
	 * @return BufferedImage 返回类型
	 * @throws
	 */
	public static BufferedImage drawStringPic (int width, int height, Integer fontHeight, Color color, String drawStr) {
		 try {
			 BufferedImage buffImg = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
	         Graphics2D gd = buffImg.createGraphics();
	         //设置透明  start
	         buffImg = gd.getDeviceConfiguration().createCompatibleImage(width, height, Transparency.TRANSLUCENT);
	         gd=buffImg.createGraphics();
	         //设置透明  end
	         Font font = new Font("方正舒体", Font.PLAIN, fontHeight);
	         gd.setFont(font); //设置字体
	         gd.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING,RenderingHints.VALUE_TEXT_ANTIALIAS_LCD_HRGB);
	         gd.setColor(color); //设置颜色
	         //gd.drawRect(0, 0, width - 1, height - 1); //画边框
	         
	         FontRenderContext context = gd.getFontRenderContext();
	         Rectangle2D bounds = font.getStringBounds(drawStr, context);   
	         double x = (width - bounds.getWidth()) / 2;
	         double y = (height - bounds.getHeight()) / 2;
	         double ascent = -bounds.getY();
	         double baseY = y + ascent;
	         
	         gd.drawString(drawStr, (int)x, (int)baseY);    
	         //gd.drawString(drawStr, width/2-fontHeight*drawStr.length()/2,height/2); //输出文字（中文横向居中）  
	         return buffImg;  
	         
		 } catch (Exception e){
			 return null;
		 }
	}

}
