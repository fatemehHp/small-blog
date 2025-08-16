import React from "react";

const ListItems = ({ item }) => {
  return (
    <li className="w-1/4 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
      <h3 className="text-lg font-semibold text-pink-500 mb-1">
        {item.postTitle}
      </h3>
      <p className="text-gray-600">{item.postBody}</p>
    </li>
  );
};

export default ListItems;
