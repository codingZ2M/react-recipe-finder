import React from "react";
import { FaSearch, FaUtensils } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white p-6 lg:p-12 shadow-md rounded-lg">
      {/* Left Side: Hero Text and Buttons */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="w-full text-3xl lg:text-5xl font-bold text-gray-800">
          Discover Delicious Recipes
        </h1>
        <p className="mt-4 text-gray-600 text-md md:text-lg">
          Explore a wide variety of recipes from all over the world. Find your
          favorite dish and start cooking today!
        </p>
        <div className="mt-6 flex  flex-col md:flex-row justify-center lg:justify-start gap-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
            <FaSearch className="inline mr-2" /> Search Recipes
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600">
            <FaUtensils className="inline mr-2" /> Start Cooking
          </button>
        </div>
      </div>

      {/* Right Side: Background Image */}
      {/* Below Banner: Oval Images with Vibrant Background Colors */}
      <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-4 gap-0 pb-8">
        <div className="p-6 bg-red-500 rounded-full flex items-center justify-center w-40 h-40 md:w-60 md:h-60">
          <img
            src="https://images.pexels.com/photos/1028711/pexels-photo-1028711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Category 1"
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
        <div className="p-6 bg-yellow-500 rounded-full flex items-center justify-center w-40 h-40 md:w-60 md:h-60">
          <img
            src="https://images.pexels.com/photos/19130050/pexels-photo-19130050/free-photo-of-top-view-of-pizzas-with-different-toppings.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1r=1"
            alt="Category 2"
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
        <div className="p-6 bg-green-500 rounded-full flex items-center justify-center w-40 h-40 md:w-60 md:h-60">
          <img
            src="https://images.pexels.com/photos/3864682/pexels-photo-3864682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Category 3"
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
        <div className="p-6 bg-blue-500 rounded-full flex items-center justify-center w-40 h-40 md:w-60 md:h-60">
          <img
            src="https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Category 4"
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
