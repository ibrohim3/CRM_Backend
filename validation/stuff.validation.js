const Joi = require("joi")

const createStuffValidation = Joi.object({
    first_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().required().min(3).max(30),
    last_name: Joi.string().trim().min(3).max(30).required(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/).required(),
    login: Joi.string().required(),
    parol: Joi.string()
        .required()
        .min(8)
        .max(30)
        .pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
        ),
    is_active: Joi.boolean().default(false)
})

const updateStuffValidation = Joi.object({
    first_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().optional().min(3).max(30),
    last_name: Joi.string().trim().min(3).max(30).optional(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/).optional(),
    login: Joi.string().optional(),
    parol: Joi.string()
        .optional()
        .min(8)
        .max(30)
        .pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
        ),
    is_active: Joi.boolean().default(false)
})

module.exports = { createStuffValidation, updateStuffValidation }