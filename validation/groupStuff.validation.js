const Joi = require("joi")

const createGroupStuffValidation = Joi.object({
    group_id: Joi.string().required(),
    stuff_id: Joi.string().required()
})


const updateGroupStuffValidation = Joi.object({
    group_id: Joi.string().optional(),
    stuff_id: Joi.string().optional()
})

module.exports = { createGroupStuffValidation, updateGroupStuffValidation }