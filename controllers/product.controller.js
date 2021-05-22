const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const products = await services.productService.getAll();
      res.send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const product = await services.productService.create(req.body);
      res.send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const products = await services.productService.deleteAll();
      res.send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const product = await services.productService.update(
        req.params._id,
        req.body
      );
      res.send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const product = await services.productService.getOne(req.params._id);
      res.send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteOne(req, res) {
    try {
      const product = await services.productService.deleteOne(req.params._id);
      res.send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};
