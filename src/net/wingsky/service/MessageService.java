package net.wingsky.service;

import java.util.List;

import net.wingsky.domain.Message;

public interface MessageService {

	public void add(Message message);
	public void update(Message message);
	public Message getById(int messageId);
	public List<Message> getByShopId(int shopId);
	public List<Message> getMessageByMany(int assess, int all, int shopId);
	public List<Message> getOutstandingByStar(int shopId);
	public List<Message> getGoodByStar(int shopId);
	public List<Message> getBadByStar(int shopId);
	public int[] getOutstandingNum(int shopId);
	public int[] getGoodNum(int shopId);
	public int[] getBadNum(int shopId);
}
