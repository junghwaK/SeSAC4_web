// const User = require("../model/User");
const models = require("../model");

exports.main = (req,res) => {
    // index.ejs 파일 불러오기
    res.render("index");
}

exports.post_register = (req,res) => {
    //{ id: , name:, pw:, email: }
    console.log( req.body );
    User.insert(req.body, function(result) {
        console.log(result);
        res.send(req.body);
        alert("성공적으로 회원가입 되었습니다.")
    });
}

exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = (req, res) => {
    console.log(req.body);
    User.login(req.body, function(result) {
        console.log(result);
        if (result.length == 0) {
            res.redirect("/user/login");
        } else {
            res.render("profile", {result: result[0]});
        }
        
    });
}

exports.login_page = (req, res) => {
    res.render("login");
    // user/login에 접속하면 login.ejs 파일불러오기.
}
exports.Login = (req,res) => {
    User.login(req.body, function(result){
        console.log(result);
        //result =rows
        if(result.length == 0){
            //result = [] 즉, 일치하는 정보를 찾지 못했을 경우
            res.send(false);
        } else{
            res.send(true);
        }
    });
}

exports.profile = (req, res) => {
    //일반 폼 전송으로 <input name="id">만 존재한다.
    //{id: }
    console.log(req.body);
    User.get_user(req.body, function(result){
        //result = row
        //result[0] ={id:, name:, pw:, age}
        console.log(result[0]);
        res.render("profile", {data: result[0]});
    });
}