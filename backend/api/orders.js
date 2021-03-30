const express = require("express");
const ordersRouter = express.Router();



const { getAllOrders } = require("../db");


ordersRouter.use((req, res, next) => {
  console.log("A request is being made to /orders");
  next();
})


ordersRouter.get('/', async (req, res, next) => {

    try { 
        const orders = await getAllOrders();
        res.send(orders)
    } catch ({name, message}) {
        next({
            name: "getAllOrders",
            message: "There was an error getting orders"
        })
    }  
})







module.exports = ordersRouter;