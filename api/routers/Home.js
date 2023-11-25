const express = require("express");
const { faker } = require("@faker-js/faker");

const Router = express.Router();


Router.get("/", (req, res) => {
  res.send("Hola Backend");
})

Router.get("/nueva-ruta", (req, res) => {
  res.send("Bien venido a la nueva ruta")
})

module.exports = Router;
