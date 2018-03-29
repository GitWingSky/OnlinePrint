package net.wingsky.mapper;

import java.util.List;

import net.wingsky.domain.User;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;


public interface UserMapper {

	@Select("SELECT * FROM user")
	public List<User> get();
	
	@Select("SELECT * FROM user WHERE userId = #{userId}")
	public User getById(int userId);
	
	@Select("SELECT * FROM user WHERE userUsername = #{userUsername}")
	public User getByUserUsername(@Param("userUsername")String userUsername);
	
	@Insert("INSERT INTO user VALUES (null, #{userUsername}, #{userPassword}, #{userType}, #{userName}, #{userPhone}, #{userEmail}, #{userAddress}, #{userPictureUrl}, #{userMoney})")
	public void add(User user);

	@Update("UPDATE user SET userUsername = #{userUsername}, userPassword = #{userPassword}, userType = #{userType}, userName = #{userName}, userPhone = #{userPhone}, userEmail = #{userEmail}, userAddress = #{userAddress}, userPictureUrl = #{userPictureUrl}, userMoney = #{userMoney} WHERE userId = #{userId}")
	public void update(User user);
}
