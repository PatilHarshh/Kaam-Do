import express from "express";
import {createFeedback} from "../controllers/feedback.controller.js";

const router = express.Router();

// Feedback Router
router.post("/createFeedback", createFeedback);

export default router;