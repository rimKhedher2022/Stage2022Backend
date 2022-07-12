const client_model = require ("../models/client-model")

module.exports=
{



register:(req,res)=>


    {

req.body["image"] = req.file.filename

const client = new client_model(req.body)

client.save(req.body,(err,item)=>
{
        if(err)

        {
        res.status(406).json({message:"faild to save client"})
        }

        else
        {
        res.status(201).json({message:"client saved" , data:item})

        }


}


)



    },



    getall:(req,res)=>


    {
        client_model.find({},(err,items)=>
        {

            if(err)
            {
        res.status(406).json({message:"failed to get all clients "})
            }

            
            else 
           {
        res.status(201).json({message:"list of clients",data:items})
           }

        }
        
        
        
        )
    },



    getone:(req,res)=>


    {
        client_model.findById(req.params.id,(err,items)=>
        
        {
            if(err)
            {
res.status(406).json({message:"failed to get this client"})
            }

            else 


            {
res.status(201).json({message:"client",data:items})
            }
        }
        
        
        )
    } , 



    getbyname:(req,res)=>
    {
client_model.find({firstname:req.query.firstname},(err,items)=>
{

    if(err)

    {
res.status(406).json({message:"failed to get client by this name"})
    }

    else

    {
res.status(201).json({message:"client by this name ",data:items})
    }
}



)

    }, 



    update:(req,res)=>


    {
            client_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>

            {
                if(err)
                {
            res.status(406).json({message:"failed to update this client"})

                }

                else
                {

                    res.status(201).json({message:" client updated successufly", data:item})
                }
            }



            )


    },



delete:(req,res)=>


{
            client_model.findByIdAndRemove(req.params.id,(err)=>

            
            {
                if(err)
                {
        res.status(406).json({message:"failed to delete this client"})
                }
                else
                {
                    res.status(201).json({message:"deleted successuflly"})

                }

            }
            )
}







}