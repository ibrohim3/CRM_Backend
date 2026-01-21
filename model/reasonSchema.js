const { Schema, model } = require("mongoose")

const reasonSchema = new Schema({
    reason_lid: { type: String, required: true }
})

const Reason = model("Reason", reasonSchema)
module.exports = { Reason }