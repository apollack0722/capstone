// require and re-export all files in this db directory
const {
    getUserById,
    createUser,
    getUser,
    getAllUsers
} = require('./users');
//add other exports

module.exports = {
    getUserById,
    createUser,
    getUser,
    getAllUsers
};