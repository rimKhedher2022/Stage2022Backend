
const UserModel = require("./user-model")  // class parent 
const mongoose = require("mongoose") // class child


const providerSchema = new mongoose.Schema({

    company:{

        type:String,
        required:true
    }

})
// cette classe hérite de la class mere 'user' et ajoute l'attribut company 

const Providers = UserModel.discriminator("Providers",providerSchema) // reference pour la liaison , ismou 

module.exports= mongoose.model("Providers")