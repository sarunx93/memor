import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, newPost) => API.patch(`posts/${id}`, newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likedPost = (id) => API.patch(`/posts/${id}/likedPost`);
