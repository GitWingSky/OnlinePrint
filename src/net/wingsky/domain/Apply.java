package net.wingsky.domain;

import java.util.Date;

public class Apply {

	private int applyId;
	private User user;
	private String shopName;
	private String shopPhone;
	private String fileName;
	private String filePath;
	private Date submitTime;
	private String state;
	public int getApplyId() {
		return applyId;
	}
	public void setApplyId(int applyId) {
		this.applyId = applyId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public String getShopPhone() {
		return shopPhone;
	}
	public void setShopPhone(String shopPhone) {
		this.shopPhone = shopPhone;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Date getSubmitTime() {
		return submitTime;
	}
	public void setSubmitTime(Date submitTime) {
		this.submitTime = submitTime;
	}
	@Override
	public String toString() {
		return "Apply [applyId=" + applyId + ", user=" + user + ", shopName="
				+ shopName + ", shopPhone=" + shopPhone + ", fileName="
				+ fileName + ", filePath=" + filePath + ", submitTime="
				+ submitTime + ", state=" + state + "]";
	}
	
	
}
