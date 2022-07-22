const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);

});
// 서버가 어디있는지도 모르기 때문에 작동하지 앟는ㄴ다. 

server.listen(3000);