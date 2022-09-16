const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/message');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//const the username 
const botName = 'ChatCord Bot';

let list = {};
//Run when client connects. Welcome current user
io.on('connection', socket => {
    list[socket.id] = 
    socket.on('joinRoom', ({username, room}) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);


    //emit to just single user_welcome a client
    socket.emit('message', formatMessage(botName,'Welcome to Chatcord!'));

    //Broadcast when a user connects : 연결된 모든사람이랑 만나는 emit
    socket.broadcast.to(user.room).emit('message', formatMessage(botName,`${user.username}님이 들어왔습니다.`));
       //Send users and room info
       io.to(user.room).emit('roomUsers',{
        room: user.room,
        users: getRoomUsers(user.room)
    }); 
    
    }); 

 

    //connect 모~든 사람들
    // io.emit()

    //Listen for chatMessage
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

      //Runs when client disconnects
      socket.on('disconnect', ()=>{
        const user = userLeave(socket.id);

        if(user){
            io.to(user.room).emit('message', formatMessage(botName,`${user.username}님이 나갔습니다.`));
                    
            //Send users and room info
            io.to(user.room).emit('roomUsers',{
                room: user.room,
                users: getRoomUsers(user.room)
            }); 
    
        }
      
    });
});

const PORT = 8000 || process.env.PORT;

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));