const express = require("express");
const app = express();
const database =require("./mongo") 

app.get("/",(req,res)=>{
    res.send({
        name:"ketan patel"
    })
})
// 
//
app.listen(3000,()=>{
    console.log("Server start  on port 3000");
})