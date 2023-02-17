type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  undate(word: Word) {
    this.words[word.term] = word.def;
  }
  delete(term: string) {
    if (this.words[term]) {
      delete this.words[term];
    }
  }
  showAll() {
    let list = [];
    for (var term in this.words) {
      list.push(term);
    }
    return list;
  }
  count() {
    let list = [];
    for (var term in this.words) {
      list.push(term);
    }
    return list.length;
  }

  upsert(word: Word) {
    this.words[word.term] = word.def;
  }
  exists(term: string) {
    return this.words[term] ? '존재' : '없음';
  }
  bulkAdd(words: Word[]) {
    words.forEach((word) => {
      this.words[word.term] = word.def;
    });
  }
  bulkDelete(words: Word[]) {
    words.forEach((word) => {
      delete this.words[word.term];
    });
    console.log('삭제완료');
  }

  static hello() {
    console.log('hello');
  }
}

class Word {
  //만약 private이나 protected가 아닌 public을 수정불가로 만드려면
  // TS의 readonly를 추가하면 된다.
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word('kimchi', '한국 음식');
const bibimbob = new Word('bibimbob', '비벼먹는 음식');
const dict = new Dict();

// kimchi.def = '123123';
//Cannot assign to 'def' because it is a read-only property.

Dict.hello();

/*
정적 메서드
정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.
*/
class Triple {
  static triple(n?: number) {
    n = n || 1; //비트연산이 아니어야 합니다.
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n: number) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple()); // 3
console.log(Triple.triple(6)); // 18
console.log(BiggerTriple.triple(3)); // 81
var tp = new Triple();
console.log(BiggerTriple.triple(3)); // 81 (부모의 인스턴스에 영향을 받지 않습니다.)
console.log(tp.triple()); // 'tp.triple은 함수가 아닙니다.'.
