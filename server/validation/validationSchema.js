import zod from "zod";


export const SignupValidationSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string(),
    accountType: zod.string().optional()
})

export const loginValidationSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})