const { Schema, model } = require("mongoose")

const lidStatusSchema = new Schema({
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    }
}, { timestamps: true })

const LidStatus = model("LidStatus", lidStatusSchema)
module.exports = { LidStatus }