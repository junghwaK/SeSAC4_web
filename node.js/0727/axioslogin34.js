const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.render("axioslogin34");
});


app.post("/receive", function(req, res) {
    fs.readFile("info.txt")
    .then(function(data) {
        data = data.toString().split("//");
        // console.log(data);
        const {id, password} = req.body;
        if (data[0] == id && data[2] == password) {
            // console.log("로그인 성공");
            res.send( {msg: "로그인 성공"})
            // res.send( "로그인 성공")
        }
        else {
            // console.log("아이디 혹은 비밀번호가 틀렸습니다.");
            res.send( {msg: "아이디 혹은 비밀번호가 틀렸습니다."})
        }
    })
});

app.listen(port, () => {
    console.log("Server Port : ", port);
})