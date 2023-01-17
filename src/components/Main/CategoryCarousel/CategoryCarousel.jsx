import React from "react";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const CategoryCarousel = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/discover/movie?",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: "popularity.desc",
          with_genres: 28,
        },
      });
      setMovieData(response.data.results);
      console.log(response.data.results);
    };
    getMovies();
  }, []);

  return (
    <>
      <CategoryTitle firstLetter={"A"} text="CTION" />
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movieData &&
          movieData.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={`/movie/${movie.id}`}>
                  <Card className="bg-dark">
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </Card>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default CategoryCarousel;
