import React from "react";
import useStyles from "./styles";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
const Posts = () => {
  const { posts, text } = useSelector((store) => store.post);
  console.log(posts);
  console.log(text);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
