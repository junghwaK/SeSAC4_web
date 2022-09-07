var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

//if문 아니고 http앱 객체로 보내는거임
app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname+"/index.html");
    //ejs설치 안했기 때문에 센드파일. 이제이에스했으면 다른걸로..뭐였지?
});


io.on("connection", function(socket){
    console.log("connected");
    socket.emit("hello", "server hello");
    socket.on("click", function(data){
        console.log("client click");
        socket.emit("clickResponse", 'success');
        io.emit("clickResponse", "io success");
    })
});

http.listen( 8000, function(){
    console.log("Server port : ", 8000);
});