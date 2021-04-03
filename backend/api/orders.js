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
ordersRouter.get('/:username/cart', async (req, res, next) => {
    const { userId } = req.params;
    try { 
        const myOrders = await getOrdersByUserId(userId);
        res.send(myOrders)
    } catch ({name, message}) {
        next({
            name: "My Orders",
            message: "There was an error getting orders"
        })
    }  
})

module.exports = ordersRouter;