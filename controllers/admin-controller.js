//register
const admin_model = require("../models/admin-model")
module.exports={



    register:(req,res)=>

    {
                    req.body["image"] = req.file.filename
                const admin = new admin_model(req.body)
                admin.save(req.body,(err,item)=>
                
                {
                    if(err)

                    {
            res.status(406).json({message:"failed to create this admin "})
                    }

                    else

                    {
                        res.status(201).json({message:"admin created ",data:item})
                    }
                }
                
                )



    } , 





    getall:(req,res)=>

    {
admin_model.find({},(err,items)=>

{

    if(err)
    {
res.status(406).json({message:"failed to get all admins"})
    }

    else

    {
        res.status(201).json({message:"list of admins",data:items})
    }
}

)

    },



    getone:(req,res)=>


    {
        admin_model.findById(req.params.id,(err,items)=>
        
        {
            if(err)
            {
res.status(406).json({message:"failed to get this admin"})
            }

            else 


            {
res.status(201).json({message:"admin by id ",data:items})
            }
        }
        
        
        )
    } , 



    getbyname:(req,res)=>
    {
                admin_model.find({firstname:req.query.firstname},(err,items)=>
                {

                    if(err)

                    {
                res.status(406).json({message:"failed to get admin by this name"})
                    }

                    else

                    {
                res.status(201).json({message:"admin by this name ",data:items})
                    }
                }
                )

    },



    update:(req,res)=>


    {
     admin_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>

     {

        if(err)
        {
res.status(406).json({message:"failed to update this admin"})
        }

        else


        {
            res.status(201).json({message:"updated",data:item})
        }
     }
    
     
     
     
     )

    }, 

    delete:(req,res)=>

{
    admin_model.findByIdAndRemove(req.params.id , (err)=>
    
    {

        if(err)

        {
res.status(406).json({message:"failed to delete this admin"})
        }

        else
        {
            res.status(201).json({message:"admin deleted "})

        }
    }
    
    
    )
} 






}