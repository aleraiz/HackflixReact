import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

const TvShows = () => {
  const [showsInfo, setShowsInfo] = useState(null);
  const [page, setPage] = useState(1);
  // console.log(showsInfo);

  useEffect(() => {
    const getShows = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/tv?`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: "popularity.desc",
          adult: false,
          with_original_language: "en",
          page: page,
        },
      });
      // console.log(response.data.results);
      {
        showsInfo == null
          ? setShowsInfo(response.data.results)
          : setShowsInfo([...showsInfo, ...response.data.results]);
      }
    };
    getShows();
  }, [, page]);

  return (
    <>
      <Row className="d-flex justify-content-center pt-3">
        <span>
          <h2 className="text-white-50 category-title bokor-family text-center movies-title">
            TV SHOWS
          </h2>
        </span>
      </Row>
      <Row className="d-flex justify-content-around pt-2">
        {showsInfo &&
          showsInfo.map((movie, index) => {
            return (
              <Col sm={6} md={4} lg={3} key={index}>
                <Card className="bg-dark poster-movies mb-3">
                  <Link to={`/tvshow/${movie.id}`}>
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
            className="text-white-50 bg-dark btn-more"
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

export default TvShows;
