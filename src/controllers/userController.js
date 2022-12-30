const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    // console.log(data);
    if (Object.keys(data).length !== 0) {
      let savedData = await userModel.create(data);
      res.status(201).send("SUCCESFULL", savedData);
    } else {
      res.status(400).send("BAD REQUEST FROM CLIENT SIDE");
    }
  } catch (DAD) {
    console.log("ERROR:", DAD.message);
    res.status(500).send("SERVER ERROR", DAD.message);
  }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user) {
    res.send("username or the password is not corerct");
  }
  let token = jwt.sign(
    {
      userId: user._id.toString(),
    },
    "functionup-californium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ data: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) {
    return res.send({ status: false, msg: "No such user exists" });
  }
  res.send({ data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(user);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    userData,
    { new: true }
  );
  res.send({ status: updatedUser, data: updatedUser });
};

const postMessage = async function (req, res) {
  let message = req.body.message;

  let token = req.headers["x-auth-token"];
  if (!token)
    return res.send({
      status: false,
      msg: "token must be present in the request header",
    });
  let decodedToken = jwt.verify(token, "functionup-thorium");

  if (!decodedToken)
    return res.send({ status: false, msg: "token is not valid" });

  let userToBeModified = req.params.userId;

  let userLoggedIn = decodedToken.userId;

  if (userToBeModified != userLoggedIn)
    return res.send({
      status: false,
      msg: "User logged is not allowed to modify the requested users data",
    });

  let user = await userModel.findById(req.params.userId);
  if (!user) return res.send({ status: false, msg: "No such user exists" });

  let updatedPosts = user.posts;
  //add the message to user's posts
  updatedPosts.push(message);
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: user._id },
    { posts: updatedPosts },
    { new: true }
  );

  return res.send({ status: true, data: updatedUser });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
