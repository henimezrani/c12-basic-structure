module.exports = new (class UserService {
  constructor() {
    this.user = require("../models/User.js");
  }
  getAll() {
    return this.user.find({});
  }
  create(payload) {
    return this.user.create(payload);
  }
  deleteAll() {
    return this.user.deleteAll();
  }
  update(_id, payload) {
    return this.user.findOneAndUpdate({ _id }, payload, {
      new: true,
      useFindAndModify: true
    });
  }
  getOne(_id) {
    return this.user.findOne({ _id });
  }
  deleteOne() {
    return this.user.findOneAndDelete({ _id }, payload, {
      useFindAndModify: true
    });
  }
})();
