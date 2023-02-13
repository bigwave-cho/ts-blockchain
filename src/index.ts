const playerA: {
  name: string;
  age?: number;
} = {
  name: 'ee',
  age: 12,
}; //이렇게 객체 만들 때마다 일일이 타입 지정은 비효율적.

// Type Alias(타입 별칭 : 타입을 미리 만들어두고 별칭을 붙여두는 것.)
type Age = number;
type name = string;

type Player = {
  name: name;
  age?: Age; // 객체 옵셔널 프로퍼티
};

const player: Player = {
  name: 'hh',
  age: 2,
};

// function 타입
function playerMaker(name: string) {
  return {
    name: name,
  };
}

const nico = playerMaker('pp');
nico.age = 12; // error: 'age' does not exist on type '{name:string}'

//해결방법 : 반환값 타입 지정.
function playerMaker2(name: string): Player {
  return {
    name: name,
  };
}

const nico2 = playerMaker2('pp');
nico2.age = 12;
