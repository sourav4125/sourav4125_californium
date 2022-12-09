const express = require("express");
const router = express.Router();
const intro = require("./introduction");
const employee = require("./employee");
const _ = require("underscore");
// 1st problem
const name = require("../logger/logger");
// 2nd problem
const date=require("../util/helper")
// 3rd problem
const convert= require("../validator/formatter")


router.get("/test-me", function (req, res) {
  res.send("any dummy text");

  name.welcome("Sourav");
  date.printDate();
  // date.printMonth()
  date.getBatchInfo()
  convert.trim(" Viper ");
  convert.changetoLowerCase("MUSTANG GT");
  convert.changeToUpperCase('kratos')


  const month=["January","February","March","April","May","June","July","August","September","October","November","December"]
  let result=_.chunk(month,4)
  console.log(result)
  const numbers=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  let example=_.tail(numbers)
  console.log(example)

  
});

router.get("/test-you", function (req, res) {
  console.log("I am here");
  res.send("very important text");
});

module.exports = router;
