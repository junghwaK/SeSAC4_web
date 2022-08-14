const http = require('http');
//var나 let을 사용할 수 도 있지만 절대 변경하지 않을 것이니까const
//보통은 불러오는 모듈의 이름을 따서 만든다. 
const fs = require('fs');

const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();서울특별시 금천구 벚꽃로 100
    }

    if(url === '/message' && method == 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Locstion', '/');
                return res.end();
            });
        });  
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</body>');
    res.write('</html>');
    res.end();
});
//createServer 는 서버를 생성할때 꼭 필요함. 
server.listen(3000);
