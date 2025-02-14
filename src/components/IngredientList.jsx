import React from "react";

const IngredientList = ({ availableIngredients, toggleAvailability }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 conatiner mx-auto mt-16">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Select Ingredients</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {availableIngredients.map((ingredient) => (
          <label
            key={ingredient.id}
            className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={ingredient.available}
              onChange={() => toggleAvailability(ingredient.id)}
              className="w-5 h-5 text-blue-500 rounded focus:ring focus:ring-blue-300 cursor-pointer"
            />
            <span className="text-gray-800 font-medium">{ingredient.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;
