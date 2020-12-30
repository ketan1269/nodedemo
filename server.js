const express = require("express");
const app = express();
const mongoose = require("mongoose")
// database connection 
const database =require("./mongo") 


//models vdo 3
require("./models/Post")

const post= mongoose.model("test");

app.get("/post" , async (req, res) =>{
        try {
            const posts = await Post.find({});
            res.send(posts);
        } catch (error) {
            res.status(5000);
        }
    })

// app.get("/" ,(req,res)=>{
//     res.send("welcome home ");
// })


app.listen(3000,()=>{
    console.log("Server start  on port 3000");
})