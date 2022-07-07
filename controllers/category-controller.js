const category_model = require("../models/category-model")

module.exports={

// fonction create 

create:(req,res)=>

{
    const category = new category_model(req.body)
    category.save(req.body,(err,item)=>
    
    {
        if(err)
        {
res.status(406).json({messsage:"failed to create the category "})
        }

        else{
res.status(201).json({messsage:"created successfuly",data:item})
        }
    })
    
    
    
}, 

// get all categories 
getall:(req,res)=>{
category_model.find({},(err,items)=>

{
    if(err)
    {
res.status(406).json({message:"failed to get all categories"})
    }

    else{
        res.status(201).json({message:"list of categories",data:items})

    }
}



)
},

// get one category by id

getone:(req,res)=>

{
    category_model.findById(req.params.id,(err,item)=>
    
    {
        if (err)
        {
res.status(406).json({message:"failed to get this category by this id"})
        }


        else {
            res.status(201).json({message:"category",data:item})

        }
    }
    
    )
},


getbyname:(req,res)=>

{
category_model.find({name:req.query.name},(err,item)=>

{
    if(err)
    {
res.status(406).json({message:"failed to get this category"})
    }


    else 
    {
        res.status(201).json({message:"category by name",data:item})
    }

}


)
},


update:(req,res)=>

{
    category_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
    
    {
        if(err)
        {
res.status(406).json({message:"failed to update this category"})
        }

        else {
            res.status(201).json({message:"category update successufly",data:item})

        }
    }
    
    )
},


delete:(req,res)=>
{

category_model.findByIdAndRemove(req.params.id,(err)=>

{
    if(err)
    {
res.status(406).json({messsage:"failed to delete this category"})
    }

    else{
        res.status(201).json({messsage:"category deleted"})
    }
}


)

}









}
