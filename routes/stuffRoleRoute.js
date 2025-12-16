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

stuffRole.post("/register", validate(createStuffRoleValidation, "body"), createStuffRole)
stuffRole.get("/", getStuffRoles)
stuffRole.get("/getById/:id", validate(idParamValidationSchema, "params"), getStuffRole)
stuffRole.patch("/update/:id", validate(updateStuffRoleValidation, "body"), updateStuffRole)
stuffRole.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteStuffRole)

module.exports = { stuffRole }