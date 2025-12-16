const { Router } = require("express")
const groupStuff = Router()

const {
    createGroupStuff,
    getAllGroupStuff,
    getGroupStuff,
    updateGroupStaff,
    deleteGroupStaff
} = require("../controller/groupStuff.controller")
const { validate } = require("../middlewares/validate")
const { createGroupStuffValidation, updateGroupStuffValidation } = require("../validation/groupStuff.validation")
const { idParamValidationSchema } = require("../validation/common.validation.js")

groupStuff.post("/create", validate(createGroupStuffValidation, "body"), createGroupStuff)
groupStuff.get("/", getAllGroupStuff)
groupStuff.get("/getById/:id", validate(idParamValidationSchema, "params"), getGroupStuff)
groupStuff.patch("/update/:id", validate(updateGroupStuffValidation, "body"), updateGroupStaff)
groupStuff.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteGroupStaff)
module.exports = { groupStuff }