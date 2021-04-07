const express = require("express");
const { createMedia, getAllMedia } = require("../db");
const adminRouter = express.Router();


adminRouter.use((req, res, next) => {
  console.log("A request is being made to /admin");
  next();
})

adminRouter.get('/', async (req, res, next) => {
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

adminRouter.post('/create', async (req, res, next) => {
  
  try{
    const media = await createMedia(req.body)
     console.log(media)
    res.send(media)
  }catch ({message}){
      next ({message});
  }
});





module.exports = adminRouter;