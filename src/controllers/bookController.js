const Bookmodel=require("../models/bookModel")

const createBook=async function (req,res){
    let data=req.body;
    let savedData=await Bookmodel.create(data)
    res.send(savedData)

}

const getBookdata=async function (req,res){
    let allbooks=await Bookmodel.find()
    res.send(allbooks)
}
module.exports.createBook=createBook
module.exports.getBookdata=getBookdata