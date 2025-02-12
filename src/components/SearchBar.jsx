import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center mt-16">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search recipes..."
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-400 px-20"
      />
    </div>
  );
};

export default SearchBar;
