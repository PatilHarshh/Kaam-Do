import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: '3d' })
}

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, accountType } = req.body;
    try {
        const user = await User.signup(firstName, lastName, email, password, accountType);
        const token = createToken(user._id)
        let { _id, userEmail = email } = user;
        res.status(200).json({ _id, email: userEmail, token });
    }
    // rest of the code
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });

    }
}


const loginUser = async (req, res) => {
    
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id)
        let { _id, userEmail = email } = user;
        res.status(200).json({ _id, email: userEmail, token });
    }
    // rest of the code
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });

    }

}

export default {
    registerUser,
    loginUser
}
