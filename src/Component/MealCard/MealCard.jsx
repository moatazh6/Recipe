import React from "react";
import { Link } from "react-router-dom";

function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal.split(" ").slice(0, 2).join(" ")}</h2>
      <h3>{meal.strArea}</h3>
      <button>
        <Link to={`/meal/${meal.idMeal}`}>View Details</Link>
      </button>
    </div>
  );
}

export default MealCard;
