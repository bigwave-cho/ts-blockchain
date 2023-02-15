//## Generic
//사용자의 요청에 따라 Call signature를 생성함
// any와는 다름!

type SuperPrint = <T, M>(a: T[], b: M) => T;
//함수 제네릭은 파라미터 부분을 기반으로 타입을 추론함

const spuerPrint: SuperPrint = (a, b) => a[0];
spuerPrint([1, 2], 'x');
//const spuerPrint: <number, string>(a: number[], b: string) => number

function shuffleArrays<T, M>(arr1: (T | M)[], arr2: T[]): (T | M)[] {
  // Combine the two arrays
  const combinedArray = arr1.concat(arr2);

  // Shuffle the combined array
  for (let i = combinedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
  }

  return combinedArray;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const shuffledArray = shuffleArrays(arr1, arr2);
console.log(shuffledArray);

function superPrint2<T>(a: T[]) {
  return a[0];
}

const a = superPrint2([1, 2, 3, 4]);
//function superPrint2<number>(a: number[]): number
const b = superPrint2([true, false, true]);
//function superPrint2<boolean>(a: boolean[]): boolean
const c = superPrint2(['a', 'b', 'c']);
//function superPrint2<string>(a: string[]): string
const d = superPrint2([1, 2, true, 'hello']);
//function superPrint2<string | number | boolean>(a: (string | number | boolean)[]): string | number | boolean

// ## 연습해보기

//이 함수는 배열의 마지막 요소를 반환해야 합니다.
type Last = <T>(a: T[]) => T;

const last: Last = (a) => {
  return a[a.length - 1];
};

//이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
type Prepend = {
  <T>(arr: T[], item: T): T[];
};

const prepend: Prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

//두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
type Mix = {
  <T, M>(arr1: (T | M)[], arr2: M[]): (T | M)[];
};

const mix: Mix = (arr1, arr2) => {
  function shuffle<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
  }
  let newArr = arr1.concat(arr2);
  let result = shuffle(newArr);

  return result;
};

// 제네릭 사용 예시2

type Player<E> = {
  name: string;
  extraInfo: E;
};

type NanaExtra = {
  favFood: string;
};

type NanaPlayer = Player<NanaExtra>;

const nana: NanaPlayer = {
  name: 'nana',
  // extraInfo: 2, //error
  extraInfo: {
    favFood: 'kimbob',
  },
};

const nono: Player<null> = {
  name: 'nono',
  extraInfo: null,
};

// 제네릭 사용 예시3
//Array의 타입을 보면 Array<T> 이런식으로 되어있음.
type A = Array<number>;
// 이제 A의 타입은 number[];

// 제네릭 사용 예시4
function printAllNumbers<T>(arr: Array<T>) {
  console.log('hi');
}
printAllNumbers([1, 2]);
//function printAllNumbers<number>(arr: number[]): void

//## 연습해보기
// 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type Count = {
  <T>(arr: T[]): number;
};

const count: Count = (arr) => {
  return arr.length;
};

//첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type FindIndex = {
  <T>(arr: T[], item: T): number | null;
};

const findIndex: FindIndex = (arr, item) => {
  if (arr.indexOf(item) || arr.indexOf(item) === 0) {
    return arr.indexOf(item);
  } else {
    return null;
  }
};

//첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다.
// 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다.
// 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
type Slice = {
  <T>(arr: T[], a: number, b?: number): T[];
};

const slice: Slice = (arr, firstIndex, secondIndex) => {
  if (secondIndex) {
    return arr.slice(firstIndex, secondIndex);
  } else {
    return arr.slice(firstIndex);
  }
};
