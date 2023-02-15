//# hash map

class Dit {
  //기존 property 생성 방식
  constructor(private x: string, protected y: string) {}
}

// dictionary 만들기

type Words = {
  // property의 이름은 모르지만 타입만을 알 때 사용
  [key: string]: string;
};

class Dict {
  private words: Words;
  // constructor로 수동 초기화
  constructor() {
    this.words = {};
  }

  // class를 타입으로도 사용 가능
  // 파라미터가 해당 클래스의 인스턴스
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  modify(word: Word) {
    this.words[word.term] = word.def;
  }
  delete(term: string) {
    if (this.words[term]) {
      delete this.words[term];
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국 음식');
const dict = new Dict();

dict.add(kimchi);
dict.def('kimchi'); // '한국 음식'
dict.modify({ term: 'kimchi', def: '매워용' });
dict.def('kimchi'); // 매워용
dict.delete('kimchi');
dict.def('kimchi'); // undefined

// 중요 포인트
/*
1. 프로퍼티를 만들고 원하는 대로 초기화하기
2. 클래스도 타입으로 사용 가능하다.
*/
