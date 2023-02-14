// ## Call Signature
// call signature은 마우스 hover하면 보이는 타입을 의미.
//const add: (a: number, b: number) => number
// const add = (a: number, b: number) => a + b;

// 함수의 call signature 만들기
// type Add = (a: number, b: number) => number;
// const add2: Add = (a, b) => a + b;

// ## Overloading
//외부 라이브러리나 패키지에서 오버로딩을 많이 사용함
// 오버로딩은 함수가 여러개의 call signature을 가질 때 사용

type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};

// overloading 실 사용 예(Nextjs)

// Router.push할 때 객체를 보낼 수도
Router.push({
  path: '/home',
  state: 1,
});
// string을 보낼 수도 있음.
Router.push('/home');

//위 예제 자세히 설명
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// 만약 argument 개수가 다른 경우는?

type Dif = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

//마지막 c 파라미터를 옵셔널 지정해주면 에러 해결
const dif: Dif = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

console.log(dif(1, 2)); //3
console.log(dif(1, 2, 3)); //6
