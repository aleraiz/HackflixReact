import React from "react";
import CategoryCarousel from "./CategoryCarousel/CategoryCarousel";
import TrendingMovies from "./TrendingMovies/TrendingMovies";

const Main = ({ width }) => {
  return (
    <div className="main-div">
      <TrendingMovies width={width} />
      <CategoryCarousel
        category={28}
        firstLetter={"A"}
        categoryText={"CTION"}
        width={width}
      />
      <CategoryCarousel
        category={10402}
        firstLetter={"M"}
        categoryText={"USIC"}
        width={width}
      />
      <CategoryCarousel
        category={10751}
        firstLetter={"F"}
        categoryText={"AMILY"}
        width={width}
      />
      <CategoryCarousel
        category={80}
        firstLetter={"C"}
        categoryText={"RIME"}
        width={width}
      />
      <CategoryCarousel
        category={35}
        firstLetter={"C"}
        categoryText={"OMEDY"}
        width={width}
      />
      <CategoryCarousel
        category={18}
        firstLetter={"D"}
        categoryText={"RAMA"}
        width={width}
      />
      <CategoryCarousel
        category={12}
        firstLetter={"A"}
        categoryText={"DVENTURE"}
        width={width}
      />
    </div>
  );
};

export default Main;
