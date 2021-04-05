const express = require("express");
const mediaRouter = express.Router();
const jwt = require("jsonwebtoken"); // not sure if needed or not
const { getAllMedia } = require("../db");



mediaRouter.get('/', async (req, res, next) => {
    try { 
        const media = await getAllMedia();
        res.send(media)
    } catch ({name, message}) {
        next({
            name: "getAllMedia",
            message: "There was an error getting Media"
        })
    }  
})


















module.exports = mediaRouter;