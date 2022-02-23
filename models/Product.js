const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
    Default: 0,
  },
  url: {
    type: String,
  },
  category: {
    type: String,
  },
  stock: {
    type: Number,
  },
  numOfReview: {
    type: Number,
    default: 0,
  },
  review: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
