import mongoose from "mongoose";
const connectMongoDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected");

    } catch(error){
        console.error(`error connection to mongodb :${error.message}`)
    }
}
export default connectMongoDB;