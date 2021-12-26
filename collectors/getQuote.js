const QuoteSchema = require("../Schema/QuoteSchema");
let Quotes;

const updateData = async (req, res) => {
  Quotes = await QuoteSchema.find().select({
    _id: 0,
    __v: 0,
  });
};

updateData()

module.exports.getRandomQuote = (req, res) => {
  const len = Quotes.length - 1;
  const random_no = Math.floor(Math.random() * len) + 1;
  res.json(Quotes[random_no]);
};

module.exports.getAllQuote = (req, res) => {
  res.json(Quotes);
};