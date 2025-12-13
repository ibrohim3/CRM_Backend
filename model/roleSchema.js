const { Schema, model } = require("mongoose")

const roleSchema = new Schema({
    name: { type: String, require: true }
})

const Role = model("role", roleSchema)
module.exports = { Role }