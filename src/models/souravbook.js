const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: String,
    author: {
      type: ObjectId,
      ref: "authormodel",
    },
    price: Number,
    rating: Number,
    publisher: {
      type: ObjectId,
      ref: "publishermodel",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SouravBook", bookSchema);
