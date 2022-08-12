const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();


app.set("view engine", "ejs");
app.use(cookieParser('1234'));
app.use(session({
    secret: 'secret key',
    // resave: false,
    //resave는 session을 덮어쓰기 할것을 말한다. 만료기한이 없기 때문에 다시 변경할지 쓰지않을지 정한다
    //폴스는 다시쓰지 않게 해준다.
    // saveUninitialized: true,
    //session초기값을 설정하지 않아도, 미리 세션을 만들어 놓는다.
    //즉, 
}))

const cookieConfig = {
    maxAge : 30000,
    path: '/',
    httpOnly: true,
    //통신할때만 접속할 수 있다. 기본값은 false임 
    signed: true,
    //쿠키를 암호화 시킨다. 
};

app.get("/", (req,res) => {
    req.session.name = "홍길동";
    res.cookie('key', 'value', cookieConfig);
    res.cookie('key2', 'value2', cookieConfig);
    res.render("index");
});

app.get("/get", (req,res) => {
    console.log( req.session.name);
    console.log(req.cookies);
    res.send(req.cookies);
    //req가 클라이언트가 서버한테 요청하는것임 어떤 요청인지 궁금하면console.log(Req)로 확인하셈
})

app.get("/cookie", (req,res)=> {
    res.render("cookie");
})

app.get("/destroy", (req,res)=> {
    // res.render("cookie");
    req.session.destroy(function(err){
        res.send("삭제");
    })
    req.session.name = "";
    
})
//로그인 페이지 보이겠지 버튼 눌렀을때 포스트 ~!
app.get("/login", (req,res) => {
    res.render("login");
});

//로그인 성공시 세션에 아이디 넣고 리다이렉트:이동한다는것임 프로필로 했기때문에 그 get으로 가는거임
//폼정보를 보내준다~!
//검사후 나온 결과가 flag라면 성공은 id잘친애, 그리고 프로필페이지로 리다이렉트하는거임.
//프로필 리다이렉트는 /profile로 우리가 치는거랑 같음. 실패시 다시 로그인페이지가 보이는거임.
app.post("/login", (req,res) => {
    var flag = true;
    if (flag) {
        req.session.id = req.body.id;
        res.redirect("/profile");
    }else res.redirect("/login");
});

//만약 세션에 아이디가 없거나 비어있으면 이사람은 로그인 성공자가 아니다. 그러므로 로그인으로 리디렉트
//보내버려 . 근데 정상이면 그 아이디를 가지고, db검색이나 프로필정보 가져온다. 렌더 프로필정보를 볼수있겠지
//지금까지 우리가 한건 프로필이 무조건 포스트로 받았기 때문에 링크 접속은 캔낫겟포스트떳었지.
//이렇게 아래와같이 하면 로그인을 정상적으로 성공한사람이라면 /프로필해도 볼 수있다. 
//만약 내가 껏다켜서 아이디 언디파인드 나오면 내가 로그인부터 하라고 로그인페이지로 가겠지. 
//로그인상태인가, 에 대한 판단으로 로그인페이지를 띄워주거나 성공했다고 프로필을 띄워주는것임.

// req.session.id =="" 세션검사를 하는거래 아이디가 잇냐? 있다면 로그인한애라서 db에서 정보를 가져오는거고 
//그 정보를 기반으로 디비에서 가져온 프로필을 가져와서 보여준다. 
app.get("/profile", (req,res) => {
    if (req.session.id == undefined || req.session.id ==""){
        res.redirect("/login");
        return false;
    }
    req.session.id
    res.render("profile");
});

app.get("/main", (req,res) => {

});


app.listen(8000, ()=>{
    console.log( "Server : ", 8000 );
});
