import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
const initialState = {
  posts: [],
  text: "this is the post slice",
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
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPost: (state, { payload }) => {
      return state;
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
  },
});
export const { createPost } = postSlice.actions;
export default postSlice.reducer;
