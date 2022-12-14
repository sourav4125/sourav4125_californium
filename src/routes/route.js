const express = require('express');
const router = express.Router();


// --------------------------------------->POST<--------------------------------------\\
const players=[];
router.post("/players", function (req, res) {
let body=req.body;
let playerinformation=players.find(players=>players.name===body.name) 
if(playerinformation){
  return res.send("Player has alreay been added")
}else{
  players.push(body)
  return res.send(players)
}

});

module.exports = router;