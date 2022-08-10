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