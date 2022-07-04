const userController = require("../controllers/controllers.js");
const router = require("express").Router();
const { validateUser, validateQuery } = require("../middleware/validations.js");

router.get("/search", validateQuery, userController.getAutoSuggestionList);

router.get("/", userController.getAll);

router.get("/:id", userController.getUserbyID);

router.post("/", validateUser(), userController.create);

router.put("/:id", validateUser(), userController.update);

router.patch("/:id", userController.softDelete);

module.exports = router;
