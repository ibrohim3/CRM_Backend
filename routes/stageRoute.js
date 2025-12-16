const { Router } = require("express")
const stage = Router()

const {
    createStage,
    getStages,
    getStage,
    updateStage,
    deleteStage,
    searchStage
} = require("../controller/stage.controller")
const { validate } = require("../middlewares/validate.js")
const { createStageValidation, updateStageValidation } = require("../validation/stage.validation.js")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")

stage.post("/register", validate(createStageValidation, "body"), createStage)
stage.get("/", getStages)
stage.get("/byId/:id", validate(idParamValidationSchema, "params"), getStage)
stage.patch("/update/:id", validate(updateStageValidation, "body"), updateStage)
stage.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteStage)
stage.get("/search", validate(searchValidationSchema, "query"), searchStage)
module.exports = { stage }