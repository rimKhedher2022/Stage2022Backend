// serveur local 
const express = require ("express")

const app = express()
const dotenv = require('dotenv').config()
const database = require("./config/database")

const morgan = require("morgan")

const cors = require("cors")

var corsOptions={
origin:"http://localhost:3000",
optionSuccessStatus:200

}

app.use(cors("corsOptions"))

const PORT = process.env.PORT

app.use(express.json()) // middleware
app.use(morgan('tiny'))

const product_router = require ("./routers/product-router")

const subcategory_router  = require("./routers/subcategory-router")

const category_router = require("./routers/category-router")

const order_router = require ("./routers/order-router")

const client_router = require("./routers/client-router")


const provider_router=require("./routers/provider-router")
const admin_router=require("./routers/admin-router")
const auth_router=require("./routers/auth-router")

app.use('/products', product_router)
app.use('/subcategories',subcategory_router )
app.use('/categories',category_router)
app.use('/orders',order_router)
app.use('/clients',client_router)
app.use('/providers',provider_router)
app.use('/admins',admin_router)
app.use('/auth',auth_router)


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



