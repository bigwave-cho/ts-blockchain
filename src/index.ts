//## Class

/*
선언한 클래스 내/ 상속받은 클래스 내 / 인스턴스

private   : O  /  X  /  X 
protected : O  /  O   /  X
public    : O  /  O   /  O

JS는 private 등을 지원하지 않는다.
고로 JS에서 아래 코드는 잘 작동한다.
하지만 TS는 사전에 에러를 띄워 작동을 막음.
*/

//## private, public
class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

const nano = new Player('nano', 'las', '나');
nano.firstName; // error
nano.nickName; // public은 접근 가능.

//## abstract class
// 추상 클래스는 다른 클래스가 상속받을 수 있는 클래스
// 단, 직접 새로운 인스턴스를 생성 불가.
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  } //당연히 메서드도 private 지정 가능.
}
// new User // error

class Son extends User {}

const son = new Son('son', 'son', 'sony');
son.nickName; //sony
son.firstName; //error private
son.getFullName(); //이건 가능

//-----------------## abstract method
//abstract class 내에서 abstract method를 만들  수 있다.
//abstract method는 implement하면 안되고(implement:구현 ; 위 User의 getFullName 형태)
//대신 메소드의 call signature만을 적어둬야 한다.
abstract class User2 {
  constructor(
    protected firstName: string,
    private lastName: string,
    private nickName: string
  ) {}
  abstract getNickName(): void;
}
// 추상 메서드란 추상 클래스를 상속받는 모든 클래스들이
//구현해야하는 메서드를 의미한다.
class Player2 extends User2 {
  //Non-abstract class 'Player2' does not implement inherited abstract member 'getNickName' from class 'User2'.
  //추상 메서드를 구현하라는 위 에러 해결하기
  getNickName() {
    console.log(this.nickName); //error
    // nickName은 private이기 때문에 자식 class에서도 접근 불가
    console.log(this.firstName);
    //protected는 선언클래스와 자식클래스까지 접근가능하지만
    // 외부에서는 접근 불가.
  }
}

const son2 = new Player2('son', 'son', 'sony');
son2.firstName; //protected 외부 접근 불가
