const mongoose = require('mongoose');

const newBookSchema= new mongoose.Schema( {
   
    name:String,
    author_id:{
        type:Number,
        required:true,
    },
    price:Number,
    ratings:String,



})
module.exports = mongoose.model('newBookModel', newBookSchema)











// { 
//     name:"Two states",
//     author_id:1,
//     price:50,
//     ratings:4.5,
// } ,
