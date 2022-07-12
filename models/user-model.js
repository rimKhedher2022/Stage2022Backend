const mongoose = require("mongoose")

// class parent 

const baseOptions=

{
    discriminatorKey:'itemtype',

    collection:'users'
}; 



const userSchema  = new mongoose.Schema({

   
        firstname:
        {
            type:String, 
            required:true 
        },
    
        lastname:
        {
            type:String, 
            required:true 
        },



        email:

        {
            type:String , 
            required:true 
        }, 

        password:{

            type:String , 
            required:true 
        },

        image:{
         type:String,
         required:true

        },

        







    }, baseOptions,  {timestamps:true})
   
    
module.exports = mongoose.model("users",userSchema) // reference