import React from "react";
import useFilteredRecipes from "./hooks/useFilteredRecipes";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Banner from "./components/Banner";

const App = () => {

  const { searchQuery, setSearchQuery, filteredRecipes } = useFilteredRecipes();


  return (
    <div className="min-h-screen p-6 container mx-auto bg-white">
      <h1 className="text-3xl font-bold text-center">Recipe Finder</h1>
      <Banner/>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {filteredRecipes.length > 0 ? (
        <RecipeList recipes={filteredRecipes} />
      ) : (
        <p className="text-center text-4xl mt-6 text-gray-500">
          No recipes found. Try a different search term.
        </p>
      )}
    </div>
  );
};

export default App;
