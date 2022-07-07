//instance de l'express ismha Router
// creation = post  bech nab3ath (postih )
// delete = delete 
// update = put 

const route = require("express").Router()
const product_controller = require("../controllers/product-controller")

route.post('/create',product_controller.create)

route.get('/getall',product_controller.getall)

route.get('/getbyId/:id',product_controller.getone)
route.get('/getbyname',product_controller.getbyname)
route.put('/update/:id',product_controller.update)
route.delete('/delete/:id',product_controller.delete)

module.exports = route