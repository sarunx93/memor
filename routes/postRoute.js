import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likedPost,
} from "../controllers/postController.js";
const router = express.Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").patch(updatePost);
router.route("/:id").delete(deletePost);
router.route("/:id/likedPost").patch(likedPost);

export default router;
