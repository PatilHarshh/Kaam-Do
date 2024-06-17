import { Feedback } from "../models/feedbackModel.js";

export const createFeedback = async (req, res) => {
    const { userName, userEmail, feedback, rating } = req.body;
    console.log(req.body);
    try {
      // Create a new feedback object based on Feedback model
      const newFeedback = new Feedback({
        userName,
        userEmail,
        feedback,
        rating
      });
  
      // Save the feedback to the database
      const savedFeedback = await newFeedback.save();
  
      res.status(201).json(savedFeedback); 
    } catch (error) {
        console.log(error);
      res.status(500).json({ message: error.message });
    }
  };