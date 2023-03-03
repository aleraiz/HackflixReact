import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllMovies = ({ movieData }) => {
  return (
    <>
      {movieData &&
        movieData.map((movie, index) => {
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

export default AllMovies;
