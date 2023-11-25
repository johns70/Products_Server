const express = require("express");
const Router = express.Router();

const { faker } = require("@faker-js/faker");


Router.get("/:userId/user_name/:userName/details/product/:productId/:productName/category/:categoryId/:categoryName", (req, res) => {
  const { userId, userName, productId, productName, categoryId, categoryName } = req.params;
  res.json({
    userId,
     userName,
     productId,
     productName,
     categoryId,
     categoryName
  })
})


module.exports = Router;
