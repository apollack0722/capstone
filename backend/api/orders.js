const express = require("express");
const ordersRouter = express.Router();


const {
  getAllOrders,
  getOrdersByUserId,
  updateOrder,
  deleteOrder1,
  createOrder,
} = require("../db");

ordersRouter.use((req, res, next) => {
  next();
});

ordersRouter.get("/", async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.send(orders);
  } catch ({ name, message }) {
    next({
      name: "getAllOrders",
      message: "There was an error getting orders",
    });
  }
});

ordersRouter.get("/:userId/cart", async (req, res, next) => {
  const { userId } = req.params;
  try {
    const myOrders = await getOrdersByUserId(userId);
    res.send(myOrders);
  } catch ({ name, message }) {
    next({
      name: "My Orders",
      message: "There was an error getting orders",
    });
  }
});

ordersRouter.post("/add_to_cart", async (req, res, next) => {
  try {
    const order = await createOrder(req.body);
    res.send(order);
  } catch ({ message }) {
    next({ message });
  }
});

ordersRouter.patch("/:userId/:mediaId", async (req, res, next) => {
  try {
    const order = await updateOrder(req.params);
    res.send(order);
  } catch ({ name, message }) {
    next({
      name: "updateOrder",
      message: "There was an error updating order",
    });
  }
});

ordersRouter.delete("/:ordersId", async (req, res, next) => {
  try {
    const deleteOrder = await deleteOrder1(req.params);
    res.send(deleteOrder);
  } catch ({ name, message }) {
    next({
      name: "deleteOrder",
      message: "Error deleting order",
    });
  }
});

module.exports = ordersRouter;
