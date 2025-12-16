const { Router } = require("express")
const reason = Router()
const {
    createReasonLid,
    getAllReasons,
    getOneReason,
    updateReason,
    deleteReason
} = require("../controller/reason.controller")
const { validate } = require("../middlewares/validate.js")
const { createReasonValidation, updateReasonValidation } = require("../validation/reason.validation.js")
const { idParamValidationSchema } = require("../validation/common.validation.js")


reason.post("/register", validate(createReasonValidation, "body"), createReasonLid)
reason.get("/", getAllReasons)
reason.get("/getById/:id", validate(idParamValidationSchema, "params"), getOneReason)
reason.patch("/update/:id", validate(updateReasonValidation, "body"), updateReason)
reason.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteReason)
module.exports = { reason }