const { Router } = require("express")
const stLesson = Router()
const {
    stLessonCreate,
    getAllStudentLesson,
    getByIdStLesson,
    updateStLesson,
    deleteStLesson,
} = require("../controller/student_lesson.controller")
const { validate } = require("../middlewares/validate.js")
const { createStudentLessonValidation, updateStudentLessonValidation } = require("../validation/studentLesson.validation.js")
const { idParamValidationSchema } = require("../validation/common.validation.js")

stLesson.post("/", validate(createStudentLessonValidation, "body"), stLessonCreate)
stLesson.get("/", getAllStudentLesson)
stLesson.get("/:id", validate(idParamValidationSchema, "params"), getByIdStLesson)
stLesson.patch("/:id", validate(updateStudentLessonValidation, "body"), updateStLesson)
stLesson.delete("/:id", validate(idParamValidationSchema, "params"), deleteStLesson)

module.exports = { stLesson }