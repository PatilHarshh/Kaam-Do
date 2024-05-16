import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required :[true, "First Name is required"]
    },
    lastName:{
        type:String,
        required :[true, "Last Name is required"]
    },
    email:{
        type:String,
        required :[true, "Email Name is required"],
        unique: true,  //checks if the email already exists in database or not
        validate: validator.isEmail
    },
    password:{
        type:String,
        required :[true, "Password  is required"],
        minlength: [6, "Password must be at least"],
        select: true,
    },

    accountType:{ 
        type: String, 
        default:"seeker"
    }
});