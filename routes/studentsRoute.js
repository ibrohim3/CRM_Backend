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

students.post("/register", postStudent)

students.get("/", getAllStudents)

students.get("/getById/:id", getById)

students.patch("/update/:id", updateStudent)

students.delete("/delete/:id", deleteStudent)

students.get("/search", searchStudent)
module.exports = { students }