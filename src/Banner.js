import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./banner.css";
import { url } from "./request";
const axios = require("axios");

function Banner(props) {
  const [movie, setMovie] = React.useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(url.originals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    getData();
  }, []);
  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_button">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
          <div className="banner_desc">{truncate(movie.overview, 150)}</div>
        </div>
      </div>

      <div className="banner-btm"></div>
    </header>
  );
}

export default Banner;
