package net.wingsky.service;

import java.util.List;

import net.wingsky.domain.Orders;

public interface OrderService {

	public void add(Orders order);
	public List<Orders> getByUserId(int userId);
	public Orders getByPath(String pdfPath);
	public Orders getById(int orderId);
	public List<Orders> getByShopId(int state, int shopId);
	public void update(Orders order);
	public int[] getNum(int shopId);
	public double[] getMoney(int shopId);
}
