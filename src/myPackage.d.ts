interface Config {
  urls: string;
}

declare module 'myPackage' {
  function init(cofig: Config): boolean;
  function exit(code: number): number;
}
// 이런식으로 누군가 해당 패키지에 대한 것들을 손수 정의해놓아서 TS는 d.ts파일을 읽고 해당 라이브러리를 이해하는 것.
