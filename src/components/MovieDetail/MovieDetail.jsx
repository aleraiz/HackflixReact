import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Modal, Button } from "react-bootstrap";
import "./styles.css";
import { useParams } from "react-router-dom";
import VideoModal from "./VideoModal";

const MovieDetail = () => {
  const [modalShow, setModalShow] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();

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
      console.log(response.data);
    };
    getMovie();
  }, []);

  return (
    <>
      <Container
        className="movie-detail-bg d-flex align-items-end"
        style={{
          backgroundImage: movieData
            ? `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`
            : "none",
        }}
      >
        {/* <Row className="d-flex justify-content-end p-4">
          <div>
            <iframe
              className="movie-trailer"
              width="360"
              height="215"
              src="https://www.youtube.com/embed/vGHrJDmepI0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Row> */}
        <Row className="h-50">
          <Row className="pb-5">
            <h5 className="movie-info">
              {movieData && movieData.original_title}
            </h5>
          </Row>
          <Row className="mb-5">
            <div className="col-6">
              <p className="movie-info">{movieData && movieData.overview}</p>
            </div>
            <div className="col-6 movie-info d-flex flex-column justify-content-between align-items-center">
              <div>Vote average: {movieData && movieData.vote_average}</div>
              <div>Release date: {movieData && movieData.release_date}</div>
              <div>
                <VideoModal />
              </div>
            </div>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetail;
