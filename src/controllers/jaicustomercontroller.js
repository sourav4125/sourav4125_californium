const CustomerController=require("../models/jaikisancustomermodel")

const createcustomer= async function (req, res) {
    let data= req.body
     let savedData= await CustomerController.create(data)
    res.send({msg: savedData})
}

const getcustomerData=async function(req,res){
    let author=await CustomerController.find({status:"ACTIVE"})
    res.send(author)
}
module.exports.createcustomer=createcustomer;
module.exports.getcustomerData=getcustomerData;