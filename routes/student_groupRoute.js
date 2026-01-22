const { Router } = require("express")
const studentGroup = Router()

const {
    createGroup,
    getAll,
    getById,
    studentGroupUpdate,
    studentGroupDelete
} = require("../controller/student_group.controller")
const { validate } = require("../middlewares/validate")
const { createStudentGroupValidation, updateStudentGroupValidation } = require("../validation/studentGroup.validation")
const { idParamValidationSchema } = require("../validation/common.validation.js")

studentGroup.post("/", validate(createStudentGroupValidation, "body"), createGroup)
studentGroup.get("/", getAll)
studentGroup.get("/:id", validate(idParamValidationSchema, "params"), getById)
studentGroup.patch("/:id", validate(updateStudentGroupValidation, "body"), studentGroupUpdate)
studentGroup.delete("/:id", validate(idParamValidationSchema, "params"), studentGroupDelete)
module.exports = { studentGroup }