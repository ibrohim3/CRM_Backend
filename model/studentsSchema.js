const { Schema, model } = require("mongoose")

const studentSchema = new Schema({
    lid_id: { type: Schema.Types.ObjectId, ref: "Lid", required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    birthday: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true }
})

const Students = model("Student", studentSchema)
module.exports = { Students }