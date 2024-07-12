import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        // required :[true, "First Name is required"]
    },
    lastName:{
        type:String,
        // required :[true, "Last Name is required"]
    },
    username:{
        type: String,
        require: true,
        unique: true,
    },
    email:{
        type:String,
        required :[true, "Email Name is required"],
        unique: true,  //checks if the email already exists in database or not
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
    },
    avatar:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      },
},
{ timestamps: true }
);
const User = mongoose.model('User', userSchema);

export default User;