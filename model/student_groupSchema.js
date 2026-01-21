const { Schema, model } = require("mongoose")

const studentGroupSchema = new Schema({
    student_id: { type: Number, required: true },
    group_id: { type: Number, required: true }
})

const StudentGroup = model("StudentGroup", studentGroupSchema)
module.exports = { StudentGroup }