
// var personSchema = new Schema({
//     name: { type: String, default: 'anonymous' },
//     age: { type: Number, min: 18, index: true },
//     bio: { type: String, match: /[a-zA-Z ]/ },
//     date: { type: Date, default: Date.now },
// });

// var personModel = mongoose.model('Person', personSchema);

// var comment1 = new personModel({
//     name: 'Witkor',
//     age: '29',
//     bio: 'Description',
// });

// comment1.save(function (err, comment) {
//     if (err) console.log(err);
//     else console.log('fallowing comment was saved:', comment);
// });
const mongoose = require("mongoose");
global.mongooseSchema = mongoose.Schema;
const PostSchema = new mongooseSchema({
     title: {
        type:String,
        require:true
     },
     content :{
         type:String,
         require : true
     }
})
var Post = mongoose.model("Post",PostSchema)
module.export =  Post

 


