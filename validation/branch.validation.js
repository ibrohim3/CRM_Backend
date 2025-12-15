const Joi = require("joi")

const createBranchValidation = Joi.object({
    name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().required().min(3),
    address: Joi.string().trim().required(),
    call_number: Joi.string().pattern(/^\+998\d{9}$/).required()
})

const updateBranchValidation = Joi.object({
    name: Joi.string().trim().min(3).optional(),
    address: Joi.string().trim().optional(),
    call_number: Joi.string().pattern(/^\+998\d{9}$/).optional()
})

module.exports = {
    createBranchValidation,
    updateBranchValidation
}