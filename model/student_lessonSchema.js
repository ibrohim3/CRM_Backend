const { Schema, model } = require("mongoose")

const studentLessonSchema = new Schema({
    lesson_id: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
    student_id: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    is_there: { type: Boolean },
    reason: { type: String, required: true },
    be_paid: { type: Boolean }
})

const StudentLesson = model("StudentLesson", studentLessonSchema)
module.exports = { StudentLesson }