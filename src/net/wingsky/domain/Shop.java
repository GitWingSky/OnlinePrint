package net.wingsky.domain;

public class Shop {

	private int shopId;
	private String shopName;
	private User user;
	private String shopIntroduction;
	private String shopPictureUrl;
	private String shopAddress;
	private String shopPhone;
	private String shopEmail;
	private double shopOneGray;
	private double shopTwoGray;
	private double shopOneRBG;
	private double shopTwoRBG;
	private String shopState;
	public int getShopId() {
		return shopId;
	}
	public void setShopId(int shopId) {
		this.shopId = shopId;
	}
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getShopIntroduction() {
		return shopIntroduction;
	}
	public void setShopIntroduction(String shopIntroduction) {
		this.shopIntroduction = shopIntroduction;
	}
	public String getShopPictureUrl() {
		return shopPictureUrl;
	}
	public void setShopPictureUrl(String shopPictureUrl) {
		this.shopPictureUrl = shopPictureUrl;
	}
	public String getShopAddress() {
		return shopAddress;
	}
	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}
	public String getShopPhone() {
		return shopPhone;
	}
	public void setShopPhone(String shopPhone) {
		this.shopPhone = shopPhone;
	}
	public String getShopEmail() {
		return shopEmail;
	}
	public void setShopEmail(String shopEmail) {
		this.shopEmail = shopEmail;
	}
	public double getShopOneGray() {
		return shopOneGray;
	}
	public void setShopOneGray(double shopOneGray) {
		this.shopOneGray = shopOneGray;
	}
	public double getShopTwoGray() {
		return shopTwoGray;
	}
	public void setShopTwoGray(double shopTwoGray) {
		this.shopTwoGray = shopTwoGray;
	}
	public double getShopOneRBG() {
		return shopOneRBG;
	}
	public void setShopOneRBG(double shopOneRBG) {
		this.shopOneRBG = shopOneRBG;
	}
	public double getShopTwoRBG() {
		return shopTwoRBG;
	}
	public void setShopTwoRBG(double shopTwoRBG) {
		this.shopTwoRBG = shopTwoRBG;
	}
	public String getShopState() {
		return shopState;
	}
	public void setShopState(String shopState) {
		this.shopState = shopState;
	}
	@Override
	public String toString() {
		return "Shop [shopId=" + shopId + ", shopName=" + shopName + ", user="
				+ user + ", shopIntroduction=" + shopIntroduction
				+ ", shopPictureUrl=" + shopPictureUrl + ", shopAddress="
				+ shopAddress + ", shopPhone=" + shopPhone + ", shopEmail="
				+ shopEmail + ", shopOneGray=" + shopOneGray + ", shopTwoGray="
				+ shopTwoGray + ", shopOneRBG=" + shopOneRBG + ", shopTwoRBG="
				+ shopTwoRBG + ", shopState=" + shopState + "]";
	}
	
	
	
}
