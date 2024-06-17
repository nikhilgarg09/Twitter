import express from "express";
import { signup } from "../controllers/authController.js";
import { login,logout } from "../controllers/authController.js";
import { protectRoute } from "../Middlewares/protectRoute.js";
import { getMe } from "../controllers/authController.js";
const router = express.Router();
router.get("/me",protectRoute,getMe);
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
export default router;