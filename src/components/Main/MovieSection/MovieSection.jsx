import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "./Styles.css";
import AllMovies from "./AllMovies";
import { useMovies } from "../../../hooks/useMovies";
import SearchedMovies from "./SearchedMovies";

const MovieSection = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genre, setGenre] = useState("");
  const [movieName, setMovieName] = useState("");
  const [searching, setSearching] = useState(false);
  const { movieData, setMovieData } = useMovies(sortBy, page, genre);

  const handleClick = () => {
    setPage(1);
    {
      searching ? setSearching(false) : setSearching(true);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMovieName(e.target.value);
  };

  const handleSelect = (e) => {
    if (e !== sortBy) {
      setMovieData(null);
    }
    setPage(1);
    // console.log(e);
    setSortBy(e);
  };

  const handleSelectGenre = (e) => {
    if (e !== genre) {
      setMovieData(null);
    }
    setPage(1);
    console.log(e);
    setGenre(e);
  };

  return (
    <>
      <Row className="d-flex align-items-end pt-3 category-title pb-0 section-name">
        <Col className="movies-title-col">
          <span>
            <h2 className="text-white-50 category-title bokor-family movies-title pb-0 m-0">
              MOVIES
            </h2>
          </span>
        </Col>
        <Col className="movies-options-col d-flex align-items-center text-white-50 bokor-family">
          <form action="" className="me-1">
            <input
              type="text"
              placeholder="Search Movie"
              id="search"
              className="search"
              onChange={handleChange}
              onClick={handleClick}
            />
          </form>
          {searching && movieName.length == 0 && (
            <span className="ms-3 btn-back" onClick={handleClick}>
              Back
            </span>
          )}
          {!searching && (
            <DropdownButton
              id="Sort-by"
              variant="dark"
              menuVariant="dark"
              title="Sort by:"
              // className="mt-2 text-white-50"
              className=" text-white-50"
              onSelect={handleSelect}
            >
              <Dropdown.Item
                className="text-white-50"
                eventKey="popularity.desc"
              >
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
          )}
          {!searching && (
            <DropdownButton
              id="genre"
              variant="dark"
              menuVariant="dark"
              title="Genre"
              // className="mt-2"
              bg="dark"
              onSelect={handleSelectGenre}
            >
              <Dropdown.Item className="text-white-50" eventKey="*">
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
          )}
        </Col>
      </Row>
      <Row className="d-flex justify-content-around pt-4">
        {!searching ? (
          <AllMovies movieData={movieData} />
        ) : (
          <SearchedMovies page={page} movieName={movieName} />
        )}
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
