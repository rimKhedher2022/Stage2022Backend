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






app.use('/products', product_router)
app.use('/subcategories',subcategory_router )
app.use('/categories',category_router)
app.use('/orders',order_router)

// le port de l'application
app.listen(PORT,()=>{
      console.log(`http://localhost:${PORT}`)

}) 
