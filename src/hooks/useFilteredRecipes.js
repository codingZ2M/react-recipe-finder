import { useState } from "react";
import { sampleRecipes } from "../data/sampleRecipes";

// Custom Hook "useFilteredRecipes"
const useFilteredRecipes = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipesByName = sampleRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return { searchQuery, setSearchQuery, filteredRecipesByName};
};

export default useFilteredRecipes;
