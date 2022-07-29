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
            done(null, req.body.Id + ext);
        },
    }),
    limits:{ fileSize: 5*1024*1024},    
});

app.set("view engine", "ejs");
app.use( express.static( "uploads" ));
//& 정적(static) 이미지는 "uploads" 폴더에서 가져온다. 
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

//^
app.get("/", function(req, res){
    res.render("fileupload36");
});


//^
app.post("/receive", upload.single('userfile'), function(req,res){
    console.log(req.body);
    console.log(req.file);
    res.render("receive", {filename: req.file.filename});
})
//폼전송해서 넘어감. 동적폼 전송을 하지않았기 때문에 /receive 경로임. 그리고 아래의 "receive"는 내가 설정한ejs 파일이름임. 내마음대로조정가능


app.listen(port, ()=>{
    console.log("server Port : ", port );
})

