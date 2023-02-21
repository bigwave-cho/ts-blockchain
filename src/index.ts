/*
설정.
  "scripts": {
    "build": "tsc", // build파일에 tsc를 이용해서 js파일로 컴파일
    "dev" : "nodemon --exec ts-node src/index.ts", // 빌드 없이 TS 실행
    "start": "node build/index.js" // build/index.js를 실행
  },

  npm i -D ts-node // 빌드 없이 TS를 실행가능(개발 단계에서만 사용)
  npm i nodemon  //수동으로 서버를 재시작 안해도 반영해줌 (dev 맨 앞에 추가)
  nodemon 못찾으면 sudo로 설치해보기
*/
// import crypto from 'crypto'; //err :Module '"crypto"' has no default export.
// 해결1: import * as crypto from 'crypto';
// 해결2: tsconfig  esModuleInterop:true,  allowJs 삭제
import crypto from 'crypto';
//crypto declaration err -> @types 찾아서 install
// or @types/node : nodejs에 대한 모든 것

interface BlockShape {
  hash: string; //블록체인의 고유 서명 같은 것
  prevHash: string; //이전 해쉬값
  height: number; //블록 위치 표시
  data: string; //블록이 보호할 데이터
}

class Block implements BlockShape {
  // hash는 아래 3가지를 이용하여 계산됨
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}
