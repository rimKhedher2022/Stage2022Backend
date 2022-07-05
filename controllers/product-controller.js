const product_model = require("../models/product-model")

module.exports = {

create:(req,res)=>{

const product = new product_model(req.body)
product.save(req.body,(err,item)=>{
if(err)
{
    res.status(406).json({message:"failed to create product"})
}
else {
    res.status(201).json({message:"product created successuflly" , data:item}) 
}

})

},

}