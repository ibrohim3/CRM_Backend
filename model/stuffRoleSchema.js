const { Schema, model } = require("mongoose")

const stuffRoleSchema = new Schema({
    stuff_id: { type: Number, required: true },
    role_id: { type: Number, required: true }
})
const StuffRole = model("stuffRole", stuffRoleSchema)
module.exports = { StuffRole }
