const express = require("express");
const route = express.Router();

const { getAllQuote } = require("../collectors/getQuote");

route.get("/quotes", getAllQuote);

module.exports = route;
