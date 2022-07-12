const route = require("express").Router()
const provider_controller = require("../controllers/provider-controller")

const upload = require("../middlewares/uploadFile")

route.post('/register',upload.single("photo"),provider_controller.register)
route.get('')
route.get('')
route.get('')
route.put('')
route.delete('')




module.exports = route


