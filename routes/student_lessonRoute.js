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

stLesson.post("/register", validate(createStudentLessonValidation, "body"), stLessonCreate)
stLesson.get("/", getAllStudentLesson)
stLesson.get("/getById/:id", validate(idParamValidationSchema, "params"), getByIdStLesson)
stLesson.patch("/update/:id", validate(updateStudentLessonValidation, "body"), updateStLesson)
stLesson.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteStLesson)

module.exports = { stLesson }