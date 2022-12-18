const newbookmodel = require("../models/newbook");

const newbook = async function (req, res) {
  let data = req.body;

  let savedData = await newbookmodel.create(data);
  res.send({ msg: savedData });
};
const getnewBooksData = async function (req, res) {
  let allBooks = await newbookmodel.find();
  res.send({ msg: allBooks });
};
const getyear = async function (req, res) {
  let yearbooks = await newbookmodel.find();
  let year = req.query.year;
  let byyear = [];
  for (let i = 0; i < yearbooks.length; i++) {
    if (yearbooks[i].year == year) {
      byyear.push(yearbooks[i]);
    }
  }
  res.send(byyear);
};

const ruppes = async function (req, res) {
  let bookbyprice = await newbookmodel.find({
    $or: [
      { "price.indian": 100 },
      { "price.indian": 200 },
      { "price.indian": 500 },
    ],
  });
  res.send(bookbyprice);
};

const getRandomBooks = async function (req, res) {
  let randombooks = await newbookmodel.find({
    $or: [{ stockAvailable: true }, { $gt: 500 }],
  });
  res.send(randombooks);
};

module.exports.getRandomBooks = getRandomBooks;
module.exports.ruppes = ruppes;
module.exports.newbook = newbook;
module.exports.getnewBooksData = getnewBooksData;
module.exports.getyear = getyear;
