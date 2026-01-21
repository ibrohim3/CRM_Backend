const { Router } = require("express")
const lid = Router()
const {
    createLid,
    getAll,
    getByIdLid,
    updateLid,
    deleteLid,
} = require("../controller/lid.controller")
const { validate } = require("../middlewares/validate")
const { createLidValidation, updateLidValidation } = require("../validation/lid.validation.js")
const { idParamValidationSchema } = require("../validation/common.validation.js")

/**
 * @swagger
 * tags:
 *   - name: Lid
 *     description: Lid managment
 */

/**
 * @swagger
 * /lid:
 *   post:
 *     summary: New lid add
 *     tags:
 *       - Lid
 *     description: Lid qo'shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - phone_number
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number: 
 *                 type: string
 *               lid_stage_id:
 *                 type: string
 *               test_date: 
 *                 type: string
 *               trial_lesson_date:
 *                 type: string
 *               trial_lesson_time:
 *                 type: string
 *               trial_lesson_group_id:
 *                 type: string
 *               lid_status_id:
 *                 type: string
 *               cancel_reson_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created success
 *       400:
 *         description: Maydonlar to'ldirilmadi yoki validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */
lid.post("/", validate(createLidValidation, "body"), createLid)

/**
 * @swagger
 * /lid:
 *   get:
 *     summary: Mavjud barcha lid malumotini olish
 *     tags:
 *       - Lid
 *     responses:
 *       200:
 *         description: olindi
 *       404:
 *         description: Lid malumoti topilmadi
 *       500:
 *         description: Server xatosi
 */
lid.get("/", getAll)

/**
 * @swagger
 * /lid/{id}:
 *  get:
 *    summary: ID orqali olish
 *    tags:
 *      - Lid
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: ID kirit
 *    responses:
 *      200:
 *        description: ID bo'yicha malumot olindi
 *      404:
 *        description: ID boyicha malumot topilmadi
 *      500:
 *        description: Server xatosi
 */
lid.get("/:id", validate(idParamValidationSchema, "params"), getByIdLid)

/**
 * @swagger
 * /lid/{id}:
 *   patch:
 *     summary: Lid malumotini yangilash
 *     tags:
 *       - Lid
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Yangilash kerak bolgan lid ID si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number: 
 *                 type: string
 *               lid_stage_id:
 *                 type: string
 *               test_date: 
 *                 type: string
 *               trial_lesson_date:
 *                 type: string
 *               trial_lesson_time:
 *                 type: string
 *               trial_lesson_group_id:
 *                 type: string
 *               lid_status_id:
 *                 type: string
 *               cancel_reson_id:
 *                 type: string
 *     responses:
 *       200: 
 *         description: Yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
lid.patch("/:id", validate(updateLidValidation, "body"), updateLid)

/**
 * @swagger
 * /lid/{id}:
 *   delete:
 *     summary: Lid malumotini o'chirish
 *     tags:
 *       - Lid
 *     parameters:  
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: O'chirilishi kerak bo'lgan lidd ID si
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli o'chirildi
 *       404:
 *         description: Lid topilmadi
 *       500:
 *         description: Server xatosi
 */
lid.delete("/:id", validate(idParamValidationSchema, "params"), deleteLid)
module.exports = { lid }
