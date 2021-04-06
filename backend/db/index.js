
const {
    getUserById,
    createUser,
    getUser,
    getAllUsers,
    getUserByUsername
} = require('./users');


const {
    createMedia,
    getAllMedia,
    getMediaById,
} = require('./media')

const {
    createOrder,
    getAllOrders,
    getOrdersByUserId
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
};