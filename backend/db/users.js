const client = require("./client");
const bcrypt = require("bcrypt");


async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(`
      SELECT *
      FROM users
      WHERE id=${id};
    `);

    if (!user) {
      return null;
    }
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserById
};