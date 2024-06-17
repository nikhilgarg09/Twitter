import express from "express";
import { protectRoute } from "../Middlewares/protectRoute.js";
import { followUnfollowUser } from "../controllers/userController.js";
import { getUserProfile,getSuggestedUsers,updateUser } from "../controllers/userController.js";
const router = express.Router();
router.get("/profile/:username",protectRoute,getUserProfile)
router.get("/suggested",protectRoute,getSuggestedUsers)
router.post("/follow/:id",protectRoute,followUnfollowUser)
router.post("/update",protectRoute,updateUser)
export default router;
