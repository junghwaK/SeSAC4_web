package Interface;
//상수만 선언할 수 있다. 
	//오버라이딩 안하고 abstract하면 무조건 오류뜬다. 
		//interface는 설계부와 구현부를 분리한다. 그리고 무조건 구현해야하안다, 자식에서.
		// ppt에시를 잘봐주기.



public interface Phone {
	//public final 삭제가능
	//상수는 여러개 생성 가능.
	public final String CATEGORY = "phone";
	public final String CATEGORY2 = "phone";

	public abstract void sendCall();
	public abstract void receiveCall();
}
