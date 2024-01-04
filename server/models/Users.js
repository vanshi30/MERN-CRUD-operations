const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

// "users" is collection name
const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel