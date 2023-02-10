import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

const TvShows = () => {
  const [showsInfo, setShowsInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [genre, setGenre] = useState("");
  // console.log(showsInfo);

  const handleSelect = (e) => {
    setShowsInfo(null);
    console.log(e);
    setSortBy(e);
  };

  const handleSelectGenre = (e) => {
    setShowsInfo(null);
    console.log(e);
    setGenre(e);
  };

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
          "vote_count.gte": 10,
          with_genres: genre,
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
  }, [, page, sortBy, genre]);

  return (
    <>
      <Row className="d-flex align-items-end pt-3 category-title -white pb-0 section-name">
        <Col>
          <span>
            <h2 className="text-white-50 category-title bokor-family movies-title pb-0 m-0">
              TV SHOWS
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
            <Dropdown.Item className="text-white-50" eventKey="10759">
              Action & Adventure
            </Dropdown.Item>
            <Dropdown.Item className="text-white-50" eventKey="16">
              Animation
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
            <Dropdown.Item className="text-white-50" eventKey="10762">
              Kids
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around pt-4">
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
