const Joi = require("joi")

const createLidValidation = Joi.object({
    first_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().min(4).max(20).required(),
    last_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().min(4).optional(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/).required(),
    lid_stage_id: Joi.string().length(24).hex().required(),
    test_date: Joi.date().greater("now").required().messages({
        "any.required": "Test date is required",
        "date.greater": "Test date must be in the future"
    }),
    trial_lesson_date: Joi.date().greater("now").required().messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    }),
    trial_lesson_time: Joi.string().trim().required(),
    trial_lesson_group_id: Joi.string().length(24).hex().required(),
    lid_status_id: Joi.string().length(24).hex().required(),
    cancel_reson_id: Joi.string().length(24).hex().required()
})

const updateLidValidation = Joi.object({
    first_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().min(4).max(20).optional(),
    last_name: Joi.string().pattern(/^[A-Za-z\s]+$/).trim().min(4).optional(),
    phone_number: Joi.string().pattern(/^\+998\d{9}$/).optional(),
    lid_stage_id: Joi.string().length(24).hex().optional(),
    test_date: Joi.date().greater("now").optional().messages({
        "any.required": "test date is required",
        "date.greater": "test date must be in the future"
    }),
    trial_lesson_date: Joi.date().greater("now").optional().messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    }),
    trial_lesson_time: Joi.string().trim().optional(),
    trial_lesson_group_id: Joi.string().length(24).hex().optional(),
    lid_status_id: Joi.string().length(24).hex().optional(),
    cancel_reson_id: Joi.string().length(24).hex().optional()
})

module.exports = { createLidValidation, updateLidValidation }