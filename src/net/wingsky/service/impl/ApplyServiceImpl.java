package net.wingsky.service.impl;

import java.util.List;

import net.wingsky.domain.Apply;
import net.wingsky.mapper.ApplyMapper;
import net.wingsky.service.ApplyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(propagation=Propagation.REQUIRED,isolation=Isolation.DEFAULT)
@Service("applyService")
public class ApplyServiceImpl implements ApplyService{

	/**
	 * 自动注入applyMapper
	 */
	@Autowired
	private ApplyMapper applyMapper;
	
	public void add(Apply apply){
		applyMapper.add(apply);
	}
	
	public List<Apply> get(){
		return applyMapper.get();
	}
	public Apply getById(int applyId){
		return applyMapper.getById(applyId);
	}
	
	public void update(Apply apply){
		applyMapper.update(apply);
	}
}
