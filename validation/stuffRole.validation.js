const Joi = require("joi")

const createStuffRoleValidation = Joi.object({
    stuff_id: Joi.string().length(24).hex().required(),
    role_id: Joi.string().length(24).hex().required()
})

const updateStuffRoleValidation = Joi.object({
    stuff_id: Joi.string().length(24).hex().optional(),
    role_id: Joi.string().length(24).hex().optional()
})

module.exports = { createStuffRoleValidation, updateStuffRoleValidation }