import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const MovieSection = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/discover/movie?",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: "popularity.desc",
          adult: false,
          page: page,
        },
      });
      console.log(response.data.results);
      setMovieInfo(response.data.results);
    };
    getMovies();
  }, []);

  return <div>MovieSection</div>;
};

export default MovieSection;
