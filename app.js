const express = require("express");
const app = express();
const movieRouter = require("./routes/movie");
const reviewRouter = require("./routes/review");
const auth = require("./middlewares/auth");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.use("/", require("./routes/auth"));
app.use("/movie", auth, movieRouter);
app.use("/review", auth, reviewRouter);

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
