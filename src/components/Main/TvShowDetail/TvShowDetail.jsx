import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Modal, Button } from "react-bootstrap";
import "./styles.css";
import { useParams } from "react-router-dom";
import VideoModal from "./VideoModal";

const TvShowDetail = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showData, setShowData] = useState(null);
  const { id } = useParams();

  //   console.log(id);

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios({
        method: "get",
        url: `https://api.themoviedb.org/3/tv/${id}?`,
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          append_to_response: "videos",
        },
      });

      setShowData(response.data);
      console.log(response.data);
    };
    getMovie();
  }, []);
  return (
    <>
      {showData && (
        <Container>
          <div
            className="volkorn movie-detail-bg w-100 d-flex flex-column justify-content-end p-4"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${showData.backdrop_path})`,
            }}
          >
            <h3 className="text-white movie-title">
              {showData && showData.original_name}
            </h3>
            <hr className="text-white" />
            <Row>
              <div className="col-8">
                <p className="text-white fw-bold">OVERVIEW</p>
                <p className="movie-info">{showData.overview}</p>
              </div>
              <div className="col-4 movie-info d-flex flex-column align-items-start ps-5 justify-content-around">
                <div>
                  <p className="m-0 text-white fw-bold">VOTE AVERAGE:</p>
                  <p>{showData.vote_average}</p>
                </div>
                <div>
                  <p className="m-0 text-white fw-bold">N° EPISODES:</p>
                  <p>{showData.number_of_episodes}</p>
                </div>
                <div>
                  {showData.videos.results.length > 0 ? (
                    <VideoModal videoKey={showData.videos.results[0].key} />
                  ) : (
                    // <VideoModal videoKey={null} />
                    ""
                  )}
                </div>
              </div>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};

export default TvShowDetail;
