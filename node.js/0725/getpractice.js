const express = require("express");
const app = express();
const port = 8080
const bodyParser = require("body-parser");
const fs = require('fs');

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req, res){
    res.render("getpractice");
});

app.get("/receive", function(req, res){
    console.log("receive-get");
    res.render("getpractice");
});

app.post("/receive", function(req,res){
    console.log(req.body);
    
    fs.writeFile('./info.txt', req.body.name + "//" + req.body.Id + "//" + req.body.Password, err => {
        if (err) {
            console.error(err)
            return
        }
    })
    res.render("receive", req.body);
})

app.listen(port, ()=>{
    console.log("server Port : ", port );
})