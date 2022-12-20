const authorModel = require("../models/authorModel");
const newBookModel = require("../models/newbookModel");

const createAuthor = async function (req, res) {
  let data = req.body;

  let savedData = await authorModel.create(data);
  res.send({ msg: savedData });
};

const createNewbook = async function (req, res) {
  let data = req.body;

  let savedData = await newBookModel.create(data);
  res.send({ msg: savedData });
};

const getbyname = async function (req, res) {
  let authormodels = await authorModel.find();
  let authornames = req.query.authornames;
  let booklist = await newBookModel.find();
  let count = "";
  let totalbooks = [];
  for (let i = 0; i < authormodels.length; i++) {
    if (authormodels[i].author_name == authornames) {
      count = count + authormodels[i].author_id;
    }
  }
  for (let i = 0; i < booklist.length; i++) {
    if (booklist[i].author_id == count) {
      totalbooks.push(booklist[i].name);
    }
  }
  res.send(totalbooks);
};
const updatePrice = async function (req, res) {
  let booklist = await newBookModel.findOneAndUpdate(
    { name: "Two states" },
    { $set: { price: 100 } },
    { new: true }
  );
  res.send(booklist);
};

module.exports.updatePrice = updatePrice;
module.exports.getbyname = getbyname;
module.exports.createAuthor = createAuthor;
module.exports.createNewbook = createNewbook;
