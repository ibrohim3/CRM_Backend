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

role.post("/register", validate(createRoleValidation, "body"), postRole)
role.get("/", getRoles)
role.get("/getById/:id", validate(idParamValidationSchema, "params"), getOneRole)
role.patch("/update/:id", validate(updateRoleValidation, "body"), updateRole)
role.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteRole)
role.get("/search", validate(searchValidationSchema, "query"), searchRole)
module.exports = { role }