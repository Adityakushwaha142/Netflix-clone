import axios from "axios";
import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";

import { movies } from "./request";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const url = "https://image.tmdb.org/t/p/original";
let final;

export default function Poster(props) {
  return (
    <>
      <img
        key={props.id}
        className="row_poster"
        src={`${url}${props.poster_path}`}
        alt={props.original_title}
      />
    </>
  );
}

export function Data(props) {
  const [movies, setMovie] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");

  useEffect(() => {
    async function get() {
      const request = await axios.get(props.link);
      setMovie(request.data.results);
    }
    get();
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  function handleClick(m) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(m?.name || "")
        .then((url) => {
          console.log(m.name);
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <div className="row">
        <h2 style={{ color: "white", fontWeight: "bolder" }}>{props.name}</h2>
        <div className="rowposter">
          {movies.map((m) => (
            <img
              onClick={() => {
                handleClick(m);
              }}
              key={m.id}
              className={props.islarge ? "larger" : "row_poster"}
              src={`${url}${props.islarge ? m.poster_path : m.backdrop_path}`}
              alt={m.original_title}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        {/*  <div className="rowposter">{movies.map(Poster)}</div> */}
      </div>
    </>
  );
}
