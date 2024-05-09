
import express from 'express';
import UserControllers from '../controllers/userControllers.js';
const userRoutes = express.Router();

userRoutes.post('/register', UserControllers.registerUser);
userRoutes.post('/login', UserControllers.loginUser);


export default userRoutes;