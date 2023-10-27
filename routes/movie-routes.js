const express = require("express");
const movieController = require("../controllers/movie-controllers.js");
const userController = require("../controllers/user-controller.js");
const {authUser} = require("../middleware/authentication")
const router = express.Router();

router.get("/", authUser, movieController.index);
router.get("/:id", movieController.show);
router.post("/", movieController.store);
router.put("/:id", movieController.update);
router.delete("/:id", movieController.remove);


{
    router.post("/register", userController.register);
    router.post("/login", userController.login);
}

module.exports = router;