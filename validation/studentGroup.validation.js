const Joi = require("joi");

const createStudentGroupValidation = Joi.object({
    student_id: Joi.string().length(24).hex().required(),
    group_id: Joi.string().length(24).hex().required()
});

const updateStudentGroupValidation = Joi.object({
    student_id: Joi.string().length(24).hex().optional(),
    group_id: Joi.string().length(24).hex().optional()
});

module.exports = {
    createStudentGroupValidation,
    updateStudentGroupValidation
};
