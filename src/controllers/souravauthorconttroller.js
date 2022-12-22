const AuthorModel=require("../models/souravauthor");

const createAuthor=async function(req,res){
let author=req.body;
let authorcreated=await AuthorModel.create(author)
res.send(authorcreated)
}

const getauthorData=async function(req,res){
    let author=await AuthorModel.find()
    res.send(author)
}
module.exports.createAuthor=createAuthor;
module.exports.getauthorData=getauthorData;