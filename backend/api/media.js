const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken"); // not sure if needed or not
const { getAllMedia } = require("../db");

