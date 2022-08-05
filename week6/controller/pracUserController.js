const User = require("../model/pracUser");

exports.index = (req,res) => {
    res.render("pracIndex");
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

exports.post_register = async(req,res) => {
    console.log( "Controller - post_register" );
    var data = await User.post_user(req.body);
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

    if ( info[1] != req.body.Id) {
        res.send("아이디 다름");
    }else if ( info[2] != req.body.Password){
        res.send("비밀번호가 다름");
    }else{
        res.send("로그인성공!");
    }
    console.log( data );
   
}




        // const {id, password} = req.body;
        // if (data[0] == id && data[2] == password) {
            // console.log("로그인 성공");
            
            // res.send(true);
        //     res.send({msg: "로그인 성공"})
        // }
        // else {
            // console.log("아이디 혹은 비밀번호가 틀렸습니다.");
            // res.send(false);
        //     res.send({msg: "아이디 혹은 비밀번호가 틀렸습니다."})
        // }
  