package net.wingsky.service.impl;


import net.wingsky.service.UserService;
import net.wingsky.util.PrivateCodeUtil;
import net.wingsky.domain.User;
import net.wingsky.mapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(propagation=Propagation.REQUIRED,isolation=Isolation.DEFAULT)
@Service("userService")
public class UserServiceImpl implements UserService {

	/**
	 * 自动注入userMapper
	 */
	@Autowired
	private UserMapper userMapper;
	
	@Transactional(readOnly=true)
	public User getById(int userId){
		return userMapper.getById(userId);
	}
	
	@Transactional(readOnly=true)
	public User getByUserUsername(String userUsername){
		return userMapper.getByUserUsername(userUsername);
	}
	
	@Transactional(readOnly=true)
	public boolean checkUser(String userUsername){
		
		User user = null;
		user = userMapper.getByUserUsername(userUsername);
		if(user == null){
			return false;
		}else{
			return true;
		}
	}
	
	public User register(String userUsername, String userPassword){
		String password = PrivateCodeUtil.encode(userPassword);
		User user = new User();
		user.setUserUsername(userUsername);
		user.setUserPassword(password);
		user.setUserName("");
		user.setUserType("1");
		user.setUserPhone("");
		user.setUserEmail(userUsername);
		user.setUserAddress("");
		user.setUserPictureUrl("resource/user/0.jpg");
		user.setUserMoney(0);
		userMapper.add(user);
		return userMapper.getByUserUsername(userUsername);
	}
	
	public void update(User user){
		userMapper.update(user);
	}
	
}
