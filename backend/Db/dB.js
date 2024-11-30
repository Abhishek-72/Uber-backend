const mongoose = require("mongoose");
function connectToDb() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => console.log("Error connecting to the database:", err));
}
module.exports = connectToDb;
