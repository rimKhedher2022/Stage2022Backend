const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const verifyToken =(req,res,next) =>
{
const token = req.headers.authorization
if(token)
{
    jwt.verify(token,JWT_SECRET,(err,payload)=>
    
    {
        if(err)
        {
            res.status(403).json("token is not valid")
        }

        else{
            req.user=payload
            next()
        }
    }
    
    )
}

else{
    res.status(403).json("you  are not authenticated ! please login")
}
}

module.exports= verifyToken

