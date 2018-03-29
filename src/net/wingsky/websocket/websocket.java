package net.wingsky.websocket;

import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import org.springframework.context.ApplicationContext;

import net.wingsky.domain.Orders;
import net.wingsky.service.OrderService;
import net.wingsky.util.ApplicationContextRegister;

import com.google.gson.Gson;

@ServerEndpoint("/websocket/{param}")
public class websocket {

	OrderService orderService;
	
	//与某个客户端的连接会话，需要通过它来给客户端发送数据
	private Session session = null;
	
	//concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。若要实现服务端与单一客户端通信的话，可以使用Map来存放，其中Key可以为用户标识
	private static CopyOnWriteArraySet<websocket> webSocketSet = new CopyOnWriteArraySet<websocket>();
     
	private String username;
	
	 /**
     * 连接建立成功调用的方法
     * @param session  可选的参数。session为与某个客户端的连接会话，需要通过它来给客户端发送数据
     */
	@OnOpen
	public void onOpen(@PathParam(value="param") String param, Session session){
		this.session = session;
		webSocketSet.add(this);
		this.username = param;
	}
	
	/**
     * 收到客户端消息后调用的方法
     * @param message 客户端发送过来的消息
     * @param session 可选的参数
     */
	@OnMessage
	public void onMessage(String message){
		System.out.println(message);
		ApplicationContext act = ApplicationContextRegister.getApplicationContext();
		orderService = act.getBean(OrderService.class);  
		Orders order = orderService.getById(Integer.parseInt(message));
		Gson gson = new Gson();
		String str = gson.toJson(order,Orders.class);
		for(websocket item : webSocketSet){
			if(item.username.equals("shop")){
				try {
					item.sendMessage(str);
					//this.sendMessage(message);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}
	
	/**
     * 连接关闭调用的方法
     */
	@OnClose
	public void onClose(){
		webSocketSet.remove(this);
	}
	
	 @OnError
	 public void onError(Session session, Throwable error){
	     System.out.println("发生错误");
	     error.printStackTrace();
	 }
	 
	 public void sendMessage(String message) throws IOException{
		this.session.getBasicRemote().sendText(message);
	}
	
}
