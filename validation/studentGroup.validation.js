const Joi = require("joi");

const createStudentGroupValidation = Joi.object({
    student_id: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "any.required": "Student ID majburiy",
            "number.base": "Student ID raqam bo‘lishi kerak",
            "number.integer": "Student ID butun raqam bo‘lishi kerak",
            "number.positive": "Student ID musbat bo‘lishi kerak"
        }),

    group_id: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            "any.required": "Group ID majburiy",
            "number.base": "Group ID raqam bo‘lishi kerak",
            "number.integer": "Group ID butun raqam bo‘lishi kerak",
            "number.positive": "Group ID musbat bo‘lishi kerak"
        })
});

const updateStudentGroupValidation = Joi.object({
    student_id: Joi.number()
        .integer()
        .positive()
        .optional()
        .messages({
            "number.base": "Student ID raqam bo‘lishi kerak",
            "number.integer": "Student ID butun raqam bo‘lishi kerak",
            "number.positive": "Student ID musbat bo‘lishi kerak"
        }),

    group_id: Joi.number()
        .integer()
        .positive()
        .optional()
        .messages({
            "number.base": "Group ID raqam bo‘lishi kerak",
            "number.integer": "Group ID butun raqam bo‘lishi kerak",
            "number.positive": "Group ID musbat bo‘lishi kerak"
        })
});

module.exports = {
    createStudentGroupValidation,
    updateStudentGroupValidation
};
