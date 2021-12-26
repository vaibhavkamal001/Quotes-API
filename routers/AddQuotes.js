const express = require("express");
const route = express.Router();
const { AddOneQuotes } = require("../collectors/AddOneQuotes");
const { findQuotes } = require("../middleware/findQuote");

const catchAsync = require("../utils/catchError");
const { validQuote } = require("../validate");

route.post("/quote", validQuote, findQuotes, catchAsync(AddOneQuotes));

module.exports = route;
