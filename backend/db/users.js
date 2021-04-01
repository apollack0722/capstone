const client = require("./client");
const bcrypt = require("bcrypt");
const SALT_COUNT = 10;

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

async function createUser({username, password, userEmail}){
  const hashedPassword = await bcrypt.hash(
      password, SALT_COUNT);
  try{
      const {rows:[user]} = await client.query(`
       INSERT INTO users (username, password, "userEmail")
       VALUES ($1, $2, $3)
       ON CONFLICT (username) DO NOTHING
       RETURNING *;
      `,[username, hashedPassword, userEmail]);
      delete user.password;
      return user;
  }catch (error){
      throw error;
  }

}

async function getUser({username, password}){
  try{
      const {rows: [user]} = await client.query(`
      SELECT *
      FROM users
      WHERE username = $1
      `,[username]);
      const isMatch = await bcrypt.compare(password, user.password);
      if(isMatch === true){
          console.log('password match!');
          delete user.password;
          return user;
      } else if (isMatch === false){
          console.log('incorrect password');
      }
  }catch (error){
      throw error;
  }
}
async function getAllUsers(){
  try{
      const {rows: [user]} = await client.query(`
      SELECT *
      FROM users
      `);
      return user //rows?
  }catch (error){
      throw error;
  }
}


async function getUserByUsername(username){
  try{
      const {rows:[user]} = await client.query(`
      SELECT *
      FROM users
      WHERE username = $1;
    `,[username]);
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUserById,
  createUser,
  getUser,
  getAllUsers,
  getUserByUsername
};