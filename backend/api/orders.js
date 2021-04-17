const express = require("express");
const ordersRouter = express.Router();
const { getAllOrders, getOrdersByUserId, updateOrder, deleteOrder1} = require("../db");

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
  
  ordersRouter.patch('/:userId/:mediaId', async (req, res, next) => {
     
  try {
      const order = await updateOrder(req.params);
      console.log('set to true', req.params)
      res.send(order)
  } catch({name, message}) {
      next({
          name: "updateOrder",
          message: "There was an error updating order"
      })
  }


})
ordersRouter.delete('/:ordersId', async (req, res, next) => {
    try {
        console.log('delete route',req.params)
        const deleteOrder = await deleteOrder1((req.params))
        console.log('got here')
        res.send(deleteOrder)
    }catch ({name, message}) {
        next({
            name: "deleteOrder",
            message: "Error deleting order"
    })}
})

module.exports = ordersRouter;