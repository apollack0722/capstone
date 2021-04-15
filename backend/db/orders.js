const client = require("./client");

async function createOrder({userId, mediaId, date, purchased, rental}){
    try{
        const {rows:[order]} = await client.query(`
         INSERT INTO orders ("userId", "mediaId", date, purchased, rental)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *;
        `,[userId, mediaId, date, purchased, rental]);
        return order;
    }catch (error){
        throw error;
    }
}
async function getAllOrders() {
    try {
        const { rows } = await client.query(`
          SELECT * 
          FROM orders;
        `);
        return rows;
      } catch (error) {
        throw error;
      }
};
async function getOrdersByUserId(userId) {
    try {
      const { rows } = await client.query(`
      SELECT * 
      FROM orders
      JOIN media
      ON orders."mediaId" = media.id 
      WHERE "userId" = $1;
    `,[userId]);
    console.log(rows)
    return rows;
    } catch (error) {
        throw error;
    }
}
async function updateOrder ({userId, mediaId, date, purchased}){
  try{
  const {rows: [order]} = await client.query(`
   UPDATE orders
   SET mediaId = $2, date = $3, purchased = $4
   WHERE id=$1
   RETURNING*;   
  `,[id, name, description]);
  return order;
}catch (error){
  throw error;
}
}
module.exports = {
    createOrder,
    getAllOrders,
    getOrdersByUserId
}


// Join media onto orders where orders.mediaId = media.id
    //

    // SELECT * 
    // FROM order
    // INNER JOIN media
    // ON media.Id = orders.mediaId


    // SELECT * 
    // FROM media
    // INNER JOIN orders 
    // ON media.Id = orders.mediaId