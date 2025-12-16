const Joi = require("joi")

const createStageValidation = Joi.object({
    name: Joi.string().trim().min(3).max(30).required()
})

const updateStageValidation = Joi.object({
    name: Joi.string().trim().min(3).max(30).optional()
})

module.exports = { createStageValidation, updateStageValidation }