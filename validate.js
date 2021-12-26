const { validateQuote } = require("./joi/quoteValidation");
const ExpressError = require("./utils/ExpressError");

module.exports.validQuote = (req, res, next) => {
  const { error } = validateQuote.validate(req.body, { abortEarly: false });
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 404);
  } else {
    next();
  }
};
