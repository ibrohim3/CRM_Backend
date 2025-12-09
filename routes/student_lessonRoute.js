const { Router } = require("express")
const stLesson = Router()

const {
    stLessonCreate,
    getAllStudentLesson,
    getByIdStLesson,
    updateStLesson,
    deleteStLesson,
} = require("../controller/student_lesson.controller")

stLesson.post("/register", stLessonCreate)

stLesson.get("/", getAllStudentLesson)

stLesson.get("/getById/:id", getByIdStLesson)

stLesson.patch("/update/:id", updateStLesson)

stLesson.delete("/delete/:id", deleteStLesson)

module.exports = { stLesson }