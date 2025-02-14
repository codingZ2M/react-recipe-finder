import React from "react";
import useFilteredRecipes from "./hooks/useFilteredRecipes";
import useIngredients from "./hooks/useIngredients";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Banner from "./components/Banner";
import IngredientList from "./components/IngredientList";


const App = () => {

  const { searchQuery, setSearchQuery, filteredRecipesByName } = useFilteredRecipes(); // Use hook here
  const { availableIngredients, toggleAvailability } = useIngredients(); // Use hook here

 
  return (
    <div className="min-h-screen p-6 container mx-auto bg-white">
      <h1 className="text-3xl font-bold text-center">Recipe Finder</h1>
      <Banner/>
      
      <IngredientList availableIngredients={availableIngredients} toggleAvailability={toggleAvailability}/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {filteredRecipesByName.length > 0 ? (
        <RecipeList filteredRecipesByName={filteredRecipesByName} availableIngredients={availableIngredients}/>
      ) : (
        <p className="text-center text-4xl mt-6 text-gray-500">
          No recipes found. Try a different search term.
        </p>
      )}

     
    </div>
  );
};

export default App;
