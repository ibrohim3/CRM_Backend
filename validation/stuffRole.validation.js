const Joi = require("joi")

const createStuffRoleValidation = Joi.object({
    stuff_id: Joi.number().integer().positive().required(),
    role_id: Joi.number().integer().positive().required()
})

const updateStuffRoleValidation = Joi.object({
    stuff_id: Joi.number().integer().positive().optional(),
    role_id: Joi.number().integer().positive().optional()
})

module.exports = { createStuffRoleValidation, updateStuffRoleValidation }