import React, { useEffect } from "react";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@mui/material";
import Post from "./Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../features/postSlice";
const Posts = ({ setCurrentId }) => {
  const { posts } = useSelector((store) => store.post);

  const classes = useStyles();

  return !posts ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
