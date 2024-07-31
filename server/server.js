import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import xss from'xss-clean';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import dbConnection from './dbConfig/dbConnection.js';
import { User } from './models/userModel.js';

dotenv.config();

const app = express();


const PORT = process.env.PORT || 8800;

// DB CONNECTION
dbConnection();

// middleware
app.use(cors());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(ExpressMongoSanitize());
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({extended: true}));



app.use(morgan("dev"));
app.post("/signup" ,async (req,res )=>{
    const { email, firstName, lastName, password } = req.body;

  //5.creating a User and posting the daat in the database(Mongoose db here)..
  const user = await User.create({
    firstName,
    lastName,
   
    email,
    password,
  
  });


  if (!user) {
    throw new error("user not created")
  }

  
  return res
    .status(200)
    .json({msg: "User Registered successfully !!"});
})



// Listen
app.listen(PORT, ()=>{
    console.log(`Development server running on port: ${PORT}`);
})

