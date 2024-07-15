import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const google = async (req, res, next) => {
    try {
      const user = await User({ email: req.body.email });
      if (user) {
        const token = jwt.sign({ id: user._id }, "secret");
        const { password: pass, ...rest } = user._doc;
        res.status(200).json({ ...rest, token });
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
        const newUser = new User({
          username:
            req.body.name.split(' ').join('').toLowerCase() +
            Math.random().toString(36).slice(-4),
          email: req.body.email,
          password: hashedPassword,
          avatar: req.body.photo,
        });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, "secret");
        const { password: pass, ...rest } = newUser._doc;
        res.status(200).json({ ...rest, token });
      }
    } catch (error) {
      next(error);
    }
  };
  