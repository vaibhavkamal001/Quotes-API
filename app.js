const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { connectMongo } = require("./mongooseConnect");
const getAllQuote = require("./routers/getAllQuotes");
const AddQuotes = require("./routers/AddQuotes");
const deleteQuote = require("./routers/deleteQuote");
const getRandomQuote = require("./routers/getRandomQuotes");
const unHandleRouter = require("./routers/unHandelRouters");
const { errorHandle } = require("./middleware/ErrorHandle");

const ExpressError = require("./utils/ExpressError");
const { PORT = "3000" } = process.env;

app.use(express.urlencoded({ extended: true }));

connectMongo();

app.use("/", AddQuotes);

app.use("/", getRandomQuote);

app.use("/", getAllQuote);

app.use("/", deleteQuote);

app.all("*", unHandleRouter);

app.use(errorHandle);

app.listen(PORT, () => {
  console.log(`Serving Port ${PORT}`);
});
