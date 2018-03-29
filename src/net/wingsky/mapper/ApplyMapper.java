package net.wingsky.mapper;

import java.util.List;

import net.wingsky.domain.Apply;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface ApplyMapper {

	@Insert("INSERT INTO apply VALUES (null, #{user.userId}, #{shopName}, #{shopPhone}, #{fileName}, #{filePath}, #{submitTime}, #{state})")
	public void add(Apply apply);
	
	@Select("SELECT * FROM apply WHERE state = '1'")
	@Results({ @Result(id = true, property = "applyId", column = "applyId"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shopName", column = "shopName"),
		@Result(property = "shopPhone", column = "shopPhone"),
		@Result(property = "fileName", column = "fileName"),
		@Result(property = "filePath", column = "filePath"),
		@Result(property = "submitTime", column = "submitTime"),
		@Result(property = "state", column = "state")})
	public List<Apply> get();
	
	@Select("SELECT * FROM apply WHERE applyId = #{applyId}")
	@Results({ @Result(id = true, property = "applyId", column = "applyId"),
		@Result(property = "user", column = "userId", one = @One(select = "net.wingsky.mapper.UserMapper.getById")),
		@Result(property = "shopName", column = "shopName"),
		@Result(property = "shopPhone", column = "shopPhone"),
		@Result(property = "fileName", column = "fileName"),
		@Result(property = "filePath", column = "filePath"),
		@Result(property = "submitTime", column = "submitTime"),
		@Result(property = "state", column = "state")})
	public Apply getById(int applyId);
	
	@Update("UPDATE apply SET userId = #{user.userId}, shopName = #{shopName}, shopPhone = #{shopPhone}, fileName = #{fileName}, filePath = #{filePath}, submitTime = #{submitTime}, state = #{state} WHERE applyId = #{applyId}")
	public void update(Apply apply);
}
