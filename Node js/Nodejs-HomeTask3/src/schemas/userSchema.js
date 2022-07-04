const Joi = require("joi");

const JoiSchema = Joi.object({
  id: Joi.string().guid({
    version: ["uuidv4"],
  }),
  login: Joi.string().required(),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$/)
    .required(),
  age: Joi.number().integer().min(5).max(130).required(),
  isDeleted: Joi.boolean(),
}).options({ abortEarly: false });

module.exports = JoiSchema;
