import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import RecipeDetails from "./RecipeDetails";

const RecipeCard = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-60 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-4">{recipe.name}</h2>
      <ul className="mt-2">
        {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
          <li key={index} className="text-gray-500">
            - {ingredient}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setShowDetails(true)}
          className="text-sm text-blue-500"
        >
          View Details
        </button>
        <FaHeart className="text-red-500" />
      </div>
      {showDetails && (
        <RecipeDetails
          recipe={recipe}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

export default RecipeCard;
