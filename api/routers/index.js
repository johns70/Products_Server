const express = require("express");
const Router = express.Router();

const productsRouter = require("./products");
const userRouter = require("./user");
const categoriesRouter = require("./category");
const homeRouter = require("./Home")


function routerApi(app) {
 app.use("/api/v1", Router)
  Router.use("/products", productsRouter)
  Router.use("/users", userRouter)
  Router.use("/categories", categoriesRouter)
  Router.use("/", homeRouter)
}


module.exports = routerApi;
