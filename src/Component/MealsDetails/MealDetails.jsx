import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import MealIngredients from "./../MealIngredients/MealIngredients";
import MealContent from "./../MealContent/MealContent";
import MealInstructions from "./../MealInstructions/MealInstructions";

const MealDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        if (res.data.meals) {
          setMeal(res.data.meals[0]);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <div className="error-message">
        <h2>Meal not found!</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="meal-details">
      <Header />
      {meal && (
        <div className="meal-content">
          <MealContent meal={meal} />
          <MealInstructions instructions={meal.strInstructions} />
          <MealIngredients meal={meal} />
        </div>
      )}
    </div>
  );
};

export default MealDetails;
