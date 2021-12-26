const QuoteSchema = require("../Schema/QuoteSchema");

module.exports.findQuotes = async (req, res, next) => {
  const { quote } = req.body;
  const Data = await QuoteSchema.find({
    Quote: quote,
  });

  if (Data.length!==0) {
    return res.json({ message: "Quote is already present" });
  }

  next();
};
