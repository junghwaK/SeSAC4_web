const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

//const a require(../config/config.json);
//const a {"development" : {}

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);
// Sequelize라는 객체에 input이라는 함수가 있다고 한다.면... 이해를 못했나본데? 아무튼 번거로운 작업을
//하지 않기위해서 아래처럼 해줘야한다. 그럼 다른곳에서 안함.



db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);


module.exports = db;