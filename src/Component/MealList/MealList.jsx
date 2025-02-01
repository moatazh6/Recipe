import React from "react";
import MealCard from "./../MealCard/MealCard";
function MealList({ meals }) {
  return (
    <div className="meals">
      {meals.length > 0 ? (
        meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
}

export default MealList;
