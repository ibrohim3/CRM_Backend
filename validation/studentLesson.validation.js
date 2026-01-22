const Joi = require("joi")

const createStudentLessonValidation = Joi.object({
    lesson_id: Joi.string().length(24).hex().required(),
    student_id: Joi.string().length(24).hex().required(),
    is_there: Joi.boolean().default(false),
    reason: Joi.string().min(3).required(),
    be_paid: Joi.boolean().default(false)
})


const updateStudentLessonValidation = Joi.object({
    lesson_id: Joi.string().length(24).hex().optional(),
    student_id: Joi.string().length(24).hex().optional(),
    is_there: Joi.boolean().default(false),
    reason: Joi.string().min(3).required(),
    be_paid: Joi.boolean().default(false)
})

module.exports = { createStudentLessonValidation, updateStudentLessonValidation }