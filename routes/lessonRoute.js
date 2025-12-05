const { Router } = require("express")
const lesson = Router()

const {
    postLesson,
    getAll,
    getById,
    updateLesson,
    deleteLesson,
    searchLesson
} = require("../controller/lesson.controller")

lesson.post("/create", postLesson)

lesson.get("/", getAll)

lesson.get("/getById/:id", getById)

lesson.patch("/update/:id", updateLesson)

lesson.delete("/delete/:id", deleteLesson)

lesson.get("/search", searchLesson)
module.exports = { lesson }