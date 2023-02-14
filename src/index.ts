// ## readonly
type Age = number;
type Name = string;

type Player = {
  readonly name: Name; // 수정 불가 읽기만 가능
  age?: Age;
};

const player: Player = {
  name: 'hh',
  age: 2,
};

const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker('pp');
nico.age = 12;
nico.name = 'w'; //error

const numbers: readonly number[] = [1, 2, 3, 4];
number.push(1); //error

//## Tuple :베열의 인덱스에 타입 지정
// 요소 3개 각 요소 타입지정됨.
const person: [string, number, boolean] = ['name', 12, false];

person[0] = 1; //error

//readonly 지정도 가능
const person2: readonly [string, number, boolean] = ['name', 12, false];
person2[0] = 'ss'; //error

type Option = {
  name?: string; // ? -> string | undefined 타입
};

//## any
//TS 보호를 받고 싶지 않을 때 사용하는 타입(필요할 때만 쓰기)

let a: any[] = [1, 2, 3, 4];
let b: any = true;
a + b; //TS 에러 뜨지 않음.
