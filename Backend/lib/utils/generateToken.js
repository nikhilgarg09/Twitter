import jwt from 'jsonwebtoken';
export const generateTokenAndSetCookie = (userid,res)=>{
    const token = jwt.sign({userid},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true,
        sameSize:"strict",
        secure:process.env.NODE_ENV !=="development",
    })
}
