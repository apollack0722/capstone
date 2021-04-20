const client = require("./client");

async function createMedia({title, description, genre, buyPrice, rating, imgUrl}) {
  try {
    const { rows: [media] } = await client.query(`
      INSERT INTO media(title, description, genre, "buyPrice", rating, "imgUrl")
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `, [title, description, genre,buyPrice, rating, imgUrl])
    return media;
  }catch (error) {
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
      return media;
    } catch (error) {
      throw error;
    }
  }

  async function updateMedia({id, title, description, genre, buyPrice, rating, imgUrl}) {

    try {
      const {rows: [media] } = await client.query(`
        UPDATE media 
        SET title = $1, description = $2, genre = $3, buyPrice = $4, rating = $5, imgUrl = $6
        WHERE id = $1;
        RETURNING *;
      
      `[id, title,description, genre, buyPrice, rating, imgUrl])
    
      return media;
    } catch (error){
      throw error;
    }
  }
module.exports = {
    createMedia,
    getAllMedia,
    getMediaById,
    updateMedia
}