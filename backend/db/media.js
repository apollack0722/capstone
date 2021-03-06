const client = require("./client");

//media db functionality

async function createMedia({
  title,
  description,
  genre,
  buyPrice,
  rating,
  imgUrl,
}) {
  try {
    const {
      rows: [media],
    } = await client.query(
      `
      INSERT INTO media(title, description, genre, "buyPrice", rating, "imgUrl")
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `,
      [title, description, genre, buyPrice, rating, imgUrl]
    );
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
    return media;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createMedia,
  getAllMedia,
  getMediaById,
};
