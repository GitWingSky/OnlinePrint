package net.wingsky.service;

import net.wingsky.domain.User;

public interface UserService {

	public User getById(int userId);
	public User getByUserUsername(String userUsername);
	public boolean checkUser(String userUsername);
	public User register(String userUsername,String userPassword);
	public void update(User user);
}

