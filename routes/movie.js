const { Router } = require("express");
const {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} = require("../controllers/movie");
const isAdmin = require("../middlewares/admin");

const router = Router();

router.post("/", isAdmin, createMovie);
router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.put("/:id", isAdmin, updateMovie);
router.delete("/:id", isAdmin, deleteMovie);

module.exports = router;
