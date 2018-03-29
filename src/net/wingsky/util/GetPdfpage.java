package net.wingsky.util;

import java.io.IOException;

import com.itextpdf.text.pdf.PdfReader;

/**
 * 
 * @ClassName GetPdfpage
 * @Description 统计pdf页数类
 * @author WingSky
 * @date 2018年3月13日 下午4:00:42
 *
 */
public class GetPdfpage {
	public static int getPdfPage(String filepath){
		int pagecount = 0;	
		PdfReader reader;
		try {
			reader = new PdfReader(filepath);
			pagecount= reader.getNumberOfPages(); 
		} catch (IOException e) {
			e.printStackTrace();
		}
		return pagecount;
	}
}
