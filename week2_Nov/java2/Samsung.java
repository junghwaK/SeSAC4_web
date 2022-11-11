package Interface;

//sumsung에 잇는것들을 꼭 가져와준다. 
// public void sendCall()  public void receiveCall()
//ppt마지막장에 인터페이스 문법을 참고한다. 코드가 길어지면 부모에서가져왔나 뭔가 기억이안나
// 오버라이딩하는 함수는 꼭 주석처럼 표시를 해주는것이 좋다. 주석아냐 @Override임 적고싶은부분은 주석처리해줘.
// 추상과 인터페이스 -> 인터페이스를 상속받으면 무조건 오버라이딩을 상속받아야한다. 
public class Samsung implements Phone {

	public void sendCall() {
		System.out.println("뚜루루");
	}

	public void receiveCall() {
		System.out.println("전화받아");
	}
	
	
}


