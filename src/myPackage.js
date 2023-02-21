// @ts-check
//js코드라도 TS의 보호를 받도록 설정 가능
//하지만 TS가 아니라서 TS문법은 사용불가하기 때문에 JSDoc이란 것을 사용함

/**
 * Initilizes the project
 * @param {object} config //config는 객체
 * @param {boolean} config.debug //객체 내 debug는 bool
 * @param {string} config.url
 * @returns {boolean} //return 타입 불
 */
export function init(config) {
  return true;
}

/**
 * Exits the program (이런식으로도 가능)
 * @param {number} code //code 타입은 number
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
