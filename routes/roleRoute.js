const { Router } = require("express")
const role = Router()

const {
    postRole,
    getRoles,
    getOneRole,
    updateRole,
    deleteRole,
    searchRole
} = require("../controller/role.controller")

role.post("/register", postRole)
role.get("/", getRoles)
role.get("/getById/:id", getOneRole)
role.patch("/update/:id", updateRole)
role.delete("/delete/:id", deleteRole)
role.get("/search", searchRole)
module.exports = { role }