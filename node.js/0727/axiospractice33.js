const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req, res){
    res.render("axiospractice33");
});

app.get("/receive", function(req,res){
    console.log( req.query );
    let message = req.query.name +"님, 회원가입 성공";
   res.send( message );
})


app.listen(port, ()=>{
    console.log("server Port : ", port );
})


