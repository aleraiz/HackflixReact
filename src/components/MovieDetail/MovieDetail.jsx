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

  console.log(id);

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
      {movieData && (
        <Container>
          <div
            className="volkorn movie-detail-bg w-100 d-flex flex-column justify-content-end p-4"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
            }}
          >
            <h3 className="text-white movie-title">
              {movieData && movieData.original_title}
            </h3>
            <hr className="text-white" />
            <Row>
              <div className="col-8">
                <p className="text-white fw-bold">OVERVIEW</p>
                <p className="movie-info">{movieData.overview}</p>
              </div>
              <div className="col-4 movie-info d-flex flex-column align-items-center justify-content-around">
                <div>
                  <p className="m-0 text-white fw-bold">VOTE AVERAGE:</p>
                  <p>{movieData.vote_average}</p>
                </div>
                <div>
                  <p className="m-0 text-white fw-bold">RELEASE DATE:</p>
                  <p>{movieData.release_date}</p>
                </div>
                <div>
                  {movieData.videos.results.length > 0 ? (
                    <VideoModal videoKey={movieData.videos.results[0].key} />
                  ) : (
                    // <VideoModal videoKey={null} />
                    ""
                  )}
                  {/* <VideoModal videoKey={movieData.videos.results[0].key} /> */}
                </div>
              </div>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};

export default MovieDetail;
