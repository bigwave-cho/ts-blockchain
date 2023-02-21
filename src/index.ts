import crypto from 'crypto';

interface BlockShape {
  hash: string; //블록체인의 고유 서명 같은 것
  prevHash: string; //이전 해쉬값
  height: number; //블록 위치 표시
  data: string; //블록이 보호할 데이터
}

class Block implements BlockShape {
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

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) {
      return '';
    }
    return this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }

  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock('first one');
blockchain.addBlock('second one');
blockchain.addBlock('third one');

// 원래 getBlocks()이 blocks 원본을 리턴하고 있었기 때문에
//아래처럼 외부에서 접근하여 데이터 변경이 가능.
blockchain.getBlocks().push(new Block('xxxx', 1111, 'hackedd'));

//그러나 return [...this.blocks] 로 원본이 아닌 복사본을 리턴하게 되면 접근 불가!

console.log(blockchain.getBlocks());

// [
//   Block {
//     prevHash: '',
//     height: 1,
//     data: 'first one',
//     hash: '097283ae04169ff93ba6c732ea4030b841bf7bf1778dae815d0117df765fa825'
//   },
//   Block {
//     prevHash: '097283ae04169ff93ba6c732ea4030b841bf7bf1778dae815d0117df765fa825', //첫 블록과 연결
//     height: 2,
//     data: 'second one',
//     hash: '006340c0d348ae7a93d7c5a7c16daea240d8fa6f66b3c40a8bc6428c029f8d42'
//   },
//   Block {
//     prevHash: '006340c0d348ae7a93d7c5a7c16daea240d8fa6f66b3c40a8bc6428c029f8d42', //두번째 블록과 연결
//     height: 3,
//     data: 'third one',
//     hash: 'e5b0bbe0bd7141b8f262ea74b5859d5eb614f0fe44adf6b3e2d1940a14eb6eaa'
//   }
// ]
