const Joi = require("joi");

const createStudentGroupValidation = Joi.object({
    student_id: Joi.string().required(),
    group_id: Joi.string().required()
});

const updateStudentGroupValidation = Joi.object({
    student_id: Joi.string().optional(),
    group_id: Joi.string().optional()
});

module.exports = {
    createStudentGroupValidation,
    updateStudentGroupValidation
};
