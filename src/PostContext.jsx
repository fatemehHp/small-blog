import { faker } from "@faker-js/faker";
import React, { useContext, useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();
// create random post function
function createPost() {
  return {
    postTitle: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    postBody: faker.hacker.phrase(),
  };
}
// comonent
const PostContext = ({ children }) => {
  // postList
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const searchResult =
    searchQuery.length > 0
      ? posts.filter((posts) =>
          `${posts.postTitle} ${posts.postBody}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;
  console.log(searchResult);
  // ADD TO POST LIST
  function addToPostList(postTitle, postBody) {
    if (postTitle === "" || postBody === "") {
      return;
    }
    setPosts((posts) => [{ postTitle, postBody }, ...posts]);
    setPostTitle("");
    setPostBody("");
  }
  // clean All  Posts
  function clearPosts() {
    setPosts([]);
  }
  return (
    <MyContext.Provider
      value={{
        posts: searchResult,
        setPosts,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        addToPostList,
        clearPosts,
        setSearchQuery,
        searchQuery,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export function usePost() {
  const context = useContext(MyContext);
  return context;
}
export default PostContext;
