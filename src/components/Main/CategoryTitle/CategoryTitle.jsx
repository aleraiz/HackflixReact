import React from "react";

const CategoryTitle = ({ firstLetter, text }) => {
  return (
    <div>
      <h4 className="text-white-50 category-title bokor-family">
        <span className="text-danger">{firstLetter}</span>
        {text}
      </h4>
    </div>
  );
};

export default CategoryTitle;
