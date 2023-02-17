// RECAP

type Alias = string;

type Concrete = '1' | '2';

//Type
type PlayerA = {
  name: string;
};

//extends
type PlayerAA = PlayerA & {
  lastName: string;
};

//프로퍼티 추가?
type PlayerAA = {
  //error
  age: number;
};

const playerA: PlayerAA = {
  name: 'nini',
  lastName: 'lee',
};

//Interface
interface PlayerB {
  name: string;
}
//extends
interface PlayerBB extends PlayerB {
  lastName: string;
}
//프로퍼티 추가
interface PlayerBB {
  age: number;
}
const playerB: PlayerBB = {
  name: 'nini',
  lastName: 'lee',
  age: 1,
};

// Type과 Interface 모두 추상 클래스를 대신해서 사용 가능.

type PlayerC = {
  firstName: string;
};
interface PlayerD {
  firstName: string;
}

// implements PlayerD 도 가능.
class User implements PlayerC {
  constructor(public firstName: string) {}
}

/*
오브젝트나 클래스의 타입을 정할 때는 interface를.
다른 경우에는 type을 사용하자.

타입과 인터페이스 차이 공식 문서.
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces:~:text=typed%20type%20system.-,Differences%20Between%20Type%20Aliases%20and%20Interfaces,-Type%20aliases%20and
*/
