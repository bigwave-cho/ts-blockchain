// ## unknown
// 내가 무슨 타입을 받을 지 모를 때
let a: unknown;
let b = a + 1; // error: unknown + number에는 + 사용 불가

//해결 : a의 타입을 한정해주면 됨.
if (typeof a === 'number') {
  let b = a + 1;
}

if (typeof a === 'string') {
  let b = a.toUpperCase();
}

// ## void : 아무것도 반환하지 않는 함수
function hello() {
  //:void
  console.log('x');
}

// ## never
// never return / function이 예외를 발생시키는 경우(에러발생)
function hi(): never {
  return 'x'; //error
}

// 상황 1 : 에러를 던지는 함수인 경우!
function error(): never {
  throw new Error('xxx'); //good
}

//상황 2:  never은 타입이 두가지인 상황에서 발생할수도 있음.
// 절대 나올 수 없는 경우인 경우 never이 붙음.
function example(name: string | number) {
  if (typeof name === 'string') {
    // name type string
  } else if (typeof name === 'number') {
    // name type number
  } else {
    name; // type never
  }
}
