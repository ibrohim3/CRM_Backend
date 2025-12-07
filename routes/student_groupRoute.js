const { Router } = require("express")
const studentGroup = Router()

const {
    createGroup,
    getAll,
    getById,
    studentGroupUpdate,
    studentGroupDelete
} = require("../controller/student_group.controller")

studentGroup.post("/create", createGroup)

studentGroup.get("/getAll", getAll)

studentGroup.get("/getById/:id", getById)

studentGroup.patch("/update/:id", studentGroupUpdate)

studentGroup.delete("/delete/:id", studentGroupDelete)
module.exports = { studentGroup }