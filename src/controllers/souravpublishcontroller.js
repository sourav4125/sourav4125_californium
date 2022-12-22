const PublishModel=require("../models/souravpublisher")


const createPublish=async function(req,res){
    let publish=req.body;
    let publishCreated=await PublishModel.create(publish)
    res.send(publishCreated)
}

const getPublisherData=async function(req,res){
    let publisher=await PublishModel.find()
    res.send(publisher)
}

module.exports.createPublish=createPublish;
module.exports.getPublisherData=getPublisherData;