/**
 * global 로 전역 변수화 가능하며 sub 파일에선 데이터 수정도 가능하다.
 */
global.temp = 'a';
console.log(1, temp);

const file_load = require("./5_jhin_sub.js");
console.log(2, temp);
require("./5_jhin_sub.js"); //  중복으로 호출이 되지 않는다.



