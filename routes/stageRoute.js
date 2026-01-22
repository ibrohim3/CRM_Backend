const { Router } = require("express")
const stage = Router()

const {
    createStage,
    getStages,
    getStage,
    updateStage,
    deleteStage,
    searchStage
} = require("../controller/stage.controller")
const { validate } = require("../middlewares/validate.js")
const { createStageValidation, updateStageValidation } = require("../validation/stage.validation.js")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")

/**
 * @swagger
 * tags:
 *  - name: Stage
 *    description: Stage management
 */
/**
 * @swagger
 * /stage:
 *  post:
 *    summary: stage qo'shish
 *    tags:
 *      - Stage
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *            properties: 
 *              name:
 *                type: string
 *    responses:
 *      201:
 *        description: Qo'shildi
 *      400:
 *        description: maydon to'ldirilmadi
 *      500:
 *        description: Server xatosi
*/
stage.post("/", validate(createStageValidation, "body"), createStage)

/**
 * @swagger
 * /stage:
 *   get:
 *     tags:
 *       - Stage
 *     responses: 
 *       200: 
 *         description: Barcha stage royxati olindi
 *       404:
 *         description: Topilmadi
 *       500: 
 *         description: Server xatosi
 */
stage.get("/", getStages)

/**
 * @swagger
 * /stage/{id}:
 *   get:
 *     summary: ID orqali olish
 *     tags:
 *       - Stage
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: stage ID si
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
stage.get("/:id", validate(idParamValidationSchema, "params"), getStage)

/**
 * @swagger
 * /stage/{id}:
 *   patch:
 *     summary: stage yangilash
 *     tags: 
 *       - Stage
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
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: topilmadi
 *       500:   
 *         description: Server xatosi
 */
stage.patch("/:id", validate(updateStageValidation, "body"), updateStage)

/**
 * @swagger
 * /stage/{id}:
 *   delete:
 *     summary: stage o'chirish
 *     tags: 
 *       - Stage
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
stage.delete("/:id", validate(idParamValidationSchema, "params"), deleteStage)

module.exports = { stage }