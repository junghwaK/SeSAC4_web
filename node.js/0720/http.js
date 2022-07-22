const http = require("http");

const server = http.createServer( function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'});
    res.write("<h1>HEY</h1>");
    res.end("<p>Hello</p>");
});

server.listen(8000, function(){
    console.log("8000번 포트");
})

server.on( "request", function(){
    console.log( "Client Request" );
})
server.on( "connection", function(){
    console.log( "Client connection" );
})
server.on( "checkContinue", function(){
    console.log( "Client checkContinue" );
})