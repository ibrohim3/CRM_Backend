const Joi = require("joi")

const createStuffRoleValidation = Joi.object({
    stuff_id: Joi.string().required(),
    role_id: Joi.string().required()
})

const updateStuffRoleValidation = Joi.object({
    stuff_id: Joi.string().optional(),
    role_id: Joi.string().optional()
})

module.exports = { createStuffRoleValidation, updateStuffRoleValidation }