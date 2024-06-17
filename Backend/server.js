import express from "express";
import authRoutes from "./routes/authRoutes.js";
import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from './routes/userRoutes.js'
dotenv.config();
cloudinary.config({
      cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
      api_key:process.env.CLOUDINARY_API_KEY,
      api_secret:process.env.CLOUDINARY_API_SECRET,
})
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.listen(5000,()=>{
      console.log("server is running on port 5000")
      connectMongoDB();
});