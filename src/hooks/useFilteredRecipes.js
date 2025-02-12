import { useState } from "react";
import { sampleRecipes } from "../data/sampleRecipes";

const useFilteredRecipes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = sampleRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return { searchQuery, setSearchQuery, filteredRecipes };
};

export default useFilteredRecipes;
