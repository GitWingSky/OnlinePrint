package net.wingsky.service;

import java.util.List;

import net.wingsky.domain.Shop;

public interface ShopService {

	public List<Shop> get();
	public List<Shop> getAll();
	public Shop getById(int shopId);
	public Shop getByUserId(int userId);
	public void update(Shop shop);
	public void add(Shop shop);
}
