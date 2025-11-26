const { Router } = require("express")
const group = Router()

const {
    postGroup,
    getAllGroups
} = require("../controller/group.controller")

// Post Group
group.post("/register", postGroup)

// Get All Groups
group.get("/", getAllGroups)
module.exports = { group }