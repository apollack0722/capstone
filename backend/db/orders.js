const client = require("./client");

async function createOrder({userId, mediaId, date, count, purchased, rental}){
    try{
        const {rows:[order]} = await client.query(`
         INSERT INTO orders ("userId", "mediaId", date, count, purchased, rental)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *;
        `,[userId, mediaId, date, count, purchased, rental]);
        return order;
    }catch (error){
        throw error;
    }
}

module.exports = {
    createOrder
}