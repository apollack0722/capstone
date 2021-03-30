const express = require("express");
const ordersRouter = express.Router();



ordersRouter.use((req, res, next) => {
  console.log("A request is being made to /orders");
  next();
})








module.exports = ordersRouter;