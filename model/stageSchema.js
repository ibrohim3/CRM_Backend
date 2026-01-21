const { Schema, model } = require("mongoose")

const stageSchema = new Schema({
    name: { type: String, require: true }
})

const Stage = model("Stage", stageSchema)
module.exports = { Stage }