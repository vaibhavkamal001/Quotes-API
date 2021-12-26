const QuoteSchema = require("../Schema/QuoteSchema");


module.exports.AddOneQuotes = async (req, res) => {
  const { quote, author = "Unknown" } = req.body;
  const str = quote.split(" ");
  const len = str.length;
  const data = QuoteSchema({
    Quote: quote,
    Author: author,
    len: len,
  });
  data.save();
  res.json({message:"Quote is Added successfully!!!"})
};
