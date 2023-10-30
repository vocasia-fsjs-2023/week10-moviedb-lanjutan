const userController = require("../../controllers/userController");
const routes = require("express").Router();

routes.post("/register", userController.addUser);
routes.post("/login", userController.login);

module.exports = routes;
