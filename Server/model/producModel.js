const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  originalPrice: { type: String, required: true },
  auctionPrice: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
