const client = require("./client");

async function createOrder({ userId, mediaId, date, purchased }) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
         INSERT INTO orders ("userId", "mediaId", date, purchased)
         VALUES ($1, $2, $3, $4)
         RETURNING *;
        `,
      [userId, mediaId, date, purchased]
    );
    return order;
  } catch (error) {
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
}
async function getOrdersByUserId(userId) {
  try {
    const { rows } = await client.query(
      `
      SELECT * 
      FROM orders
      JOIN media
      ON orders."mediaId" = media.id 
      WHERE "userId" = $1;
    `,
      [userId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}
async function updateOrder({ userId, mediaId }) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
   UPDATE orders
   SET purchased = true
   WHERE "userId"=$1 AND "mediaId" = $2
   RETURNING *;   
  `,
      [userId, mediaId]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

async function deleteOrder1({ ordersId }) {
  try {
    await client.query(
      `
    DELETE
    FROM orders
    WHERE id = $1;
    `,
      [ordersId]
    );
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createOrder,
  getAllOrders,
  getOrdersByUserId,
  updateOrder,
  deleteOrder1,
};
