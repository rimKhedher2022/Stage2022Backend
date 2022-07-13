const UserModel = require("./user-model")
const mongoose = require("mongoose")


const adminSchema = new mongoose.Schema({



})


const admin = UserModel.discriminator("admin",adminSchema)

module.exports = mongoose.model("admin")