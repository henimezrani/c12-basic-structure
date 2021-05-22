const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const users = await services.userService.getAll();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const user = await services.userService.create(req.body);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const users = await services.userService.deleteAll();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const user = await services.userService.update(req.params._id, req.body);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const user = await services.userService.getOne(req.params._id);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteOne(req, res) {
    try {
      const user = await services.userService.deleteOne(req.params._id);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};
