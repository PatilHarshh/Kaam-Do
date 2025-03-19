import express from 'express';
const JobRouter = express.Router();
import { getAllJobs, createJob, getJobById, updateDetails, deleteJob } from '../controllers/Jobs-Controller.js';

JobRouter
        .route('/')
        .get(getAllJobs)
        .post(createJob)

JobRouter
        .route('/:id')
        .get(getJobById)
        .patch(updateDetails)
        .delete(deleteJob)

        export default JobRouter;