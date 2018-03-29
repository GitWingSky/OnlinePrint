package net.wingsky.util;

import net.wingsky.util.EncryptUtil;

/**
 * 
 * @ClassName PrivateCodeUtil
 * @Description 密码加密算法
 * @author WingSky
 * @date 2018年1月15日 下午8:09:42
 *
 */
public class PrivateCodeUtil {

	/**
	 * HASH散列次数
	 */
	private static final int HASH = 1024;
	private static final int SIZE = 32;
	/**
	 * 
	 * @Title: encode
	 * @Description: pbkdf2加密方法
	 * @param plain 需要加密的密码
	 * @return 设定文件
	 * @return String 返回类型
	 * @throws
	 */
	public static String encode(String plain){
		//1.创建随机盐
		byte[] salt = EncryptUtil.generateSalt(SIZE);
		//2.使用可逆加密手段对随机盐进行加密
		String encodeHex = EncryptUtil.encodeHex(salt);
		//3.将明文密码和随机盐进行不可逆加密
		byte[] sha1 = EncryptUtil.sha1(plain.getBytes(), salt, HASH);
		//4.将第三部得到的结果进行可逆加密
		String cip = EncryptUtil.encodeHex(sha1);
		//5.将第二步的结果和第四部的结果进行拼接
		String finalCiper = encodeHex + cip;
		return finalCiper;
		
	}
	
	/**
	 * 
	 * @Title: decode
	 * @Description: pbkdf2密码验证
	 * @param plain 需要验证的密码
	 * @param cipher 数据库的密码
	 * @return 设定文件
	 * @return boolean 返回类型
	 * @throws
	 */
	public static boolean decode(String plain,String cipher){
		//1.截取密文随机盐
		String saltHex = cipher.substring(0, SIZE * 2);
		//2.解密随机盐
		byte[] salt = EncryptUtil.decodeHex(saltHex);
		//3.将明文密码和随机盐进行不可逆加密
		byte[] sha1 = EncryptUtil.sha1(plain.getBytes(), salt, HASH);
		//4.将第三部得到的结果进行可逆加密
		String cip = EncryptUtil.encodeHex(sha1);
		//将密文的随机盐和第四步的结果进行拼接
		String finlaCipher = saltHex + cip;
		if(finlaCipher.equals(cipher)){
			return true;
		}
		return false;
	}
}
