import validator from "./validator.js";

import { SignupValidationSchema , loginValidationSchema } from "./validationSchema.js";

export const signupValidator = (req, res, next) => {
    validator(SignupValidationSchema, req.body, next , res);
}
export const loginValidator = (req, res, next) => {
    validator(loginValidationSchema, req.body, next , res);
}
