const client = require("./client");

async function createMedia({title, description, genre, rentalPrice, buyPrice, rating, imgUrl}) {
    try {
        const { rows: [media] } = await client.query(`
            INSERT INTO media(title, description, genre, "rentalPrice", "buyPrice", rating, "imgUrl")
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
       `, [title, description, genre, rentalPrice, buyPrice, rating, imgUrl])
        return media;
    } catch (error) {
        throw error;
    }
}
async function getAllMedia() {
    try {
        const { rows } = await client.query(`
          SELECT * 
          FROM media;
        `);
        return rows;
      } catch (error) {
        throw error;
      }
}

async function getMediaById(id) {
    try {
      const {
        rows: [media],
      } = await client.query(
        `
        SELECT *
        FROM media
        WHERE id=$1;
      `,
        [id]
      );
        console.log(media.title)
      return media;
    } catch (error) {
      throw error;
    }
  }
  

  



module.exports = {
    createMedia,
    getAllMedia,
    getMediaById,
}