package net.wingsky.mapper;

import java.util.List;

import net.wingsky.domain.Orders;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;

public interface OrderMapper {

	@Insert("INSERT INTO orders VALUES (null, #{user.userId}, #{shop.shopId}, #{printType}, #{page}, #{fileName}, #{pdfPath}, #{state}, #{submitTime}, #{userAddress}, #{fileType}, #{money}, #{num})")
	public void add(Orders order);
	
	@Select("SELECT * FROM orders WHERE userId = #{userId} order by state desc")
	@Results({ @Result(id = true, property = "orderId", column = "orderId"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "printType", column = "printType"),
		@Result(property = "page", column = "page"),
		@Result(property = "fileName", column = "fileName"),
		@Result(property = "pdfPath", column = "pdfPath"),
		@Result(property = "state", column = "state"),
		@Result(property = "submitTime", column = "submitTime"),
		@Result(property = "userAddress", column = "userAddress"),
		@Result(property = "fileType", column = "fileType"),
		@Result(property = "money", column = "money"),
		@Result(property = "num", column = "num") })
	public List<Orders> getByUserId(int userId);
	
	@Select("SELECT * FROM orders WHERE pdfPath = #{pdfPath}")
	@Results({ @Result(id = true, property = "orderId", column = "orderId"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "printType", column = "printType"),
		@Result(property = "page", column = "page"),
		@Result(property = "fileName", column = "fileName"),
		@Result(property = "pdfPath", column = "pdfPath"),
		@Result(property = "state", column = "state"),
		@Result(property = "submitTime", column = "submitTime"),
		@Result(property = "userAddress", column = "userAddress"),
		@Result(property = "fileType", column = "fileType"),
		@Result(property = "money", column = "money"),
		@Result(property = "num", column = "num") })
	public Orders getByPath(String pdfPath);
	
	@Select("SELECT * FROM orders WHERE orderId = #{orderId}")
	@Results({ @Result(id = true, property = "orderId", column = "orderId"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "printType", column = "printType"),
		@Result(property = "page", column = "page"),
		@Result(property = "fileName", column = "fileName"),
		@Result(property = "pdfPath", column = "pdfPath"),
		@Result(property = "state", column = "state"),
		@Result(property = "submitTime", column = "submitTime"),
		@Result(property = "userAddress", column = "userAddress"),
		@Result(property = "fileType", column = "fileType"),
		@Result(property = "money", column = "money"),
		@Result(property = "num", column = "num") })
	public Orders getById(int orderId);
	
	@SelectProvider(type = OrderMapperProvider.class, method = "getByShopId")
	@Results({ @Result(id = true, property = "orderId", column = "orderId"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "printType", column = "printType"),
		@Result(property = "page", column = "page"),
		@Result(property = "fileName", column = "fileName"),
		@Result(property = "pdfPath", column = "pdfPath"),
		@Result(property = "state", column = "state"),
		@Result(property = "submitTime", column = "submitTime"),
		@Result(property = "userAddress", column = "userAddress"),
		@Result(property = "fileType", column = "fileType"),
		@Result(property = "money", column = "money"),
		@Result(property = "num", column = "num") })
	public List<Orders> getByShopId(@Param("state") int state,@Param("shopId") int shopId);
	
	class OrderMapperProvider {  
        public String getByShopId(@Param("state") int state,@Param("shopId") int shopId) {  
            String sql = "SELECT * FROM orders WHERE shopId = #{shopId}";  
            if(state == 1){  
                sql += " AND state = '未发货'";
            }else if(state == 2){
            	sql += " AND state = '已发货'";
            }else if(state == 3){
            	sql += " AND state = '已完成'";
            }
            return sql;  
        }  
    }  
	
	@Update("UPDATE orders SET userId = #{user.userId}, shopId = #{shop.shopId}, printType = #{printType}, page = #{page}, fileName = #{fileName}, pdfPath = #{pdfPath}, state = #{state}, submitTime = #{submitTime}, userAddress = #{userAddress}, fileType = #{fileType}, money = #{money}, num = #{num} WHERE orderId = #{orderId}")
	public void update(Orders order);
	
	@Select("SELECT COUNT(*) FROM orders WHERE shopId = #{shopId}")
	public int getAllNum(int shopId);
	
	@Select("SELECT COUNT(*) FROM orders WHERE TO_DAYS(submitTime) = TO_DAYS(NOW()) AND shopId = #{shopId}")
	public int getTodayNum(int shopId);
	
	@Select("SELECT COUNT(*) FROM orders WHERE TO_DAYS(now()) - TO_DAYS(submitTime) = 1 AND shopId = #{shopId}")
	public int getYesterdayNum(int shopId);
	
	@Select("SELECT COUNT(*) FROM orders WHERE YEARWEEK(DATE_FORMAT(submitTime,'%Y-%m-%d')) = YEARWEEK(NOW()) AND shopId = #{shopId}")
	public int getWeekNum(int shopId);
	
	@Select("SELECT COUNT(*) FROM orders WHERE DATE_FORMAT(submitTime,'%Y%m') = DATE_FORMAT(NOW(),'%Y%m') AND shopId = #{shopId}")
	public int getMoonNum(int shopId);
	
	@Select("SELECT IFNULL(SUM(money),0) FROM orders WHERE shopId = #{shopId}")
	public double getAllMoney(int shopId);
	
	@Select("SELECT IFNULL(SUM(money),0) FROM orders WHERE TO_DAYS(submitTime) = TO_DAYS(NOW()) AND shopId = #{shopId}")
	public double getTodayMoney(int shopId);
	
	@Select("SELECT IFNULL(SUM(money),0) FROM orders WHERE TO_DAYS(now()) - TO_DAYS(submitTime) = 1 AND shopId = #{shopId}")
	public double getYesterdayMoney(int shopId);
	
	@Select("SELECT IFNULL(SUM(money),0) FROM orders WHERE YEARWEEK(DATE_FORMAT(submitTime,'%Y-%m-%d')) = YEARWEEK(NOW()) AND shopId = #{shopId}")
	public double getWeekMoney(int shopId);
	
	@Select("SELECT IFNULL(SUM(money),0) FROM orders WHERE DATE_FORMAT(submitTime,'%Y-%m') = DATE_FORMAT(NOW(),'%Y-%m') AND shopId = #{shopId}")
	public double getMoonMoney(int shopId);
}
