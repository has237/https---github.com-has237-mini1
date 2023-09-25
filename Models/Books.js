const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  author: String,
  genre: String,
  isBookAvailable: Boolean,
  description: String,
  lentByUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  currentlyBorrowedByUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Book', bookSchema);