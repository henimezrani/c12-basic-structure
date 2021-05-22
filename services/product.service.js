module.exports = new (class UserService {
  constructor() {
    this.product = require("../models/Product.js");
  }
  getAll() {
    return this.product.find({}).populate('User');
  }
  create(payload) {
    return this.product.create(payload);
  }
  deleteAll() {
    return this.product.deleteAll();
  }
  update(_id, payload) {
    return this.product.findOneAndUpdate({ _id }, payload, {
      new: true,
      useFindAndModify: true
    }).populate('User');
  }
  getOne(_id) {
    return this.product.findOne({ _id }).populate('User');
  }
  deleteOne() {
    return this.product.findOneAndDelete({ _id }, payload, {
      useFindAndModify: true
    });
  }
})();
