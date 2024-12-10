const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
});

module.exports = mongoose.model('UserData', userSchema);
