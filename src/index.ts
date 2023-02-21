import { init, exit } from 'myPackage';
//Cannot find module 'myPackage.js' or its corresponding type declarations.
//해결은 myPackage.d.ts파일을 만들어서 declaration해주면 됨.

init({ urls: 'true' });
exit(1);
