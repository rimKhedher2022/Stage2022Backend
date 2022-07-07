const order_model = require("../models/order-model")

module.exports = {


    create:(req,res)=>

    {
        const order = new order_model(req.body)
        order.save(req.body,(err,item)=>
        
        {
            if(err)
            {
        res.status(406).json({message:"failed to create this order"})
            }

            else 
            {
        res.status(201).json({message:"order created ",data:item})
            }
        }
        
        )

    },

// afficher tous les orders


getall:(req,res)=>


{
    order_model.find({},(err,items)=>
    
    {
        if(err)
        {
res.status(406).json({message:"failed to get all orders"})
        }

        else 
        {
res.status(201).json({message:"list of orders ",data:items})
        }
    }
    
    )
}, 



getbyid:(req,res)=>

{
order_model.findById(req.params.id,(err,item)=>

{

    if(err)
    {
res.status(406).json({message:"failed to get this order by this id "})
    }
    else
    {
 res.status(201).json({message:"order : ",data:item})
    }
})



}, 


getbyname:(req,res)=>


{
    order_model.find({ref:req.query.ref},(err,items)=>
    
    {
if(err)
{
res.status(406).json({message:"failed to get this order by name"})
}

else{
res.status(201).json({message:"order ",data:items})
}

    })
},



update:(req,res)=>


{

order_model.findOneAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
{
if(err)

{
res.status(406).json({message:"update failed"})
}

else
{
    res.status(201).json({message:"update ",data:item})
}

}
)


}, 



delete:(req,res)=>

{
order_model.findByIdAndRemove(req.params.id,(err)=>
{
if(err)
{
    res.status(406).json({message:"deleted failed"})
}

else

{
    res.status(201).json({message:"deleted"})
}
}



)

}


}
