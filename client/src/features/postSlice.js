import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
const initialState = {
  posts: [],
};
export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.fetchPosts();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createPostAPI = createAsyncThunk(
  "post/createPost",
  async (post, thunkAPI) => {
    try {
      const { data } = await api.createPost(post);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updatePostAPI = createAsyncThunk(
  "post/updatePost",
  async ({ postId, post }, thunkAPI) => {
    try {
      const { data } = await api.updatePost(postId, post);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePostAPI = createAsyncThunk(
  "post/deletePost",
  async (id, thunkAPI) => {
    try {
      await api.deletePost(id);
      thunkAPI.dispatch(getPosts());
    } catch (error) {
      console.log(error);
    }
  }
);

export const likedPostAPI = createAsyncThunk(
  "post/likedPost",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.likedPost(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [createPostAPI.fulfilled]: (state, { payload }) => {
      state.posts = [...state.posts, payload];
    },
    [createPostAPI.rejected]: (state, { payload }) => {
      console.log(payload);
    },
    [updatePostAPI.fulfilled]: (state, { payload }) => {
      //payload is the updated post.
      state.posts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
    },
    [deletePostAPI.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post._id !== payload);
    },
    [likedPostAPI.fulfilled]: (state, { payload }) => {
      state.posts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
    },
  },
});
// export const { createPost } = postSlice.actions;
export default postSlice.reducer;
