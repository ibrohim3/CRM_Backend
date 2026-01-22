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

stage.post("/", validate(createStageValidation, "body"), createStage)
stage.get("/", getStages)
stage.get("/:id", validate(idParamValidationSchema, "params"), getStage)
stage.patch("/:id", validate(updateStageValidation, "body"), updateStage)
stage.delete("/:id", validate(idParamValidationSchema, "params"), deleteStage)
module.exports = { stage }