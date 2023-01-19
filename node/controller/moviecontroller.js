const axios = require("axios");

const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eee8f2920fa28653902a137dcad5b867";

const sortMovies = (data) => {
  
};

//get all movies
const getMovies = async (req, res) => {
  try {
    const rev = await axios.get(url);

    const movie = rev.data.results;

    //for sorting movies based on popularity
    const new_movie = movie.sort((a, b) => {
      a.popularity - b.popularity;
    });

    res.send(new_movie);
    
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getMovies };
