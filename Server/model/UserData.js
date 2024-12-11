const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('UserData', userSchema);
