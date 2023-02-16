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
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국 음식');
const bibimbob = new Word('bibimbob', '비벼먹는 음식');
const dict = new Dict();

dict.add(kimchi);
dict.get('kimchi'); // '한국 음식'
dict.undate({ term: 'kimchi', def: '매워용' });
dict.get('kimchi'); // 매워용
// dict.delete('kimchi');
// dict.get('kimchi'); // undefined
dict.add(bibimbob);
dict.upsert({ term: '김밥', def: '배불러' });
