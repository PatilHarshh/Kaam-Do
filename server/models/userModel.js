import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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


userSchema.statics.signup = async function(firstName,lastName,email, password,accountType) {

    // validation
    if(!firstName || !lastName || !email || !password){
        throw Error("All fields are required")
    }
    if(!validator.isEmail(email)){
        throw Error("Email is invalid")
    }

    const exists=await this.findOne({email})
    if(exists){
        throw Error("Email already exists")
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({firstName,lastName,email, password:hashedPassword,accountType});
    return user


}
userSchema.statics.login = async function(email, password) {
    
    // validation
    if(!email || !password){
        throw Error("Email and password are required")
    }
    
    const user=await this.findOne({email})
    if(!user){
        throw Error("Email does not exist")
    }
    const auth=await bcrypt.compare(password,user.password)
    if(!auth){
        throw Error("Password is incorrect")
    }
    return user

}



const User= mongoose.model("User", userSchema);

export default User;

