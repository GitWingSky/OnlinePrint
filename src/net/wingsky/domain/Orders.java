package net.wingsky.domain;

import java.util.Date;

public class Orders {

	private int orderId;
	private User user;
	private Shop shop;
	private String printType;
	private int page;
	private String fileName;
	private String pdfPath;
	private String state;
	private Date submitTime;
	private String userAddress;
	private String fileType;
	private double money;
	private int num;
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Shop getShop() {
		return shop;
	}
	public void setShop(Shop shop) {
		this.shop = shop;
	}
	public String getPrintType() {
		return printType;
	}
	public void setPrintType(String printType) {
		this.printType = printType;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getPdfPath() {
		return pdfPath;
	}
	public void setPdfPath(String pdfPath) {
		this.pdfPath = pdfPath;
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
	public String getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public double getMoney() {
		return money;
	}
	public void setMoney(double money) {
		this.money = money;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", user=" + user + ", shop="
				+ shop + ", printType=" + printType + ", page=" + page
				+ ", fileName=" + fileName + ", pdfPath=" + pdfPath
				+ ", state=" + state + ", submitTime=" + submitTime
				+ ", userAddress=" + userAddress + ", fileType=" + fileType
				+ ", money=" + money + ", num=" + num + "]";
	}
	
	
}
