import React from "react";

function CategoryList({
  categories,
  selectedCategory,
  onCategoryClick,
  onAllMealsClick,
}) {
  return (
    <>
      <header className="header">
        <h3>Learn,Cook,Eat Your Food</h3>
      </header>
      <div className="categories">
        <button
          onClick={onAllMealsClick}
          className={`${selectedCategory === "" ? "active" : ""}`}
        >
          All Meals
        </button>
        {categories.map((category) => (
          <button
            key={category.idCategory}
            onClick={() => onCategoryClick(category.strCategory)}
            className={`${
              selectedCategory === category.strCategory ? "active" : ""
            }`}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategoryList;
