package net.wingsky.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import net.wingsky.domain.Message;
import net.wingsky.mapper.MessageMapper;
import net.wingsky.service.MessageService;

@Transactional(propagation=Propagation.REQUIRED,isolation=Isolation.DEFAULT)
@Service("messageService")
public class MessageServiceImpl implements MessageService{

	/**
	 * 自动注入messageMapper
	 */
	@Autowired
	private MessageMapper messageMapper;
	
	public void add(Message message){
		messageMapper.add(message);
	}
	
	public void update(Message message){
		messageMapper.update(message);
	}
	
	public Message getById(int messageId){
		return messageMapper.getById(messageId);
	}
	
	public List<Message> getByShopId(int shopId){
		return messageMapper.getByShopId(shopId);
	}
	
	public List<Message> getMessageByMany(int assess, int all, int shopId){
		return messageMapper.getMessageByMany(assess, all, shopId);
	}
	
	public List<Message> getOutstandingByStar(int shopId){
		return messageMapper.getOutstandingByStar(shopId);
	}
	
	public List<Message> getGoodByStar(int shopId){
		return messageMapper.getGoodByStar(shopId);
	}
	
	public List<Message> getBadByStar(int shopId){
		return messageMapper.getBadByStar(shopId);
	}

	public int[] getOutstandingNum(int shopId){
		int[] outstandingNum = new int[10];
		outstandingNum[0] = messageMapper.getStarNum(1,1,shopId);
		outstandingNum[1] = messageMapper.getStarNum(1,2,shopId);
		outstandingNum[2] = messageMapper.getStarNum(1,3,shopId);
		outstandingNum[3] = messageMapper.getStarNum(1,4,shopId);
		outstandingNum[4] = messageMapper.getStarNum(1,5,shopId);
		return outstandingNum;
	}
	
	public int[] getGoodNum(int shopId){
		
		int[] goodNum = new int[10];
		goodNum[0] = messageMapper.getStarNum(2,1,shopId);
		goodNum[1] = messageMapper.getStarNum(2,2,shopId);
		goodNum[2] = messageMapper.getStarNum(2,3,shopId);
		goodNum[3] = messageMapper.getStarNum(2,4,shopId);
		goodNum[4] = messageMapper.getStarNum(2,5,shopId);
		return goodNum;
	}

	public int[] getBadNum(int shopId){
		
		int[] badNum = new int[10];
		badNum[0] = messageMapper.getStarNum(3,1,shopId);
		badNum[1] = messageMapper.getStarNum(3,2,shopId);
		badNum[2] = messageMapper.getStarNum(3,3,shopId);
		badNum[3] = messageMapper.getStarNum(3,4,shopId);
		badNum[4] = messageMapper.getStarNum(3,5,shopId);
		return badNum;
	}
}
