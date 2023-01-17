import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./styles.css";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
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
      <Row
        className="movie-detail-row"
        style={{
          backgroundImage: movieData
            ? `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`
            : "none",
        }}
      ></Row>
      <Row className="mt-5">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vGHrJDmepI0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Row>
    </>
  );
};

export default MovieDetail;
