const movieController = require("../../controllers/movieControllers");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isadmin");
const routes = require("express").Router();

routes.post("", authentication, isAdmin, movieController.addMovie);
routes.get("", movieController.getMovie);
routes.get("/:id", movieController.getMovieId);
routes.put("/:id", authentication, isAdmin, movieController.updateMovie);
routes.delete("/:id", authentication, isAdmin, movieController.deleteMovie);

module.exports = routes;
