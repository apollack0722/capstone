const express = require("express");
const { createMedia, getAllMedia } = require("../db");
const adminRouter = express.Router();
const { updateUser } = require("./index");



adminRouter.use((req, res, next) => {
  next();
});

adminRouter.get("/", async (req, res, next) => {
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

adminRouter.post("/create", async (req, res, next) => {
  try {
    const media = await createMedia(req.body);
    res.send(media);
  } catch ({ message }) {
    next({ message });
  }
});

adminRouter.patch("/update", async (req, res, next) => {
  try {
    const newUpdateUser = await updateUser(req.body);
    res.send(newUpdateUser);
  } catch ({ message }) {
    next({ message });
  }
});

module.exports = adminRouter;
