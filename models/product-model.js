// schema : war9a kima 3and idara (sequeulette)
const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({

refproduct:{
    type:String,
    required:true
},

description:{
    type:String,
    required:true
}, 

price:{
    type:String,
    required:true
},

stock:{
    type:String,
    required:true
}



},{timestamps:true})

module.exports = mongoose.model("products",productSchema)


