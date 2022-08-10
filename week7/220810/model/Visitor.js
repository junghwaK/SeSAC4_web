const Visitor = ( Sequelize, DataTypes ) =>{
    const model = Sequelize.define(
        'visitor',
        {
            // create ~~ (id int not null primary key, auto_increment 등등이 있는데 우리가 
            //테이블 만든거랑 동일해야한다. )
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name:{ //name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false,

            },
            comment:{ //comment mediumtext, 만약 내가 logtext였다면 medium대신long을 쓴다. 
                //not null 없으면 true쓰거나 걍 안써도 된다. 
                type: DataTypes.TEXT('medium')
            }
        },
        {
            timestamps: false,
            //ture로 지정하게 되면 등록된 사건과 수정된 시간을 갖는 칼럼이 만들어진다. 
            //자동으로 타임스탬프를 찍으려 하는데, 그걸 막는거임 우리컬럼에는 그런게 없으니까.
            tableName: 'visitor',
            freezeTableName: true,
            //이름을 복수로 정의하지 않는다.모델이름에 다 s를 붙이려한다. 
            //시퀄라이즈 특임.이걸 true로 하면 복수x. 테이블이름을 바꾸지말라 설정함.
        }

    );
    return model;
    //만든친구들을 내보내야지.
    //리턴한 친구들은 model - index.js. 거기에 있는 \
    //db.Visitor = require("./Visitor")(sequelize, Sequelize); 여기로 간거임. 저 모델이 비지터로 간거래
   
}

module.exports = Visitor;