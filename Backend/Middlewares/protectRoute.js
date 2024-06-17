import User from "../models/userModel.js";
import jwt from "jsonwebtoken"
export const protectRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized No token Provided"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error : "unauthorized : Inalid Token"});
        }
        
        const user = await User.findById(decoded.userid).select("-password");
        
        if(!user){
            return res.status(404).json({error : "user not found hello"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("error in protected route middleware",error.message);
        return res.status(500).json({error : "internal server error"});
    }
}