const { Router } = require("express")
const student = Router()

const {
    postGroup
} = require("../controller/group.controller")

student.post("/register", postGroup)

module.exports = { student }