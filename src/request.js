const axios = require("axios");
const apikey = "9632b6fe7c9763a923ecd51be93ef36a";
let movies;

const url = {
  trending:
    "https://api.themoviedb.org/3/trending/all/day?api_key=9632b6fe7c9763a923ecd51be93ef36a",
  toprated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=9632b6fe7c9763a923ecd51be93ef36a&language=en-US&page=1",

  popular:
    "https://api.themoviedb.org/3/tv/popular?api_key=9632b6fe7c9763a923ecd51be93ef36a&language=en-US&page=1",
  romance:
    "https://api.themoviedb.org/3/discover/movie?api_key=9632b6fe7c9763a923ecd51be93ef36a&with_genres=10749",
  comedy:
    "https://api.themoviedb.org/3/discover/movie?api_key=9632b6fe7c9763a923ecd51be93ef36a&with_genres=35",
  documentary:
    "https://api.themoviedb.org/3/discover/movie?api_key=9632b6fe7c9763a923ecd51be93ef36a&with_genres=99",
  action:
    "https://api.themoviedb.org/3/discover/movie?api_key=9632b6fe7c9763a923ecd51be93ef36a&with_genres=28",
  horror:
    "https://api.themoviedb.org/3/discover/movie?api_key=9632b6fe7c9763a923ecd51be93ef36a&with_genres=27",
  originals:
    "https://api.themoviedb.org/3/discover/tv?api_key=9632b6fe7c9763a923ecd51be93ef36a&with_networks=213",
};

module.exports = {
  movies,
  url,
};
