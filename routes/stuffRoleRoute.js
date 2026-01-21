const { Router } = require("express")
const stuffRole = Router()
const {
    createStuffRole,
    getStuffRoles,
    getStuffRole,
    updateStuffRole,
    deleteStuffRole
} = require("../controller/stuffRole.controller")
const { validate } = require("../middlewares/validate")
const { createStuffRoleValidation, updateStuffRoleValidation } = require("../validation/stuffRole.validation")
const { idParamValidationSchema } = require("../validation/common.validation.js")

stuffRole.post("/", validate(createStuffRoleValidation, "body"), createStuffRole)
stuffRole.get("/", getStuffRoles)
stuffRole.get("/:id", validate(idParamValidationSchema, "params"), getStuffRole)
stuffRole.patch("/:id", validate(updateStuffRoleValidation, "body"), updateStuffRole)
stuffRole.delete("/:id", validate(idParamValidationSchema, "params"), deleteStuffRole)

module.exports = { stuffRole }