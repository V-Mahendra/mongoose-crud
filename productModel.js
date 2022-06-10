

const  mongoose  = require("mongoose");

const prodeuctSchema = mongoose.Schema({
    name:String,
    email:String,
    city:String,
})

module.exports = mongoose.model("products",prodeuctSchema)