const axios = require("axios");

const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eee8f2920fa28653902a137dcad5b867";

//get all movies
const getMovies = async (req,rev) => {
  try {
    const res = await axios.get(url);
    rev.send(res.data);
    return res.data
  } 
  catch (error) {
    console.error(error);
  }
};

module.exports = { getMovies };
