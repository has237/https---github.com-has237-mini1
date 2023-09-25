const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  tokensAvailable: { type: Number, default: 0 },
  booksBorrowed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  booksLent: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
});

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);