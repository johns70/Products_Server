const express = require("express");
const Router = express.Router();

const ProductService = require("../service/productService");
const validatorHandler = require("../midlewares/validatorHandler");
const { createProductSchema, updateAllProductSchema ,updateProductSchema, getProductSchema } = require("../schemas/productSchema");

const service = new ProductService();

Router.get("api/Example", async (req, res) => {

 await res.json([
    {
      name: "product 1",
      precio: 1000,
    },
    {
      name: "product 2",
      precio: 2000,
    }
  ])
})

Router.get("api/", async(req, res) => {
  try {
    const products = await service.find();
    res.json(products)
  } catch (error) {
      res.status(404).json({
        message: error.message
      });
  }
})

Router.get("/:id",
validatorHandler(getProductSchema, "params"),
async(req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product)
  } catch(error) {
    next(error)
  }
}
)




Router.post("/create",
validatorHandler(createProductSchema, "body"),
async(req, res, next) => {
  try {
    const { body } = req;
    const newProduct = await service.create(body)
    res.status(201).json({
      message: "product created",
      data: newProduct
    })
  } catch (error) {
    next(error)
  }
})

Router.put("/update/all-product/:id",
validatorHandler(getProductSchema, "params"),
validatorHandler(updateAllProductSchema, "body"),
async(req, res, next) => {

  try {
    const { id } = req.params;
    const { body } = req

    const Changes = await service.update(id, body)

    res.json({
      message: "All products Update",
      Changes
    })
  }  catch (error) {
    next(error)
  }

})

Router.patch("/update/resource/:id",
validatorHandler(getProductSchema, "params"),
validatorHandler(updateProductSchema, "body"),
async(req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const Change = await service.update(id, body)
    res.json({
      message: "Resorce of Products updated",
      Change
    })
  } catch (error) {
    next(error)
  }
})

Router.delete("/eliminet/:id",
validatorHandler(getProductSchema, "params"),
async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await service.delete(id);
    res.json({
      message: "product has Elimined",
      deleteProduct
    })
  }  catch (error) {
    next(error)
  }

})

module.exports = Router;
