// const models = require("../model"); -> 시퀄라이즈에 사용
const User = require("../model/User");

exports.index = (req,res) => {
    // index.ejs 파일 불러오기
    res.render("index");
}

exports.register = (req,res) => {
    //{ id: , name:, pw:, age: }
    console.log( req.body );
    User.register(req.body, function(result) {
        console.log(result);
        res.send(req.body);
    });
}

exports.login_page = (req, res) => {
    res.render("login");
    // user/login에 접속하면 login.ejs 파일불러오기.
}
exports.login = (req,res) => {
    //{id: , pw: }
    User.login(req.body, function(result){
        console.log(result);
        //result =rows
        if(result.length == 0){
            //length, result의 길이가 0이니까 값이 없음. 틀렸다면!
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
        //result = rows = [RowDataTable {id: ...}, {}]
        //result[0] ={id:, name:, pw:, age}
        console.log(result[0]);
        res.render("profile", {data: result[0]});
        //render는 profile을 불러와서 보여준다. data. <-으로 간다. 
    });
}

exports.edit = (req, res) => {
    // {id: , name: , pw: , email: }
    console.log(req.body);
    User.update(req.body, function(result) {
        console.log(result);
        res.send("회원정보가 수정 되었습니다.");
    });
}

exports.delete = (req, res) => {
    User.delete(req.body, function(result) {
        console.log(result);
        res.send("회원 탈퇴되었습니다.");
    });
}