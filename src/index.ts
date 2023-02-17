// # Interface

// 기존 타입에 대한 설명
type Nickname = string;
type healthBar = number;
type Friends = Array<string>;
type Player = {
  nickname: Nickname;
  healthBar: healthBar;
};

const nico: Player = {
  nickname: 'nico',
  healthBar: 10,
};

type Food = string;
const kimchi: Food = 'delicious';

// 타입을 지정된 옵션으로 제한
type Team = 'red' | 'blue' | 'yellow';
type HealthBar = 1 | 5 | 10;
type Player2 = {
  nickname: string;
  team: Team;
  //type Team = "red" | "blue" | "yellow"
  health: HealthBar;
};

const player: Player2 = {
  nickname: 'hhh',
  team: 'blue',
  health: 1,
};

//## Interface!
// object의 구성을 특정해줌.(1. type(다양한 곳에 사용) 2. interface(객체에 한정))
interface Player3 {
  nickname: string;
  team: Team;
  health: HealthBar;
}

const player2: Player3 = {
  nickname: 'hhh',
  team: 'blue',
  health: 1,
};

//----
interface User {
  name: string;
}
interface Player4 extends User {
  readonly num: number;
  // readonly도 가능.
}

/*
type으로 extends를 구현하려면?
type User = {
  name:string
}
type Player4 = User & {
  num:number
}
*/

const nn: Player4 = {
  name: 'sdf',
  num: 2,
};

nn.num = 1; //error

// interface 축적  (type은 불가.)
interface accu {
  name: string;
}
interface accu {
  lastName: string;
}
interface accu {
  age: number;
}
const pp: accu = {
  name: '123',
  lastName: '132',
  age: 123,
};
