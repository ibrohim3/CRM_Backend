const { Router } = require("express")
const students = Router()
const {
    postStudent,
    getAllStudents,
    getById,
    updateStudent,
    deleteStudent,
    searchStudent
} = require("../controller/students.controller")
const { validate } = require("../middlewares/validate")
const { createStudentsValidate, updateStudentsValidate } = require("../validation/students.validate")
const { searchValidationSchema, idParamValidationSchema } = require("../validation/common.validation.js")

students.post("/", validate(createStudentsValidate, "body"), postStudent)
students.get("/", getAllStudents)
students.get("/:id", validate(idParamValidationSchema, "params"), getById)
students.patch("/:id", validate(updateStudentsValidate, "body"), updateStudent)
students.delete("/:id", validate(idParamValidationSchema, "params"), deleteStudent)
module.exports = { students }