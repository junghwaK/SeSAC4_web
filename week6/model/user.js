const fs = require("fs").promises;

exports.post_user = function( data ){
    console.log( data );
    fs.writeFile('./info.txt', data.name + "//" + data.Id + "//" + data.Password + "//" + data.age , err => {
        if (err) {
            console.error(err)
            return
        }
    }) 
}
//파일은 쓸 수있는데 정보를 전달해주어야 쓰겠지.

exports.get_user = async function(){
    var buffer = await fs.readFile("./info.txt");
    return buffer.toString();
}