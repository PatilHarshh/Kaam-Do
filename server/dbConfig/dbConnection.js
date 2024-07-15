import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
          });
        console.log("Database connected successfully");


    } catch (error) {
        console.log('MongoConnection Failed !!' + error )
    }
}

export default dbConnection;