import dotenv from "dotenv";
import mongoose from "mongoose"

dotenv.config();

export const ConnectDB = async () => {
    try {
         const MongoDB_URL = process.env.MONGOURLCONNECTIONSTRING;
         const Connection = await mongoose.connect(MongoDB_URL);

         console.log("MongoDB connected");

         return Connection;
 
    }
    catch (error) {
        console.error("Error", error)
        
    }
    
};
