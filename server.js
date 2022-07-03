// serveur local 
const express = require ("express")

const app = express()



app.get("/",(req,res)=>{
    res.send("hello world")
})







// le port de l'application
app.listen(5000,()=>{
      console.log("http://localhost:5000")

}) 
