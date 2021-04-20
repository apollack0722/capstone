const {
  getUserById,
  createUser,
  getUser,
  getAllUsers,
  getUserByUsername,
  updateUser,
} = require("./users");

const { createMedia, getAllMedia, getMediaById } = require("./media");

const {
  createOrder,
  getAllOrders,
  getOrdersByUserId,
  updateOrder,
  deleteOrder1,
} = require("./orders");

module.exports = {
  getUserById,
  createUser,
  getUser,
  getAllUsers,
  createMedia,
  createOrder,
  getAllMedia,
  getUserByUsername,
  getAllOrders,
  getOrdersByUserId,
  getMediaById,
  updateUser,
  updateOrder,
  deleteOrder1,
};
