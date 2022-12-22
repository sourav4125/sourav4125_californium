const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema(
  {
    Name: String,
    headQuarters: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("publishermodel", publisherSchema);
