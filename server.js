// serveur local 
const express = require ("express")

const app = express()
const database = require("./config/database")









// le port de l'application
app.listen(5000,()=>{
      console.log("http://localhost:5000")

}) 
