const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController");
const newBookController = require("../controllers/newcontroller");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createnewBook", newBookController.newbook);

router.get("/getnewBooksData", newBookController.getnewBooksData);

router.get("/getbyyear", newBookController.getyear);

router.get("/books", newBookController.ruppes);

router.get("/randombooks", newBookController.getRandomBooks);

module.exports = router;
