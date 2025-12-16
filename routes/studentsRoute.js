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

students.post("/register", validate(createStudentsValidate, "body"), postStudent)
students.get("/", getAllStudents)
students.get("/getById/:id", validate(idParamValidationSchema, "params"), getById)
students.patch("/update/:id", validate(updateStudentsValidate, "body"), updateStudent)
students.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteStudent)
students.get("/search", validate(searchValidationSchema, "query"), searchStudent)
module.exports = { students }