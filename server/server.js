import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import authRouter from './routes/authRoute.js'
import xss from'xss-clean';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import dbConnection from './dbConfig/dbConnection.js';

dotenv.config();

const app = express();


const PORT = process.env.PORT || 8800;

// DB CONNECTION
dbConnection();

// middleware
app.use(cors(
    {
      origin:"http://localhost:5173",
      credentials: true
    }));
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(ExpressMongoSanitize());
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({extended: true}));

app.use(morgan("dev"));


//routes 
app.use('/api/auth', authRouter);
// Listen
app.listen(PORT, ()=>{
    console.log(`Development server running on port: ${PORT}`);
})


app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
      success:false,
      statusCode,
      message,
  });
})
