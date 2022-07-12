const UserModel = require("./user-model")  //  class mére 

const mongoose = require("mongoose")


// class child

const clientSchema = new mongoose.Schema({


    adressL:{ // livraison
        type:String, 
        required:true


    }

})


// bech ya5ou w yezid 3lihom ==> héritage 
// cette classe hérite de la class mere 'user' et ajoute l'attribut adressL 

const Clients = UserModel.discriminator("Clients",clientSchema)


module.exports = mongoose.model("Clients") 


