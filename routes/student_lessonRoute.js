const { Router } = require("express")
const stLesson = Router()

const {
    stLessonCreate
} = require("../controller/student_lesson.controller")

stLesson.post("/register", stLessonCreate)

module.exports = { stLesson }