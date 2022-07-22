const UserModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET
const RT_SECRET = process.env.RT_SECRET

let refreshtokens=[] // 

// generate accesstoken 

const generateAccessToken=(user)=>
{
    return jwt.sign({id:user._id,email:user.email},JWT_SECRET,{expiresIn:"30m"})
}

// generate refreshtoken   // 9edima fasa5ha 

const generateRefreshToken=(user)=>

{
    return jwt.sign({id:user._id,email:user.email,},RT_SECRET,{expiresIn:"1h"})
}








//refresh token 





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
    const refreshtoken = generateRefreshToken(user)

    refreshtokens.push(refreshtoken)

    res.status(200).json({message:"welcome" ,data:user,accesstoken,refreshtoken}) // min gir data normal 
}

}

},
// refreshtoken 
// 
refreshtoken:(req,res)=>

{
    //take the refresh token from the user
    const refreshtoken=req.body.token

    if(!refreshtokens.includes(refreshtoken))
    {
        return res.status(401).json("refresh token is not valid")
    }

    jwt.verify(refreshtoken,RT_SECRET,(err,user)=>
    
    
    {
        err && console.log(err)

        refreshtokens = refreshtokens.filter((token)=> token !== refreshtoken)
        const newaccesstoken = generateAccessToken(user)
        const newrefreshtoken = generateRefreshToken(user)


        refreshtokens.push(newrefreshtoken)


        res.status(200).json({Accesstoken:newaccesstoken,Refreshtoken:newrefreshtoken})



    }
    
    )

}





}


// token


//jwt : 3 parties 
// part 1 : dima mawjouda 