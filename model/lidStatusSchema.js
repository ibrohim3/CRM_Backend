const { Schema, model } = require("mongoose")

const lidStatusSchema = new Schema({
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
}, { timestamps: true })

const LidStatus = model("lidStatus", lidStatusSchema)
module.exports = { LidStatus }