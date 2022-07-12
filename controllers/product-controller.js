const product_model = require("../models/product-model")
const subcategory_model = require("../models/subcategory-model")
module.exports = {


// pushi product fi subcategory 
create:(req,res)=>{

// bech nezid image 
    req.body["image"]=req.file.filename

const product = new product_model(req.body) // lo9dom
product.save(req.body,(err,item)=>{
if(err)
{
    res.status(406).json({message:"failed to create product"})
}
// push products dans subcategory 

    else {

    subcategory_model.findByIdAndUpdate(req.body.subcategory, // se7i7 
        
    {$push:{products:product}} ,()=>  // zid products jedid
    {
        res.status(201).json({message:"product created successuflly" , data:item})  
    }
        
        )



        
    }

})

},



getall:(req,res)=>{

    product_model.find({}).populate("subcategory").exec((err,items)=> // attribut te7illou
    {
        if(err)
        {
            res.status(406).json({message:"failed to get all products"})
        }
        else 
        {
            res.status(201).json({message:"list of products",data:items}) 
        }
    })
    
    
    
},

getone:(req,res)=>
{
    product_model.findById(req.params.id,(err,items)=>
    {
        if(err)
        {
            res.status(406).json({mesage:"failed to get this product by this id"})
        }
        else{
            res.status(201).json({mesage:"product",data:items})
        }
    }
    
    
    )
},


// query avec k => key (exemple : je cherche sumsung dans amazon.fr)
// postman query params
getbyname:(req,res)=>
{
    product_model.find({refproduct:req.query.refproduct},(err,items)=>
    {
        if(err)
        {
            res.status(406).json({message:"failed to get product by this name"})
        }

        else 
        {
            res.status(201).json({message:"product",data:items})  
        }
        
    }
    
    
    )
},
// nezid 7aja jedida ==> req.body


update:(req,res)=>
{
    product_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
    
    {

        if(err)
        {
            res.status(406).json({mesage:"failed to update product"})
        }

        else 
        {
            res.status(201).json({message:"product update successuflly" , data:item})
        }

    })
},



//delete 

delete:(req,res) =>{
    product_model.findByIdAndRemove(req.params.id,(err)=>
    {
        if(err)
        {
res.status(406).json({message:"failed to delete"})
        }

        else
        {
            res.status(201).json({message:"deleted successuflly"})

        }
    })
}







}




