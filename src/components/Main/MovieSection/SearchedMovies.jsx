import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchedMovies = ({ page, movieName }) => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  //   console.log(searchedMovies);

  useEffect(() => {
    getSearchedMovies();
  }, [movieName, page]);

  const getSearchedMovies = async () => {
    const response = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/search/movie?",
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        adult: false,
        sort_by: "popularity.desc",
        page: page,
        query: movieName,
      },
    });
    // console.log(response.data.results);
    {
      searchedMovies == null || page == 1
        ? setSearchedMovies(response.data.results)
        : setSearchedMovies([...searchedMovies, ...response.data.results]);
    }
  };

  return (
    <>
      {!searchedMovies || movieName.length == 0 ? (
        <p className="text-white-50 text-center">
          {" "}
          Please, enter the name of the movie{" "}
        </p>
      ) : null}
      {searchedMovies &&
        searchedMovies.map((movie, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Card className="bg-dark poster-movies mb-3">
                <Link to={`/movie/${movie.id}`}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  />
                </Link>
              </Card>
            </Col>
          );
        })}
    </>
  );
};

export default SearchedMovies;
