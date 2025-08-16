import { useContext } from "react";
import { usePost } from "../PostContext";
const AddPOstSection = () => {
  const {
    postTitle,
    postBody,
    setPostBody,
    setPostTitle,
    addToPostList,
    clearPosts,
  } = usePost();

  return (
    <section className="bg-white shadow-md rounded-lg p-4 mb-6">
      <input
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        type="text"
        placeholder="Post title..."
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <textarea
        onChange={(e) => setPostBody(e.target.value)}
        value={postBody}
        name="post-body"
        id="postBody"
        rows="4"
        placeholder="Write your post..."
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
      ></textarea>
      <button
        className="w-full bg-green-500 mb-2.5 text-white py-2 rounded-lg hover:bg-green-600 transition"
        onClick={() => addToPostList(postTitle, postBody)}
      >
        Add Post
      </button>
      <button
        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
        onClick={clearPosts}
      >
        Clear
      </button>
    </section>
  );
};

export default AddPOstSection;
