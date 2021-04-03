const express = require('express');
const server = express();
const client = require("./backend/db/client");
require("dotenv").config();
const { PORT = 3001 } = process.env;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true})) //browser comp?. 
server.use(bodyParser.json());
server.use(morgan("dev"));



const apiRouter = require("./backend/api");
server.use("/api", apiRouter);

const userRouter = require("./backend/api");
server.use("/users", userRouter);

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
  client.connect();
});

