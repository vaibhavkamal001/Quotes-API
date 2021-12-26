module.exports.errorHandle = (err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "somethig went worng";
  }
  res.status(statusCode).json(err.message);
};
