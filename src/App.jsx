// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipe from "./components/ourRecipe/OurRecipe";
import { useEffect } from "react";
import Recipe from "./components/Recipies/Recipe";
import WantToCook from "./components/WantToCook/WantToCook";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleAdd = (p) => {
    const isExist = cook.find((item) => item.recipe_id == p.recipe_id);
    if (!isExist) {
      setCook([...cook, p]);
    }
  };
  

  return (
    <div className="w-[90%] lg:w-11/12 max-w-7xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <div className="flex gap-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:w-[60%]">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleAdd={handleAdd}
            ></Recipe>
          ))}
        </div>
        <WantToCook key={cook.recipe_id} items={cook}></WantToCook>
      </div>
    </div>
  );
}

export default App;
