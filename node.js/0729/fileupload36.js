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
//& 동적 이미지는 "uploads" 폴더에서 가져온다. 
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


app.listen(port, ()=>{
    console.log("server Port : ", port );
})

