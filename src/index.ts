// ## polymorphism

type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3]);
superPrint([true, false, true]);
superPrint(['a', 'b']);

// 이렇게 하나 하나 다 짜주는 것은 비효율적.
// 폴리몰피즘하게 해결해보자
// concrete type: number, string, boolean...  <-> generic type

superPrint([1, 2, true, 'ss']); //error
// 해당하는 call signature가 없어 error

// 제네릭타입은 placeholder
// concrete type이 지정될 예정이지만 아직은 그 타입을 모를 때 사용
// TS가 알아서 타입을 유추하여 concrete type을 지정해줌

type SuperPrint2 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
  // 보통 T, V를 많이 씀
};

const superPrint2: SuperPrint2 = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint2([1, true, 'ss']);
//const superPrint2: <string | number | boolean>(arr: (string | number | boolean)[]) => void

// 리턴값에도 적용
type SuperPrint3 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
  // 보통 T, V를 많이 씀
};

const superPrint3: SuperPrint3 = (arr) => {
  return arr[0];
};

superPrint3([1, true, 'ss']);
//const superPrint3: <string | number | boolean>(arr: (string | number | boolean)[]) => string | number | boolean
