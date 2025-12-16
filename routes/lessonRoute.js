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
const { validate } = require("../middlewares/validate")
const { createLessonValidation, updateLessonValidation } = require("../validation/lesson.validation")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")


lesson.post("/create", validate(createLessonValidation, "body"), postLesson)

lesson.get("/", getAll)

lesson.get("/getById/:id", validate(idParamValidationSchema, "params"), getById)

lesson.patch("/update/:id", validate(idParamValidationSchema, "params"), validate(updateLessonValidation, "body"), updateLesson)

lesson.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteLesson)

lesson.get("/search", validate(searchValidationSchema, "query"), searchLesson)
module.exports = { lesson }