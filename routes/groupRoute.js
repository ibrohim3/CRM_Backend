const { Router } = require("express")
const group = Router()
const {
    postGroup,
    getAllGroups,
    getById,
    updateGroup,
    deleteGroup,
    searchGroup
} = require("../controller/group.controller")
const { validate } = require("../middlewares/validate.js")
const { createGroupValidation, updateGroupValidation } = require("../validation/group.validation")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")

// Post Group
/**
 * @swagger
 * tags:
 *   - name: Group
 *     description: Group management
 */
/**
 * @swagger
 * /group:
 *   post:
 *     summary: Group qo'shish 
 *     tags:
 *       - Group
 *     description: Group qo'shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             required: 
 *               - group_name
 *               - lesson_start_time
 *             properties:
 *               group_name:
 *                 type: string
 *               lesson_start_time:
 *                 type: string
 *               lesson_continuous:
 *                 type: string
 *               lesson_week_day:
 *                 type: string
 *               group_stage_idint:
 *                 type: number
 *               room_number: 
 *                 type: string
 *               room_floor:
 *                 type: number
 *               branch_id:
 *                 type: number
 *               lessons_quant:
 *                 type: number
 *               is_active: 
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Muvaffaqiyatli qo'shildi
 *       400: 
 *         description: Xato so'rov
 *       500:
 *         description: Server xatosi
 */
group.post("/", validate(createGroupValidation, "body"), postGroup)

// Get All Groups
/**
 * @swagger
 * /group:
 *   get:
 *     summary: Barcha guruh malumotlarini olish
 *     tags:
 *       - Group
 *     responses:
 *       200: 
 *         description: Muvaffaqiyatli olindi
 *       404:
 *         description: Guruh malumoti topilmadi
 *       500:
 *         description: Server xatosi
 */
group.get("/", getAllGroups)

// Get By Id
/**
 * @swagger
 * /group/{id}:
 *   get:
 *     summary: Group malumotini ID orqali olish
 *     tags: 
 *       - Group
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Group ID si
 *     responses:
 *       200: 
 *         description: Muvaffaqiyatli olindi
 *       404:
 *         description: Malumot topilmadi
 *       500: 
 *         description: Server xatosi
 */
group.get("/:id", validate(idParamValidationSchema, "params"), getById)

// Update group
/**
 * @swagger
 * /group/{id}:
 *   patch:
 *     summary: Group malumotini yangilash
 *     tags:
 *       - Group
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         descripion: Yangilanishi kk bo'lgan group ID si
 *     requestBody:
 *       required: true
 *       content:  
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_name:
 *                 type: string
 *               lesson_start_time:
 *                 type: string
 *               lesson_continuous:
 *                 type: string
 *               lesson_week_day:
 *                 type: string
 *               group_stage_idint:
 *                 type: number
 *               room_number: 
 *                 type: string
 *               room_floor:
 *                 type: number
 *               branch_id:
 *                 type: number
 *               lessons_quant:
 *                 type: number
 *               is_active: 
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli yangilandi
 *       404:
 *         description: Group topilmadi
 *       500: Server xatosi
 */
group.patch("/:id", validate(updateGroupValidation, "body"), updateGroup)

// Delete group
group.delete("/:id", validate(idParamValidationSchema, "params"), deleteGroup)

// Search group
// group.get("/search", validate(searchValidationSchema, "query"), searchGroup)
module.exports = { group }