const apiRouter = require('express').Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const bcrypt = require("bcrypt");

const { getUserById } = require("../db/users");

apiRouter.get("/checkIn", async (req, res, next) => {
  try {
    console.log('checkin in', 'flag1')
    res.send({ message: "All is well." });
  } catch (error) {
    next(error);
  }
});

apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization")
  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
      const { id } = jwt.verify(token, JWT_SECRET);
      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

apiRouter.use((req, res, next) => {
  if (req.user) {
    console.log("User is set:", req.user);
  }
  next();
});

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const mediaRouter = require("./media");
apiRouter.use("/media", mediaRouter);

const ordersRouter = require("./orders");
apiRouter.use("/orders", ordersRouter);

module.exports = apiRouter;