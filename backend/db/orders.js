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

        // Needs work
// async function getOrdersByUserId({userId}) {
//     try {
     
//     return routines;
//     } catch (error) {
//         throw error;
//     }
// }


module.exports = {
    createOrder,
    getAllOrders

}