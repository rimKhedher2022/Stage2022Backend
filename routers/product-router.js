//instance de l'express ismha Router
// creation = post  bech nab3ath (postih )
// delete = delete 
// update = put 

const route = require("express").Router()
const product_controller = require("../controllers/product-controller")

const upload = require("../middlewares/uploadFile")

const verifyToken = require("../middlewares/verifyToken")



route.post('/create',upload.single("photo"),product_controller.create)

route.get('/getall',verifyToken,product_controller.getall)  // verifyToken

route.get('/getbyId/:id',product_controller.getone)
route.get('/getbyname',product_controller.getbyname)
route.put('/update/:id',product_controller.update)
route.delete('/delete/:id',product_controller.delete)
route.delete('/deleteproduct/:id',product_controller.deleteproductfromsubcat)

module.exports = route