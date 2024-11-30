const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./Db/dB.js");

const app = express();
connectToDb();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = app;
