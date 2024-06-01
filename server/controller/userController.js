import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userexist = await User.findOne({
      email,
    });

    if (!userexist) {
      return res.status(422).json({
        message: "User does not exist",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userexist.password
    );
    if (!isPasswordCorrect) {
      return res.status(422).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      { email: userexist.email, id: userexist._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.status(200).json({
      message: "Login Successfull",
      token,
      user: {
        email: userexist.email,
        id: userexist._id,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "internal Server Error",
    });
  }
};

export const signupUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const userexist = await User.findOne({
      email,
    });

    if (userexist) {
      return res.status(422).json({
        message: "User already exist",
      });
    }

    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
    const user = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    res.status(200).json({
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Signup Failed",
    });
  }
};
