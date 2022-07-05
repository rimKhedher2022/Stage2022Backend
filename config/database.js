const mongoose = require ("mongoose")

const dotenv = require('dotenv').config()

const BD = process.env.BD 

const database = mongoose.connect(BD,(err)=>
{
if(err)
{
    console.log("failed to  connect "+err)
}
else{
    console.log("connected successfully with BD")
}
})

module.exports = database 

