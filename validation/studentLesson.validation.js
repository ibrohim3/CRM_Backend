const Joi = require("joi")

const createStudentLessonValidation = Joi.object({
    lesson_id: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "number.base": "Student ID raqam bo‘lishi kerak",
            "number.integer": "Student ID butun raqam bo‘lishi kerak",
            "number.positive": "Student ID musbat bo‘lishi kerak"
        }),
    student_id: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "number.base": "Student ID raqam bo‘lishi kerak",
            "number.integer": "Student ID butun raqam bo‘lishi kerak",
            "number.positive": "Student ID musbat bo‘lishi kerak"
        }),
    is_there: Joi.boolean().default(true),
    reason: Joi.string().min(3).required(),
    be_paid: Joi.boolean().default(true)
})


const updateStudentLessonValidation = Joi.object({
    lesson_id: Joi.number()
        .integer()
        .positive()
        .optional()
        .messages({
            "number.base": "Student ID raqam bo‘lishi kerak",
            "number.integer": "Student ID butun raqam bo‘lishi kerak",
            "number.positive": "Student ID musbat bo‘lishi kerak"
        }),
    student_id: Joi.number()
        .integer()
        .positive()
        .optional()
        .messages({
            "number.base": "Student ID raqam bo‘lishi kerak",
            "number.integer": "Student ID butun raqam bo‘lishi kerak",
            "number.positive": "Student ID musbat bo‘lishi kerak"
        }),
    is_there: Joi.boolean().default(true),
    reason: Joi.string().min(3).required(),
    be_paid: Joi.boolean().default(true)
})

module.exports = { createStudentLessonValidation, updateStudentLessonValidation }