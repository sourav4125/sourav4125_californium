const mongoose = require('mongoose');

const authorSchema= new mongoose.Schema( {
    author_id:{
        type:Number,
        required:true,
    },
    author_name:String,
    age:Number,
    address:String,



})
module.exports = mongoose.model('AuthorModel', authorSchema)


// //     {    

// author_id:1,
// author_name:"Chetan Bhagat",
// age:25,
// address:"New delhi"
// } ,
