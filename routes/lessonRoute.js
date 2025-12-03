const { Router } = require("express")
const lesson = Router()

const {
    postLesson,
    getAll,
    getById
} = require("../controller/lesson.controller")

lesson.post("/create", postLesson)

lesson.get("/", getAll)

lesson.get("/getById/:id", getById)
module.exports = { lesson }