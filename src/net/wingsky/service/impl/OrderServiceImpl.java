package net.wingsky.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import net.wingsky.domain.Orders;
import net.wingsky.mapper.OrderMapper;
import net.wingsky.service.OrderService;

@Transactional(propagation=Propagation.REQUIRED,isolation=Isolation.DEFAULT)
@Service("orderService")
public class OrderServiceImpl implements OrderService{

	/**
	 * 自动注入orderMapper
	 */
	@Autowired
	private OrderMapper orderMapper;
	
	public void add(Orders order){
		orderMapper.add(order);
	}
	
	public List<Orders> getByUserId(int userId){
		return orderMapper.getByUserId(userId);
	}
	
	public Orders getByPath(String pdfPath){
		return orderMapper.getByPath(pdfPath);
	}
	
	public Orders getById(int orderId){
		return orderMapper.getById(orderId);
	}
	
	public List<Orders> getByShopId(int state, int shopId){
		return orderMapper.getByShopId(state, shopId);
	}
	
	public void update(Orders order){
		orderMapper.update(order);
	}
	
	public int[] getNum(int shopId){
	
		int[] num = new int[10];
		num[0] = orderMapper.getAllNum(shopId);
		num[1] = orderMapper.getTodayNum(shopId);
		num[2] = orderMapper.getYesterdayNum(shopId);
		num[3] = orderMapper.getWeekNum(shopId);
		num[4] = orderMapper.getMoonNum(shopId);
		return num;
	}
	
	public double[] getMoney(int shopId){
		double[] money = new double[10];
		money[0] = orderMapper.getAllMoney(shopId);
		money[1] = orderMapper.getTodayMoney(shopId);
		money[2] = orderMapper.getYesterdayMoney(shopId);
		money[3] = orderMapper.getWeekMoney(shopId);
		money[4] = orderMapper.getMoonMoney(shopId);
		return money;
	}
}
