package net.wingsky.service.impl;

import java.util.List;

import net.wingsky.domain.Shop;
import net.wingsky.mapper.ShopMapper;
import net.wingsky.service.ShopService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Transactional(propagation=Propagation.REQUIRED,isolation=Isolation.DEFAULT)
@Service("shopService")
public class ShopServiceImpl implements ShopService{

	/**
	 * 自动注入shopMapper
	 */
	@Autowired
	private ShopMapper shopMapper;
	
	@Transactional(readOnly=true)
	public List<Shop> get(){
		return shopMapper.get();
	}
	
	public List<Shop> getAll(){
		return shopMapper.getAll();
	}
	
	@Transactional(readOnly=true)
	public Shop getById(int shopId){
		return shopMapper.getById(shopId);
	}
	
	public Shop getByUserId(int userId){
		return shopMapper.getByUserId(userId);
	}
	
	public void update(Shop shop){
		shopMapper.update(shop);
	}
	
	public void add(Shop shop){
		shopMapper.add(shop);
	}
	
}
