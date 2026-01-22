const Joi = require("joi")

const createPaymentValidation = Joi.object({
    student_id: Joi.string().length(24).hex().required(),
    payment_last_date: Joi.date().required(),
    payment_date: Joi.date().greater("now").required().messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    }),
    price: Joi.number().positive().required(),
    is_paid: Joi.boolean().default(true),
    total_attent: Joi.number().integer().positive().required()
})

const updatePaymentValidation = Joi.object({
    student_id: Joi.string().length(24).hex().optional(),
    payment_last_date: Joi.date().optional(),
    payment_date: Joi.date().greater("now").optional().messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    }),
    price: Joi.number().positive().optional(),
    is_paid: Joi.boolean().default(true),
    total_attent: Joi.number().integer().positive().optional()
})

module.exports = { createPaymentValidation, updatePaymentValidation }