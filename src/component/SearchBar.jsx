import React, { useContext } from "react";
import { usePost } from "../PostContext";
const SearchBar = () => {
  const { searchQuery, setSearchQuery } = usePost();
  return (
    <div className="flex items-center gap-2 w-full md:w-auto">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search posts..."
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
};

export default SearchBar;
