//instance de l'express ismha Router
// creation = post  bech nab3ath (postih )
// delete = delete 
// update = put 

const route = require("express").Router()
const product_controller = require("../controllers/product-controller")
route.post('/create',product_controller.create)

module.exports = route