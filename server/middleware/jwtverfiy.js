import jwt  from "jsonwebtoken";


const jwtVerfy = async (req,res,next) => {
  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({
      message: "token not found"
    })
  }

  const authToken  = token.split(" ")[1];

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    if(decoded){
      req.user = decoded;
      next();
    }
    else
    {
       throw new Error("invalid token or expired token");
    }
  } catch (error) {
    console.error("jwt error", error.message);
    return res.status(401).json({
      message: "invalid token or expired token"
    })
  }
}
export default jwtVerfy; 