// serveur local 
const express = require ("express")

const app = express()
const dotenv = require('dotenv').config()
const database = require("./config/database")




const PORT = process.env.PORT

app.use(express.json()) // middleware

const product_router = require ("./routers/product-router")
app.use('/products', product_router)


// le port de l'application
app.listen(PORT,()=>{
      console.log(`http://localhost:${PORT}`)

}) 
