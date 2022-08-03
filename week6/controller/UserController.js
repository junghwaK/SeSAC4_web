const User = require("../model/User");

exports.index = (req,res) => {
    res.render("index");
}

exports.register = (req,res) => {
    res.render("register");
}

// export.get_user = (req,res) => {
//     res.send("Get User");
// }


// module.exports = {
//     get_user
// };
//.get user로 찾아야한다. 

// exports.a = (req,res) => {

// }

exports.post_register = (req,res) => {
    User.post_user(req.body);
    // res.send(req.body);
    res.send("sucess");
}
//post_register 회원가입된 정보가 넘어오는곳임. 근데 직접적으로 데이터 저장하는그런건 model이 하는거임.컨트롤러는 통신만


exports.login = (req,res) => {
    res.render("login");
}

exports.post_login = async (req,res) => {
    var data = await User.get_user();

    var info = data.split("//");

    if ( info[0] != req.body.Id) {
        res.send("아이디 다름");
    }else if ( info[1] != req.body.Password){
        res.send("비밀번호가 다름");
    }else{
        res.send("로그인성공!");
    }
    console.log( data );
   
}