// const mysql = require("mysql");
// const cnn = mysql.createConnection({
//     host: 'localhost',
//     user: 'userId',
//     password: '1234',
//     database: 'sesac'
// });

const User = (Sequelize, DataTypes ) =>{
    const model = Sequelize.define(
        'visitor',
        {
            id:{
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true
            },
            password:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name:{
                type: DataTypes.STRING(20),
                allowNull: false
            },
            age:{
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false,
            tableName: 'user',
            freezeTableName: true,
        }
    );
    return model;    
}

module.exports = Visitor;





// exports.insert = (data, cb) => {
//     const {id, password, name, age} = data;
//     var sql = `INSERT INTO user VALUES ("${id}", "${password}", "${name}", ${age})`
//     cnn.query( sql, (err, rows) => {
//         if (err) throw err;
//         cb( rows );
//     });
// }

// exports.login = (data, cb) => {
//     var sql = `SELECT * FROM user WHERE id = "${data.id}" and password = "${data.password}"`
//     cnn.query(sql, (err, rows) => {
//         if(err) throw err;
//         cb( rows );
//     })
// }