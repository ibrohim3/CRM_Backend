const { Router } = require("express")
const group = Router()

const {
    postGroup,
    getAllGroups,
    getById,
    updateGroup,
    deleteGroup,
    searchGroup
} = require("../controller/group.controller")

// Post Group
group.post("/register", postGroup)

// Get All Groups
group.get("/", getAllGroups)

// Get By Id
group.get("/getById/:id", getById)

// Update group
group.patch("/update/:id", updateGroup)

// Delete group
group.delete("/delete/:id", deleteGroup)

// Search group
group.get("/search", searchGroup)
module.exports = { group }