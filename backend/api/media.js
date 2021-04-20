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

module.exports = mediaRouter;
