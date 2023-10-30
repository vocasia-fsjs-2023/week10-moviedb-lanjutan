const reviewController = require("../../controllers/reviewController");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");
const routes = require("express").Router();

routes.post("", authentication, reviewController.addReview);
routes.get("", reviewController.getReview);
routes.put(
  "/:id",
  authentication,
  authorization,
  reviewController.updateReview
);
routes.delete(
  "/:id",
  authentication,
  authorization,
  reviewController.deleteReview
);

module.exports = routes;
