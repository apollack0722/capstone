const express = require("express");
const ordersRouter = express.Router();
const { getAllOrders, getOrdersByUserId } = require("../db");

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
ordersRouter.get('/:userId/cart', async (req, res, next) => {
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
ordersRouter.post('/add_to_cart', async (req, res, next) => {
    try{
      const order = await createOrder(req.body)
       console.log(order)
      res.send(order)
    }catch ({message}){
        next ({message});
    }
  });

module.exports = ordersRouter;