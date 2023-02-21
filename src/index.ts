// import { init, exit } from 'myPackage'; // <-npm으로 인스톨한 모듈

import { init, exit } from './myPackage.js'; // <- 내가 만든 js파일
//이번엔 패키지가 아닌 프로젝트 내에 실제 JS파일을 불러온다고 가정

init();

/*
init(config: { debug: boolean; url: string; }): boolean
//config는 객체


Initilizes the project

@returns — //return 타입 불
*/
