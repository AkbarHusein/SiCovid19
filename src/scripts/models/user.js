const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  name: String,
  email: {
    type: String,
  },
  passwordHash: String,
  entries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entry',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
