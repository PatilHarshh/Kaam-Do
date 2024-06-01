import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");


    } catch (error) {
        console.log('MongoConnection Failed !!' + error );
    }
}

export default dbConnection;