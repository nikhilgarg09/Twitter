import express from "express";
import { protectRoute } from "../Middlewares/protectRoute.js";
import { createPost,likeUnlikePost,commentOnPost,deletePost, getAllPosts, getLikedPosts, getFollowingPosts, getUserPosts } from "../controllers/postcontroller.js";
const router = express.Router();
router.get("/all",protectRoute,getAllPosts);
router.get("/user/username",protectRoute,getUserPosts)
router.get("/following",protectRoute,getFollowingPosts)
router.get("/likes/:id",protectRoute,getLikedPosts)
router.post("/create",protectRoute,createPost);
router.post("/like/:id",protectRoute,likeUnlikePost)
router.post("/comment/:id",protectRoute,commentOnPost)
router.post("/:id",protectRoute,deletePost)
export default router;
