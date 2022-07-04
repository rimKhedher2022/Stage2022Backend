const mongoose = require ("mongoose")

const database = mongoose.connect("mongodb://localhost:27017/stage3",(err)=>
{
if(err)
{
    console.log("failed to  connect"+err)
}
else{
    console.log("connected successfully with DB")
}
})

module.exports = database 

