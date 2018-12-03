/**
 * console
 * @ref https://blog.gaerae.com/2015/06/chrome-firefox-safari-ie11-developer-tool.html
 */

const http = require("http");
const port = 3000;
const server = http.createServer((request, response) => {

    // console test
    let item = 5;
    console.log('count: ', item);
    console.log('count: %d', item);
    console.log(`count: ${item}`);
    console.log("\033[36m"+ new Date()+ "\033[0m:");    // ANSI 패턴을 활용한 색상 처리

    console.log("message");  // 메시지를 표시한다.
    console.debug("message");    // console.log와 동일하다.
    console.warn("message"); // "경고" 아이콘과 같이 메시지를 표시한다.
    console.error("message");    // "오류" 아이콘과 같이 메시지를 표시한다.
    console.info("message"); // "정보" 아이콘과 같이 메시지를 표시한다.
    console.dir("message");	// 개체의 속성이 표시된다.
    //console.trace(1, 2, 3);	// 호출 스택을 표시한다.
    console.assert('test'.length >= 2, "length >= 2");	// 데이터 확인도 가능하다.
    console.count('count_test');	// "count_test"가 호출된 수만큼 증가된 숫자가 표시된다.
    console.time('time_test');	// console.time호출 시점부터 console.timeEnd 호출 시점까지 경과 시간을 표시한다.
    console.timeEnd('time_test');	// console.time과 같이 한쌍이며 time_test 인자는 동일해야 한다.
    console.profile('profile_test');	// console.profile호출 시점부터 console.profileEnd 호출 시점까지 프로파일링 리포트를 표시한다.
    console.profileEnd('profile_test');	// console.profile과 같이 한쌍이며 profile_test 인자는 동일해야 한다.
    console.group('group_test');	// console.group호출 시점부터 console.groupEnd 호출 시점까지 그룹핑한다.
    console.groupCollapsed('group_test2');	// console.groupCollapsed호출 시점부터 console.groupEnd 호출 시점까지 그룹핑한다.단 닫혀진 상태로 표시된다.
    console.groupEnd();	// console.group 혹은 console.groupCollapsed과 같이 한쌍이며 인자는 없다.
    let names={0:{first:"John",last:"Smith"}}; //
    console.table(names);
});

server.listen(port);


