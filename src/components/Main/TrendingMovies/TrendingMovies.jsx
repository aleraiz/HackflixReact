import React from "react";

import Carousel from "react-bootstrap/Carousel";
import "./styles.css";
import { Link } from "react-router-dom";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import SpinnerComponent from "../../Spinner/SpinnerComponent";
import { useMovies } from "../../../hooks/useMovies";

const TrendingMovies = ({ width }) => {
  const { movieData, isLoading } = useMovies("popularity.desc");

  const trendingMovieData = movieData;

  if (isLoading) {
    return <SpinnerComponent />;
  } else {
    return (
      <>
        <CategoryTitle firstLetter={"T"} text="RENDING MOVIES" />
        <Carousel className="bg-dark carousel b-radius mb-5">
          {trendingMovieData &&
            trendingMovieData.slice(0, 8).map((movie) => {
              return (
                <Carousel.Item key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      className="d-block w-100 img-fluid carousel-img b-radius"
                      src={
                        width < 576
                          ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                          : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                      }
                      alt="First slide"
                    />
                  </Link>
                  <Carousel.Caption className="carousel-info">
                    <h3 className="text-light carousel-movie-title">
                      {movie.original_title}
                    </h3>
                    <p className="text-light carousel-movie-overview">
                      {movie.overview}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </>
    );
  }
};

export default TrendingMovies;
