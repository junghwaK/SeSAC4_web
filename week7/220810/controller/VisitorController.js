const models = require("../model");

exports.get_visitors = (req,res) => {
    models.Visitor.findAll()
    .then((result) => {
        //   console.log( "result : ", result );
        console.log( "index" );
        console.log( result[0] );
        console.log(  result[0].id );
        res.render("index", { data: result });
    });
}

exports.post_comment = (req,res) => {
//     console.log( req.body );

//     Visitor.insert( req.body.name, req.body.comment, function( result ){
//         res.send({ id: result });
//     } );
    let object= {
        name: req.body.name,
        comment:req.body.comment
    }
    //create() -> insert into visitor
    //create({nmae:'hong', comment:'gildong'})
    //-> insert into visitor(name, comment) values('hong','gildong')
    models.Visitor.create(object)
    //create안에는 어떤 객체인지()안에 꼭 넣어주어야한다. promise니까 당연 .then
    .then((result) => {
        //res.rend
        console.log(result);
        res.send({id: result.id});
    })
}

//get_visitor는 하나의 데이터만 검색을 한거임
exports.get_visitor = (req,res) => {
    //select*from visitor where id = req.qurey.id limit 1
    models.Visitor.findOne({
        //one은 하나만 찾으니까 조건이 필요한거임. 함수가 리턴하는 방식의 차이all과 one
        //findone 은 visitor 에서 하나만 적혀서 온거임. findall은 배열에 담겨서 온다. one 은 하나의 data만옴.
        where:{ id: req.query.id, name:"홍길동"}
        //where에서 ,를 사용하면 and조건이 되는거임.
    }).then((result) => {
        console.log( result );
        res.send( {result : result} );
    })
//     Visitor.get_visitor( req.query.id, function(result) {
//         console.log( "result : ", result );
//         res.send( { result : result[0] } );
// =>>위랑 비교해서 봐봐, mysql은 항상[]으로 오는 배열이었잖아. 근데 시퀄라이즈는 아닌거임.

}

exports.patch_comment = (req,res) => {
//     Visitor.update( req.body, function(result){
//         console.log( result );
//         res.send( "수정 성공" );
//     });

//업데이트하니까 update 함수를 사용함.
//업데이트는 내가 수정할 내용을 보내준다. 
//
    let newObj ={
        name : req.body.name,
        comment : req.body.comment
    };
    //첫번째로 내가 바꾸고자하는 내용을 적어준다. newOgj, 그리고 조건
    //updqte visitor ser nmae=req.body.namem, comment : req.body.comment where id = req.body.id;
    //아래의 문법만 잘 기억하면 업데이트는 쉽다. 
    models.Visitor.update( newObj, {where: { id: req.body.id}})
    .then((result) =>{
        //promise니까 업데이트 성공했다면 result 찍고 수정성공 보내라
        console.log( result );
        res.send('수정성공');
    })
}

exports.delete_comment = (req,res) => {
//     Visitor.delete( req.body.id, function(result){
//         console.log( result );
//         res.send( "삭제 성공" );
    models.Visitor.destroy({
        where: { id: req.body.id }
        //여기의 where은 뭘까 : 이친구와 update는 내가 몇개를 업뎃하고 삭제하는지 갯수를 보내준다.
        //우리가 정하는게 아니라 그냥 그 함수들의 특징임. 그렇게 리턴을 해준다. 
    }).then((result) => {
        console.log( result );
        res.send("삭제성공");
    })
}