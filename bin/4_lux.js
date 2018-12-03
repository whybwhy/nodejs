/**
 * http 기본 서버 구성 - 주석 버전
 */

const http = require('http'); // 모듈 불러오는 부분
const port = 3000;

const server = http.createServer( (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');   // 이러한 방법으로 서버를 만들고
        response.end("this is jinx");
    }
);

server.listen(port , (error) => {   // 만든 서버를 사용해서 웹브라우저의 요청을 듣는다
    if (error) {
        console.log(error);
    }
});

