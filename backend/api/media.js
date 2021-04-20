const express = require("express");
const mediaRouter = express.Router();
const { getAllMedia, getMediaById } = require("../db");

mediaRouter.get("/", async (req, res, next) => {
  try {
    const media = await getAllMedia();
    res.send(media);
  } catch ({ name, message }) {
    next({
      name: "getAllMedia",
      message: "There was an error getting Media",
    });
  }
});

mediaRouter.get("/:mediaId", async (req, res, next) => {
  try {
    const { mediaId } = req.params;
    const media = await getMediaById(mediaId);
    res.send(media);
  } catch ({ name, message }) {
    next({ name, message });
  }
});
mediaRouter.patch('/update/:mediaId', async (req, res, next) => {
     
  try {
      const order = await updateMedia(req.params);
      console.log('update media', req.params)
      res.send(order)
  } catch({name, message}) {
      next({
          name: "updateOrder",
          message: "There was an error updating order"
      })
  }


})

module.exports = mediaRouter;
