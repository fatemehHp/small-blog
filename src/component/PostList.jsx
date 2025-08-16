import React, { useContext, useState } from "react";
import ListItems from "./ListItems";
import { usePost } from "../PostContext";
const PostList = () => {
  const { posts } = usePost();

  return (
    <ul className="space-y-4  flex flex-wrap gap-2 justify-center">
      {posts.map((item, index) => {
        return <ListItems item={item} key={index} />;
      })}
    </ul>
  );
};

export default PostList;
