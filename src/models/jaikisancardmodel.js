const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const jaikisancard = new mongoose.Schema(
  {
    cardNumber: String,
    cardType: ["Regular", "Special"],
    customerName: String,
    status: {
      type: String,
      default: "ACTIVE",
    },
    vision: String,
    customerID: {
      type: ObjectId,
      ref: "JAICUSTOMER",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JAICARD", jaikisancard); //users
