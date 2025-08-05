import React from "react";

const AddPOstSection = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-4 mb-6">
      <input
        type="text"
        placeholder="Post title..."
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <textarea
        name="post-body"
        id="postBody"
        rows="4"
        placeholder="Write your post..."
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
      ></textarea>
      <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
        Add Post
      </button>
    </section>
  );
};

export default AddPOstSection;
