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
const { validate } = require("../middlewares/validate")
const { createRoleValidation, updateRoleValidation } = require("../validation/role.validation")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")

role.post("/", validate(createRoleValidation, "body"), postRole)
role.get("/", getRoles)
role.get("/:id", validate(idParamValidationSchema, "params"), getOneRole)
role.patch("/:id", validate(updateRoleValidation, "body"), updateRole)
role.delete("/:id", validate(idParamValidationSchema, "params"), deleteRole)
// role.get("/", validate(searchValidationSchema, "query"), searchRole)
module.exports = { role }