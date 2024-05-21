import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required :true
    },
    lastName:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true,
        unique: true,  //checks if the email already exists in database or not
    },
    password:{
        type:String,
        required :true,
        minlength: 6,
        select: true,
    },

    accountType:{ 
        type: String, 
        default:"seeker"
    }
});


const User = mongoose.model("User", userSchema);

export default User;