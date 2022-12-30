const jwt = require("jsonwebtoken");

const authenticate = function (req, req, next) {
  let token = req.headers["x-auth-token"];
  if (!token)
    return res.send({
      status: false,
      msg: "token must be present ",
    });

  let decodedToken = jwt.verify(token, "functionup-californium");

  if (!decodedToken) {
    res.send({ msg: "token not invalid" });
  }
  next();
};
 
const authorise = function (req, res, next) {
  let x=req.decodedToken
  let userchanged=req.params.userId
  let userLoggedIn=x.userId
  if(userchanged!=userLoggedIn){
    res.send("You are not authorised")
  } 
  next();
};
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
