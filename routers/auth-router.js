const router = require("express").Router()
const AuthController = require('../controllers/auth-controller')

router.post('/login',AuthController.login) // tab3ath fi 7aja 



module.exports = router