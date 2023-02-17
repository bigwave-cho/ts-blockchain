//# abstract class 복습
// 추상 클래스는 상속받는 class 가질 property와 메서드를 지정 가능.
// 청사진!
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  // protected: 상속받는 class에서 접근 가능
  // private : 상속받는 class에서 접근 불가
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

// abstract 클래스는 인스턴스 만들기 불가.
const user = new User(); //error

class Player extends User {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}, my name is ${this.fullName}`;
  }
}

// 추상 클래스의 단점은 JS에서는 추상 클래스란 개념이 없음.
//JS로 컴파일하면 abstract가 무의미해짐.

// ## 추상 클래스를 interface로 !!
// interface는 JS로 컴파일되지 않아 JS로 변환된 결과가 훨씬 작아지는 장점이 있음.(코드길이)
interface User2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

// optional : interface 중첩 상속도 가능.
interface Human {
  health: number;
}

// implements를 이용하여 interface를 상속받고 그 결과
// 변환된 JS에 class는 존재하지만 상속하는 interface는 존재하지 않기에
// 코드가 더 가벼워진다.
class Player2 implements User2, Human {
  //단점 : interface implement는 프로퍼티를 private or protected 불가.
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  sayHi(name: string): string {
    return 'lee';
  }
  fullName(): string {
    return 'ee';
  }
}

/**
 결론 
 interface는 object나 class의 모양을 특정한다.
 */

// 인터페이스나 class는 타입으로도 지정 가능.
function makeUser(user: User2): User2 {
  return {
    firstName: 'ww',
    lastName: 'fsadf',
    fullName: () => 'string',
    sayHi: (name) => 'string',
  };
}

makeUser({
  firstName: 'ww',
  lastName: 'fsadf',
  fullName: () => 'string',
  sayHi: (name) => 'string',
});

//다만 class를 반환 타입으로 지정하게되면
// interface의 경우 객체로 반환하면 되지만.
function makeUser2(user: Player2): Player2 {
  return new Player2('이름', '성', 10);
  //class는 이런 식으로 class의 인스턴스로 반환해야 함.
}

makeUser2({
  firstName: 'ww',
  lastName: 'fsadf',
  fullName: () => 'string',
  sayHi: (name) => 'string',
  health: 10,
});
