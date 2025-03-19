import  Jobs from '../models/Jobs-model.js';
//returns all the Jobs
const getAllJobs=async (req,res)=>{
    try{
        const alljobs=await Jobs.find();
        res.status(200).json({
            alljobs,
        })
    }catch(e) {
        res.status(500).json({
            msg:"internal server error"
        })
    }
}

//helps us to create a Job
const createJob=async(req,res)=>{
    try{
        const newjob=await  Jobs.create(req.body);
        res.status(201).json({
            newjob
        })
    }catch(e) {
        res.status(500).json({
            msg:"internal server error"
        })
    }
}

//get the Job data using job id

const getJobById=async(req,res)=>{
    try{
        const jobbyid=await Jobs.findById(req.params.id);
        res.status(200).json({
            jobbyid
        })
    }catch(e) {
        res.status(500).json({
            msg:"internal server error"
        })
    }
}


//update the job details
const updateDetails=async(req,res)=>{
    try{
    const newdetails=await Jobs.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
    });
    res.status(200).json({
        newdetails,
    })
    }catch(e) 
    {
        res.status(500).json({
            msg:"internal server error"
        })
    }
}

//delete  a particular job

const deleteJob=async(req,res)=>{
    try{
        const deleteDetails=await Jobs.findByIdAndDelete(req.params.id);
        res.status(204).json({
            deleteDetails,
        })
    }catch(e){
        res.status(500).json({
            msg:"internal server error"
        })
    }
}
export { getAllJobs, createJob, getJobById, updateDetails, deleteJob };