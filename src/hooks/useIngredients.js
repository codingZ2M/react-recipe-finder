import { useState } from "react";
import { ingredients } from "../data/ingredients";

const useIngredients = () => {
  const [availableIngredients, setAvailableIngredients] = useState(ingredients);

  // Function to toggle ingredient availability
  const toggleAvailability = (id) => {
    setAvailableIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient.id === id
          ? { ...ingredient, available: !ingredient.available }
          : ingredient
      )
    );
  };

  return { availableIngredients, toggleAvailability };
};

export default useIngredients;
