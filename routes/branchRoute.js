const { Router } = require("express")
const branch = Router()
const {
    createBranch,
    getBranches,
    getBranch,
    updateBranch,
    deleteBranch,
    searchBranch
} = require("../controller/branch.controller")
const {
    createBranchValidation,
    updateBranchValidation
} = require("../validation/branch.validation")
const {
    idParamValidationSchema,
    searchValidationSchema
} = require("../validation/common.validation.js")
const { validate } = require("../middlewares/validate.js")


branch.post("/register", validate(createBranchValidation), createBranch)

branch.get("/", getBranches)

branch.get("/getById/:id", validate(idParamValidationSchema), getBranch)

branch.patch("/update/:id", validate(updateBranchValidation), updateBranch)

branch.delete("/delete/:id", validate(idParamValidationSchema), deleteBranch)

branch.get("/search", validate(searchValidationSchema), searchBranch)
module.exports = { branch }