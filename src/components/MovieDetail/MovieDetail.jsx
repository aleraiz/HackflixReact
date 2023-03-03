import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import { useParams, useNavigate } from "react-router-dom";
import VideoModal from "./VideoModal";

const MovieDetail = ({ width }) => {
  const [modalShow, setModalShow] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${id}?`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          append_to_response: "videos",
        },
      });

      setMovieData(response.data);
    };
    getMovie();
  }, []);

  return (
    <>
      {movieData && (
        <Container>
          <div
            className="volkorn movie-detail-bg w-100 d-flex flex-column justify-content-end p-4"
            style={
              width < 767
                ? {
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.poster_path})`,
                  }
                : {
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
                  }
            }
          >
            <h3 className="text-white movie-title">
              {movieData && movieData.original_title}
            </h3>
            <hr className="text-white" />
            <Row className="bg-text">
              <Col className="movie-overview">
                <p className="text-white fw-bold">OVERVIEW</p>
                <p className="movie-info">{movieData.overview}</p>
              </Col>
              <Col className="movie-info d-flex flex-column align-items-center justify-content-around">
                <div className="movie-info movie-title-mobile">
                  <p className="ms-2 pt-2 text-white fw-bold">
                    {movieData.original_title}
                  </p>
                </div>
                <div className="movie-info">
                  <p className="m-0 text-white fw-bold ">VOTE AVERAGE:</p>
                  <p className="ms-2">{movieData.vote_average}</p>
                </div>
                <div className="movie-info">
                  <p className="m-0 text-white fw-bold">RELEASE DATE:</p>
                  <p className="ms-2">{movieData.release_date}</p>
                </div>
                <div>
                  {movieData.videos.results.length > 0 ? (
                    <VideoModal videoKey={movieData.videos.results[0].key} />
                  ) : (
                    ""
                  )}

                  <span className="btn-return" onClick={goBack}>
                    Back to
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};

export default MovieDetail;
