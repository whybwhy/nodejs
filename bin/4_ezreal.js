/**
 * http 기본 서버 구성 - request header
 */

const http = require('http');
const port = 3000;
const server = http.createServer((request, response) => {

    console.log("ip : ", request.headers['x-forwarded-for']);
    console.log("request.connection.remoteAddress : ", request.connection.remoteAddress);
    console.log("url : ", request.url);
    console.log("request.headers : ", request.headers);
    console.log("request : ", request);
    console.log("response : ", response);
    response.status = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(JSON.stringify(request.headers, null, 4));
});

server.listen(port, (error) => {
    if(error) {
        console.log(error);
    }

    console.log('Server running');
});

/* request.headers (클라이언트에서 서버로 보낸 헤더 데이터)
{
    "host": "localhost:3000",   //호스트
    "connection": "keep-alive",
    "cache-control": "max-age=0",
    "upgrade-insecure-requests": "1",
    // 클라이언트의 웹브라우저 종류
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
    // 클라이언트가 지원하는 파일 종류
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*!/!*;q=0.8",
    "accept-encoding": "gzip, deflate, br", // 클라이언트가 지원하는 압축파일 종류
    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",   // 클라이언트 사용자가 설정해 놓은 언어 수용도
    "cookie": "Webstorm-3b832040=32e4d196-3ca2-4a01-9d72-3112efec737a"
}*/
