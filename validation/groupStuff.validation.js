const Joi = require("joi")

const createGroupStuffValidation = Joi.object({
    group_id: Joi.string().length(24).hex().required(),
    stuff_id: Joi.string().length(24).hex().required()
})


const updateGroupStuffValidation = Joi.object({
    group_id: Joi.string().length(24).hex().optional(),
    stuff_id: Joi.string().length(24).hex().optional()
})

module.exports = { createGroupStuffValidation, updateGroupStuffValidation }