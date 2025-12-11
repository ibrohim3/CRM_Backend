const { Router } = require("express")
const branch = Router()

const {
    createBranch,
    getBranches,
    getBranch
} = require("../controller/branch.controller")

branch.post("/register", createBranch)

branch.get("/", getBranches)

branch.get("/getById/:id", getBranch)

module.exports = { branch }