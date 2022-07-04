const JoiSchema = require("../schemas/userSchema.js");
const { error } = require("../constants/app.const.js");

const validateUser = (user) => (req, res, next) => {
  const user = req.body;
  const response = JoiSchema.validate(user);
  if (response.error) {
    res.status(400).send(response.error);
  } else {
    next();
  }
};

async function validateQuery(req, res, next) {
  const qs = req.query.loginSubstring;
  const limit = parseInt(req.query.limit);
  if (!qs || qs === "null" || qs === "Null") {
    return res.status(200).send(error.null_qs);
  } else if (!limit || limit === 0) {
    return res.status(400).send(error.invalid_limit);
  } else {
    next();
  }
}

module.exports = { validateUser, validateQuery };
