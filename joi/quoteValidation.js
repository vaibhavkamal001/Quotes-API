const Joi = require("Joi");

module.exports.validateQuote = Joi.object({
  quote: Joi.string().required(),
  author: Joi.string(),
});
