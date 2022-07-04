const Sequelize = require("sequelize");
const sequelize = require("../models/index.js");

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    login: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    isDeleted: {
      type: Sequelize.STRING,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
