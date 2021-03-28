const client = require("./client");

async function createMedia({title, description, genre, rentalPrice, buyPrice, rating}) {
    try {
        const { rows: [media] } = await client.query(`
            INSERT INTO media(title, description, genre, "rentalPrice", "buyPrice", rating)
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
       `, [title, description, genre, rentalPrice, buyPrice, rating])
        return media;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createMedia
}