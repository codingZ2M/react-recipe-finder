import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ filteredRecipesByName, availableIngredients }) => {

  // Refer: https://www.codingz2m.com/post/difference-between-find-and-filter-javascript
    const recipesByIngredients = filteredRecipesByName.filter(recipe =>
      recipe.requirements.every(req => availableIngredients.find(ing => ing.id === req && ing.available))
    );
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
      {recipesByIngredients.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
