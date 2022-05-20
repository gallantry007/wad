var express=require("express");
var app=express();
var fs=require("fs");
app.get("/listusers",function(req,res){
    fs.readFile(__dirname+"/"+"user1.json","utf8",function(err,data){
        console.log(data);
        res.end(data);
    })
})
app.listen(3000,()=>{
    console.log("app started");
})