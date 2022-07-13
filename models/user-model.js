const mongoose = require("mongoose")
const bcrypt = require("bcrypt") // importer le package 

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

       /* isAdmin:{ // autre methode , schema kima client sans  attributs
            type:String,
            default:false
        }*/

        //token : te7ot itemtype , w tesir vérification 3al itemtype

        






    }, baseOptions,  {timestamps:true})
   


    
// password hashage , codi el pwd : bcrypt

// pre = 9bal 
// salt : degre de complexité de hashage la plus part 10 (exemle 400)

// next : middleware


userSchema.pre("save",function(next)

{
    if(this.password){
        var salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.hashSync(this.password,salt)
    }
    next() // bech yekamil el stockage w affichage de (client saved ..., provider saved ..)
})






    
module.exports = mongoose.model("users",userSchema) // reference