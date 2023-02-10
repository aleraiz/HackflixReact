import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "./Styles.css";

const MovieSection = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genre, setGenre] = useState("");
  // console.log(movieInfo);

  const handleSelect = (e) => {
    setMovieInfo(null);
    // console.log(e);
    setSortBy(e);
  };

  const handleSelectGenre = (e) => {
    setMovieInfo(null);
    // console.log(e);
    setGenre(e);
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/discover/movie?`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: sortBy,
          adult: false,
          page: page,
          "vote_count.gte": 100,
          with_genres: genre,
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
  }, [, page, sortBy, genre]);

  return (
    <>
      <Row className="d-flex align-items-end pt-3 category-title -white pb-0 section-name">
        <Col>
          <span>
            <h2 className="text-white-50 category-title bokor-family movies-title pb-0 m-0">
              MOVIES
            </h2>
          </span>
        </Col>
        <Col className="d-flex justify-content-end align-items-end text-white-50 bokor-family">
          <DropdownButton
            id="Sort-by"
            variant="dark"
            menuVariant="dark"
            title="Sort by:"
            className="mt-2 text-white-50"
            onSelect={handleSelect}
          >
            <Dropdown.Item className="text-white-50" eventKey="popularity.desc">
              Popularity
            </Dropdown.Item>
            <Dropdown.Item
              className="text-white-50"
              eventKey="vote_average.desc"
            >
              Rating
            </Dropdown.Item>
            <Dropdown.Item
              className="text-white-50"
              eventKey="release_date.desc"
            >
              Release date
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="genre"
            variant="dark"
            menuVariant="dark"
            title="Genre"
            className="mt-2"
            bg="dark"
            onSelect={handleSelectGenre}
          >
            <Dropdown.Item className="text-white-50" eventKey="">
              All
            </Dropdown.Item>
            <Dropdown.Item className="text-white-50" eventKey="28">
              Action
            </Dropdown.Item>
            <Dropdown.Item className="text-white-50" eventKey="12">
              Adventure
            </Dropdown.Item>
            <Dropdown.Item className="text-white-50" eventKey="35">
              Comedy
            </Dropdown.Item>
            <Dropdown.Item className="text-white-50" eventKey="80">
              Crime
            </Dropdown.Item>
            <Dropdown.Item className="text-white-50" eventKey="18">
              Drama
            </Dropdown.Item>
            <Dropdown.Item className="text-white-50" eventKey="10751">
              Family
            </Dropdown.Item>
            <Dropdown.Item className="text-white-50" eventKey="10402">
              Music
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around pt-4">
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
            className="text-white-50 bg-dark btn-more"
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            Load More
          </button>
        </Col>
      </Row>
    </>
  );
};

export default MovieSection;
