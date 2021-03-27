const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET} = process.env;

const { getAllUsers } = require("../db");

const { requireUser } = require("./utils");

usersRouter.use((req, res, next) => {
    console.log("A request is being made to /users");
    next();
})


usersRouter.get('/me', requireUser, async (req, res, next) => {

    try {        
        res.send(req.user)
    } catch (error) {
        console.log(error)
        next(error);
    }
   
})
usersRouter.get(('/home', async (req, res, next) => {
    try{
        const users = await getAllUsers();
        console.log(users)
        res.send(users)
    } catch(error){
        next(error)
    }




        }
    )
);




module.exports = usersRouter;