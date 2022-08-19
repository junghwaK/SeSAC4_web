const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );
app.use(express.static('public'));
//퍼블릭 폴더에 정적파일 관리할거야.
app.use(session({
    secret: 'secret key'
}))
//이걸 써야 req.session으로 정보를 가져올 수있다.

app.get("/", function(req, res) {
    const user = req.session.user;

    if (user != undefined) {
        res.render("main", {isLogin: true, user: user});
        //user앞은 key값이고 뒤의 user는 const한 user.
    } else {
        res.render("main", {isLogin: false})
    }
});

app.get("/logout", (req,res) => {
    const user = req.session.user;

    req.session.destroy(function(err){
        res.send(
            //메인페이지로 이동
            `<script>
                location.href='/';
                alert('로그아웃 성공');
            </script>`
        );
    });
})

const router = require("./routes");
app.use('/user', router);

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
