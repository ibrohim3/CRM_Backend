const Joi = require("joi")

const createGroupStuffValidation = Joi.object({
    group_id: Joi.number().integer().positive().required(),
    stuff_id: Joi.number().integer().positive().required()
})


const updateGroupStuffValidation = Joi.object({
    group_id: Joi.number().integer().positive().optional(),
    stuff_id: Joi.number().integer().positive().optional()
})

module.exports = { createGroupStuffValidation, updateGroupStuffValidation }