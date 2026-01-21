const Joi = require("joi")

const createLessonValidation = Joi.object({
    lesson_theme: Joi.string().min(3).required(),
    lesson_number: Joi.number().integer().positive().required(),
    group_id: Joi.string().required(),
    lesson_date: Joi.string().required()
})

const updateLessonValidation = Joi.object({
    lesson_theme: Joi.string().min(3).optional(),
    lesson_number: Joi.number().integer().positive().optional(),
    group_id: Joi.string().optional(),
    lesson_date: Joi.string().optional()
})

module.exports = { createLessonValidation, updateLessonValidation }