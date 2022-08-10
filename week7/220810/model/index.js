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
//함수를 실행?한거임
//model/Visitor.js에서 함수가 실행되고 return된 model.
//const a = require("./Visitor")((sequelize, Sequelize) 이게 위의 한줄의 코드임.
// require("./Visitor") .Visitor에서 modeul.exports에 잇는것을 가져온거임. 
//근데 Visitor는 함수임. const Visitor는 함수를 가져오고 실행을 시키겠다는뜻임. 실행을 하고나면
// model이 오니까 컨트롤러 마지막 코드 module에 함수가 담긴거얌

module.exports = db;