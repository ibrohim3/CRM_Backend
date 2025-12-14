const { Schema, model } = require("mongoose")
const groupStuffSchema = new Schema({
    group_id: { type: Number, required: true },
    stuff_id: { type: Number, required: true }
})

const GroupStuff = model("groupStuff", groupStuffSchema)
module.exports = { GroupStuff }