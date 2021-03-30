// require and re-export all files in this db directory
const {
    getUserById,
    createUser,
    getUser,
    getAllUsers,
    getUserByUsername
} = require('./users');
//add other exports

const {
    createMedia,
    getAllMedia
} = require('./media')

const {
    createOrder,
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
};