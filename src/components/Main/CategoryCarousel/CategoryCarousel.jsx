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
import { useMovies } from "../../../hooks/useMovies";

const CategoryCarousel = ({ category, firstLetter, categoryText, width }) => {
  const { movieData, isLoading } = useMovies("popularity.desc", 1, category);

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
