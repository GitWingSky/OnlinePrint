package net.wingsky.service;

import java.util.List;

import net.wingsky.domain.Apply;

public interface ApplyService {

	public void add(Apply apply);
	public List<Apply> get();
	public Apply getById(int applyId);
	public void update(Apply apply);
}
