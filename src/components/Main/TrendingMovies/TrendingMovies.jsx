import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import CategoryTitle from "../CategoryTitle/CategoryTitle";

const TrendingMovies = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/discover/movie?",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          adult: false,
          sort_by: "popularity.desc",
        },
      });
      setMovieData(response.data.results.slice(0, 8));
      // console.log(response.data.results.slice(0, 8));
    };
    getMovies();
  }, []);

  return (
    <>
      <CategoryTitle firstLetter={"T"} text="RENDING MOVIES" />
      <Carousel className="bg-dark carousel b-radius mb-5">
        {movieData &&
          movieData.map((movie) => {
            return (
              <Carousel.Item key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="d-block w-100 img-fluid carousel-img b-radius"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt="First slide"
                  />
                </Link>
                <Carousel.Caption>
                  <h3 className="text-light">{movie.original_title}</h3>
                  <p className="text-light">{movie.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </>
  );
};

export default TrendingMovies;
