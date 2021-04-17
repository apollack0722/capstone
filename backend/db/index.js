
const {
    getUserById,
    createUser,
    getUser,
    getAllUsers,
    getUserByUsername,
    updateUser
} = require('./users');


const {
    createMedia,
    getAllMedia,
    getMediaById,
    editMedia, 
    deleteMedia
} = require('./media')

const {
    createOrder,
    getAllOrders,
    getOrdersByUserId,
    updateOrder
} = require('./orders')

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
    editMedia,
    deleteMedia
};