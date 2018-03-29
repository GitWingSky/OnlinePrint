package net.wingsky.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import net.wingsky.domain.Shop;



public interface ShopMapper {

	@Select("SELECT * FROM shop WHERE shopState = '1'")
	@Results({ @Result(id = true, property = "shopId", column = "shopId"),
		@Result(property = "shopName", column = "shopkName"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shopIntroduction", column = "shopIntroduction"),
		@Result(property = "shopPictureUrl", column = "shopPictureUrl"),
		@Result(property = "shopAddress", column = "shopAddress"),
		@Result(property = "shopPhone", column = "shopPhone"),
		@Result(property = "shopEmail", column = "shopEmail"),
		@Result(property = "shopOneGray", column = "shopOneGray"),
		@Result(property = "shopTwoGray", column = "shopTwoGray"),
		@Result(property = "shopOneRBG", column = "shopOneRBG"),
		@Result(property = "shopTwoRBG", column = "shopTwoRBG"),
		@Result(property = "shopState", column = "shopState") })
	public List<Shop> get();
	
	@Select("SELECT * FROM shop")
	@Results({ @Result(id = true, property = "shopId", column = "shopId"),
		@Result(property = "shopName", column = "shopkName"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shopIntroduction", column = "shopIntroduction"),
		@Result(property = "shopPictureUrl", column = "shopPictureUrl"),
		@Result(property = "shopAddress", column = "shopAddress"),
		@Result(property = "shopPhone", column = "shopPhone"),
		@Result(property = "shopEmail", column = "shopEmail"),
		@Result(property = "shopOneGray", column = "shopOneGray"),
		@Result(property = "shopTwoGray", column = "shopTwoGray"),
		@Result(property = "shopOneRBG", column = "shopOneRBG"),
		@Result(property = "shopTwoRBG", column = "shopTwoRBG"),
		@Result(property = "shopState", column = "shopState") })
	public List<Shop> getAll();
	
	@Select("SELECT * FROM shop WHERE shopId = #{shopId}")
	@Results({ @Result(id = true, property = "shopId", column = "shopId"),
		@Result(property = "shopName", column = "shopName"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shopIntroduction", column = "shopIntroduction"),
		@Result(property = "shopPictureUrl", column = "shopPictureUrl"),
		@Result(property = "shopAddress", column = "shopAddress"),
		@Result(property = "shopPhone", column = "shopPhone"),
		@Result(property = "shopEmail", column = "shopEmail"),
		@Result(property = "shopOneGray", column = "shopOneGray"),
		@Result(property = "shopTwoGray", column = "shopTwoGray"),
		@Result(property = "shopOneRBG", column = "shopOneRBG"),
		@Result(property = "shopTwoRBG", column = "shopTwoRBG"),
		@Result(property = "shopState", column = "shopState") })
	public Shop getById(int shopId);
	
	
	@Select("SELECT * FROM shop WHERE userId = #{userId}")
	@Results({ @Result(id = true, property = "shopId", column = "shopId"),
		@Result(property = "shopName", column = "shopName"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shopIntroduction", column = "shopIntroduction"),
		@Result(property = "shopPictureUrl", column = "shopPictureUrl"),
		@Result(property = "shopAddress", column = "shopAddress"),
		@Result(property = "shopPhone", column = "shopPhone"),
		@Result(property = "shopEmail", column = "shopEmail"),
		@Result(property = "shopOneGray", column = "shopOneGray"),
		@Result(property = "shopTwoGray", column = "shopTwoGray"),
		@Result(property = "shopOneRBG", column = "shopOneRBG"),
		@Result(property = "shopTwoRBG", column = "shopTwoRBG"),
		@Result(property = "shopState", column = "shopState") })
	public Shop getByUserId(int userId);
	
	@Update("UPDATE shop SET shopName = #{shopName}, userId = #{user.userId}, shopIntroduction = #{shopIntroduction}, shopPictureUrl = #{shopPictureUrl}, shopAddress = #{shopAddress}, shopPhone = #{shopPhone}, shopEmail = #{shopEmail}, shopOneGray = #{shopOneGray}, shopTwoGray = #{shopTwoGray}, shopOneRBG = #{shopOneRBG}, shopTwoRBG = #{shopTwoRBG}, shopState = #{shopState} WHERE shopId = #{shopId}")
	public void update(Shop shop);
	
	@Insert("INSERT INTO shop VALUES (null, #{shopName}, #{user.userId}, #{shopIntroduction}, #{shopPictureUrl}, #{shopAddress}, #{shopPhone}, #{shopEmail}, #{shopOneGray}, #{shopTwoGray}, #{shopOneRBG}, #{shopTwoRBG}, #{shopState})")
	public void add(Shop shop);
	
}
