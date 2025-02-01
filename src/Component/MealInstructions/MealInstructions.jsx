const MealInstructions = ({ instructions }) => {
  return (
    <div className="Instructions" style={{ width: "40%", marginTop: "3rem" }}>
      <p>{instructions}</p>
      <h2>Sushi Recipe</h2>
    </div>
  );
};

export default MealInstructions;
