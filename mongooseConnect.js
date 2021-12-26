const mongoose = require("mongoose");

const { dbURL = "mongodb://localhost:27017/quoteDB" } = process.env;

module.exports.connectMongo = function () {
  mongoose
    .connect(dbURL)
    .then(console.log("Database connected"))
    .catch((e) => console.log(e));
};
