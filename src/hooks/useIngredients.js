import { useState } from "react";
import { ingredients } from "../data/ingredients";

const useIngredients = () => {
  const [availableIngredients, setAvailableIngredients] = useState(ingredients);

  // Function to toggle ingredient availability
  // Ref: https://www.codingz2m.com/post/functional-updates-react-example
  const toggleAvailability = (id) => {
    setAvailableIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient.id === id
          ? { ...ingredient, available: !ingredient.available } // Spreads (...ingredient) to keep other properties unchanged.
          : ingredient
      )
    );
  };

  return { availableIngredients, toggleAvailability };
};

export default useIngredients;
