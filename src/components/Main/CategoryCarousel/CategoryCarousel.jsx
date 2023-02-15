import React from "react";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Styles.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const CategoryCarousel = ({ category, firstLetter, categoryText, width }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/discover/movie?",
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: "popularity.desc",
          adult: false,
          with_genres: category,
        },
      });
      setMovieData(response.data.results);
      // console.log(response.data.results);
    };
    getMovies();
  }, []);

  return (
    <>
      <CategoryTitle firstLetter={firstLetter} text={categoryText} />
      <Swiper
        slidesPerView={width < 576 ? 3 : width < 768 ? 4 : 5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mb-5"
      >
        {movieData &&
          movieData.map((movie, index) => {
            return (
              <SwiperSlide className="poster-movies" key={index}>
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
