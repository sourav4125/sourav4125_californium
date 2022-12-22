const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    Name: String,
    age: Number,
    address: String,
    rating: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("authormodel", authorSchema);
