const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const payloadParsing = require('./middleware/payloadParse');

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(movieRoutes);
app.use(reviewRoutes);
app.use(userRoutes);
app.use(payloadParsing);



app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

