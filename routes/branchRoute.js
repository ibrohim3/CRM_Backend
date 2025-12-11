const { Router } = require("express")
const branch = Router()

const {
    createBranch,
    getBranches,
    getBranch,
    updateBranch,
    deleteBranch,
    searchBranch
} = require("../controller/branch.controller")

branch.post("/register", createBranch)

branch.get("/", getBranches)

branch.get("/getById/:id", getBranch)

branch.patch("/update/:id", updateBranch)

branch.delete("/delete/:id", deleteBranch)

branch.get("/search", searchBranch)
module.exports = { branch }