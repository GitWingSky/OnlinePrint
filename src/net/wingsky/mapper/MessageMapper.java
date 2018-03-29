package net.wingsky.mapper;

import java.util.List;

import net.wingsky.domain.Message;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;

public interface MessageMapper {

	@Insert("INSERT INTO message VALUES (null, #{shop.shopId}, #{user.userId}, #{message}, #{star}, #{reply.userId}, #{replyMessage}, #{submitTime})")
	public void add(Message message);
	
	@Update("UPDATE message SET shopId = #{shop.shopId}, userId = #{user.userId}, message = #{message}, star = #{star}, reply = #{reply.userId}, replyMessage = #{replyMessage}, submitTime = #{submitTime} WHERE messageId = #{messageId}")
	public void update(Message message);
	
	@Select("SELECT * FROM message WHERE messageId = #{messageId}")
	@Results({ @Result(id = true, property = "messageId", column = "messageId"),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "message", column = "message"),
		@Result(property = "star", column = "star"),
		@Result(property = "reply", column = "reply", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "replyMessage", column = "replyMessage"),
		@Result(property = "submitTime", column = "submitTime")})
	public Message getById(int messageId);
	
	@Select("SELECT * FROM message WHERE shopId = #{shopId}")
	@Results({ @Result(id = true, property = "messageId", column = "messageId"),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "message", column = "message"),
		@Result(property = "star", column = "star"),
		@Result(property = "reply", column = "reply", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "replyMessage", column = "replyMessage"),
		@Result(property = "submitTime", column = "submitTime")})
	public List<Message> getByShopId(int shopId);
	
	@Select("SELECT * FROM message WHERE star > 3 AND shopId = #{shopId}")
	@Results({ @Result(id = true, property = "messageId", column = "messageId"),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "message", column = "message"),
		@Result(property = "star", column = "star"),
		@Result(property = "reply", column = "reply", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "replyMessage", column = "replyMessage"),
		@Result(property = "submitTime", column = "submitTime")})
	public List<Message> getOutstandingByStar(@Param("shopId") int shopId);
	
	@SelectProvider(type = MessageMapperProvider.class, method = "getMessageByMany")
	@Results({ @Result(id = true, property = "messageId", column = "messageId"),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "message", column = "message"),
		@Result(property = "star", column = "star"),
		@Result(property = "reply", column = "reply", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "replyMessage", column = "replyMessage"),
		@Result(property = "submitTime", column = "submitTime")})
	public List<Message> getMessageByMany(@Param("assess") int assess,@Param("all") int all,@Param("shopId") int shopId);
	
	@SelectProvider(type = MessageMapperProvider.class, method = "getStarNum")
	public int getStarNum(@Param("assess") int assess,@Param("timee") int timee,@Param("shopId") int shopId);
	
	class MessageMapperProvider {  
        public String getMessageByMany(@Param("assess") int assess,@Param("all") int all,@Param("shopId") int shopId) {  
            String sql = "SELECT * FROM message where shopId = #{shopId}";  
            if(assess == 1){  
                sql += " AND star > 3";
            }else if(assess == 2){
            	sql += " AND star = 3";
            }else if(assess == 3){
            	sql += " AND star < 3";
            }
            if(all == 1){
            	sql += " AND reply is null";
            }
            sql += " ORDER BY messageId DESC";
            return sql;  
        }  
        
        public String getStarNum(@Param("assess") int assess,@Param("timee") int timee,@Param("shopId") int shopId) {  
        	String sql = "SELECT COUNT(*) FROM message where shopId = #{shopId}";
        	 if(assess == 1){  
                 sql += " AND star > 3";
             }else if(assess == 2){
             	sql += " AND star = 3";
             }else{
             	sql += " AND star < 3";
             }
        	 if(timee == 2){
        		 sql += " AND TO_DAYS(submitTime) = TO_DAYS(NOW())";
        	 }else if(timee == 3){
        		 sql += " AND TO_DAYS(now()) - TO_DAYS(submitTime) = 1";
        	 }else if(timee == 4){
        		 sql += " AND YEARWEEK(DATE_FORMAT(submitTime,'%Y-%m-%d')) = YEARWEEK(NOW())";
        	 }else if(timee ==5){
        		 sql += " AND DATE_FORMAT(submitTime,'%Y%m') = DATE_FORMAT(NOW(),'%Y%m')";
        	 }
        	return sql;
        }
    }  
	
	
	@Select("SELECT * FROM message WHERE star = 3 AND shopId = #{shopId}")
	@Results({ @Result(id = true, property = "messageId", column = "messageId"),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "message", column = "message"),
		@Result(property = "star", column = "star"),
		@Result(property = "reply", column = "reply", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "replyMessage", column = "replyMessage"),
		@Result(property = "submitTime", column = "submitTime")})
	public List<Message> getGoodByStar(@Param("shopId") int shopId);
	
	@Select("SELECT * FROM message WHERE star < 3 AND shopId = #{shopId}")
	@Results({ @Result(id = true, property = "messageId", column = "messageId"),
		@Result(property = "shop", column = "shopId", one = @One(select = "net.wingsky.mapper.ShopMapper.getById")),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "message", column = "message"),
		@Result(property = "star", column = "star"),
		@Result(property = "reply", column = "reply", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "replyMessage", column = "replyMessage"),
		@Result(property = "submitTime", column = "submitTime")})
	public List<Message> getBadByStar( @Param("shopId") int shopId);
	
}
