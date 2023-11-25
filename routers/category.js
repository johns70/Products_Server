const express = require("express");
const { faker } = require("@faker-js/faker");

const Router = express.Router();

Router.get("/:categoryId/product/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})


module.exports = Router;
