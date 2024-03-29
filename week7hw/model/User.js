const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

// const User = (Sequelize, DataTypes ) =>{
//     const model = Sequelize.define(
//         'visitor',
//         {
//             id:{
//                 type: DataTypes.STRING(20),
//                 allowNull: false,
//                 primaryKey: true
//             },
//             password:{
//                 type: DataTypes.STRING(20),
//                 allowNull: false,
//             },
//             name:{
//                 type: DataTypes.STRING(20),
//                 allowNull: false
//             },
//             age:{
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             }
//         },
//         {
//             timestamps: false,
//             tableName: 'user',
//             freezeTableName: true,
//         }
//     );
//     return model;    
// }

// module.exports = Visitor;





exports.insert = (data, cb) => {
    const {id, password, name, age} = data;
    var sql = `INSERT INTO user VALUES ("${id}", "${password}", "${name}", ${age})`
    cnn.query( sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
        //rows = Okpacket 객체로 우리가 필요로 하는 정보는 담겨져 있지 않다. 
    });
}

exports.login = (data, cb) => {
    //id와 pw가 일치하는 정보 가져온다.(id는 primary key로 중복이 안되므로 하나밖에 없다.)
    var sql = `SELECT * FROM user WHERE id = "${data.id}" and password = "${data.password}"`
    cnn.query(sql, (err, rows) => {
        if(err) throw err;
        cb( rows );
        //rows =[RowDataPacket {name:, id:, pw:, email:}]
    })
}

//data = req.body, cb = function(result){}
exports.get_user = (data, cb) => {
    //id가 일치하는 정보 가져오기
    let sql = `SELECT * from user WHERE id = "${data.id}"`
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        //rows = [RowDataPacket {id: , name: , pw: , email: }]
        cb( rows );
    })
}

exports.update = (data, cb) =>  {
    let sql = `UPDATE user SET name = "${data.name}", pw = "${data.Password}", age = "${data.age}" WHERE id = "${data.Id}"`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
    })
}

exports.delete = (data, cb) =>  {
    //id가 data.id인 정보를 지운다
    let sql = `DELETE from user WHERE id = "${data.Id}"`;
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        cb( rows );
    })
}