import React from "react";
import CategoryCarousel from "./CategoryCarousel/CategoryCarousel";
import TrendingMovies from "./TrendingMovies/TrendingMovies";

const Main = () => {
  return (
    <div>
      <TrendingMovies />
      <CategoryCarousel />
    </div>
  );
};

export default Main;
