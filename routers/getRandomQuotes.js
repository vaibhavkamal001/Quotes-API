const express = require("express");
const route = express.Router();

const catchAsync = require("../utils/catchError");
const { getRandomQuote } = require("../collectors/getQuote");

route.get("/quote", getRandomQuote);

module.exports = route;
