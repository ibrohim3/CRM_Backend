const { Router } = require("express")
const stuffRole = Router()

const {
    createStuffRole,
    getStuffRoles,
    getStuffRole,
    updateStuffRole,
    deleteStuffRole
} = require("../controller/stuffRole.controller")

stuffRole.post("/register", createStuffRole)
stuffRole.get("/", getStuffRoles)
stuffRole.get("/getById/:id", getStuffRole)
stuffRole.patch("/update/:id", updateStuffRole)
stuffRole.delete("/delete/:id", deleteStuffRole)

module.exports = { stuffRole }