import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min:0,
        max: 5
    }
})
export const Feedback = mongoose.model("Feedback", feedbackSchema); 