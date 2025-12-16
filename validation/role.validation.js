const Joi = require("joi")

const createRoleValidation = Joi.object({
    name: Joi.string().trim().min(3).max(30).required()
})

const updateRoleValidation = Joi.object({
    name: Joi.string().trim().min(3).max(30).optional()
})


module.exports = { createRoleValidation, updateRoleValidation }