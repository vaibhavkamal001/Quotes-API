const express = require("express");
const route = express.Router();
const Quotes = require("../Schema/QuoteSchema");

route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Quotes.findByIdAndDelete({ _id: id });
  console.log(data);
  if (!data) {
    return res.json({ message: "Invail Id" });
  }

  res.json({ message: "Quote is deleted" });
});

module.exports = route;
