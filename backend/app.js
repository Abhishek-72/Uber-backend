const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const userRoute = require("./routes/userRoute.js");
const cors = require("cors");
const connectToDb = require("./Db/dB.js");
const cookieParser = require("cookie-parser");

const app = express();
connectToDb();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/users", userRoute);

module.exports = app;
