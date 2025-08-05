import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 w-full md:w-auto">
      <input
        type="text"
        placeholder="Search posts..."
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <button className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition">
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
