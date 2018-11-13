const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: [128, 'title is too long, max 128 letters']
  },
  city: {
    type: String,
    required: true,
    lowercase: true
  },
  street: {
    type: String,
    required: true,
    min: [4, 'too short, more than 4 letters required']
  },
  category: {
    type: String,
    required: true,
    lowercase: true
  },
  image: {
    type: String,
    required: true
  },
  bedrooms: Number,
  shared: Boolean,
  description: {
    type: String,
    required: true
  },
  dailyRate: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;
