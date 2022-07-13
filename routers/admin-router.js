const route = require("express").Router()

const admin_controller = require("../controllers/admin-controller")


const upload = require("../middlewares/uploadFile")

route.post('/register',upload.single("photo"),admin_controller.register)
route.get('/getall',admin_controller.getall)
route.put('/update/:id',admin_controller.update)
route.get('/getbyid/:id',admin_controller.getone)
route.get('/getbyname',admin_controller.getbyname)
route.delete('/delete/:id',admin_controller.delete)



module.exports=route