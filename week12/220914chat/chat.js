var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);


app.get("/", function(req,res){
    console.log("client");
    res.sendFile(__dirname+"/chat.html");
    // io.on("connection", function(socket){
    //     console.log("1 : ", socket.id);
    //     list[socket.id] = { name: req.body.name, profile: req.body.profile };
    //     socket.emit("profile", list[socket.id].profile );
    // });
});

// io -> 클라이언트와의 모든 연결을 갖고 있는 친구
// socket > 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자
let list = {};
//새로운 딕셔너리 형태의 빈값을 만들어준거임 
io.on("connection", function(socket){
    console.log("connected : ", socket.id);
    socket.on("info2", function(data){
        list[socket.id] = data.nickname;
        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
        io.emit("list", list);
        //내가 갖고있는 리스트 다보내
    });

        socket.on("send", function(data){
            //data = { msg : "", to: ""}; 왓을거임
        console.log("client message : ", data.msg);
        data["is_dm"] = false;
        data["nickname"] = list[socket.id];
        if ( data.to == "전체"){
            io.emit("newMessage", data);
        }else{
            data["is_dm"] = true;
            let socketID = Object.keys(list).find( (k) => { return list[k] === data.to;});
            io.to(socketID).emit("newMessage", data);
            socket.emit("newMessage", data);
        }
        //모두한테 보낼거니까 io.msg인거임.
        //data는 msg와 닉네임.
    });



    socket.on("disconnect", function(){
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다");
        delete list[socket.id];
        //dictionary형태에서 지우려면 이렇게 지울 수 있다. 
        io.emit("list", list);
    })

   
});

http.listen( 8000, function(){
    console.log("Server port : ", 8000);
});