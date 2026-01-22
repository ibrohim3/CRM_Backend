const { Router } = require("express")
const reason = Router()
const {
    createReasonLid,
    getAllReasons,
    getOneReason,
    updateReason,
    deleteReason
} = require("../controller/reason.controller")
const { validate } = require("../middlewares/validate.js")
const { createReasonValidation, updateReasonValidation } = require("../validation/reason.validation.js")
const { idParamValidationSchema } = require("../validation/common.validation.js")

/**
 * @swagger
 * tags:
 *  - name: Reason
 *    description: Reason management
 */
/**
 * @swagger
 * /reason:
 *  post:
 *    summary: Reason qo'shish
 *    tags:
 *      - Reason
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - reason_lid
 *            properties: 
 *              reason_lid:
 *                type: string
 *    responses:
 *      201:
 *        description: Qo'shildi
 *      400:
 *        description: maydon to'ldirilmadi
 *      500:
 *        description: Server xatosi
 */
reason.post("/", validate(createReasonValidation, "body"), createReasonLid)

/**
 * @swagger
 * /reason:
 *   get:
 *     tags:
 *       - Reason
 *     responses: 
 *       200: 
 *         description: Barcha reason royxati olindi
 *       404:
 *         description: Topilmadi
 *       500: 
 *         description: Server xatosi
 */
reason.get("/", getAllReasons)

/**
 * @swagger
 * /reason/{id}:
 *   get:
 *     summary: ID orqali olish
 *     tags:
 *       - Reason
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: Reason ID si
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
reason.get("/:id", validate(idParamValidationSchema, "params"), getOneReason)

/**
 * @swagger
 * /reason/{id}:
 *   patch:
 *     summary: Reason yangilash
 *     tags: 
 *       - Reason
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: ID
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reason_lid:
 *                 type: string
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: topilmadi
 *       500:   
 *         description: Server xatosi
 */
reason.patch("/:id", validate(updateReasonValidation, "body"), updateReason)

/**
 * @swagger
 * /reason/{id}:
 *   delete:
 *     summary: Reasonni o'chirish
 *     tags: 
 *       - Reason
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: ID
 *     responses:
 *       200: 
 *         description: O'chirildi
 *       404: 
 *         description: Topilmadi
 *       500:   
 *         description: Server xatosi
 */
reason.delete("/:id", validate(idParamValidationSchema, "params"), deleteReason)
module.exports = { reason }