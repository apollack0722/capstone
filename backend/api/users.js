const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {
  getAllUsers,
  createUser,
  getUserByUsername,
  getUser,
} = require("../db");

usersRouter.use((req, res, next) => {
  next();
});

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/home", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  const _user = await getUserByUsername(username);
  try {
    if (password.length < 8) {
      next({
        message: "Password is too short",
      });
    } else if (_user) {
      next({
        message: "A user by that username already exists",
      });
    } else {
      const user = await createUser(req.body);
      res.send({ user });
    }
  } catch ({ message }) {
    next({ message });
  }
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const user = await getUser({ username, password });
  try {
    if (user) {
      const token = jwt.sign(
        {
          username: user.username,
        },
        JWT_SECRET
      );
      res.send({ token: token, message: "Signed in", user });
      res.send({ message: "Signed in", user });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = usersRouter;
