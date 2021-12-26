const mongoose = require("mongoose");

const QuoteSchema = require("./Schema/QuoteSchema");
const { Quotes } = require("./Quotes/Quotes");

const { dbURL = "mongodb://localhost:27017/quoteDB" } = process.env;

mongoose
  .connect(dbURL)
  .then(console.log("Database connected"))
  .catch((e) => console.log(e));

const seedDB = async () => {
  // await QuoteSchema.deleteMany({});
  for (let quote of Quotes) {
    const data = new QuoteSchema({
        Quote:quote.Quote,
        Author:quote.Author,
        len:quote.len
    });
    await data.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
