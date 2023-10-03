import React from "react";

const Categories = ({ categories, filterItems }) => {
    return (
      <div className="btn-container mb-16 flex justify-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn bg-transparent hover:bg-accent hover:text-white border-transparent btn text-base capitalize mx-2 px-3 py-1 text-gold cursor-pointer transition rounded-md"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
    );
  };
  
  export default Categories;
  