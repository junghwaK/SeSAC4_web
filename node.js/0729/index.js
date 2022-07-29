const express = require("express");
const app = express();
const port = 8080
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done( null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits:{ fileSize: 5*1024*1024},    
});


app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", test, test2, function(req, res){
    res.render("index");
});

app.post("/upload", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    res.send("Upload");
});

app.post("/upload/array", upload.array('userfile'),  function(req,res){
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
});
//upload.array를 사용하면 input여러개 만들지 않고 여러개의 파일을 -여러개 선택- 업로드 할 수 있다. 
// 속성에 멀티플을 줘서 여러개를 올려줄 수 있다.

app.post("/upload/fields", upload.fields([{name:'userfile'},{name:'userfile2'},{name:'userfile3'}]),  function(req,res){
    console.log(req.body);
    console.log(req.files);
    res.send("Upload Array");
});
//upload.fields은 input태그를 여러개 사용해서 올린다. ex)동사무소등의 공공기관 서류올릴때 따로따로 올리는거 사용


function test(req, res, next){
    console.log( "test 함수" );
    console.log(req.path);
    req.aaa = ".....";
    next();
}

function test2(req, res, next){
    console.log( "test2 함수" );
    console.log(req.aaa);
    next();
}

app.listen(port, ()=>{
    console.log("server Port : ", port );
})

