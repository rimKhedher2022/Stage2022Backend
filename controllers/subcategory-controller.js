const subcategory_model = require ("../models/subcategory-model")
const category_model= require("../models/category-model")

module.exports = {

 //creation d'un subcategory 

create:(req,res)=>{

const subcategory = new subcategory_model(req.body)
subcategory.save(req.body,(err,item)=>
{

    if (err)
    {
        res.status(406).json({message:"failed to create subcategory "})
    }

    else 
    {
category_model.findByIdAndUpdate(req.body.category, // update fil category , mdification 
    
 {$push:{subcategories:subcategory}},()=> //    dans l'attribut subcategories a la création d 'un subcategory directement push dans category 
 {
    res.status(201).json({message:" subcategory created successuflly" , date:item})
 })  
    
    
    





        
    }

})



} , 



getall:(req,res)=>
{
    subcategory_model.find({}).populate({path:"products"}).exec((err,items)=>   /// kif yabda array 
    
    {
        if(err)
        {
            res.status(406).json({message:"failed to get all subcategories "})
        }

        else 
        {
            res.status(201).json({message:"list of subcategories",data:items})
        }
    })
    
}, 



// getByid subcategory
getone:(req,res)=>

{
subcategory_model.findById(req.params.id,(err,items)=>{

 if(err)
{
res.status(406).json({message:"failed to get subcategories"})
}

else{
    res.status(201).json({message:"subcategory",data:items})

}

}
)



},  // fin de la fonction 

// getByName Subcategory 

getbyname:(req,res)=>
{
    subcategory_model.find({name:req.query.name},(err,items)=>
    {
    if (err)
    {
    res.status(406).json({message:"failed to get this subcategory by this name"})
    }

    else 
    {





    res.status(201).json({message:"subcategory ",data:items})
    }
})
    
}, 

// update d 'un subcategory 

update:(req,res)=>
{
subcategory_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>


{

    if (err)
    {

res.status(406).json({message:"failed to update"})
    }

    else {
        res.status(201).json({message:"subcategory updated succssefuly",data:item})

    }

}

)


}, 



delete:(req,res)=>{
    subcategory_model.findByIdAndRemove(req.params.id,(err)=>
    {
        if(err)
        {
res.status(406).json({message:"not deleted"})
        }

        else {
res.status(201).json({message:"deleted succesfuly"})
        }
    }
    
    
    )
}

    
}