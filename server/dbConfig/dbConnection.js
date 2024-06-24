import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const dbConnection = async () => {
    try {
        const dbUri = process.env.MONGO_URL;
        if (!dbUri) {
            throw new Error("MONGO_URL environment variable is not set.");
        }

        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected successfully");
    } catch (error) {
        console.log('MongoConnection Failed !! ' + error);
    }
}

export default dbConnection;
