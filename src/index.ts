//# API 디자인 구현해보기.

interface Storage {
  //Storage는 TS에 의해서 이미 선언된 JS 웹스토리지 API를 위한 인터페이스
  // 이렇게 하면 중첩!! 프로퍼티가 추가됨
}
// 이번엔 그냥 고유 Storage 인터페이스로 진행
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  // 클래스에 제너릭을 부여했음
  // 이 제너릭을 아래처럼 스토리지로 보내줄 수 있음.
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    // 스토리지에 저장
    if (this.storage[key] !== undefined) {
      console.log('이미 존재');
      return;
    }
    this.storage[key] = value;
    console.log(this.storage[key]);
  }
  remove(key: string) {
    //스토리지에서 삭제
    delete this.storage[key];
  }
  get(key: string): T {
    //데이터 겟
    return this.storage[key];
  }
  clear() {
    //스토리지 비우기
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.set('g', 'g');
stringsStorage.set('g', 'g');
stringsStorage.get('g');
//get(key: string): string :스트링을 보내고 스트링을 반환받게 됨.

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set('hello', true);
booleanStorage.get('g');
//LocalStorage<boolean>.get(key: string): boolean
