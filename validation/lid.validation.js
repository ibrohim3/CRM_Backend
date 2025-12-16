const Joi = require("joi")

const createLidValidation = Joi.object({
    first_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().min(4).max(20).required(),
    last_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().min(4).optional(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/).required(),
    lid_stage_id: Joi.number().integer().positive().required(),
    test_date: Joi.date().greater("now").required().messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    }),
    trial_lesson_date: Joi.date().greater("now").required().messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    }),
    trial_lesson_time: Joi.string().trim().required(),
    trial_lesson_group_id: Joi.number().integer().positive().required(),
    lid_status_id: Joi.number().integer().positive().required(),
    cancel_reson_id: Joi.number().integer().positive().required()
})

const updateLidValidation = Joi.object({
    first_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().min(4).max(20).optional(),
    last_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().min(4).optional(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/).optional(),
    lid_stage_id: Joi.number().integer().positive().optional(),
    test_date: Joi.date().greater("now").optional().messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    }),
    trial_lesson_date: Joi.date().greater("now").optional().messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    }),
    trial_lesson_time: Joi.string().trim().optional(),
    trial_lesson_group_id: Joi.number().integer().positive().optional(),
    lid_status_id: Joi.number().integer().positive().optional(),
    cancel_reson_id: Joi.number().integer().positive().optional()
})

module.exports = { createLidValidation, updateLidValidation }