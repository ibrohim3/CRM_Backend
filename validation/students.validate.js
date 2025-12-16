const Joi = require("joi")

const createStudentsValidate = Joi.object({
    lid_id: Joi.number().integer().positive().required(),
    first_name: Joi.string().trim().min(3).max(30).required(),
    last_name: Joi.string().trim().required(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/).required(),
    birthday: Joi.string().required(),
    gender: Joi.string().valid("male", "famale").required()
})

const updateStudentsValidate = Joi.object({
    lid_id: Joi.number().integer().positive().optional(),
    first_name: Joi.string().trim().min(3).max(30).optional(),
    last_name: Joi.string().trim().optional(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/).optional(),
    birthday: Joi.string().optional(),
    gender: Joi.string().valid("male", "famale").optional()
})

module.exports = { createStudentsValidate, updateStudentsValidate }