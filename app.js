const express = require('express');
const bodyParser = require('body-parser');
//const ejs = require('ejs');

var app = express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
var items=[];

var ex ="done";
app.get("/",(req,res)=>{
    res.render("list",{ejes:items});
});

app.post("/",(req,res)=>{
   var item = req.body.e1;
   items.push(item);
   res.redirect("/");
});



app.listen(8000,function(){
    console.log("Server Started");
});