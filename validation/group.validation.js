const Joi = require("joi")

const createGroupValidation = Joi.object({
    group_name: Joi.string().trim().min(3).required(),
    lesson_start_time: Joi.string().required(),
    lesson_continuous: Joi.string().required(),
    lesson_week_day: Joi.string().required(),
    group_stage_idint: Joi.number().required(),
    room_number: Joi.number().required(),
    room_floor: Joi.number().required(),
    branch_id: Joi.number().integer().positive().required(),
    lessons_quant: Joi.number().positive().required(),
    is_active: Joi.boolean().default(true)
})

const updateGroupValidation = Joi.object({
    group_name: Joi.string().trim().min(3).optional(),
    lesson_start_time: Joi.string().optional(),
    lesson_continuous: Joi.string().optional(),
    lesson_week_day: Joi.string().optional(),
    group_stage_idint: Joi.number().optional(),
    room_number: Joi.number().optional(),
    room_floor: Joi.number().optional(),
    branch_id: Joi.number().integer().positive().optional(),
    lessons_quant: Joi.number().positive().optional(),
    is_active: Joi.boolean().default(true).optional()
})

module.exports = { createGroupValidation, updateGroupValidation }