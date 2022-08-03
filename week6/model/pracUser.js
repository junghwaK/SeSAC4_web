const fs = require("fs").promises;

exports.post_user = function( data ){
    console.log( "data : ", data );
    const {name, Id, Password, age} = data;
    fs.appendFile('./info.txt', name + "//" + Id + "//" + Password + "//" + age + '151515\n'); 
}
//파일은 쓸 수있는데 정보를 전달해주어야 쓰겠지.

exports.get_user = async function(){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}