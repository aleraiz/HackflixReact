import React from "react";
import CategoryCarousel from "./CategoryCarousel/CategoryCarousel";
import TrendingMovies from "./TrendingMovies/TrendingMovies";

const Main = () => {
  return (
    <div>
      <TrendingMovies />
      <CategoryCarousel
        category={28}
        firstLetter={"A"}
        categoryText={"CTION"}
      />
      <CategoryCarousel
        category={10402}
        firstLetter={"M"}
        categoryText={"USIC"}
      />
      <CategoryCarousel
        category={10751}
        firstLetter={"F"}
        categoryText={"AMILY"}
      />
      <CategoryCarousel category={80} firstLetter={"C"} categoryText={"RIME"} />
      <CategoryCarousel
        category={35}
        firstLetter={"C"}
        categoryText={"OMEDY"}
      />
      <CategoryCarousel category={18} firstLetter={"D"} categoryText={"RAMA"} />
      <CategoryCarousel
        category={12}
        firstLetter={"A"}
        categoryText={"DVENTURE"}
      />
    </div>
  );
};

export default Main;
