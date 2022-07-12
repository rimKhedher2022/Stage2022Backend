const route = require("express").Router()
const provider_controller = require("../controllers/provider-controller")

const upload = require("../middlewares/uploadFile")

route.post('/register',upload.single("photo"),provider_controller.register)
route.get('/getall',provider_controller.getall)
route.get('/getById/:id',provider_controller.getone)
route.get('/getbyname',provider_controller.getbyname)
route.put('/update/:id',provider_controller.update)
route.delete('/delete/:id',provider_controller.delete)




module.exports = route


