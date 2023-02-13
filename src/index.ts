/*
TS는 명시적(Explicit) 정의와 타입(Implicit)추론 방식
모두 사용 가능하여 유연함.
*/

let explict = 1;
let implicit: number = 1;
implicit = 'string';
//Type 'string' is not assignable to type 'number'.

let numArr = [1, 2, 3];
numArr.push('1');
//Argument of type 'string' is not assignable to parameter of type 'number'.
// 배열 또한 타입추론 방식으로 타입이 결정될 수 있다.

//아무것도 배열에 없을 때는 명시적 정의가 필요
let numArr2: number[] = [];

let numArr3 = []; // type:any[]

const player = {
  name: 'name',
};
player.name = 1; ///error
player.hello(); //error
