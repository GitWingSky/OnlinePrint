package net.wingsky.util;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

public class PictureUtil {

	
	public static void ChangeSize(String file){
		try{
			 //读取图片
	        BufferedInputStream in = new BufferedInputStream(new FileInputStream(file));
	        //字节流转图片对象
	        Image bi =ImageIO.read(in);
	        //获取图像的高度，宽度
	        int height=bi.getHeight(null);
	        int width =bi.getWidth(null);
	        //构建图片流
	        BufferedImage tag = new BufferedImage(width, width / 2, BufferedImage.TYPE_INT_RGB);
	        //绘制改变尺寸后的图
	        tag.getGraphics().drawImage(bi, 0, 0,width, height, null);  
	        //输出流
	        BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(file));
	        //JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(out);
	        //encoder.encode(tag);
	        ImageIO.write(tag, "PNG",out);
	        in.close();
	        out.close();
		} catch(IOException e){
			e.printStackTrace();
		}
		
	}
}
