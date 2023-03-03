import { useEffect, useState } from "react";
import axios from "axios";

export const useMovies = (
  sortBy = "popularity.desc",
  page = 1,
  genre = "*"
) => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(sortBy);
  // console.log(page);
  // console.log(genre);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/discover/movie?",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          adult: false,
          page: page,
          "vote_count.gte": 100,
          sort_by: sortBy,
          with_genres: genre,
        },
      });
      // setMovieData(response.data.results);
      {
        movieData == null
          ? setMovieData(response.data.results)
          : setMovieData([...movieData, ...response.data.results]);
      }
      // console.log(response.data.results);
      setTimeout(() => {
        return setIsLoading(false), 1000;
      });
    };
    getMovies();
  }, [, page, sortBy, genre]);

  return {
    movieData,
    isLoading,
    setMovieData,
  };
};
