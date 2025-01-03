import jwt from "jsonwebtoken";

export const isAuth = (req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"Unauthorized user !",
                success:false,
            });
        }

        let data = jwt.verify(token,process.env.JWT_SECRET);
        req.id = data.id;
        next();

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Server error , please try again later !",
            success:false,
        });
    }
}
