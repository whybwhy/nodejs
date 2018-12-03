/**
 * http request & response
 * 특이점 :
 * @type {{_connectionListener, METHODS, STATUS_CODES, Agent, ClientRequest, globalAgent, IncomingMessage, OutgoingMessage, Server, ServerResponse, createServer, get, request}|*}
 */
const http = require('http');
const port = 3000;

const server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('whybwhy');
});
server.listen(port, () => {
    console.log("server listen started", new Date());
});

console.log("Server running", new Date());
