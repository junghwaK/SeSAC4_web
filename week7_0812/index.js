const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();


app.set("view engine", "ejs");
app.use(cookieParser('1234'));

const cookieConfig = {
    maxAge : 30000,
    path: '/',
    httpOnly: true,
    //통신할때만 접속할 수 있다. 기본값은 false임 
    signed: true,
    //쿠키를 암호화 시킨다. 
};

app.get("/", (req,res) => {
    res.cookie('key', 'value', cookieConfig);
    // res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req,res) => {
    console.log(req.cookies);
    res.send(req.cookies);
    //req가 클라이언트가 서버한테 요청하는것임 어떤 요청인지 궁금하면console.log(Req)로 확인하셈
})

app.get("/cookie", (req,res)=> {
    res.render("cookie");
})

app.listen(8000, ()=>{
    console.log( "Server : ", 8000 );
});
