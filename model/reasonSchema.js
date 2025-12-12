const { Schema, model } = require("mongoose")

const reasonSchema = new Schema({
    reason_lid: { type: String, required: true }
})

const Reason = model("reason", reasonSchema)
module.exports = { Reason }