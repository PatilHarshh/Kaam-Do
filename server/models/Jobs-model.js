import mongoose from 'mongoose';

const JobSchema=new mongoose.Schema({

    JobRole:{
        type:String,
        required:[true,"A Job Role is required For a Job"],
    },
    location:{
        type:String,
        required:[true,"a Location is required for a Job Role"],
    },
    Company:{
        type:String,
        required:[true,"Company name must be provided for a job Role"],
    },
    Salary:{
        type:Number,
        required:[true,"The Salary must be provided for the job Role"],
    },
    NoofVacancies:{
        type:Number,
        required:[true,"The Number of Vacancies must be provided for the job role"],
    },
    JobDescription:{
        type:String,
        required:[true,"Please Provide the Job Description for the Job Role"],
    },
    Requirement:{
        type:String,
        required:[true,"please provide the requirements for the Job role"],
    },
}, { timestamps: true });

const JobModel=new mongoose.model('Job',JobSchema);

export default JobModel;