const express = require("express");
const app = express();
const port = 8080
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "uploads" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const router = require("./routes/pracIndex");
//우리가 인덱스.js로 했기때문에 알아서 잘찾아감
app.use("/user", router);
//경로 들어오면 여기서 처리하라는 거임

app.get("/",function(req,res){
    res.send("PracIndex")
})

app.listen(port, ()=>{
    console.log("Server Port : ", port);
})
