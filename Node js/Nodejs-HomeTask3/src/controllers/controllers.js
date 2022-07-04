const services = require("../services/crudservices.js");
const { error, successful } = require("../constants/app.const.js");

async function getAll(req, res) {
  try {
    const data = await services.getAll();
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send(error.GET_error);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function getUserbyID(req, res) {
  const id = req.params.id;
  try {
    const user = await services.getUserbyId(id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send(error.GET_error);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function create(req, res) {
  const newUser = req.body;
  try {
    const data = await services.create(newUser);
    if (data) {
      res.status(201).send(data);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function update(req, res) {
  const id = req.params.id;
  const updatedUser = req.body;
  try {
    const user = await services.update(id, updatedUser);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send(error.PUT_error);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function softDelete(req, res) {
  const id = req.params.id;
  try {
    const status = await services.softDelete(id);
    if (status[0] === 0) {
      res.status(404).send(error.DELETE_error);
    } else {
      res.status(200).send(successful.DELETE_success);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAutoSuggestionList(req, res) {
  const loginSubstring = req.query.loginSubstring;
  const limit = req.query.limit;
  try {
    const suggetion_list = await services.getAutoSuggestionList(
      loginSubstring,
      limit
    );
    if (suggetion_list.length === 0) {
      res.send(error.error_msg);
    } else {
      res.send(suggetion_list);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  create,
  getAll,
  getUserbyID,
  update,
  softDelete,
  getAutoSuggestionList,
};
