const authorModel = require("../models/souravauthor");
const bookModel = require("../models/souravbook");

const createBook = async function (req, res) {
  const {name,rating,publisher,author,price}=req.body;
  if(!author){
    res.send("AUTHOR REQUIRED")
  }
  if(!publisher){
    res.send("PUBLISHER REQUIRED")
  }
  
  let book = req.body;
  let bookCreated = await bookModel.create(book);
  res.send({ data: bookCreated });
};
const getBooksData = async function (req, res) {
  let books = await bookModel.find();
  res.send({ data: books });
};
const getBooksWithBoth = async function (req, res) {
  let specificBook = await bookModel.find().populate('author').populate('publisher')
  res.send({data: specificBook})

}

module.exports.getBooksWithBoth=getBooksWithBoth
module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
