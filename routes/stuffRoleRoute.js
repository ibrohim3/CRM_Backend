const { Router } = require("express")
const stuffRole = Router()

const {
    createStuffRole,
    getStuffRoles
} = require("../controller/stuffRole.controller")

stuffRole.post("/register", createStuffRole)
stuffRole.get("/", getStuffRoles)
module.exports = { stuffRole }