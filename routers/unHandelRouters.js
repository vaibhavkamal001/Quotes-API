const express = require("express");
const route = express.Router();

const ExpressError = require("../utils/ExpressError");

route.all("*", (req, res, next) => {
  next(new ExpressError("page not found", 404));
});


module.exports = route;