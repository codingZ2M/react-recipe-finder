import React from "react";
import { FaTimes } from "react-icons/fa";

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{recipe.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded-md mt-4"
        />

        {/* Ingredients List */}
        <h3 className="text-lg font-semibold mt-6">Ingredients:</h3>
        <ul className="list-disc list-inside mt-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
        <p className="text-md mt-6">{recipe.description}</p>
        {/* Close Button */}
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
