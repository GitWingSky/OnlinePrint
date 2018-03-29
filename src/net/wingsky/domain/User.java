package net.wingsky.domain;

public class User {

	private int userId;
	private String userUsername;
	private String userPassword;
	private String userType;
	private String userName;
	private String userPhone;
	private String userEmail;
	private String userAddress;
	private String userPictureUrl;
	private double userMoney;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserUsername() {
		return userUsername;
	}
	public void setUserUsername(String userUsername) {
		this.userUsername = userUsername;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	public String getUserPictureUrl() {
		return userPictureUrl;
	}
	public void setUserPictureUrl(String userPictureUrl) {
		this.userPictureUrl = userPictureUrl;
	}
	public double getUserMoney() {
		return userMoney;
	}
	public void setUserMoney(double userMoney) {
		this.userMoney = userMoney;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userUsername=" + userUsername
				+ ", userPassword=" + userPassword + ", userType=" + userType
				+ ", userName=" + userName + ", userPhone=" + userPhone
				+ ", userEmail=" + userEmail + ", userAddress=" + userAddress
				+ ", userPictureUrl=" + userPictureUrl + ", userMoney="
				+ userMoney + "]";
	}
	
}
