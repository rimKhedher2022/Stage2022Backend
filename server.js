// serveur local 
const express = require ("express")

const app = express()
const dotenv = require('dotenv').config()
const database = require("./config/database")


const PORT = process.env.PORT

app.use(express.json()) // middleware

const product_router = require ("./routers/product-router")

const subcategory_router  = require("./routers/subcategory-router")

const category_router = require("./routers/category-router")

const order_router = require ("./routers/order-router")

const client_router = require("./routers/client-router")


const provider_router=require("./routers/provider-router")

app.use('/products', product_router)
app.use('/subcategories',subcategory_router )
app.use('/categories',category_router)
app.use('/orders',order_router)
app.use('/clients',client_router)
app.use('/providers',provider_router)


// affichage image 3al browser 

// :img => ana na3tih 
// yeraja mil dousi storage avec img(ana 3etitou )



app.get("/getImg/:img",(req,res)=>

{
      res.sendFile(__dirname+"/storages/"+ req.params.img)
})



// le port de l'application
app.listen(PORT,()=>{
      console.log(`http://localhost:${PORT}`)

}) 



