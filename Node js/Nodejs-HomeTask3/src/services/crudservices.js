const User = require("../models/model.js");
const { Op } = require("sequelize");
const { v4 } = require("uuid");
const bcrypt = require("bcryptjs");

exports.getAll = async () => {
  const data = await User.findAll();
  return data;
};

exports.getUserbyId = async (id) => {
  const user = await User.findByPk(id).then((data) => {
    if (data) {
      return data;
    }
  });
  return user;
};

exports.create = async (data) => {
  const newUser = {
    id: v4(),
    login: data.login,
    password: bcrypt.hashSync(data.password, 4),
    age: data.age,
    isDeleted: false,
  };
  const newdata = await User.create(newUser);
  return newdata;
};

exports.update = async (uid, newdata) => {
  let updated = {
    id: uid,
    login: newdata.login,
    password: bcrypt.hashSync(newdata.password, 4),
    age: newdata.age,
    isDeleted: false,
  };
  const user = await User.update(updated, {
    where: { id: uid },
  }).then((data) => {
    if (data) {
      return data;
    }
  });
  return updated;
};

exports.softDelete = async (id) => {
  const user = await User.update({ isDeleted: true }, { where: { id: id } });
  return user;
};

exports.getAutoSuggestionList = async (loginSubstring, limit) => {
  const list = await User.findAll({
    where: {
      login: {
        [Op.like]: `%${loginSubstring}%`,
      },
    },
    limit,
  });
  return list;
};
