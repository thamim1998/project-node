const axios = require("axios");

//get all movies
const getMovies = async (req, res) => {
  try {
    const value = req.params.movieId;
    const rev = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eee8f2920fa28653902a137dcad5b867&page=${value}`,
    );

    const movie = rev.data.results;

    //for sorting movies based on popularity
    const new_movie = movie.sort((a, b) => {
      a.popularity - b.popularity;
    });

    res.send(new_movie);
  } catch (error) {
    res.send([])
  }
};

module.exports = { getMovies };
