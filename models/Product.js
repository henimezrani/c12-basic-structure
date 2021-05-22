const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  title: String
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
