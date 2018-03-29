package net.wingsky.util;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 
 * @ClassName TimeAssistUtil
 * @Description 时间转换类
 * @author WingSky
 * @date 2018年3月13日 下午4:01:12
 *
 */
public class TimeAssistUtil {

	public static Date getDateTimeByString(String t){
		
		Date dt = null;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
			dt = sdf.parse(t);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return dt;
	}
	public static String getStringByDateTime(Date dt){
		String t = "";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		t = sdf.format(dt); 
		return t;
	}
}
