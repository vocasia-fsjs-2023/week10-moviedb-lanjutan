const routes = require("express").Router();
const movieRoutes = require("./movie/index");
const reviewRoutes = require("./review/index");
const userRoutes = require("./user/index");

routes.use("/movie", movieRoutes);
routes.use("/review", reviewRoutes);
routes.use("", userRoutes);

module.exports = routes;