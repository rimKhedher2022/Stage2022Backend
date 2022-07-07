const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(

{

    ref:{
        type:String,
        required:true
    },


    date:
    {
        type:String,
        required:true

    },

    pricetotal:{
        type:String,
        required:true

    },

    status:{
        type:String, 
        default:"en attente"

    },


    products:[

        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"products"
        }
    ]



},{timestamps:true}


)
module.exports = mongoose.model("orders",orderSchema)

// reference 


// priceTotal

// DateLivraison