import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import MealList from "./../MealList/MealList";
import CategoryList from "./../CategoryList/CategoryList";

function Home() {
  const [allMeals, setAllMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setCategories(res.data.categories || []);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const fetchAllMeals = async () => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setAllMeals(res.data.meals || []);
        setFilteredMeals(res.data.meals || []);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const fetchMealsByCategory = async (category) => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        setFilteredMeals(res.data.meals || []);
        setSelectedCategory(category);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchCategories();
    fetchAllMeals();
  }, []);

  return (
    <>
      <div className="home">
        <Header />
        <div className="content">
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={fetchMealsByCategory}
            onAllMealsClick={() => {
              setFilteredMeals(allMeals);
              setSelectedCategory("");
            }}
          />
          <h1>Meals</h1>
          {isLoading ? (
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
          ) : (
            <MealList meals={filteredMeals} />
          )}
        </div>
      </div>
    </>
  );
}
export default Home;
