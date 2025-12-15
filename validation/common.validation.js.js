const Joi = require("joi")

const idParamValidationSchema = Joi.object({
    id: Joi.string().length(24).hex().required()
})

const searchValidationSchema = Joi.object({
    q: Joi.string().trim().min(1).required()
})

module.exports = {
    idParamValidationSchema,
    searchValidationSchema
}