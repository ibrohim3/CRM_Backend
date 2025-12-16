const Joi = require("joi")

const createReasonValidation = Joi.object({
    reason_lid: Joi.string().min(5).required()
})

const updateReasonValidation = Joi.object({
    reason_lid: Joi.string().min(5).optional()
})

module.exports = { createReasonValidation, updateReasonValidation }