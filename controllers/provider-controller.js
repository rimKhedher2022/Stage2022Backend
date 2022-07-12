const provider_model= require("../models/provider-model")


module.exports=
{
    register:(req,res)=>

    {

        req.body["image"]=req.file.filename
        const provider = new provider_model(req.body)
        provider.save(req.body,(err,item)=>
        
        
        {
            if(err)
            {
res.status(406).json({message:"failed to create provider"})
            }

            else
            {
                res.status(201).json({message:"provider created successuflly"})
            }
        }
        
        )




    }
}