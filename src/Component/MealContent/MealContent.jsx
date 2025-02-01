import { Link } from "react-router-dom";

const MealContent = ({ meal }) => {
  return (
    <div className="meal-image">
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-img" />
      <div className="links">
        <Link to={meal.strYoutube} target="_blank" className="youtube-link">
          <i className="fab fa-youtube"></i>
        </Link>
        <Link to={meal.strSource} target="_blank" className="link">
          <i className="fas fa-link"></i>
        </Link>
      </div>
    </div>
  );
};

export default MealContent;
