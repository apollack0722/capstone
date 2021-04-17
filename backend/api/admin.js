const express = require("express");
const { createMedia, getAllMedia, editMedia, deleteMedia } = require("../db");
const adminRouter = express.Router();
const { requireAdmin } = require("./utils")
const { updateUser } = require("./index")
//how do I use require admin here

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

adminRouter.patch('/update', async(req, res, next) => {
  try{
    const newUpdateUser = await updateUser(req.body)
      console.log(newUpdateUser)
      res.send(newUpdateUser)
  }catch ({message}){
    next ({message});
  }
})

adminRouter.patch('/editMedia/:mediaId', async(req, res, next) => {
  try{
    console.log("patch", req.body)
    const updateMedia = await editMedia(req.body)
      console.log(updateMedia)
      res.send(updateMedia)
  }catch ({message}){
    next ({message});
  }
})

adminRouter.delete('/deleteMedia/:mediaId', async(req, res, next) => {
  try{
    console.log("delete", req.body)
    const deleteMedia = await deleteMedia(req.body)
      console.log(deleteMedia)
      res.send(deleteMedia)
  }catch ({message}){
    next ({message});
  }
})

module.exports = adminRouter;