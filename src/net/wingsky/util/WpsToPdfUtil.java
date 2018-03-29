package net.wingsky.util;

import com.jacob.activeX.ActiveXComponent;
import com.jacob.com.ComThread;
import com.jacob.com.Dispatch;
import com.jacob.com.Variant;

/**
 * 
 * @ClassName WpsToPdfUtil
 * @Description word、ppt、excel转pdf类
 * @author WingSky
 * @date 2018年3月13日 下午3:38:12
 *
 */
public class WpsToPdfUtil {

	private static final Integer WORD_TO_PDF_OPERAND = 17;
    private static final Integer PPT_TO_PDF_OPERAND = 32;
    private static final Integer EXCEL_TO_PDF_OPERAND = 0;
  
    /**
     * 
     * @Title: word2pdf
     * @Description: word转pdf
     * @param srcFilePath
     * @param pdfFilePath 设定文件
     * @return void 返回类型
     * @throws
     */
    public static void word2pdf(String srcFilePath, String pdfFilePath){  
        ActiveXComponent app = null;  
        Dispatch doc = null;  
        try {  
            ComThread.InitSTA();  
            app = new ActiveXComponent("Word.Application");  
            app.setProperty("Visible", false);  
            Dispatch docs = app.getProperty("Documents").toDispatch(); 
            Object[] obj = new Object[]{
                    srcFilePath, 
                    new Variant(false),  
                    new Variant(false),//是否只读  
                    new Variant(false),   
                    new Variant("pwd")
            };
            doc = Dispatch.invoke(docs, "Open", Dispatch.Method, obj, new int[1]).toDispatch();  
//          Dispatch.put(doc, "Compatibility", false);  //兼容性检查,为特定值false不正确  
            Dispatch.put(doc, "RemovePersonalInformation", false);  
            Dispatch.call(doc, "ExportAsFixedFormat", pdfFilePath, WORD_TO_PDF_OPERAND); // word保存为pdf格式宏，值为17  
  
        }catch (Exception e) {  
            e.printStackTrace();
        } finally {  
            if (doc != null) {  
                Dispatch.call(doc, "Close", false);  
            }  
            if (app != null) {  
                app.invoke("Quit", 0);  
            }  
            ComThread.Release();  
        }  
    }  
    
    /**
     * 
     * @Title: word2pdf
     * @Description: ppt转pdf
     * @param srcFilePath
     * @param pdfFilePath 设定文件
     * @return void 返回类型
     * @throws
     */
    public static void ppt2pdf(String srcFilePath, String pdfFilePath){
        ActiveXComponent app = null;
        Dispatch ppt = null;
        try {
            ComThread.InitSTA();
            app = new ActiveXComponent("PowerPoint.Application");
            Dispatch ppts = app.getProperty("Presentations").toDispatch();

            /*
             * call 
             * param 4: ReadOnly
             * param 5: Untitled指定文件是否有标题
             * param 6: WithWindow指定文件是否可见
             * */
            ppt = Dispatch.call(ppts, "Open", srcFilePath, true,true, false).toDispatch();
            Dispatch.call(ppt, "SaveAs", pdfFilePath, PPT_TO_PDF_OPERAND); // ppSaveAsPDF为特定值32

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (ppt != null) {
                Dispatch.call(ppt, "Close");
            }
            if (app != null) {
                app.invoke("Quit");
            }
            ComThread.Release();
        }
    }
    
    /**
     * 
     * @Title: word2pdf
     * @Description: excel转pdf
     * @param srcFilePath
     * @param pdfFilePath 设定文件
     * @return void 返回类型
     * @throws
     */
    public static void excel2pdf(String inFilePath, String outFilePath){
        ActiveXComponent ax = null;
        Dispatch excel = null;
        try {
            ComThread.InitSTA();
            ax = new ActiveXComponent("Excel.Application");
            ax.setProperty("Visible", new Variant(false));
            ax.setProperty("AutomationSecurity", new Variant(3)); // 禁用宏
            Dispatch excels = ax.getProperty("Workbooks").toDispatch();

            Object[] obj = new Object[]{ 
                    inFilePath, 
                    new Variant(false),
                    new Variant(false) 
             };
            excel = Dispatch.invoke(excels, "Open", Dispatch.Method, obj, new int[9]).toDispatch();
            
            // 转换格式
            Object[] obj2 = new Object[]{ 
                    new Variant(EXCEL_TO_PDF_OPERAND), // PDF格式=0
                    outFilePath, 
                    new Variant(0)  //0=标准 (生成的PDF图片不会变模糊) ; 1=最小文件
            };
            Dispatch.invoke(excel, "ExportAsFixedFormat", Dispatch.Method,obj2, new int[1]);

        } catch (Exception es) {
            es.printStackTrace();
        } finally {
            if (excel != null) {
                Dispatch.call(excel, "Close", new Variant(false));
            }
            if (ax != null) {
                ax.invoke("Quit", new Variant[] {});
                ax = null;
            }
            ComThread.Release();
        }
    }
}
