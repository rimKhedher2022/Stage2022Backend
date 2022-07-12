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
                res.status(201).json({message:"provider created successuflly",data:item})
            }
        }
        
        )




    },

    getall:(req,res)=>


    {
        provider_model.find({},(err,items)=>
        {

            if(err)
            {
        res.status(406).json({message:"failed to get all providers "})
            }

            
            else 
           {
        res.status(201).json({message:"list of providers",data:items})
           }

        }
        
        
        
        )
    },


    getone:(req,res)=>
    {

        provider_model.findById(req.params.id,(err,items)=>

            {


                if(err)
                {
            res.status(406).json({message:"failed to get this provider"})
                }

                else 


                {
            res.status(201).json({message:"provider",data:items})
                }
            }
            )


    },

    getbyname:(req,res)=>
    {
            provider_model.find({firstname:req.query.firstname},(err,items)=>
            {

                if(err)

                {
            res.status(406).json({message:"failed to get provider by this name"})
                }

                else

                {
            res.status(201).json({message:"provider by this name ",data:items})
                }
            }



            )

    }, 



    update:(req,res)=>


    {
        provider_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>

            {
                if(err)
                {
            res.status(406).json({message:"failed to update this provider"})

                }

                else
                {

                    res.status(201).json({message:" provider updated successufly", data:item})
                }
            }



            )


    },


    delete:(req,res)=>


    {
                provider_model.findByIdAndRemove(req.params.id,(err)=>
    
                
                {
                    if(err)
                    {
            res.status(406).json({message:"failed to delete this provider"})
                    }
                    else
                    {
                        res.status(201).json({message:"deleted successuflly"})
    
                    }
    
                }
                )
    }




}