const Joi = require("joi")

const createLessonValidation = Joi.object({
    lesson_theme: Joi.string().min(3).required(),
    lesson_number: Joi.number().integer().positive().required(),
    group_id: Joi.number().integer().positive().required(),
    lesson_date: Joi.date().required().greater('now').messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    })
})

const updateLessonValidation = Joi.object({
    lesson_theme: Joi.string().min(3).optional(),
    lesson_number: Joi.number().integer().positive().optional(),
    group_id: Joi.number().integer().positive().optional(),
    lesson_date: Joi.date().optional().greater('now').messages({
        "any.required": "Lesson date is required",
        "date.greater": "Lesson date must be in the future"
    })
})

module.exports = { createLessonValidation, updateLessonValidation }