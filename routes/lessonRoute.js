const { Router } = require("express")
const lesson = Router()

const {
    postLesson,
    getAll
} = require("../controller/lesson.controller")
const { get } = require("mongoose")

lesson.post("/create", postLesson)

lesson.get("/", getAll)
module.exports = { lesson }