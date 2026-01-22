const Joi = require("joi")

const createStudentLessonValidation = Joi.object({
    lesson_id: Joi.string().required(),
    student_id: Joi.string().required(),
    is_there: Joi.boolean().default(true),
    reason: Joi.string().min(3).required(),
    be_paid: Joi.boolean().default(true)
})


const updateStudentLessonValidation = Joi.object({
    lesson_id: Joi.string().optional(),
    student_id: Joi.string().optional(),
    is_there: Joi.boolean().default(true),
    reason: Joi.string().min(3).required(),
    be_paid: Joi.boolean().default(true)
})

module.exports = { createStudentLessonValidation, updateStudentLessonValidation }