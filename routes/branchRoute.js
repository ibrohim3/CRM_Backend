const { Router } = require("express")
const branch = Router()

const {
    createBranch
} = require("../controller/branch.controller")

branch.post("/register", createBranch)

module.exports = { branch }