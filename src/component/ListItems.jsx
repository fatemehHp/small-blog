import React from "react";

const ListItems = () => {
  return (
    <li className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
      <h3 className="text-lg font-semibold text-pink-500 mb-1">Post Title</h3>
      <p className="text-gray-600">Post content goes here...</p>
    </li>
  );
};

export default ListItems;
