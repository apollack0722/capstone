const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET} = process.env;

const { getAllUsers } = require("../db");

const { requireUser } = require("./utils"); // require later in user until we have a logged in route, someone passing into the request cus no one is logged in or making a request

usersRouter.use((req, res, next) => {
    console.log("A request is being made to /users");
    next();
})

// route works, no one is logged in to hit this route because there is no user in this req
usersRouter.get('/', async (req, res, next) => {

    try { 
        //console.log(req.user);
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