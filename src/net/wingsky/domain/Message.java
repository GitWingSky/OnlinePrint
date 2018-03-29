package net.wingsky.domain;

import java.util.Date;

public class Message {

	private int messageId;
	private Shop shop;
	private User user;
	private String message;
	private int star;
	private User reply;
	private String replyMessage;
	private Date submitTime;
	public int getMessageId() {
		return messageId;
	}
	public void setMessageId(int messageId) {
		this.messageId = messageId;
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
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getStar() {
		return star;
	}
	public void setStar(int star) {
		this.star = star;
	}
	public User getReply() {
		return reply;
	}
	public void setReply(User reply) {
		this.reply = reply;
	}
	public String getReplyMessage() {
		return replyMessage;
	}
	public void setReplyMessage(String replyMessage) {
		this.replyMessage = replyMessage;
	}
	public Date getSubmitTime() {
		return submitTime;
	}
	public void setSubmitTime(Date submitTime) {
		this.submitTime = submitTime;
	}
	@Override
	public String toString() {
		return "Message [messageId=" + messageId + ", user=" + user + ", shop="
				+ shop + ", message=" + message + ", star=" + star + ", reply="
				+ reply + ", replyMessage=" + replyMessage + ", submitTime="
				+ submitTime + "]";
	}
	
	
	
}
