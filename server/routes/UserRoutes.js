import { Router } from "express";
import { loginUser , signupUser } from "../controller/userController.js";  
import { signupValidator , loginValidator } from "../validation/userValidation.js";  
import jwtVerfy from "../middleware/jwtverfiy.js";


const router = Router();



router.post("/login", loginValidator, loginUser);
router.post("/signup", signupValidator, signupUser);

// test route for jwt middleware
router.get("/test", jwtVerfy, (req, res) => {
  res.json({
    message: "Test route for jwtverificaiton middleware",
  });
});


export default router; 