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
const { validate } = require("../middlewares/validate.js")
const { createGroupValidation, updateGroupValidation } = require("../validation/group.validation")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")

// Post Group
group.post("/register", validate(createGroupValidation, "body"), postGroup)

// Get All Groups
group.get("/", getAllGroups)

// Get By Id
group.get("/getById/:id", validate(idParamValidationSchema, "params"), getById)

// Update group
group.patch("/update/:id", validate(updateGroupValidation, "body"), updateGroup)

// Delete group
group.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteGroup)

// Search group
group.get("/search", validate(searchValidationSchema, "query"), searchGroup)
module.exports = { group }