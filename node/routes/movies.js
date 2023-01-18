const express = require('express')
const router = express.Router()
const movieController = require("../controller/moviecontroller");

router.get("/movies", movieController.getMovies);

module.exports = router;