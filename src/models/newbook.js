const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true
  },
  price: {
    indian: Number,
    european: Number
  },
  year: {
    type: Number,
    default: 2021
  },
  tags: [String],
  authorName: String,
  totalPages: Number,
  stockAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports= mongoose.model('newBook', bookSchema);


