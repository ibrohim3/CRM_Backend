const { Router } = require("express")
const stLesson = Router()

const {
    stLessonCreate,
    getAllStudentLesson,
    getByIdStLesson
} = require("../controller/student_lesson.controller")

stLesson.post("/register", stLessonCreate)

stLesson.get("/", getAllStudentLesson)

stLesson.get("/getById/:id", getByIdStLesson)
module.exports = { stLesson }