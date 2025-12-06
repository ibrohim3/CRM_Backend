const { Router } = require("express")
const studentGroup = Router()

const {
    createGroup
} = require("../controller/student_group.controller")

studentGroup.post("/create", createGroup)

module.exports = { studentGroup }