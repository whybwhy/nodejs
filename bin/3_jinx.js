/**
 * http 기본 서버 구성
 * @type {{_connectionListener, METHODS, STATUS_CODES, Agent, ClientRequest, globalAgent, IncomingMessage, OutgoingMessage, Server, ServerResponse, createServer, get, request}|*}
 */

const http = require('http');
const port = 3000;

const server = http.createServer( (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end("this is jinx");
    }
);

server.listen(port , (error) => {
    if (error) {
        console.log(error);
    }
});

