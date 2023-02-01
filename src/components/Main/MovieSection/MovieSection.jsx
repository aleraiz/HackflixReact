import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./Styles.css";

const MovieSection = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [page, setPage] = useState(1);
  // console.log(movieInfo);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: "popularity.desc",
          adult: false,
          page: page,
        },
      });
      // console.log(response.data.results);
      {
        movieInfo == null
          ? setMovieInfo(response.data.results)
          : setMovieInfo([...movieInfo, ...response.data.results]);
      }
    };
    getMovies();
  }, [, page]);

  return (
    <>
      <Row className="d-flex justify-content-around">
        {movieInfo &&
          movieInfo.map((movie, index) => {
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
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col sm={1}>
          <button
            className="text-white bg-dark border border-2 border-light rounded btn-more"
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            Load more
          </button>
        </Col>
      </Row>
    </>
  );
};

export default MovieSection;
