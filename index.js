require("dotenv").config();

const { PORT = 3001 } = process.env;

const express = require('express');
const server = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");


server.use(express.json());
server.use(express.urlencoded({extended: true})) //browser comp?. 

server.use(morgan("dev"));

server.use(cors());

server.use(bodyParser.json());

const apiRouter = require("./backend/api");
server.use("/api", apiRouter);
const userRouter = require("./backend/api");
server.use("/user", userRouter);

const client = require("./backend/db/client");


server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
  client.connect();
});

