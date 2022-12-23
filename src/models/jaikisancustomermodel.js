const mongoose = require('mongoose');

const jaikisancustomer = new mongoose.Schema( {
   firstName:String,
   lastName:String,
   mobileNumber:Number,
   DOB:String,
   emailID:String,
   address:String,
   CustomerID:String,
    status:{
    type:String,
    default:"ACTIVE"
},
   
}, { timestamps: true });

module.exports = mongoose.model('JAICUSTOMER', jaikisancustomer) //users



