const http = require('http');
const serverHandle = require('../app');

const POST = 8000;

const server = http.createServer(serverHandle);

server.listen(POST);
