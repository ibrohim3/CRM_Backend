const { Router } = require("express")
const role = Router()

const {
    postRole,
    getRoles,
    getOneRole,
    updateRole
} = require("../controller/role.controller")

role.post("/register", postRole)
role.get("/", getRoles)
role.get("/getById/:id", getOneRole)
role.patch("/update/:id", updateRole)
module.exports = { role }