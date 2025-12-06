const { Router } = require("express")
const studentGroup = Router()

const {
    createGroup,
    getAll
} = require("../controller/student_group.controller")

studentGroup.post("/create", createGroup)

studentGroup.get("/getAll", getAll)
module.exports = { studentGroup }