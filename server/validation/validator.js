import zod, { Schema } from "zod";

const validator = async (Schema  , body , next , res ) => {
    try {
        const value  = Schema.safeParse(body);
        console.log(value.success);
        if(value.success){
            next();
        }
        else{
            res.status(400).json({
                error: value.error.errors
            }) 
        }
    } catch (error) {
       if(error instanceof zod.ZodError)
        {
            res.status(400).json({
                error: error.errors
            })
        }
        else{
            res.status(500).json({
                error: "Internal Server Error"
            })
        }

    
    }
}

export default validator; // Path: server/validation/validator.js