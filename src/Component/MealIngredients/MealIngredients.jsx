const MealIngredients = ({ meal }) => {
  return (
    <div className="meal-info w-1/3">
      <h2 className="ingredients">Ingredients</h2>
      <ul>
        {[...Array(20)].map((_, i) => {
          const ingredient = meal[`strIngredient${i + 1}`];
          const measure = meal[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>
              {ingredient}: {measure}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default MealIngredients;
