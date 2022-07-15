const UserModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET



// generate accesstoken 

const generateAccessToken=(user)=>
{
    return jwt.sign({id:user._id,email:user.email},JWT_SECRET,{expiresIn:"30m"})
}



module.exports={
// kan le9a email fil base  , validation lil password 


// kan password se7i7 ; yeraja3 user

// findOne : telawij 3ala 7aja mou3ayna

login:async(req,res)=>
{
// await1 : executi  : UserModel.findOne({email:req.body.email})
// await 2 : 

const user = await UserModel.findOne({email:req.body.email})

if(!user)
{
    res.status(406).json("email not found")
}


else{

    const validPassword = await bcrypt.compare(req.body.password,user.password)


if(!validPassword)
{
    res.status(406).json("password incorrect")
}


else{
    const accesstoken = generateAccessToken(user)
    res.status(200).json({data:user,accesstoken}) // min gir data normal 
}

}

}




}


// token


//jwt : 3 parties 
// part 1 : dima mawjouda 