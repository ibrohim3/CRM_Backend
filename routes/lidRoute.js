const { Router } = require("express")
const lid = Router()
const {
    createLid,
    getAll,
    getByIdLid,
    updateLid,
    deleteLid,
    searchLid
} = require("../controller/lid.controller")
const { validate } = require("../middlewares/validate")
const { createLidValidation, updateLidValidation } = require("../validation/lid.validation.js")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")

lid.post("/register", validate(createLidValidation, "body"), createLid)
lid.get("/", getAll)
lid.get("/getById/:id", validate(idParamValidationSchema, "params"), getByIdLid)
lid.patch("/update/:id", validate(updateLidValidation, "body"), updateLid)
lid.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteLid)
lid.get("/search", validate(searchValidationSchema, "query"), searchLid)
module.exports = { lid }
