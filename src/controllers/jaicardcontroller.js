const CardController= require("../models/jaikisancardmodel")


const createcard= async function (req, res) {
    let data= req.body

    let savedData= await CardController.create(data)
    res.send({msg: savedData})
}

const getcardData=async function(req,res){
    let author=await CardController.find()
    res.send(author)
}
module.exports.createcard=createcard;
module.exports.getcardData=getcardData;